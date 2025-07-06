import type { GetActiveTestConfigResponse } from "@/constants/api";
import type { TestState } from "@/constants/games";

export const MockGetActiveTestConfigResponse: GetActiveTestConfigResponse = {
  tests: [
    {
      id: "tst_123",
      gameId: "GWMP8P",
      setup: false,
      started: false,
      result: undefined,
      startStateName: "worms_aimfire_test",
      contextMemWatches: {},
      endStateMemWatches: {},
      endStateConditions: [],
    },
    {
      id: "tst_555",
      gameId: "GWMP8P",
      setup: true,
      started: false,
      result: undefined,
      startStateName: "worms_aimfire_test",
      contextMemWatches: {},
      endStateMemWatches: {},
      endStateConditions: [],
    },
    {
      id: "tst_777",
      gameId: "GWMP8P",
      setup: true,
      started: true,
      result: undefined,
      startStateName: "worms_aimfire_test",
      contextMemWatches: {},
      endStateMemWatches: {},
      endStateConditions: [],
    },
    {
      id: "tst_999",
      gameId: "GWMP8P",
      setup: true,
      started: true,
      result: {
        outcome: "pass",
        metadata: {},
      },
      startStateName: "worms_aimfire_test",
      contextMemWatches: {},
      endStateMemWatches: {},
      endStateConditions: [],
    }
  ]
};

export const MockActiveTestResponses: Record<string, TestState> = {
};
