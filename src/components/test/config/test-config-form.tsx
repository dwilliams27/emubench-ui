import { AgentConfig } from "@/components/test/config/agent-config";
import { GameConfig } from "@/components/test/config/game-config";
import { GoalConfig } from "@/components/test/config/goal/goal-config";
import { MemoryConfig } from "@/components/test/config/memory/memory-config";
import { MODEL_PROVIDERS, MODELS, PLATFORMS, GAMES, SETUP_TEST_CONFIG_SCHEMA, AVAILABLE_SAVE_STATES, GAME_CONTEXT } from "@/components/test/config/types";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";

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
        taskName: "Find and climb down the ladder",
        taskDescription: "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
        systemPrompt: `You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.`
      },
      memoryConfig: {
        context: {},
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
          <AgentConfig form={form} />
        </div>
        <MemoryConfig form={form} />
        <GoalConfig form={form} />
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
