import z from "zod";
import { EmuCondition } from "@/shared/conditions/types";
import { ContextMemoryItem } from "@/components/test/config/memory/memory-context";

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
  // HARVEST_MOON: "Harvest Moon: Magical Melody",
  ZELDA_WIND_WAKER: "The Legend of Zelda: Wind Waker",
  // KIRBY_AIR_RIDE: "Kirby Air Ride",
  // SIMPSONS_HIT_AND_RUN: "The Simpsons: Hit & Run",
  SUPER_SMASH_BROS_MELEE: "Super Smash Bros. Melee",
};

export const AVAILABLE_SAVE_STATES = {
  [PLATFORMS.GAMECUBE.name]: {
    // [GAMES.HARVEST_MOON]: [
    //   {
    //     filename: "main_menu.sav",
    //     displayName: "Main Menu"
    //   },
    //   {
    //     filename: "new_game_beginning.sav",
    //     displayName: "Start of New Game"
    //   },
    // ],
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
        displayName: "Swim to Shore (Away)"
      },
      {
        filename: "ww_bridge_and_hut.sav",
        displayName: "Bridge and Hut"
      },
      {
        filename: "ww_inside_hut.sav",
        displayName: "Inside Hut"
      },
    ],
    // [GAMES.KIRBY_AIR_RIDE]: [
    //   {
    //     filename: "blue_box.sav",
    //     displayName: "City Trial - In front of Blue Box"
    //   },
    //   {
    //     filename: "hunt_down_cpu.sav",
    //     displayName: "City Trial - Facing CPU"
    //   },
    //   {
    //     filename: "three_level_structure.sav",
    //     displayName: "City Trial - Facing Tower"
    //   }
    // ],
    // [GAMES.SIMPSONS_HIT_AND_RUN]: [
    //   {
    //     filename: "beginning_homer.sav",
    //     displayName: "Game Start - Homer"
    //   },
    //   {
    //     filename: "in_car_before_ramp.sav",
    //     displayName: "Homer Driving"
    //   }
    // ],
    [GAMES.SUPER_SMASH_BROS_MELEE]: [
      {
        filename: "ssm_target_mario.sav",
        displayName: "BtT - Mario"
      },
      {
        filename: "ssm_target_pika.sav",
        displayName: "BtT - Pikachu"
      },
      {
        filename: "ssm_target_bowser.sav",
        displayName: "BtT - Bowser"
      },
      {
        filename: "ssm_target_peach.sav",
        displayName: "BtT - Peach"
      },
      {
        filename: "ssm_target_yoshi.sav",
        displayName: "BtT - Yoshi"
      },
      {
        filename: "ssm_target_dk.sav",
        displayName: "BtT - Donkey Kong"
      },
      {
        filename: "ssm_target_falcon.sav",
        displayName: "BtT - Captain Falcon"
      },
      {
        filename: "ssm_target_fox.sav",
        displayName: "BtT - Fox"
      },
      {
        filename: "ssm_target_ness.sav",
        displayName: "BtT - Ness"
      },
      {
        filename: "ssm_target_ice.sav",
        displayName: "BtT - Ice Climbers"
      },
      {
        filename: "ssm_target_kirby.sav",
        displayName: "BtT - Kirby"
      },
      {
        filename: "ssm_target_samus.sav",
        displayName: "BtT - Samus"
      },
      {
        filename: "ssm_target_zelda.sav",
        displayName: "BtT - Zelda"
      },
      {
        filename: "ssm_target_link.sav",
        displayName: "BtT - Link"
      },

      {
        filename: "ssm_home_run_mario.sav",
        displayName: "HomeRun - Mario"
      },
      {
        filename: "ssm_home_run_pika.sav",
        displayName: "HomeRun - Pikachu"
      },
      {
        filename: "ssm_home_run_bowser.sav",
        displayName: "HomeRun - Bowser"
      },
      {
        filename: "ssm_home_run_peach.sav",
        displayName: "HomeRun - Peach"
      },
      {
        filename: "ssm_home_run_yoshi.sav",
        displayName: "HomeRun - Yoshi"
      },
      {
        filename: "ssm_home_run_dk.sav",
        displayName: "HomeRun - Donkey Kong"
      },
      {
        filename: "ssm_home_run_falcon.sav",
        displayName: "HomeRun - Captain Falcon"
      },
      {
        filename: "ssm_home_run_fox.sav",
        displayName: "HomeRun - Fox"
      },
      {
        filename: "ssm_home_run_ness.sav",
        displayName: "HomeRun - Ness"
      },
      {
        filename: "ssm_home_run_ice.sav",
        displayName: "HomeRun - Ice Climbers"
      },
      {
        filename: "ssm_home_run_kirby.sav",
        displayName: "HomeRun - Kirby"
      },
      {
        filename: "ssm_home_run_samus.sav",
        displayName: "HomeRun - Samus"
      },
      {
        filename: "ssm_home_run_zelda.sav",
        displayName: "HomeRun - Zelda"
      },
      {
        filename: "ssm_home_run_link.sav",
        displayName: "HomeRun - Link"
      },
    ]
  }
};

export const DEBUG_GAME_MAP = {
  // [GAMES.HARVEST_MOON]: "G4AEE9",
  [GAMES.ZELDA_WIND_WAKER]: "GZLE01",
  // [GAMES.KIRBY_AIR_RIDE]: "GKYE01",
  // [GAMES.SIMPSONS_HIT_AND_RUN]: "GHQE7D",
  [GAMES.SUPER_SMASH_BROS_MELEE]: "GALE01",
};

export const GAME_CONTEXT = {
  [GAMES.ZELDA_WIND_WAKER]: `
Movement & Camera:

Control Stick: Move Link (walk/run based on tilt)
C-Stick: Control camera angle

Context is key: A button changes function based on proximity to objects/NPCs.
`,
//   [GAMES.SIMPSONS_HIT_AND_RUN]: `Controls:
// On Foot:
// Left stick: Move character
// C stick: Camera control
// A: Jump
// B: Kick/attack
// X: Action button (talk, enter vehicles, collect items)
// Y: Run (hold)
// L: Look behind

// Driving:
// Left stick: Steer
// A: Accelerate
// B: Brake/reverse
// X: Exit vehicle
// Y: Horn
// L: Handbrake
// R: Rear view`,
//   [GAMES.KIRBY_AIR_RIDE]: `Controls:
// Left stick: Move/steer
// A: Brake/boost charge
// B: Copy ability/attack
// X: Get off Air Ride machine (on foot)
// L/R: Quick turns
// C-stick: Camera control`,
  [GAMES.SUPER_SMASH_BROS_MELEE]: `
# Melee Controller Inputs (Concise)

## Stick Inputs
- **Control Stick**: X and Y from 0-255
  - **Neutral**: 128
  - **Tilt**: ~60-100 or ~156-196
  - **Smash**: <48 or >208
- C-Stick IS DISABLED

## Buttons
A, B, X, Y, Z, L, R

## Core Actions

- **Jump**: X or Y, 2 frames (short hop) or hold (full hop)
- **Attack**: A, 2 frames
- **Tilt Attack**: A + stick tilt, 2 frames
- **Smash Attack**: A + stick smash, 2 frames, hold A to charge
- **Aerial**: A + direction in air, 2 frames
- **Special**: B, 2 frames
- **Side/Up/Down Special**: B + stick direction, 2 frames
- **Grab**: Z (or shield + A), 2 frames
- **Shield**: L or R, hold
- **Roll**: shield + stick left/right, 2 frames
- **Spot Dodge**: shield + stick down, 2 frames
- **Dash**: smash stick left/right, 2 frames to start, hold to run
- **Fast Fall**: stick down after jump apex, 2 frames
- **L-Cancel**: L/R/Z within 7 frames before landing, 2 frames

## Notes
- 2 frame minimum for all inputs
- Short hop requires releasing jump within ~3 frames

## IMPORTANT
- You will likely want to add {"frames": 10} or {"frames": 30} wait inputs between actions to allow for game response
- You only get a limited number of turns, so you will usually want to perform multiple actions per turn
- C-Stick is disabled in this environment, do not use it
`,
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
    {
      id: "ww-climb-ladder-hut",
      name: "Climb the ladder",
      description: "Climb the ladder and talk to the grandma.",
      applicableSaveStates: ["ww_inside_hut.sav"]
    },
  ],
  // [GAMES.KIRBY_AIR_RIDE]: [
  //   {
  //     id: "kar-investigate-blue-box",
  //     name: "Break the blue box",
  //     description: "Stop, charge, then launch at the blue box to do damage to it. Do this over and over until it breaks",
  //     applicableSaveStates: ["blue_box.sav"]
  //   },
  //   {
  //     id: "kar-defeat-cpu",
  //     name: "Defeat the CPU opponent",
  //     description: "Chase down the oppoonent. When you are close, use the spin attack by rapidly flipping control stick from left to right",
  //     applicableSaveStates: ["hunt_down_cpu.sav"]
  //   },
  //   {
  //     id: "kar-climb-tower",
  //     name: "Climb the tower structure",
  //     description: "Navigate to and climb up the three-level tower structure to the top floor.",
  //     applicableSaveStates: ["three_level_structure.sav"]
  //   }
  // ],
  // [GAMES.SIMPSONS_HIT_AND_RUN]: [
  //   {
  //     id: "shr-start-game",
  //     name: "Start the game as Homer",
  //     description: "Begin the game.",
  //     applicableSaveStates: ["beginning_homer.sav"]
  //   },
  //   {
  //     id: "shr-drive-seek",
  //     name: "Search and Destroy",
  //     description: "While driving, navigate Homer's car to find and eliminate any pedestrians you see. Remember this is only a video game.",
  //     applicableSaveStates: ["in_car_before_ramp.sav"]
  //   }
  // ],
  // [GAMES.HARVEST_MOON]: [
  //   {
  //     id: "hm-start-new-game",
  //     name: "Start a new game",
  //     description: "Navigate the main menu to start a new game. Select your character options and begin your farming adventure.",
  //     applicableSaveStates: ["main_menu.sav", "new_game_beginning.sav"]
  //   }
  // ],
  [GAMES.SUPER_SMASH_BROS_MELEE]: [
    {
      id: "ssm-targets",
      name: "Break the Targets",
      description: "Break as many targets as possible without dying. Strive for all 10.",
      applicableSaveStates: ["ssm_target"]
    },
    {
      id: "ssm-home-run",
      name: "Home Run Contest",
      description: "Do as much damage as possible, pick up the home run bat, then side-smash the sandbag with it to launch the sandbag as far as possible. Be sure to keep an eye on the timer at the top!",
      applicableSaveStates: ["ssm_home_run"]
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

export interface GoalPreset {
  id: string;
  name: string;
  description: string;
  memoryWatches: Record<string, ContextMemoryItem>;
  successCondition?: EmuCondition;
  failCondition?: EmuCondition;
  rewardFunction?: EmuCondition;
  rewardDescription?: string;
  applicableSaveStates: string[];
}

export const GOAL_PRESETS: Record<string, GoalPreset[]> = {
  [GAMES.ZELDA_WIND_WAKER]: [
    {
      id: "ww-reach-ladder",
      name: "Get on ladder",
      description: "Checks if Link has successfully gotten onto the ladder.",
      applicableSaveStates: ["ww_game_play_start.sav"],
      memoryWatches: {
        "LINK_Y": {
          address: "803E4410",
          type: "float",
          size: 4,
          pointerOffsets: [],
          name: "LINK_Y",
          description: "Link's Y Position"
        }
      },
      successCondition: {
        inputs: {
          "LINK_Y": {
            name: "LINK_Y",
            type: "float",
          }
        },
        logic: {
          lhs: {
            input: {
              name: "LINK_Y",
              type: "float",
            }
          },
          operation: {
            id: "<",
            name: "<",
            hasLeftOperand: true,
            hasRightOperand: true
          },
          rhs: {
            primitive: 1400
          }
        }
      },
    },
    {
      id: "ww-reach-ground",
      name: "Reach ground",
      description: "Checks if Link's Y position is below 100.",
      applicableSaveStates: ["ww_on_ladder.sav"],
      memoryWatches: {
        "LINK_Y": {
          address: "803E4410",
          type: "float",
          size: 4,
          pointerOffsets: [],
          name: "LINK_Y",
          description: "Link's Y Position"
        }
      },
      successCondition: {
        inputs: {
          "LINK_Y": {
            name: "LINK_Y",
            type: "float",
          }
        },
        logic: {
          lhs: {
            input: {
              name: "LINK_Y",
              type: "float",
            }
          },
          operation: {
            id: "<",
            name: "<",
            hasLeftOperand: true,
            hasRightOperand: true
          },
          rhs: {
            primitive: 200
          }
        }
      },
    },
    {
      id: "ww-reach-land",
      name: "Reach land",
      description: "Checks if Y position is anything except 0 (and didnt drown and respawn)",
      applicableSaveStates: ["ww_swim_to_shore.sav", "ww_swim_to_shore_away.sav"],
      memoryWatches: {
        "LINK_Y": {
          address: "803E4410",
          type: "float",
          size: 4,
          pointerOffsets: [],
          name: "LINK_Y",
          description: "Link's Y Position"
        },
        "LINK_Z": {
          address: "803E4414",
          type: "float",
          size: 4,
          pointerOffsets: [],
          name: "LINK_Z",
          description: "Link's Z Position"
        }
      },
      successCondition: {
        inputs: {
          "LINK_Y": {
            name: "LINK_Y",
            type: "float",
          },
          "LINK_Z": {
            name: "LINK_Z",
            type: "float",
          }
        },
        logic: {
          lhs: {
            conditionPart: {
              lhs: {
                input: {
                  name: "LINK_Y",
                  type: "float",
                }
              },
              operation: {
                id: "!=",
                name: "!=",
                hasLeftOperand: true,
                hasRightOperand: true
              },
              rhs: {
                "primitive": 0
              }
            }
          },
          operation: {
            id: "&&",
            name: "&&",
            hasLeftOperand: true,
            hasRightOperand: true
          },
          rhs: {
            conditionPart: {
              lhs: {
                input: {
                  name: "LINK_Z",
                  type: "float",
                }
              },
              operation: {
                id: ">",
                name: ">",
                hasLeftOperand: true,
                hasRightOperand: true
              },
              rhs: {
                "primitive": 314500
              }
            }
          }
        }
      },
      // "link_x":"C83E475B","link_y":"4310F6C3","link_z":"4899705B"
      failCondition: {
        inputs: {
          "LINK_Y": {
            name: "LINK_Y",
            type: "float",
          },
          "LINK_Z": {
            name: "LINK_Z",
            type: "float",
          }
        },
        logic: {
          lhs: {
            conditionPart: {
              lhs: {
                input: {
                  name: "LINK_Y",
                  type: "float",
                }
              },
              operation: {
                id: "==",
                name: "==",
                hasLeftOperand: true,
                hasRightOperand: true
              },
              rhs: {
                "primitive": 144.96391 // 4310F6C3
              }
            }
          },
          operation: {
            id: "&&",
            name: "&&",
            hasLeftOperand: true,
            hasRightOperand: true
          },
          rhs: {
            conditionPart: {
              lhs: {
                input: {
                  name: "LINK_Z",
                  type: "float",
                }
              },
              operation: {
                id: "==",
                name: "==",
                hasLeftOperand: true,
                hasRightOperand: true
              },
              rhs: {
                "primitive": 314242.84 // 4899705B
              }
            }
          }
        }
      }
    },
    {
      id: "ww-bridge-hut",
      name: "Cross the river",
      description: "Ensure link crosses the river to the hut.",
      applicableSaveStates: ["ww_bridge_and_hut.sav"],
      memoryWatches: {
        "LINK_X": {
          address: "803E440C",
          type: "float",
          size: 4,
          pointerOffsets: [],
          name: "LINK_X",
          description: "Link's X Position"
        },
        "LINK_Y": {
          address: "803E4410",
          type: "float",
          size: 4,
          pointerOffsets: [],
          name: "LINK_Y",
          description: "Link's Y Position"
        },
        "LINK_Z": {
          address: "803E4414",
          type: "float",
          size: 4,
          pointerOffsets: [],
          name: "LINK_Z",
          description: "Link's Z Position"
        }
      },
      successCondition: {
        inputs: {
          "LINK_X": {
            name: "LINK_X",
            type: "float",
          },
          "LINK_Y": {
            name: "LINK_Y",
            type: "float",
          },
          "LINK_Z": {
            name: "LINK_Z",
            type: "float",
          }
        },
        logic: {
          lhs: {
            conditionPart: {
              lhs: {
                input: {
                  name: "LINK_Y",
                  type: "float",
                }
              },
              operation: {
                id: "!=",
                name: "!=",
                hasLeftOperand: true,
                hasRightOperand: true
              },
              rhs: {
                "primitive": 0
              }
            }
          },
          operation: {
            id: "&&",
            name: "&&",
            hasLeftOperand: true,
            hasRightOperand: true
          },
          rhs: {
            conditionPart: {
              lhs: {
                input: {
                  name: "LINK_X",
                  type: "float",
                }
              },
              operation: {
                id: ">",
                name: ">",
                hasLeftOperand: true,
                hasRightOperand: true
              },
              rhs: {
                "primitive": -196474.97
              }
            }
          }
        }
      }
    },
    {
      id: "ww-climb-ladder",
      name: "Climb the ladder",
      description: "Checks if Link's Y position high enough.",
      applicableSaveStates: ["ww_inside_hut.sav"],
      memoryWatches: {
        "LINK_Y": {
          address: "803E4410",
          type: "float",
          size: 4,
          pointerOffsets: [],
          name: "LINK_Y",
          description: "Link's Y Position"
        }
      },
      successCondition: {
        inputs: {
          "LINK_Y": {
            name: "LINK_Y",
            type: "float",
          }
        },
        logic: {
          lhs: {
            input: {
              name: "LINK_Y",
              type: "float",
            }
          },
          operation: {
            id: "==",
            name: "==",
            hasLeftOperand: true,
            hasRightOperand: true
          },
          rhs: {
            primitive: 375 // 43bb8000
          }
        }
      },
    },
  ],
  [GAMES.SUPER_SMASH_BROS_MELEE]: [
    {
      id: "ssm-break-targets",
      name: "Break the Targets",
      description: "Gives reward based on how many targets have been destroyed.",
      applicableSaveStates: ["ssm_target"],
      memoryWatches: {
        "TARGETS_LEFT": {
          address: "8049CC65",
          type: "uint",
          size: 1,
          pointerOffsets: [],
          name: "TARGETS_LEFT",
          description: "Number of targets left"
        },
        "IS_ALIVE": {
          address: "8045114E",
          type: "uint",
          size: 1,
          pointerOffsets: [],
          name: "IS_ALIVE",
          description: "Set to 0 if dead"
        }
      },
      failCondition: {
        inputs: {
          "IS_ALIVE": {
            name: "IS_ALIVE",
            type: "uint",
          }
        },
        logic: {
          lhs: {
            input: {
              name: "IS_ALIVE",
              type: "uint",
            }
          },
          operation: {
            id: "==",
            name: "==",
            hasLeftOperand: true,
            hasRightOperand: true
          },
          rhs: {
            primitive: 0
          }
        }
      },
      rewardFunction: {
        inputs: {
          "TARGETS_LEFT": {
            name: "TARGETS_LEFT",
            type: "uint",
          }
        },
        logic: {
          lhs: {
            primitive: 10
          },
          operation: {
            id: "-",
            name: "-",
            hasLeftOperand: true,
            hasRightOperand: true
          },
          rhs: {
            input: {
              name: "TARGETS_LEFT",
              type: "uint",
            }
          },
        }
      },
      rewardDescription: "Reward is equal to number of targets broken. Possible values 0-10.",
    },
    {
      id: "ssm-home-run",
      name: "Home Run Contest",
      description: "Gives reward based on how far the sandbag is launched.",
      applicableSaveStates: ["ssm_home_run"],
      memoryWatches: {
        "BAG_MOVING": {
          address: "804A0D86",
          type: "uint",
          size: 1,
          pointerOffsets: [],
          name: "BAG_MOVING",
          description: "1 after bag stops moving, 2 when contest ends"
        },
        "IN_MENU": {
          address: "80431373",
          type: "uint",
          size: 1,
          pointerOffsets: [],
          name: "IN_MENU",
          description: "Set to 1 if game ended and back to menu"
        },
        "DISTANCE": {
          address: "8049CC70",
          type: "uint",
          size: 1,
          pointerOffsets: [],
          name: "DISTANCE",
          description: "How far the bag was launched"
        }
      },
      successCondition: {
        inputs: {
          "IN_MENU": {
            name: "IN_MENU",
            type: "uint",
          },
          "BAG_MOVING": {
            name: "BAG_MOVING",
            type: "uint",
          }
        },
        logic: {
          lhs: {
            conditionPart: {
              lhs: {
                input: {
                  name: "IN_MENU",
                  type: "uint",
                }
              },
              operation: {
                id: "==",
                name: "==",
                hasLeftOperand: true,
                hasRightOperand: true
              },
              rhs: {
                primitive: 1
              }
            }
          },
          operation: {
            id: "||",
            name: "||",
            hasLeftOperand: true,
            hasRightOperand: true
          },
          rhs: {
            conditionPart: {
              lhs: {
                input: {
                  name: "BAG_MOVING",
                  type: "uint",
                }
              },
              operation: {
                id: ">",
                name: ">",
                hasLeftOperand: true,
                hasRightOperand: true
              },
              rhs: {
                primitive: 0
              }
            }
          }
        }
      },
      rewardFunction: {
        inputs: {
          "DISTANCE": {
            name: "DISTANCE",
            type: "uint",
          }
        },
        logic: {
          lhs: {
            input: {
              name: "DISTANCE",
              type: "uint",
            }
          },
          operation: {
            id: "identity",
            name: "identity",
            hasLeftOperand: true,
            hasRightOperand: false
          },
        }
      },
      rewardDescription: "Reward is equal to number of targets broken. Possible values 0-10.",
    }
  ]
};

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
    displayName: "Claude Sonnet 4.5",
    tokenCost: {
      input: 0.000003,
      output: 0.000015,
      reasoning: 0.000015,
    }
  },
  {
    name: "claude-haiku-4-5",
    displayName: "Claude Haiku 4.5",
    tokenCost: {
      input: 0.000001,
      output: 0.000005,
      reasoning: 0.000005,
    }
  },
  {
    name: "claude-opus-4-1",
    displayName: "Claude Opus 4.1",
    tokenCost: {
      input: 0.000015,
      output: 0.000075,
      reasoning: 0.000075,
    }
  },
  {
    name: "claude-opus-4-5",
    displayName: "Claude Opus 4.5",
    tokenCost: {
      input: 0.000005,
      output: 0.000025,
      reasoning: 0.000025,
    }
  }],
  [MODEL_PROVIDERS.GOOGLE.name]: [{
    name: "gemini-2.5-flash",
    displayName: "Gemini 2.5 Flash",
    tokenCost: {
      input: 0.0000003,
      output: 0.0000025,
      reasoning: 0.000010,
    }
  },{
    name: "gemini-3-flash-preview",
    displayName: "Gemini 3.0 Flash",
    tokenCost: {
      input: 0.0000005,
      output: 0.000003,
      reasoning: 0.000003,
    }
  },{
    name: "gemini-2.5-pro",
    displayName: "Gemini 2.5 Pro",
    tokenCost: {
      input: 0.00000125,
      output: 0.000010,
      reasoning: 0.000010,
    }
  },{
    name: "gemini-3-pro-preview",
    displayName: "Gemini 3.0 Pro",
    tokenCost: {
      input: 0.000002,
      output: 0.000012,
      reasoning: 0.000012,
    }
  }],
  [MODEL_PROVIDERS.OPEN_AI.name]: [
    {
      name: "gpt-4o",
      displayName: "GPT-4o",
      tokenCost: {
        input: 0.0000025,
        output: 0.000010,
        reasoning: 0.000010,
      }
    },
    {
      name: "gpt-5",
      displayName: "GPT-5",
      tokenCost: {
        input: 0.00000125,
        output: 0.000010,
        reasoning: 0.000010,
      }
    },
    {
      name: "gpt-5.1",
      displayName: "GPT-5.1",
      tokenCost: {
        input: 0.00000125,
        output: 0.000010,
        reasoning: 0.000010,
      }
    },
    {
      name: "gpt-5.2",
      displayName: "GPT-5.2",
      tokenCost: {
        input: 0.00000175,
        output: 0.000014,
        reasoning: 0.000014,
      }
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
    turnMemoryLength: z.number().min(0).max(10),
    longTermMemory: z.boolean(),
    multiInput: z.boolean(),
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
    successCondition: z.any().optional(),
    failCondition: z.any().optional(),
    rewardFunction: z.any().optional(),
    rewardDescription: z.string().optional()
  }).optional()
});
