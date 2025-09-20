import { AgentConfig } from "@/components/test/config/agent-config";
import { GameConfig } from "@/components/test/config/game-config";
import { GoalConfig } from "@/components/test/config/goal/goal-config";
import { MemoryConfig } from "@/components/test/config/memory/memory-config";
import { MODEL_PROVIDERS, MODELS, PLATFORMS, GAMES, SETUP_TEST_CONFIG_SCHEMA, AVAILABLE_SAVE_STATES, GAME_CONTEXT } from "@/components/test/config/types";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useApi } from "@/contexts/api-context";
import { EmuError } from "@/shared/types";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const DEBUG_GAME_MAP = {
  [GAMES.HARVEST_MOOON]: "G4AEE9",
  [GAMES.ZELDA_WIND_WAKER]: "GZLE01",
  [GAMES.KIRBY_AIR_RIDE]: "GKYE01",
  [GAMES.SIMPSONS_HIT_AND_RUN]: "GHQE7D",
};

export function TestConfigForm() {
  const { api } = useApi();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testId, setTestId] = useState('');
  const [error, setError] = useState('');
  
  const form = useForm<z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>>({
    resolver: zodResolver(SETUP_TEST_CONFIG_SCHEMA),
    defaultValues: {
      gameConfig: {
        platform: PLATFORMS.GAMECUBE.name,
        game: GAMES.ZELDA_WIND_WAKER,
        saveState: AVAILABLE_SAVE_STATES[PLATFORMS.GAMECUBE.name][GAMES.ZELDA_WIND_WAKER][0],
        gameMode: "turn-based"
      },
      agentConfig: {
        modelProvider: MODEL_PROVIDERS.GOOGLE.name,
        model: MODELS[MODEL_PROVIDERS.GOOGLE.name][0].name,
        gameContext: GAME_CONTEXT[GAMES.ZELDA_WIND_WAKER],
        maxIterations: "20",
        temperature: 1.0,
        taskName: "Start a new game",
        taskDescription: "Navigate through the main menu and start a new game.",
        systemPrompt: `You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Look extremely closely at the menus to see what option is selected. Complete the objective.`
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

  const onSubmit = async (formData: z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>) => {
    setIsSubmitting(true);
    console.log("Form submitted:", formData);
    const transformedData = {
      testConfig: {
        gameId: DEBUG_GAME_MAP[formData.gameConfig.game],
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
        endStateMemWatches: []
      },
      agentConfig: {
        systemPrompt: formData.agentConfig.systemPrompt,
        gameContext: formData.agentConfig.gameContext,
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

    try {
      const result = await api.setupTest(transformedData);
      
      console.log('[Test Config Form] Test setup!', result.testId);

      // Stupid safari
      setTestId(result.testId);

      navigateToTest(result.testId);
    } catch (error) {
      if (error instanceof EmuError) {
        setError(error.traceId || error.message);
      }
      console.log('[Test Config Form]: Unable to setup test: ', error);
      setError(JSON.stringify(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  const navigateToTest = (testId: string) => {
    navigate(`/dashboard/active-tests?testId=${testId}`);
  }

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
          <Button type="submit" className="mx-auto" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          { testId && (
            <Button className="mx-auto" size="sm" disabled={isSubmitting} onClick={() => navigateToTest(testId)}>
              {`Navigate to ${testId}`}
            </Button>
          ) }
          { error && <p className="text-destructive">{error}</p> }
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
