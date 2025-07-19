import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SETUP_TEST_CONFIG_SCHEMA, MODEL_PROVIDERS, MODELS } from "@/components/test/config/types"
import { useWatch, type UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useMemo } from "react";
import type z from "zod";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

export function AgentConfig({ form }: { form: UseFormReturn<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>> }) {
  const selectedModelProvider = useWatch({
    control: form.control,
    name: "agentConfig.modelProvider"
  });

  const availableModels = useMemo(() => {
    if (!selectedModelProvider) {
      return [];
    }
    
    return MODELS[selectedModelProvider];
  }, [selectedModelProvider]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Agent Config</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <FormField
          control={form.control}
          name="agentConfig.modelProvider"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Model Provider</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Select a Model Provider" />
                  </SelectTrigger>
                  <SelectContent>
                    { Object.entries(MODEL_PROVIDERS).map(([key, provider]) => (
                    <SelectItem key={key} value={provider.name}>
                      {provider.displayName}
                    </SelectItem>
                  )) }
                  </SelectContent>
                </Select>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agentConfig.model"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Model</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Select a Model" />
                  </SelectTrigger>
                  <SelectContent>
                    { availableModels.map((model) => (
                    <SelectItem key={model.name} value={model.name}>
                      {model.displayName}
                    </SelectItem>
                  )) }
                  </SelectContent>
                </Select>
              </div>
            </FormItem>
          )}
        />

        <div className="flex flex-row mt-6">
          <FormField
            control={form.control}
            name="agentConfig.maxIterations"
            render={({ field }) => (
              <div className="space-y-2 w-1/2">
                <FormLabel>Max Iterations</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"15"}>
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Select a max number of iterations" />
                  </SelectTrigger>
                  <SelectContent>
                    { ["10", "15", "20"].map((iterations) => (
                    <SelectItem key={`it-${iterations}`} value={iterations}>
                      {iterations}
                    </SelectItem>
                  )) }
                  </SelectContent>
                </Select>
              </div>
            )}
          />
          
          <FormField
            control={form.control}
            name="agentConfig.temperature"
            render={({ field }) => (
              <div className="items-center justify-between w-1/2">
                <FormLabel>Temperature</FormLabel>
                <div className="flex items-center mt-4 space-x-2">
                  <div className="w-5/6">
                    <Slider defaultValue={[1]} max={2} step={0.1} onValueChange={(value) => field.onChange(value[0])} />
                  </div>
                  <p className="flex justify-center w-1/6 text-sm">{field.value}</p>
                </div>
              </div>
            )}
          />
        </div>
        <Separator className="my-4"/>

        <div className="flex flex-row space-x-3">
          <div className="flex flex-col space-y-4 w-1/2">
            <FormField
              control={form.control}
              name="agentConfig.taskName"
              render={({ field }) => (
                <div className="space-y-2">
                  <FormLabel>Task Name</FormLabel>
                  <Input onChange={field.onChange} defaultValue={field.value} />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="agentConfig.taskDescription"
              render={({ field }) => (
                <div className="space-y-2 w-full">
                  <FormLabel>Task Description</FormLabel>
                  <Input onChange={field.onChange} defaultValue={field.value} />
                </div>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="agentConfig.systemPrompt"
            render={({ field }) => (
              <div className="space-y-2 w-1/2 flex-1 flex flex-col">
                <FormLabel>System Prompt</FormLabel>
                <Textarea 
                  onChange={field.onChange} 
                  className="flex-1 resize-none max-h-28 overflow-y-auto"
                  placeholder="Enter system prompt..."
                  defaultValue={field.value}
                />
              </div>
            )}
          />
        </div>
      </CardContent>
    </Card>
  )
}
