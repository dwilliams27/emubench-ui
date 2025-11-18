import { AgentConfig } from "@/components/test/config/agent-config";
import { GameConfig } from "@/components/test/config/game-config";
import { GoalConfig } from "@/components/test/config/goal/goal-config";
import { MODEL_PROVIDERS, MODELS, PLATFORMS, GAMES, SETUP_TEST_CONFIG_SCHEMA, AVAILABLE_SAVE_STATES, GAME_CONTEXT, TASK_PRESETS, SYSTEM_PROMPT_PRESETS, GOAL_PRESETS } from "@/components/test/config/types";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";

const DEFAULT_TASK_PRESET = TASK_PRESETS[GAMES.ZELDA_WIND_WAKER].find(t => t.id === "ww-ladder")!;
const DEFAULT_SYSTEM_PROMPT_PRESET = SYSTEM_PROMPT_PRESETS.find(p => p.id === "default-agent")!;
const DEFAULT_GOAL_PRESET = GOAL_PRESETS[GAMES.ZELDA_WIND_WAKER].find(g => g.id === "ww-reach-ground")!;

export function TestConfigForm({ onSubmit, submitting, buttonText }: { onSubmit: (formData: z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>) => Promise<void>, submitting?: boolean, buttonText?: string }) {
  const form = useForm<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>>({
    resolver: zodResolver(SETUP_TEST_CONFIG_SCHEMA),
    defaultValues: {
      gameConfig: {
        platform: PLATFORMS.GAMECUBE.name,
        game: GAMES.ZELDA_WIND_WAKER,
        saveState: AVAILABLE_SAVE_STATES[PLATFORMS.GAMECUBE.name][GAMES.ZELDA_WIND_WAKER][1],
        gameMode: "turn-based"
      },
      agentConfig: {
        modelProvider: MODEL_PROVIDERS.GOOGLE.name,
        model: MODELS[MODEL_PROVIDERS.GOOGLE.name][0].name,
        gameContext: GAME_CONTEXT[GAMES.ZELDA_WIND_WAKER],
        maxIterations: "20",
        temperature: 1.0,
        contextHistorySize: 3,
        taskName: DEFAULT_TASK_PRESET.name,
        taskDescription: DEFAULT_TASK_PRESET.description,
        systemPrompt: DEFAULT_SYSTEM_PROMPT_PRESET.content
      },
      memoryConfig: {
        context: DEFAULT_GOAL_PRESET.memoryWatches,
      },
      goalConfig: {
        condition: DEFAULT_GOAL_PRESET.condition
      }
    }
  });

  const getFormErrors = () => {
    const errors = form.formState.errors;
    const errorMessages: string[] = [];
    
    const collectErrors = (obj: any, prefix = '') => {
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (value?.message) {
          errorMessages.push(`${prefix}${key}: ${value.message}`);
        } else if (typeof value === 'object' && value !== null) {
          collectErrors(value, `${prefix}${key}.`);
        }
      });
    };
    
    collectErrors(errors);
    return errorMessages;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 space-x-4">
          <GameConfig form={form} />
          <AgentConfig
            form={form}
            defaultTaskPresetId="ww-climb-down-ladder"
            defaultSystemPromptPresetId="default-agent"
          />
        </div>
        <GoalConfig
          form={form}
          defaultGoalPresetId="ww-reach-ground"
        />
        <div className="flex flex-col space-y-4">
          <Button type="submit" className="mx-auto" size="lg" disabled={submitting}>
            {buttonText || "Submit"}
          </Button>
          {getFormErrors().length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <h3 className="text-red-800 font-medium mb-2">Error</h3>
              <ul className="text-red-700 text-sm space-y-1">
                {getFormErrors().map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </form>
    </Form>
  );
}
