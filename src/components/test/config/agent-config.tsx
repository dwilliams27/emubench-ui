import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SETUP_TEST_CONFIG_SCHEMA, MODEL_PROVIDERS, MODELS, TASK_PRESETS, SYSTEM_PROMPT_PRESETS } from "@/components/test/config/types"
import { useWatch, type UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useMemo, useState, useEffect } from "react";
import type z from "zod";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function AgentConfig({
  form,
  defaultTaskPresetId = "custom",
  defaultSystemPromptPresetId = "custom"
}: {
  form: UseFormReturn<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>>,
  defaultTaskPresetId?: string,
  defaultSystemPromptPresetId?: string
}) {
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

  const selectedGame = useWatch({
    control: form.control,
    name: "gameConfig.game"
  });

  const selectedSaveState = useWatch({
    control: form.control,
    name: "gameConfig.saveState"
  });

  const [selectedTaskPreset, setSelectedTaskPreset] = useState<string>(defaultTaskPresetId);
  const [selectedSystemPromptPreset, setSelectedSystemPromptPreset] = useState<string>(defaultSystemPromptPresetId);

  const availableTaskPresets = useMemo(() => {
    if (!selectedGame || !selectedSaveState) {
      return [];
    }

    const taskPresets = TASK_PRESETS[selectedGame] || [];
    return taskPresets.filter(preset => {
      return preset.applicableSaveStates.some(saveState => 
        selectedSaveState.filename.startsWith(saveState)
      );
    });
  }, [selectedGame, selectedSaveState]);

  const handleTaskPresetChange = (presetId: string) => {
    setSelectedTaskPreset(presetId);

    if (presetId === "custom") {
      return;
    }

    const preset = availableTaskPresets.find(p => p.id === presetId);
    if (preset) {
      form.setValue("agentConfig.taskName", preset.name);
      form.setValue("agentConfig.taskDescription", preset.description);
    }
  };

  const handleSystemPromptPresetChange = (presetId: string) => {
    setSelectedSystemPromptPreset(presetId);

    if (presetId === "custom") {
      return;
    }

    const preset = SYSTEM_PROMPT_PRESETS.find(p => p.id === presetId);
    if (preset) {
      form.setValue("agentConfig.systemPrompt", preset.content);
    }
  };

  // Auto-select first task preset when save state changes (unless set to custom)
  useEffect(() => {
    if (selectedTaskPreset === "custom") {
      return;
    }

    if (availableTaskPresets.length > 0) {
      const firstPreset = availableTaskPresets[0];
      setSelectedTaskPreset(firstPreset.id);
      form.setValue("agentConfig.taskName", firstPreset.name);
      form.setValue("agentConfig.taskDescription", firstPreset.description);
    }
  }, [availableTaskPresets, selectedTaskPreset, form]);

  return (
    <Card className="w-full md:h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>Agent</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 md:flex-1 flex flex-col md:overflow-hidden">
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

        <div className="flex flex-row mt-6 justify-around">
          <FormField
            control={form.control}
            name="agentConfig.maxIterations"
            render={({ field }) => (
              <div className="space-y-2 w-1/3 flex flex-col items-center">
                <FormLabel className="block text-center">Max Iterations</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"15"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a max number of iterations" />
                  </SelectTrigger>
                  <SelectContent>
                    { ["5", "10", "15", "20", "30", "50"].map((iterations) => (
                    <SelectItem key={`it-${iterations}`} value={iterations} defaultValue={field.value}>
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
              <div className="w-1/3 flex flex-col items-center">
                <FormLabel className="block text-center">Temperature</FormLabel>
                <div className="flex flex-col items-center mt-4 space-y-2 w-full justify-center">
                  <Slider defaultValue={[1]} max={2} step={0.1} onValueChange={(value) => field.onChange(value[0])} />
                  <p className="flex justify-center w-1/6 text-sm">{field.value}</p>
                </div>
              </div>
            )}
          />
        </div>

        <div className="flex flex-row mt-6 justify-around">
          <FormField
            control={form.control}
            name="agentConfig.turnMemoryLength"
            render={({ field }) => (
              <div className="w-1/3 space-y-2">
                <FormLabel className="block text-center">Turn Memory</FormLabel>
                <div className="flex flex-row items-center">
                  <div className="ml-auto">{field.value}</div>
                  <div className="mr-auto flex flex-col space-y-1">
                    <Button type="button" variant="outline" className="ml-2 h-2" onClick={() => field.onChange(Math.min(10, field.value + 1))}>+</Button>
                    <Button type="button" variant="outline" className="ml-2 h-2" onClick={() => field.onChange(Math.max(0, field.value - 1))}>-</Button>
                  </div>
                </div>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="agentConfig.longTermMemory"
            render={({ field }) => (
              <div className="w-1/3 space-y-2">
                <FormLabel className="block text-center">Long Term Memory</FormLabel>
                <div className="flex">
                  <Checkbox
                    className="mx-auto mt-2 w-6 h-6"
                    checked={field.value}
                    onCheckedChange={(value) => field.onChange(value)}
                    aria-label="Enable long term memory"
                  />
                </div>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="agentConfig.multiInput"
            render={({ field }) => (
              <div className="w-1/3 space-y-2">
                <FormLabel className="block text-center">Multi-Action Turns</FormLabel>
                <div className="flex">
                  <Checkbox
                    className="mx-auto mt-2 w-6 h-6"
                    checked={field.value}
                    onCheckedChange={(value) => field.onChange(value)}
                    aria-label="Enable multi-action turns"
                  />
                </div>
              </div>
            )}
          />
        </div>

        <Separator className="my-4"/>

        <div className="flex flex-col md:flex-row gap-3 flex-1 min-h-0">
          <div className="flex flex-col space-y-4 w-full md:w-1/2 min-w-0 md:min-h-0">
            <div className="space-y-2">
              <FormLabel>Task</FormLabel>
              <Select onValueChange={handleTaskPresetChange} value={selectedTaskPreset}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a task preset" />
                </SelectTrigger>
                <SelectContent>
                  {availableTaskPresets.map(preset => (
                    <SelectItem key={preset.id} value={preset.id}>
                      {preset.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="custom">Custom Task</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedTaskPreset === "custom" && (
              <FormField
                control={form.control}
                name="agentConfig.taskName"
                render={({ field }) => (
                  <div className="space-y-2">
                    <FormLabel>Task Name</FormLabel>
                    <Input onChange={field.onChange} value={field.value} />
                  </div>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="agentConfig.taskDescription"
              render={({ field }) => (
                <div className="space-y-2 h-48 md:flex-1 flex flex-col md:min-h-0">
                  <FormLabel>Task Description</FormLabel>
                  <Textarea
                    onChange={field.onChange}
                    value={field.value}
                    className="flex-1 resize-none overflow-y-auto md:min-h-0"
                  />
                </div>
              )}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col space-y-4 min-w-0 md:min-h-0">
            <div className="space-y-2">
              <FormLabel>System Prompt Preset</FormLabel>
              <Select onValueChange={handleSystemPromptPresetChange} value={selectedSystemPromptPreset}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a prompt preset" />
                </SelectTrigger>
                <SelectContent>
                  {SYSTEM_PROMPT_PRESETS.map(preset => (
                    <SelectItem key={preset.id} value={preset.id}>
                      {preset.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <FormField
              control={form.control}
              name="agentConfig.systemPrompt"
              render={({ field }) => (
                <div className="space-y-2 h-48 md:flex-1 flex flex-col md:min-h-0">
                  <FormLabel>System Prompt</FormLabel>
                  <Textarea
                    onChange={field.onChange}
                    value={field.value}
                    className="flex-1 resize-none overflow-y-auto md:min-h-0"
                    placeholder="Enter system prompt..."
                  />
                </div>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
