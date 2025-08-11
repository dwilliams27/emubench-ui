import z from "zod";

export interface SaveState {
  filename: string;
  displayName: string;
}

export interface GameConfig {
  platform: string;
  game: string;
  saveState: SaveState;
  gameMode: 'turn-based' | 'real-time';
}

export const PLATFORMS = {
  GAMECUBE: {
    name: "gamecube",
    displayName: "Gamecube"
  }
};

export const GAMES = {
  HARVEST_MOOON: "Harvest Moon: Magical Melody",
  ZELDA_WIND_WAKER: "The Legend of Zelda: Wind Waker"
};

export const AVAILABLE_SAVE_STATES = {
  [PLATFORMS.GAMECUBE.name]: {
    [GAMES.HARVEST_MOOON]: [
      {
        filename: "main_menu.sav",
        displayName: "Main Menu"
      },
      {
        filename: "new_game_beginning.sav",
        displayName: "Start of New Game"
      },
    ],
    [GAMES.ZELDA_WIND_WAKER]: [
      {
        filename: "ww_main_menu.sav",
        displayName: "Main Menu"
      },
      {
        filename: "ww_game_play_start.sav",
        displayName: "Start of New Game"
      }
    ]
  }
}

export const MODEL_PROVIDERS = {
  GOOGLE: {
    name: "google",
    displayName: "Google"
  },
  OPEN_AI: {
    name: "openai",
    displayName: "OpenAI"
  }
};

export const MODELS = {
  [MODEL_PROVIDERS.GOOGLE.name]: [{
    name: "gemini-2.5-pro",
    displayName: "Gemini 2.5 Pro"
  }],
  [MODEL_PROVIDERS.OPEN_AI.name]: [{
    name: "gpt-4o",
    displayName: "GPT-4o"
  }],
};

export const SETUP_TEST_CONFIG_SCHEMA = z.object({
  gameConfig: z.object({
    platform: z.string(),
    game: z.string(),
    saveState: z.object({ filename: z.string(), displayName: z.string() }),
    gameMode: z.enum(['turn-based', 'real-time'])
  }),
  agentConfig: z.object({
    modelProvider: z.string(),
    model: z.string(),
    maxIterations: z.string(),
    temperature: z.number().min(0).max(2),
    taskName: z.string(),
    taskDescription: z.string(),
    systemPrompt: z.string()
  }),
  memoryConfig: z.object({
    context: z.record(z.string(), z.object({
      address: z.string(),
      size: z.number(),
      pointerDepth: z.number(),
      type: z.enum(['int', 'uint', 'float', 'hex', 'chars']),
      name: z.string(),
      description: z.string(),
    })),
  }),
  goal: z.object({
    condition: z.object({
      inputs: z.record(z.string(), z.object({
        name: z.string(),
        type: z.enum(['int', 'uint', 'float', 'hex', 'chars']),
        pointerDepth: z.number(),
        rawValue: z.string()
      })),
      logic: z.object({
        lhs: z.union([
          z.object({ inputName: z.string() }),
          z.string(),
          z.number(),
          z.boolean()
        ]),
        rhs: z.union([
          z.object({ inputName: z.string() }),
          z.string(),
          z.number(),
          z.boolean()
        ]).optional(),
        operation: z.any()
      })
    })
  }).optional()
});

export const REQ_SETUP_TEST = z.object({
  testConfig: z.object({
    gameId: z.string(),
    platform: z.string(),
    mode: z.string(),
    startStateFilename: z.string(),
    contextMemWatches: z.any(),
    endStateMemWatches: z.any()
  }),
  agentConfig: z.object({
    systemPrompt: z.string(),
    gameContext: z.string(),
    llmProvider: z.string(),
    model: z.string(),
    maxIterations: z.number(),
    temperature: z.number(),
    task: z.object({
      name: z.string(),
      description: z.string()
    })
  })
});
