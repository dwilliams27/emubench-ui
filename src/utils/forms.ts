import { DEBUG_GAME_MAP, SETUP_TEST_CONFIG_SCHEMA } from "@/components/test/config/types";
import { EmuBootConfig } from "@/shared/types";
import z from "zod";

export function configFormToEmuBootConfig(formData: z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>): EmuBootConfig {
  return {
    testConfig: {
      gameId: DEBUG_GAME_MAP[formData.gameConfig.game],
      // @ts-ignore Lazy
      platform: formData.gameConfig.platform,
      mode: formData.gameConfig.gameMode,
      startStateFilename: formData.gameConfig.saveState.filename,
      contextMemWatches: formData.memoryConfig.context ? Object.entries(formData.memoryConfig.context).reduce((acc: Record<string, any>, [key, value]) => {
        // TODO: Pointer depth implementation
        acc[key] = {
          address: value.address,
          size: value.size,
        };
        return acc;
      }, {}) : {},
      // TODO: Remove
      endStateMemWatches: {}
    },
    agentConfig: {
      systemPrompt: formData.agentConfig.systemPrompt,
      gameContext: formData.agentConfig.gameContext,
      // @ts-ignore Lazy
      llmProvider: formData.agentConfig.modelProvider,
      model: formData.agentConfig.model,
      maxIterations: parseInt(formData.agentConfig.maxIterations),
      temperature: formData.agentConfig.temperature,
      task: {
        name: formData.agentConfig.taskName,
        description: formData.agentConfig.taskDescription
      }
    },
    goalConfig: {
      condition: {
        inputs: Object.entries(formData.memoryConfig.context || {}).reduce((acc: Record<string, any>, [key, value]) => {
          acc[key] = {
            name: value.name,
            type: value.type,
          };
          return acc;
        }, {}),
        logic: formData.goalConfig?.condition?.logic || {}
      }
    }
  };
}
