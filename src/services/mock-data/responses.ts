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

export const MockGetActiveTestStateResponse = {
    "testState": [
        {
            "1": {
                "contextMemWatchValues": {
                    "test_game_id": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
            "id": "TEST_STATE",
            "contextMemWatchValues": {
                "test_game_id": "475A4C453031"
            },
            "endStateMemWatchValues": {},
            "status": "emulator-ready",
            "createdAt": {
                "_seconds": 1753050667,
                "_nanoseconds": 297000000
            }
        }
    ],
    "screenshots": {
        "0.png": "https://storage.googleapis.com/emubench-sessions/tst-3413f6f9df404670/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250720%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250720T223004Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=58f3876c665784c19fd9ace16ad6c42dce590e722d956e31b647485aa815fac43bde81faa2cce24c2fd82711b304ea1f60d2bac8af0202c39fba21004bcb41ad36d57d2fab87781a90e4c4aabf0a7619dc20f83f07f6360768cef2c8a94036045f30a07b0982928d81e743fe719544ef739bd4a38bbffa3ca8ebac156bcbd9b4a17c1b636bcbf490ff10cd8450d604571ff94ff6fa92bcd75e3ff87e659a9e487fc6d48f421be0c21498dff961d15c74743733ebff26f38daa601eb065bce3049245a65b28834a9a942b2551b8909f35fc8c2223d1cc4faf12bd78655aa5199884537d452aa64be5c424d8cd5463a879ad0f5cbd5c0ad7ae87884d1a14bb19ea",
        "1.png": "https://storage.googleapis.com/emubench-sessions/tst-3413f6f9df404670/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250720%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250720T223107Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=14432907ee4cf7e4a667cf083571e4be0bd1bc352037d3ad3d2ddcfcdea2f583bf8e93900381d4a9aa4be5adc4cb82a9584335ea86a6b8cb4c93cf61f06fd8d91bb5e42d009d977ab22bffc9cd5aaac625db05bfb2e226525565ac49ed879ac4bba244874012c8396dbbb6f0ef5d83b63de04fc03788e9262538f52b2245faa09f785b285603a2b2adfbf99b36627944193b13f8f7fb60ca169e11369b16cc549c07ac30bcc294eeb910133d86d9f232247d150979a850da42f24a1ddf1704b286c4e89f29641a0c1726515a212d30e2b9d8ca5ff3057f4d36db78615101095962c8d8e49f731d0f460452eb6a61964a959ad53a6ba7606f110fd04e95e85fbd"
    },
    "agentLogs": [
        {
            "id": "6fpZD5b6oW6YY3PyFmaA",
            "title": "Iteration 1",
            "logs": [
                {
                    "text": "To begin, I will press the start button as prompted on the title screen.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-20T22:31:07.041Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-20T22:31:07.041Z",
                        "toolName": "sendControllerInput",
                        "toolPayload": {
                            "actions": {
                                "buttons": {
                                    "start": true
                                }
                            },
                            "duration": "5"
                        },
                        "screenshotName": "0.png"
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1753050667,
                "_nanoseconds": 350000000
            }
        }
    ]
}
