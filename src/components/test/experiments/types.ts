import { MODEL_PROVIDERS, MODELS, SHADERS } from "@/components/test/config/types";
import { EmuBootConfig } from "@/shared/types";

export interface DeltaField {
  key: string;
  configKey: 'agentConfig' | 'emulatorConfig';
  toValue: (input: string) => any;
  getAllowedValues?: (currentConfig: EmuBootConfig) => string[];
  toDisplayValue?: (key: any) => string;
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
    toDisplayValue: (key) => Object.values(MODEL_PROVIDERS).find(model => model.name === key)?.displayName || "Unknown"
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
    getAllowedValues: (_) => ["5", "10", "15", "20", "30", "50"],
    configKey: "agentConfig",
  },
  "Temperature": {
    toValue: (input: string) => parseFloat(input),
    key: "temperature",
    configKey: "agentConfig",
  },
  "Turn Memory": {
    toValue: (input: string) => parseInt(input),
    key: "turnMemoryLength",
    getAllowedValues: (_) => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    configKey: "agentConfig",
  },
  "Long Term Memory": {
    toValue: (input: string) => input === "true",
    toDisplayValue: (input: boolean) => input ? "true" : "false",
    key: "longTermMemory",
    getAllowedValues: (_) => ["true", "false"],
    configKey: "agentConfig",
  },
  "Multi-Action Turns": {
    toValue: (input: string) => input === "true",
    toDisplayValue: (input: boolean) => input ? "true" : "false",
    key: "multiInput",
    getAllowedValues: (_) => ["true", "false"],
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
