import { GoalCanvas } from "@/components/test/config/goal/goal-canvas";
import { GoalItem } from "@/components/test/config/goal/goal-item";
import { GoalBank } from "@/components/test/config/goal/goal-bank";
import { ContextMemoryItem } from "@/components/test/config/memory/memory-context";
import { SETUP_TEST_CONFIG_SCHEMA } from "@/components/test/config/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { emuAddOperationFactory, emuAndOperationFactory, emuEqualsOperationFactory, emuGreaterThanOperationFactory, emuLessThanOperationFactory, emuMultiplyOperationFactory, emuNotOperationFactory, emuOrOperationFactory } from "@/shared/conditions/operations";
import { EmuConditionInput, EmuConditionInputSet, EmuConditionOperand, EmuConditionOperation } from "@/shared/conditions/types";
import { CANVAS_ITEM_ID, EMU_OPERATION_ID, genId } from "@/shared/utils/id";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, DragCancelEvent, TouchSensor, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useMemo, useState } from "react";
import { UseFormReturn, useWatch } from "react-hook-form";
import z from "zod";
import { ADD_PRIMITIVE_GOAL_INPUT_SCHEMA, AddPrimitiveGoalInputModal } from "@/components/test/config/goal/add-primitive-goal-input-modal";
import { Button } from "@/components/ui/button";
import { convertEmuExpressionToCondition } from "@/shared/conditions/evaluate";

export interface ItemData {
  label: string;
  fromBank: boolean;
  type: string;
  primitiveValue?: string | number | boolean;
  input?: EmuConditionInput;
  operation?: EmuConditionOperation;
  parentheses?: {
    open: boolean;
    close: boolean;
  };
}
export interface BankItem {
  id: string;
  data: ItemData;
}

export interface CanvasItem {
  id: string;
  data: ItemData;
  x: number;
  y: number;
  width?: number;
  height?: number;
}

function contextMemoryToInputs(context?: Record<string, ContextMemoryItem>): EmuConditionInputSet {
  const inputs: Record<string, any> = {};
  Object.entries(context || {}).forEach(([key, value]) => {
    inputs[key] = {
      name: value.name,
      type: value.type,
      pointerDepth: value.pointerDepth,
      rawValue: -1,
    };
  });
  return inputs;
}

function canvasItemsToEmuCondition(items: CanvasItem[]) {
  const expression = items.map(item => {
    const { data } = item;
    const part: EmuConditionOperand = {
      primitive: data.primitiveValue,
      input: data.input,
      conditionPart: data.operation && { operation: data.operation },
      parentheses: data.parentheses && { open: data.parentheses.open },
    };
    return part;
  });
  return convertEmuExpressionToCondition(expression);
}

const baseOperations = [
  emuAddOperationFactory(),
  emuMultiplyOperationFactory(),
  emuEqualsOperationFactory(),
  emuGreaterThanOperationFactory(),
  emuLessThanOperationFactory(),
  emuAndOperationFactory(),
  emuOrOperationFactory(),
  emuNotOperationFactory(),
];

export function GoalConfig({ form }: { form: UseFormReturn<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>> }) {
  const contextInputs = contextMemoryToInputs(useWatch({
    control: form.control,
    name: "memoryConfig.context"
  }));

  const [canvasItems, setCanvasItems] = useState<CanvasItem[]>([]);
  const [activeId, setActiveId] = useState<string | number | null>(null);
  const [addFormOpen, setAddFormOpen] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 20,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const operationBankItems = useMemo(() => {
    return baseOperations.map((operation) => ({
      id: operation.id,
      data: {
        label: operation.name,
        fromBank: true,
        operation,
        type: 'operation'
      }
    }));
  }, [baseOperations]);

  const contextInputBankItems = useMemo(() => {
    return Object.entries(contextInputs).map(([key, input]) => ({
      id: key,
      data: {
        label: String(input.name),
        fromBank: true,
        input,
        type: 'input'
      }
    }));
  }, [contextInputs]);

  const parenthesesBankItems = useMemo(() => {
    return [
      {
        id: genId(EMU_OPERATION_ID),
        data: {
          label: "(",
          fromBank: true,
          type: 'parentheses',
          parentheses: { open: true, close: false }
        }
      },
      {
        id: genId(EMU_OPERATION_ID),
        data: {
          label: ")",
          fromBank: true,
          type: 'parentheses',
          parentheses: { open: false, close: true }
        }
      }
    ];
  }, []);

  const activeItem = useMemo(() => {
    if (!activeId) return null;
    const item = canvasItems.find(i => i.id === activeId)
      || operationBankItems.find(i => i.id === activeId)
      || contextInputBankItems.find(i => i.id === activeId)
      || parenthesesBankItems.find(i => i.id === activeId);
    return item;
  }, [activeId, canvasItems, operationBankItems, contextInputBankItems, parenthesesBankItems]);

  function handleDragCancel(event: DragCancelEvent) {
    setActiveId(null);
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    
    if (over && over.id === 'canvas') {
      const activeData: ItemData | undefined = active.data.current as any;
      const canvasRect = over.rect;
      const activeRect = active.rect.current.translated;
      const verticalCenter = canvasRect.height / 2 - (activeRect?.height || 0) / 2;
      
      if (activeData?.fromBank && activeRect && canvasRect) {
        const x = activeRect.left - canvasRect.left;
        const y = activeRect.top - canvasRect.top;
        
        const newItem = {
          id: genId(CANVAS_ITEM_ID),
          data: { ...activeData, fromBank: false },
          x: Math.max(0, x),
          y: verticalCenter,
        };
        
        setCanvasItems([...canvasItems, newItem]);
      } else {
        const updatedItems = canvasItems.map(item => {
          if (item.id === active.id) {
            return {
              ...item,
              x: item.x + event.delta.x,
              y: verticalCenter
            };
          }
          return item;
        });
        setCanvasItems(updatedItems);
      }
    } else {
      const activeData: ItemData | undefined = active.data.current as any;
      if (!activeData?.fromBank) {
        setCanvasItems(canvasItems.filter(item => item.id !== active.id));
      }
    }

    setActiveId(null);
  }

  const onAddNewItem = async (formData: z.infer<typeof ADD_PRIMITIVE_GOAL_INPUT_SCHEMA>) => {
    setAddFormOpen(false);

    const newItem = {
      id: genId(CANVAS_ITEM_ID),
      data: {
        label: formData.value,
        type: formData.type,
        primitiveValue: formData.value,
        fromBank: false
      },
      x: 0,
      y: 0,
    };
    
    setCanvasItems([...canvasItems, newItem]);
  }

  // Result
  const { result: expressionResult, error: expressionError } = useMemo(() => {
    if (!canvasItems || canvasItems.length === 0) {
      return {};
    }
    const sorted = canvasItems.slice().sort((a, b) => a.x - b.x);
    const result = canvasItemsToEmuCondition(sorted);
    form.setValue("goalConfig.condition", result.result || { inputs: {}, logic: {} });
    return result;
  }, [canvasItems]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Goal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd} 
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 justify-between items-center">
              <GoalBank items={contextInputBankItems} />
              <div className="flex items-center">
                <AddPrimitiveGoalInputModal onSubmit={onAddNewItem} open={addFormOpen} close={() => setAddFormOpen(false)}>
                  <Button variant="outline" onClick={() => setAddFormOpen(true)}>+ Add Primitive</Button>
                </AddPrimitiveGoalInputModal>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 justify-between">
              <GoalBank items={operationBankItems} />
              <GoalBank items={parenthesesBankItems} />
            </div>
            <GoalCanvas items={canvasItems} error={expressionError} result={expressionResult} />
          </div>
          <DragOverlay dropAnimation={null}>
            {activeItem ? (
              <div className="opacity-80 cursor-grabbing">
                <GoalItem item={activeItem} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
        <div className="goal-preview">
          {expressionError && <div className="error">{expressionError}</div>}
        </div>
      </CardContent>
    </Card>
  );
}
