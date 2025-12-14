import type { GetActiveEmulatorConfigResponse } from "@/constants/api";
import type { TestState } from "@/constants/games";

export const MockGetActiveEmulatorConfigResponse: GetActiveEmulatorConfigResponse = {
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

export const MockActiveTestResponses: Record<string, TestState> = {};

export const MockGetActiveTestStateResponse = {
    "testState": {
        "id": "tst-cc0126623f1f45f6",
        "screenshots": {},
        "status": "running",
        "stateHistory": {
            "turn_1": {
                "contextMemWatchValues": {
                    "LINK_Y": "44CE4000"
                },
                "endStateMemWatchValues": {}
            },
            "turn_2": {
                "contextMemWatchValues": {
                    "LINK_Y": "44CE4000"
                },
                "endStateMemWatchValues": {}
            },
            "turn_3": {
                "contextMemWatchValues": {
                    "LINK_Y": "44CE4000"
                },
                "endStateMemWatchValues": {}
            },
            "turn_4": {
                "contextMemWatchValues": {
                    "LINK_Y": "44CE4000"
                },
                "endStateMemWatchValues": {}
            },
            "turn_5": {
                "contextMemWatchValues": {
                    "LINK_Y": "44CE4000"
                },
                "endStateMemWatchValues": {}
            },
            "turn_6": {
                "contextMemWatchValues": {
                    "LINK_Y": "44CE4000"
                },
                "endStateMemWatchValues": {}
            },
            "turn_7": {
                "contextMemWatchValues": {
                    "LINK_Y": "44CE4000"
                },
                "endStateMemWatchValues": {}
            },
            "turn_8": {
                "contextMemWatchValues": {
                    "LINK_Y": "44CE4000"
                },
                "endStateMemWatchValues": {}
            }
        }
    },
    "agentState": {
        "id": "astate-728136d5437243a1",
        "status": "running",
        "memory": {
            "longTermNotes": ""
        },
        "inputTokenCount": 15215,
        "totalTokenCount": 16607,
        "outputTokenCount": 395,
        "reasoningTokenCount": 997
    },
    "agentLogs": [
        {
      "id": "logb-107ed5d324314852",
      "title": "Turn 3",
      "logs": [
        {
          "text": "I will move Link to the right to check near the large wooden post for the ladder opening.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:04:07.597Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:04:07.597Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "right"
                }
              },
              "duration": 30
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010407Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=00f1f48bc1cfdcca6d139cddcd17581a63a874177bf16aae2b3640b51823184760426d68808e5c57a8be3e3398a9a6aa6543f10d2c212858aec0f5c3f4e8f7b9113062304004e746b49e18d8112b635dc2a7eb3b2a137f720291e265922d6692692e6e91062ab06c426423d0e4cd5ebe31944992bae41e44f7f07c9ade974416fec48ef852f6f7728a4cfdb10490e181e8f231ad64a1bd80415481bd3af443516ffc273591467986e463852bc0934311b736b094065a02445163feb12b7d38c5a876dce9828690639776281cdb5025fa97860f9f2615e787c447169688ebcf5eed9169557c79e8fb7e4e9c1fb1de2a6a11cc71b1060a366a5032afdbcc514113",
            "contextMemWatchValues": {
              "LINK_Y": "44CE4000"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514248,
        "_nanoseconds": 25000000
      },
      "updatedAt": {
        "_seconds": 1763514248,
        "_nanoseconds": 25000000
      }
    },
        {
      "id": "logb-d281d2f2fe0b4694",
      "title": "Turn 2",
      "logs": [
        {
          "text": "I will move Link down towards the camera, as the ladder leading back to the island is typically located on the side of the platform facing the land, which is currently in the foreground.\n\nTool: sendControllerInput called with payload {\"actions\":{\"mainStick\":{\"x\":\"128\",\"y\":\"0\"}},\"duration\":30}",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:03:51.741Z"
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514231,
        "_nanoseconds": 765000000
      },
      "updatedAt": {
        "_seconds": 1763514231,
        "_nanoseconds": 765000000
      }
    },
        {
      "id": "logb-6feefa11614e45cd",
      "title": "Turn 1",
      "logs": [
        {
          "text": "I will move Link down towards the camera to search for the ladder entrance on this platform.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:03:33.590Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:03:33.590Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "down",
                  "x": 128,
                  "y": 0,
                }
              },
              "duration": 30
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010333Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=924b119624bcb15658b1947224aded47a483ee6cea761302903351d6dd1a21de6ae27fc1900041a9e483ecd7c812f229708c436d3667e50ced691549b1f1eb8b6eca365ebf4f2eb811662316ea0b9c7dc2718db0d30e75eb894e52a02b1aa27234ad58c57664c303fbca8582cb4688c3ed9a7c9abb845a0a7ada9639395ca1f50572fb0067a393ecbe8af397ee25fb080542bd5c8f5a323fbe2c635bc8980ff535edc752bc2bef4766f50adb93a3f5480c77f9a759d5e3fdc41e61602c6ad621bcb5007752a3de4cf7cd8d74f4d4d9a099215cc4266e90014d10166daa7ad458ef4ec7886f0fd082fdd4f692b681377aa545da816f2dac017fc4a82b01776279",
            "contextMemWatchValues": {
              "LINK_Y": "44CE4000"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514214,
        "_nanoseconds": 55000000
      },
      "updatedAt": {
        "_seconds": 1763514214,
        "_nanoseconds": 55000000
      }
    },{
            "id": "logb-cab3f989bc0a4f48",
            "title": "Turn 8",
            "logs": [
                {
                    "text": "I will press the A button to continue the conversation with the character, hoping to gain information about the ladder.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-12-03T03:01:30.196Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-12-03T03:01:30.196Z",
                        "toolName": "sendControllerInput",
                        "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "right",
                  "x": 125,
                  "y": 155,
                }
              },
              "duration": 20
            },
                        "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030130Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=797d8621dbc41f5c51ddc270d27d4ce787ddb32de4754ec43633ed928ac5bc42ca0de0d17694e1aba0a079d765b5b4ec9d0dca92ab196bc596718abc4d44107e8934928a984325de769f6e9d884203c6dd8dadeb635dadc50b055ca3974a41ad6dc9892e4f0138f99c49e61bfe17b0ca9f399b93c605a0e0ad58f5ba75f99be89d53111a92971e0ef6484dce0579ad25d2a532277afeb7936618656904fb0a114cd93e6ec8b415c4a7b5a70313c6e8e86b008e41397f5646593b3363e602571fe134ec5c0d007de43c5687379b112f0a1000b629fa2aac0772d5b8c997ec5982d2fdc62e735792e3584b5a8a3c39b4457d285f55bbb184c71234c9f34d2aa398",
                        "contextMemWatchValues": {
                            "LINK_Y": "44CE4000"
                        },
                        "endStateMemWatchValues": {}
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1764730890,
                "_nanoseconds": 644000000
            },
            "updatedAt": {
                "_seconds": 1764730890,
                "_nanoseconds": 644000000
            }
        },{
      "id": "logb-07dee9bbc3dc4473",
      "title": "Turn 14",
      "logs": [
        {
          "text": "I will move Link to the right to step off the ledge and onto the ladder to begin climbing down.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:06:53.613Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:06:53.613Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "right"
                }
              },
              "duration": 20
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010653Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3c6cf0eabb288ec9768a1f8df57b573ece04ed162becc247ab1ffdd004a2e4a0f187af328204ac5e5ca78d992f8bba87a86f4b05e076a099c9fd7d225cbd3e395928254bc09753417e06b3b953589c4a09335585bfb7c7d3e1a1c3daad454949deca018ba9a06ede1bf4631e5d243093ab9a67bda1bc729719db7ad8b8934c9b05fd0dff852d42dc09b8a1ee79f6c3f0da0b6aa939b6a41bbf8ad57405c40e4aaf1c4ae7f6de30cdd555079c58704243324d19f87d3c431478fa77dd205fe097e541c85963fd8f98009e4100f5251d41e4677b4358dfc81d5ecc3ce6ecb93fc59cbb649a2657dcdb0151d391bef74fc87e82e88cf4c8958a1b056bf77962e490",
            "contextMemWatchValues": {
              "LINK_Y": "44C308AF"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514414,
        "_nanoseconds": 57000000
      },
      "updatedAt": {
        "_seconds": 1763514414,
        "_nanoseconds": 57000000
      }
    },
    {
      "id": "logb-0a63b5f05e2848a8",
      "title": "Turn 9",
      "logs": [
        {
          "text": "I will move Link to the right to walk through the gap in the railing and begin climbing down the ladder.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:05:39.121Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:05:39.121Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "right"
                }
              },
              "duration": 30
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010539Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6c13c41053f19e3b26d49fa995de469b5e25236a8ee1248e945fca8fa7ded62a19178b8cf6b14ca992c463c361a9a0da42c665998449e99246c0a7590cef07199894176094f95fbf9604a647f6000d080c7b7bf4bdffb421c60715fdc834fba898cdb8a6831787c03e60e94d72976f03978819e4c9b330f6e284102ff684b188034896e0c3f8586cfc0f5e6c252799e80a95153ee3f4cb658606825ae004a4c8fd85bd69a7640650f03b72633d3701b223f00f16510b33bbfcbbc9c6ae76d91249010ef51cebbed268ce8ea28b018b0513133b9e63f681ddd56136907a16b47e70f48fb154b75f5cb52a5fd9cac0c6d590888e2f1a8b2961c3b7ff8f7a6112be",
            "contextMemWatchValues": {
              "LINK_Y": "44CE4000"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514339,
        "_nanoseconds": 611000000
      },
      "updatedAt": {
        "_seconds": 1763514339,
        "_nanoseconds": 611000000
      }
    },

    {
      "id": "logb-225105be1c60419f",
      "title": "Turn 16",
      "logs": [
        {
          "text": "Link is still on the ladder and needs to descend further to reach the platform below, so I will continue holding down on the control stick.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:07:40.095Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:07:40.095Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "down"
                }
              },
              "duration": 60
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/11.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010740Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=388fdfd3ac7ccb1149ea40141e5dea468eb523d4f1d40ca242464b881f0e5848acbd5c47a7e6d1e6d243b5b3294015b49f12e8f57c353d63c3dbce6815bff8f2058aaeec4ec959c9a7e7b8e989b1ac55a4a4cb2a893927c1e6642aea2c9fd8d826396b03088edbd710be1f51fc20175a80a90a69c057f747ed4c7809ca75d68a6ef273695cbd965b7688b4a27e3db58aed1dfde3b1bad7ac3f84e7ed8b83cc9a0296a9fcc7862a909c08dced80429cae3bf721da38f679e0c530e843558ee6b45816f1151b305944e0dba9a9f04148e7280008a6df1f7c063f0021501a83e4a4a320ad135504ade213b984c93efb191ee5b39c498c6d90272e8a688a3384bcd9",
            "contextMemWatchValues": {
              "LINK_Y": "449F6000"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514460,
        "_nanoseconds": 557000000
      },
      "updatedAt": {
        "_seconds": 1763514460,
        "_nanoseconds": 557000000
      }
    },
    {
      "id": "logb-32ff6b1db278413e",
      "title": "Turn 7",
      "logs": [
        {
          "text": "I will move Link to the right to step into the gap in the railing and mount the ladder.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:05:13.597Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:05:13.597Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "right"
                }
              },
              "duration": 20
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010513Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=450763fff3a748f723f50f384b29c121515d2d2f843fbd07ece1385a7362955b24db1717fce654b75dcad8bf5825422e78ebc0e062beb3416c6322f8f16e12a9116685e47ff851ef897db1bfcc51837af30d7b5c1cbf2ede64cc7f72c5446ba852273481e7ebb168cba86ce38992ed8ae1ade8c6cf0fff684cf7e094c228fd45c5c89fa80dfb0e7093700e865e69d227e3a0e3f798c0a07295865bf3c0dda879220c404fa10f91205131ee50ba66ec6778a75baffd984ea9535f49a1c0c4db8ac9a08cc35692e6b5994c13fbb8c11d07436d739a45add3ee26917f5361887a16810bf47e159035a69495e220f6aed295d7ce969695bb27992a3ec2f540814a4a",
            "contextMemWatchValues": {
              "LINK_Y": "44CE4000"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514314,
        "_nanoseconds": 71000000
      },
      "updatedAt": {
        "_seconds": 1763514314,
        "_nanoseconds": 71000000
      }
    },
    {
      "id": "logb-3e86e968b66746fd",
      "title": "Turn 11",
      "logs": [
        {
          "text": "I will move Link slightly to the right to pass through the gap in the railing and grab the ladder.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:06:11.404Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:06:11.404Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "right"
                }
              },
              "duration": 30
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010611Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=aa0ecc428edf991c39a0e98b4e89ea9b70d3a9678e8792f0d5005415e81c0b32616e42695cfff53806870fdb5d84bf11830288c611d0a40da29975ed61780e3681667ce041dbc858e3da4c13d29a2179d26b0b7a2fcea0dbd73ff891d8d4a3d3dd00eb77ffa3def7af67436001a4d35c87d291bb439bf28b471991cab77f6b3b83f16495695db59355a537b53c4acfacf760fdd1a77ccdb4d51fed9794d1d7aa4b2a92047a851c88ce789c2c06c3b9ede5ccbb43603da2c78dd462a0bb06d866784e984dd8cbbf76a589fcc785b61e8a803487d5737d54a004cdb45db19fd5f8fdd259d14cecbe10b5d4a6cd593c2552ee3ef1c2cc5a15f5acf47ca6300ea84d",
            "contextMemWatchValues": {
              "LINK_Y": "44CE4000"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514371,
        "_nanoseconds": 825000000
      },
      "updatedAt": {
        "_seconds": 1763514371,
        "_nanoseconds": 825000000
      }
    },
    {
      "id": "logb-6cf0cd41b9854811",
      "title": "Turn 4",
      "logs": [
        {
          "text": "I will move Link to the right towards the visible gap in the railing, which is likely where the ladder is located.\n\nTool: sendControllerInput called with payload {\"actions\":{\"mainStick\":{\"direction\":\"right\"}},\"duration\":30}",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:04:28.190Z"
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514268,
        "_nanoseconds": 210000000
      },
      "updatedAt": {
        "_seconds": 1763514268,
        "_nanoseconds": 210000000
      }
    },
    {
      "id": "logb-6e28a96a49df426c",
      "title": "Turn 12",
      "logs": [
        {
          "text": "I will move Link to the right to step off the ledge and grab the ladder to climb down.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:06:26.362Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:06:26.362Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "right"
                }
              },
              "duration": 30
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010626Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b52caca452c5a2c02277db4cc62cbcfaec92893b46ad193ff567d82d7b4b5d2427cf39981acbf68febc0bb673f6f8a236cb40ef5fd86912758ff472f3a012253b66318adec4e518f6568966293520b5e0378e23d4b59b80ff52c96f3b26874d276370d0b8494eef5c4ecf8bf22cdbbf3e82855383bbfc75bc1eeb6767ed1174b4d12211c85b68d4a6d5000cb6455c94e8a305a4491d57d104b08e0dbadafc8b90ae013deb00e6e971d2783ac1a7991970afe9d47f3a3feb325256e5ec2b4f6be1f405a3c01de164ac43ae778c4948eaca038cbe57a5ee5f5144e63193ede4ddfaa232e2491095a9e6311ef2adca135fe5ad7dcbd6f821830d8aa59f050e12c87",
            "contextMemWatchValues": {
              "LINK_Y": "44CE4000"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514386,
        "_nanoseconds": 777000000
      },
      "updatedAt": {
        "_seconds": 1763514386,
        "_nanoseconds": 777000000
      }
    },
    {
      "id": "logb-8362477147dd4f68",
      "title": "Turn 10",
      "logs": [
        {
          "text": "I will move Link to the right to step off the ledge and onto the ladder.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:05:57.253Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:05:57.253Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "right"
                }
              },
              "duration": 30
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010557Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=15ed87f8a1995cf2e93fb70d391aaef95fc9695e9b701e09335ad333bf54bf55a6b0b842cc72965cd792dea33cbbec1ccd27e6d8b42adc18447ce5279c0f0230d8575248607789838c8c78cad4fd0f9eaf7919f155950d3958540c706c59dac1852d9bbd24075b7a290733ef7da6e809de78e139ce4422d4aa619214ccd7cb13187eff04c5731221f94c99b7451ec3b0412a969440d593c6194dc786a9c4419e0ede2b0ee8569aa66b28d33e2e7e04e64504855971e29a4c84ecfb632d0473043998a6456c9f1e251cc5476500124195ee90cb449604db3b68c7c226a344d7f98008a708fdfc5579645663b38956cd844065fc70f2f69b779ef922e8912f3658",
            "contextMemWatchValues": {
              "LINK_Y": "44CE4000"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514357,
        "_nanoseconds": 673000000
      },
      "updatedAt": {
        "_seconds": 1763514357,
        "_nanoseconds": 673000000
      }
    },
    {
      "id": "logb-9ccb5cab2e804900",
      "title": "Turn 6",
      "logs": [
        {
          "text": "I will move Link to the right to position him directly in front of the ladder gap in the railing.\n\nTool: sendControllerInput called with payload {\"actions\":{\"mainStick\":{\"direction\":\"right\"}},\"duration\":20}",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:05:01.613Z"
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514301,
        "_nanoseconds": 641000000
      },
      "updatedAt": {
        "_seconds": 1763514301,
        "_nanoseconds": 641000000
      }
    },
    {
      "id": "logb-bd870ef46ce74bb4",
      "title": "Turn 5",
      "logs": [
        {
          "text": "I will move Link to the right to enter the gap in the railing, which appears to be the location of the ladder.\n\nTool: sendControllerInput called with payload {\"actions\":{\"mainStick\":{\"direction\":\"right\"}},\"duration\":30}",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:04:40.871Z"
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514280,
        "_nanoseconds": 897000000
      },
      "updatedAt": {
        "_seconds": 1763514280,
        "_nanoseconds": 897000000
      }
    },
    {
      "id": "logb-dc096903d01e41af",
      "title": "Turn 15",
      "logs": [
        {
          "text": "Link is now holding onto the ladder, so I will move the control stick down to climb down to the platform below.\n\n",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:07:10.125Z"
          }
        },
        {
          "text": "",
          "metadata": {
            "type": "tool-call",
            "timestamp": "2025-11-19T01:07:10.125Z",
            "toolName": "sendControllerInput",
            "toolPayload": {
              "actions": {
                "mainStick": {
                  "direction": "down"
                }
              },
              "duration": 60
            },
            "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-a4428fc04abd4c01/ScreenShots/10.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251119T010710Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3b12fc9be03e66c2381a67ef7000291fd5881e55ddda9d30efc107be66afb60f801e142a94bbefc8a994f76be2edd887f02bafd044bfe5e63e82a511898d417ff74a245d61300fb39a4a15a359685c37aa193a18afee8c06209899acb256ec2170c2cdd1111e3fe16a6b8a3003edc2b4254a4c96cdfa98a6def502dd89a836be1f9048c6e8275cf8c7c1f6e783bd5c4132266950de7cbf0eee1de14e9cca02804432d807aed5126c9d4012f2dd134eff565554d5fe0b4ce04c1319833d966226570c9fe99b019d3d49a7597a8a90a39cc8d92da674e530e355ebd8492ccd392a94694dadc6738b9338f23c527087ecf77c9d7e8d91ecafb7462fb0910a0c1f59",
            "contextMemWatchValues": {
              "LINK_Y": "44B22000"
            },
            "endStateMemWatchValues": {}
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514430,
        "_nanoseconds": 551000000
      },
      "updatedAt": {
        "_seconds": 1763514430,
        "_nanoseconds": 551000000
      }
    },
    {
      "id": "logb-e69975a0e84445f2",
      "title": "Turn 8",
      "logs": [
        {
          "text": "I will move Link to the right to walk through the gap in the railing and grab onto the ladder.\n\nTool: sendControllerInput called with payload {\"actions\":{\"mainStick\":{\"direction\":\"right\"}},\"duration\":30}",
          "metadata": {
            "type": "message",
            "timestamp": "2025-11-19T01:05:26.054Z"
          }
        }
      ],
      "createdAt": {
        "_seconds": 1763514326,
        "_nanoseconds": 60000000
      },
      "updatedAt": {
        "_seconds": 1763514326,
        "_nanoseconds": 60000000
      }
    }
  ],
    "emulatorState": {
        "contextMemWatchValues": {
            "LINK_Y": "44CE4000"
        },
        "endStateMemWatchValues": {},
        "status": "running"
    },
    "bootConfig": {
        "id": "tst-cc0126623f1f45f6",
        "experimentId": null,
        "experimentRunGroupId": null,
        "agentConfig": {
            "systemPrompt": "You are a gaming agent playing GameCube games via screenshots and controller tools.\n\nObjective: Progress through the game and win.\n\nGuidelines:\n- Analyze each screenshot to understand the current game state\n- Choose the single most effective action to advance progress towards the task\n- Act decisively\n\nYou can either take action, or wait. Sometimes you may need to wait if the game is not progressing as expected.\n\nYou must provide a text response every time, even if taking an action. Your responses should be concise (1 sentence) and explain your reasoning for the chosen action.",
            "gameContext": "\nGameCube Controls for Zelda: Wind Waker\nMovement & Camera:\n\nControl Stick: Move Link (walk/run based on tilt)\nC-Stick: Control camera angle\nL-trigger: Z-target (lock onto enemies/NPCs)\nR-trigger: Hold to guard with shield\n\nActions:\n\nA button: Context-sensitive action (talk, open, climb, roll, pick up) - indicated by on-screen prompt\nB button: Sword attack (hold for charged spin attack when at full health)\n\nItems & Inventory:\n\nX, Y, Z buttons: Use assigned items (equip via pause menu)\nStart: Pause menu (access items, map, quest log)\n\nCombat Notes:\n\nA while Z-targeting: Jump attack or roll dodge (direction dependent)\nA after enemy swing (good timing): Parry counter\nControl Stick + B: Directional sword strikes\n\nImportant Mechanics:\n\nHold A near ledges: Hang/shimmy\nA near walls: Flatten against wall\nR while moving: Defensive sidestep\nWind Waker: Conduct songs by following on-screen button prompts in 3/4 or 4/4 time\n\nContext is key: A button changes function based on proximity to objects/NPCs (green icon shows available action).\n",
            "llmProvider": "google",
            "model": "gemini-2.5-flash",
            "maxIterations": 15,
            "temperature": 1,
            "turnMemoryLength": 3,
            "taskName": "Find and climb down the ladder",
            "taskDescription": "You start on a wooden platform. Locate the ladder, get onto it, and climb down",
            "longTermMemory": true
        },
        "emulatorConfig": {
            "gameId": "GZLE01",
            "platform": "gamecube",
            "mode": "turn-based",
            "startStateFilename": "ww_game_play_start.sav",
            "contextMemWatches": {
                "LINK_Y": {
                    "address": "803E4410",
                    "size": 4
                }
            },
            "endStateMemWatches": {},
            "id": "tst-cc0126623f1f45f6"
        },
        "goalConfig": {
            "successCondition": {
                "inputs": {
                    "LINK_Y": {
                        "name": "LINK_Y",
                        "type": "float",
                        "rawValue": "44CE4000"
                    }
                },
                "logic": {
                    "lhs": {
                        "input": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "operation": {
                        "id": "<",
                        "name": "<",
                        "hasLeftOperand": true,
                        "hasRightOperand": true
                    },
                    "rhs": {
                        "primitive": 1400
                    }
                }
            }
        }
    },
    "screenshots": {
        "s-0": {
            "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030030Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=108d740e0ff59a0154dd9ec5b544c9a91bc219f90a9f53c35b7f1979171b27539f03331737f5b4cd711452847a01108f1625401cc6b48ef1bd4609c6ed4a03acfce00938748a3cee20d5abc2a9b671ae029ff49260f8f7cd5664a654ba07346b57752126a311e79029f81af64818ad64d7f45cf3a5a4349b41ec60078e11245dadefd84d029967a1eea3602a9239671264617e992738f92496fb11ed1505ce3432a7523c4c9109f7502e23f779542fb00810d941ef5b54d467efec4d20f006a15ab7539c5e95afddacd81d689a48bf99c822b0dbeb126e8b884a41a34051a70cbd88ccc609c70ada4c4abc1fb16bfe897a2de4a9442a28253616af2777998d11",
            "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030030Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a0b7bd5327915070656dfceec5cfe8a8a42eaf4036dcab134dca5910e8a27fd58e380e6644e3603658416654a31e3e4d6e95e60e57cc7d029e62af91b36808bb849b801a3961b7f2cfd68545a0517e56bd1cb3a8d33275baeed561b08dcf42091e1900e266f6eda9b37095a32208f196fe09e21bbcd0c2531e68e1d5275e818e6108fab0e0477e8a040ad253f1a9bcca7b6d658ed3b884dfdfe125d64ba3a27b92a1195e9c2285fc27e6db91f1c39dcacb9d9ac34b093ab89c61847c87a07e9dfb369661a5028ca4e71d247f94bfae0c6385e0d88ea3f33b0d7308cc73db549442260d6939d821ac1d6e470963969bf11c3bf54191fe4d2a9fbe6e1fffa445bf"
        },
        "s-1": {
            "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030044Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8ce75a45b577b2a0c670612a73bc720e49199cea6c11547935a6c2701e66c3739edf12c1e53dfd3ef988f8e0d60e5764f48107f4c230c5f5be523bad8ba40eb912ff17e080ead7785cdb510caa9e9c15103aefd7b1bf46e7137f950482300159d31282803e6aa0aa4c40a8d14b196563198cd8899c18cfa8f96cc469b876ab3db48efceb08d1028c349aa17be5b615b73702b9c03b33881d9c0cad0164427af6f686300bc9f04a11208d552d1b234863cd0bf9fbf0b961f445941f0d016162f779971c94ec83a426a0c881602b35adbf3782f68506f6ecc76b924579bc0efec104ef39aba980297fe3f34211fa92ad883b9337434eabd1c2d6ddc0ed9873389f",
            "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030044Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4bf7acedd027ee8829acb8d39a950e49a9203d2e13d5f70fba633daac818071fcad83aafc9516c198ef3e5ef42ddb0bad9a5bfda43ee970f0e7aa36f09ab8923d77bc7445a16cbbb1bc4743af372770fe581808153d1dd29eafe832fd107fd5e5c41b31658220154826265665043d51ec6689eb4d910f0122422e908d8318f35ba69801a3ed06615eea2ca960e41d32831e73cde956f245bc7129020655840ca0e12f8d1b0745e5c273c67a946a0e91f24eb9ee4b24d0581494ef2adf3fbee6d5a2d732dbafcd13ee48cc1b171dc3ff7391fb5778b46d8fbd22150608b2344f8bb0d6eab504c4bfe377d0d057abc6f79f1ed599bf54ef68bd6d81c86f1d53e64"
        },
        "s-2": {
            "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5f89bb813fb25dadf66ea4c4d62740257627ec55dc4333113cfb06d27316b3c71b5bf9524d839f47a27fd7c0e9c177426842dffc7536e5b70c043d3e644c0c5e6ce8307064b157df9b6a42cca4242ac8969ba5f022957c091d69ac9e4df166ae71c18a2b6e7654c92e7e66a247d649703f3bcd3399fa3a06f6bcd5b18e8f406a2bfb21113707994de50f88c010fa502d1a999dd0251bc6dd64b575df58271ccf5d1bfa4e7e5966e69d32add491d0a741fc96d02f9a1209dca7de838f6266348b25ac80f3eb67f163148b5ec90ea26c3fec1ef4eb59f7517576dca9cea333b9270036a2da360fabccd14b09dde35eee93c35d79a31b4f193181c2f643f3e0ed60",
            "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=c584e83f33a3c60fd7362f03c63c27f03fa8101229c48ba88d6534f695f5b19106097fef2d19cc6b57fe3e1eceb39d011e021a7cb3e9442f062b324f2729c3eee82bb94bf6addc59a7bac3c1402e26e7885532a5a88c4502ce369bf119207cd0883844d35835f560c9cce167811c887bacba2be18ca2a0f7ba35f0bc26fbd6f3fefdeeb35b16f499dc1d00197056b7c9b2ccb2bfa2a4d530800b4b7579fe06107d98e44935b3509b50a9ceaa64ddec1a3512a2e320fcc926ce68103c1cc435f702386798c22f9ca551031dce2a2cd56c0ebc4ec7ab50c25468eeeefcfa17a41feaa8930b6bcdca01473c97384a6bfefc17413610e0fc1c93681c8150b59ade9c"
        },
        "s-3": {
            "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030102Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0f2e80e312aab46b5b23104fa4bcc83f2c9d517faca22c3b562b82e563affdeb0b74c98e69cecb9d32143d3343346de74fdd9c0bce2812184af237d7442cc3841cf61ba9b0a3ae1a718b917f50b02b0412c433d12324175f8779b75bade0fe7eeb839e46de9a57ee35363f76bb946cb9704a7f8ea971957b200fff6dab7b0618da46cb1745d69fc29818d409119f24e2167df72373be093f363106b2c07b7f754366d16d78a0b3c7764469f648accde9476833bda2b32d3005a456ccdd524e1c1dfc92d5fc3c30b5856f1990ce5246b8128ac28f9e5f0ce32ef92ea1f0e9d4c59053914e13de5ef254e4b2811806a456abe1b1f86aef5b6cdabc6ce733aaa602",
            "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030103Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=717c942ba3f2dc94e685c749aae00e756c9d725607aba2d10f69d35925db32ba14f8f0295c718d61521ed2e886419dc9b716f3a55a906550553068da947684ede33922b57393995f14f3644543ff047f55ec462d6b655cc08a7bbb5d9048056bfd9435c5f32dd978faaca49bcf53bfa14cd0ebd814f8b92099fb073a34ef279d1291bf1fe1a1b6083182854e0638d16d2b56e74c55c60b2730aea437164bb42ef022f90dde13c8794b99c6ecd143f5734ee74c8e352b608747f6212c4ab994f5fe49a2839397cf25eddc7daa35197c4061ad76d98617d01ead2508449507db9b04990d6f71746c793524dcd774ab4e249d1524970dadab6b65701f5806d435df"
        },
        "s-4": {
            "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030109Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=050f8b404ececee85cd18262d7101f091d88db43fce8c383238f7485aee64f88e1ab2a701120c860f9e693ff7dfe62c7f6853a061a82a7c136f7b3c98f4e802302706e126055f79a0ebab3d967979c6784451c3251c31082dfb499e25305507c74fc56c4fbaede84e0977da50226c7e223dd103eafa32023b53f81ca649a2e0ec67bc9495033cae74929d3d2d7026cb5ca1f7b8d2395ede75591159388e150b43dc26efdd0693f9b700e430fa19cca8573f19b77ceff757b90ab3b18327ec6501f971b345591d854c278f5638f1dc95ed4bbe9f853c73d134a3a03bf4b5329ee1cc415949d1db66b04e307fe0b9338ea810f3b9cff82b2b66318da669f12a8f3",
            "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030109Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5f679cba6e1a10727c26ea85eec08f831e83373385e2848cdb9c7d5b50168996e9e109416426904daf56da1c7df78d5e577c24c665704f376a1926d962a7b06489ce4ae30394c958838b4b0edfc762c890b08f3b19b96447b8eea23ace74b306f83733c6979a4a062b39f414077dc75651555935dc977ed480ca919605ce6f7b75a58c350c0521e5f57d39614fd21494e63b56e368eca85cb6fc4df5514c7bf7a9b0e2001bee6433f4af64108eaa52f01f0e297e161267ee1c2b2d6b538235ea6a8c4b23c2075e169e6677dea0ef4889b8cb275979ad63247ab1227d5988fd35eebf247385c34176c83197ac046d477c0743222c0787a554fc1167668fbd590e"
        },
        "s-5": {
            "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030114Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=73e3bccc7d24c6331273604513c9c2d7e5e51ce1d3efe2c0224e488ba5d6bf5f6c0fa5ba47449be2d1407f7d22d13e45c0eb6ec442e7500afca6863f2084cd72f379a16ba09bab81c1bf574c6d36aa5ebc74d2ee4c88fff16893fa41f5b53b189d545616e52c40f111296fed0d252b6bd5ea978a83baa45295abeb877b6ce1d268d91b7043eb0ce6342e4ee8b2cba82f0cce685e16517553f7d286cedfe5a0ef4a0dcd3bf65c20790937f4cca3389f41237eee8323a6ae4ce518cb257f022c67e17fbde432e61b0f8e66c431813e7efbadeda5b434aeb6c58d3701624f08ec5fa4d611636c5fbcdfbbba9aff1ea5714663c98c128fb48a0209fe6998a235608a",
            "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030114Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=07713c2488029d2e18d4c78d5247e276276a14d3880d15ef8b62cba70202347bfd2d0561820db6fc7675ef9c7fa30798ecd37438bc89b14243a516119589276747e285b3171e5de50c6ea2c0acfd3f5fa05027f5245193a39f5e3461a1593e15c0bff106487ee9e650ad9b02cc81377b458b783f68f61be680af1800c678ec5b2102d4acdbb218a7662301ac3b9845d25eb2358c4e59bbbcd2a5522c265caad09c950a68980a954f2c81dcd91a01058bc774fadb02a68d35673bb5b3c48abe8176249674e1af795c3552289e7f59f1f3ea38bb028d943f8a524b35787e0fef82afc0609a07a6e7e8986a3b98b707ee0e1fd0bda41d4fa7037bea84c66e9c19b7"
        },
        "s-6": {
            "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030121Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=00b75cfa8dafc36708b51b21138e071704b92f03561d32c2594f08378c8de11f151f2c050cfe2a795de23d5ff1690da0ccc434e32cb838189c486d7e5f8b570a0a53350a1215a2d40d7d1abe0ec9064c5cbddac3e1b8a8ba6b1b57dcd84697f4e63d0dae92cdd30129c38486d83a0ee4fe1315910dd89ce1b7a91c0c583a12c7c769c81b5375ad11d5d8a94e3b27cff2c0cd718766ff37e676270cc58c77abcfdb1e71c7c58182fcc165ffe367a9ef3c5a5679cb3a6181e4123366ce4555f069ee57f6cc0a534dd5c44f7327b7df7e787c0ee47c989ea291e308e80d1ed8262ced29b9ce88e8f3b38a8669acf24d7664ae2c2deb425f2ec78179a22eea9a505f",
            "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030121Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4432eefcc6421f2142ab2aad25801a72bb97f9217868cdc98858238e598b4b1a62987ee4752e1142edd11f6f13238470906a9034fbf0cf08350980f6470e86fd116dbd3f2409da06c6d190f2a4c22d48064934c0afe64a7496d1e07ad4d8a81b301a883549874a878e63eb84d5d9fa93fc54262e9b9a858820d5991cdc9743ba4d17bfa5e4e09465058ddbb82680394287c633a0876c27c6588299f0428f803e41fec4b1c01d6dd0e0bb1e7ebe1ea596fda691b9d3bcee4b1f0493f9d0049091620b327b9d9ecf69bb71aef7cade83d33816757c55552833147b9e6ce21fe536d3a55f833b3b54992e2cc5ef5435044ae0085c99a92d3b7dfd4fac7e071d0bb4"
        },
        "s-7": {
            "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030126Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=d3f643de4f701e72e399acdfb77b033877fbbe6f36b034886f327a1e212fb233962cd19e90a81b1f42978ab299fab868f70c2c3a13ec37bd852fc9b9970667a58acd01b95442cdda1c600c25f6eae8104f56c4e2e5d10d0ba2036e9d924584aea606830700229737190d433c9c8d0de3dda446355110d7b5d0bf3fe02263ea0fee3d6700a557c87875c8313de83f9f83a0a9e6519336da5ca9743e495236eceb77e07c038d56e5a0d6e6fc64ef7baa9b48e1f95b468b5cd9a071ccebf53e16369386c8a1013b17d13887c9be29ce56bf3e91965f353b3c87f15ee86a127822604d33664f11ef41546beb2bc4b4973e1292accf1182f6ed6fc73b32db1d4b88f9",
            "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030126Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=315ae518ca22256375ea88e91a0f384cd88718b0e5415d8f00c263d81c9fcadc36e6d5cfc0b7d89c54bc7002c3ee97b3cc192c9c65e433876ab14ae977af184761fe9fbb45988eef9f8528a259cc96fec37cb6937437fbcffcbd7b0fbb134028493514d28f3f85b75b88b410025111592f2d8be96d367c01b9a78e1da0f8fff4cf6013c8c284028634348c240cf43eb2f6d07974dc6ad0ab248912c7a1f1e93a91d342a11270951c1aa92655884fe4034b0d1e29d9777a81ee3a193d2ad195273b2a0c52830b2efa43902ad87849048efbef89d27864753d4c3fd01019f8bf327523d3a474035fa207298a9b8167e1e7de7cd969b263e4fe6b3be14519bebbd1"
        },
        "s-8": {
            "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030131Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=925440016463fa09e8583f51889b0061667085f2d7ec6be7624001d1190e7e44b142066852d25184d6a23252f265e4a78ef2158f6fb9a2b7b670e2f8c80bbf95f715d80451d8fb21d1f8918cbde5dfe520fc7ad7236e4a672a9faf697756b7d8cfe24c953ad5e171307643994b2366b8f9668a6816c423623aafbdb2dcffada0b43f38d58829659b7d84153f59283a219a08217a564872533801cf688b66512ac47800e71f40f74a818de9ee05644dcebe3df3807b0ba066ed6a692ccf3d0cff0457551082f38881b4db890870fbda3c7f9a0c3196e5b0521f8629fb652c8dae0132dfb772d4abf76cc2604df5cef9ea9db3b16fc2cbb0a5d44329a6b077cd67",
            "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cc0126623f1f45f6/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251203%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251203T030131Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=c090b6fddb529354e03d205e7cb7cef7fc9f8f41392b441ae60a97fdacf86430c0ec522ea7369021e06bd4ea524dd4daa9b4f2fd916e98e77e9572389aa04c1024693c77154ea900d0bf8d997c0e4f167bb8d82226e3964d9ba4cd307d8c513369e1d4405eaac01714791410308f86ed11f53a67a2e02644e312bda5271435ef072528f29a0488c6a0e30eb981d5c5ef40ee40b2a64c03498a4f3692c9acdea4f1af77d6176d302d5f267b5c0ab3f19d4fe5a293ea3a7f4066f0c26baad606da5d18e6ebcab71bae9f7804569bf7481859b90c268868869cd89941133af8da2a61787c0360c49eb26f0f56eced7e3b8f1685044d70e8d4d53e434c8a9d6585d8"
        }
    },
    "currentSuccessCondition": {
        "inputs": {
            "LINK_Y": {
                "name": "LINK_Y",
                "type": "float",
                "rawValue": "44CE4000"
            }
        },
        "logic": {
            "lhs": {
                "input": {
                    "name": "LINK_Y",
                    "type": "float"
                }
            },
            "operation": {
                "id": "<",
                "name": "<",
                "hasLeftOperand": true,
                "hasRightOperand": true
            },
            "rhs": {
                "primitive": 1400
            }
        }
    }
}
export const MockGetTraceLogsResponse = {"traces":[{"id":"trace-02ae4f00f0414f3f","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490123,"_nanoseconds":909000000},"updatedAt":{"_seconds":1758490123,"_nanoseconds":909000000},"logs":[]},{"id":"trace-0513b704435c4a14","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490063,"_nanoseconds":708000000},"updatedAt":{"_seconds":1758490063,"_nanoseconds":708000000},"logs":[]},{"id":"trace-0ab0c8c59b0d49bf","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490094,"_nanoseconds":27000000},"updatedAt":{"_seconds":1758490094,"_nanoseconds":27000000},"logs":[]},{"id":"trace-0aeb652f0c734598","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490078,"_nanoseconds":610000000},"updatedAt":{"_seconds":1758490078,"_nanoseconds":610000000},"logs":[]},{"id":"trace-0e911ecdd57940bf","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490159,"_nanoseconds":34000000},"updatedAt":{"_seconds":1758490159,"_nanoseconds":34000000},"logs":[]},{"id":"trace-1862c97e14eb4f1d","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490043,"_nanoseconds":558000000},"updatedAt":{"_seconds":1758490043,"_nanoseconds":558000000},"logs":[]},{"id":"trace-2b17a8f469a040ce","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490150,"_nanoseconds":367000000},"updatedAt":{"_seconds":1758490150,"_nanoseconds":367000000},"logs":[{"id":"trace-2b17a8f469a040ce","timestamp":"2025-09-21T21:29:10.345Z","level":"error","message":"error:SERV:req-02523177ca0144fc - Emulator setup failed: Must specify exchangeToken","createdAt":{"_seconds":1758490150,"_nanoseconds":370000000},"updatedAt":{"_seconds":1758490150,"_nanoseconds":370000000}}]},{"id":"trace-35660c28741c4bbf","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490168,"_nanoseconds":559000000},"updatedAt":{"_seconds":1758490168,"_nanoseconds":559000000},"logs":[]},{"id":"trace-373c8dcb9a014b8b","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490058,"_nanoseconds":769000000},"updatedAt":{"_seconds":1758490058,"_nanoseconds":769000000},"logs":[]},{"id":"trace-397792cbd17e4ad1","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490048,"_nanoseconds":719000000},"updatedAt":{"_seconds":1758490048,"_nanoseconds":719000000},"logs":[]},{"id":"trace-40f38e1a43c84fb1","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490138,"_nanoseconds":694000000},"updatedAt":{"_seconds":1758490138,"_nanoseconds":694000000},"logs":[]},{"id":"trace-42f031fea0024be0","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490147,"_nanoseconds":266000000},"updatedAt":{"_seconds":1758490147,"_nanoseconds":266000000},"logs":[{"id":"trace-42f031fea0024be0","timestamp":"2025-09-21T21:29:07.240Z","level":"error","message":"error:SERV:req-315ccfb2c989443b - Emulator setup failed: Must specify exchangeToken","createdAt":{"_seconds":1758490147,"_nanoseconds":261000000},"updatedAt":{"_seconds":1758490147,"_nanoseconds":261000000}}]},{"id":"trace-56d6b899a6254068","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490083,"_nanoseconds":940000000},"updatedAt":{"_seconds":1758490083,"_nanoseconds":940000000},"logs":[]},{"id":"trace-5b6a3f690cac4a41","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490140,"_nanoseconds":995000000},"updatedAt":{"_seconds":1758490140,"_nanoseconds":995000000},"logs":[{"id":"trace-5b6a3f690cac4a41","timestamp":"2025-09-21T21:29:00.989Z","level":"error","message":"error:SERV:req-a356d220ff01415a - Emulator setup failed: Must specify exchangeToken","createdAt":{"_seconds":1758490141,"_nanoseconds":0},"updatedAt":{"_seconds":1758490141,"_nanoseconds":0}}]},{"id":"trace-5fea35d1deef4887","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490068,"_nanoseconds":818000000},"updatedAt":{"_seconds":1758490068,"_nanoseconds":818000000},"logs":[]},{"id":"trace-6390aaab27d743ea","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490074,"_nanoseconds":40000000},"updatedAt":{"_seconds":1758490074,"_nanoseconds":40000000},"logs":[]},{"id":"trace-6aa4cb04a6584bdf","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490183,"_nanoseconds":926000000},"updatedAt":{"_seconds":1758490183,"_nanoseconds":926000000},"logs":[]},{"id":"trace-7168188902a1424e","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490173,"_nanoseconds":724000000},"updatedAt":{"_seconds":1758490173,"_nanoseconds":724000000},"logs":[]},{"id":"trace-7af7d12663de4d8c","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490134,"_nanoseconds":779000000},"updatedAt":{"_seconds":1758490134,"_nanoseconds":779000000},"logs":[{"id":"trace-7af7d12663de4d8c","timestamp":"2025-09-21T21:28:54.759Z","level":"error","message":"error:SERV:req-0a47c772488e491c - Emulator setup failed: Must specify exchangeToken","createdAt":{"_seconds":1758490134,"_nanoseconds":765000000},"updatedAt":{"_seconds":1758490134,"_nanoseconds":765000000}}]},{"id":"trace-86208d7d9f8d4b17","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490153,"_nanoseconds":516000000},"updatedAt":{"_seconds":1758490153,"_nanoseconds":516000000},"logs":[]},{"id":"trace-89a1de6257ab410b","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490103,"_nanoseconds":979000000},"updatedAt":{"_seconds":1758490103,"_nanoseconds":979000000},"logs":[]},{"id":"trace-8bc82dbc30304fdd","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490178,"_nanoseconds":541000000},"updatedAt":{"_seconds":1758490178,"_nanoseconds":541000000},"logs":[]},{"id":"trace-8ebe0c64c16949c4","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490128,"_nanoseconds":637000000},"updatedAt":{"_seconds":1758490128,"_nanoseconds":637000000},"logs":[]},{"id":"trace-a467b9cce44a46a8","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490163,"_nanoseconds":925000000},"updatedAt":{"_seconds":1758490163,"_nanoseconds":925000000},"logs":[]},{"id":"trace-bbbc038858fa42a0","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490113,"_nanoseconds":746000000},"updatedAt":{"_seconds":1758490113,"_nanoseconds":746000000},"logs":[]},{"id":"trace-bfcbb638492d459b","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490144,"_nanoseconds":166000000},"updatedAt":{"_seconds":1758490144,"_nanoseconds":166000000},"logs":[{"id":"trace-bfcbb638492d459b","timestamp":"2025-09-21T21:29:04.147Z","level":"error","message":"error:SERV:req-c452836a2add495a - Emulator setup failed: Must specify exchangeToken","createdAt":{"_seconds":1758490144,"_nanoseconds":164000000},"updatedAt":{"_seconds":1758490144,"_nanoseconds":164000000}}]},{"id":"trace-c13bdaf7e2fa4d7d","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490186,"_nanoseconds":262000000},"updatedAt":{"_seconds":1758490186,"_nanoseconds":262000000},"logs":[]},{"id":"trace-c1a9c36fa9e44f9b","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490108,"_nanoseconds":617000000},"updatedAt":{"_seconds":1758490108,"_nanoseconds":617000000},"logs":[]},{"id":"trace-ca8bf712eaa543d1","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490153,"_nanoseconds":977000000},"updatedAt":{"_seconds":1758490153,"_nanoseconds":977000000},"logs":[]},{"id":"trace-cb6636572ec34bc4","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490134,"_nanoseconds":5000000},"updatedAt":{"_seconds":1758490134,"_nanoseconds":5000000},"logs":[]},{"id":"trace-cc983c3e017b4874","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490137,"_nanoseconds":880000000},"updatedAt":{"_seconds":1758490137,"_nanoseconds":880000000},"logs":[{"id":"trace-cc983c3e017b4874","timestamp":"2025-09-21T21:28:57.860Z","level":"error","message":"error:SERV:req-a18595b374f5463d - Emulator setup failed: Must specify exchangeToken","createdAt":{"_seconds":1758490137,"_nanoseconds":866000000},"updatedAt":{"_seconds":1758490137,"_nanoseconds":866000000}}]},{"id":"trace-cd08e467688f4111","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490088,"_nanoseconds":740000000},"updatedAt":{"_seconds":1758490088,"_nanoseconds":740000000},"logs":[]},{"id":"trace-d239d21ba0dd4a8c","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490153,"_nanoseconds":667000000},"updatedAt":{"_seconds":1758490153,"_nanoseconds":667000000},"logs":[]},{"id":"trace-d8e86550d7074603","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490118,"_nanoseconds":698000000},"updatedAt":{"_seconds":1758490118,"_nanoseconds":698000000},"logs":[]},{"id":"trace-e7597f2afffa45ef","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490143,"_nanoseconds":963000000},"updatedAt":{"_seconds":1758490143,"_nanoseconds":963000000},"logs":[]},{"id":"trace-e927e40969384201","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490148,"_nanoseconds":636000000},"updatedAt":{"_seconds":1758490148,"_nanoseconds":636000000},"logs":[]},{"id":"trace-ea420f92f1674f6e","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490098,"_nanoseconds":666000000},"updatedAt":{"_seconds":1758490098,"_nanoseconds":666000000},"logs":[]},{"id":"trace-eab56badd0614fb7","testId":"tst-0ad3a06099cd442f","createdAt":{"_seconds":1758490054,"_nanoseconds":25000000},"updatedAt":{"_seconds":1758490054,"_nanoseconds":25000000},"logs":[]}]};

export const MockGetHistoryResponse = {
    "testResult": {
        "id": "tst-72ceaa09d6e1462d",
        "history": [
            {
                "id": "hslice-352a3f13f5fe404d",
                "turn": 1,
                "images": [
                    {
                        "id": "hatom-0ce4cd2bef7a4e1b",
                        "eventTimestamp": {
                            "_seconds": 1760226771,
                            "_nanoseconds": 647000000
                        },
                        "type": "screenshot",
                        "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-72ceaa09d6e1462d/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251011%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251011T235251Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6bd40c1ace4fc951bcca782c485a1dc022520bf91409fd5ec60a392fee28a1287436855da104e520956ed706237c51e2340a05612c3e4be4b14a9ca9bc5635d39318258cc8b4528f2082b113c0a20f2ca7754fc7714eb611bbf302f680fca7a620c1c4014ef5c12979aac7199d0ff9838dad13784dafb542352c35403f6944ab0d07287480e5b4f43696b473e9917571b81893d5a6975f2bbd147dc7d88de136895e3ddfc810da318c1ebf099c49d2c7759f6d8dddb15865b99fa09aaf859f646584d4f3d5c77d30243663f2c8f90eb0962269f8d2a6fb91c663bf7c117c6ba06a1bcf2a0e2edc62cf81009b1e1e3dc2f7dc58f7c8df8e1a26a79bb520af0ca0"
                    }
                ],
                "agentLogs": [
                    {
                        "id": "hatom-0eeca7a283da481b",
                        "eventTimestamp": {
                            "_seconds": 1760226771,
                            "_nanoseconds": 647000000
                        },
                        "type": "log",
                        "log": {
                            "text": "I will pan the camera to the right to look for the ladder on the side of the platform.",
                            "metadata": {
                                "type": "message",
                                "timestamp": "2025-10-11T23:52:51.647Z"
                            }
                        }
                    }
                ],
                "memoryWatches": [
                    {
                        "id": "hatom-4cf2040c29b84a60",
                        "eventTimestamp": {
                            "_seconds": 1760226771,
                            "_nanoseconds": 647000000
                        },
                        "type": "memory-watch",
                        "memoryWatch": {
                            "contextMemWatchValues": {
                                "LINK_X": "C83ED280",
                                "LINK_Y": "44CE4000",
                                "LINK_Z": "48992880"
                            },
                            "endStateMemWatchValues": {}
                        }
                    }
                ]
            },
            {
                "id": "hslice-77a3f65ed1784b96",
                "turn": 2,
                "images": [
                    {
                        "id": "hatom-0e4b825fc3814cba",
                        "eventTimestamp": {
                            "_seconds": 1760226777,
                            "_nanoseconds": 313000000
                        },
                        "type": "screenshot",
                        "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-72ceaa09d6e1462d/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251011%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251011T235257Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6ee112a4362b3e4208d89e56b265dca04422896bd5cf5d21822554c24b959bf11fb9b9b2c6e29e278638692a808456732775a887138204009b5d1928a33432ff1f0012b3d57bb5770737380069158d0a030221b03601b564a590462235d3365a2cb1f59aebb272e571b66aeaccdcee1c06652fb079f8d9832261ab8b9ddd2e4fd7481f5cf25164cef687013e14782495b23fd25370890c90420ed31a6a3f90759d52094253e058e4064141be6c5e7a8b20ba6fc1400b00637fb79a75f93e9e40208a21a6ae8b0d5ac0060e904ee443c573c1a197d431b273309575a59b9c81f077d09dee842dbe6d0df55db17c9f01ec4dc7addb06bef66381f37c6fb374ee19"
                    }
                ],
                "agentLogs": [
                    {
                        "id": "hatom-8cd92d8f77194c71",
                        "eventTimestamp": {
                            "_seconds": 1760226777,
                            "_nanoseconds": 313000000
                        },
                        "type": "log",
                        "log": {
                            "text": "I will now walk to the right to get to the ladder.",
                            "metadata": {
                                "type": "message",
                                "timestamp": "2025-10-11T23:52:57.313Z"
                            }
                        }
                    }
                ],
                "memoryWatches": [
                    {
                        "id": "hatom-6f43eb72a6484dca",
                        "eventTimestamp": {
                            "_seconds": 1760226777,
                            "_nanoseconds": 313000000
                        },
                        "type": "memory-watch",
                        "memoryWatch": {
                            "contextMemWatchValues": {
                                "LINK_X": "C83ED0CC",
                                "LINK_Y": "44CE4000",
                                "LINK_Z": "48991F8B"
                            },
                            "endStateMemWatchValues": {}
                        }
                    }
                ]
            },
            {
                "id": "hslice-0594e52197d7464a",
                "turn": 3,
                "images": [
                    {
                        "id": "hatom-c16f31b6b1c141c2",
                        "eventTimestamp": {
                            "_seconds": 1760226783,
                            "_nanoseconds": 220000000
                        },
                        "type": "screenshot",
                        "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-72ceaa09d6e1462d/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251011%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251011T235303Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a9e3ae12b7479b5c230c18ebfe5a4cf3e4ea814003d3ff0f030c9fb5e3cee84f14b4a966edc59fddb5a968dda06f51fb3f959bef28b8a43f5379cdf57f38e68c65ead4420cf203a5397191a8af8e7845aea50a0d20650738d7776a8d75c607e9e3a307538875c2ecd53534610ec1c4083434bf58381c3430d1aeba006b37291929de1e388ea38961b3094e9e570e5b166558b1f2cd7efbe13f817a33e7220d570fcc88888b100325b180076f2d54b11ddfab0502aed527671e3c52d3212c4af225837278fd9cb7ff96604f60bb3cb42332e05ab2a0d0ac7b53d63ac54af53eabe812927a926d27f15400f693f8a2e5adeeea8081db7e810d74e059a89058fea3"
                    }
                ],
                "agentLogs": [
                    {
                        "id": "hatom-a8f8ca1db3bb40aa",
                        "eventTimestamp": {
                            "_seconds": 1760226783,
                            "_nanoseconds": 220000000
                        },
                        "type": "log",
                        "log": {
                            "text": "I will now walk forward into the ladder to start climbing down.",
                            "metadata": {
                                "type": "message",
                                "timestamp": "2025-10-11T23:53:03.220Z"
                            }
                        }
                    }
                ],
                "memoryWatches": [
                    {
                        "id": "hatom-5d6258da4e7642ae",
                        "eventTimestamp": {
                            "_seconds": 1760226783,
                            "_nanoseconds": 220000000
                        },
                        "type": "memory-watch",
                        "memoryWatch": {
                            "contextMemWatchValues": {
                                "LINK_X": "C83EDC93",
                                "LINK_Y": "44CE4000",
                                "LINK_Z": "489919CB"
                            },
                            "endStateMemWatchValues": {}
                        }
                    }
                ]
            },
            {
                "id": "hslice-b602ceed24c74530",
                "turn": 4,
                "images": [
                    {
                        "id": "hatom-49baadf0bca64f09",
                        "eventTimestamp": {
                            "_seconds": 1760226800,
                            "_nanoseconds": 791000000
                        },
                        "type": "screenshot",
                        "screenshotName": "https://storage.googleapis.com/emubench-sessions/tst-72ceaa09d6e1462d/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20251011%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251011T235320Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6421ed6e9c57409ef70e0571e8070ccb738c0790593e6e136664a06cad37c4592de0438dc5c0db1a899b5a66d54044c464427998edc3ff2f3afaab73a42f8c24dbec43b773453d2dc2481f0795b80f2018418c86ac3275e6b30270b7d38daa202236e09f2d5811d10b146cbd984be3d0ee4a9f6091f6900b17fa0a0423c51347ad7e889bb79cdd68a06e4c1745da5a0a6d94944f4b66153cb622f2279e5ab01277bb5672adcb3c434caf664b25f0738f32f90e69dc267f36cd4f0bbeb06d6e91885a2cb73bf565c120d0b7b995ed908e6f5571896a4952efa33fc8665bd8baca1fb5ca8d9755b6d6ff135f8537fd88492b671a0e3de9cf2f5d3231cc11336fa1"
                    }
                ],
                "agentLogs": [
                    {
                        "id": "hatom-b98c223479114718",
                        "eventTimestamp": {
                            "_seconds": 1760226800,
                            "_nanoseconds": 791000000
                        },
                        "type": "log",
                        "log": {
                            "text": "I will now climb down the ladder by holding the main stick down.",
                            "metadata": {
                                "type": "message",
                                "timestamp": "2025-10-11T23:53:20.791Z"
                            }
                        }
                    }
                ],
                "memoryWatches": [
                    {
                        "id": "hatom-32b731a077c6405e",
                        "eventTimestamp": {
                            "_seconds": 1760226800,
                            "_nanoseconds": 791000000
                        },
                        "type": "memory-watch",
                        "memoryWatch": {
                            "contextMemWatchValues": {
                                "LINK_X": "C83E833D",
                                "LINK_Y": "44CE4000",
                                "LINK_Z": "48992184"
                            },
                            "endStateMemWatchValues": {}
                        }
                    }
                ]
            }
        ],
        "bootConfig": {
            "id": "bootcfg-583d24774efd4c9e",
            "emulatorConfig": {
                "gameId": "GZLE01",
                "platform": "gamecube",
                "mode": "turn-based",
                "startStateFilename": "ww_game_play_start.sav",
                "contextMemWatches": {
                    "LINK_X": {
                        "address": "803E440C",
                        "size": 4
                    },
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    },
                    "LINK_Z": {
                        "address": "803E4414",
                        "size": 4
                    }
                },
                "endStateMemWatches": [],
                "id": "tst-72ceaa09d6e1462d"
            },
            "agentConfig": {
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "llmProvider": "google",
                "model": "gemini-2.5-pro",
                "maxIterations": 5,
                "temperature": 1,
                "turnMemoryLength": 3,
                "taskName": "Find and climb down the ladder",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down."
            },
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float",
                            "rawValue": "44CE4000",
                            "parsedValue": 1650
                        }
                    },
                    "logic": {
                        "operation": {
                            "id": "emuop-af29ae7e9ea04027",
                            "name": "<",
                            "hasLeftOperand": true,
                            "hasRightOperand": true
                        },
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "type": "float",
                                "pointerOffsets": [],
                                "rawValue": -1
                            }
                        },
                        "rhs": {
                            "primitive": 1600
                        }
                    }
                }
            },
            "experimentId": "exp-3f37dff33efb45a1",
            "createdAt": {
                "_seconds": 1760226740,
                "_nanoseconds": 846000000
            },
            "updatedAt": {
                "_seconds": 1760226740,
                "_nanoseconds": 846000000
            }
        },
        "result": {
            "emuCondition": {
                "inputs": {
                    "LINK_Y": {
                        "name": "LINK_Y",
                        "type": "float",
                        "rawValue": "44CE4000",
                        "parsedValue": 1650
                    }
                },
                "logic": {
                    "operation": {
                        "id": "emuop-af29ae7e9ea04027",
                        "name": "<",
                        "hasLeftOperand": true,
                        "hasRightOperand": true
                    },
                    "lhs": {
                        "input": {
                            "name": "LINK_Y",
                            "type": "float",
                            "pointerOffsets": [],
                            "rawValue": -1
                        }
                    },
                    "rhs": {
                        "primitive": 1600
                    }
                }
            },
            "conditionResult": "failed",
            "conditionPrimitiveResult": false,
            "errorDetails": ""
        },
        "experimentId": "exp-3f37dff33efb45a1",
        "createdAt": {
            "_seconds": 1760226801,
            "_nanoseconds": 220000000
        },
        "updatedAt": {
            "_seconds": 1760226801,
            "_nanoseconds": 220000000
        }
    }
};

export const MockGetExperimentSummaryResponse = {
    "runGroupSummaries": [{
        "id": "rg-1",
        "tests": {
            "tst-1": {
                "agentState":{"id":"astate-d95e38d351f945ee","status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":446000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":446000000}},
                "emulatorState":{"id":"estate-1","contextMemWatchValues":{"LINK_X":"C83E0680","LINK_Y":"455AC000"},"endStateMemWatchValues":{},"status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":498000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":498000000}},
                "currentCondition":{"inputs":{"LINK_X":{"name":"LINK_X","type":"float","parsedValue":1000},"LINK_Y":{"name":"LINK_Y","type":"float","parsedValue":1600}},"logic":{"operation":{"id":"emuop-b73a1dcb9e9447ac","name":"<","hasLeftOperand":true,"hasRightOperand":true},"lhs":{"input":{"name":"LINK_X","type":"float","pointerOffsets":[],"rawValue":-1}},"rhs":{"primitive":0}}}
            },
            "tst-2": {
                "agentState":{"id":"astate-d95e38d351f945ee","status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":446000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":446000000}},
                "emulatorState":{"id":"estate-1","contextMemWatchValues":{"LINK_X":"C83E0680","LINK_Y":"455AC000"},"endStateMemWatchValues":{},"status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":498000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":498000000}}
            },
            "tst-3": {
                "agentState":{"id":"astate-d95e38d351f945ee","status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":446000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":446000000}},
                "emulatorState":{"id":"estate-1","contextMemWatchValues":{"LINK_X":"C83E0680","LINK_Y":"455AC000"},"endStateMemWatchValues":{},"status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":498000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":498000000}}
            },
        }
    }, {
        "id": "rg-2",
        "tests": {
            "tst-4": {
                "agentState":{"id":"astate-d95e38d351f945ee","status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":446000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":446000000}},
                "emulatorState":{"id":"estate-1","contextMemWatchValues":{"LINK_X":"C83E0680","LINK_Y":"455AC000"},"endStateMemWatchValues":{},"status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":498000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":498000000}}
            },
            "tst-5": {
                "agentState":{"id":"astate-d95e38d351f945ee","status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":446000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":446000000}},
                "emulatorState":{"id":"estate-1","contextMemWatchValues":{"LINK_X":"C83E0680","LINK_Y":"455AC000"},"endStateMemWatchValues":{},"status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":498000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":498000000}}
            },
            "tst-6": {
                "agentState":{"id":"astate-d95e38d351f945ee","status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":446000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":446000000}},
                "emulatorState":{"id":"estate-1","contextMemWatchValues":{"LINK_X":"C83E0680","LINK_Y":"455AC000"},"endStateMemWatchValues":{},"status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":498000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":498000000}}
            },
        }
    }]
}
