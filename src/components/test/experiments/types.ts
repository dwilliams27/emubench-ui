import { MODEL_PROVIDERS, MODELS, SHADERS } from "@/components/test/config/types";
import { EmuBootConfig } from "@/shared/types";

export interface DeltaField {
  key: string;
  configKey: 'agentConfig' | 'emulatorConfig';
  toValue: (input: string) => any;
  getAllowedValues?: (currentConfig: EmuBootConfig) => string[];
  toDisplayValue?: (key: string) => string;
}

export const DeltaFields: Record<string, DeltaField> = {
  "Game Context": {
    key: "gameContext",
    configKey: "agentConfig",
    toValue: (input: string) => input,
  },
  "Model Provider": {
    key: "llmProvider",
    configKey: "agentConfig",
    toValue: (input: string) => input,
    getAllowedValues: (_) => Object.keys(MODEL_PROVIDERS).map((key) => MODEL_PROVIDERS[key].name),
    toDisplayValue: (key) => MODEL_PROVIDERS[key as keyof typeof MODEL_PROVIDERS].displayName
  },
  "Model": {
    key: "model",
    configKey: "agentConfig",
    toValue: (input: string) => input,
    getAllowedValues: (currentConfig) => MODELS[currentConfig.agentConfig.llmProvider].map((model) => model.name)
  },
  "Shader": {
    key: "shader",
    configKey: "emulatorConfig",
    toValue: (input: string) => input,
    getAllowedValues: (_) => SHADERS
  },
  "Max Iterations": {
    toValue: (input: string) => parseInt(input),
    key: "maxIterations",
    configKey: "agentConfig",
  },
  "Temperature": {
    toValue: (input: string) => parseFloat(input),
    key: "temperature",
    configKey: "agentConfig",
  },
  "Turn Context Size": {
    toValue: (input: string) => parseInt(input),
    key: "contextHistorySize",
    configKey: "agentConfig",
  },
  "Task Name": {
    toValue: (input: string) => input,
    key: "taskName",
    configKey: "agentConfig",
  },
  "Task Description": {
    toValue: (input: string) => input,
    key: "taskDescription",
    configKey: "agentConfig",
  },
  "System Prompt": {
    toValue: (input: string) => input,
    key: "systemPrompt",
    configKey: "agentConfig",
  }
}
