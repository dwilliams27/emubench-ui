import { ContextMemoryItem } from "@/components/test/config/memory/memory-context";
import { SETUP_TEST_CONFIG_SCHEMA } from "@/components/test/config/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmuConditionInputSet } from "@/shared/conditions/types";
import { UseFormReturn, useWatch } from "react-hook-form";
import z from "zod";

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

export function GoalConfig({ form }: { form: UseFormReturn<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>> }) {
  const contextInputs = contextMemoryToInputs(useWatch({
    control: form.control,
    name: "memoryConfig.context"
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Goals</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
      </CardContent>
    </Card>
  );
}
