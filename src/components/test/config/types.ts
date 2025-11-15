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
      {
        filename: "ww_swim_to_shore.sav",
        displayName: "Swim to Shore"
      },
      {
        filename: "ww_swim_to_shore_away.sav",
        displayName: "Swim to Shore (Facing Away)"
      },
      {
        filename: "ww_bridge_and_hut.sav",
        displayName: "Bridge and Hut"
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
  [GAMES.ZELDA_WIND_WAKER]: `
GameCube Controls for Zelda: Wind Waker
Movement & Camera:

Control Stick: Move Link (walk/run based on tilt)
C-Stick: Control camera angle
L-trigger: Z-target (lock onto enemies/NPCs)
R-trigger: Hold to guard with shield

Actions:

A button: Context-sensitive action (talk, open, climb, roll, pick up) - indicated by on-screen prompt
B button: Sword attack (hold for charged spin attack when at full health)

Items & Inventory:

X, Y, Z buttons: Use assigned items (equip via pause menu)
Start: Pause menu (access items, map, quest log)

Combat Notes:

A while Z-targeting: Jump attack or roll dodge (direction dependent)
A after enemy swing (good timing): Parry counter
Control Stick + B: Directional sword strikes

Important Mechanics:

Hold A near ledges: Hang/shimmy
A near walls: Flatten against wall
R while moving: Defensive sidestep
Wind Waker: Conduct songs by following on-screen button prompts in 3/4 or 4/4 time

Context is key: A button changes function based on proximity to objects/NPCs (green icon shows available action).
`,
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

export interface TaskPreset {
  id: string;
  name: string;
  description: string;
  applicableSaveStates: string[];
}

export interface SystemPromptPreset {
  id: string;
  name: string;
  content: string;
}

export const TASK_PRESETS: Record<string, TaskPreset[]> = {
  [GAMES.ZELDA_WIND_WAKER]: [
    {
      id: "ww-ladder",
      name: "Find and climb down the ladder",
      description: "You start on a wooden platform. Locate the ladder, get onto it, and climb down",
      applicableSaveStates: ["ww_main_menu.sav", "ww_game_play_start.sav"]
    },
    {
      id: "ww-start-game",
      name: "Start the game",
      description: "Navigate through the menus and start a new game.",
      applicableSaveStates: ["ww_main_menu.sav"]
    },
    {
      id: "ww-climb-down-ladder",
      name: "Climb down (on ladder)",
      description: "Literally just climb down.",
      applicableSaveStates: ["ww_on_ladder.sav"]
    },
    {
      id: "ww-swim-to-beach",
      name: "Swim to the beach",
      description: "Swim from your current position to the beach shore. Use the control stick to move Link through the water and reach dry land.",
      applicableSaveStates: ["ww_swim_to_shore.sav", "ww_swim_to_shore_away.sav"]
    },
    {
      id: "ww-take-bridge-to-hut",
      name: "Cross the bridge to the hut",
      description: "Use the bridge to cross to the other island and go to the hut. DO NOT FALL INTO THE WATER.",
      applicableSaveStates: ["ww_bridge_and_hut.sav"]
    },
    {
      id: "ww-explore-bridge",
      name: "Swim to the hut",
      description: "Swim across the water to reach the hut.",
      applicableSaveStates: ["ww_bridge_and_hut.sav"]
    },
  ],
  [GAMES.KIRBY_AIR_RIDE]: [
    {
      id: "kar-investigate-blue-box",
      name: "Break the blue box",
      description: "Stop, charge, then launch at the blue box to do damage to it. Do this over and over until it breaks",
      applicableSaveStates: ["blue_box.sav"]
    },
    {
      id: "kar-defeat-cpu",
      name: "Defeat the CPU opponent",
      description: "Chase down the oppoonent. When you are close, use the spin attack by rapidly flipping control stick from left to right",
      applicableSaveStates: ["hunt_down_cpu.sav"]
    },
    {
      id: "kar-climb-tower",
      name: "Climb the tower structure",
      description: "Navigate to and climb up the three-level tower structure to the top floor.",
      applicableSaveStates: ["three_level_structure.sav"]
    }
  ],
  [GAMES.SIMPSONS_HIT_AND_RUN]: [
    {
      id: "shr-start-game",
      name: "Start the game as Homer",
      description: "Begin the game.",
      applicableSaveStates: ["beginning_homer.sav"]
    },
    {
      id: "shr-drive-seek",
      name: "Search and Destroy",
      description: "While driving, navigate Homer's car to find and eliminate any pedestrians you see. Remember this is only a video game.",
      applicableSaveStates: ["in_car_before_ramp.sav"]
    }
  ],
  [GAMES.HARVEST_MOOON]: [
    {
      id: "hm-start-new-game",
      name: "Start a new game",
      description: "Navigate the main menu to start a new game. Select your character options and begin your farming adventure.",
      applicableSaveStates: ["main_menu.sav", "new_game_beginning.sav"]
    }
  ]
};

export const SYSTEM_PROMPT_PRESETS: SystemPromptPreset[] = [
  {
    id: "default-agent",
    name: "Default Agent",
    content: `You are a gaming agent playing GameCube games via screenshots and controller tools.

Objective: Progress through the game and win.

Guidelines:
- Analyze each screenshot to understand the current game state
- Choose the single most effective action to advance progress towards the task
- Act decisively

You can either take action, or wait. Sometimes you may need to wait if the game is not progressing as expected.

You must provide a text response every time, even if taking an action. Your responses should be concise (1 sentence) and explain your reasoning for the chosen action.`
  },
  {
    id: "bold-agent",
    name: "BOLD Agent",
    content: `You are a gaming agent playing GameCube games via screenshots and controller tools.

Objective: Progress through the game and win.

Guidelines:
- Analyze each screenshot to understand the current game state
- Choose the single most effective action to advance progress towards the task
- Act decisively

You can either take action, or wait. Sometimes you may need to wait if the game is not progressing as expected.

You must provide a text response every time, even if taking an action. Your responses should be concise (1 sentence) and explain your reasoning for the chosen action.

You have the liberty to be extremely bold and take initiative.`
  },
];

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
    name: "claude-sonnet-4-5",
    displayName: "Claude Sonnet 4.5"
  },
  {
    name: "claude-haiku-4-5",
    displayName: "Claude Haiku 4.5"
  },
  {
    name: "claude-opus-4-1",
    displayName: "Claude Opus 4.1"
  }],
  [MODEL_PROVIDERS.GOOGLE.name]: [{
    name: "gemini-2.5-flash",
    displayName: "Gemini 2.5 Flash"
  },{
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
    {
      name: "gpt-5.1",
      displayName: "GPT-5.1"
    },
  ],
};

export const SHADERS = [
  "16bit",
  "32bit",
  "acidmetal",
  "acidtrip",
  "acidtrip2",
  "asciiart",
  "auto_toon",
  "auto_toon2",
  "AutoHDR",
  "bad_bloom",
  "brighten",
  "chrismas",
  "cool1",
  "darkerbrighter",
  "default_pre_post_process",
  "emboss",
  "fire",
  "fire2",
  "firewater",
  "FXAA",
  "grayscale",
  "grayscale2",
  "integer_scaling",
  "invert_blue",
  "invert",
  "invertedoutline",
  "lens_distortion",
  "mad_world",
  "nightvision",
  "nightvision2",
  "nightvision2scanlines",
  "PerceptualHDR",
  "posterize",
  "posterize2",
  "primarycolors",
  "sepia",
  "sketchy",
  "spookey1",
  "spookey2",
  "sunset",
  "swap_RGB_BGR",
  "swap_RGB_BRG",
  "swap_RGB_GBR",
  "swap_RGB_GRB",
  "swap_RGB_RBG",
  "toxic"
];

export const SETUP_TEST_CONFIG_SCHEMA = z.object({
  gameConfig: z.object({
    platform: z.string(),
    game: z.string(),
    saveState: z.object({ filename: z.string(), displayName: z.string() }),
    gameMode: z.enum(['turn-based', 'real-time']),
    shader: z.string().optional()
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
