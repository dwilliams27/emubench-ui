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
  GAMECUBE: "Gamecube"
};

export const GAMES = {
  ZELDA_WIND_WAKER: "The Legend of Zelda: Wind Waker"
};

export const AVAILABLE_SAVE_STATES = {
  [PLATFORMS.GAMECUBE]: {
    [GAMES.ZELDA_WIND_WAKER]: [{
      filename: "ww_main_menu.sav",
      displayName: "Main Menu"
    }]
  }
}

export const MODEL_PROVIDERS = {
  GOOGLE: "google"
};

export const MODELS = {
  [MODEL_PROVIDERS.GOOGLE]: [{
    name: "gemini-2.5-pro",
    displayName: "Gemini 2.5 Pro"
  }]
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
    maxIterations: z.number().min(1),
    temperature: z.number().min(0).max(2),
    taskName: z.string(),
    taskDescription: z.string(),
    systemPrompt: z.string()
  })
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
