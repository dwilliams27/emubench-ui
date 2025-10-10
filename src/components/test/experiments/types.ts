import { MODEL_PROVIDERS, MODELS } from "@/components/test/config/types";
import { EmuBootConfig } from "@/shared/types";

export interface DeltaField {
  key: string;
  getAllowedValues?: (currentConfig: EmuBootConfig) => string[];
  toDisplayValue?: (key: string) => string;
}

export const DeltaFields: Record<string, DeltaField> = {
  "Game Context": {
    key: "gameContext",
  },
  "Model Provider": {
    key: "llmProvider",
    getAllowedValues: (_) => Object.keys(MODEL_PROVIDERS).map((key) => MODEL_PROVIDERS[key].displayName),
    toDisplayValue: (key) => MODEL_PROVIDERS[key as keyof typeof MODEL_PROVIDERS].displayName
  },
  "Model": {
    key: "model",
    getAllowedValues: (currentConfig) => MODELS[currentConfig.agentConfig.llmProvider].map((model) => model.displayName),
  },
  "Temperature": {
    key: "temperature"
  },
  "Task Name": {
    key: "taskName",
  },
  "Task Description": {
    key: "taskDescription",
  },
  "System Prompt": {
    key: "systemPrompt",
  }
}
