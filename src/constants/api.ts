import type { Test } from "@/constants/games";

export interface ApiEndpoint {
  path: string;
  name: string;
  description: string;
  examplePayload: Object;
  method: string;
};

export const DSERV_ENDPOINTS = {
  TEXT_ORX_SETUP: {
    path: "/test-orx/setup",
    name: "Setup test",
    description: "Boots game, sets up memory watches, loads save state, then pauses emulation.",
    examplePayload: {
      config: {
        gameId: "GWMP8P",
        gamePath: "/Users/dwilliams/Documents/roms/worms_3d.rvz",
        startStateFilename: "/Users/dwilliams/Documents/roms/dmcp-savestates/worms_aimfire_test.sav",
        contextMemWatches: {
          test_game_id: {
            "address": "80000000",
            "size": 6
          }
        },
        endStateMemWatches: []
      }
    },
    method: "POST"
  },
  TEXT_ORX_START: {
    path: "/test-orx/start",
    name: "Start test",
    description: "Sets emulation state to 'play'.",
    examplePayload: {},
    method: "POST"
  }
};

export interface GetActiveEmulatorConfigResponse {
  tests: Test[];
}
