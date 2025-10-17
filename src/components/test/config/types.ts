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
  ZELDA_WIND_WAKER: "The Legend of Zelda: Wind Waker",
  KIRBY_AIR_RIDE: "Kirby Air Ride",
  SIMPSONS_HIT_AND_RUN: "The Simpsons: Hit & Run"
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
      },
      {
        filename: "ww_on_ladder.sav",
        displayName: "On Ladder"
      },
    ],
    [GAMES.KIRBY_AIR_RIDE]: [
      {
        filename: "blue_box.sav",
        displayName: "City Trial - In front of Blue Box"
      },
      {
        filename: "hunt_down_cpu.sav",
        displayName: "City Trial - Facing CPU"
      },
      {
        filename: "three_level_structure.sav",
        displayName: "City Trial - Facing Tower"
      }
    ],
    [GAMES.SIMPSONS_HIT_AND_RUN]: [
      {
        filename: "beginning_homer.sav",
        displayName: "Game Start - Homer"
      },
      {
        filename: "in_car_before_ramp.sav",
        displayName: "Homer Driving"
      }
    ]
  }
};

export const DEBUG_GAME_MAP = {
  [GAMES.HARVEST_MOOON]: "G4AEE9",
  [GAMES.ZELDA_WIND_WAKER]: "GZLE01",
  [GAMES.KIRBY_AIR_RIDE]: "GKYE01",
  [GAMES.SIMPSONS_HIT_AND_RUN]: "GHQE7D",
};

export const GAME_CONTEXT = {
  [GAMES.ZELDA_WIND_WAKER]: `You are playing the Legend of Zelda Wind Waker on the Gamecube.`,
  [GAMES.SIMPSONS_HIT_AND_RUN]: `Controls:
On Foot:
Left stick: Move character
C stick: Camera control
A: Jump
B: Kick/attack
X: Action button (talk, enter vehicles, collect items)
Y: Run (hold)
L: Look behind

Driving:
Left stick: Steer
A: Accelerate
B: Brake/reverse
X: Exit vehicle
Y: Horn
L: Handbrake
R: Rear view`,
  [GAMES.KIRBY_AIR_RIDE]: `Controls:
Left stick: Move/steer
A: Brake/boost charge
B: Copy ability/attack
X: Get off Air Ride machine (on foot)
L/R: Quick turns
C-stick: Camera control`
}

export const MODEL_PROVIDERS: Record<string, { name: string, displayName: string }> = {
  ANTHROPIC: {
    name: "anthropic",
    displayName: "Anthropic"
  },
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
  [MODEL_PROVIDERS.ANTHROPIC.name]: [{
    name: "claude-opus-4-1-20250805",
    displayName: "Claude Opus 4.1"
  }],
  [MODEL_PROVIDERS.GOOGLE.name]: [{
    name: "gemini-2.5-pro",
    displayName: "Gemini 2.5 Pro"
  }],
  [MODEL_PROVIDERS.OPEN_AI.name]: [
    {
      name: "gpt-4o",
      displayName: "GPT-4o"
    },
    {
      name: "gpt-5",
      displayName: "GPT-5"
    },
  ],
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
    contextHistorySize: z.number().min(0).max(10),
    taskName: z.string(),
    taskDescription: z.string(),
    systemPrompt: z.string(),
    gameContext: z.string(),
  }),
  memoryConfig: z.object({
    context: z.record(z.string(), z.object({
      address: z.string(),
      size: z.number(),
      pointerOffsets: z.array(z.number()),
      type: z.enum(['int', 'uint', 'float', 'hex', 'chars']),
      name: z.string(),
      description: z.string(),
    })),
  }),
  goalConfig: z.object({
    // TODO: lazy
    condition: z.any()
  }).optional()
});
