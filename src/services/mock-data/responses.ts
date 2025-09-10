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
    "testState": {
        "stateHistory": {
            "1": {
                "contextMemWatchValues": {
                    "GAME_ID": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
            "2": {
                "contextMemWatchValues": {
                    "GAME_ID": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
            "3": {
                "contextMemWatchValues": {
                    "GAME_ID": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
            "4": {
                "contextMemWatchValues": {
                    "GAME_ID": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
            "5": {
                "contextMemWatchValues": {
                    "GAME_ID": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
            "6": {
                "contextMemWatchValues": {
                    "GAME_ID": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
            "7": {
                "contextMemWatchValues": {
                    "GAME_ID": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
            "8": {
                "contextMemWatchValues": {
                    "GAME_ID": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
            "9": {
                "contextMemWatchValues": {
                    "GAME_ID": "475A4C453031"
                },
                "endStateMemWatchValues": {}
            },
        },
        "id": "TEST_STATE",
        "contextMemWatchValues": {
            "GAME_ID": "475A4C453031"
        },
        "endStateMemWatchValues": {},
        "status": "emulator-ready",
        "createdAt": {
            "_seconds": 1753327197,
            "_nanoseconds": 407000000
        }
    },
    "screenshots": {
        "0.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031749Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5ad167b84e970e3372a4eb7302cddedd06f44034fc14dc233c9beac3b450386c3f942cb2d22786e0a3de292d755fd53fd703098645f890f8c7e03c85c6ca1af7bf8923699080767754151ec5440b7cd13e5aabf90b838c88cc942931256601df71ea3378fe04459b57432f60273e2173b954d4818e34f57ac8f990609447971bdd16ce9df6744262f03f93d69cc8b94185d1b39abb6846472b684b4db63ed9ee05967a71f7879499e65ac676fb52125d5c30d8158eb048fb704997db601e009c0796f064f5bb418b6bd17e14a72422a052ce19edee2674dbf6681335bd41c922a26f0f4ccc2a9c16bf218c1710b610849174594825a7c2e8a00a0129763ef3d3",
        "1.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031908Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=af7f0e252e9d01743ef6d64cf07b67f4fdbcb041b7bed1bf923e652e567417fe9b10ed08bf20dd9f347d0803ae1476e4da6f0208c5a1e02e55ebadd22be82db2096da6efe55c871192ba3597e270a8b89c0647584c186f95198cb5760aad7e1af781fa954e888c92ba0af580419ad77c2f1b156f4030ab9f153eb9a23baa14fa9a462b67888501089d8ad4fc706b153cfaae84be7499540a616a207c555c82fdeb5eb2a2ce30e9edebe7b63267818a2c4636f486a19f201e3aea7b9d33c1d81b62f856b31f03479ea005020e06d4b5a6b59e6a08d642f1042cb611bbfc310c58250e895e58a7fa2c34a53e810fbef2b40c34e3348edadfbc20394275616546e7",
        "2.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031913Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=dae644d51f6accab4fdc505eafaa97e07fb9c5679d9e67b4752e39936a5bc3ab63bb5f1a64380ad37ee24295d6fc5abad8797df2a4e89835a1953c1bd0be2fe73f9d8a93074fc5c74d71a8d501b0535bbff9b1f83ef55c412c67dc9dbdb18b0d2786dae7daa35b22e8d5f55fd38a7ae03db6323738872d5c97ecd4c424cdbc870e2ff8f25d903190143d349991fa3447c13760c5058dc8ab0e215c35eb9a54161ef3f33a263de43c0aa1c25f484280e39626f97d8aaa4fc83816a10cfdf9d51e3ced856a6431e4291a41b0b043fc3fa89aa6d7fc598c4dc9944f8e67f13100b65cac9305ee0ccab8ddb167f1ad9b3b9556a15b7f4598c95bd1cb0990f69ee624",
        "3.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031923Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=126a68f2ef092907e97db4d2d6ba4d1564740fd232c8893bbf7c2122374101932fe08df13f7199644d572830c627c7dd9d5e52d17f732b42e023557a825124a5b5357265bae7b53711f6ff56ae38bcf902b85f371abf61128d366c9de029ed5cbebd99afaef5e5a6f82648f4257e4a8b5ab1048315276556559776274f0d437ef0b0c949e37cc519e9daad9943b06ecf4827540ea5363c1cb6486971ab9c300d8b6b614b729289ad0dc01eba14ba52835b9782cfbc47af21f0657130660adb5d13fda5eec452424c7308b572dbbc668a53795085ac6012e73e0d70104c36f9fc36cfe2b11cef9bc0eb409b940e8428b7c10e96bd8ab68670fd5d6086858da18c",
        "4.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031933Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ce3408756fea75bda745f4f0732cc8551108951fd9558574c2b613417d23ebd2232d2c0cde32c47a0a874c3e4df0f9f5b2156dd2b9ab14dcc2aef448c89c8ff62979a454207d8f8a48e4fd0956cf9fb0a44547181e7e955306fa5343f98e912e4f9b6717d05cf9d3b1980fe85b29e10c78c7762ea7ce2b84d45cb49031c1843dd7c574f58cfa48cfcb0023f312b8d1c2a514f5f47a0afd2db1ac96aed87435865a097570da4d8175db61828de4c4ce941381ed0971b0eff224ef0e92adc9349a434f55bd85e10accb682a94b585e3830c9c5e27bdb8048030ba5e4937c28dfe6432051301d4e71200cbeecf1da117fba47c2b53c5042d5b61db687b71fc49525",
        "5.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031938Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1b418d06794b9dea8db248583cdcaae7d5d4dd8551a81372cd6f8ccd4a5e794a6492e8dfff36120358e7c7daf884efc247bb90307b44ea7ce984fed854549392796f1ededf893f140bcb82c3ef98bed838581892a079fab6a00afa4d2bd7fa7943bfc616dc84036b3d0a19c603ce7a1846261f5c22149cbbd53316999dd20ec0c94c70c72a41cada82d9b8ffd90416cedf5aef250e3a0c8285aac1279563a873ded414d5df395e6e91da5ac322e170a9b5bbb7e57dd8514115dd1f330346e53f585083733ce2b3db634552bf842dd5295b4d9b596f1810ee1ebebb765d4c0fe9fd2c431da5d67334dde9197c2df1555c38cd718450054740f35f94fe9a32fcfc",
        "6.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031943Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5905717ccf0a8a5883e11d4a6da2576acddd0250580406380b96bdf2124e8abbbfd6117d653715bcb6b03a778d30dae526343092f3da183d531761167632569c05be104c70658e2843f28a593e2864afd38a4abbf001287120f3150846798a0dc9418f48892128356835bbcab6adc762889a76721167cb1b004e5e92dd7116a5eed024e01c991634e00bc6331af8427fb77b298b06db73076d89be4fec50aacf9aabe3aa2063065d04fb2abb62a32f28c087e9cc62753434ea614dd16728567143bc4131d8b9573cb995f1656678e70df01bd5c3abdbdd0baf6d9d4beb4fc9a8c5c07438e009b0471784546bc2ad369e5df0ff6723b73d2f3c4803ea03ed0bd3",
        "7.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031948Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6f358dcecae886faff6897b7dcdb4727ea4c2d6332a69ed42fd8331e9277166d29f1007ace14175a5e2758111a6b195671fdbb142f7d7c9ee32a73a1882ce4fafdfc870a57c13571d59b9f1cff5024ce0e8431fe4e197d8709dbee7e4aac38915c28054efc889a6ad49c206ae4fbe633b55654733188e4c9747b84beea5ec1b967b3cbf015fe49a3810da16650a39f1d6a014f20aed7ad3ed5d81600a122535388e2f273aa6e59d5757f70dd7595a44180b2ea4f7bf6739b99343cab1a68bd45d21e981ad9913520a769e9ba46b39c7d3a991ac9c700625334ef995c485bbd4bc611e05d1a438ef0e398f8b8359c56cf55c75ef0e6dee77ddc858d598f34fa7b",
        "8.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031953Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=68c920009e791c5ec0b534ab24e7a24c9b90d0cf734e3f10a63792a2e934c5f4100b51e191d47fddff69ac1795887998fe0bca70f612a398d60b18b3b433aa079e12124476bb399cf2568a8b6de5ed24ff8dd18ff9699a9a0010422e6e60fa68e356da786525ccfb0cf723abd3e1f2a1f2695fbbaf376e70993777e159c806c5bfdcb3febe87589475cd009bd12a23fff7994838e5b6685122ff9aa76724de3d344c18e9882bceb66cd82342f2470797273760baa0069b11a0d07bf26d34b6f890d2b194be1fa6ecf4eb5d7ed5dbcd129c1c0e2d5da35e99258ad94eebecd74fc2089ff23b570bf1a0b9d7fb9824bb0e2e906248c16909f46da281007b43b9a7",
        "9.png": "https://storage.googleapis.com/emubench-sessions/tst-4c0c84515a864e53/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250724T031958Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=c4e46729beb9c6501649156e6dd785b922792650c68d1d58882fb6276bddd280ed15a98cc99a75c17983288420a48fda544e2ff2ee214079c58ea77bad2631fdbbd56d74fdc4af0e6cb649a258fda9ca08ce8974e51311cebb2cddb955d03fc75e85f52b86cfedabc994e19c5197203b64c8ab151208187c3fc2155488229ddc982ba0003c70f97021559e877cf2f2aa4e396c5c5481cea8e178153381fbd323db9b0427ea8a4cd1ff143adcfd9a853cbe1b102a734a701c38ade30bdac5c6e96f8dabf5410c044cc6897c41e9e86f70fa12a9b24dced46ca8e1a5c8e933845b2d7107793c5b0c6784f37e89e25561c4281a986da1e40fdcc2d7043098c3ec4e"
    },
    "agentLogs": [
        {
            "id": "lp7081ANdUK4yydv3RAT",
            "title": "Turn 9",
            "logs": [
                {
                    "text": "I will wait for the next screen to load.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-24T03:19:57.272Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-24T03:19:57.272Z",
                        "toolName": "wait",
                        "toolPayload": {
                            "frames": 60
                        },
                        "screenshotName": "8.png"
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1753327197,
                "_nanoseconds": 445000000
            }
        },
        {
            "id": "Z6dGgU5usDYVBKapK4QT",
            "title": "Turn 8",
            "logs": [
                {
                    "text": "I will press the \"A\" button to confirm creating a save file, then wait to see the next screen.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-24T03:19:49.318Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-24T03:19:49.318Z",
                        "toolName": "sendControllerInput",
                        "toolPayload": {
                            "actions": {
                                "buttons": {
                                    "a": true
                                }
                            },
                            "duration": "5"
                        },
                        "screenshotName": "7.png"
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1753327189,
                "_nanoseconds": 486000000
            }
        },
        {
            "id": "8CYnZc9SfIuXI6BOjgi3",
            "title": "Turn 7",
            "logs": [
                {
                    "text": "I will press the \"A\" button again to confirm my choice to create a save file.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-24T03:19:43.740Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-24T03:19:43.740Z",
                        "toolName": "sendControllerInput",
                        "toolPayload": {
                            "actions": {
                                "buttons": {
                                    "a": true
                                }
                            },
                            "duration": "5"
                        },
                        "screenshotName": "6.png"
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1753327183,
                "_nanoseconds": 906000000
            }
        },
        {
            "id": "cFbkRJrGgFcgwsQopF4l",
            "title": "Turn 6",
            "logs": [
                {
                    "text": "I am pressing the \"A\" button to confirm that I want to create a new save file.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-24T03:19:38.468Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-24T03:19:38.468Z",
                        "toolName": "sendControllerInput",
                        "toolPayload": {
                            "actions": {
                                "buttons": {
                                    "a": true
                                }
                            },
                            "duration": "5"
                        },
                        "screenshotName": "5.png"
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1753327178,
                "_nanoseconds": 672000000
            }
        },
        {
            "id": "y0iQkug7Qoor2RteS2e7",
            "title": "Turn 5",
            "logs": [
                {
                    "text": "I need to select \"Yes\" to create a new save file, so I will move the cursor to the left.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-24T03:19:34.280Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-24T03:19:34.280Z",
                        "toolName": "sendControllerInput",
                        "toolPayload": {
                            "actions": {
                                "mainStick": {
                                    "direction": "left"
                                }
                            },
                            "duration": "5"
                        },
                        "screenshotName": "4.png"
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1753327174,
                "_nanoseconds": 490000000
            }
        },
        {
            "id": "ktLYNmGTX2Z50IS8jHPB",
            "title": "Turn 4",
            "logs": [
                {
                    "text": "I will wait for the save file screen to load before making my next move.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-24T03:19:29.108Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-24T03:19:29.108Z",
                        "toolName": "wait",
                        "toolPayload": {
                            "frames": 60
                        },
                        "screenshotName": "3.png"
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1753327169,
                "_nanoseconds": 399000000
            }
        },
        {
            "id": "OLppErTVprnfzDbxFQpN",
            "title": "Turn 3",
            "logs": [
                {
                    "text": "I will press the start button again, this time for longer, to proceed to the save file selection screen.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-24T03:19:20.159Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-24T03:19:20.159Z",
                        "toolName": "sendControllerInput",
                        "toolPayload": {
                            "actions": {
                                "buttons": {
                                    "start": true
                                }
                            },
                            "duration": "15"
                        },
                        "screenshotName": "2.png"
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1753327160,
                "_nanoseconds": 384000000
            }
        },
        {
            "id": "5NgrKz9DWknQl8xhFvU4",
            "title": "Turn 2",
            "logs": [
                {
                    "text": "I am pressing the \"A\" button to select \"Zelda\" and start a new game.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-24T03:19:11.625Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-24T03:19:11.625Z",
                        "toolName": "sendControllerInput",
                        "toolPayload": {
                            "actions": {
                                "buttons": {
                                    "a": true
                                }
                            },
                            "duration": "5"
                        },
                        "screenshotName": "1.png"
                    }
                }
            ],
            "createdAt": {
                "_seconds": 1753327151,
                "_nanoseconds": 832000000
            }
        },
        {
            "id": "HHTAiMbvE9SEgUJZNaLS",
            "title": "Turn 1",
            "logs": [
                {
                    "text": "I will press the start button to begin the process of starting a new game.",
                    "metadata": {
                        "type": "message",
                        "timestamp": "2025-07-24T03:19:06.718Z"
                    }
                },
                {
                    "text": "",
                    "metadata": {
                        "type": "tool-call",
                        "timestamp": "2025-07-24T03:19:06.718Z",
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
                "_seconds": 1753327147,
                "_nanoseconds": 12000000
            }
        }
    ],
    "emulatorStatus": "running",
    "agentStatus": "running",
    "goalConfig": {
        "condition": {
            "inputs": {
                "GAME_ID": {
                    "name": "GAME_ID",
                    "type": "chars",
                    "pointerOffsets": [],
                    "rawValue": "x"
                }
            },
            "logic": {
                "operation": {
                    "id": "emuop-384f9b513a464ec0",
                    "name": "==",
                    "hasLeftOperand": true,
                    "hasRightOperand": true
                },
                "lhs": {
                    "input": {
                        "name": "GAME_ID",
                        "type": "chars",
                        "pointerOffsets": [],
                        "rawValue": "x"
                    }
                },
                "rhs": {
                    "input": {
                        "name": "GAME_ID",
                        "type": "chars",
                        "pointerOffsets": [],
                        "rawValue": "x"
                    }
                }
            }
        }
    }
}
