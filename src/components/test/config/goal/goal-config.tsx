import { GoalCanvas } from "@/components/test/config/goal/goal-canvas";
import { GoalItem } from "@/components/test/config/goal/goal-item";
import { GoalBank } from "@/components/test/config/goal/goal-bank";
import { ContextMemoryItem } from "@/components/test/config/memory/memory-context";
import { SETUP_TEST_CONFIG_SCHEMA } from "@/components/test/config/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { emuAddOperationFactory, emuAndOperationFactory, emuEqualsOperationFactory, emuGreaterThanOperationFactory, emuLessThanOperationFactory, emuMultiplyOperationFactory, emuNotOperationFactory, emuOrOperationFactory } from "@/shared/conditions/operations";
import { EmuConditionInput, EmuConditionInputSet, EmuConditionOperation } from "@/shared/conditions/types";
import { CANVAS_ITEM_ID, genId } from "@/shared/utils/id";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { useMemo, useState } from "react";
import { UseFormReturn, useWatch } from "react-hook-form";
import z from "zod";

export interface ItemData {
  label: string;
  fromBank: boolean;
  input?: EmuConditionInput;
  operator?: EmuConditionOperation;
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

const baseOperators = [
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

  const operatorBankItems = useMemo(() => {
    return baseOperators.map((operation) => ({
      id: operation.id,
      data: {
        label: operation.name,
        fromBank: true,
        operation
      }
    }));
  }, [baseOperators]);

  const contextInputBankItems = useMemo(() => {
    return Object.entries(contextInputs).map(([key, input]) => ({
      id: key,
      data: {
        label: String(input.parsedValue),
        fromBank: true,
        input
      }
    }));
  }, [contextInputs]);

  const activeItem = useMemo(() => {
    if (!activeId) return null;
    const item = canvasItems.find(i => i.id === activeId)
      || operatorBankItems.find(i => i.id === activeId)
      || contextInputBankItems.find(i => i.id === activeId);
    return item;
  }, [activeId, canvasItems, operatorBankItems, contextInputBankItems]);

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    
    if (over && over.id === 'canvas') {
      const activeData: ItemData | undefined = active.data.current as any;
      
      if (activeData?.fromBank) {
        const newItem = {
          id: genId(CANVAS_ITEM_ID),
          data: activeData,
          x: event.delta.x,
          y: event.delta.y
        };
        
        setCanvasItems([...canvasItems, newItem]);
      }
    }
    
    setActiveId(null);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Goals</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <div className="flex">
            <GoalBank items={contextInputBankItems} />
            <GoalBank items={operatorBankItems} />
            <GoalCanvas items={canvasItems} />
          </div>
          <DragOverlay>
            {activeItem ? (
              <div className="opacity-80 cursor-grabbing">
                <GoalItem item={activeItem} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </CardContent>
    </Card>
  );
}
