import { CanvasItem } from "@/components/test/config/goal/goal-config";
import { convertEmuExpressionToCondition } from "@/shared/conditions/evaluate";
import { EmuCondition, EmuRawExpressionPart } from "@/shared/conditions/types";
import { useMemo } from "react";

// primitiveValue?: string | number | boolean;
//   input?: EmuConditionInput;
//   operation?: EmuConditionOperation;
//   parentheses?: {
//     open: boolean;
//     close: boolean;
//   };

export function canvasItemsToEmuCondition(items: CanvasItem[]): EmuCondition {
  const expression = items.map(item => {
    const { data } = item;
    const part: EmuRawExpressionPart = {
      primitiveValue: data.primitiveValue,
      input: data.input,
      operation: data.operation,
      parentheses: data.parentheses ? { open: data.parentheses.open } : undefined,
    };
    return part;
  });
  console.log("$$$$$");
  console.log(convertEmuExpressionToCondition(expression));
}

export function GoalPreview({ items }: { items: CanvasItem[] }) {
  const preview = useMemo(() => {
    if (!items || items.length === 0) {
      return "No Goal set";
    }
    const sorted = items.slice().sort((a, b) => a.x - b.x);
    canvasItemsToEmuCondition(sorted);
    return sorted.map(item => item.data.label).join(' ');
  }, [items]);

  return (
    <div className="goal-preview">
      {items.length > 0 ? preview : "No Goal set"}
    </div>
  );
}

