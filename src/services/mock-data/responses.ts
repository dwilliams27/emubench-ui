import type { GetActiveTestConfigResponse } from "@/constants/api";
import * as screenshot from "./emu-screenshot-b64.json";
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
  tst_123: {
    images: [],
    messages: []
  },
  tst_555: {
    images: [screenshot.content],
    messages: []
  },
  tst_777: {
    images: [screenshot.content],
    messages: [{
      text: `Mock testing message`,
      type: "message",
      author: "claude"
    }]
  },
  tst_999: {
    images: [screenshot.content],
    messages: [
      {
        text: `Mock testing message`,
        type: "message",
        author: "claude"
      },
      {
        text: `Another mock testing message`,
        type: "message",
        author: "claude"
      }
    ]
  }
};
