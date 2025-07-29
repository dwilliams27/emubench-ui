import { MemoryContext } from "@/components/test/config/memory/memory-context";
import { SETUP_TEST_CONFIG_SCHEMA } from "@/components/test/config/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UseFormReturn } from "react-hook-form";
import z from "zod";

export function MemoryConfig({ form }: { form: UseFormReturn<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>> }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Memory</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <MemoryContext form={form} />
      </CardContent>
    </Card>
  );
}
