import { MODEL_PROVIDERS, MODELS } from "@/components/test/config/types";
import { EmuBootConfig } from "@/shared/types";

export interface DeltaField {
  key: string;
  toValue: (input: string) => any;
  getAllowedValues?: (currentConfig: EmuBootConfig) => string[];
  toDisplayValue?: (key: string) => string;
}

export const DeltaFields: Record<string, DeltaField> = {
  "Game Context": {
    key: "gameContext",
    toValue: (input: string) => input,
  },
  "Model Provider": {
    key: "llmProvider",
    toValue: (input: string) => input,
    getAllowedValues: (_) => Object.keys(MODEL_PROVIDERS).map((key) => MODEL_PROVIDERS[key].displayName),
    toDisplayValue: (key) => MODEL_PROVIDERS[key as keyof typeof MODEL_PROVIDERS].displayName
  },
  "Model": {
    key: "model",
    toValue: (input: string) => input,
    getAllowedValues: (currentConfig) => MODELS[currentConfig.agentConfig.llmProvider].map((model) => model.displayName),
  },
  "Max Iterations": {
    toValue: (input: string) => parseInt(input),
    key: "maxIterations"
  },
  "Temperature": {
    toValue: (input: string) => parseFloat(input),
    key: "temperature"
  },
  "Turn Context Size": {
    toValue: (input: string) => parseInt(input),
    key: "contextHistorySize"
  },
  "Task Name": {
    toValue: (input: string) => input,
    key: "taskName",
  },
  "Task Description": {
    toValue: (input: string) => input,
    key: "taskDescription",
  },
  "System Prompt": {
    toValue: (input: string) => input,
    key: "systemPrompt",
  }
}
