import { emuEvaluateCondition } from "@/shared/conditions/evaluate";
import { EmuCondition } from "@/shared/conditions/types";
import { useMemo } from "react";

export function TestConditionResult({ condition }: { condition?: EmuCondition }) {
  const result = useMemo(() => {
    if (!condition) {
      return "No condition";
    }
    emuEvaluateCondition(condition)
  }, [condition]);
  return (
    <div>
      {result}
    </div>
  );
}
