import { GoalCanvas } from "@/components/test/config/goal/goal-canvas";
import { GoalItem } from "@/components/test/config/goal/goal-item";
import { GoalBank } from "@/components/test/config/goal/goal-bank";
import { ContextMemoryItem } from "@/components/test/config/memory/memory-context";
import { SETUP_TEST_CONFIG_SCHEMA, GOAL_PRESETS } from "@/components/test/config/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { emuAddOperationFactory, emuAndOperationFactory, emuEqualsOperationFactory, emuGreaterThanOperationFactory, emuLessThanOperationFactory, emuMultiplyOperationFactory, emuNotOperationFactory, emuOrOperationFactory } from "@/shared/conditions/operations";
import { EmuConditionInput, EmuConditionInputSet, EmuConditionOperand, EmuConditionOperation } from "@/shared/conditions/types";
import { CANVAS_ITEM_ID, EMU_OPERATION_ID, genId } from "@/shared/utils/id";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, DragCancelEvent, TouchSensor, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useMemo, useState, useEffect } from "react";
import { UseFormReturn, useWatch } from "react-hook-form";
import z from "zod";
import { ADD_PRIMITIVE_GOAL_INPUT_SCHEMA, AddPrimitiveGoalInputModal } from "@/components/test/config/goal/add-primitive-goal-input-modal";
import { Button } from "@/components/ui/button";
import { convertEmuExpressionToCondition } from "@/shared/conditions/evaluate";
import { conditionToPreview } from "@/shared/conditions/preview";
import { MemoryContext } from "@/components/test/config/memory/memory-context";

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
      pointerOffsets: value.pointerOffsets,
      rawValue: value.type === "chars" ? "x" : -1,
    };
  });
  return inputs;
}

function canvasItemsToEmuCondition(items: CanvasItem[]) {
  const expression = items.map(item => {
    const { data } = item;
    switch (data.type) {
      case 'string':
        data.primitiveValue = data.primitiveValue || "";
        break;
      case 'number':
        data.primitiveValue = data.primitiveValue ? Number(data.primitiveValue) : 0;
        break;
      case 'boolean':
        data.primitiveValue = data.primitiveValue === 'true' || data.primitiveValue === true;
        break;
    }
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

export function GoalConfig({
  form,
  defaultGoalPresetId = "custom"
}: {
  form: UseFormReturn<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>>,
  defaultGoalPresetId?: string
}) {
  const selectedGame = useWatch({
    control: form.control,
    name: "gameConfig.game"
  });

  const selectedSaveState = useWatch({
    control: form.control,
    name: "gameConfig.saveState"
  });

  const [selectedGoalPreset, setSelectedGoalPreset] = useState<string>(defaultGoalPresetId);

  const availableGoalPresets = useMemo(() => {
    if (!selectedGame || !selectedSaveState) {
      return [];
    }

    const goalPresets = GOAL_PRESETS[selectedGame] || [];
    return goalPresets.filter(preset => {
      return preset.applicableSaveStates.some(saveState => 
        selectedSaveState.filename.startsWith(saveState)
      );
    });
  }, [selectedGame, selectedSaveState]);

  // Auto-select first goal preset when save state changes (unless set to custom)
  useEffect(() => {
    if (selectedGoalPreset === "custom") {
      return;
    }

    if (availableGoalPresets.length > 0) {
      const firstPreset = availableGoalPresets[0];
      setSelectedGoalPreset(firstPreset.id);
      handleGoalPresetChange(firstPreset.id);
    }
  }, [availableGoalPresets, selectedGoalPreset]);

  const handleGoalPresetChange = (presetId: string) => {
    setSelectedGoalPreset(presetId);

    if (presetId === "custom") {
      return;
    }

    const preset = availableGoalPresets.find(p => p.id === presetId);
    if (preset) {
      form.setValue("memoryConfig.context", preset.memoryWatches);
      form.setValue("goalConfig.successCondition", preset.successCondition);
      form.setValue("goalConfig.failCondition", preset.failCondition);
      form.setValue("goalConfig.rewardFunction", preset.rewardFunction);
      form.setValue("goalConfig.rewardDescription", preset.rewardDescription);
    }
  };

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

    console.log('Adding new item:', formData);
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
    form.setValue("goalConfig.successCondition", result.result || { inputs: {}, logic: {} });
    return result;
  }, [canvasItems]);

  const selectedPresetData = useMemo(() => {
    if (selectedGoalPreset === "custom") return null;
    return availableGoalPresets.find(p => p.id === selectedGoalPreset);
  }, [selectedGoalPreset, availableGoalPresets]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Goal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Goal Preset Dropdown */}
        <div className="space-y-2">
          <Select onValueChange={handleGoalPresetChange} value={selectedGoalPreset}>
            <SelectTrigger>
              <SelectValue placeholder="Select a goal preset" />
            </SelectTrigger>
            <SelectContent>
              {availableGoalPresets.map(preset => (
                <SelectItem key={preset.id} value={preset.id}>
                  {preset.name}
                </SelectItem>
              ))}
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Show preset info when a preset is selected */}
        {selectedPresetData && (
          <div className="space-y-3 rounded-lg">
            <div>
              <p className="text-sm font-medium mb-1">Description</p>
              <p className="text-sm">{selectedPresetData.description}</p>
            </div>
            { selectedPresetData.rewardFunction && (
              <div>
                <p className="text-sm font-medium mb-1">Reward Function:</p>
                <code className="text-sm bg-background px-2 py-1 rounded">
                  {conditionToPreview(selectedPresetData.rewardFunction)}
                </code>
              </div>
            )}
            { selectedPresetData.successCondition && (
              <div>
                <p className="text-sm font-medium mb-1">Task Succeeds If:</p>
                <code className="text-sm bg-background px-2 py-1 rounded">
                  {conditionToPreview(selectedPresetData.successCondition)}
                </code>
              </div>
            )}
            { selectedPresetData.failCondition && (
              <div>
                <p className="text-sm font-medium mb-1">Task Immediately Fails If:</p>
                <code className="text-sm bg-background px-2 py-1 rounded">
                  {conditionToPreview(selectedPresetData.failCondition)}
                </code>
              </div>
            )}
          </div>
        )}

        {/* Show custom Memory & Goal builder when Custom is selected */}
        {selectedGoalPreset === "custom" && (
          <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
            {/* Memory Table */}
            <div className="flex-1 min-w-0 overflow-auto">
              <MemoryContext form={form} />
            </div>

            {/* Goal Canvas */}
            <div className="flex-1 min-w-0 space-y-2 overflow-auto">
              <DndContext
                sensors={sensors}
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
                onDragCancel={handleDragCancel}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-4 pt-4 md:flex-row md:space-y-0 justify-between items-center">
                    <div className="flex items-center mr-auto">
                      <AddPrimitiveGoalInputModal onSubmit={onAddNewItem} open={addFormOpen} close={() => setAddFormOpen(false)}>
                        <Button variant="outline" onClick={() => setAddFormOpen(true)}>+ Add Primitive</Button>
                      </AddPrimitiveGoalInputModal>
                    </div>
                    <GoalBank items={contextInputBankItems} />
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
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
