export const TESTS_PUBLIC_MOCK = [
    {
        "id": "tst-17e78521d9774913",
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784289,
            "nanoseconds": 577000000
        },
        "emulatorState": {
            "status": "finished"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784190,
            "nanoseconds": 467000000
        },
        "agentState": {
            "id": "astate-f8648893475b442b",
            "status": "finished"
        },
        "testState": {
            "id": "tst-17e78521d9774913",
            "stateHistory": {
                "turn_1": {
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
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "status": "finished",
            "screenshots": {}
        },
        "bootConfig": {
            "emulatorConfig": {
                "gameId": "GZLE01",
                "platform": "gamecube",
                "endStateMemWatches": {},
                "mode": "turn-based",
                "startStateFilename": "ww_game_play_start.sav",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-17e78521d9774913"
            },
            "agentConfig": {
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "model": "gpt-4o",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "maxIterations": "5",
                "contextHistorySize": 3,
                "temperature": 1,
                "taskName": "Find and climb down the ladder"
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "id": "bootcfg-7034768c719b4188",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    },
                    "logic": {
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "name": "LINK_Y",
                                "pointerOffsets": []
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "name": "<"
                        }
                    }
                }
            }
        },
        "screenshots": {
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003127Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=600d10f6452fecea44aeb686d69c0f1132def7f130cc589fc23a7073f477a7c9160d7ea5eb182cc1759b77e7035de2014024431a11c53a125cf060ab6e82fae5bc4faff4d7780c4f67206cb4b1d4273ec429cbf8cb0c63804776e20aaced1d7a0e93c6a1bceab72bc6db7664505c8ddb5e74a71ee3a4ae634241ce12a29438323d2871fbb817c6892eb3bd2993924488b7c188c23cc78fa13707e9555c22b8b15bd4431b9663e6bf5421bd29484dbd1c22cd39b830f0cf1d1211884c46b7ff4f494c9a3750da1685566da0040cfc16392327552ea1db687ea7c58b726c3b78c54035c8f4fbf100114a4e8a6675455dda431ebcad8afabdf5ebaf22a3c8ef1614",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003127Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0ba8a1b7fd97cc7c239969ce619daa901e3c481f9253f323e701c4f5ee7cbd2793800158119a31a78956779d42bf9338faddccc1e18d92e4cef7d1e5b9aecb573366c4e494848ef6efcb4045f5d9e531ba9fde98502d5bddd64134a4d148411f5531a66fe167609c6a083dbbc56f3b3ad1f6b88b22e6eb77a5f095dbe102abf5f2d2cf6c78529bb3b545c45406169305517b33965cb483d3fb5dcdc424995e25c1064d09807b6031e16cf26de28c18fd1847006a7aa2f1358265a4bff5507737150f5ba92f793b2406fc5bdf3704ffda45d1ae07589fe59cb7342c8e0e99dcd8f7c0b90cdc571415bba61c3819257a1ebccb73e00c323b5a1157c1882ed3c34d"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003033Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0f5846ef9b1e56d8274079061c04c4d25b565beee44b8f0482718c4e9f30d82965954a65267762465661ff5301b2169289ea7377ea1d09c9475f86d84ef3aae1f167b593cb33596af0ba93836b9bb3468d9d421e1ce76d484f319d1cf194c90d7997a6d32a3fa003a57d13caa9af2b86bd82430d520265fc1af12a60efb592a77fd65930886bca89d2e5e6e7a4022d6e8e277b600dac1f23a7976d10916aff4ee534faf0bc67a453df46f58437e46495982ed3e273e1f6d11a271737ac66455732a5fbe9b031518b37d8d7e43b59fcef900f11a3e5023e6fa26fe28e2657816591d45c26e414d105d7e34361f109dca4bbfe37e5f4c9c69a9d0f1bf21ac227b4",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003033Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0c3ad51a19806c306b67c1aae19f7c9031de16031c309f2f6f17192ab47311785150058bb89d02e283452d4c99cc35428f3a0e7eeee82ed225d814afb4f241963ef79652ee9b1e97b1341e940dfbef0d02893a69ad458a0ff2289e2a853d8ed927aad015a3a0714239c517703841afa73ecd6507ea07921de7e85fcbe84ab5d9fb930d75067e81e81c0fddd8329a2730c8f9785830fede8441d3c6d823ca0391fcc1ff31532cd200f79ab0c45322fce5b9266276a7ef05ff70e4a222e7fa9659c215d86db19d3e34626f5cc4aa1f5cd49f95d5b6f3ac466f457c8e612ad61e92adefaf2faa91a185bc37a670647314656ef47b226a59d7638f43ab7c2e8ff7dd"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003044Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=97a1a5e9cdb9d788b2fad327752e30658fe113b96d98cb94989ecd548f3c091b2b2f0888b59db94c3b1e662a21db2988f662fa2f471db4ee1b9a14aa0c25affb0f26cf10935f69a7dc42254f14cfee915f39b92554f8f4200f8a9868c610be6ee6b2d4b225ddb6fefffb35dd4cfd10dae5cefc9f5ea718cf1a2f52c69a4d0f623dc90f611691886959380846f36771f4324628f9705756bdb25138f318769e79267e53475213a596d40e66b6904007b7ee19c3f9af7500397514ff433b9bb4e92150678346f34e5e1b28b5a00c5d5afd997cf0447c115ca3b72917c1f448f77a094ddedf017f51c0b604d01acfc0be55102dd69bb95c2e4297236d978c41f6b3",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003044Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9a633f5a6f416e6c2ef7e8041d7f81e592e783a54ab573a218c886b1cff0dfb55f7f4b6fcf2ccf571b471bb1fed404184678ce0ed86f9c8bc3947ab53fcd866f0f27251d3f5d42133daff69e962421d9117628d7017b5fd0cab2c9bc7257668314fc7a51ff27cce48ddb7eab3fe31ae565038576f3afb863f5ec58adb21701aeac88963b699c0070f8759ff71b2a6da33a35d032e0ffa153711c4fe310cf531437f55c797cb53c88afb49e0ffba1f2027763c6ece042d574fd5a2bf7c699c62658dac0250d2756bb19ad0c581d3ce6eaefebef45795fe6ec5ef0cf724d799037db108b7261c2d91a626459a76cf0d60de422be9eb87cbaad437b5fe2c8092835"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003114Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=22065dafe36b54b039d8a18372d20e8ca6672a978f00e5ad6bf68e32f9adf30a9ef41fe409cc734f72f7bb1174e8a7e9227cc80e1a5d37af7369d6ba6fe04d9a68c6712ecf77bcfbdf59c0b6b0c01e7dc1e0aa111cd08058648baaf488b37df68f434ddace00dad545abafb68382ab867e3d3d186fe4bfaa38867650438d93912633e28c3932c3001cf137ae6beaf1300daa82f8fda013675dec23697b63ec94fe9301c400dbc02fd85bf891c961d6be0589fe4cfafc87efc5c3cbbb596ec431d21b367f5eaed4aa602d18b26515de3fe3216b7ce7e3bfc216967b1bc0ac3e1344b376174d24d202f37eb0f4a12adf545f0256b8afccac5b464a329b60b37b59",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003114Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=42fef5f689397cc61cc576109008e0958087665f3d2480e2f53f9aa10f738dd9caf42a034dc82e8359ac6d9832ba7188e207cbafcb2bf81e02a66a30fd677ccb02e302a63e0311114f5a44c79d69696c60f25df20428ed01dc7c9d46ebf1f6a43f3a676cfc6b7afb59ac960554f80d2cd7edaacb3febc2a4d8dab77339e9273b991b3b906674ee4d7a5abac389e99fe84db48d462ae91b648f969f7c53c298fe03172dfe93cbf78ac4311f71a2694853d9bf2456914fb888c4b31498ddc19330fc91c3f87f94a8dd6696357dc8f13db10e310450a5e90d90db75c0b60099d3e0044e6072c237d8bbdebdfc52dc57b0ebd01ce8da8d3e1b204c4f151e1433aaca"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003007Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=764063f9f8a223311c0c1344f5a741c7dd8d97ee031b9f8355eb38407444cb1ae572cd49dd9a45449f1bcb73c832e7039a29f7cbe42691b8ba5a3a62a0d54bed3e3ecaeff7e31c42df08cb132f9bc0ece5d8b2ef523b9f7562a492d9e50fe954bb412772012e5181b4d596e7369ad8bc8f6394905063acc31db187bd5b0dac866f2eee5a5557a5a93baedd898943e043a8cc6dd0a0cb8b98fbf15d3e57776c6adbd0fc641ccb0a2df77d6c58eb5bfc3abac7c853f3760d5048d97c844ce29a660615bd88a98a16e24fc041966b799ca31140d86652d69990438e26cbb2afe6f3aa0a3a38df5303f2364dae404517e511411f7f45ee77bbe44c27092c9f927a39",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003007Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=09731635b1c150dce02923c3a09f6990076530f567b03a301969b55eae0b441ec6f2c02a5f4b5268ee8267650d6d2ba82a9e1857ef11d913578762937000d0b026b6db714c50f7c08f9555d1f7bf05c730a9d1a56792cfad17c4aae5b1c4d7ce8a66744e1bd5577a63a30992ff2bf18546d8959fcfea433eafbc0ee6c03dd2d9bf0b29025528891257e135aac635eba4b009cf93873dd952c26c6e28c6cb8cefcd4d0ab6c280998afea698f2925a95963424ab695b1a68d83054d983df61b197fb9f2265475bb97fcb9a9188d6af18aa0fdf12c35dba95be79568933e14e66cd84aa31b773ae2ba0f945ddfd9040fffb158354a66b47a0d16f37edbca9387766"
            }
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-4bbf21485d0b491b",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784343,
            "nanoseconds": 114000000
        },
        "testState": {
            "screenshots": {},
            "status": "finished",
            "id": "tst-4bbf21485d0b491b",
            "stateHistory": {
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
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
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784434,
            "nanoseconds": 438000000
        },
        "agentState": {
            "id": "astate-30f92b7e625d4391",
            "status": "finished"
        },
        "bootConfig": {
            "id": "bootcfg-237e0b2322fb4dcc",
            "agentConfig": {
                "model": "gpt-4o",
                "temperature": 1,
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "contextHistorySize": 3,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "maxIterations": "5",
                "taskName": "Find and climb down the ladder"
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "hasRightOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasLeftOperand": true,
                            "name": "<"
                        },
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "type": "float",
                                "name": "LINK_Y",
                                "rawValue": -1
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "emulatorConfig": {
                "mode": "turn-based",
                "platform": "gamecube",
                "endStateMemWatches": {},
                "startStateFilename": "ww_game_play_start.sav",
                "id": "tst-4bbf21485d0b491b",
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                }
            }
        },
        "screenshots": {
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003238Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1db038aec62913838972d2568d8b46e5142f9288cb3953c384c238f4813c22a3588f27e9c096ce9cdf42db1dddd38e19dc917abf44875297fb7f4ec5ed70d8f967278b537462b0b27d24afeec5e776bb19d2a5e4a10220826f95002ed7596b98c3bbe25f2a5ede2d81322bd05019b232813536f01dfd0c68b1309ba3fe7a9ed3fb33f1b12615038e2a415abbb1a6bebc577ba796a8bee2c585a0a1d602b0963b8e37b35300df16a4c4301767da6c32fcc5896ff562410571b8f20e447e071cb580d8a0a0bbce69c8e7def1ca2cb1ef2938f200b11dc9483eb2717cf918ff62ff57b926c12113ccbf2f755b51611404a3728b1eb1ae8f405733cb8070ea0308f7",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003238Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=27b5b29c535c8cf959bac03adbd8534cf77b4f06a106f2793b16698aa92cf109a2a1fb2377b9f826524dab571efa56f8953ee9d2d8a44bdda77f110022b18b6edceb754cb21238e6dbb8bfeca4f549425b9253be9ad00b4277eb3a616eabafb77ede1121f9a34b49fa7afd9a156adf6f4473d31b5f8af4d79bfb68b7d9b06e2bfca867105421b9128c3f379b0e9c86a35965c01e40bdd3bcf68c445ed331230d05f91c646ef9df1bd4516cebcf2d4407381e9ec7eed47f5ecf917a7a2e6c329ff9e153d7cc7724d1ead062faeed4bfe67ab92755ea3729f4db038c407d3e7be43571ab4139a1dd8e6aa35f457019913a4bed33b8e2cd81abf89f904523527ff2"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003353Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=067339868c179b85aa9e860ea65fd954c73a529e2fc420272328077affa46de28a5e65776d1767631e21474bd40c829939e06529f70b8e288d5765ed22e6732dd2918a4b6297fa35bcb46fd8ebc7a7ef456362e017d048864e96e41a7b2d90070ad1b18974a04a28782ec1c2ef77020b0b4b1cb6c8a65ec9a03b4baaaed50f5bcb14cc8b7cf68cb03e4fe28738ef8f84c67733dbd156a7f78cc375d4207bc45de7fdcf24a8d5e9757180efaa5c1fc75d3076405e457dc8955352eedc4347494ecfc8052991d34ff9e277722e03ef700aa115f919534d55971a512dd1d95616474674ab691b08e94ed2b71557201089c41e6e4e10f6cc0a58a452c63a26d27a07",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003353Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b27c75c59b14a5c3c56e10618a8042520d8fc3a788b5b8f3ec5b80e171c6a79636c38fda8fc12d9936e2e8a14128370bb3bd4809d1e43fe158e1247a851662d685281db530dfde9c04996116790c49e53d0ceb28083bd3c0dc6d20f28cc37a6be157a8db0f26f66ad85965ad62ac2a85ce0a3246ca836030f92c90b7e81976256a53e17caca9dab26a4b14b87f19032ed6940534bda4535f08a461fc5431c7067db9c67170f021b49d1f5e9c8816d5bf44698b7e37381615bd942f976a1cd8804158f1b47029fd179ed62e9d3a36280496ffc2a0b5bba9ff7d0793dcb2b615824f616a37715000f266461b16b66ddee87a5a98dd21ad0cd5a173093af7899348"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003310Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6de8455cf4e03168c2f011871d85ee10771ad8771e09d9c0fcc1d33a283f34f6b93ff304c7322fb5ad1711d5687bf28c7267d51d216c2ca6648f44466ba066bc76dce32eda083e3ed5ae8116370a879702461d57d963d5a188d79db77b2f0193957640a4aaac4cbd2177f49423dd8a2162f51bd3fdcc516b8d230d7e24921de21e40b24d634b5bb0e05cdc3867ebca31be01db0b6b5a2e4e4764f7d3ef34e22d7308d1eaaff616ade37b29fe6f7e9eb7cb352b7936dc239b9267974051cb0ae0677cfaa3ed30849b0a9276bb3ca11697d25a00e2db3bf76e53e6cadc88fe90c4a1f2c5dbc51d6c3e91bd5f53b9befb7d09e5d3f310a20e01c129f0d1cbc77de5",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003310Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5e8ec342e8c5268dc158490a67a0f703ec3d1b6f4e1d8bf31dcad6cfc28f0474c10a20ec93570ba187a122c716a4f79ce93c8e52f6ec7c15603d2e103704bb0dfe32f18dbb4f35567f392a3a7aa4988072495ce0bf46692238725fdaf11b2c46a56addb009c0195dc6a77e16aff20e15224c2e01693e22d347adea00f857e974b9bd9207620091705d45baea687ca732f4dba047972aaaf589a066537a989acb54c32f244cf364b4af0a8a68091ebf89ba7f800947f230e1f5ad2c8ff61601c81b2c2287e8333850c7bb891507144f93fb909f7582e9eab4ed6a61c39a4d651c6ace95d0e08dadbb71cf5adf9bdfc5c7f677eb56a2af30f7f9347b5adec5d27b"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003345Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5d103b8b7fb83a328dabd7441b9715fdba943ce7cfa1eb550ba08420002cc3180da47e27e550154c688eb92e3a4a199942fdbe05161055b9d12be4c7ff29a1ae4cbabba1ad91c9b8b39fd0e6c5ea731115d36a120b2960725875961872e36be86d78c207bc80d943e2c12e8bf00d0f827ba9009d0ca17c17c6a348c104e00186310a233777c158367452d5506df6aa5a1a8ed4168a7e4b8b7843d582725ff7bd96f6b578d470c4580be89bab543685b34cc71bbd38d4fdbf1f4faf566d603e5b2ef60342bada7f65fd52dee8cb3295f4814f5414cbd3c631cb8a5f4bc4b654ca28f4b4610c839a410e06f3f63c3cf32d1580f87b21cc5a8d5aa8d873608c4077",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003346Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3b5eb3e2b398fc39ed73a35ffbf763a256cc47aa8e4a5730f036fa2fa6a550fb4cab51dc4abf0845fc86bf0b2ed3f1090d0b33ffad33dd27b7140bf9f4e1fe7f62d1111382087c53e60699d1a61ecbfc506f372f7cbfcfff04cfa1009968ab2e4b7305ee91ffe6156ded896585736d6c466813b404fd5bc83b07aaede8554c25e481778bcc729c9b42e105c751ea438be1eda28cb577fd7aead0f35e78fa751232267607adc1042dc5690acc0e8b32677b15af56c03f37fc3c817cd78c24454182be6398fe5c157fd95dd099d90ea35cad0d5d30ab7fd509d0455ed77db420c72d63d00b8bdd52dc366db7faa49502c000fc8571864292053ae7a85888481f30"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003335Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4ae2f4745d69f91035851c174f098d452d14b759b59086ca55cb7aedf30dcad6711589e9609f4fcd51737a0449c51bfd8b7273d0aa80279a2b20ba70da2208282582a0e6e9491406240d3ebf1cfd8b715e84ec04194b7b9ffc5f6341435ac3336ddbbdd62ee7e0fd087c31763b1538f55bba9c6dd65fc0669ff46d5698948b14d31d7c0bbe82d2dcc3e4355f568684b75e84c8259e7ceba690570b702a784b61f70ae55e7f925480075f176e17bc0ef7b51cb93558e535e98d51c12d18208c9d7b916153638e4150149db856a87e30a39c809481fa9d13c870e8d79e6e9e7562e299c9f13a011d10a147ef2bc770d7402d915faa38fed85f4d32d3c9c0f24454",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003335Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=857c51824b8d9b30c2ff41cd50a5dcadd0a6c83eb42098716a81af25ec057b1d69b4a5d531f6d82b2f49bf93fecabf5a37ff093cfe898061de7ff20ab0047da337214c6c9dd270ab14c6572827edbbda4640cc5e95da2e7205020d9c2e8a1180391753a4dddb6b0f28cb29b0f96a4f996b30398c1546715d4f3657e6d896fe5c0365aa7f88c0fbd0709188776a9aa52f3f62722df1183f730741db6935b51a7bb99288b732fdadfc6be2bc3c6b024b2d8dc3eaeb9e00a0315b6f733e68551bdc3b0c4d135240b27cc03cec121dd362afbc6d48043c2da59c8328e330acbfe89b4248151cb08f111ef4346dc79a4f48780aa9599d80f7d1cf20c8a635a0900248"
            }
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-651c30c7a029428b",
        "agentState": {
            "id": "astate-0bc54b563b86480c",
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784365,
            "nanoseconds": 504000000
        },
        "testState": {
            "status": "finished",
            "screenshots": {},
            "stateHistory": {
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "id": "tst-651c30c7a029428b"
        },
        "bootConfig": {
            "agentConfig": {
                "maxIterations": "5",
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "taskName": "Find and climb down the ladder",
                "model": "gpt-4o",
                "temperature": 1,
                "contextHistorySize": 3
            },
            "emulatorConfig": {
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "mode": "turn-based",
                "id": "tst-651c30c7a029428b",
                "startStateFilename": "ww_game_play_start.sav",
                "endStateMemWatches": {},
                "platform": "gamecube"
            },
            "id": "bootcfg-1bb6713e2d5a47e2",
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "hasLeftOperand": true,
                            "hasRightOperand": true,
                            "name": "<",
                            "id": "emuop-e59df391b2714891"
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "pointerOffsets": [],
                                "name": "LINK_Y",
                                "type": "float"
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003236Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4664790b201e6ddb201fd05726da098d68316315d4ab9b7efbe104a364fe31c290185cf101328190ab869ee1b269e2d895161b38942e6a6547e7824466032f7a9ccd4b5405e728cb0d40252536c67c5831d5179762eaab87ea66a48852f3ba9c9c4079c43c4c264b552aca9837213d4135441d9cb3682be70778952b61a236653b6aeab54912a7fcbd7532a042cc576cc31a5041b94c45ff184ebcef38ade8c3e514f87fc2543a4390e516ccc02774d3244b19e09d3a2f392ec0fee1e80eee90fbca8503bb5b9ee2f848418276acf2f24c59dfcb9ed68408dc859f1a3932de7b805a68c6b5c1ef7d7376b01a0d5642f60b25722a89b2c6f76ed0597f09f91c84",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003236Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4c52d802ac93bb713835f0fad1e3697719075ec187f393f87df9e794f8ea0aa49d3ac679656d47961a7e65ea3255b924a4227e955038649c7e49db9731e993b68d1b9ae4593f7b42554d63948ce0818129f223c0ba302efe47e7b88df06b8b996b3c341a4588863eb1240701e9179c57e6d577324c9526d321a1fe6c56152e5fe7f224f2cea5166fe809e40329de1fe9dbc1d204fbe628419195200bd046c46965ad6bf51d76412a5ab126b7a582f16b9a06630308e48be781608454a5b1f245e274b6037d0f31c4741cf9abbb30d107e27713cef80636b7481eaca2e2bf81a3a28632a451b23dee8babe74347412282680ec215bda95c6d6ede1bb4988c105b"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003228Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8ff27521a150af808ca2c74c36f81c161f64b7a687b3a571b9b1e9b59bca3ad6363de9a51799f6b1ad7acd94b95e3b2783943ef9a94a548c3817839840588c94666959e848024c43ff37d501f59d9479c3f6b5ee6eb24526da3ec8e82c65fa8ec03b593779818161118c1cd02ce9531b89be1bdee3f8033fa977d0e65e078ef20d10491605ff18ec6f4c24820fb033f4f38e9dd0665b84a2b83bbb4602192e7afd09a5c3f891a93fa7cfa909011b7f25eceed6d7e4a733a31b1b3ec3e38ee51fc0055bcd996de1a5f8cb8c706d6c5968e1a1be9ad2859adb717ab83dccd30ba95333ad8fdb4e2f3761b5e5d516ac32413a5fc4b57baec8023c13ec6630982b08",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003228Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=78252ca6b44f8dbd32f8dde99709364a223656999c76fada2ac3379bfc0239fa753657324874a95bd61b48f07da26b0f7bcf9f365a95f59a83a23421147f0d26c10b178531c161eef95225fb512a6a8e889e00a9fe31893b4d2531b08989882fea6226139527a25ce31d84692323e0ae45ac343eaaaaf0c6d45577d5ffb1aed12b3b11b91b09374a4860d9b7c1f6211ee8acc8f6e28dbbaf2cb21a725cee6c9021396bc19be4445914cfdd4b79d72aaa15f37fff1b2dead5424aefaeed4f2bb32a4492c6adea4000836bccc682aefb3a1587f66ddc86201cbe26fa060129e3ccc014e40562aac8d13195cbe22eb16c92f58c856d5a105545970bc63ce028c982"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003219Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ad40cc14e45b74baf418ca56d16d1491dd53815bba5337fe558d05eb805b2c810d21fef8336e2b90264a3404e5b5b6b952728fa9efe719c7673f585141cea445291ad03d2e22af7fec0af6b8c0e57d2b993858f57f17001d87b6c0131d6bb4ed095b6c3dfdb8ec050d29c034bea516f22183be8b0c43a6333f8291dc408f953e0df1fa53a461e91e2f921bb06325df4975502462818d2325e4e9306749b5627f4afef69f13addcebf7f87f7f3cd0cec8c286203aabc2da611d03d11d58e85db54e50f780bcecc1b95ccb0e59c0aad7437cfe3e1bf4ab5d9682a149627d1ce9417c8141b24963ed9864913700fc9c6d43440a47bd979f367b7fa9692b332e28bf",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003219Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=955a7d6b719cf5bd57cb9c88c8293f437d731d59548c3dd15a2d00ee0ff74b96328e6ca475b0e24b71ef884fb742460b3d54331e9f35a2448c83a0fd47802dc8b82368a4e0b3d15b39bd5d0e81ae0ef9495bb59900ecb5437f464c4a0e06dc86c1d6fa0c88ebd006ccb4063204c67d2a4c508d86292b0db69e30f70e39e289166dc8a1d06f9dff413b86daa9e4ca781e4d95259d6f0200539e3c17bdf300f99720cbd2ba68fc2ccd49616829fd52652630ef5d40b7679e115c332d75671e27531c09e202fc3808bed43c51976b80800e6625c6a80c6145baedf6f4d2152b959a39e88a606c3b601648d9bb3f101bb128594d870d2f4de7ecdbe2fa478b1ce1da"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003156Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5797e6f038087c92bd1efb5e48f2615e8bea85816ec6fb42fd7b6b55f7d9782144c3c101189a45d72ae2ff89f7c64bd30f3be87f4904aee3defb7416738278bc4ba5ef6c705b8aca1db632fe6bf9d6d99bcd32d3913c3474d37a9b4dbabe61ea6837bd3efd1593ba2899ec7c460d00bad9c7e60caf63f83360f4cac2bd70f3ce2189bf6a906efcf60521778636376db66fafc4a4a41bd3e8de45cb05ed14157e86c6b5a8f350b109ae487497b6e34d18ec4ba5dd43b8da1edae3d4a48589e45a7e4de89b2f0330ec9b67abd3b5b308467603083c6d7e228c22b9dfb92a13f658b8af7cfd453904eaa06f81761bfd4c0e3467f4d2a6ac61f3bd2b8b80baf51b41",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003156Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9af1a307cd8c020db9732b419e58f22dc42544dc70468cb4afb4ea3a94d0fd41616e902f9582cd63a792b9e6898c2944295276d67efa5ba67f6e65d6805b16c6ba8f4238cc370bf41fd6f7b15491d3856547ba523e9933a52ce2b46fef3a91910b5fd49cbea47f2bfc591e0fc03b3d196409f14509ba4ab263caef8d147353c864b944cfbf4c827b61c70730f4cad0a6dd8de96c6baae5b7ecf1028facfc66ac265f14d05db5a39b3f39275a87a093d1a6fa42428df0066d904ddee658cf853b7ffe9ac02398501fdd4b470fe4584fac3fc86a3af6beaef4b390415a1a68845712d6284624707f2a3f1ce49251f6df1cbb77292f5dc131afe0c295e38b665776"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003244Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0c266bb726ff37825eff2b404d7aa73edee304112cea83de59f6492faa81b91e6e27d22583b736273214f75f674e913ed1e60e2f6202c02344a6cfc7af63a3f9140848e46787f2291e2db01d1f13be0d75604117c4f7ea960afac7d27cb487daf7e03b02b1d6640109b12ba26e916ca7af63525420920b8d052c8545d0901705fc4e5ea3e3779ddbf9ab434d28f8ac4fbf84702391ee7aa23547a2715b8d8f49c63d8906765690101d8e8fa80f829ff024431b4d276c125d57021490af5383cb86d68e3e402ae15b48655187ee6ea769aadc892379761cf5b297b6fd87fe0d2fe6cd45e552981786076239596e0dc3d120d92b6837425bcbea3c9c3324a59805",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003244Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=30f936303f2bedc18ce9941c41b4fbb0780827eb808263eec8c20de7c192600f36a400f8a0c39c1c66a9ac6e37739426c3a8c6ffbaa1f5eab45cac5c0dc67df9dbc9775ef63d1328d26856382cff2feb18c5e73770188f913b6a49ce9d336f147f5071013e12092b509628b1e681d6268ed1b88e5e25173861b5ffa63a0a779ff68e3fd130c4dbbc3868c6db12ee1988e42969c848bc2165c61af4eb98158c9cd6366b54b67916b222722211f0382ac4b5fb662d2835683a590f46c987f8942fe67e503518b9c29eb201842de01b3dc8a82b3a32c7baff8b4c1c6c281f111b3fd2507aa3dd3f30b551ebeb55741d8101b77f3240d9b1202c1591c3970d7c54b7"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784301,
            "nanoseconds": 876000000
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-73f7d7b9963d4356",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784212,
            "nanoseconds": 607000000
        },
        "agentState": {
            "id": "astate-ab31ffc4363b4bd8",
            "status": "error"
        },
        "bootConfig": {
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "type": "float",
                                "pointerOffsets": [],
                                "rawValue": -1
                            }
                        },
                        "operation": {
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "name": "<"
                        }
                    }
                }
            },
            "agentConfig": {
                "llmProvider": "openai",
                "temperature": 1,
                "maxIterations": "5",
                "model": "gpt-4o",
                "taskName": "Find and climb down the ladder",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "contextHistorySize": 3
            },
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "id": "bootcfg-007666805a704878",
            "experimentId": "exp-d7f3b57db87b4310",
            "emulatorConfig": {
                "endStateMemWatches": {},
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "mode": "turn-based",
                "id": "tst-73f7d7b9963d4356",
                "gameId": "GZLE01"
            }
        },
        "screenshots": {
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003143Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3fcf3ded21d0a29e702a9a180b851109eb503505e64043c8f634e2236545cd2b2d63a7d49e58b7d3eaffa93229d6b254faa168ce203c4b215119de75f009d99ebfcc82c4a7e97d29b3b109564c2de24518f60dcbe4ec1fecbcb1e7bdaae29a22f63514405cb0ec4abe7a333b7d059bfa9ab20d4f66019bc8e5218361c0362107feae50ef0e50d93fa023c3b8bc9d165aa9ac485df1a4f088f3a18cdf07ff5fe68c30b4aee1e36f3cb784119a97eaf2ce2f9b27471d9aeb48d636c791ea2539d9faf032a38e92e401655f08e49556907afa5257a178955231fed095f6230c8803f28326d691e9ed24133ed2d1aab8e785bb4f0f637240ec2691e0357b63a06bc2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003143Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=01cea577c03be0c0bd84c5b3dbcb8d03c178a67337c44cab5e1a22b5166c5787b520e9c76639b8962e3fc3b8df8b92d54ba8ccfc8c03891b3df6c448951ab952c60607d99d0cace594f33ae252a4190e3e209b3c4707aa0eb5f1ded20cb622761f51324e2de643cccb3443a615a48b2c3ba6330230cf56c0de07bbb163b8c191814b1d58c8c287192231bf0ac70e75e4b86be7020fbf2bc6400ea6650a1d6ac777670647e9dab2877fa75595763c84dd3da68606f622428b65645a06a853e4199e76eaf9f478c053d08ed068d25d75542ef6df7eef3351ad59262503b96bb0f0d78cc34286a2902f26aec2e21de3fb94876786066c19e6e7054db8fc0a889174"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003058Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8b07827365ec82e1f6c4b0706631d95df4a1691f28cf83312de8e70ea1b8cb21f5a01a0911b81c1ca5e44d0dd1e3affc028eecbc10897e93e82162cc4d6ec090790f012bd552ec3e104a5d029102cb273a1313196444f20d0e3f4a5507cbc5a611016786098ff661354f346d3c969041b6c38a8f3467d36626617bec274956a44e4d2782b8b1484952dffaed977d5e14dd6208940e07f61e454c820bb62e9399ee9a31c8f2b54422e6398d39e6a24ebb9860693ec16e79fc051da42793b2ed89f4d40c82364363e0d7a24baa084bf4a9e069daa2e4c7614f9e433504e1ff02cac0f3e08e2fbc79b75cff5d9d907855bcc821a963ac7d3dc1685c552727330199",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003059Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8eef6f798558e323004a99fd7a1a5c132fe0d94eed3d36709348dad472296557e2d6613f787089237788717516fc3717230f59e3ea3f3e7e8e3d99e4a04c29a2ff76c3b13d60a15eca813ef7c7e43accc1fce1a32e6da4591c1402233de4bf6e88072d570d3711529aa6fa9aefec24941c738686ffa5b6e2c8fdf54e7a2176c9797609ec42676cedabab8a889295544c3d50a59ffa28de3eb66765e98a201a9b2d058d51e3810527ecd9f75c1cd2f5bd3f6d2c4242b92b5360562b6e814163399d987f15bc1d1e9dd88445426a4dc7c2e230f1a1d2d8edfeb94207ead420ac5cd08398b8baa8b6bfa705944494b721de10a8012bc9a7cf3504e2d150ccd83cab"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=81b096f605e48c5ac614286ac2de552dad425e72fea6315fecb1a90f11d8e43d2c36a4d036d29dc1bf4fd30fcc02d46789f4dbc7155dcb7fe85884d8c0763aee03b61c6b07bf9fa45a624170d0e9324fb324725208d5f40897e5135350ef70a25972b584e3570ddbbeccd5b1f35140cec7ac54a86593d35ac1cc57d06c8b4f2b9bfd71d4fff35ad85fbf66ba5400cc67d5950651b859a29d16181b773cc46e5c4c8fa39debd4288d32d9828d8842be9afdf082ff0f30d0bee5fe369b65c892196d0c9c353bfb5e802b3f5e0795e1079ca705af9205abe03b9d8c9d6417a8f509eb8c014163514c1cf9bd70044c9829dec8aa14996dbba706a779901d9d350354",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0ea820e5388d8f15da062ac3198f75b413821f207b996c2caa4c79aee0d1c9a8604fb37295a796c9311009e79d7e980227a7cc5b76a37636b7f8951d50de5a25d10b4dd52005bcf7186e44f0957b8cd2746f5941805aa9e86662f73b3129d0ece0dae08427d739c3313d332de7139d0ab3d7c1afb01b856db116de75f5ef0eb7abef6a431c5f928624681e0209072b574e0591a249bc535b470e04a6e4e95d5464630026344004b700ed6d091d48dd3d4d817feb44e7b0406f6c20e3fb0607b05196110fd8e7aecca280e7ebe8d228459b453311bb38a5748a23ce65ebde46a17fe447f1dacfbcc8071da0de9345d0b3c0f4d46221f05c4cd8ebae4efb0524d3"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003028Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=492fba3c76c80e3ea2a0ce15252bebb4b7883c4d9d892a12133f21664f700b3957f908544e175f6045bcfa72914b20b9d6a2d2e51db30ae4e69a0d256b00818dbc25d6a8a23ef62e5662dd604c0a52e1600521b8511f78e95752f884b20a71e30d79eb5c6bd91811d659e916fdbfaea70334321233ca1e2309d44baabfeb4781149eceee1832529743497dde652f1b7f236107ddd1ae12a4151dc5adea0c48676f39884dc60cda3a7ad03af55dcbcf448b71305391b878d70217ede4686fe4ecdc8655d189e7d48be0d3066f12518d5d98468290c0e26824006bdf2afabe1a814dea7191406eb09eda8ff3069ac044a35d6df232f76258d72c2e702c00be6eed",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003028Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=339b596f79c811595551fcc329710ec43e0d338b8929367a5c7fd9b637eea61949705e18a0f166b20bb9f2e5ac09e0a9568cf11d29288e1b4dfd1bd5bc6fc0ad10a74f028cd164b053f588ddfcfb5410852566e7c3643d30d9e2321c5c931ad984d4730662206836a409d37f059c833c4265474836c84a1707e2488394ca6f677240008c2a8916e49c8add5b87979ce9d0cdd70c28260c3f60ecae1428308d1fc666b3ce7fa918acabd07fa0dfb3647bc6912b21e2820a2a9e02a1f6b57dd6acbd9118a1bc328b4e941a3fc5f6c5da975157579b1d3f58e1575af546aa25eb2809fd78b8048fcf2fa028dab2b2c2462a94e3dd41050f0a97ff347e2c1fa46988"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003228Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2bddd1211ca5e6fe08fd4c04d8352dc918eb5eda83763c0a715eb5c2b35dbfcb88373cf2ae690d57ca6598ee27c8705a8ea731e367a8ffaf45056a180121a305221716b35b8ba88f458fd1c45d3d72b543e919f05af2c0eb0a5f137079d3062f9b754e8bf2080771a5a571a1ba10e9d6416ab488d904e3293c60f32b219d06d96d5785dca1bcc41e9d9662877944a7e78185407b1e15383610d339bb248b92e7720b24a26130c0e09aa0ea85e01b92559efdadac2fb9d509f1a020a185bb42f66845bdd2bfafdbb12e6884629b8c8cad680e7e2a25761d45a50eae25469e277c55d7fd0d91ffef408a5b42da202eec400897cea82b9ca7b5eb1633ac15ef0ca4",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003228Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3dd4931c046148d6dd2cfe17504469d7a7a8eaadd5b323645fc712a00e930cceea4cfa0a3d2d4781b9ce365ebee21fd5d185c2305a124289b0564b68175a8700ed7f1c40c3a3ae2d2a8c096c12312a60d4f43160aa10f3fa182a96a1cfb90aea3ee5c3e523461e51e71fa206264ffd0c3775ba309651081c1d7cff1b7efb2b48521c0e651328b2b7064f12483c1f55130b558601c93d692b8a3fac135327948f34bf98b36e515b454a44a1f68452ac8f2f5387dd1e00eef5317a65677d46db05271bab738d9dffcbc4b385119b02580f8a139107e84a3c51483fd5f9e460447911ee03c7ac1562cba2f12bca2110f5b3f6d33129796d8b5899ceeff0b35ce5cf"
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "testState": {
            "id": "tst-73f7d7b9963d4356",
            "screenshots": {},
            "stateHistory": {
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784391,
            "nanoseconds": 191000000
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-87b98be5d6f14e87",
        "bootConfig": {
            "agentConfig": {
                "llmProvider": "openai",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "maxIterations": "5",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "model": "gpt-4o",
                "temperature": 1,
                "contextHistorySize": 3,
                "taskName": "Find and climb down the ladder",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube."
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "operation": {
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "name": "<"
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "type": "float",
                                "rawValue": -1,
                                "name": "LINK_Y",
                                "pointerOffsets": []
                            }
                        }
                    }
                }
            },
            "id": "bootcfg-7fb8941ae3a84920",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "emulatorConfig": {
                "endStateMemWatches": {},
                "id": "tst-87b98be5d6f14e87",
                "mode": "turn-based",
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "gameId": "GZLE01"
            }
        },
        "testState": {
            "status": "finished",
            "screenshots": {},
            "id": "tst-87b98be5d6f14e87",
            "stateHistory": {
                "turn_1": {
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
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "agentState": {
            "status": "finished",
            "id": "astate-af311d4111f6444c"
        },
        "screenshots": {
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003121Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=34025c158b87e7c9bd67ef7cfc0724391c193dc2730defdf42f1f1570132238d12782e303b34ae61a3963f13fb021f89c351ae5c8056a1ec0a738487d84cad8ff36cc1935fc42bb73a9ad09e1028051a2dd9195e841f9b4abb3ea2218dfc881be4a88477ef83da4aa0f5588c6c26948cc1d58da20502146903ab19d513fad6f7719accca126b6907736144731c64d96e3c9197d154e0b5fd542c3894a453c3c1adf8e025252666b760eca35aa04b0bd6f5308f7a16d6d54a514e2c22114a9a7844d29fdc2ce87c68168225526f760b72fcec4ed4613674011e38006ee82b58dba97e737f7a705594c0c2d19016d2e2b9eddfffc9f81b40bb03015aba909a8428",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003121Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=50e92cb8382368a0f28388bcea707eb969303e8f4dd6d1f991de5fa8a4fddbfb4b6025de24448198b333bc47cf79d58133b6b48c7a5c58fbbd7b3fa4e4bb844a5e074e3de1684b58d8de202c19d2277d36cf37ebc20ec4607885a393e63cca858f9a69c8c235851c3cf06a3b5b93da379ad0957053e13f04867d1ea9b314e799702fed3ddb93227f1f4682dc68934ddbecb39e5a68ad2bbc1f0e52fe02e92cdaca908127480c5fa65acea438ce59b246eb716d9295b4510b16724ef0feb9890fcc4f73d32ef5733f4d191228a2dc34e4d413c6fa9bc26527a8f8165f8a222fda18935f0c69b55cbb79a4bd99b728adecabf424565de4e942bc33f96f9568451c"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003023Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7c6bc99c3304d9884d32c52622882cc26cdcaab7477d21c7e8639fdf65ae5d8653283e9794619c827a15ec3fe33d34241f50cb723c84557b31cdef4ff6c974a9748ba83e6214d62cb9dfa6fda6c34b43cd0e446e9521468317b95c2f3a6993cf45a17bdd2e4759a7b2f6db6b7307a7ec4cf9b81adba05b39cc568dbcf4ff7fd5803a43a927c13abd14b5f944f6c930552f008817349fa937a091796f5104284c162044b4d5799f5bb41f7cbf520a80088a7205caef3aa0040dc475ffbd2da841243913b2cf9722ceb91269a8a64c5cf3fda7a253bba7a4d2c8b9668331ecced8120172a320fb5d70e3bbd2866a2fe23352cbe53d93162873afc10fa6974f72a9",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003023Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=96717404f0f8daaced9157b807a8c6d280a8967b58cb782965a1cc5d79f3b9eb8b328fc4b7b23d243d42bf4278afaa4be8e1075de468b156b292ebacf91606e9d1e0b5184cca7361d2bea6118a7c872d8e32976c5d5a8698bfa8a12224a32fe09024916a03a64aa3a9c0f6ec3abbb77c515ffc21780d77ba1088b8c2c6de47fbaf2432859c071a90087998e5f37f05d192d666e7fe47aeb15e8184ae70ea5c00edf91546f666e518f83cf8e065035c1343f3acdbf89607c5b66532d1f7b9fdb4efeaa5ff8be7667b955206f28ba44814bbe45d7aae44fb08a955c25bc19bd01fb933a3239a9c73b256d01dbfcbd59fd4be6ea13b6a1601e49fae94b2657d87a1"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003057Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1e80c61d1ca3e4e9c8dc9f0c14be6d835cbe22ef973de171e83efca19382583fdb859b785e0476fc5f56e0a80cd98bd22411e788ba8adaa70a642dee5cebe92c54e3bd686e538c82c50ab0b7fe6cd7ace37712e486187c32c38bb410406b41a79956580e2eb0cc9d488682f5974dbfa39f1ac75be2db73b61a41df100044d3fe1d33a33f7dcceb138e3118d5b92cca9feee2b7922e23ed8f33d053fa661a2f76181baaa5cd291c74863044b8a277f15109bfb330f381131161a898da12aecff37d8a0bc958eb777a0109396419395cc61b7941364b2634c592035114c5567cda09aca51015bd59112ceb95ac03aa13b056970cb1b796ca139253bbf3fbe8a4a6",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003056Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7c9d2746904aae98445f827823b12c630717ed99b374581134333bf0e9472a8cc8f065817fa780f5cd28e71aafa3de69a46c0960b2d4d32c28b1378e462f2c0695b880e0d8f1b31b40c566b59fd35b700c0725382d81ab6d0e1b5d7304a252087dd06c0eb3f1c1a85ec6dfc587ea8578ed02536eb77a4a4fcebbca90a330628d861db75ebe6bf6d543124e2d84909168074610e00e46a05cfa72b6f58ff40abfcfae15cd34f027a7381d9444c9613022488d8b45fcc6c449998c3d496b0a4b97e414509c3c71790251f63924df38eb1c34913f7b3eba820a522ddeb25bb34e8261ca59bcb737d589718b00e8a7bdc033fdd3844dc2d50d296479390bfbdd3202"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003133Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4d4e4066a5237bcae927a29284dc151ea91f3a0ce17a0d621016abf237cce0fed99ceadb2c57638ba7a2590917b9e47cdf9b32c7d15843546f04b33b1147d7db0fef878aab1e1a262ae913717b03e30ba302807abc656d4317fe6cc4b60f1958414961dfb3f884ccab29a31b574e3bf310289685170166c421d40b64b079d40903dedd18fdf38546dcb26e53a32ff17e691ddebe9331362ec2f9805a8c80569dd786d184b2ee5c2415911294a8407580884c972472ee74d4f3d0584826388a2c47fe9c22d1b4a64bc68b66fe057482d97c056e340a983d69aecf378c1bd9cfc3fd63d0216aad89c5853bb2d4ed1255ed2d88bed0e309edfa328cbd4c5a8deef0",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003133Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4cb5c8862e14a511d586538780ed7a4c45430698125dc4592c56df4fbbd8826da6820b6a4dce1fe5ef2b2791d8dd31abe610a76d0b74210181924c486a564be1e7f62f3ad755c5a5f823da525054f4a43cfa2f024bde42fe7dcefc01362b298d2ec14d72d87d725d5375e86181856d440cad0d1597ed85feb799d8c8db5f7cea63b79dd70370f21c8fc9b1611f61d6fee549e07e938b82a642d42f13fa9a40553c34d6bf719335b3e27207a2ebd9bc904e3ec20db134219909b343ac0b001e570dfffdc2216dd9295af3e42179a2bc0a64897b9c3fdfd562d9c11d31fdea27d2111bca4e65757c176d99d530bb8f993e5c7e6a6e1e2ab6234d0021d2f894ca6c"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8da58f4255c4cd9c1214400eb4036cf243e489e800225774577185334c757d409dd86b565ad52d313f04f3e7cec9a9e897482ef0c0684ebd03c7106ec3d673825887b461398d9494fb25800cad054147cf2f24fb658c219a684f429671901893c3c32e528a97f9ad7efd065f9133c7ff25193cd53c1f5cbadcb22e8f0e890129422b639f119b815537a1f083f4c327e47e3acf14101dabbef6b05de87dc56561048e55c2002689c18bc4fda06d4f674a051867ab6656c365e96499ef6c1eff6d21a55b6bbcf207aec5548f823c5a60b7e85ec7283774f2f1a936098e8467c71b75df13e460f76eb99ff5a2984c82971a920b1b58ef1534610eb43e35d1f7eed9",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a32c745d30b339f9800a9591160b620b0b5b0b7c22b56f8a26722e7e7eead2bbc3c47509bcc95bc4b897f8ceb5f4af5efc38f4aa97c3a14cadd9c8128233d2ae92c095727ff43de6a43bfb0aa371db26faa6c62f89e9b50e7deca12360e571c0e8b5140323e7da519474510dc25fbdbfdc41a2f8fae6ceec42a06a1a4a817f50d421794b957b254f76f00fa1afedbd9bbbdde99db7001449354633aef56c1e9209c623d8f8cbb797b569752d123da78c35f7f7eec6219761abdd2fb60438684ab516ad30fce66f089e7aa25eedd097d18aeb4c7a95122f73adb9c680a2d4ec37de1dbc7c63e80ff28ee6eda8e67df3d8414e3a73696a6fb22440315648b15759"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784201,
            "nanoseconds": 350000000
        },
        "emulatorState": {
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784295,
            "nanoseconds": 185000000
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-9174f9cefab04526",
        "agentState": {
            "id": "astate-3e9d67699dc24163",
            "status": "finished"
        },
        "emulatorState": {
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784305,
            "nanoseconds": 86000000
        },
        "screenshots": {
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003029Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=899637b0ac490ed4e2f847606927e6d62508ea9e10bd9e6ab38352cae812bc28e4c9ad4823cfa7ac248f13126b0b008b984919ff4ef9670156e0015441a7880c1bb327d080651c0960d29c0fea68322b3ebecd9e5991ccc5bc7c81b6509128640769009100a037d40a6e79d361609b0b28e69e7d59781bf87c0cc77d4958cff2b87768e75b978673319ca0b6ceac9cf75e01628794cbac3692aa37b375fb6dd79f61a492c512f3cab8904046179a08d6c3dd09a5cdcb8ae80d6c28ed21a165cd5fe72a24b05af07dcfb6e8cd43329075a8d30386bb3f9f689097dcdb525e479832b10a924a5ec8840ac4e6217755710102963b635173a4e3033f3636f5d6ead6",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003029Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8fdfa89c8342fd5df96ba78680085edfa7cf71edf6feb400183942a5fd4f61faf5d44e1ca64badfd8d397cc891ad62f9a9dd6134a534dcd7fd4a175f2ec069b63bf12e231fba6bd6eb85c51d170bfbe2fb86a4aadbbf8915fd4a4ff2a458c104691d55a757c9b6c74d25d88892cf7bff0a2621040f7d7adb76be07748dd2a3339c5d44879d4b83a221ee57b363df956423d9ca2b1efd6fc93d3ee975a2d3101ef8b09c26f9a4c67cddbbe418bf4702d7a61626be07a4a62b99f7f177f301dabab6210820d7be7a562d9676c4a419e8e4beadfae0a5d59753ebcc92602f8cdf1245143c81c41c4c2b50d052d2df1d93bf238920b043db35ada280ff9c014d1a8c"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=71f940e61eb7f637f6a071b1576c1e426aaeee61cd66a20b7b5c26495bbc30d0ec6885a3991a9fcfbe9f728af24a825820add32d3eb5ffc8fe2dcc6cfcabe3effeef59fe26630e0eac553063b7f1d8e4e10fc70fa73cb031cf99936acc3a5e6e2b12af9687e003818665b07f1ffb840698b343071f6c6ff2f293e1c4ab82ac9a1e1dae9f2636fb37f78a6859ac689359afa2c67c4fa32350ccea25fe127a493b9846c72bea9d091b8389e309e79ec7bcca8e43ba22b0ed2cf5c93b3441b735e5d882ff251fda39e41666e42832dbcbde90a273346f451c32e636df7062842660be3e3b6165bdb96e7ddf75bb8f7178c2992ece4e4535ad6d32505a6b7eb9aa7d",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=904b430869df889b29e3c66c428280e89ddcad1332b4a209122d7ce5735c9c2dc012dbcd2d87c8e6d45707fb69c88a0984795979ca3a4cec17e369ce6ddfb3586d202f2c2d7bb3bb746217e91696fa29b0dfa89052f278d5a436f25f27172a0f282a3a9ead3608e4d936223d408b02e7545494961412a3e7757247af30ce8b130865cf010cdc7856d050907717a19f1b97a23faa7f9532c7421f11d922149d6c16b99ffd832ce2d5efad304f94ea63453735f0e073618bad10b439a1514858e773f209b834252a890b3620e2296d1b62e942a84634ca46ad0487e2b15a1a060644284c27510547c3a000d835115fd0426ff5a4cd65f9735388dce3bb47cc56d5"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003144Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=86fc5377318c10533c371880730979d84b4c1df135729b2967c10407424dd4cd8499026d336cd4c96468a5166e9880553c545fd14020612620315807fbc9da0a321615c13798db40bbe3b9cd92207b864175f9172767cb6ca59e657b9bcedfeca795479e492850dbadf4c3a2429fbe625dafb9c298abf9b4757466338b44b936fec65e06c3d07fd79bea79c3c75d9bc42cb777356d6a3ee98e9b611b0e4f036dec3912cbf025a6caaf11c28b94ab47376f3093b64dcc3026170a4b0dae27eb2d563ff736124c4be5879d25c272b49c6bc9ea6debaa834bafb2095223a6dd4e602b6c11aea9a5a5be2b6193d518be03d83d6de06fc06f82a5d3fb3718f45d487c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003144Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=231969a388ff2c717c8f2e07ed836dfcee4d4350dce020ac5f8cdacfd2b882dc4901a3d3ba98bdbd914568c858dbd3a92604579bbffb063d3207e42088603ac3a736b2436042e39fd47deec2a162c4a8f699a52c8f2bece3f229c7db2f8c5f89e586ddd2051442c85a321712bc8b4858d21bef3136be4d1defb7b651b6bbccb51060259feff9bb65135249d16df7bf60faa797d1ace99d43c9dcd201ef3a997886773dce360e75198c31245a8b09dc1cc42319eec77d68971b7dd3b468df9bc39bad19a432c2381faa57c5aa10f776619ea9e080fece6cb6f82a26d15ba6d26100187f28e06be1525b583ec860ef38a0cc5de56c440893078081e407bc485cdd"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003124Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=66acfb4d2852dc25a4e70183881e01b72aa00747efd62ed433869f83ababc3ac7131c076199eac95c118569b331f1fe8fa1872b6637aa627584ec2e8d3ff5894542b16c78a558e6c996d00bbeadba59c5970ceec7d320af456a300c12c05510e5a896d63ff58ef16fbbe49bd8dcdc16c64e46d4b822d03048920c420131a385bfe92cfb02b6e1234363eeeec875b3361b8256b567af1e7c95e08bb533eccfe170ef09181324ebee12e79db884f2758b63f6e7caec3cc33b7090da5083648e5d9a958d67b750238f0b7046145224cd6013f835ffa937c409153de279f6d97910a75952cab8a84b4a64da0606043b98396ddcc83e3a6c7187683e43bb011485e53",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003123Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6bd2932fa74467b96a76fb7931624ecc14efd0e975509c273d3a5ed5cc0c88138a68e1de1c173a5fe9ca341dc92bf4bf6544c5a5cf56701e0b319fcafae083ec98d860f971362cd1ce203b774ed24ef486a6c42cbf0c8b16d96e1434d60d4a70976387042c2f84eb028721ba264f4f08d70aba47ae36513f790ba5dfece13509ab24359c756c00cad869dee12650caf29c2897b49e95c99329fe9d8034de1d47b3d0e3103469a990ad8de86fe764479d92e7ee275a096ba0975a3aa02b1bdbf729978f46aa1d8817d89e4b33ce50b9aa914df9bf3f9c0f71684e7f0a321492a2dfe919e4cd07884700988eea876e8359c949b64a8ffe9769ce4993b2559321d3"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5bdb89dab956a005162caad1e78f7bc4ee5b5a0d2cad3046563a565b74dd332b0b9d67ad0b2cf755dcb1d523f61fad87671a9ba0dafeffe5bd2427efbe459574801c72bd7e9c378208fb2bd5000e0d62660f07e9447e03aab877256e10f09026994ac1fd7add45903c5ed35379a53f371bc3335eb9d3545a7699beb6e332c2abdae080f0eda652624481d3f5e5de3ccd8fa64f5fd984ec9c9ab18dda10af0456e08d64c4e0accd444ce29fdb4a6c2fef63cd6c9613ea8787f8a62922670190858b4d40756c1e90bdb3376d80542c919858b8c958c9e292b6e1a9344672f24ea1af6eb969acbce8b0d1054ae5c339015f3c686b87f370cd25af29ed07590a884b",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6e6537fbf1234ee696266b9f1bf6bfacde68efc9e1380866a4e2a02e0fd4fc1d998882c87913aaed9c7e37ac8c3f84fb2a53108dd344dc777a1e75db5c1a5bacf22613677243973e0627f5e64b95bbd166ba3250b775b9ce8db2cb0bc4747b4db1868b478a116bd63f3c4dc4bf0a51a06e0e937aef9776cfcdcb1361bddae9f19787f2ede6916b002fe4a86fcd632e24d6cdd64ad2f5a92b9d24bcdb0bc65973bea5fce50fb702eded80f69f43212fc0ec8d042c09bc546d5a1bc80c9770fb0ac35cf4e6d8d403b94d1d9077d32e94f41edde6c5b15af2214ae0fcfa980bc81ea29ab535489e75da592058c8ee246630befa6d7ea90337e1cdd8a39cd6857ef8"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784211,
            "nanoseconds": 846000000
        },
        "testState": {
            "screenshots": {},
            "status": "finished",
            "stateHistory": {
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "id": "tst-9174f9cefab04526"
        },
        "bootConfig": {
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "id": "bootcfg-a0f608366217476d",
            "emulatorConfig": {
                "startStateFilename": "ww_game_play_start.sav",
                "endStateMemWatches": {},
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-9174f9cefab04526",
                "platform": "gamecube",
                "gameId": "GZLE01",
                "mode": "turn-based"
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "pointerOffsets": [],
                                "type": "float",
                                "rawValue": -1
                            }
                        },
                        "operation": {
                            "name": "<",
                            "id": "emuop-e59df391b2714891",
                            "hasLeftOperand": true,
                            "hasRightOperand": true
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "agentConfig": {
                "llmProvider": "openai",
                "model": "gpt-4o",
                "maxIterations": "5",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "taskName": "Find and climb down the ladder",
                "contextHistorySize": 3,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "temperature": 1
            }
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-a369d8cc601e4c24",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784212,
            "nanoseconds": 214000000
        },
        "bootConfig": {
            "id": "bootcfg-e69ecbb297f7421f",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    },
                    "logic": {
                        "operation": {
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "name": "<"
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "name": "LINK_Y",
                                "type": "float",
                                "rawValue": -1
                            }
                        }
                    }
                }
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "emulatorConfig": {
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "id": "tst-a369d8cc601e4c24",
                "gameId": "GZLE01",
                "startStateFilename": "ww_game_play_start.sav",
                "mode": "turn-based",
                "platform": "gamecube",
                "endStateMemWatches": {}
            },
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "agentConfig": {
                "llmProvider": "openai",
                "temperature": 1,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "contextHistorySize": 3,
                "model": "gpt-4o",
                "maxIterations": "5",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "taskName": "Find and climb down the ladder"
            }
        },
        "testState": {
            "stateHistory": {
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "status": "finished",
            "id": "tst-a369d8cc601e4c24",
            "screenshots": {}
        },
        "emulatorState": {
            "status": "finished"
        },
        "agentState": {
            "status": "finished",
            "id": "astate-65b44a9456a84163"
        },
        "screenshots": {
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003046Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4a3c3216034b94fa993ec949657b37ebda4fbc69d47e9392e52ea0e5a934c665b9f650dac09fc888bde58770c410b57713470d00a7d30a4e54fd25a215af332891b11d008efd9368a572a30869f2bea431bf59a419a236e5e1d140689bf2d70940fb11a5d961cb78f74a4475155123d0597873fe278afa90648883fe15c62bd8807479ed11c779c36921c0993de0b71fd95990f916ee7b3fbb1522fc2661ab144bf428b358ee2f728b186dd94cc487c645350589db7bf032045ce7079c9e18c02a7bbb89a4cba1bf53f79f60eebc3c115e8f3079bab57d9820ce467dac01ae6818d9037a5d552d6e05cd4850887765b695427dd2c0714d1a54e7dfa3f4599765",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003046Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=53e3945d01514c4bcf2ad7e37566022ef7fadafff5b047c2bd4bf513af12f6b3d9bf7c45b898119a78cea1a1af34845e8b5c36fc100cd0c93df1134d140eb546c0138d73e4f5161de7b20310ca51c21402fd1e06f49450694e8a2b690089cde1d71777d00cc33a65ed7564f74059d6b194f337a950fa79faaab5a3ff4e5bd39751419dd787edb4c8fd413a9fd4713293c30aa7d1ccadc036e3641944f8cce77338b9f8f89d73f0dee2645b5f24ef33d92a5ccb5736e928d64be6aae86e7cc5609741a9be9e941b0ce53d5a9eaf208e20964810848fca5213ef71d1f732dceb563a58ec9f0dabb635263d9079650d182f6adcfe49991569629d284632e7f16e3e"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003059Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3c1806c397df539e14aab555998a73e1e722f97fde6f4b57add39f646a9e68eecb5aa2ca660b32161132b5caf9d97cebe06a43140372a1a4b98e66ff39fc096aff26f43bbbee3ae9b8ba88b96ae1003d8facaf9292880ab14ce33f6f04e9036a80d045bc6b7096038436e766a9414e90910d0a9dac568f2e0810cc209316f2c9d9c57e23163789baf25e8d3c94da9debff3cbaf03157e0166f313c722fffb4559c3303598d166a1dc3d57aa91644f32ce8bb4d4652aa6cbd5dbf5c6ecd524752f9504d44f48de0a46a7ef68928064df4d0506525fa36630270f57e9b8686850a024c188394738c34f1af76c977136fdf51d578c4befd1a89e40d2f116c1e2bf1",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003059Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a6b954009bef0f28eb36349939163149d315dfba23d38533870111328d742cd435e6445ecf278fd176c02c133a0b0dbe2f676454fdc6e857c2ec35a4af2af4b21f69621d024babc552fb1617eeb3291310cb2b486662bd290dd6ea031dec3da7e4f8112d14046b24235f28f560df0a9d548339b7e15e3ca2ebd183d2298b3ba0ee125aea1c7e71ff82e306034865be52d8a12798c5e49fa7701c1d7419c544c6675f741b1163f586421cceded36bb0438cf47b95c3c2ed1e894d355ed6ddc7021c6eb106008c5430b986704103cce96e9ac5d9fef7c2c648e6d6c45a0b0942f33ae0ac4593a1968ab4de29e8c342d02d8104581091cf83725a74946068e0e5ea"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2fe660e7157c84b1af2244a4abbc45b115389b6448edc2b12aa06d0fcef3f195a1f4c6f024a9e0caa80aa0f859dbd0cd9e31e1f59e6ea1a457073f9c7f09c5d3192d0773171ee21acf5721bda4c4b91cecaf3db77c6fd8889d3d114a6b90d87063a80384c32c8ef4f15541aa21b8057fb02ff9df333f884d5c03c8edcefe105bd4098b7f8f9e55b527cc8246293e534fc9a02f69c18c9f408ee19d885fde170b95d797dc8d7d53f4c172bb73b43b9e264fdad32cf429077eebae187f6fa2ec1132c2f0c2ad5003be56ec71bf547202cf7d670766df0cdccbb90859b6b0cd76bdf4240988bd0cf849c59a6b65504c25e1a521db614938225da9ceb99fcfcef0bc",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=11d610a6edfb3d1de3b32957f41f05193ed008f9e13024337f54e634832bb713b87fe992bc4ccd2dbed52980be5f8e2496ef6978da5a6722b29e1ed9be23bbf8a48cd27a3f82784a6e25e2e05dbe0afb835b7376a62ba685a5fe67d89296ff17b3bd4f9755b39cb8d5a3f506b0d4f776b9c2a384b4a86a17c41c4dadb44bdb6d5a24450870e4e338ffa9153b3e0a7fd452398f9cb8ff7fa61061fa24f1be32ec2d4feb61c9506a5a0f7bc13d43c807bc8d98707205eb44ba5378609b52d9551d4d4e74510de38b474d5149bb8d258aaa5b3149964db585a3f06a4d7112414e44a70f86ac1eb0f3842782c449663d30e81080f9242b944a874274b97380d9e363"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003027Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5784790197398e1c58195fa14302910b58aa68d6792f610076aec35b59c0f64a900df66c7521451b99a19aa9ae621db04d8aad12bb55b08f5b8bb86cd29da04b29f28228616503757692eaa2543d95a43eb5291f0283a5b7029f5f7d0756e02cfb4d98402bcb0776a221ea992aa380e0ff935a6279234d17baa5e2b7d99266b6567ef26c8210250492832325d453b000ab2d217fb62eb12215f6d7b39c329c1333f44a044494426db93301409431dc5321f269b3e413fdb1fa8ce3429eb49db29bce6c47bc55dae723eda7076c7284586a279e2855e7916cd470f757b8803b97c22688506c0c4b201e698839d868ce3387761f48d370f8a5ddaa79b3cb6d3778",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003027Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4a2d821b222fe1973f6c1fec967274811169edd63d7cf55c8585605e818119a650b314e6ec5210a8a23ada6ce44b5ed936a92e2bbd34f810a4821566df81c609d72dadda0d80f5dfe9c4d32213ee1192e619fc2d0f00031c78c6b0dceec6a1dd59f7600fbeb5c9bbba4269dba455217ea0ec5930c2dac23e3de0ae42e4a7505cf17868a8c0784030e000b5e903f3de338dda99be08c2b4d91b18c8f7751ecf12c19fd1262264af3e7b376e1bc1fbc0fa1821b89692e36a8079d206a259d490a8b0ebff767b20a4c342a1960935f48da9d9b07afc3ce4e2d710d0bbb8646e3bbc75c651fa1443cb670f4badc3ea1bf3f69ac9fe5861daae64daccc074f481af07"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003118Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=915d5b9d2ff6e3b7ba86a7ff23bff5d906e56ef1cc43c5da77b8d6c5d480505679fae3c0215d646c503ef0e3437f1a3116219112bbe0cd4ac22446edd10337707d41282668122f1996f23008dbf8836ee3a5220e0bc185a898d683445794eebe1da72dd5eb15a83a2da323e2fafe22ea56351e6d3044fb220146aa9875c227c8e866bbb9c345f0c67c0b4b394de3d03e409ae88d2f1b5891674fa5d3be352229f58d336a487036af1fe7c867a495ce3569a92569cd6d2ea4f5eb5a30084f1660585e36e2665ef9940f303a04b78c505805c8c78530d1c2b586209cc66ac131af0b3f67d23b23ce84622b3270f97043163d8169eba94b209424a0129d856d7583",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003118Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=167671b4b66c15b81bf1a7e81cd17a9618222c6f2a2eadcabb6aa25cdff49373f6abdd497d2a38efa2b2923f150033d3a5b142a723dfdda8e6a6a998237214fb82dcbe00ed767e74a93fc5dd83d4cab80a7889bba1c8f0fb16b4666d13508d44794bc4e3cd5d931ffad842ee67fe5358f5b13b94ffcdb73643f04ca29b698d7d84c1e87035b3a7685151bad2cea21dbf96797b48e6a4c8dc38f03128e7a4191be0fe389c2550db051f25a531dfc45d0398c49035f6b73e65af0677a1340c0af9f28b4fd7c1e8b1f48ec19e6416ccd3d5940cb779119f8412b8a90a6d3bdeca5605bbee8307c6f75b19d905a824cb3a9762a683225b0088fe6d23f4817eed1606"
            }
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784278,
            "nanoseconds": 914000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-cd776c278e1d466e",
        "testState": {
            "id": "tst-cd776c278e1d466e",
            "status": "finished",
            "screenshots": {},
            "stateHistory": {
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
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
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "agentState": {
            "id": "astate-b622b0c406cd4430",
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784295,
            "nanoseconds": 122000000
        },
        "screenshots": {
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003118Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5d39529b9fac794baceda7f377ab4b54a44ec85144a3dac2a527a32790c65ea31a7b4b53a61cf87a540e4fe31ce48f0bb30ebfadfa42d4fd9e7e8f25a0950186b4f9a9657a9b0ba2191d78c46a2de87db1a79ed989e6205048728d62cf735565b1485c3645b8594f170ecb8bba19cfd430f9347b18278992d0a19b6c46bf5b1a2ec403272297d970aca72b9c47b5dacf5475dbb6c4f6965487fb1672f9f8299bb175219b9b9d9f43beefb0749d628f3427d22adad3b630b9b8b3c2364468fa731c62acd887345611ba37b13f95931b9c7f9e82156e8852e2e0de0b14be3d03acee9fd90a5614c8d6d1d7f7545e00ddcd781910d35fe7793693863719d8eafb1a",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003118Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=081d56137978ed60b87778365be552ce9553a89639ffed92e6719eb21bac9f4f0f52b9d29967a62c55e7cc58b822db3e0f3dd89a532912e693702cd2503a8de68518bf8f9256a37fd437b283535e0f2681bf2fa65696a279997acdcda77c6a0762bd166c7bf4d6512d3ebf9bcedfe6a7bc80bfe15d90c15c9b140050dcd860ccb7b30da78b6216272e84c2a01db1e7ed1b0681ea52e28fd96922b13c8ead4c74e0fff8c79a9d1021f1593490792014a679a48d6e7b674fd7ffe4364ab618fe92161b40e3b74302091eea1ecfc713af9b58081865288ac66436dcb504cb4cf19ceb22698519484203e73f3d829b2f47403ed74c25b82ac6acddcb5d5656a1141d"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003016Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3517b3499c493f134bab4ef9746779ed7460f6d29a142e5df1211c9c5f8f15768db81b8fb1bea98202b759d93eb67bd5a932c1d4f2f081f1b96e8701853e8a92d57f2634a2508c4c7b125a59b7f8660775962c4efb1900cf811aade84802dc5d00b7894be2898d2bbec349a696d9492a9658d3008ef83171e07e802adc9f382aca9afcd66d9bf6917d825ba6abc5413becf24226a2b128e28b04b1e5a25f49da72af7a8fbcaeee21d0c0343a7e78b1560f0c6c95747e3377d87477c31e951e00c13976db1b2d4e096c75092f9b3e6fd290de7f9cc8367b0a24fdfa9962686e49723b33c5cb1c386f78bac5b6053deb263e1d6fa1802abde62163e41e961e590d",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003016Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=549354fb1b4877914bc2c025b7d79493e83b3cea1778c11624fc760e12cd3e1d4e6e805d58e453933e756b53470638e035dbd93a768a294e41f13b9ae24e1599f2c2e600f328233e0bdceb1e69f5cbdc75eef16483c49e78c981f62fdb6c463bdeb8d74eafca2031a36367de521a69468efe7a975e56e7d6c293b317fee267e88e33cb4899b07363761bd552800ce85daebeadf496ab3596bc12a3922dd5eac982bae4a1201d5efb587606a8abc8b4a2b1cb56fcedaaf381d7995279e8448ab530ea53cbe87dda0723dba4ff0c846a9cc089906f88f7c36bc81d3605dd63c0f0ce61881f60d1c77cf2452ff176f6fc6c0fab6a0482c8c73fcfc0f0ad88bc81e2"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003104Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3aa247792cbc0ceda66ddb6d046e8686fa3c7074dfc73a2b09b9bafeb2cda9df700af2350608e55c313b92b0369653052abe25bfebb018e0a46bdf3976fe5d067b8fa7cc1d7527f782056091aee7e785ee371d16343c649215e278458f97f5f426f053a61614ac066a06760075df5d40c00a220f42b209f0de4b5e461f7176911741b0e4547550476e817eb1e4fd126202407f138e0ea5b1d6c1af8ad6d69762a23372d5aabdf7203fbbf9cab5f23fba35f1f7710aab7c09202db8583d1d14b8d484d6554e06690b80afcc4f1bb811dcee0d9b42b1714259bc8bc06518219e333704bc89f3ec94bd7ff6c2d0ef0dce98bb275e3e20a14abb562fcda308d2c5e4",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003104Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a757fd5305f6cbf739e280c121ebd7fe55f5b90e8f42520cd6ddd0ba42f91fe440dd7b1806aac1ebc2125f3766d9f09a2d38511897a23fb3d68bb11beca1b207d95eab1f802c8d1a7fb3f685b6a6657a7854aed2459d3b6a1575506ca902884bde9b78bd8e18bc71950fabfe16f2b393c5511303a219bde5fc04ba5864620d16266f8eaadd5f5870382071253aaafeb69a1c0c16f429a4d86dd2c6fd06df6ec5061f3d6525b66cf27394384e731c41ac819929e1f4e4561d4cbd2b54e0a0fb46e43150275c9b270450fec1fe32a809f121002d132c7205b2d41c5a6605e8f8a2d173f3b0abe857c10a418791ff4d68f84d73a2ac6eba2212a35a4c8c19135df3"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003043Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=223fd1ad894da03919751a04c846fd2a2f3dec66eb7f4832877996c0730629cffc5cfa0b72f8c1ee859d09e5b5b761e5a9824566ef4c2d2bd02e110af4dfa51aa5338a19504b958525f809d13b992f45aecf66c84274f1ed2b7c5d3793f753c1a270ef7e5300657f5815330aa20abf937e3d801deab5e49cdc5e856293a247a66ae3ad9cad5e38aa0da545e5d5ab1646ae3ef43822f66586e70393eef1dcc98e20bffb45b2b076fca9d95bd53f53f25c9e96c40a6a5245c903f9a322671fecb51fb292c8fc33b90a1f839c70986d51d01fccc9b6531aa732a67f0ed2fb8dda035a3a9e17d976291c3ed28639d3508a430bd3afb9223066fe1a1dc213aedfaeae",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003043Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3a010077c3a6077b9384fc687835c38d69e7e0c9d5d7396a7afbb0dd11ee1d807824e6fb3f5d6c1f003d44192648ab1b1fbc5d8641f6ebc90674cbab33645f424c3dfb29e4f3e074e05ad41afd507e6c1f6be97d2aac5400bdb127fa3df06b9061f3abdb05d985d00c9a457c007a8355dc420aeab60220cba164a2a5b7dd9b975739e273ed9ac11c6c7885b45c5c3117a953f256a68e97f69bb50428a69a2842253bfca53122c58f6b660d322c885e70196a4648d1c9dcc8b1c23f3cbefabf596907bdf7005cff1be0db7f103f6d82acc901d8bab584a4dbf14a336553015ad3e2d301a68f63ffaf992dae51be03f014f77b6afd7ef1401faed51d3e21c52020"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003133Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0967d51fbf9682e624919fb366e01e92346c2fe4317ae201b3eee8c68a1b632314b448161f45e61317a2521c4341543f2a36d9b092af99d07e0548995d3408dd7698432bad8753157631467ec63db85c0ac222e647da16ceb39adfba35feed254f0a70aa7a0a3a488f7082b6c44928334558cd880e83a825d61eeb53d5498c17d9f024c021cdaeadcd223355dd654c834620571971b5f41e6cc95ddcb2609b0ed824958edd838c681af26400b325890df2e94f7016c1d440583a324f51663d8cd8c1e2fc4d102cfcbb5175eae0040ee2687e79711133d06fdb0564fbc1671f266d08f157b7fb3eff06efc466509804313d3fe97a9138bab6753c9676ad1d7362",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003133Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=31faed0781af417cb7f5b76de87e785e88181874a0df5e49adde3486084cb89473aa4f2e225abb600357b39e999e9095b18795619824b3ac28d8dff7cf058518fdf20e323224fc9938cbc5a117433e18e69132b868fd49276df3a94cc60d209168794d04a32437802abd5642085664dc15a51a6c5f31b85503269ea212a7996713f86e88ad08f5361ecedd7da1eceec1ebcb8962c6ac969c109a9cc5289592d5a2a0a2ef8a55d5e8471c826fd4c52f7c99e602b5e3f45d3248d65fe33fc27d78e5bbc82a8d2628a34662c591d92d95151a56854b991a9c465eceb9153ea4b930e71cc8d639ce2a9198842e5c3034c44ecab9d41ddbb4b33010af1665eab8d39d"
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "bootConfig": {
            "agentConfig": {
                "contextHistorySize": 3,
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "temperature": 1,
                "llmProvider": "openai",
                "taskName": "Find and climb down the ladder",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "5"
            },
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "pointerOffsets": [],
                                "rawValue": -1,
                                "type": "float"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "name": "<",
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "hasLeftOperand": true
                        }
                    }
                }
            },
            "id": "bootcfg-682ea07eb70d4884",
            "emulatorConfig": {
                "mode": "turn-based",
                "platform": "gamecube",
                "endStateMemWatches": {},
                "startStateFilename": "ww_game_play_start.sav",
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-cd776c278e1d466e"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784200,
            "nanoseconds": 795000000
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-d55aede8a6e14bd7",
        "bootConfig": {
            "goalConfig": {
                "condition": {
                    "logic": {
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "pointerOffsets": [],
                                "name": "LINK_Y"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "name": "<",
                            "hasLeftOperand": true,
                            "hasRightOperand": true,
                            "id": "emuop-e59df391b2714891"
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    }
                }
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "agentConfig": {
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "model": "gpt-4o",
                "llmProvider": "openai",
                "taskName": "Find and climb down the ladder",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "5",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "contextHistorySize": 3,
                "temperature": 1
            },
            "emulatorConfig": {
                "mode": "turn-based",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "endStateMemWatches": {},
                "startStateFilename": "ww_game_play_start.sav",
                "gameId": "GZLE01",
                "id": "tst-d55aede8a6e14bd7"
            },
            "id": "bootcfg-f95c35fdc9aa4661"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784394,
            "nanoseconds": 303000000
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784201,
            "nanoseconds": 508000000
        },
        "agentState": {
            "status": "error",
            "id": "astate-5768c46fa27e41dd"
        },
        "testState": {
            "status": "finished",
            "stateHistory": {
                "turn_3": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
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
                }
            },
            "id": "tst-d55aede8a6e14bd7",
            "screenshots": {}
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003019Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=83b1c89cf7e7078afca2e272280927f328ada6de70c69fae454e127b2b43ff8e58304e5933bde25b596e37f2517574625f3dfd72f364330be6bc01c295ce564613a2917a7b43330fc6f38c283f16de69731a02e4a1e16dc6f9b41c1a524d2ac85d0bd4a15dcf84f65bf107706b45da7ecf6831f6cf31e0e2de23a8d618aca8fa3d8710e7bdb48d5765e78adf0d15142c30d1da8b9fd878e15976a18742e3e1deb77775342eb763344a381c74fc8d242caa9c46566c2451b061a45ad3a94bc9178a07c9b2978a208103ecddf5f07f35f51b808013d860c6cd4fe3f83d9c906d9a77124fecb34c0687b7cdd6f624438e58540ee493717376e59f02c409ed8e869f",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003019Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=742cfdb6c6a8f37db52e0a5921911b0b8e7be62f19c343df2c1e24096e8e43396056b0a2c4d1196ec0dcc9befbd28d2f5eca8a8a5c42763e0490eef24e3bfb5c74ace85574a115237dce68d0c27428708dc75865f57dece8cae296484d0e049c17b95cd5adbcd77a58dd08dfda0a9cd1e5d91deebde4ca41bedaf29744934fd2ace12151ab40f276aff0ae8b3eaaae724964940be98eefb46f172ab61cfb83f49dfb9b999c742f733f724608d16e89535e2691cc0ba861a8999d3aabc6d8f71967dae04c38fa74b6533ce9b0eff68bca0f73b129c401adda667014c684cca5196b79cba2c518b0dcabfae41da1ce8097dd1099cd0e94257dbd5ea5779dff7b26"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003050Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3eecaa14f949634a3be5f040300ece2395b3a3e589ef8a1136989f322e283a001f869d83e6af1090920cd4bf8aa1dd99e6fd12c63d2f9b04fe7a74ccc51d9eae90c3069cde072b8cc12889eb9462d2f4f27eca3ac22e922dee3676c3d4f2a8f01fd288b0fff88da3f01f4abeab1527b26ca34e0a6ba90832a902ed77089342ca5fdabca4bf09740cfd91cb0b91b98252630e89fbb5ec87e1fe552f78cca3b4a457ea0db3983ad207a17fe3f82325d068b748f415bf28b84108abb8b00243bad4d3e37f1ddf665946acf5e9a5c65a04572f4e5ed47f5b23ab906c757de1ba7c53af0fd9825704d0d9b6feeedb993252a8ad9a85d16bc7d1656a6de3d773d617ea",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003050Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4b858922c1238e97b6e89b6ea342ddbfd4502a9ad438c29f8b9c5fef8b49bb8999727977c19976e1e9c922bf48c138305b8f01ea555e21aaaf6e03fbb2d94dfc7999d15ea4f338421705f3b30f39709257e4ba76edeec1d3678c20f83196d55b1005b31f8182311721b607b094eeb88dfb5cad3b58048b0822be57393159d200b2d0109d81e4e581a2efc970956a1918f74e5016b55082845d9052d2534e5a92ddcb554068184147a8d350673f629b95aa6a765cfee8215ca4d7932568b4b840cd1ecfaca3644746ebabfe93e4274e425280dc3ba4174024586471f96de5167b2bfd7922a5e945737f331ffbf2d059d8a301ac9c38e746e68f575ac4118f06a1"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003145Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6a6542c61dd5ee4b70ac715f8efb5118ebfd3fd15d82dd87c66f1313c3c13bbfd36e814f726fff4869cadab93cf449aaaa50c6ada45d9016ec37e852d58b676e0ae9109f2598c903c08a6ca467223651490ea1f6b71a3f685ce46489d5821b6e594255926bf831013cbdbc35054474a4351dd84fd50395d4a679f6721d76cdb9438157c85602bb906337c23b004cddcd13e5187702e56e27956c646e681798a3a69a8dcf7f2d941d05c6b31598bc283f20ef4571e785af47dd92dc720e727c1d787e036157726395acb03fb1abe410dc1f18d3dfca42ddbcc5ef9b6f277b9630981c8e0aeeb55d732c4a0079f529659f2306b30749fa40c2874b007a64f56ff8",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003145Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2b96a8c3ae85fbdd97bf80e877d2b5b4537d5b78718fd5b3d70eb285cb4444444dd501e54e00383992aee4c87e0d8da5c69bb7c33bb4a4205375d3964d41163ab2f05c738ec30d50e245b88afefd494b65c6a421a9eea832c52e0a1f148f5c064bbb16e5c212c081958354c6b9684074bb2d3fe748e6f0a5804a8d2103004724319055a8ffa4c1cb675fd70d858b6c8a5cacce8c590fdaf251ed297a1666d727d79841b3548a1ded32b66fd7ab9d509d3991279db43f29572492f8f1dbf066a00f6a0f991699bf6a1cb36c7cee10de509eb9a8882e03197dac924a84f27e64597471a75c6bde2662b06281dda4db7d92bfda5f3f98b56731dbc0a3524a9ae2f0"
            },
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003230Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=91befac53f011b46b484d7853c51904d9f29e2d42c8df7fb4fb898f8b3dbe76f01d83aea77282684bd2f295a54136031da4fe5fb0786c535929b0d798fa334208e7cb3571adee9db15803203df0c9809f44fd70a79a18ecd5fb5d1380719bf5bd2be71a7855dc706f7853ba559374ba24d9882048d65d91fad78b48c3d5af0601da4edd2a072f51fc75f09265b9cbdc7425d592271505199f2760fa5bdd4fd18105d2a83bf99eaaff3fcd2479b88da6905bfca376658e6bfb89d2c4ae5c623b71a4b6e7168f11f747001a286ddaec0eab1ddf2b17be4bd9e5be33850343f93c6a009f59bb5cacb777cae323c61dc9563bcb978f20cf5684f56edbe4aed11e4fd",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003230Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2aa98a97d4b36ff1fbe9992b14380fd67e60e275cd678966b6eff7f1891b0f04ba44569b0407acb41e594efc25d8a9c40855abb5c66f7b97d064b9209b8f32ecd200d175b6c390e8af220697789279662a9eb02fb233ed5ac4255e24042e71b9e45164cf66fa934d38c1a6fc6e64b78d31399dade70aaf18ff45402fccce401813585eb779e57421d6bcebaefafe36a6f75822fb1788b5f3944110239aa9350abf72b564b049acb3559c99d764f4e09d8bbdefddbf066a544b884c0af4c5fc97596d1c2cbf40b4dab8cc11156eecddfab1f433022cde555302369965a3e99bccc2b39675efbf0bc255e8b901d529b374d27ef0a6c2434da441b29edd7e051596"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003101Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2dbdabdb77119aa06bff94d3cd028e26c3f83bbd14c5e35aabeeb16be7e604d69aaf52401b363a67d8872351727ff65e053d6e94eb75df349f5f2ee30b05206092de0d49af9bbffadb6c600c5612ea9e44f48675b6f8491b3fecf183c8ad298f4d369c666c81b42433b33f030b9ae99765363902244061761c7a3171250b555d091014df97382719ab501dec1630eae2f8e5ebe53f0ff600237e370e049deff7c7b7077aea8e4f75491146592417066f5f862ddae8988ef08028da8af4ae2090406a823684456457f942a42e85c355c542ca440a681dfc1c99a02cb86b0e70a0ca74f50a6aacbca3795ee0e2fa363f498f8765bd648013958e4d44bc08935c12",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003101Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5004f043ba69ba838e6ad50a6937b4c6bdfa2ee94fb3a4fe282e26b78aa8ab4a78daba55f03779a720a059c23db7f3bbebf75124ad2a2bc294d23a127cb9be916915b75bdf92cbc50614c81f29f6f7d675c51a808022c172a0638a86fb0e82ca54938f6fe053499c3d25d59a174e8c7289a08d967a76063161cdab7c53904d054a530f2fe841c92abf9f782666c320c96194fc204f85db6db2439b6cf167ddb6b83bd96d7a0ef3938291882aec7b56d55f0c3c9ed19fc989a589e60e1bf8f3e3358d49d354c78936ea950e44817e8ec4e0d298940c2899d6faa32cdf864d58b27155d10e1be6d702eef6c1ac60a77f7300309e03e6f581f3379e786ed8438a31"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003043Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2b739103123bb3d22cd45fc35c53aa661f8d45c66cc7e7edd91f39857b10b9e374b208e4c65c349f2e366ab235bef88812683e62351411c834740624e51d4f868d99f1ece6c548c0cc0241f46dab5d1a1cf1ebd6e8f0c38c04e2f9bc978b43b2580230f80743a3e53c0cacd4dc0b9b7e0a3ef2dab9bc1212aa068bd0024412c5423e79fff26443b955f1c5e806a114122d279c4a79885de8ba6e30d08298f884e28577f24b77644b27659c1b22910e837974e81f2888b833166127e8c27f575b9a8bad52255a5a68e62506b56ceecd783fef286e96976d1017bba0b1f0f4d4aba0d3ea248a370595dc29ce399cffdcc87357e4bdfe4dfc9da3a5f33f5163b1b2",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003043Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5f15c0767dc76c62ea2fccc0ec4b8fb31f4f9391e8d52f6a359120a5d91f21fa9b145291d8130230f2823340b5b16a7c17fd9e6e0984c3322c218ab6d67eadf64883de526c2d3f94a217ed8fb158c66c620c641bb3b676db57d865d302930692b361ebbfb23327a4325ec74d190ec3f564910504795dc6fda6fa5aa07ea558043541402d238aa9986144f6e24d99992001e6eee2214f658673b45b65e07ea556a1bdf3ac5514c0694ec9ac18ad1c6032de66d9d32af493dd687fa890ac024159f0ac4dd9270632e175e8995a16e66c9b2c714ad559ce67b818721d08ab5785ae6fad35e5a9246c6e6665cc8b4bc3882693a08b059fcb5be037dfa03b062d4db6"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003058Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a8471acb89e2bd349775e4ae8a0beb94f9954d8c93fce1ae010649eef2773e756063b5dcad5a90f61c021a2b45435e772fbaabcff8d8f8df04cd99591a82290890838f9bdaa87c493f81177bcdd74d4558c76ee9cd7d7f288f69d30b00ab67011987b0809c344e9aa91aa63433c2c82c3157b929100f3caaa57cfbdc448d2869aef2b7872b285f505d92e7c2253e07ea148b36c2939a2c5596fa2ae27c78268dc3cb26a2ba7044ef4e4ca787b8a46471ed90f8671ea5b4659ccfdf6ce2a759a0f784712ef9936e20f890ef8a3d2abf597519b4d1d830307957a9dcc09026803d4596d6e63db6767f02e0a947f2c7f839e2df96d9eb0c1805eda5ef5d8003900f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003058Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0608f1e252c335471a28387a25a83a2d659ce8fca674cf9f2de1bf6edb0f411b6d3b37aaff7cd6d8aeab8e70dea5789826cb6ae27ba156de2e3d3f421d0849b5514f2f42a0b0171cdbed89ce005602576f4b193728d20f34ddf1493436257f7d710a24f9de54e216d58b0c05e56d3155f72d4b7495ed20386dece460f750fda26e5ffed0aae9b541d0db586bb1a1a6a864d9b7b931337f6321ecaeda0d2621a96dc1274c0f2e30df3af1a6a3f28523125df3d12a11b0a7f90247a7c04e99c90f5934c85765ca63ce4e18f8efd1e1828fb2e639370ad76fcb91369159ae712043256baa0f819ce2da019b919450c6d65f49c2416ce2be0ffb80fe0cdc154408cf"
            }
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-e4b351c979a942f0",
        "agentState": {
            "status": "finished",
            "id": "astate-47dfdb60976a4fd0"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784372,
            "nanoseconds": 533000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784429,
            "nanoseconds": 332000000
        },
        "testState": {
            "status": "finished",
            "id": "tst-e4b351c979a942f0",
            "screenshots": {},
            "stateHistory": {
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
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
                }
            }
        },
        "screenshots": {
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003340Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3e650d46f7144285bf84b27bc8e0a4a137e71a22e36283fda5d7503a85308aed3e81ae5b621db3ee8314074e7dfcb08db5c1bdc9be5adb8df74d4d94b2e6f7a31802c6a3abf7fe77088556928226404a84b8f5d733d7300f58ec09f4e44cbaf44d9a7ab873dcc1ed0198be66ab71be2b73cb584a6b67b3594cbd9bc9a35b2a8431b11a6a294cc23be4462e34fcfb342ca666390e6a353a3cc148c967520c62b56a8676f8ba7f5a3610b625fe4f266a1dae15e1015a0f43380a39f7204ba43d958f7b40d227e19e290982ffebdf294bd4b3224cc6c8cff7dc4c2e9c87df6b30c4684b06d9563d7ff1cb2ac26aa390193774636cf65059c6fae799d6dc190b71e7",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003340Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a6792ea255dac1a2bb960797e828247a3866a59b8eb87ddd70e7be7ecd1f36af0d00ba9ba31962c2ee837724b9b7bbfa63d0b362e096199fcdf0db672a4df5233ae11e8a7ffadd3df9e36e1ca5e3f0d4f28823d136c296b9ee2760945d5dcfd9d8a81542395291995db58722bf8461e04bfa4640875bf32586010aa196878d5859a9cacc476bbc0c67e1ab28154b496f15bcb1135686461e86316b5a4c87c7f8deb57315f8d8fbc49b69afbe3f9860a63315ed41a8c964180707bf3361d946ea3d3bcc201040075d26ae93062a1f1e6f15115686d9aca625da528ae97b84a229f27e54bfb85eff60db9e164474d931323b65dc59a695f51d680aabeb700b76e4"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003348Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=abcb7a381c980bbc11711a62a353ae548fe878388918f957ce3f097be78e69ea4ce96229ea4da958a07a8d5ed31ebc09af66ac7513e8380e97b2920cdd4ce545f7ebd592b3b1d59a28c3470d126cae2f74cf6ebd0874e47ad32f287df007b2a23a2cd77967754d52ba48cbf1623f744e2e8421453cd7681c34661b9e5813275b1914275efcc13f3213f942fb993ec8b180b5064848ae67f7d8bd7fb64b8518a055712dd7891ef65de63b9f570aa0083040a305ed63a1ffb8ae9e49d8f054e66e863ea7c4b9010f0723e410774c156921b760d4b4060f8e97192128b4474f2ecc4da7b842dc1d97df3017b75dd63dc07f3c3c29d36512f83ce94a09015b5f4737",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003348Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=92e70d6c59e7432a1a9d7adde795a677def4d7de4191cdd0d06fe85f28961474f3c80f3ef14e719deda5271163ec835b207bb838f238aa2e97c5c686bffc4ae859130abac5360b49e5198aff7a5249d7fc686e71ea288e6ee216e9f0b438e35979b0a0bdc3b5b458f18b355cf21b5f815d5ff1d8da12355a5eb53e86b6c8af9bad7861d5515a9cbc2c97493023327c95301cc8465f2a4389ff0cce84415c236ae042e348345a893fa4031255bd1ed136969ebaed30954e2e70cf97e5dc6eefa2cebcd9878b4c5563173396403b0098ec7f3884a10cf9f29c6ea3ad5d778374b05506c378ba0da2563cab8f6af572ba122b84b891da1c3e8b01bbd521ace53b38"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003306Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9cb153dcef6f0776415571790333be685c47b5581e29b07f5ffaf3f9dc085b8fd06240cd1893e4d6615b31517526967aa2d159613177758d58e3132ba5827f77e646c1797f2be6482c490e5675939c1aa0bcdb590085c4c8ca937628861e5ea01fc56860fe122d166b781f52e91177d7d9d49ce366bd8451cbc3c48510679d012ba8c7e6c58465f20b3cf6f9be33a683a86c851538b0322f9e4db757e8816f995afbcb9fb8a89c934f76b4250dedea7f6af0f7a012d98588b07177b60a4914b580a021eaa1e23567b22b895c246d6b2d250b31dec5dc884cc943eed844b410889c5c60508e1721f444a8e6b250eceea8186818226a81c51ff2a9b221f7a1bece",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003306Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8d3922cb565766c2bed15ee3947495d2b2e7ecd6cf071537ab613539c9898996a2d2ec5f4d64a3d5c9f4dc136d0c093321de195bd1fc783d433d18bb978fb2104ccad2468ccead1687469c0a01444625c8a0e4778eda0cf8fed9a367d51723e98fb761205005fbf2110f69665322b99d661f8ff96391d4cc1ce90e13cdbd342a7560651f5f6e9a61f89678f5f80143f4a9e4ca14ad35f52e66d2b5e396d55735484a92122fb9478ac852bffd8ac72571682a498e1545366c8bdec17e447a6d631c34cdc31167e3251c42a163442d279112128f92641856fe746ced6af8f86570f8ebed7bd6e4107579ad70086f196dcd4544f783cac4e186754112e697d5ef26"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003322Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0a0bdd78fbc534bea9f75f2d8082ad643bd570e939010341e5a5088641c20f07d35951629ba1b96093ec1ca598aa1d8ca987b6eafc6420395b1a140154c8b83f07b0fb00245d10cc5907b42ed30d946f72df46cef7ae4492bb0bee98046b0d6e242af41181df5027c1b415099c22fb95c13dade60a04a9bd45f165e4f30a8d1c4c288dea17b8a7fd2179e8bba5f1a4876b2eb7b86b6e7b0759aceaf130167b22ce6a66fe09380a4f400811662c9d88bf56eaae9cf6d2831fd55c61b4d7631419f0d27c9fff87b2a828e7e2b5f1024cd4dd5739143e4858ca0abc37f01b7675bdfed94e878a4ec30fc75f939163dcd8fd3034dd7f8e4e5c15156cd099df06c3b2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003322Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=164ffff08358706204448ee9f1d7b4f9dab96872738289896871f4ede00b22604093df297c7e8c7e015f1b60c3c818bbd1ea3083a3c656ac6135ac0869ba77d9c61ed4b4406037cd84b4fd529542aa9ddda8cccaebcf1d8ca7b899c7000360e375cba26d215861d5e08870db02ffb1aa78ed76d7f18d2242137ad497c9e9c5b41898162ace438b9440691524a92b353d22ff940043b464bfc593d60d5de138d770277736172fd00c8a18bf89b5b9e9e11de7e07cf7f8267b9bacf44011f376df2b0ed90ee77d50149851ff2a9ae1e51c7af55614eb011640f7295b52d52b76690a681af2a10bab3cb81497434368dfacf319bbf99219516b807a87c60d2fa118"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003332Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=65b97e977f251e632cc0ea3de519bc56cf68c8bd3dbaba4ef106cdc795c606417fe2f1810b4964ed75a552d759436cdcc7109468813c216bc03b4eb3719b912da0f15ba6c4725d5491be12a780465d6bd1f291edef871ae961c5dc37757c6b139b016a70f366ee423c660d2f8b4c4c4664fdc46f923a0bd4c3bf2d97e88d04ef74c11bdfdbf6f707a60b7460e9d5b6a4497840263302da34fafdbf8271e70cdb88a89fa056ed4c690316e48e45caf68afd75c61bc014ba9fb2f167700757cd2d57f3bf8d0bb42a6152546d0f3224d00600984565b926a4c2e5c1029c492093247d9d28e25a88961b0ed376ab47f6a1530ba48b7578cd5b29f56055e43cdf481b",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003332Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6e07049200cddf9a3ee7b2a9d2a61be9e5120b7b241e8fbbb18a765b81dddae78675d355cf4f957fdcbdabbecbe3bf795c203020732aac8d2650d8b308edc01202ec7c698e70dab577687218c853af9040a241c920df36141336d43d8acc98fcbd014b1da59f33bc05ba378b6895e6e319271efd5f2a5b2ee920402bca17e34ad8415d06ace09958112dbc22ddd873b207b0206f85f4fa9df345458bb39deacae20072b65f5d25648731c63f03531a3aab9d2ea147612142b154dd1cdcd76daf5c0af50647ddb1e48a278dcb00efdb9add8b6d3cdc3247ae5b6f6f79276aa467da7c15bf89b63a2ccf18788b91b1179f5083b16a18355662e22505d14c50bd68"
            }
        },
        "bootConfig": {
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "type": "float",
                                "name": "LINK_Y",
                                "pointerOffsets": [],
                                "rawValue": -1
                            }
                        },
                        "operation": {
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "name": "<",
                            "hasRightOperand": true
                        }
                    }
                }
            },
            "emulatorConfig": {
                "startStateFilename": "ww_game_play_start.sav",
                "endStateMemWatches": {},
                "id": "tst-e4b351c979a942f0",
                "gameId": "GZLE01",
                "mode": "turn-based",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                }
            },
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "agentConfig": {
                "llmProvider": "openai",
                "contextHistorySize": 3,
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "5",
                "taskName": "Find and climb down the ladder",
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "temperature": 1,
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective."
            },
            "id": "bootcfg-bcb884af696f4e92",
            "experimentId": "exp-d7f3b57db87b4310"
        },
        "emulatorState": {
            "status": "finished"
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-17e78521d9774913",
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784289,
            "nanoseconds": 577000000
        },
        "emulatorState": {
            "status": "finished"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784190,
            "nanoseconds": 467000000
        },
        "agentState": {
            "id": "astate-f8648893475b442b",
            "status": "finished"
        },
        "testState": {
            "id": "tst-17e78521d9774913",
            "stateHistory": {
                "turn_1": {
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
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "status": "finished",
            "screenshots": {}
        },
        "bootConfig": {
            "emulatorConfig": {
                "gameId": "GZLE01",
                "platform": "gamecube",
                "endStateMemWatches": {},
                "mode": "turn-based",
                "startStateFilename": "ww_game_play_start.sav",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-17e78521d9774913"
            },
            "agentConfig": {
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "model": "gpt-4o",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "maxIterations": "5",
                "contextHistorySize": 3,
                "temperature": 1,
                "taskName": "Find and climb down the ladder"
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "id": "bootcfg-7034768c719b4188",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    },
                    "logic": {
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "name": "LINK_Y",
                                "pointerOffsets": []
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "name": "<"
                        }
                    }
                }
            }
        },
        "screenshots": {
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003127Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=600d10f6452fecea44aeb686d69c0f1132def7f130cc589fc23a7073f477a7c9160d7ea5eb182cc1759b77e7035de2014024431a11c53a125cf060ab6e82fae5bc4faff4d7780c4f67206cb4b1d4273ec429cbf8cb0c63804776e20aaced1d7a0e93c6a1bceab72bc6db7664505c8ddb5e74a71ee3a4ae634241ce12a29438323d2871fbb817c6892eb3bd2993924488b7c188c23cc78fa13707e9555c22b8b15bd4431b9663e6bf5421bd29484dbd1c22cd39b830f0cf1d1211884c46b7ff4f494c9a3750da1685566da0040cfc16392327552ea1db687ea7c58b726c3b78c54035c8f4fbf100114a4e8a6675455dda431ebcad8afabdf5ebaf22a3c8ef1614",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003127Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0ba8a1b7fd97cc7c239969ce619daa901e3c481f9253f323e701c4f5ee7cbd2793800158119a31a78956779d42bf9338faddccc1e18d92e4cef7d1e5b9aecb573366c4e494848ef6efcb4045f5d9e531ba9fde98502d5bddd64134a4d148411f5531a66fe167609c6a083dbbc56f3b3ad1f6b88b22e6eb77a5f095dbe102abf5f2d2cf6c78529bb3b545c45406169305517b33965cb483d3fb5dcdc424995e25c1064d09807b6031e16cf26de28c18fd1847006a7aa2f1358265a4bff5507737150f5ba92f793b2406fc5bdf3704ffda45d1ae07589fe59cb7342c8e0e99dcd8f7c0b90cdc571415bba61c3819257a1ebccb73e00c323b5a1157c1882ed3c34d"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003033Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0f5846ef9b1e56d8274079061c04c4d25b565beee44b8f0482718c4e9f30d82965954a65267762465661ff5301b2169289ea7377ea1d09c9475f86d84ef3aae1f167b593cb33596af0ba93836b9bb3468d9d421e1ce76d484f319d1cf194c90d7997a6d32a3fa003a57d13caa9af2b86bd82430d520265fc1af12a60efb592a77fd65930886bca89d2e5e6e7a4022d6e8e277b600dac1f23a7976d10916aff4ee534faf0bc67a453df46f58437e46495982ed3e273e1f6d11a271737ac66455732a5fbe9b031518b37d8d7e43b59fcef900f11a3e5023e6fa26fe28e2657816591d45c26e414d105d7e34361f109dca4bbfe37e5f4c9c69a9d0f1bf21ac227b4",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003033Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0c3ad51a19806c306b67c1aae19f7c9031de16031c309f2f6f17192ab47311785150058bb89d02e283452d4c99cc35428f3a0e7eeee82ed225d814afb4f241963ef79652ee9b1e97b1341e940dfbef0d02893a69ad458a0ff2289e2a853d8ed927aad015a3a0714239c517703841afa73ecd6507ea07921de7e85fcbe84ab5d9fb930d75067e81e81c0fddd8329a2730c8f9785830fede8441d3c6d823ca0391fcc1ff31532cd200f79ab0c45322fce5b9266276a7ef05ff70e4a222e7fa9659c215d86db19d3e34626f5cc4aa1f5cd49f95d5b6f3ac466f457c8e612ad61e92adefaf2faa91a185bc37a670647314656ef47b226a59d7638f43ab7c2e8ff7dd"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003044Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=97a1a5e9cdb9d788b2fad327752e30658fe113b96d98cb94989ecd548f3c091b2b2f0888b59db94c3b1e662a21db2988f662fa2f471db4ee1b9a14aa0c25affb0f26cf10935f69a7dc42254f14cfee915f39b92554f8f4200f8a9868c610be6ee6b2d4b225ddb6fefffb35dd4cfd10dae5cefc9f5ea718cf1a2f52c69a4d0f623dc90f611691886959380846f36771f4324628f9705756bdb25138f318769e79267e53475213a596d40e66b6904007b7ee19c3f9af7500397514ff433b9bb4e92150678346f34e5e1b28b5a00c5d5afd997cf0447c115ca3b72917c1f448f77a094ddedf017f51c0b604d01acfc0be55102dd69bb95c2e4297236d978c41f6b3",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003044Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9a633f5a6f416e6c2ef7e8041d7f81e592e783a54ab573a218c886b1cff0dfb55f7f4b6fcf2ccf571b471bb1fed404184678ce0ed86f9c8bc3947ab53fcd866f0f27251d3f5d42133daff69e962421d9117628d7017b5fd0cab2c9bc7257668314fc7a51ff27cce48ddb7eab3fe31ae565038576f3afb863f5ec58adb21701aeac88963b699c0070f8759ff71b2a6da33a35d032e0ffa153711c4fe310cf531437f55c797cb53c88afb49e0ffba1f2027763c6ece042d574fd5a2bf7c699c62658dac0250d2756bb19ad0c581d3ce6eaefebef45795fe6ec5ef0cf724d799037db108b7261c2d91a626459a76cf0d60de422be9eb87cbaad437b5fe2c8092835"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003114Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=22065dafe36b54b039d8a18372d20e8ca6672a978f00e5ad6bf68e32f9adf30a9ef41fe409cc734f72f7bb1174e8a7e9227cc80e1a5d37af7369d6ba6fe04d9a68c6712ecf77bcfbdf59c0b6b0c01e7dc1e0aa111cd08058648baaf488b37df68f434ddace00dad545abafb68382ab867e3d3d186fe4bfaa38867650438d93912633e28c3932c3001cf137ae6beaf1300daa82f8fda013675dec23697b63ec94fe9301c400dbc02fd85bf891c961d6be0589fe4cfafc87efc5c3cbbb596ec431d21b367f5eaed4aa602d18b26515de3fe3216b7ce7e3bfc216967b1bc0ac3e1344b376174d24d202f37eb0f4a12adf545f0256b8afccac5b464a329b60b37b59",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003114Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=42fef5f689397cc61cc576109008e0958087665f3d2480e2f53f9aa10f738dd9caf42a034dc82e8359ac6d9832ba7188e207cbafcb2bf81e02a66a30fd677ccb02e302a63e0311114f5a44c79d69696c60f25df20428ed01dc7c9d46ebf1f6a43f3a676cfc6b7afb59ac960554f80d2cd7edaacb3febc2a4d8dab77339e9273b991b3b906674ee4d7a5abac389e99fe84db48d462ae91b648f969f7c53c298fe03172dfe93cbf78ac4311f71a2694853d9bf2456914fb888c4b31498ddc19330fc91c3f87f94a8dd6696357dc8f13db10e310450a5e90d90db75c0b60099d3e0044e6072c237d8bbdebdfc52dc57b0ebd01ce8da8d3e1b204c4f151e1433aaca"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003007Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=764063f9f8a223311c0c1344f5a741c7dd8d97ee031b9f8355eb38407444cb1ae572cd49dd9a45449f1bcb73c832e7039a29f7cbe42691b8ba5a3a62a0d54bed3e3ecaeff7e31c42df08cb132f9bc0ece5d8b2ef523b9f7562a492d9e50fe954bb412772012e5181b4d596e7369ad8bc8f6394905063acc31db187bd5b0dac866f2eee5a5557a5a93baedd898943e043a8cc6dd0a0cb8b98fbf15d3e57776c6adbd0fc641ccb0a2df77d6c58eb5bfc3abac7c853f3760d5048d97c844ce29a660615bd88a98a16e24fc041966b799ca31140d86652d69990438e26cbb2afe6f3aa0a3a38df5303f2364dae404517e511411f7f45ee77bbe44c27092c9f927a39",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-17e78521d9774913/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003007Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=09731635b1c150dce02923c3a09f6990076530f567b03a301969b55eae0b441ec6f2c02a5f4b5268ee8267650d6d2ba82a9e1857ef11d913578762937000d0b026b6db714c50f7c08f9555d1f7bf05c730a9d1a56792cfad17c4aae5b1c4d7ce8a66744e1bd5577a63a30992ff2bf18546d8959fcfea433eafbc0ee6c03dd2d9bf0b29025528891257e135aac635eba4b009cf93873dd952c26c6e28c6cb8cefcd4d0ab6c280998afea698f2925a95963424ab695b1a68d83054d983df61b197fb9f2265475bb97fcb9a9188d6af18aa0fdf12c35dba95be79568933e14e66cd84aa31b773ae2ba0f945ddfd9040fffb158354a66b47a0d16f37edbca9387766"
            }
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-4bbf21485d0b491b",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784343,
            "nanoseconds": 114000000
        },
        "testState": {
            "screenshots": {},
            "status": "finished",
            "id": "tst-4bbf21485d0b491b",
            "stateHistory": {
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
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
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784434,
            "nanoseconds": 438000000
        },
        "agentState": {
            "id": "astate-30f92b7e625d4391",
            "status": "finished"
        },
        "bootConfig": {
            "id": "bootcfg-237e0b2322fb4dcc",
            "agentConfig": {
                "model": "gpt-4o",
                "temperature": 1,
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "contextHistorySize": 3,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "maxIterations": "5",
                "taskName": "Find and climb down the ladder"
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "hasRightOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasLeftOperand": true,
                            "name": "<"
                        },
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "type": "float",
                                "name": "LINK_Y",
                                "rawValue": -1
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "emulatorConfig": {
                "mode": "turn-based",
                "platform": "gamecube",
                "endStateMemWatches": {},
                "startStateFilename": "ww_game_play_start.sav",
                "id": "tst-4bbf21485d0b491b",
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                }
            }
        },
        "screenshots": {
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003238Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1db038aec62913838972d2568d8b46e5142f9288cb3953c384c238f4813c22a3588f27e9c096ce9cdf42db1dddd38e19dc917abf44875297fb7f4ec5ed70d8f967278b537462b0b27d24afeec5e776bb19d2a5e4a10220826f95002ed7596b98c3bbe25f2a5ede2d81322bd05019b232813536f01dfd0c68b1309ba3fe7a9ed3fb33f1b12615038e2a415abbb1a6bebc577ba796a8bee2c585a0a1d602b0963b8e37b35300df16a4c4301767da6c32fcc5896ff562410571b8f20e447e071cb580d8a0a0bbce69c8e7def1ca2cb1ef2938f200b11dc9483eb2717cf918ff62ff57b926c12113ccbf2f755b51611404a3728b1eb1ae8f405733cb8070ea0308f7",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003238Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=27b5b29c535c8cf959bac03adbd8534cf77b4f06a106f2793b16698aa92cf109a2a1fb2377b9f826524dab571efa56f8953ee9d2d8a44bdda77f110022b18b6edceb754cb21238e6dbb8bfeca4f549425b9253be9ad00b4277eb3a616eabafb77ede1121f9a34b49fa7afd9a156adf6f4473d31b5f8af4d79bfb68b7d9b06e2bfca867105421b9128c3f379b0e9c86a35965c01e40bdd3bcf68c445ed331230d05f91c646ef9df1bd4516cebcf2d4407381e9ec7eed47f5ecf917a7a2e6c329ff9e153d7cc7724d1ead062faeed4bfe67ab92755ea3729f4db038c407d3e7be43571ab4139a1dd8e6aa35f457019913a4bed33b8e2cd81abf89f904523527ff2"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003353Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=067339868c179b85aa9e860ea65fd954c73a529e2fc420272328077affa46de28a5e65776d1767631e21474bd40c829939e06529f70b8e288d5765ed22e6732dd2918a4b6297fa35bcb46fd8ebc7a7ef456362e017d048864e96e41a7b2d90070ad1b18974a04a28782ec1c2ef77020b0b4b1cb6c8a65ec9a03b4baaaed50f5bcb14cc8b7cf68cb03e4fe28738ef8f84c67733dbd156a7f78cc375d4207bc45de7fdcf24a8d5e9757180efaa5c1fc75d3076405e457dc8955352eedc4347494ecfc8052991d34ff9e277722e03ef700aa115f919534d55971a512dd1d95616474674ab691b08e94ed2b71557201089c41e6e4e10f6cc0a58a452c63a26d27a07",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003353Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b27c75c59b14a5c3c56e10618a8042520d8fc3a788b5b8f3ec5b80e171c6a79636c38fda8fc12d9936e2e8a14128370bb3bd4809d1e43fe158e1247a851662d685281db530dfde9c04996116790c49e53d0ceb28083bd3c0dc6d20f28cc37a6be157a8db0f26f66ad85965ad62ac2a85ce0a3246ca836030f92c90b7e81976256a53e17caca9dab26a4b14b87f19032ed6940534bda4535f08a461fc5431c7067db9c67170f021b49d1f5e9c8816d5bf44698b7e37381615bd942f976a1cd8804158f1b47029fd179ed62e9d3a36280496ffc2a0b5bba9ff7d0793dcb2b615824f616a37715000f266461b16b66ddee87a5a98dd21ad0cd5a173093af7899348"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003310Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6de8455cf4e03168c2f011871d85ee10771ad8771e09d9c0fcc1d33a283f34f6b93ff304c7322fb5ad1711d5687bf28c7267d51d216c2ca6648f44466ba066bc76dce32eda083e3ed5ae8116370a879702461d57d963d5a188d79db77b2f0193957640a4aaac4cbd2177f49423dd8a2162f51bd3fdcc516b8d230d7e24921de21e40b24d634b5bb0e05cdc3867ebca31be01db0b6b5a2e4e4764f7d3ef34e22d7308d1eaaff616ade37b29fe6f7e9eb7cb352b7936dc239b9267974051cb0ae0677cfaa3ed30849b0a9276bb3ca11697d25a00e2db3bf76e53e6cadc88fe90c4a1f2c5dbc51d6c3e91bd5f53b9befb7d09e5d3f310a20e01c129f0d1cbc77de5",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003310Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5e8ec342e8c5268dc158490a67a0f703ec3d1b6f4e1d8bf31dcad6cfc28f0474c10a20ec93570ba187a122c716a4f79ce93c8e52f6ec7c15603d2e103704bb0dfe32f18dbb4f35567f392a3a7aa4988072495ce0bf46692238725fdaf11b2c46a56addb009c0195dc6a77e16aff20e15224c2e01693e22d347adea00f857e974b9bd9207620091705d45baea687ca732f4dba047972aaaf589a066537a989acb54c32f244cf364b4af0a8a68091ebf89ba7f800947f230e1f5ad2c8ff61601c81b2c2287e8333850c7bb891507144f93fb909f7582e9eab4ed6a61c39a4d651c6ace95d0e08dadbb71cf5adf9bdfc5c7f677eb56a2af30f7f9347b5adec5d27b"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003345Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5d103b8b7fb83a328dabd7441b9715fdba943ce7cfa1eb550ba08420002cc3180da47e27e550154c688eb92e3a4a199942fdbe05161055b9d12be4c7ff29a1ae4cbabba1ad91c9b8b39fd0e6c5ea731115d36a120b2960725875961872e36be86d78c207bc80d943e2c12e8bf00d0f827ba9009d0ca17c17c6a348c104e00186310a233777c158367452d5506df6aa5a1a8ed4168a7e4b8b7843d582725ff7bd96f6b578d470c4580be89bab543685b34cc71bbd38d4fdbf1f4faf566d603e5b2ef60342bada7f65fd52dee8cb3295f4814f5414cbd3c631cb8a5f4bc4b654ca28f4b4610c839a410e06f3f63c3cf32d1580f87b21cc5a8d5aa8d873608c4077",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003346Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3b5eb3e2b398fc39ed73a35ffbf763a256cc47aa8e4a5730f036fa2fa6a550fb4cab51dc4abf0845fc86bf0b2ed3f1090d0b33ffad33dd27b7140bf9f4e1fe7f62d1111382087c53e60699d1a61ecbfc506f372f7cbfcfff04cfa1009968ab2e4b7305ee91ffe6156ded896585736d6c466813b404fd5bc83b07aaede8554c25e481778bcc729c9b42e105c751ea438be1eda28cb577fd7aead0f35e78fa751232267607adc1042dc5690acc0e8b32677b15af56c03f37fc3c817cd78c24454182be6398fe5c157fd95dd099d90ea35cad0d5d30ab7fd509d0455ed77db420c72d63d00b8bdd52dc366db7faa49502c000fc8571864292053ae7a85888481f30"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003335Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4ae2f4745d69f91035851c174f098d452d14b759b59086ca55cb7aedf30dcad6711589e9609f4fcd51737a0449c51bfd8b7273d0aa80279a2b20ba70da2208282582a0e6e9491406240d3ebf1cfd8b715e84ec04194b7b9ffc5f6341435ac3336ddbbdd62ee7e0fd087c31763b1538f55bba9c6dd65fc0669ff46d5698948b14d31d7c0bbe82d2dcc3e4355f568684b75e84c8259e7ceba690570b702a784b61f70ae55e7f925480075f176e17bc0ef7b51cb93558e535e98d51c12d18208c9d7b916153638e4150149db856a87e30a39c809481fa9d13c870e8d79e6e9e7562e299c9f13a011d10a147ef2bc770d7402d915faa38fed85f4d32d3c9c0f24454",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-4bbf21485d0b491b/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003335Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=857c51824b8d9b30c2ff41cd50a5dcadd0a6c83eb42098716a81af25ec057b1d69b4a5d531f6d82b2f49bf93fecabf5a37ff093cfe898061de7ff20ab0047da337214c6c9dd270ab14c6572827edbbda4640cc5e95da2e7205020d9c2e8a1180391753a4dddb6b0f28cb29b0f96a4f996b30398c1546715d4f3657e6d896fe5c0365aa7f88c0fbd0709188776a9aa52f3f62722df1183f730741db6935b51a7bb99288b732fdadfc6be2bc3c6b024b2d8dc3eaeb9e00a0315b6f733e68551bdc3b0c4d135240b27cc03cec121dd362afbc6d48043c2da59c8328e330acbfe89b4248151cb08f111ef4346dc79a4f48780aa9599d80f7d1cf20c8a635a0900248"
            }
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-651c30c7a029428b",
        "agentState": {
            "id": "astate-0bc54b563b86480c",
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784365,
            "nanoseconds": 504000000
        },
        "testState": {
            "status": "finished",
            "screenshots": {},
            "stateHistory": {
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "id": "tst-651c30c7a029428b"
        },
        "bootConfig": {
            "agentConfig": {
                "maxIterations": "5",
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "taskName": "Find and climb down the ladder",
                "model": "gpt-4o",
                "temperature": 1,
                "contextHistorySize": 3
            },
            "emulatorConfig": {
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "mode": "turn-based",
                "id": "tst-651c30c7a029428b",
                "startStateFilename": "ww_game_play_start.sav",
                "endStateMemWatches": {},
                "platform": "gamecube"
            },
            "id": "bootcfg-1bb6713e2d5a47e2",
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "hasLeftOperand": true,
                            "hasRightOperand": true,
                            "name": "<",
                            "id": "emuop-e59df391b2714891"
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "pointerOffsets": [],
                                "name": "LINK_Y",
                                "type": "float"
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003236Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4664790b201e6ddb201fd05726da098d68316315d4ab9b7efbe104a364fe31c290185cf101328190ab869ee1b269e2d895161b38942e6a6547e7824466032f7a9ccd4b5405e728cb0d40252536c67c5831d5179762eaab87ea66a48852f3ba9c9c4079c43c4c264b552aca9837213d4135441d9cb3682be70778952b61a236653b6aeab54912a7fcbd7532a042cc576cc31a5041b94c45ff184ebcef38ade8c3e514f87fc2543a4390e516ccc02774d3244b19e09d3a2f392ec0fee1e80eee90fbca8503bb5b9ee2f848418276acf2f24c59dfcb9ed68408dc859f1a3932de7b805a68c6b5c1ef7d7376b01a0d5642f60b25722a89b2c6f76ed0597f09f91c84",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003236Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4c52d802ac93bb713835f0fad1e3697719075ec187f393f87df9e794f8ea0aa49d3ac679656d47961a7e65ea3255b924a4227e955038649c7e49db9731e993b68d1b9ae4593f7b42554d63948ce0818129f223c0ba302efe47e7b88df06b8b996b3c341a4588863eb1240701e9179c57e6d577324c9526d321a1fe6c56152e5fe7f224f2cea5166fe809e40329de1fe9dbc1d204fbe628419195200bd046c46965ad6bf51d76412a5ab126b7a582f16b9a06630308e48be781608454a5b1f245e274b6037d0f31c4741cf9abbb30d107e27713cef80636b7481eaca2e2bf81a3a28632a451b23dee8babe74347412282680ec215bda95c6d6ede1bb4988c105b"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003228Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8ff27521a150af808ca2c74c36f81c161f64b7a687b3a571b9b1e9b59bca3ad6363de9a51799f6b1ad7acd94b95e3b2783943ef9a94a548c3817839840588c94666959e848024c43ff37d501f59d9479c3f6b5ee6eb24526da3ec8e82c65fa8ec03b593779818161118c1cd02ce9531b89be1bdee3f8033fa977d0e65e078ef20d10491605ff18ec6f4c24820fb033f4f38e9dd0665b84a2b83bbb4602192e7afd09a5c3f891a93fa7cfa909011b7f25eceed6d7e4a733a31b1b3ec3e38ee51fc0055bcd996de1a5f8cb8c706d6c5968e1a1be9ad2859adb717ab83dccd30ba95333ad8fdb4e2f3761b5e5d516ac32413a5fc4b57baec8023c13ec6630982b08",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003228Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=78252ca6b44f8dbd32f8dde99709364a223656999c76fada2ac3379bfc0239fa753657324874a95bd61b48f07da26b0f7bcf9f365a95f59a83a23421147f0d26c10b178531c161eef95225fb512a6a8e889e00a9fe31893b4d2531b08989882fea6226139527a25ce31d84692323e0ae45ac343eaaaaf0c6d45577d5ffb1aed12b3b11b91b09374a4860d9b7c1f6211ee8acc8f6e28dbbaf2cb21a725cee6c9021396bc19be4445914cfdd4b79d72aaa15f37fff1b2dead5424aefaeed4f2bb32a4492c6adea4000836bccc682aefb3a1587f66ddc86201cbe26fa060129e3ccc014e40562aac8d13195cbe22eb16c92f58c856d5a105545970bc63ce028c982"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003219Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ad40cc14e45b74baf418ca56d16d1491dd53815bba5337fe558d05eb805b2c810d21fef8336e2b90264a3404e5b5b6b952728fa9efe719c7673f585141cea445291ad03d2e22af7fec0af6b8c0e57d2b993858f57f17001d87b6c0131d6bb4ed095b6c3dfdb8ec050d29c034bea516f22183be8b0c43a6333f8291dc408f953e0df1fa53a461e91e2f921bb06325df4975502462818d2325e4e9306749b5627f4afef69f13addcebf7f87f7f3cd0cec8c286203aabc2da611d03d11d58e85db54e50f780bcecc1b95ccb0e59c0aad7437cfe3e1bf4ab5d9682a149627d1ce9417c8141b24963ed9864913700fc9c6d43440a47bd979f367b7fa9692b332e28bf",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003219Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=955a7d6b719cf5bd57cb9c88c8293f437d731d59548c3dd15a2d00ee0ff74b96328e6ca475b0e24b71ef884fb742460b3d54331e9f35a2448c83a0fd47802dc8b82368a4e0b3d15b39bd5d0e81ae0ef9495bb59900ecb5437f464c4a0e06dc86c1d6fa0c88ebd006ccb4063204c67d2a4c508d86292b0db69e30f70e39e289166dc8a1d06f9dff413b86daa9e4ca781e4d95259d6f0200539e3c17bdf300f99720cbd2ba68fc2ccd49616829fd52652630ef5d40b7679e115c332d75671e27531c09e202fc3808bed43c51976b80800e6625c6a80c6145baedf6f4d2152b959a39e88a606c3b601648d9bb3f101bb128594d870d2f4de7ecdbe2fa478b1ce1da"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003156Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5797e6f038087c92bd1efb5e48f2615e8bea85816ec6fb42fd7b6b55f7d9782144c3c101189a45d72ae2ff89f7c64bd30f3be87f4904aee3defb7416738278bc4ba5ef6c705b8aca1db632fe6bf9d6d99bcd32d3913c3474d37a9b4dbabe61ea6837bd3efd1593ba2899ec7c460d00bad9c7e60caf63f83360f4cac2bd70f3ce2189bf6a906efcf60521778636376db66fafc4a4a41bd3e8de45cb05ed14157e86c6b5a8f350b109ae487497b6e34d18ec4ba5dd43b8da1edae3d4a48589e45a7e4de89b2f0330ec9b67abd3b5b308467603083c6d7e228c22b9dfb92a13f658b8af7cfd453904eaa06f81761bfd4c0e3467f4d2a6ac61f3bd2b8b80baf51b41",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003156Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9af1a307cd8c020db9732b419e58f22dc42544dc70468cb4afb4ea3a94d0fd41616e902f9582cd63a792b9e6898c2944295276d67efa5ba67f6e65d6805b16c6ba8f4238cc370bf41fd6f7b15491d3856547ba523e9933a52ce2b46fef3a91910b5fd49cbea47f2bfc591e0fc03b3d196409f14509ba4ab263caef8d147353c864b944cfbf4c827b61c70730f4cad0a6dd8de96c6baae5b7ecf1028facfc66ac265f14d05db5a39b3f39275a87a093d1a6fa42428df0066d904ddee658cf853b7ffe9ac02398501fdd4b470fe4584fac3fc86a3af6beaef4b390415a1a68845712d6284624707f2a3f1ce49251f6df1cbb77292f5dc131afe0c295e38b665776"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003244Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0c266bb726ff37825eff2b404d7aa73edee304112cea83de59f6492faa81b91e6e27d22583b736273214f75f674e913ed1e60e2f6202c02344a6cfc7af63a3f9140848e46787f2291e2db01d1f13be0d75604117c4f7ea960afac7d27cb487daf7e03b02b1d6640109b12ba26e916ca7af63525420920b8d052c8545d0901705fc4e5ea3e3779ddbf9ab434d28f8ac4fbf84702391ee7aa23547a2715b8d8f49c63d8906765690101d8e8fa80f829ff024431b4d276c125d57021490af5383cb86d68e3e402ae15b48655187ee6ea769aadc892379761cf5b297b6fd87fe0d2fe6cd45e552981786076239596e0dc3d120d92b6837425bcbea3c9c3324a59805",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-651c30c7a029428b/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003244Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=30f936303f2bedc18ce9941c41b4fbb0780827eb808263eec8c20de7c192600f36a400f8a0c39c1c66a9ac6e37739426c3a8c6ffbaa1f5eab45cac5c0dc67df9dbc9775ef63d1328d26856382cff2feb18c5e73770188f913b6a49ce9d336f147f5071013e12092b509628b1e681d6268ed1b88e5e25173861b5ffa63a0a779ff68e3fd130c4dbbc3868c6db12ee1988e42969c848bc2165c61af4eb98158c9cd6366b54b67916b222722211f0382ac4b5fb662d2835683a590f46c987f8942fe67e503518b9c29eb201842de01b3dc8a82b3a32c7baff8b4c1c6c281f111b3fd2507aa3dd3f30b551ebeb55741d8101b77f3240d9b1202c1591c3970d7c54b7"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784301,
            "nanoseconds": 876000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-73f7d7b9963d4356",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784212,
            "nanoseconds": 607000000
        },
        "agentState": {
            "id": "astate-ab31ffc4363b4bd8",
            "status": "error"
        },
        "bootConfig": {
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "type": "float",
                                "pointerOffsets": [],
                                "rawValue": -1
                            }
                        },
                        "operation": {
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "name": "<"
                        }
                    }
                }
            },
            "agentConfig": {
                "llmProvider": "openai",
                "temperature": 1,
                "maxIterations": "5",
                "model": "gpt-4o",
                "taskName": "Find and climb down the ladder",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "contextHistorySize": 3
            },
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "id": "bootcfg-007666805a704878",
            "experimentId": "exp-d7f3b57db87b4310",
            "emulatorConfig": {
                "endStateMemWatches": {},
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "mode": "turn-based",
                "id": "tst-73f7d7b9963d4356",
                "gameId": "GZLE01"
            }
        },
        "screenshots": {
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003143Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3fcf3ded21d0a29e702a9a180b851109eb503505e64043c8f634e2236545cd2b2d63a7d49e58b7d3eaffa93229d6b254faa168ce203c4b215119de75f009d99ebfcc82c4a7e97d29b3b109564c2de24518f60dcbe4ec1fecbcb1e7bdaae29a22f63514405cb0ec4abe7a333b7d059bfa9ab20d4f66019bc8e5218361c0362107feae50ef0e50d93fa023c3b8bc9d165aa9ac485df1a4f088f3a18cdf07ff5fe68c30b4aee1e36f3cb784119a97eaf2ce2f9b27471d9aeb48d636c791ea2539d9faf032a38e92e401655f08e49556907afa5257a178955231fed095f6230c8803f28326d691e9ed24133ed2d1aab8e785bb4f0f637240ec2691e0357b63a06bc2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003143Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=01cea577c03be0c0bd84c5b3dbcb8d03c178a67337c44cab5e1a22b5166c5787b520e9c76639b8962e3fc3b8df8b92d54ba8ccfc8c03891b3df6c448951ab952c60607d99d0cace594f33ae252a4190e3e209b3c4707aa0eb5f1ded20cb622761f51324e2de643cccb3443a615a48b2c3ba6330230cf56c0de07bbb163b8c191814b1d58c8c287192231bf0ac70e75e4b86be7020fbf2bc6400ea6650a1d6ac777670647e9dab2877fa75595763c84dd3da68606f622428b65645a06a853e4199e76eaf9f478c053d08ed068d25d75542ef6df7eef3351ad59262503b96bb0f0d78cc34286a2902f26aec2e21de3fb94876786066c19e6e7054db8fc0a889174"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003058Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8b07827365ec82e1f6c4b0706631d95df4a1691f28cf83312de8e70ea1b8cb21f5a01a0911b81c1ca5e44d0dd1e3affc028eecbc10897e93e82162cc4d6ec090790f012bd552ec3e104a5d029102cb273a1313196444f20d0e3f4a5507cbc5a611016786098ff661354f346d3c969041b6c38a8f3467d36626617bec274956a44e4d2782b8b1484952dffaed977d5e14dd6208940e07f61e454c820bb62e9399ee9a31c8f2b54422e6398d39e6a24ebb9860693ec16e79fc051da42793b2ed89f4d40c82364363e0d7a24baa084bf4a9e069daa2e4c7614f9e433504e1ff02cac0f3e08e2fbc79b75cff5d9d907855bcc821a963ac7d3dc1685c552727330199",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003059Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8eef6f798558e323004a99fd7a1a5c132fe0d94eed3d36709348dad472296557e2d6613f787089237788717516fc3717230f59e3ea3f3e7e8e3d99e4a04c29a2ff76c3b13d60a15eca813ef7c7e43accc1fce1a32e6da4591c1402233de4bf6e88072d570d3711529aa6fa9aefec24941c738686ffa5b6e2c8fdf54e7a2176c9797609ec42676cedabab8a889295544c3d50a59ffa28de3eb66765e98a201a9b2d058d51e3810527ecd9f75c1cd2f5bd3f6d2c4242b92b5360562b6e814163399d987f15bc1d1e9dd88445426a4dc7c2e230f1a1d2d8edfeb94207ead420ac5cd08398b8baa8b6bfa705944494b721de10a8012bc9a7cf3504e2d150ccd83cab"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=81b096f605e48c5ac614286ac2de552dad425e72fea6315fecb1a90f11d8e43d2c36a4d036d29dc1bf4fd30fcc02d46789f4dbc7155dcb7fe85884d8c0763aee03b61c6b07bf9fa45a624170d0e9324fb324725208d5f40897e5135350ef70a25972b584e3570ddbbeccd5b1f35140cec7ac54a86593d35ac1cc57d06c8b4f2b9bfd71d4fff35ad85fbf66ba5400cc67d5950651b859a29d16181b773cc46e5c4c8fa39debd4288d32d9828d8842be9afdf082ff0f30d0bee5fe369b65c892196d0c9c353bfb5e802b3f5e0795e1079ca705af9205abe03b9d8c9d6417a8f509eb8c014163514c1cf9bd70044c9829dec8aa14996dbba706a779901d9d350354",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0ea820e5388d8f15da062ac3198f75b413821f207b996c2caa4c79aee0d1c9a8604fb37295a796c9311009e79d7e980227a7cc5b76a37636b7f8951d50de5a25d10b4dd52005bcf7186e44f0957b8cd2746f5941805aa9e86662f73b3129d0ece0dae08427d739c3313d332de7139d0ab3d7c1afb01b856db116de75f5ef0eb7abef6a431c5f928624681e0209072b574e0591a249bc535b470e04a6e4e95d5464630026344004b700ed6d091d48dd3d4d817feb44e7b0406f6c20e3fb0607b05196110fd8e7aecca280e7ebe8d228459b453311bb38a5748a23ce65ebde46a17fe447f1dacfbcc8071da0de9345d0b3c0f4d46221f05c4cd8ebae4efb0524d3"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003028Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=492fba3c76c80e3ea2a0ce15252bebb4b7883c4d9d892a12133f21664f700b3957f908544e175f6045bcfa72914b20b9d6a2d2e51db30ae4e69a0d256b00818dbc25d6a8a23ef62e5662dd604c0a52e1600521b8511f78e95752f884b20a71e30d79eb5c6bd91811d659e916fdbfaea70334321233ca1e2309d44baabfeb4781149eceee1832529743497dde652f1b7f236107ddd1ae12a4151dc5adea0c48676f39884dc60cda3a7ad03af55dcbcf448b71305391b878d70217ede4686fe4ecdc8655d189e7d48be0d3066f12518d5d98468290c0e26824006bdf2afabe1a814dea7191406eb09eda8ff3069ac044a35d6df232f76258d72c2e702c00be6eed",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003028Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=339b596f79c811595551fcc329710ec43e0d338b8929367a5c7fd9b637eea61949705e18a0f166b20bb9f2e5ac09e0a9568cf11d29288e1b4dfd1bd5bc6fc0ad10a74f028cd164b053f588ddfcfb5410852566e7c3643d30d9e2321c5c931ad984d4730662206836a409d37f059c833c4265474836c84a1707e2488394ca6f677240008c2a8916e49c8add5b87979ce9d0cdd70c28260c3f60ecae1428308d1fc666b3ce7fa918acabd07fa0dfb3647bc6912b21e2820a2a9e02a1f6b57dd6acbd9118a1bc328b4e941a3fc5f6c5da975157579b1d3f58e1575af546aa25eb2809fd78b8048fcf2fa028dab2b2c2462a94e3dd41050f0a97ff347e2c1fa46988"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003228Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2bddd1211ca5e6fe08fd4c04d8352dc918eb5eda83763c0a715eb5c2b35dbfcb88373cf2ae690d57ca6598ee27c8705a8ea731e367a8ffaf45056a180121a305221716b35b8ba88f458fd1c45d3d72b543e919f05af2c0eb0a5f137079d3062f9b754e8bf2080771a5a571a1ba10e9d6416ab488d904e3293c60f32b219d06d96d5785dca1bcc41e9d9662877944a7e78185407b1e15383610d339bb248b92e7720b24a26130c0e09aa0ea85e01b92559efdadac2fb9d509f1a020a185bb42f66845bdd2bfafdbb12e6884629b8c8cad680e7e2a25761d45a50eae25469e277c55d7fd0d91ffef408a5b42da202eec400897cea82b9ca7b5eb1633ac15ef0ca4",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-73f7d7b9963d4356/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003228Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3dd4931c046148d6dd2cfe17504469d7a7a8eaadd5b323645fc712a00e930cceea4cfa0a3d2d4781b9ce365ebee21fd5d185c2305a124289b0564b68175a8700ed7f1c40c3a3ae2d2a8c096c12312a60d4f43160aa10f3fa182a96a1cfb90aea3ee5c3e523461e51e71fa206264ffd0c3775ba309651081c1d7cff1b7efb2b48521c0e651328b2b7064f12483c1f55130b558601c93d692b8a3fac135327948f34bf98b36e515b454a44a1f68452ac8f2f5387dd1e00eef5317a65677d46db05271bab738d9dffcbc4b385119b02580f8a139107e84a3c51483fd5f9e460447911ee03c7ac1562cba2f12bca2110f5b3f6d33129796d8b5899ceeff0b35ce5cf"
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "testState": {
            "id": "tst-73f7d7b9963d4356",
            "screenshots": {},
            "stateHistory": {
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784391,
            "nanoseconds": 191000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-87b98be5d6f14e87",
        "bootConfig": {
            "agentConfig": {
                "llmProvider": "openai",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "maxIterations": "5",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "model": "gpt-4o",
                "temperature": 1,
                "contextHistorySize": 3,
                "taskName": "Find and climb down the ladder",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube."
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "operation": {
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "name": "<"
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "type": "float",
                                "rawValue": -1,
                                "name": "LINK_Y",
                                "pointerOffsets": []
                            }
                        }
                    }
                }
            },
            "id": "bootcfg-7fb8941ae3a84920",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "emulatorConfig": {
                "endStateMemWatches": {},
                "id": "tst-87b98be5d6f14e87",
                "mode": "turn-based",
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "gameId": "GZLE01"
            }
        },
        "testState": {
            "status": "finished",
            "screenshots": {},
            "id": "tst-87b98be5d6f14e87",
            "stateHistory": {
                "turn_1": {
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
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "agentState": {
            "status": "finished",
            "id": "astate-af311d4111f6444c"
        },
        "screenshots": {
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003121Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=34025c158b87e7c9bd67ef7cfc0724391c193dc2730defdf42f1f1570132238d12782e303b34ae61a3963f13fb021f89c351ae5c8056a1ec0a738487d84cad8ff36cc1935fc42bb73a9ad09e1028051a2dd9195e841f9b4abb3ea2218dfc881be4a88477ef83da4aa0f5588c6c26948cc1d58da20502146903ab19d513fad6f7719accca126b6907736144731c64d96e3c9197d154e0b5fd542c3894a453c3c1adf8e025252666b760eca35aa04b0bd6f5308f7a16d6d54a514e2c22114a9a7844d29fdc2ce87c68168225526f760b72fcec4ed4613674011e38006ee82b58dba97e737f7a705594c0c2d19016d2e2b9eddfffc9f81b40bb03015aba909a8428",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003121Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=50e92cb8382368a0f28388bcea707eb969303e8f4dd6d1f991de5fa8a4fddbfb4b6025de24448198b333bc47cf79d58133b6b48c7a5c58fbbd7b3fa4e4bb844a5e074e3de1684b58d8de202c19d2277d36cf37ebc20ec4607885a393e63cca858f9a69c8c235851c3cf06a3b5b93da379ad0957053e13f04867d1ea9b314e799702fed3ddb93227f1f4682dc68934ddbecb39e5a68ad2bbc1f0e52fe02e92cdaca908127480c5fa65acea438ce59b246eb716d9295b4510b16724ef0feb9890fcc4f73d32ef5733f4d191228a2dc34e4d413c6fa9bc26527a8f8165f8a222fda18935f0c69b55cbb79a4bd99b728adecabf424565de4e942bc33f96f9568451c"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003023Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7c6bc99c3304d9884d32c52622882cc26cdcaab7477d21c7e8639fdf65ae5d8653283e9794619c827a15ec3fe33d34241f50cb723c84557b31cdef4ff6c974a9748ba83e6214d62cb9dfa6fda6c34b43cd0e446e9521468317b95c2f3a6993cf45a17bdd2e4759a7b2f6db6b7307a7ec4cf9b81adba05b39cc568dbcf4ff7fd5803a43a927c13abd14b5f944f6c930552f008817349fa937a091796f5104284c162044b4d5799f5bb41f7cbf520a80088a7205caef3aa0040dc475ffbd2da841243913b2cf9722ceb91269a8a64c5cf3fda7a253bba7a4d2c8b9668331ecced8120172a320fb5d70e3bbd2866a2fe23352cbe53d93162873afc10fa6974f72a9",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003023Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=96717404f0f8daaced9157b807a8c6d280a8967b58cb782965a1cc5d79f3b9eb8b328fc4b7b23d243d42bf4278afaa4be8e1075de468b156b292ebacf91606e9d1e0b5184cca7361d2bea6118a7c872d8e32976c5d5a8698bfa8a12224a32fe09024916a03a64aa3a9c0f6ec3abbb77c515ffc21780d77ba1088b8c2c6de47fbaf2432859c071a90087998e5f37f05d192d666e7fe47aeb15e8184ae70ea5c00edf91546f666e518f83cf8e065035c1343f3acdbf89607c5b66532d1f7b9fdb4efeaa5ff8be7667b955206f28ba44814bbe45d7aae44fb08a955c25bc19bd01fb933a3239a9c73b256d01dbfcbd59fd4be6ea13b6a1601e49fae94b2657d87a1"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003057Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1e80c61d1ca3e4e9c8dc9f0c14be6d835cbe22ef973de171e83efca19382583fdb859b785e0476fc5f56e0a80cd98bd22411e788ba8adaa70a642dee5cebe92c54e3bd686e538c82c50ab0b7fe6cd7ace37712e486187c32c38bb410406b41a79956580e2eb0cc9d488682f5974dbfa39f1ac75be2db73b61a41df100044d3fe1d33a33f7dcceb138e3118d5b92cca9feee2b7922e23ed8f33d053fa661a2f76181baaa5cd291c74863044b8a277f15109bfb330f381131161a898da12aecff37d8a0bc958eb777a0109396419395cc61b7941364b2634c592035114c5567cda09aca51015bd59112ceb95ac03aa13b056970cb1b796ca139253bbf3fbe8a4a6",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003056Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7c9d2746904aae98445f827823b12c630717ed99b374581134333bf0e9472a8cc8f065817fa780f5cd28e71aafa3de69a46c0960b2d4d32c28b1378e462f2c0695b880e0d8f1b31b40c566b59fd35b700c0725382d81ab6d0e1b5d7304a252087dd06c0eb3f1c1a85ec6dfc587ea8578ed02536eb77a4a4fcebbca90a330628d861db75ebe6bf6d543124e2d84909168074610e00e46a05cfa72b6f58ff40abfcfae15cd34f027a7381d9444c9613022488d8b45fcc6c449998c3d496b0a4b97e414509c3c71790251f63924df38eb1c34913f7b3eba820a522ddeb25bb34e8261ca59bcb737d589718b00e8a7bdc033fdd3844dc2d50d296479390bfbdd3202"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003133Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4d4e4066a5237bcae927a29284dc151ea91f3a0ce17a0d621016abf237cce0fed99ceadb2c57638ba7a2590917b9e47cdf9b32c7d15843546f04b33b1147d7db0fef878aab1e1a262ae913717b03e30ba302807abc656d4317fe6cc4b60f1958414961dfb3f884ccab29a31b574e3bf310289685170166c421d40b64b079d40903dedd18fdf38546dcb26e53a32ff17e691ddebe9331362ec2f9805a8c80569dd786d184b2ee5c2415911294a8407580884c972472ee74d4f3d0584826388a2c47fe9c22d1b4a64bc68b66fe057482d97c056e340a983d69aecf378c1bd9cfc3fd63d0216aad89c5853bb2d4ed1255ed2d88bed0e309edfa328cbd4c5a8deef0",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003133Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4cb5c8862e14a511d586538780ed7a4c45430698125dc4592c56df4fbbd8826da6820b6a4dce1fe5ef2b2791d8dd31abe610a76d0b74210181924c486a564be1e7f62f3ad755c5a5f823da525054f4a43cfa2f024bde42fe7dcefc01362b298d2ec14d72d87d725d5375e86181856d440cad0d1597ed85feb799d8c8db5f7cea63b79dd70370f21c8fc9b1611f61d6fee549e07e938b82a642d42f13fa9a40553c34d6bf719335b3e27207a2ebd9bc904e3ec20db134219909b343ac0b001e570dfffdc2216dd9295af3e42179a2bc0a64897b9c3fdfd562d9c11d31fdea27d2111bca4e65757c176d99d530bb8f993e5c7e6a6e1e2ab6234d0021d2f894ca6c"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8da58f4255c4cd9c1214400eb4036cf243e489e800225774577185334c757d409dd86b565ad52d313f04f3e7cec9a9e897482ef0c0684ebd03c7106ec3d673825887b461398d9494fb25800cad054147cf2f24fb658c219a684f429671901893c3c32e528a97f9ad7efd065f9133c7ff25193cd53c1f5cbadcb22e8f0e890129422b639f119b815537a1f083f4c327e47e3acf14101dabbef6b05de87dc56561048e55c2002689c18bc4fda06d4f674a051867ab6656c365e96499ef6c1eff6d21a55b6bbcf207aec5548f823c5a60b7e85ec7283774f2f1a936098e8467c71b75df13e460f76eb99ff5a2984c82971a920b1b58ef1534610eb43e35d1f7eed9",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-87b98be5d6f14e87/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a32c745d30b339f9800a9591160b620b0b5b0b7c22b56f8a26722e7e7eead2bbc3c47509bcc95bc4b897f8ceb5f4af5efc38f4aa97c3a14cadd9c8128233d2ae92c095727ff43de6a43bfb0aa371db26faa6c62f89e9b50e7deca12360e571c0e8b5140323e7da519474510dc25fbdbfdc41a2f8fae6ceec42a06a1a4a817f50d421794b957b254f76f00fa1afedbd9bbbdde99db7001449354633aef56c1e9209c623d8f8cbb797b569752d123da78c35f7f7eec6219761abdd2fb60438684ab516ad30fce66f089e7aa25eedd097d18aeb4c7a95122f73adb9c680a2d4ec37de1dbc7c63e80ff28ee6eda8e67df3d8414e3a73696a6fb22440315648b15759"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784201,
            "nanoseconds": 350000000
        },
        "emulatorState": {
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784295,
            "nanoseconds": 185000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-9174f9cefab04526",
        "agentState": {
            "id": "astate-3e9d67699dc24163",
            "status": "finished"
        },
        "emulatorState": {
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784305,
            "nanoseconds": 86000000
        },
        "screenshots": {
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003029Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=899637b0ac490ed4e2f847606927e6d62508ea9e10bd9e6ab38352cae812bc28e4c9ad4823cfa7ac248f13126b0b008b984919ff4ef9670156e0015441a7880c1bb327d080651c0960d29c0fea68322b3ebecd9e5991ccc5bc7c81b6509128640769009100a037d40a6e79d361609b0b28e69e7d59781bf87c0cc77d4958cff2b87768e75b978673319ca0b6ceac9cf75e01628794cbac3692aa37b375fb6dd79f61a492c512f3cab8904046179a08d6c3dd09a5cdcb8ae80d6c28ed21a165cd5fe72a24b05af07dcfb6e8cd43329075a8d30386bb3f9f689097dcdb525e479832b10a924a5ec8840ac4e6217755710102963b635173a4e3033f3636f5d6ead6",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003029Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8fdfa89c8342fd5df96ba78680085edfa7cf71edf6feb400183942a5fd4f61faf5d44e1ca64badfd8d397cc891ad62f9a9dd6134a534dcd7fd4a175f2ec069b63bf12e231fba6bd6eb85c51d170bfbe2fb86a4aadbbf8915fd4a4ff2a458c104691d55a757c9b6c74d25d88892cf7bff0a2621040f7d7adb76be07748dd2a3339c5d44879d4b83a221ee57b363df956423d9ca2b1efd6fc93d3ee975a2d3101ef8b09c26f9a4c67cddbbe418bf4702d7a61626be07a4a62b99f7f177f301dabab6210820d7be7a562d9676c4a419e8e4beadfae0a5d59753ebcc92602f8cdf1245143c81c41c4c2b50d052d2df1d93bf238920b043db35ada280ff9c014d1a8c"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=71f940e61eb7f637f6a071b1576c1e426aaeee61cd66a20b7b5c26495bbc30d0ec6885a3991a9fcfbe9f728af24a825820add32d3eb5ffc8fe2dcc6cfcabe3effeef59fe26630e0eac553063b7f1d8e4e10fc70fa73cb031cf99936acc3a5e6e2b12af9687e003818665b07f1ffb840698b343071f6c6ff2f293e1c4ab82ac9a1e1dae9f2636fb37f78a6859ac689359afa2c67c4fa32350ccea25fe127a493b9846c72bea9d091b8389e309e79ec7bcca8e43ba22b0ed2cf5c93b3441b735e5d882ff251fda39e41666e42832dbcbde90a273346f451c32e636df7062842660be3e3b6165bdb96e7ddf75bb8f7178c2992ece4e4535ad6d32505a6b7eb9aa7d",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=904b430869df889b29e3c66c428280e89ddcad1332b4a209122d7ce5735c9c2dc012dbcd2d87c8e6d45707fb69c88a0984795979ca3a4cec17e369ce6ddfb3586d202f2c2d7bb3bb746217e91696fa29b0dfa89052f278d5a436f25f27172a0f282a3a9ead3608e4d936223d408b02e7545494961412a3e7757247af30ce8b130865cf010cdc7856d050907717a19f1b97a23faa7f9532c7421f11d922149d6c16b99ffd832ce2d5efad304f94ea63453735f0e073618bad10b439a1514858e773f209b834252a890b3620e2296d1b62e942a84634ca46ad0487e2b15a1a060644284c27510547c3a000d835115fd0426ff5a4cd65f9735388dce3bb47cc56d5"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003144Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=86fc5377318c10533c371880730979d84b4c1df135729b2967c10407424dd4cd8499026d336cd4c96468a5166e9880553c545fd14020612620315807fbc9da0a321615c13798db40bbe3b9cd92207b864175f9172767cb6ca59e657b9bcedfeca795479e492850dbadf4c3a2429fbe625dafb9c298abf9b4757466338b44b936fec65e06c3d07fd79bea79c3c75d9bc42cb777356d6a3ee98e9b611b0e4f036dec3912cbf025a6caaf11c28b94ab47376f3093b64dcc3026170a4b0dae27eb2d563ff736124c4be5879d25c272b49c6bc9ea6debaa834bafb2095223a6dd4e602b6c11aea9a5a5be2b6193d518be03d83d6de06fc06f82a5d3fb3718f45d487c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003144Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=231969a388ff2c717c8f2e07ed836dfcee4d4350dce020ac5f8cdacfd2b882dc4901a3d3ba98bdbd914568c858dbd3a92604579bbffb063d3207e42088603ac3a736b2436042e39fd47deec2a162c4a8f699a52c8f2bece3f229c7db2f8c5f89e586ddd2051442c85a321712bc8b4858d21bef3136be4d1defb7b651b6bbccb51060259feff9bb65135249d16df7bf60faa797d1ace99d43c9dcd201ef3a997886773dce360e75198c31245a8b09dc1cc42319eec77d68971b7dd3b468df9bc39bad19a432c2381faa57c5aa10f776619ea9e080fece6cb6f82a26d15ba6d26100187f28e06be1525b583ec860ef38a0cc5de56c440893078081e407bc485cdd"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003124Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=66acfb4d2852dc25a4e70183881e01b72aa00747efd62ed433869f83ababc3ac7131c076199eac95c118569b331f1fe8fa1872b6637aa627584ec2e8d3ff5894542b16c78a558e6c996d00bbeadba59c5970ceec7d320af456a300c12c05510e5a896d63ff58ef16fbbe49bd8dcdc16c64e46d4b822d03048920c420131a385bfe92cfb02b6e1234363eeeec875b3361b8256b567af1e7c95e08bb533eccfe170ef09181324ebee12e79db884f2758b63f6e7caec3cc33b7090da5083648e5d9a958d67b750238f0b7046145224cd6013f835ffa937c409153de279f6d97910a75952cab8a84b4a64da0606043b98396ddcc83e3a6c7187683e43bb011485e53",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003123Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6bd2932fa74467b96a76fb7931624ecc14efd0e975509c273d3a5ed5cc0c88138a68e1de1c173a5fe9ca341dc92bf4bf6544c5a5cf56701e0b319fcafae083ec98d860f971362cd1ce203b774ed24ef486a6c42cbf0c8b16d96e1434d60d4a70976387042c2f84eb028721ba264f4f08d70aba47ae36513f790ba5dfece13509ab24359c756c00cad869dee12650caf29c2897b49e95c99329fe9d8034de1d47b3d0e3103469a990ad8de86fe764479d92e7ee275a096ba0975a3aa02b1bdbf729978f46aa1d8817d89e4b33ce50b9aa914df9bf3f9c0f71684e7f0a321492a2dfe919e4cd07884700988eea876e8359c949b64a8ffe9769ce4993b2559321d3"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5bdb89dab956a005162caad1e78f7bc4ee5b5a0d2cad3046563a565b74dd332b0b9d67ad0b2cf755dcb1d523f61fad87671a9ba0dafeffe5bd2427efbe459574801c72bd7e9c378208fb2bd5000e0d62660f07e9447e03aab877256e10f09026994ac1fd7add45903c5ed35379a53f371bc3335eb9d3545a7699beb6e332c2abdae080f0eda652624481d3f5e5de3ccd8fa64f5fd984ec9c9ab18dda10af0456e08d64c4e0accd444ce29fdb4a6c2fef63cd6c9613ea8787f8a62922670190858b4d40756c1e90bdb3376d80542c919858b8c958c9e292b6e1a9344672f24ea1af6eb969acbce8b0d1054ae5c339015f3c686b87f370cd25af29ed07590a884b",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9174f9cefab04526/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003055Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6e6537fbf1234ee696266b9f1bf6bfacde68efc9e1380866a4e2a02e0fd4fc1d998882c87913aaed9c7e37ac8c3f84fb2a53108dd344dc777a1e75db5c1a5bacf22613677243973e0627f5e64b95bbd166ba3250b775b9ce8db2cb0bc4747b4db1868b478a116bd63f3c4dc4bf0a51a06e0e937aef9776cfcdcb1361bddae9f19787f2ede6916b002fe4a86fcd632e24d6cdd64ad2f5a92b9d24bcdb0bc65973bea5fce50fb702eded80f69f43212fc0ec8d042c09bc546d5a1bc80c9770fb0ac35cf4e6d8d403b94d1d9077d32e94f41edde6c5b15af2214ae0fcfa980bc81ea29ab535489e75da592058c8ee246630befa6d7ea90337e1cdd8a39cd6857ef8"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784211,
            "nanoseconds": 846000000
        },
        "testState": {
            "screenshots": {},
            "status": "finished",
            "stateHistory": {
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "id": "tst-9174f9cefab04526"
        },
        "bootConfig": {
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "id": "bootcfg-a0f608366217476d",
            "emulatorConfig": {
                "startStateFilename": "ww_game_play_start.sav",
                "endStateMemWatches": {},
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-9174f9cefab04526",
                "platform": "gamecube",
                "gameId": "GZLE01",
                "mode": "turn-based"
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "pointerOffsets": [],
                                "type": "float",
                                "rawValue": -1
                            }
                        },
                        "operation": {
                            "name": "<",
                            "id": "emuop-e59df391b2714891",
                            "hasLeftOperand": true,
                            "hasRightOperand": true
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "agentConfig": {
                "llmProvider": "openai",
                "model": "gpt-4o",
                "maxIterations": "5",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "taskName": "Find and climb down the ladder",
                "contextHistorySize": 3,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "temperature": 1
            }
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-a369d8cc601e4c24",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784212,
            "nanoseconds": 214000000
        },
        "bootConfig": {
            "id": "bootcfg-e69ecbb297f7421f",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    },
                    "logic": {
                        "operation": {
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "name": "<"
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "name": "LINK_Y",
                                "type": "float",
                                "rawValue": -1
                            }
                        }
                    }
                }
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "emulatorConfig": {
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "id": "tst-a369d8cc601e4c24",
                "gameId": "GZLE01",
                "startStateFilename": "ww_game_play_start.sav",
                "mode": "turn-based",
                "platform": "gamecube",
                "endStateMemWatches": {}
            },
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "agentConfig": {
                "llmProvider": "openai",
                "temperature": 1,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "contextHistorySize": 3,
                "model": "gpt-4o",
                "maxIterations": "5",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "taskName": "Find and climb down the ladder"
            }
        },
        "testState": {
            "stateHistory": {
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "status": "finished",
            "id": "tst-a369d8cc601e4c24",
            "screenshots": {}
        },
        "emulatorState": {
            "status": "finished"
        },
        "agentState": {
            "status": "finished",
            "id": "astate-65b44a9456a84163"
        },
        "screenshots": {
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003046Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4a3c3216034b94fa993ec949657b37ebda4fbc69d47e9392e52ea0e5a934c665b9f650dac09fc888bde58770c410b57713470d00a7d30a4e54fd25a215af332891b11d008efd9368a572a30869f2bea431bf59a419a236e5e1d140689bf2d70940fb11a5d961cb78f74a4475155123d0597873fe278afa90648883fe15c62bd8807479ed11c779c36921c0993de0b71fd95990f916ee7b3fbb1522fc2661ab144bf428b358ee2f728b186dd94cc487c645350589db7bf032045ce7079c9e18c02a7bbb89a4cba1bf53f79f60eebc3c115e8f3079bab57d9820ce467dac01ae6818d9037a5d552d6e05cd4850887765b695427dd2c0714d1a54e7dfa3f4599765",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003046Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=53e3945d01514c4bcf2ad7e37566022ef7fadafff5b047c2bd4bf513af12f6b3d9bf7c45b898119a78cea1a1af34845e8b5c36fc100cd0c93df1134d140eb546c0138d73e4f5161de7b20310ca51c21402fd1e06f49450694e8a2b690089cde1d71777d00cc33a65ed7564f74059d6b194f337a950fa79faaab5a3ff4e5bd39751419dd787edb4c8fd413a9fd4713293c30aa7d1ccadc036e3641944f8cce77338b9f8f89d73f0dee2645b5f24ef33d92a5ccb5736e928d64be6aae86e7cc5609741a9be9e941b0ce53d5a9eaf208e20964810848fca5213ef71d1f732dceb563a58ec9f0dabb635263d9079650d182f6adcfe49991569629d284632e7f16e3e"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003059Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3c1806c397df539e14aab555998a73e1e722f97fde6f4b57add39f646a9e68eecb5aa2ca660b32161132b5caf9d97cebe06a43140372a1a4b98e66ff39fc096aff26f43bbbee3ae9b8ba88b96ae1003d8facaf9292880ab14ce33f6f04e9036a80d045bc6b7096038436e766a9414e90910d0a9dac568f2e0810cc209316f2c9d9c57e23163789baf25e8d3c94da9debff3cbaf03157e0166f313c722fffb4559c3303598d166a1dc3d57aa91644f32ce8bb4d4652aa6cbd5dbf5c6ecd524752f9504d44f48de0a46a7ef68928064df4d0506525fa36630270f57e9b8686850a024c188394738c34f1af76c977136fdf51d578c4befd1a89e40d2f116c1e2bf1",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003059Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a6b954009bef0f28eb36349939163149d315dfba23d38533870111328d742cd435e6445ecf278fd176c02c133a0b0dbe2f676454fdc6e857c2ec35a4af2af4b21f69621d024babc552fb1617eeb3291310cb2b486662bd290dd6ea031dec3da7e4f8112d14046b24235f28f560df0a9d548339b7e15e3ca2ebd183d2298b3ba0ee125aea1c7e71ff82e306034865be52d8a12798c5e49fa7701c1d7419c544c6675f741b1163f586421cceded36bb0438cf47b95c3c2ed1e894d355ed6ddc7021c6eb106008c5430b986704103cce96e9ac5d9fef7c2c648e6d6c45a0b0942f33ae0ac4593a1968ab4de29e8c342d02d8104581091cf83725a74946068e0e5ea"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2fe660e7157c84b1af2244a4abbc45b115389b6448edc2b12aa06d0fcef3f195a1f4c6f024a9e0caa80aa0f859dbd0cd9e31e1f59e6ea1a457073f9c7f09c5d3192d0773171ee21acf5721bda4c4b91cecaf3db77c6fd8889d3d114a6b90d87063a80384c32c8ef4f15541aa21b8057fb02ff9df333f884d5c03c8edcefe105bd4098b7f8f9e55b527cc8246293e534fc9a02f69c18c9f408ee19d885fde170b95d797dc8d7d53f4c172bb73b43b9e264fdad32cf429077eebae187f6fa2ec1132c2f0c2ad5003be56ec71bf547202cf7d670766df0cdccbb90859b6b0cd76bdf4240988bd0cf849c59a6b65504c25e1a521db614938225da9ceb99fcfcef0bc",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003108Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=11d610a6edfb3d1de3b32957f41f05193ed008f9e13024337f54e634832bb713b87fe992bc4ccd2dbed52980be5f8e2496ef6978da5a6722b29e1ed9be23bbf8a48cd27a3f82784a6e25e2e05dbe0afb835b7376a62ba685a5fe67d89296ff17b3bd4f9755b39cb8d5a3f506b0d4f776b9c2a384b4a86a17c41c4dadb44bdb6d5a24450870e4e338ffa9153b3e0a7fd452398f9cb8ff7fa61061fa24f1be32ec2d4feb61c9506a5a0f7bc13d43c807bc8d98707205eb44ba5378609b52d9551d4d4e74510de38b474d5149bb8d258aaa5b3149964db585a3f06a4d7112414e44a70f86ac1eb0f3842782c449663d30e81080f9242b944a874274b97380d9e363"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003027Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5784790197398e1c58195fa14302910b58aa68d6792f610076aec35b59c0f64a900df66c7521451b99a19aa9ae621db04d8aad12bb55b08f5b8bb86cd29da04b29f28228616503757692eaa2543d95a43eb5291f0283a5b7029f5f7d0756e02cfb4d98402bcb0776a221ea992aa380e0ff935a6279234d17baa5e2b7d99266b6567ef26c8210250492832325d453b000ab2d217fb62eb12215f6d7b39c329c1333f44a044494426db93301409431dc5321f269b3e413fdb1fa8ce3429eb49db29bce6c47bc55dae723eda7076c7284586a279e2855e7916cd470f757b8803b97c22688506c0c4b201e698839d868ce3387761f48d370f8a5ddaa79b3cb6d3778",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003027Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4a2d821b222fe1973f6c1fec967274811169edd63d7cf55c8585605e818119a650b314e6ec5210a8a23ada6ce44b5ed936a92e2bbd34f810a4821566df81c609d72dadda0d80f5dfe9c4d32213ee1192e619fc2d0f00031c78c6b0dceec6a1dd59f7600fbeb5c9bbba4269dba455217ea0ec5930c2dac23e3de0ae42e4a7505cf17868a8c0784030e000b5e903f3de338dda99be08c2b4d91b18c8f7751ecf12c19fd1262264af3e7b376e1bc1fbc0fa1821b89692e36a8079d206a259d490a8b0ebff767b20a4c342a1960935f48da9d9b07afc3ce4e2d710d0bbb8646e3bbc75c651fa1443cb670f4badc3ea1bf3f69ac9fe5861daae64daccc074f481af07"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003118Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=915d5b9d2ff6e3b7ba86a7ff23bff5d906e56ef1cc43c5da77b8d6c5d480505679fae3c0215d646c503ef0e3437f1a3116219112bbe0cd4ac22446edd10337707d41282668122f1996f23008dbf8836ee3a5220e0bc185a898d683445794eebe1da72dd5eb15a83a2da323e2fafe22ea56351e6d3044fb220146aa9875c227c8e866bbb9c345f0c67c0b4b394de3d03e409ae88d2f1b5891674fa5d3be352229f58d336a487036af1fe7c867a495ce3569a92569cd6d2ea4f5eb5a30084f1660585e36e2665ef9940f303a04b78c505805c8c78530d1c2b586209cc66ac131af0b3f67d23b23ce84622b3270f97043163d8169eba94b209424a0129d856d7583",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-a369d8cc601e4c24/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003118Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=167671b4b66c15b81bf1a7e81cd17a9618222c6f2a2eadcabb6aa25cdff49373f6abdd497d2a38efa2b2923f150033d3a5b142a723dfdda8e6a6a998237214fb82dcbe00ed767e74a93fc5dd83d4cab80a7889bba1c8f0fb16b4666d13508d44794bc4e3cd5d931ffad842ee67fe5358f5b13b94ffcdb73643f04ca29b698d7d84c1e87035b3a7685151bad2cea21dbf96797b48e6a4c8dc38f03128e7a4191be0fe389c2550db051f25a531dfc45d0398c49035f6b73e65af0677a1340c0af9f28b4fd7c1e8b1f48ec19e6416ccd3d5940cb779119f8412b8a90a6d3bdeca5605bbee8307c6f75b19d905a824cb3a9762a683225b0088fe6d23f4817eed1606"
            }
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784278,
            "nanoseconds": 914000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-cd776c278e1d466e",
        "testState": {
            "id": "tst-cd776c278e1d466e",
            "status": "finished",
            "screenshots": {},
            "stateHistory": {
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
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
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "agentState": {
            "id": "astate-b622b0c406cd4430",
            "status": "finished"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784295,
            "nanoseconds": 122000000
        },
        "screenshots": {
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003118Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5d39529b9fac794baceda7f377ab4b54a44ec85144a3dac2a527a32790c65ea31a7b4b53a61cf87a540e4fe31ce48f0bb30ebfadfa42d4fd9e7e8f25a0950186b4f9a9657a9b0ba2191d78c46a2de87db1a79ed989e6205048728d62cf735565b1485c3645b8594f170ecb8bba19cfd430f9347b18278992d0a19b6c46bf5b1a2ec403272297d970aca72b9c47b5dacf5475dbb6c4f6965487fb1672f9f8299bb175219b9b9d9f43beefb0749d628f3427d22adad3b630b9b8b3c2364468fa731c62acd887345611ba37b13f95931b9c7f9e82156e8852e2e0de0b14be3d03acee9fd90a5614c8d6d1d7f7545e00ddcd781910d35fe7793693863719d8eafb1a",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003118Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=081d56137978ed60b87778365be552ce9553a89639ffed92e6719eb21bac9f4f0f52b9d29967a62c55e7cc58b822db3e0f3dd89a532912e693702cd2503a8de68518bf8f9256a37fd437b283535e0f2681bf2fa65696a279997acdcda77c6a0762bd166c7bf4d6512d3ebf9bcedfe6a7bc80bfe15d90c15c9b140050dcd860ccb7b30da78b6216272e84c2a01db1e7ed1b0681ea52e28fd96922b13c8ead4c74e0fff8c79a9d1021f1593490792014a679a48d6e7b674fd7ffe4364ab618fe92161b40e3b74302091eea1ecfc713af9b58081865288ac66436dcb504cb4cf19ceb22698519484203e73f3d829b2f47403ed74c25b82ac6acddcb5d5656a1141d"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003016Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3517b3499c493f134bab4ef9746779ed7460f6d29a142e5df1211c9c5f8f15768db81b8fb1bea98202b759d93eb67bd5a932c1d4f2f081f1b96e8701853e8a92d57f2634a2508c4c7b125a59b7f8660775962c4efb1900cf811aade84802dc5d00b7894be2898d2bbec349a696d9492a9658d3008ef83171e07e802adc9f382aca9afcd66d9bf6917d825ba6abc5413becf24226a2b128e28b04b1e5a25f49da72af7a8fbcaeee21d0c0343a7e78b1560f0c6c95747e3377d87477c31e951e00c13976db1b2d4e096c75092f9b3e6fd290de7f9cc8367b0a24fdfa9962686e49723b33c5cb1c386f78bac5b6053deb263e1d6fa1802abde62163e41e961e590d",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003016Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=549354fb1b4877914bc2c025b7d79493e83b3cea1778c11624fc760e12cd3e1d4e6e805d58e453933e756b53470638e035dbd93a768a294e41f13b9ae24e1599f2c2e600f328233e0bdceb1e69f5cbdc75eef16483c49e78c981f62fdb6c463bdeb8d74eafca2031a36367de521a69468efe7a975e56e7d6c293b317fee267e88e33cb4899b07363761bd552800ce85daebeadf496ab3596bc12a3922dd5eac982bae4a1201d5efb587606a8abc8b4a2b1cb56fcedaaf381d7995279e8448ab530ea53cbe87dda0723dba4ff0c846a9cc089906f88f7c36bc81d3605dd63c0f0ce61881f60d1c77cf2452ff176f6fc6c0fab6a0482c8c73fcfc0f0ad88bc81e2"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003104Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3aa247792cbc0ceda66ddb6d046e8686fa3c7074dfc73a2b09b9bafeb2cda9df700af2350608e55c313b92b0369653052abe25bfebb018e0a46bdf3976fe5d067b8fa7cc1d7527f782056091aee7e785ee371d16343c649215e278458f97f5f426f053a61614ac066a06760075df5d40c00a220f42b209f0de4b5e461f7176911741b0e4547550476e817eb1e4fd126202407f138e0ea5b1d6c1af8ad6d69762a23372d5aabdf7203fbbf9cab5f23fba35f1f7710aab7c09202db8583d1d14b8d484d6554e06690b80afcc4f1bb811dcee0d9b42b1714259bc8bc06518219e333704bc89f3ec94bd7ff6c2d0ef0dce98bb275e3e20a14abb562fcda308d2c5e4",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003104Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a757fd5305f6cbf739e280c121ebd7fe55f5b90e8f42520cd6ddd0ba42f91fe440dd7b1806aac1ebc2125f3766d9f09a2d38511897a23fb3d68bb11beca1b207d95eab1f802c8d1a7fb3f685b6a6657a7854aed2459d3b6a1575506ca902884bde9b78bd8e18bc71950fabfe16f2b393c5511303a219bde5fc04ba5864620d16266f8eaadd5f5870382071253aaafeb69a1c0c16f429a4d86dd2c6fd06df6ec5061f3d6525b66cf27394384e731c41ac819929e1f4e4561d4cbd2b54e0a0fb46e43150275c9b270450fec1fe32a809f121002d132c7205b2d41c5a6605e8f8a2d173f3b0abe857c10a418791ff4d68f84d73a2ac6eba2212a35a4c8c19135df3"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003043Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=223fd1ad894da03919751a04c846fd2a2f3dec66eb7f4832877996c0730629cffc5cfa0b72f8c1ee859d09e5b5b761e5a9824566ef4c2d2bd02e110af4dfa51aa5338a19504b958525f809d13b992f45aecf66c84274f1ed2b7c5d3793f753c1a270ef7e5300657f5815330aa20abf937e3d801deab5e49cdc5e856293a247a66ae3ad9cad5e38aa0da545e5d5ab1646ae3ef43822f66586e70393eef1dcc98e20bffb45b2b076fca9d95bd53f53f25c9e96c40a6a5245c903f9a322671fecb51fb292c8fc33b90a1f839c70986d51d01fccc9b6531aa732a67f0ed2fb8dda035a3a9e17d976291c3ed28639d3508a430bd3afb9223066fe1a1dc213aedfaeae",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003043Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3a010077c3a6077b9384fc687835c38d69e7e0c9d5d7396a7afbb0dd11ee1d807824e6fb3f5d6c1f003d44192648ab1b1fbc5d8641f6ebc90674cbab33645f424c3dfb29e4f3e074e05ad41afd507e6c1f6be97d2aac5400bdb127fa3df06b9061f3abdb05d985d00c9a457c007a8355dc420aeab60220cba164a2a5b7dd9b975739e273ed9ac11c6c7885b45c5c3117a953f256a68e97f69bb50428a69a2842253bfca53122c58f6b660d322c885e70196a4648d1c9dcc8b1c23f3cbefabf596907bdf7005cff1be0db7f103f6d82acc901d8bab584a4dbf14a336553015ad3e2d301a68f63ffaf992dae51be03f014f77b6afd7ef1401faed51d3e21c52020"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003133Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0967d51fbf9682e624919fb366e01e92346c2fe4317ae201b3eee8c68a1b632314b448161f45e61317a2521c4341543f2a36d9b092af99d07e0548995d3408dd7698432bad8753157631467ec63db85c0ac222e647da16ceb39adfba35feed254f0a70aa7a0a3a488f7082b6c44928334558cd880e83a825d61eeb53d5498c17d9f024c021cdaeadcd223355dd654c834620571971b5f41e6cc95ddcb2609b0ed824958edd838c681af26400b325890df2e94f7016c1d440583a324f51663d8cd8c1e2fc4d102cfcbb5175eae0040ee2687e79711133d06fdb0564fbc1671f266d08f157b7fb3eff06efc466509804313d3fe97a9138bab6753c9676ad1d7362",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-cd776c278e1d466e/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003133Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=31faed0781af417cb7f5b76de87e785e88181874a0df5e49adde3486084cb89473aa4f2e225abb600357b39e999e9095b18795619824b3ac28d8dff7cf058518fdf20e323224fc9938cbc5a117433e18e69132b868fd49276df3a94cc60d209168794d04a32437802abd5642085664dc15a51a6c5f31b85503269ea212a7996713f86e88ad08f5361ecedd7da1eceec1ebcb8962c6ac969c109a9cc5289592d5a2a0a2ef8a55d5e8471c826fd4c52f7c99e602b5e3f45d3248d65fe33fc27d78e5bbc82a8d2628a34662c591d92d95151a56854b991a9c465eceb9153ea4b930e71cc8d639ce2a9198842e5c3034c44ecab9d41ddbb4b33010af1665eab8d39d"
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "bootConfig": {
            "agentConfig": {
                "contextHistorySize": 3,
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "temperature": 1,
                "llmProvider": "openai",
                "taskName": "Find and climb down the ladder",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "5"
            },
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "pointerOffsets": [],
                                "rawValue": -1,
                                "type": "float"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "name": "<",
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "hasLeftOperand": true
                        }
                    }
                }
            },
            "id": "bootcfg-682ea07eb70d4884",
            "emulatorConfig": {
                "mode": "turn-based",
                "platform": "gamecube",
                "endStateMemWatches": {},
                "startStateFilename": "ww_game_play_start.sav",
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-cd776c278e1d466e"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784200,
            "nanoseconds": 795000000
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-d55aede8a6e14bd7",
        "bootConfig": {
            "goalConfig": {
                "condition": {
                    "logic": {
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "pointerOffsets": [],
                                "name": "LINK_Y"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "name": "<",
                            "hasLeftOperand": true,
                            "hasRightOperand": true,
                            "id": "emuop-e59df391b2714891"
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    }
                }
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "agentConfig": {
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "model": "gpt-4o",
                "llmProvider": "openai",
                "taskName": "Find and climb down the ladder",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "5",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "contextHistorySize": 3,
                "temperature": 1
            },
            "emulatorConfig": {
                "mode": "turn-based",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "endStateMemWatches": {},
                "startStateFilename": "ww_game_play_start.sav",
                "gameId": "GZLE01",
                "id": "tst-d55aede8a6e14bd7"
            },
            "id": "bootcfg-f95c35fdc9aa4661"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784394,
            "nanoseconds": 303000000
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784201,
            "nanoseconds": 508000000
        },
        "agentState": {
            "status": "error",
            "id": "astate-5768c46fa27e41dd"
        },
        "testState": {
            "status": "finished",
            "stateHistory": {
                "turn_3": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
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
                }
            },
            "id": "tst-d55aede8a6e14bd7",
            "screenshots": {}
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003019Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=83b1c89cf7e7078afca2e272280927f328ada6de70c69fae454e127b2b43ff8e58304e5933bde25b596e37f2517574625f3dfd72f364330be6bc01c295ce564613a2917a7b43330fc6f38c283f16de69731a02e4a1e16dc6f9b41c1a524d2ac85d0bd4a15dcf84f65bf107706b45da7ecf6831f6cf31e0e2de23a8d618aca8fa3d8710e7bdb48d5765e78adf0d15142c30d1da8b9fd878e15976a18742e3e1deb77775342eb763344a381c74fc8d242caa9c46566c2451b061a45ad3a94bc9178a07c9b2978a208103ecddf5f07f35f51b808013d860c6cd4fe3f83d9c906d9a77124fecb34c0687b7cdd6f624438e58540ee493717376e59f02c409ed8e869f",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003019Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=742cfdb6c6a8f37db52e0a5921911b0b8e7be62f19c343df2c1e24096e8e43396056b0a2c4d1196ec0dcc9befbd28d2f5eca8a8a5c42763e0490eef24e3bfb5c74ace85574a115237dce68d0c27428708dc75865f57dece8cae296484d0e049c17b95cd5adbcd77a58dd08dfda0a9cd1e5d91deebde4ca41bedaf29744934fd2ace12151ab40f276aff0ae8b3eaaae724964940be98eefb46f172ab61cfb83f49dfb9b999c742f733f724608d16e89535e2691cc0ba861a8999d3aabc6d8f71967dae04c38fa74b6533ce9b0eff68bca0f73b129c401adda667014c684cca5196b79cba2c518b0dcabfae41da1ce8097dd1099cd0e94257dbd5ea5779dff7b26"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003050Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3eecaa14f949634a3be5f040300ece2395b3a3e589ef8a1136989f322e283a001f869d83e6af1090920cd4bf8aa1dd99e6fd12c63d2f9b04fe7a74ccc51d9eae90c3069cde072b8cc12889eb9462d2f4f27eca3ac22e922dee3676c3d4f2a8f01fd288b0fff88da3f01f4abeab1527b26ca34e0a6ba90832a902ed77089342ca5fdabca4bf09740cfd91cb0b91b98252630e89fbb5ec87e1fe552f78cca3b4a457ea0db3983ad207a17fe3f82325d068b748f415bf28b84108abb8b00243bad4d3e37f1ddf665946acf5e9a5c65a04572f4e5ed47f5b23ab906c757de1ba7c53af0fd9825704d0d9b6feeedb993252a8ad9a85d16bc7d1656a6de3d773d617ea",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003050Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4b858922c1238e97b6e89b6ea342ddbfd4502a9ad438c29f8b9c5fef8b49bb8999727977c19976e1e9c922bf48c138305b8f01ea555e21aaaf6e03fbb2d94dfc7999d15ea4f338421705f3b30f39709257e4ba76edeec1d3678c20f83196d55b1005b31f8182311721b607b094eeb88dfb5cad3b58048b0822be57393159d200b2d0109d81e4e581a2efc970956a1918f74e5016b55082845d9052d2534e5a92ddcb554068184147a8d350673f629b95aa6a765cfee8215ca4d7932568b4b840cd1ecfaca3644746ebabfe93e4274e425280dc3ba4174024586471f96de5167b2bfd7922a5e945737f331ffbf2d059d8a301ac9c38e746e68f575ac4118f06a1"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003145Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6a6542c61dd5ee4b70ac715f8efb5118ebfd3fd15d82dd87c66f1313c3c13bbfd36e814f726fff4869cadab93cf449aaaa50c6ada45d9016ec37e852d58b676e0ae9109f2598c903c08a6ca467223651490ea1f6b71a3f685ce46489d5821b6e594255926bf831013cbdbc35054474a4351dd84fd50395d4a679f6721d76cdb9438157c85602bb906337c23b004cddcd13e5187702e56e27956c646e681798a3a69a8dcf7f2d941d05c6b31598bc283f20ef4571e785af47dd92dc720e727c1d787e036157726395acb03fb1abe410dc1f18d3dfca42ddbcc5ef9b6f277b9630981c8e0aeeb55d732c4a0079f529659f2306b30749fa40c2874b007a64f56ff8",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003145Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2b96a8c3ae85fbdd97bf80e877d2b5b4537d5b78718fd5b3d70eb285cb4444444dd501e54e00383992aee4c87e0d8da5c69bb7c33bb4a4205375d3964d41163ab2f05c738ec30d50e245b88afefd494b65c6a421a9eea832c52e0a1f148f5c064bbb16e5c212c081958354c6b9684074bb2d3fe748e6f0a5804a8d2103004724319055a8ffa4c1cb675fd70d858b6c8a5cacce8c590fdaf251ed297a1666d727d79841b3548a1ded32b66fd7ab9d509d3991279db43f29572492f8f1dbf066a00f6a0f991699bf6a1cb36c7cee10de509eb9a8882e03197dac924a84f27e64597471a75c6bde2662b06281dda4db7d92bfda5f3f98b56731dbc0a3524a9ae2f0"
            },
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003230Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=91befac53f011b46b484d7853c51904d9f29e2d42c8df7fb4fb898f8b3dbe76f01d83aea77282684bd2f295a54136031da4fe5fb0786c535929b0d798fa334208e7cb3571adee9db15803203df0c9809f44fd70a79a18ecd5fb5d1380719bf5bd2be71a7855dc706f7853ba559374ba24d9882048d65d91fad78b48c3d5af0601da4edd2a072f51fc75f09265b9cbdc7425d592271505199f2760fa5bdd4fd18105d2a83bf99eaaff3fcd2479b88da6905bfca376658e6bfb89d2c4ae5c623b71a4b6e7168f11f747001a286ddaec0eab1ddf2b17be4bd9e5be33850343f93c6a009f59bb5cacb777cae323c61dc9563bcb978f20cf5684f56edbe4aed11e4fd",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003230Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2aa98a97d4b36ff1fbe9992b14380fd67e60e275cd678966b6eff7f1891b0f04ba44569b0407acb41e594efc25d8a9c40855abb5c66f7b97d064b9209b8f32ecd200d175b6c390e8af220697789279662a9eb02fb233ed5ac4255e24042e71b9e45164cf66fa934d38c1a6fc6e64b78d31399dade70aaf18ff45402fccce401813585eb779e57421d6bcebaefafe36a6f75822fb1788b5f3944110239aa9350abf72b564b049acb3559c99d764f4e09d8bbdefddbf066a544b884c0af4c5fc97596d1c2cbf40b4dab8cc11156eecddfab1f433022cde555302369965a3e99bccc2b39675efbf0bc255e8b901d529b374d27ef0a6c2434da441b29edd7e051596"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003101Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2dbdabdb77119aa06bff94d3cd028e26c3f83bbd14c5e35aabeeb16be7e604d69aaf52401b363a67d8872351727ff65e053d6e94eb75df349f5f2ee30b05206092de0d49af9bbffadb6c600c5612ea9e44f48675b6f8491b3fecf183c8ad298f4d369c666c81b42433b33f030b9ae99765363902244061761c7a3171250b555d091014df97382719ab501dec1630eae2f8e5ebe53f0ff600237e370e049deff7c7b7077aea8e4f75491146592417066f5f862ddae8988ef08028da8af4ae2090406a823684456457f942a42e85c355c542ca440a681dfc1c99a02cb86b0e70a0ca74f50a6aacbca3795ee0e2fa363f498f8765bd648013958e4d44bc08935c12",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003101Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5004f043ba69ba838e6ad50a6937b4c6bdfa2ee94fb3a4fe282e26b78aa8ab4a78daba55f03779a720a059c23db7f3bbebf75124ad2a2bc294d23a127cb9be916915b75bdf92cbc50614c81f29f6f7d675c51a808022c172a0638a86fb0e82ca54938f6fe053499c3d25d59a174e8c7289a08d967a76063161cdab7c53904d054a530f2fe841c92abf9f782666c320c96194fc204f85db6db2439b6cf167ddb6b83bd96d7a0ef3938291882aec7b56d55f0c3c9ed19fc989a589e60e1bf8f3e3358d49d354c78936ea950e44817e8ec4e0d298940c2899d6faa32cdf864d58b27155d10e1be6d702eef6c1ac60a77f7300309e03e6f581f3379e786ed8438a31"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003043Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2b739103123bb3d22cd45fc35c53aa661f8d45c66cc7e7edd91f39857b10b9e374b208e4c65c349f2e366ab235bef88812683e62351411c834740624e51d4f868d99f1ece6c548c0cc0241f46dab5d1a1cf1ebd6e8f0c38c04e2f9bc978b43b2580230f80743a3e53c0cacd4dc0b9b7e0a3ef2dab9bc1212aa068bd0024412c5423e79fff26443b955f1c5e806a114122d279c4a79885de8ba6e30d08298f884e28577f24b77644b27659c1b22910e837974e81f2888b833166127e8c27f575b9a8bad52255a5a68e62506b56ceecd783fef286e96976d1017bba0b1f0f4d4aba0d3ea248a370595dc29ce399cffdcc87357e4bdfe4dfc9da3a5f33f5163b1b2",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003043Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5f15c0767dc76c62ea2fccc0ec4b8fb31f4f9391e8d52f6a359120a5d91f21fa9b145291d8130230f2823340b5b16a7c17fd9e6e0984c3322c218ab6d67eadf64883de526c2d3f94a217ed8fb158c66c620c641bb3b676db57d865d302930692b361ebbfb23327a4325ec74d190ec3f564910504795dc6fda6fa5aa07ea558043541402d238aa9986144f6e24d99992001e6eee2214f658673b45b65e07ea556a1bdf3ac5514c0694ec9ac18ad1c6032de66d9d32af493dd687fa890ac024159f0ac4dd9270632e175e8995a16e66c9b2c714ad559ce67b818721d08ab5785ae6fad35e5a9246c6e6665cc8b4bc3882693a08b059fcb5be037dfa03b062d4db6"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003058Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a8471acb89e2bd349775e4ae8a0beb94f9954d8c93fce1ae010649eef2773e756063b5dcad5a90f61c021a2b45435e772fbaabcff8d8f8df04cd99591a82290890838f9bdaa87c493f81177bcdd74d4558c76ee9cd7d7f288f69d30b00ab67011987b0809c344e9aa91aa63433c2c82c3157b929100f3caaa57cfbdc448d2869aef2b7872b285f505d92e7c2253e07ea148b36c2939a2c5596fa2ae27c78268dc3cb26a2ba7044ef4e4ca787b8a46471ed90f8671ea5b4659ccfdf6ce2a759a0f784712ef9936e20f890ef8a3d2abf597519b4d1d830307957a9dcc09026803d4596d6e63db6767f02e0a947f2c7f839e2df96d9eb0c1805eda5ef5d8003900f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-d55aede8a6e14bd7/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003058Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0608f1e252c335471a28387a25a83a2d659ce8fca674cf9f2de1bf6edb0f411b6d3b37aaff7cd6d8aeab8e70dea5789826cb6ae27ba156de2e3d3f421d0849b5514f2f42a0b0171cdbed89ce005602576f4b193728d20f34ddf1493436257f7d710a24f9de54e216d58b0c05e56d3155f72d4b7495ed20386dece460f750fda26e5ffed0aae9b541d0db586bb1a1a6a864d9b7b931337f6321ecaeda0d2621a96dc1274c0f2e30df3af1a6a3f28523125df3d12a11b0a7f90247a7c04e99c90f5934c85765ca63ce4e18f8efd1e1828fb2e639370ad76fcb91369159ae712043256baa0f819ce2da019b919450c6d65f49c2416ce2be0ffb80fe0cdc154408cf"
            }
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-e4b351c979a942f0",
        "agentState": {
            "status": "finished",
            "id": "astate-47dfdb60976a4fd0"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784372,
            "nanoseconds": 533000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784429,
            "nanoseconds": 332000000
        },
        "testState": {
            "status": "finished",
            "id": "tst-e4b351c979a942f0",
            "screenshots": {},
            "stateHistory": {
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
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
                }
            }
        },
        "screenshots": {
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003340Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3e650d46f7144285bf84b27bc8e0a4a137e71a22e36283fda5d7503a85308aed3e81ae5b621db3ee8314074e7dfcb08db5c1bdc9be5adb8df74d4d94b2e6f7a31802c6a3abf7fe77088556928226404a84b8f5d733d7300f58ec09f4e44cbaf44d9a7ab873dcc1ed0198be66ab71be2b73cb584a6b67b3594cbd9bc9a35b2a8431b11a6a294cc23be4462e34fcfb342ca666390e6a353a3cc148c967520c62b56a8676f8ba7f5a3610b625fe4f266a1dae15e1015a0f43380a39f7204ba43d958f7b40d227e19e290982ffebdf294bd4b3224cc6c8cff7dc4c2e9c87df6b30c4684b06d9563d7ff1cb2ac26aa390193774636cf65059c6fae799d6dc190b71e7",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003340Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a6792ea255dac1a2bb960797e828247a3866a59b8eb87ddd70e7be7ecd1f36af0d00ba9ba31962c2ee837724b9b7bbfa63d0b362e096199fcdf0db672a4df5233ae11e8a7ffadd3df9e36e1ca5e3f0d4f28823d136c296b9ee2760945d5dcfd9d8a81542395291995db58722bf8461e04bfa4640875bf32586010aa196878d5859a9cacc476bbc0c67e1ab28154b496f15bcb1135686461e86316b5a4c87c7f8deb57315f8d8fbc49b69afbe3f9860a63315ed41a8c964180707bf3361d946ea3d3bcc201040075d26ae93062a1f1e6f15115686d9aca625da528ae97b84a229f27e54bfb85eff60db9e164474d931323b65dc59a695f51d680aabeb700b76e4"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003348Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=abcb7a381c980bbc11711a62a353ae548fe878388918f957ce3f097be78e69ea4ce96229ea4da958a07a8d5ed31ebc09af66ac7513e8380e97b2920cdd4ce545f7ebd592b3b1d59a28c3470d126cae2f74cf6ebd0874e47ad32f287df007b2a23a2cd77967754d52ba48cbf1623f744e2e8421453cd7681c34661b9e5813275b1914275efcc13f3213f942fb993ec8b180b5064848ae67f7d8bd7fb64b8518a055712dd7891ef65de63b9f570aa0083040a305ed63a1ffb8ae9e49d8f054e66e863ea7c4b9010f0723e410774c156921b760d4b4060f8e97192128b4474f2ecc4da7b842dc1d97df3017b75dd63dc07f3c3c29d36512f83ce94a09015b5f4737",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003348Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=92e70d6c59e7432a1a9d7adde795a677def4d7de4191cdd0d06fe85f28961474f3c80f3ef14e719deda5271163ec835b207bb838f238aa2e97c5c686bffc4ae859130abac5360b49e5198aff7a5249d7fc686e71ea288e6ee216e9f0b438e35979b0a0bdc3b5b458f18b355cf21b5f815d5ff1d8da12355a5eb53e86b6c8af9bad7861d5515a9cbc2c97493023327c95301cc8465f2a4389ff0cce84415c236ae042e348345a893fa4031255bd1ed136969ebaed30954e2e70cf97e5dc6eefa2cebcd9878b4c5563173396403b0098ec7f3884a10cf9f29c6ea3ad5d778374b05506c378ba0da2563cab8f6af572ba122b84b891da1c3e8b01bbd521ace53b38"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003306Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9cb153dcef6f0776415571790333be685c47b5581e29b07f5ffaf3f9dc085b8fd06240cd1893e4d6615b31517526967aa2d159613177758d58e3132ba5827f77e646c1797f2be6482c490e5675939c1aa0bcdb590085c4c8ca937628861e5ea01fc56860fe122d166b781f52e91177d7d9d49ce366bd8451cbc3c48510679d012ba8c7e6c58465f20b3cf6f9be33a683a86c851538b0322f9e4db757e8816f995afbcb9fb8a89c934f76b4250dedea7f6af0f7a012d98588b07177b60a4914b580a021eaa1e23567b22b895c246d6b2d250b31dec5dc884cc943eed844b410889c5c60508e1721f444a8e6b250eceea8186818226a81c51ff2a9b221f7a1bece",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003306Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8d3922cb565766c2bed15ee3947495d2b2e7ecd6cf071537ab613539c9898996a2d2ec5f4d64a3d5c9f4dc136d0c093321de195bd1fc783d433d18bb978fb2104ccad2468ccead1687469c0a01444625c8a0e4778eda0cf8fed9a367d51723e98fb761205005fbf2110f69665322b99d661f8ff96391d4cc1ce90e13cdbd342a7560651f5f6e9a61f89678f5f80143f4a9e4ca14ad35f52e66d2b5e396d55735484a92122fb9478ac852bffd8ac72571682a498e1545366c8bdec17e447a6d631c34cdc31167e3251c42a163442d279112128f92641856fe746ced6af8f86570f8ebed7bd6e4107579ad70086f196dcd4544f783cac4e186754112e697d5ef26"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003322Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0a0bdd78fbc534bea9f75f2d8082ad643bd570e939010341e5a5088641c20f07d35951629ba1b96093ec1ca598aa1d8ca987b6eafc6420395b1a140154c8b83f07b0fb00245d10cc5907b42ed30d946f72df46cef7ae4492bb0bee98046b0d6e242af41181df5027c1b415099c22fb95c13dade60a04a9bd45f165e4f30a8d1c4c288dea17b8a7fd2179e8bba5f1a4876b2eb7b86b6e7b0759aceaf130167b22ce6a66fe09380a4f400811662c9d88bf56eaae9cf6d2831fd55c61b4d7631419f0d27c9fff87b2a828e7e2b5f1024cd4dd5739143e4858ca0abc37f01b7675bdfed94e878a4ec30fc75f939163dcd8fd3034dd7f8e4e5c15156cd099df06c3b2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003322Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=164ffff08358706204448ee9f1d7b4f9dab96872738289896871f4ede00b22604093df297c7e8c7e015f1b60c3c818bbd1ea3083a3c656ac6135ac0869ba77d9c61ed4b4406037cd84b4fd529542aa9ddda8cccaebcf1d8ca7b899c7000360e375cba26d215861d5e08870db02ffb1aa78ed76d7f18d2242137ad497c9e9c5b41898162ace438b9440691524a92b353d22ff940043b464bfc593d60d5de138d770277736172fd00c8a18bf89b5b9e9e11de7e07cf7f8267b9bacf44011f376df2b0ed90ee77d50149851ff2a9ae1e51c7af55614eb011640f7295b52d52b76690a681af2a10bab3cb81497434368dfacf319bbf99219516b807a87c60d2fa118"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003332Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=65b97e977f251e632cc0ea3de519bc56cf68c8bd3dbaba4ef106cdc795c606417fe2f1810b4964ed75a552d759436cdcc7109468813c216bc03b4eb3719b912da0f15ba6c4725d5491be12a780465d6bd1f291edef871ae961c5dc37757c6b139b016a70f366ee423c660d2f8b4c4c4664fdc46f923a0bd4c3bf2d97e88d04ef74c11bdfdbf6f707a60b7460e9d5b6a4497840263302da34fafdbf8271e70cdb88a89fa056ed4c690316e48e45caf68afd75c61bc014ba9fb2f167700757cd2d57f3bf8d0bb42a6152546d0f3224d00600984565b926a4c2e5c1029c492093247d9d28e25a88961b0ed376ab47f6a1530ba48b7578cd5b29f56055e43cdf481b",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-e4b351c979a942f0/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003332Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6e07049200cddf9a3ee7b2a9d2a61be9e5120b7b241e8fbbb18a765b81dddae78675d355cf4f957fdcbdabbecbe3bf795c203020732aac8d2650d8b308edc01202ec7c698e70dab577687218c853af9040a241c920df36141336d43d8acc98fcbd014b1da59f33bc05ba378b6895e6e319271efd5f2a5b2ee920402bca17e34ad8415d06ace09958112dbc22ddd873b207b0206f85f4fa9df345458bb39deacae20072b65f5d25648731c63f03531a3aab9d2ea147612142b154dd1cdcd76daf5c0af50647ddb1e48a278dcb00efdb9add8b6d3cdc3247ae5b6f6f79276aa467da7c15bf89b63a2ccf18788b91b1179f5083b16a18355662e22505d14c50bd68"
            }
        },
        "bootConfig": {
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "type": "float",
                                "name": "LINK_Y",
                                "pointerOffsets": [],
                                "rawValue": -1
                            }
                        },
                        "operation": {
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "name": "<",
                            "hasRightOperand": true
                        }
                    }
                }
            },
            "emulatorConfig": {
                "startStateFilename": "ww_game_play_start.sav",
                "endStateMemWatches": {},
                "id": "tst-e4b351c979a942f0",
                "gameId": "GZLE01",
                "mode": "turn-based",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                }
            },
            "experimentRunGroupId": "erg-3ecacf292af34da8",
            "agentConfig": {
                "llmProvider": "openai",
                "contextHistorySize": 3,
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "5",
                "taskName": "Find and climb down the ladder",
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "temperature": 1,
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective."
            },
            "id": "bootcfg-bcb884af696f4e92",
            "experimentId": "exp-d7f3b57db87b4310"
        },
        "emulatorState": {
            "status": "finished"
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-11706b5345124834",
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784412,
            "nanoseconds": 234000000
        },
        "testState": {
            "id": "tst-11706b5345124834",
            "screenshots": {},
            "stateHistory": {
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44AD7000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_3": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44C0C157"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "status": "finished"
        },
        "agentState": {
            "id": "astate-1ac1eb2e734e4908",
            "status": "finished"
        },
        "bootConfig": {
            "emulatorConfig": {
                "mode": "turn-based",
                "id": "tst-11706b5345124834",
                "endStateMemWatches": {},
                "gameId": "GZLE01",
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                }
            },
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "operation": {
                            "name": "<",
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "hasLeftOperand": true
                        },
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "rawValue": -1,
                                "pointerOffsets": [],
                                "type": "float"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    }
                }
            },
            "id": "bootcfg-d9abefd2f1254a91",
            "agentConfig": {
                "temperature": 1,
                "taskName": "Find and climb down the ladder",
                "contextHistorySize": 3,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "model": "gpt-4o",
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "10",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective."
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "experimentId": "exp-d7f3b57db87b4310"
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003301Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=778a9701e26fcb192c5b4b5de706136c57250bef20ec63bbcf6f9c57b2e0e6b1847aa0ede3dbf775b37c45f2af4b1dc24d7dc079e4cd6961d5fe2ef29bce51bbaeb9e0e79b837d5434fddae5dd5f2fa34cf6ccd12587c261b4d351d6fc0c3051a64108237af7f75a31b80142a852aedb66e668be52199775373b1b08e6ae3d86aa83befb31612b35cc2ad3232887c7dd60075b248376077f8cd2041e455ef3a12037a4120d79229f6ae034f53cf5ce1fd377f22d0fd2187bb0c1911c3b4c372da2b4d1336bd6b6d352af0d0fdceeb991983c045a822eaf00e777d30fd0d9ab3bd632242a50b5489beeda1e3575b4d93082591084126ae9dbfc81a1b0db29aa69",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003301Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9ff9759290b46d7d143709fac1c1c922d4de570eba76c5896235d36d392b5db495d7faa346384ccbf6169544a8cb0fa71998dce76c2654e7923aa3902e3c599a816b07def1aa90ff32aaaa57a327df8a8dd2ddfb6d9240f9a6327c86bdfd720266e20cfc0a4e0ac3c47c51396f85ac8f7b6c9ca97cca4c63de71ed071a7f9dc2d742b55caa67112235bfb80f8c89fdef0dd5c9e9e983630e8a5263948192388a4904b3859cd7d214ad042c3b34bded082f3befddf893b748dca1da32f7b5e030dd9d71fd96b89f273655b86efd8e97ac9b3c2f3a728644b92dc582ec00ad89d7b0e4d3d2c33641b095c5d52976230327c1132fdb73f68b75718b4aaed7dd0eb9"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003331Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=74db592740cc35a5cb37a687066d494cfae485cabe1c0c534a9e65cb3f9db6ef000ab3b53d6196de927845d51dc7ae45a4075f14026dd52ba0c063bed6a25762ea5c8c5e0e835310f2b5582589cbb2f11adcb7ad5f130b8929d2bdf8ead397bbe4b94607a72b608812cc7917aa11ec059a19a2b465a493c2f0e9ab7ad305cb55d1fd7e61e8c30dc42d38c4088a7dc127b079771ed4b04121ef1f8e65a54a36fce44b738b89e24654ec131f7aa9ec2eab7dfc48ca63b253310cb207ec3c3913ae3f4ed60c4117b75e1e848c2847121892023b412954536ab87b928e47d9a8c4a64d2f16c6db648c13b69140e992ea7a13c21bfc995b3249fa7b06a981568f0ab1",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003331Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5bdeefcd67de93590f67125a75a2c897d767a59de81f7b9a48771ea1a05e87d9596be094be9df0041615e9c881f884067517693eda90a61b1b8b386848f0c42059db68c5b7108c92caa9ae31553bc16b18a4ca32daed371ff11dde0759c133f47327d9fdd195d55d7818e7bb507e993b4524eb403864a4a1d2c03c75401a401acf34e19e5f25534068cdc826c9ac7791dc584937fc37ef309010f88ebf81d84abbaf28380b91c1b0dcf34313ffe29e597832b3eb18d0c0344729465a97fa4a37b034df915e1ad7b04113badaa2b6b1e3b1ee82109afe958dc200c3928e45efdf312619e52018dc7106cf620fbbc7752910749d29c97dd678c02cd2f00556e044"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003232Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8191dea3a8b4b210949877ed9ae8c0a593e338bd5bcd65972fd0c1341523b936b664417a12eca361543defc3fe69c0df698dc5ddd04001d680112e6afb3434a84c939d24ad10d9e678a679f60427c9267e3baaa7f2e69f3495d849e28d80c23c33aa681d515820611c4d3f73cf0b9749bffc7e3ee2e986fda1c4329692a366553fbefe3b60f019d8c496ec43a245b9bacc7dd42d542821d53468a8a88b60b4f9291741d00f5fafc9b9140a93e36920f1e081aa4750712fe8bcd6017b48816b493ca48dead97eb49c01ce600c2a9eef839ec1484d951d93d5bc7a2e24b8558bc9dcd8434229ee4b4b7f4c198b9a2849be8d88463405bf5e7cd94b9718a4c630b6",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003232Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0f18fbb328b05234e2140be840fa5548f3728bafc285e63c87f6317b02b6616ba163c150d530a3fcdca0ec9f1e783f1e5e69f4f0a19229f3bfcdce0a508ac1406391984b5e8108dbc8b9ce7eeb29e4fd21a4d9b34a2d8dc1cf91b898f4969996a8c5bc3c59bc84dee63bbce4f6272ae1d946563a50fbc74f9e5fae615d2568227254ed36811142d3209b666206e825ebad47d1864b50c3d590b488819d9e36baade04356f70bb0c23965dba46576cba4fc496944d6510b5d97382b7f1e37766f708100384d9e8b3b93c403e10980257e25d19d269eb8cfcec3482130f8b27353ae8f19c5cf18a2767ad01127b8a908ed099a1ce62105ca791dadc584888cf49b"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003252Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2feae6b74752475c9c9475e7ba01270026a1b52d0a43ff9d666c04b3f4e3e1474c6ad75563d43bae999bd883c69cf3b1988466cd60e549a08001244af57f4c842127c40331d8f12097c9d2d1327a11cfcde2ff802d5d7215987bb823bce31f05ca67613d3cf49dd4c89ced18c6c9d6e58491036c8ddd91b3af806ab16e555ec3176c6c60ae01b3bc39a1beb5ff5ed552614172d2f1695fda2350219054cb40d4f90ed604770aad7a49ffaaf3a27c9753328faed7b4addd7623e45eb3ed1d39fa6f8225dc9d0afa78daac0409e649181a4648b8cc54a1fc5c8e2a0b8ec9bfa1f6bd6c06df14bfe480d2fcd5a2c49ce9f3e385c732e378c30074ecf15cb162ebe2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003252Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=744585761d09aad38145485d2a0b69d52945e63588b20fc515af7da19df78f48c3c2aac4e8059ce31f9288a8d51aba959b1dcd088d0b803f2b0e6fb0aa0d5886554d8f01a89532d3ff4127a8cfd52fcbb59d570491a3583c232994943346524298c71e5c0399063ab3ddbcd9a2bce4746bd03c261786e407cd2c10df2b0a7a4748ad00e69a05275d0a41e62d194f32aa55fb095a7ec64ca715e152be7c2715fd336b9f566586dd56ebfbd25966ce61ef50acd8c390393e4171291a10c49662e50c38453f645694a47d13967d04281b468591dc8952f34fb40147e9f3a08b9ad2888b21aca6963cb984384a380624d7d45576cf5c920865620588d0f5dd48a65d"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003316Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=057bd4b0a7a6eb7197cb4d02c0a73303db90825e49fadd22f5962e055e3db77b1d3ff1b5ac2bc49b32ad30d1102f27831f388b21ad2c8f9e8057bb0490ed98d306f25f7afd6069c72b3971c63a8361f0a74e9cabec07d07613e566755e9544a8f12a6577a7b5d4bf56234c13310a93f0edabb14863aff95f129df981e2cab7e7bc82069360c4d3e50b1f2c234247098bdd6d72e385dadba6f157b29ef8d2d7f683ce0bbb8f03b61d6e490a005eeb8ef3fdd2a7e839c13a69f670895556956ece274a642b3b948aefc4576d40b0ac01ca0187adafbb937db83b81aa0719d19e90b297fec060d0a2222a2fa774d59ffcc537874f25d753c6347b5b8fca9166d9ad",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003316Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7cba9d618ffd1e178ab0d101b8a7529aa97fe8d290a8fb62c506ee70d44f6408cfc8b9befb0bb40b3fa04b05eb88d9900d69dcfdaca7e58a3ffe5498d1541df6c985fa0986344106fb1e3fc8ad2e92a27deb12d1f081c8a066f94a583c4177066841f492ff4c3206f23c4a7e7563592183c3ea83cd5c58da935602e0b795a3dd060c2ff285ef8ca96301f64bca615e75c4df25fa5decc2da5df0984eaa9c5f952ea70f99c0b28134df3b878e1fe40dd4fe303818ae471945929db16710a0666be7310072ea7c1a76cb8d1e602c27f561795af1c6b51cb77c911d07a6c6cb72fc4c99405f5d452b22b6dbdde6f0860f1dbde394d62a829bd7c8ab596749ae782e"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784331,
            "nanoseconds": 989000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-1519bdc277e3464c",
        "emulatorState": {
            "status": "finished"
        },
        "testState": {
            "status": "finished",
            "stateHistory": {
                "turn_6": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_9": {
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
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_8": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_7": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "screenshots": {},
            "id": "tst-1519bdc277e3464c"
        },
        "bootConfig": {
            "id": "bootcfg-61e9a4786a504e69",
            "emulatorConfig": {
                "gameId": "GZLE01",
                "id": "tst-1519bdc277e3464c",
                "platform": "gamecube",
                "mode": "turn-based",
                "startStateFilename": "ww_game_play_start.sav",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "endStateMemWatches": {}
            },
            "agentConfig": {
                "model": "gpt-4o",
                "contextHistorySize": 3,
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "llmProvider": "openai",
                "maxIterations": "10",
                "temperature": 1,
                "taskName": "Find and climb down the ladder"
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "type": "float",
                                "name": "LINK_Y",
                                "rawValue": -1
                            }
                        },
                        "operation": {
                            "hasRightOperand": true,
                            "name": "<",
                            "id": "emuop-e59df391b2714891",
                            "hasLeftOperand": true
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    }
                }
            }
        },
        "screenshots": {
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003259Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=936555c8361b2c21dafebc831ba1c84a3fc36af29b8b7cfe918c955e454cac5ec8d557e23048b9f4e6a29876754d7c9235a6f61fc7100b6e88ec70431f514f61237d5bb71e53b3e01befe2e0852c90a367c669233bb4330fec1b5ce4aae5b98e33bb82d79b0315fd52fa5f7dde48b502729e2b27e0c56fccecde69067dc67881b8a164c4eaab243a460f0d12e5211386c8c16a4ff025b464120f99f153948fa1fc888533771ea08248f4d79f514603910ed6abd624816d6422360423335e62d22395963f4ef1ac6fb1ed169ed72d1e9382c0e9460d99b2b103d6982192c885001c9539f959a9a2287f83f70a45288bbbd8a7cdb9a334c1ad6fbae427860767ee",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003259Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=80787ae4c654af391e2ab24805ec21c53c4e2479d82532f29ecf8605971656aad2789305e0ebf826513563e527bc345563cf526ef25814b8d011859fcdb3fc9538fcb476cc5a6680608597852dbc6de03cdf7e4edec572f75300282165716ac5d972c74f98a56e4e658836698ffa7a62d577863b4460b14190e26627a194e2cc7e5527bf3e791601a95e442ef4ce9a0421420807e50d43e30022e6bf7e5e1da05c19c2476a20f93d0f3c05eff0f9b888f4fec32abd8ed34c279a4615a7bbfb29963c3454998c3327b4e8d5eee44e6e4305983e38807e08e5bc8398fc4713a6f1970347c490a696d779790b92a432feb0b271e1589f0eb0ceb938041bac8eb456"
            },
            "s-5": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003249Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0bac5cb86e11df0d3d897b90d2446434489ef111f82770c61d4335cf531b4236b0ea92bb50464c474fe6781323a1ca0de314f24520b40a5e2c3b32a29cd9d1a759aeceac4d086c8d81981d8e6990707abf92358a78491426875746d50ca4e759c0ba1216bfd0b5b09696527e6f803b6cde67ccd0af505c9e15a9a7ddefbc2bdd684b2d7515239a3642e78a62f3d60eaa16437ff86be738b1c195545b6e038a1b49fb4afdd4cfb3b206aa75d667eef3171485fc7c7e4f0c10cc69c7b22e77c0135549f241cdbade151636e6d4ace540f50e99aa0c1e88a658053279250450e27808ff2e823725fce452e5a196bf05c2703f0766df59d7a42cf688eecca07c4976",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003249Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=69d7d702266f489ec2ba04643b210a9fe1c95a6d78730d547e38c5012f5a07c93b4b36659b28fcaf2648b5899b85e5609bda769cbe3f741006e53ece659536322e5e6016bfa3ec853124701e514a296e2556600f5644135b2923930954a8c6fcc736c736d78ca4260a7f6f5871ffcd7462481d5ce41d23c93bf76d8a60dd8e4cd376ae9c88a6a5c5f17f314aacea3a444daa44e5dfc2fe46f2edc56922fa827d4f7c2149b84dbbd25fff9a7901ace4d0cb7624420eb36295acdff405cb0726e2a4d863111261e928f31c1e86e08be95a17716397e1ac3835ee89aca603421981ed836b7eaebe0a19f52da3cd2328978206de0389f79ea2e9246b076b1d6ea844"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003233Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=12e50cdf40ada398da124d50d5c0fd730e49e2b42f22e9a9f5fed83e753c5f945a1f3d67fc66bc572173d79c6252427bf22a79d8a3569440f60837e05b1bf73a4fb2a3588ea34f69d5e61a7a1120efdc0bbdb0e70acd6b4981e2dcbec866409c1acefe5842d789d947bf9aed1e736308569a9cdd69a5de37e085cca1177436f9293dfb488c3d3d8948d583f8d3cfa956890f2bbbc4b8b6b260fe9d77c182e94f0a1ea3d5b8461e7176d2c8b8fa23d70b9a8a006d6c08eeed3f1cdc419f524bc35bb7557c09fe84013378387ec738814a6d6c1c8420b8d6b62d3a56bff7ca285000e0fd7fd417278f07c93162c3d14ab87b72df2c89159e022f674801a76e49b5",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003233Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=80956763567f0412f5ab7994c612edc39991bc1690c51fabee377672837f3d6d9eba93c00c32e492e60712014956172a5a1e921820b917f7555bdbc0f45058fb86f20502e2da840ee198534557e2b4d89aa5d4b990c68a5813209ca553a1ff24bc1abd193da5fed8bc16c0bdab5e222a6126fc062a6d1fc1e5dd6e93f87c2ac63c64cd7053b731ce228411d06aa49620fa37bebd862b0daec0139a33ff614f63b83cf8ee62ae512f3777ee04aae7f9f6eb7db00488cee79413f13d8f719cb89d9a10f650fb883818fa8224b5be3f3b6efc55fadda6449422b77dab8d0499854c12a67dcee4f1bf4e2035c8e5372a69b680ca820728840034499db2b7b4ba4200"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003239Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=167cc5dd294631742de50e9005ca699e7e00fd7d3af77f7001e6906d96ed2a380709e714a04f972e1e85dd2b3607c5fa3c7c6ca220b4260d275d7328698ae1383d70568ff95e26a96fe5e67b7548d22f84b4886adc01821f9540a2b2906fc61b53b8c6b728a6f7be4bd449ea1d4565ddf83f39f5f0518b1e86e22f1b695761774c84e42dd876795a70db7f0f4364559a13f5c0711218a07f54110db5a4279c4435a85979dc01a7c91cbf489c08b429bff94f7a45f0896a9ba0f2fd8d038e8df964573c9ea1ae76966f0eea2e22224287e24f47fb52086a0f5868e767b9a510f7ba99e79b8d9ce098f05d71bf0c85cd100512c675074b4215a50fa74c778e3925",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003239Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=77761becfe4f156d0365e144d66a2d9c0e6bb109083a2083f1b0e077d2937c17e8e9e435a2ad8e0b28e40f25d7dc8a29efeb846ea03684989039198de103b42593887b957f5619f0cf0e09ebd7246e59830dd3a583782e193d585d1add1e8c5cbfec54c137f570f23bf8df0bb4ee53f462ef01574cd656a7e85c27e67be9ada173dc4d5cfc6d0ff8a176fe2394c11908a4e9312a1f532d421e408496f3130c21134ba615046ea20452efd773aa1818e69db4ac501fe92a2c846baa05a35672037e1ed0e9ad2556574eff7697888e20ddddc943d5a3acf04e7c53b2bae76da12e9acea16e49e405e16f9f2799db00caf01e95dd9d4088d6e9a0eeb01c758c499e"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003210Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1d6ccbf1d88a14cc3bc06f197c05c1adb5cd1397b95135e940adc003d08b0aa2927e3dff7c0348fb161875ccc4294899a5e24343bc1a99fcd02e69b0e3981d2a7d5ba6377c5bdf162a111c56e5313d0c380e0afd432eae22354e7edf7ae96006cae83790843022f6998da0510994940f68c93936b3b9fd430ea16be19c82199e0788f972fb257e785bd4a9c778a1a7cc1c891625a8e395b89d248d4a2450b24db9b8e4c2214cd70f410cc54f732ae0b6d9462c6c29c4a403cfaa7ca6bd070a5ef615e977c2796ff00359808699bf1e1b6e4f321ab39f49788e303a7fb0348f4d4ecaa82a9c4e7e290e61676633370a5948c27dc2a338e92cde0571e00c0059e4",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003210Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=67b9d1a5648e4fa7f43de74a1bba9f3ed4cf3d56847a7839662be8b5da50293488bd75bcc55d7eb883be6c781162246181cb0f723c45b1ab24b9dff06395c61668b6ff62dd7ae644b6e8b613c48dc652cbf22ff66d739ecfc5908e9b0289e097d7417dd841b192cc5d3fa8283926164c56fcb824abf72452a653a7c4c7d77e44354b0877c2f0c8254443c78d87d8b9f3d195e3ea9682c111a826f2fb582c3cb1f2e4664e7c9c1728b9aaa8a561b759debdd9980f657306918df5b1b56f33d03bb87ed37de96b4f7a5266b3a1001bab87354a7f977b646ffc981dec637477a7061c373e208703f448a035a6189878e0b16861a2f99ff908677b135b013fd32027"
            },
            "s-7": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003333Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=57685d4d6410e857a47ec1ebf0eced6016f51fac048fe4598a1300f80525e3db2d5fdd9054c3ed15e5fe5fc0b780816ed998cd38322a46854fb28966ecd3c927a1d7b6a4bbffaa08a74087fcaff3cf4a5d88f417c18272384de3a18188b61081ee70c9d4fe6f44bb5b232ec0acff4f69cec7966beb5e55e0590d399e9b30c286fbf200c1d8f7190229e0a543c18c03752167a2555f29026dc14c650d2938501a9fdb6cc3a9279317562a0772bf4c7c8ddd5f314d179a324edd66a9e298f330036d679c6afd906707cc24d573d4d3c80b6107cd38712fbf45c75531288a0f2d3b96002279e66affb9446d53995e7f26b52931a6bcddbb6e5b4b4f8696e5d91d26",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003333Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b289fba9ee6954a6b7741cbe9475827c8fac00e9efbc1c56a64415222179bcadec0d8db1ac779d8614dd45ee212c473c7a9bb40b7bd222046944ed22a284d193ef03305ef965ae08bab7dc38736d787b867f72bd5b22d2a789c7fd43c0579494b2b2045d72dd280011ab988f665f09127bbc3151a8d3b86500f6be48d9ebaac265fd6a2e6cfa267346a6f95eacf5fe6bf066527c3ec42af8b2e26e0baa60c408fba2a66da5a0720ba4e66c18671459adf7d30532e61659d1a7e5a0097223159ee7f3fc854a950f7850aa2957df2a116715f2e015165a7e8ef19f89a36dde97e7f9b004ee00559bff5d59a0cfba36ec096a6aa79b656e676d91977b51b003a52f"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003340Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a6f24cf94908b65e5e7b949bf4214ea844d44bfef48a825154ee8a93d7c4615b255ab58aba9257bf1b15d6c8c60aac7315abd32e52a7e74f04f1a9774c2de4ac7585dea3bac388e9c0d9224c5ac6ca16bd392c68a882fe71d04fef44d8bcced16df1494b5968d8817fa5eece9986e83f675d492173348019d75d76058163f9219cae12656a248edd6762d54d7a57a571cf72284978ffb1b2e9283f0d28f2aed5e9473bee766df450ca648424f573735d429a8e8fdb1fd033c10e09cca89214420548587805e66f03bef71647b65aeda56ba12bbea8f9143fd6498ca47e6971e035df0d85d671772e090285161c622f06742703fdceac8cc1ccebb584c40f3825",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003340Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a44383cfe9609a43e85a9234a4a5ceeebdbff66e26dc7086f8e3c5906907df4dd76ea478ebeaefb330f093ceead4b8382afbbb7892071648ca63ab7b44ed2145f842fd656c7e74cbfcf721fcb47dbb31571097a27ac42764ba9dcb5484bda7a1334930f89f60145b1d90cc57c2546a8f32327da15112cec2d9eb090506e7c4fc8436b6b392eeb15a43dc076de887fcd949b90b2cd023af87e62520930f5ed493361a10b4ce9eac9d256d7fb979c76c4eaaaa2cc518bccdadc542ea61e87ca8a1161cd11bb9ff57de092bf98a9528d21e2d8dc14a3ff9843d0072f169e4738259831c06fffabfceb85593b99c4159350968aceb8202fe6190ab9e9d7d8df7172a"
            },
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003401Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2282e82ce33edba0f15b579a7efc1bbd7966884c4b7e85d434c0bbbb4ebb682851a9744c7778f536c3b4c8314b89fe6b64ad4297b06937a3f2a9640530f7ffd5c507ae979bfc1935179bc3c77dc9784d24c04f10f20afce05da6a0a77488f83ce22aabe1aeed3e8c54781e08f351bb666efcb60e7e5c7e4127ec1374b962ddd5b5cbde1278676866200514b4ce830b0729ce36b6867ff4c80cbcfb1e675705bd36990fe3e523522e8f86ca88ebbf63689ce44aef1bf18a7a95ddc3e731d6cb54d9b1ee899058688baf753862771234abc2b2c35b09d1295912061d40f0bac1907f6a12378bbdef4d38d6629de98cb176a2d91561252a12de7144852fa72e26e2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003401Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8597d8d5539147d42d5a26a53fb7a7ebb0b05f9ccb59f9aff72c278b518781d14b06e40b84be74141ba0fffc3118daa205411920aec0eccc970216ed5ac31a00295bbe7a4c739a4108a6694c3b07e48472a7cfdec4d54462e8a59ed91256cf4d341e15acc28e492d0e8e65be34bd9bef35e41f3f91f41d4de85c09bcb10eb6673dc8dadc71db2ae2f5c27024f3f13e4a915923e021f8c70e68beb29128abd8c9ed77f017a1a41474cedc08b9c85527d5485d1f84d88a037e3657a3df9d47af33dee30b56740718c8057425d9cef72563fab15e04345c11073bac6915e1dd3f7ec4cd7a406a1cad2e4265fb86cf3d14d18383b2aca0ab5b65b7bbba40116a1e50"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003223Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=89a76a358d9a7538437adda9593886fc6c291b26d4454ce875787d00963c4e34ed860efca9e09fb8514fb8a53e0ae9df189a64f0e555bb4b7bd8b536478653e92a5a8abd29c881e6ccb28ca31b515ec5ce8110efb79dd5996fcbc326075a32eabfb97ef0c076aa4b64a5444e13520e0b64637a161be22a7ea59fb1822e2a6ec625f44fccde7f99d5ca863cafcc98381482107916ee19c1994392ba544ed040dd40034b3642ff2ef0acd5a261ff7b38a4e42130e402794d99bf9a26b96af4e90ccc8ddc03c6c6f089de886512dda50350721a526e5018d02661683a63c78671552403f77500478460065ecc6e5f161feb049d7a022c5614bb8a9f493fc26dcb2c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003223Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4ad848089e78554eb189cc2e71c9823f612b6e9aa445dec7159b671e309a88023e521082cfaf6f0896ba002cfa43106fb85f8e4da748d8c4f302d3d3ebee8b650cdab31071b6eeacb0fb1c6453f2e34f8143128865797fe82b2cd6f51540d81065e476e7875316830abb1397af0243fd70ea015c3b4657f1842106a91cc34d255d69a66e303991b3f11c0585c5535815b9de7537c79dc6ab1a0490cb7fbb82cf07da1733be3e5fe8d962baf43742d428c1424d3238e3f531f6a1e2624bdacaaf2960b260c27fa9f7270826b608d38d4a309b726454e445d5d8de8c84a6d62552446e056e745f6cec5d530c85a80aee873df674bf06754a1668b67784d623e00e"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003151Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1071d809442f33c6c4e16421f36690c8ff67f0f99e40781b315244cc5235d614a1fc8c02613419be76ef7357f0c759e41aead5c1337f3a3fcb662149fc14e481a684936b9452679956100cd39c8f70eba7aca724d00a3ff8aa444851581005b91510d6719417228f7ebc2dbfe6b9f1126353de1e1c4861f4e2b81c764ac2a76bbbd6d396f672cb078167ecfd47691191d8694ab135c524e2ba4bb79a0a8fbd9ee5fc2a91c58e22527ae5a24e26fa7148c780d1d27eee966e1b3f81dcdba652f14ec21b27cee9c7cd30c8311c33add20f973b5742d98a56695a35ed22602973c91263548ac294f067a159640e4c66cd260c6c2b8b3990952ca2bf951586cb439c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003151Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9f510e0cbec5ae82fd2fbe8f190ecce18e6f9b5d2dc49f9cd07ec5db2d78f32c9f4ea2220a3dbebb7202199437c685dff9b230f51ee9183ce8cb54cc30d1140690398707bb8ed92d78fafc0ae70e1625a75aaa868c7de6f94788ba5bddc72b7c9fa706caa7c2b8421b8eecb62c2195bac60c7ab70df8efcc3cf7e115fdb547723fa4111540fd25cf542969dcaea7aa34fdd8ea0376e2804236b903bea211a9442c7e4f0c8c7a491ce91c77337ef54e383af2ca56c89f2ca6aca978fc13b97fc40e6da9d43e7a488f31958eb208b0ceecea2cb0c5788fcbbfa40e2f717e72384989879058e33aa2a7f157bba13e3fe445bb6c15f36ff564ecaa0084d9a9a78e56"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784291,
            "nanoseconds": 302000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784442,
            "nanoseconds": 489000000
        },
        "agentState": {
            "status": "finished",
            "id": "astate-0fef53459aee478d"
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-504406302a7744c4",
        "screenshots": {
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003041Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4decf4eb0480574d181cec62ce1ec489c841d5f4bedd34366370e353a5cb1b05a022ab169a5056ee0675f15333294506cabea26131f5e3dedadc017553cec6896a814c7e84c58af9dcedcbea984a6052287ac5344fec9f36edc95c3387933df2c4fcf1285fa0ad9fa29cf1d1447936487b55f80d7895c06f881302431c0eccd0a13e23ebfba87c816f2337a32389d856aea0823991b66f217cc73ba31346384da6b829473dfb246a0359a1a53d854d3d3ade68ca1f651ad7d02d4420f34a203c6fb88f665aced201d87f2a81f69c24367527843b7aeedad24ab8487dfaeed95666caa5e9a549927c4f63efda750f784f58a31322a3e8c0cc89a90e1f3a15cea3",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003041Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0f285d9bf58e5da68a1cb31a152cf977a12459ec63a961e350966ef34eaf642dc93303cf8c5307a55989813bff0d2dc24b264063535c796be8a16569c7a333fe620151023311c28af5bdd98ef14f72d83a11963604f3f08f81c4e78c79a0cab66e2cf67fb84feff93769932d1bbe2915079323b8f36562059ca10f5789c49e83fc6ff7180698d6a2a6373381a4213abb99160228b57bd044d6765cbedf01d0be50e7bad654057fce3d3c9c81923fce14f0f922cbfee4c6454f083fa156496dbd8a2b2f9fa399141c430da63d511e08ec2e387a1655acfdbeda36a7dd2477f55962f6263a0fb4e02f1c9918e1dc538e8427601eb89ee84b558238a7902bf0c954"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003048Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=28b3e59ed4a74be9626b41cfc79e8c58c5e8511fb459e439daf2fb947b9f19d07bb71b6fb685213f8bfb81b1ba5dba4a337ec70b5079350007dbe80fdf7760683cce5abb6caacbfee2041f7eb198e57e5cfd6bbf196d0520004c9a5d6f1a9cb368f672237af0a24b3f37c89264f67aeb6ca06258a2ed69da547a19139bacad6a806bcb0780f1c6f38b58dd61203f133d9ae997ce88b376379afef0f08094f35a0a68f23a7cdad0e284d09d33b88d93002055f4a7605eed58bbe0285060d9ff50205992b54cc5aaf012cfbc596c54852953a24811c238fbc07184582827b296bdf24f7634e83ab5cbc1b32f2484f55831e5684224d5c5779f0789757ed680a07f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003048Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=10a488bc72fecabb466af6c88963e3a126137732022f5c3b77eb959af487b85c68cb3af66ed84b749f0ec409026f6c5b5c867786fa379710917b39176ed98c424362d9be3e7a130f907c1810cd82b5e95a4417058e20cc1e1f08ad41596b8ce84bc9f3da4fd3bdaa85939726c1112eaf2da682c511912e7809fa9dc58ea94462775d5f882d3cf0164041e5a87c90a822d1c78ff0620d8d81a7db53a370438617aec78b7215e326e486a690b4bef4f41b9dc5dcf663ec8d7e499f83ad8332afa78da2a2b2bb2d89a46671333103dd95a92a53d801277463405eb2331d0d52f2ff9e201cc72be73b00afe9fa103f642228ad9c1553734f08b2f11bb6e60e19a925"
            },
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003214Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=356730b3deb52a5b708c89585bcc683bf398f039bffdd47f101f5a85f04acd2b14d181774bb9d705815bfadc734ad0d5151b9ed89ca50b950de4704c49769c35b7a4775dba3783b9718c6225ac554e81e3b4d1e3ab26a94c21f268be87d47d6f137f3860dc0fbf886c2a6734cf58ead31aa12d546e9922dce05eadf9907056b7e6de7b809803c2557cb812b5ac44880ec4153edfb7ade40469b6fe348ca9afb9f949ab59b44ae7d9aa1ade89e2f116224d38b1ed6500b2bf6059de2581647b6d387f5e13bee8b5c0056424059434c4fd567012ba285c60eb64da2e0e97f5d36d3ba030a0795dd982888aa6e9d98bbed16222eee575b320d6c57ed1bac29308da",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003214Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3457f2007062da03b2703f7e6252a4afa8c535797f74b3a986121d2dd3fdc503282c0bda82500d1b1f04a1f727a07a6e017748630724e8b7b347a3c5dc5641f1c006d0a9bc159737950c7149093ce28274d61b24c493fe291ec4d79b08a191cbd0770e00cb8834852e758f41edd932d79764ace4e15de9b16de07bff32802783848d86e62da8e16260cce2f648eaeff0927a4e1d7490e151a6207717098570bbfecd8ec3efa564110d4b4399f458cc9f081f91c30baee37528dac70136ef6d9249f2afb975316451398ff0e2bfbc4f6c6a14a0b20f745406575114ed832faad3ce1b6d816f77e795c25d539b3156807fa740a554d4ea3a09796f242fefa47648"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003143Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=676ddfffa3dd316dd3fa16af295b1d47e7e2a53102c40a5a66f5e664888dc85ba516b0c46510a5f0f9dd44af3e2208cfa9bb14994bce2594aef768efee655c0e1464381a43670d1e5335e2daea53b4da9f63266d665e01f4301fd948523cba486a0c021e749f4858b388b83e96ceb85ed03a562fa6e0abbae9042e3f62a4b52983fe3862171f476557d5e2904f04689b92470c729cff4f578438d72529eba8f6117ea3e6de17038723d625f9a3fa32dad2e8a0a82ca83b82c3818a063fa4f9cbdd8cb280e94081d57d46f42bfab1d1aa9f09b6612616f49346d5eac8923ade7f1851e7a64dafc11574cc70e9e37f15dc8792765b09cf4c1f538bae350718fd45",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003143Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7e83d175e53a4f02d799e6f5c3a6487ca4295d2f91798c677e36339b94bac4a3d6168ca074fb96c770df181213017cd36ded03382b4ff7408591c890ae371a0f272af8de1aeca3ab81e370eb1d881732ee28f7487ea69184e42f1510a0df4a8fda40ce64230356f23b1337409b89cd2607d25c33a11d43f2404dd6571cec9c84b15907a3d3a2ae53108b29a1c71ba8756126d91d228c75820f6e234c091380c55bb04b609c19f5643f38b6042aeb3b30432ae70af4b10d6d7b471f184327fe653f1c368473b861fc00a7ebde0092f5331556403d77cef1c5e38b2319913a745e713bcf6719a5d46b08b26a3378c2e91906a5ea20b7497ed1df7d190b44b35935"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003015Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ae388805731f124ba10e082976b2195c4bc53c4cb79c927d22af57d74af3618e4a67008617de3ad96bcab8360ed0e6a9d9ab2270bb41011c9ca1ac2e39e1185691263e5e87bd63a20904a48365155a2207237d4699783289d99ef79672b9c32fbcef3fe4ca21ca75ff6302fd8290286a53f744980ea98c174ae5f7712b9b7b5d827f3a3067d26a753fda3940b3860ee682458c08c6f911ea20e8ee9add0e7de5a99962e2eb63f05c590f391c753a4cc3b5aac6a38842b83ef768c19ab3b7961a4a8b7a2c3bc41d18abcd88e41513e7249a1350b21489c75e658d418a50648359f3eda77cd6996e7866507faa73b829a7fa041ee2b2f232f8772352a10700b1d2",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003015Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2b8ee00a0b073f6629c7567d8caecdd7e7f06a69cdd064b53cd87f69f256f2f4088d5a9b1b26794cfa8d2d43b8aae8cf01afbfd72f4251737729904ead51caec92c13537da24d6665ac6784851b1d89700236864a77b138bc5bb1624aa125691a171e843dd52de1d50f6f135c22be4d252ede62873e7be9f210c4efa149c1c10d48ed8c38fb1b06a797afa93d00f3d950ca902f1b9791df4d6c7fcc53542d33c19fa222af23313a6ad047483aee662d68d5a2f04fb03e4f475c0c12bb0b286b021a0d2a5c2f1db551a2d13f79f9428aea765a5c7612eba7136a10c202be9e46f5bda0c74776fdfd4261369355cd9cef4c6579254bb56b914f49503debc0948fa"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003107Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=455b5629749b8275f6a8a6e45658456a5a1e34e4a8b7595e96ff4680a17ee8e3522fdbbda8c8c7dfc10eaea609942d2c6c6d7904c698ea323524ef8e74983a590e432b6d93f26ef2ce131e77ae20e9b08cb9785c21f166224ed11b62547e08fd698caf648079cd8eee8745a3b8d4856ff84b9e17735ed064afbdb8509e8f89b3eab0d4d775a7064f5bbd3dcf0893b62b47889fa48536d4d6f4240bda2f5dab8aa770969f7b5a484e7fb7f79074fb99415ad7d522a087ec3b05631aa3ee547b5df55159232bccef1203ac46aa6fe90e86cda264c0367cf3b3e607621777ebad259d80a0e47c4f3b41a708c2efed32abb9662093967b4ac56d20e8901b283fca10",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003107Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2f47a224685e9429baeeac0ad0be01827f334ac921903d1a35e48246d9f786de09883afb56ab237061c8612ad2a69ac65177658906387a773e3cc267594f4304f5eee93b8f945b7a7f7aa3d138ecdb4cbc531e9a2a8cfdf8c8b08488c68d47e280ff0afae35784da95df5df8baa484af497b5d088facff8d5355767cf39d27a3aba93ea05d961e932f1f29059bb482bd7e32d802fe79e2bc8876f5eb6115abac87d02cab5a33c4ff770dd68e4bc4f04ec9d23ad67e72ed5a2c7252e690410f9ce9875a378d4c23a43284faf5fe6f11790b87713689360cfe826442dfc7e3e03cb8520fcbe0f4773858b6282176620cd03823cf091caa25fceb8196126ff9e227"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003205Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=00ef4bf96b6543c47f8ca35b408c7c5e9d7565c46274fdf55a8e75eda84cbdccde97026a173f5767cc32871227faa8b6d7f7dff0b49f55ad651f0ffa1d5efa09f93d0dd8fdb24bfeb9e91b785de2acb1b02eb3890682e67f73fb745a6e4f7eb8232ef6f101789dcbda0ff2c9cdae03afef8c2f2abd97fdfc03a6d10de7598ffe20109797b05847bab3f33c216753aeb3c25251cae44de9e7c32b03ffbd3bf81302e3867b3b99491f1dbff97081eae8704615223f658f6cb556b4edaf290bdc5ca30a959696bdf35ccf7b0d6fd19ea23b70f97881b8813f31e653efffc1d56a63fac618f161d9bdfd997c6ba7d89ded4eb5f1fb46f52cf112e31e0828d7267054",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003205Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=06a4d74289dac8eaafc1af052d1348392c51261938a31c1be6b44340be50117b3229af8d0941f3840181bd5a9e570805f01e99839350341c83f1990dda36a5747875675236657b70c43532a56aa2ad961c31938cca983bb4abb1b5e3bd09bd71680629c4dd1e33cbb0331afef18c96ce780c0a6f91c7b2025f6933aafb89dc9d3fe20c5d8a64837345af8aee61aae2cd85e67d029cd4ead2ab968bf4b841a663f4edce5bee3f7eac70b592a5db2c674c570703ba72004c8a26694371e97c42e4be9691e1c965fbee6a6a56165bcd3040d815069354977ae3e8e31186836fbfb6e07b67ec78a6dd1ca9944b4b4a8249029a637bb70336cf32501488a6b2327ee5"
            },
            "s-7": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003157Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=523f3c50d2b115074b8c73bad3ad0f081830d17ce1031f7b6fe1a5a1a305ddb7b08a62b97bebc94076d1bb3d06c2283ce123e705861f9ed496da10e549de1d966507fb10605b7b3bcd3342b405102425e3c36228c2d607cf505e4fc6c7a86a52f79c6ac2bf5668f96c8b7129abfaa4b7649623e6c620753aaeb9928261880caa06620042cc4a1e4c1a71b8a4143a937b0db1f6fca009217d06ecbc9130a6e6c4971bf2b1b5effe144803e4020027eddbe848eb774fae4c497e25ef770e6f1213a2f913388647026b37a7e23aa47b81ceb8c6ba4c8f8c6e28d74f727e73a9a0c1a0f63ffee366ac787812422107f2901f967ba0e4115c8bb2c343c6ec7d0e7261",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003157Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a703d4f9116a574bf3cfd35e130147218c8f83726f29a34c3ee1950dbe207c850dfcfdb03cf21b482670f3484a05d52d901f5f720324af0a9f66c301e22166f2ef85212d33c79fe23bb6f7e50e203eaba8eba398fbc3659b2103c69c3f72560d71aaf95a08de4f88508f4192080ea63006fe1bc7e0d7851dc505603be0848e7965dc859bb16faa244a00cdab9eef9b3d5a4aca5db11060f5017775753bc373783143a4f88429df58cc2fa062fc9082b3a0a6337c0ced7c266e9856f1cd31f598f18509d27480d9eaa28373415dbb4f0f0c72f89e3183d2ab5af8a123fa61eb8788f556d749b11bd50b9c57949c24e9503f30cbbeec31841680987478ac952da7"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003057Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9103c26f0afcbe4fcdb15f4d72caddaebe25363e88c7a5ee82ba0cf9a856453d034411d66fe35db4ebd13157668cb9e31eceafe48878ad6fefe2eded4fadc3c97230e1f1e968e56f087d96e3029ce8dc01c574e85d239970908e96e74a1867aa7702a13f2c4415113c5b49aa57755e47956e48b481582aa32a7709933e536ffda47b3735bbcf6e4abbbe57dd7dabdcb1ee549f090a3f826e764c1d598efca20b446607e35e4d2884afc9af208f5f539acb1329b0e73157fea5546c45fceb2cc4d695cbcd84688cde776a9dd4221fdffe00a9ebb555b333b26506ad44786e6013d7c71628442f7a2fa1fcabf03a9790fc4744d7f570036d323ca3d9f20ff175c1",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003057Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6552ad024816ce005c3cabae105a06602917be37e1a755707809195afb5fb582e35702ef41bf23ef43d5a932e79d919c5342060526eec3b612f3fb688410657ce162de4c47b2052f66135a268c71a7072fb7881c58323cb220d6342d0eb6ea2761264ff8435aed11c7bb3b14d0654f517b903d9ac813bba6a361ab58652f84f00d10c6e4c2980536077e8d97a1306561f6585f3793f9e5443547bd48d48ce56dd82225f20ba695d0436731a07fd888e7b0ef31f6a463f6fd321c8da78656a08102e4e3a10d50559102315f3bef5152e8e54673b982dbf599f2da732f6387abea1b0f988b53b7d15b6ccd2ff535dd8b591be0664e00bce78ef601825db0faeb9d"
            },
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003150Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=31ebfc5d47f3a9a3dc29c15f2163babfa9c038f723fff9f222f39e3195aae5b8bc570f70accadb3813e4189109856257f6f91aa4cbda30fe4b91458b05cb4b092d458e74aea7a4d0d4e693abd4fc944a5a18ba5253a37c2a4960e590b7cdd7205a8cf5c035d812aed8427d1eeb1c981359f13b88f0b5a0e831fa61f689a83e544065b019c6f692b6e24bdbbac969f5cd40e21ae3e6fa2f4689cb361952d97a648dad61130bdd48c331b0ffcd820e43a479da265dba5aa4e7be8b0700f859390b88cdb19e2a83b7ab90b1c2916f43bb1d5c79ecaeba6158985e4c4b1dd5fee8bd32b941bb6152ece5bbfdc1d76fa0811eec34ac9f83d259324db71cd6b83caaf9",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003150Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4bcc0dfbd51961b32ac5075005e83b3ddd42a8d774f2e7d076ea91e5dcb8742c936cfe6fa096b877efa7252b888a5694fe55e2e2bd66785ab28d0949c1327a1c960d0bda0d167a9dd9115bbaef1efb8083627412dfd2452a1078bb7ad9010874e451bf81fe092670dc595a75e40dddf8c5639980f4ec20246d1f914234d225b37c4841ef64c2f6f1e24c45cea5d06f5aec973d4f7ad9158dd8135c2d3d7f21eed13697884dbe8a8d291d4bf9b52e215bea245ef2e1f7503bfe7e16a71968af2aa203d717a16a2372a5e5c730453956a6a2c9d49f445466f10844aa91148da513fcedc31af85ca0ba2d23794fee59a65b69b35ac100e49e62ece3e197787a9e83"
            }
        },
        "testState": {
            "screenshots": {},
            "status": "finished",
            "stateHistory": {
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_6": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
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
                "turn_7": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_9": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_8": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "id": "tst-504406302a7744c4"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784202,
            "nanoseconds": 109000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784335,
            "nanoseconds": 704000000
        },
        "bootConfig": {
            "id": "bootcfg-a86de940d5434828",
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "emulatorConfig": {
                "id": "tst-504406302a7744c4",
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "endStateMemWatches": {},
                "gameId": "GZLE01",
                "mode": "turn-based"
            },
            "agentConfig": {
                "maxIterations": "10",
                "temperature": 1,
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "llmProvider": "openai",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "contextHistorySize": 3,
                "taskName": "Find and climb down the ladder",
                "model": "gpt-4o",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down."
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "id": "emuop-e59df391b2714891",
                            "name": "<",
                            "hasLeftOperand": true,
                            "hasRightOperand": true
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "pointerOffsets": [],
                                "name": "LINK_Y"
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    }
                }
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "agentState": {
            "id": "astate-4db5807301ed4511",
            "status": "finished"
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-5f230a97c4994e95",
        "screenshots": {
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003223Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=018198a476b6606341664b7d82c9d63d52eaf2b4492867c05d7cb3d17d860d921e5656e8e5d89696300d6120c9554218fab09c70d7c5a234487a5dbbc161f3bd5e2e314e0191d3da3cf4daf2573fe347d32f0fe24d4c5208be472bfb6db06270d98df483903e682a2a3e4345cf3178667d2579c6c4e0dffba6bd53037a91f72a059a999472bac7a49188b66b7cb36995edf55a500f6f79bbf6fce3308dba8ff7b0f72be5abcdc4063cbe803146b27d05cb411f42b16c8d639dd372cef9fe40bad12c8f3cd821fbef60b16b7c36b5e30140f51f1fb91612cc979dda0e89082d5d496cf72ab9800d9e871b40692e7b6a3342422ea111e154377dbd14b8c1377776",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003223Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9fbe14b1b3bb5ed04c682a0acf3eaf7fc681a8cbe478a3b81752eccf5f5648a16199b526a7841e6d2b72019b80723a772aa4dc24dfc123ef7dd6500dd48b4745669d57d106905d2d42ad66112d76bfa748ee46805b0934ecec1508fa2480f8c415e9931d8c5094316c037e2d8bf3ceb8656b00eb3eb0d558ea73d59dae48e833f4a1d8dbfe7a7799ac56f6d452ad13b4f06bbbcf1526624fc738ea8221419ca7db97bb38a82171fabc6606cab1fc08ef8a50e5f6418c087862e4d15578a05e2f4751cc12a735739129c1143f3ee5deddbba7587e0eaa4f764990e9c5d6b267a472cd571f3adba19477f0fa94f2e6f06e14f886e49716a52f87df14b8b50b2fcb"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003154Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=57f8c9ff0bf3f7d43bea7dc0092a8cb21e127db6aac4899487c536f1c6ad470605044c49e6272148e395da364238e278383ae29b7581c0512d2dcb034704f8c679d435cf1edded2939728958b6101e1c4376b3d30ebd83ca949bdb77ab7b5f0ea657c6acb3f12ba296aedb5134b45148c5637b0b4e968066480cf9378d0bb115895d142a367b58cfdd56f9eb1e463474fcd243050f22b8a90ece4944e3172a618af99b275d1fac4c21da9717d62956afa5092aac452945a195e02526ad36cc2430660f81084e3e329b37a421598a24c35930c569d9503915921f1bb5c5ef9c8190ce7596801842b7d18b9d328183f84ce7e6565418a71661ec7eaf7824402371",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003154Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=48ca3a9a22682e3e1493d1e15bfa249a2b80047beed354b3290e6d308ccd100381622e5c2c55c9f8cabe98b6e0e9e02a7ca6ee2b88276f9a225f4f7b60f21c3e252e9cebb1f1bd82ebb3d589ccf67524a2965610d51c8170043fd262d612c16ff51a51f392616c999ea528aa8e7ca8d78c5343d8dc7dc384d95e05e1ab2845b5eb6a6579f520cda63315e0bcfc8e2500ea22c59eeffa7c6eb7251d0cf8446558ebb5f865f6e2b8dffa5985156ef7a77f34f9bb36f1b37866736b03dd5530e4f472a87b447c12d58a6a5caae9beb26f91364a9b89ae173e49edac8097515751ff3b492a61977ce9b4c9a7546934a81665d917330e8a2a2761c736b00ef189c223"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003213Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3a32a6d8961abc04c8ac3ad84eb995407872e3c7cf056ac7e2de2a26dbb8dc4cfdf2a29317422ec300ae6e5ab157812fe3376de4f32ad1a343b66112aa150f0a37c2fbe2c630ad15b389b92e2e13e9c1361c46a71ed3b1549b0d383565a3cd85c5d3fc2a087179696b8c5794cfcf484179e2f64fde04465057a31a48203581629d5b8698e561421e494ecbce6f30a6ad52bceeb4366db597993b1b49cdbacce24bcfb957b26c09b8367d7b6f0f2f6b86bbfd9a4d8f5f2a30d3ec8eecc58573b0dd1649c2d2bd8fca434a8f6655eb3d9ab2011ba54c7666797886edc31f066bef5df1d67144a94cd4176d084afa5b0ce2fba55f958aca93e647c934ee4a8fcba7",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003213Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5510b740df4d88071c5f797282aed877ebc73040c0eec0b37ac71f4f436ccf8de435f492c9037afb23b0223b722eb8586a90a72ad538be15fcb55c04114923ae47bae321ac76829faee4d0fafc83625cb5d729ded8df9978c1bd0c951ab6ff20038166eebfbeae65a991f4de62c7a4063bd5eb530f1ca3a4a64c4be81518ac6fa73abf8f24e5fd24662b07110bf2cdf376b95630f67ccca6453dd7541e69751f2baa8b639d4d07800ad7c1d84ff607bbd106c4d34f17011ebbec06e3579ddbaa7d41378eba2177b096ee5d8b6cdc93028afb604a967a320d04578fbd6ceb581e245c2967f1b3acb0e23b128e1d472fe0810f28ea08539d0f6dddfb010b73dd1e"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003322Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=192302fd43b9a0839d02cdc2da58f95f86323e88235137a603ef45a98770ebf27d97c5b9e322b128b97e744bedf134f031c6f406401cb1e29f518162c78560b2f2bce763c231b4862418315f2b4d2c0c5e48537f9b3dec6338bc3d81d54806b73a62567ea06c7704b3f56dbcac45095653df0a7d5bc1980c67236f2edb4036e5a3b0b08d64e274b3ac0f62f56bcad7d52db17e8af7b340aa511e4cbc1ec32814197178cb27956802e0da39ccc4235e6829e269dadbcd1d4f75caa0b453fde2d335caa9ab5388e58329c9c29cd4f0907f4c49181b21fd0062afddfd2db2a5a8fa8f31184bc18b68cd40639a35b7703afbd280d16dacf6b7ee22bd4b613c254a03",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003321Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=52d4d88ba0f726b0a9436c102e6b1dded0cfcb9219834cf9957d182826a4bddbdd3e2b0637751a0f0d71e9850f052440e50f65ca15b50a4e9b8926438530c33da263da5c5fe883fb15642f1f13780026e9d78a5c53a02a1db32776930bd563fdc0882301ed608451ad227563e67a2b9b0db2194811adc4cc6e9279996d4102c51166e5298f3963ed3f9bac98081081f08b00902d71546bbfe95c065c5749da9ca48ace768b4718937d70b3c7045c51ed76cfeef34d78546f4f949b33ae7991312a6f47f74d7528a7d9bd3aff462fd4b139a502f6ce550b65a409c561070d29d1ca799ef5dd9131afa1b47f45f8d5aa8d43ec4ab0b88e5436651dc19714e4f7ad"
            },
            "s-6": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003408Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8eae4060d07e1a878cf535bb3736bfff08618809b8da5d46ec63fc647def24c886cabf723d784a7dc7047cc4c9fc4a7afa336a8cfe7f519bff3b30fd94b70aaa924b9ea07e941171f46fd66619931921d616ff1db166eb52682d76cdc667762c3ef50e6b1f3cd39502c0741abc094366c44a8e0e21cebad3438a10f0144ade390956e2efbc6f394a30e8f4033854c5f9c4700f6e629deaf2d4fcec36a4db89d10cddbeb2f625210bb2a046e96349ea554e29202e281fce1e835ad6d81f03f37f1bb169fd0985170b70c81798cedbee6ebebf158e4e0b5b4459a8cdae1694a86dda5a344aecd0e7dafab651f84ff8209118d699118f4812bc40d6667015987430",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003408Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8d1bb1a8c76eefc446a1edf04cc587886364a44f7676ea9ca164718a2f3f9c7d84fbfb63e5bc0f9dd386a2dcfe72fd44eea85a18b3b6eaeaefb97f37096af4949184a9da8711afeda18b81fcb10938f54431b929e64012cec422efcb3d42da9ad6fae902899756c8ae53b17587f86aeed4059eea3a87a96e370e9820d3910d81489ed83860e32cd8b977001cbe1a5d3f0f7c394b4a593c8918c1dd743ea1c21126f32ceb9eab85e21dcc7012b316b1a69128827fb07636915e06189c0d409c800fd293dcf1142c92b6b118f9cb8f19e2a4687b45385dfec96ed69bfef70dca87ac183b1ad4e0da94e1db2c3d18256626c92aa63a0684108ba3158589ef3bedd3"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003234Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=079582b06f96e8b10b6e3d8365ae5cfcbde4c5a0d65a7b5acda4572cffe1a51aebd8836e15ba46ea25171415c51a22f9d39a5baee258b2d53370a8a062396746779d74bc7e6e0079f6d32f9778886153fe7936d8d9d64ddfb8c24ad4c9290df4da1b524cd058db56146b314c93185704bc6eaa2ce36101362a2cb35e7d7fb0883d61a2f554bb7d02c37f3c07b9bc2aa2ba3936ee4818c00af8e5d3ad6333787808a167927858644b8b77fdfa13c0c8eaf67a7fc287275edfa1f7c963f2aef7fe745e1bfe263b8f541efd2df2eaeb9e6857b706dada67d78c360d6df308bdedb22e664599405ff483c2c2e774ffde4aa8d46398f59eebb3d57f199ad889f7fe15",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003234Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a3181b1c80ab2b91794caf1cf9aa15e522fd01ccbe5ec99a7535c23c657fac6f842d7a039aaeaa996c23e94917f828d2f725caf46c1a10b76a694a65fd1e312855939e6b50a72970ea796a60df644459ab555b4e122384bc0b5c8fb045daa27abe129c2ac24e176db1af398695e420ac9ab45a96207418e3a9c7f72521a87c7fa36d43fd4ceaa8e27bdb547a7135e0f6efd2ba5b3e5c174ad99b724143b172be0aaf91ffdf7c037b2d72fa8b82a98ae96e8cef8c3a193c57719175507316c0fd9f00b8ca5b4c679bf35239005936404eaf486189ad769837b62e260d23c3b29cc469ec15bcbb79ba355fa3be6e15c7b9501b508f8acc394d9b7842dfb4856fc9"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003238Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8ad8d9de32249e9a63ce3e1333ef987ec6a75464abea41fa5dc57e601191e48c6aa672e0f494acd822a382c1f278c950eedd3d52228ddc4228b252b4e4e4c6554a9d49f88f1fc67ed83083fd2c515fb8ec8a1bb20ecad16eed160654c83e8d8a6ffe91fe329f5d58c50e3b91bf3a9ca6858899e2060ba8c1df783a6015101e8069361435cf8f1eaab19212a5ab2c0fb9f39f34f7436f75f373e8e4775232cfcb7dcc4d65a0ea63fe78a1613e221ce1cfcc2c929e97dbd8268f591d0bff29fa71692356233a390f4b542a8a38edb43407d8a5162dfc79ac82cd25976790c3ad2f4dddbeee448569c4ae1e2b9c09db1abe62f9e4b2bb2aa05d94cb90858d1f3c59",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003238Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3816564965f0370ec7ec8b697cbc5b85da791937d780271ed4054af15d66d9303a9907a9de8fd59e2ab3c7698246797a1d375f7960a285db81fb54bd3ba3541240e52247a9660f8f09b0ae25a67ad8e9f7575489bbbe8f49d11468bcd7e52cf5b33998a39566de61023f2a8c32adef932d28faa3c3c3c211b55c121ea6b52dc9b5412a2ac207b80042e9f2723a8a6fa9a51585c3241a1c7ee09ac0237f59bdfc542a1518349e4a6eded446429731837ea0f0468905eae5fa99cfd0024a52b95151ded5df7b1d6b36863f065bdd9341dc3b91c62867460a3307b03dbe70453bbfb7a05fb1c10894d643797b058e270090f33422ff983644dd38d6a6a723f941dd"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784283,
            "nanoseconds": 2000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784490,
            "nanoseconds": 320000000
        },
        "bootConfig": {
            "emulatorConfig": {
                "mode": "turn-based",
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "startStateFilename": "ww_game_play_start.sav",
                "id": "tst-5f230a97c4994e95",
                "endStateMemWatches": {},
                "platform": "gamecube"
            },
            "id": "bootcfg-1814f6671ada40e2",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "name": "<",
                            "hasLeftOperand": true
                        },
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "rawValue": -1,
                                "type": "float",
                                "name": "LINK_Y"
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "experimentId": "exp-d7f3b57db87b4310",
            "agentConfig": {
                "maxIterations": "10",
                "taskName": "Find and climb down the ladder",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "contextHistorySize": 3,
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "temperature": 1,
                "llmProvider": "openai"
            }
        },
        "testState": {
            "id": "tst-5f230a97c4994e95",
            "status": "finished",
            "screenshots": {},
            "stateHistory": {
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
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "agentState": {
            "status": "error",
            "id": "astate-5bcc0820a837472f"
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-70c666eae37e493f",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784332,
            "nanoseconds": 410000000
        },
        "emulatorState": {
            "status": "finished"
        },
        "bootConfig": {
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "agentConfig": {
                "contextHistorySize": 3,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "maxIterations": "10",
                "taskName": "Find and climb down the ladder",
                "temperature": 1,
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "model": "gpt-4o",
                "llmProvider": "openai"
            },
            "emulatorConfig": {
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-70c666eae37e493f",
                "platform": "gamecube",
                "gameId": "GZLE01",
                "endStateMemWatches": {},
                "startStateFilename": "ww_game_play_start.sav",
                "mode": "turn-based"
            },
            "id": "bootcfg-e89181a2168d4b26",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "operation": {
                            "name": "<",
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "pointerOffsets": [],
                                "name": "LINK_Y"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "experimentId": "exp-d7f3b57db87b4310"
        },
        "agentState": {
            "id": "astate-9bc04b0129274f94",
            "status": "finished"
        },
        "screenshots": {
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003430Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=34a47646bacc03b7fe6dd01a386e501f7202c623814f2d48ba87e236e7feb4584e760109ee990b2ffa1e49899fc24bd9bb0690846202f1ef88e83e308595bba2728cfd8ebf64bf018d76023a96aa2cc054f245d9f0d6b6e8b7222b0e599bff17a9494b651b693baa31f776ce4ccc77bd879e08c850ba1345c50e55506be8830ef6ff36d371ec66496088240600ec7dbbd453f1d3af6cb82c1bbb0c5787f9f21cf91a2ea0370931b87e21be1ce89b8054fc1cefa8981c4d805077b3b524c76d0164730cfcd3fcc67822d0b8af157859d010186be7163cc236d11f29976ea4360d5872efbe1c4a717c46cbe53561c5890750d0703493c7c4759246ddb0bbfbe3c5",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003430Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7a80ce4566ad26df40542cf361b38f8ff6db55417afc715b6ad364089a622ef95bb555ffccd10b6061ce4f4fa7fbd7bdc27f69a9956e2a34875d982808d035ddb20b2890bb8a90e13b59a504862e7127b6918d24dc5d7604ec9796be6fa1bd849d52884b98d6ca72b1caf429212497d10e2371482088ca88b7286eaacc57ea41f031540e189209c364083a40e6a43ebfa16abcb31fabb8dfb0ce4300411ee77545b0a6ee9a6fe5bd9c6da687a9cef1ae4ffb1955560037ba58c14a3a0600eba63e573964eb47d5403de3941dd39fab5b1fc2e14d99d1c8aed5412f55aa9545032a78e5cf5d5ce76170191b5dd2a213c7842d98d041eb2ed7453fe77d701a55a4"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003308Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2624bf0236c62738b468c8a28645e291d01210e91e8cfb594498e16fea866651dc17f231d09dcf5b5b7d24fc081c0ca3f83d9ebbf782d9f08143f8850c43ef7f14f15cba0ab31ac35a00e558aec075c3f2a0aa4da597a47e0d1a547c434adac527f5eea1632dccc50b631d86be3d97ab5550b58d3301c6041f4a1feb97c9953b44aa6ba71cf3f17d1689dda6e0d7d0f67c5d5ede92aebacbc4c0058705994b21f7b760a370c9fc363b4b427d890cca1b6d8276effd5f355f7bfa3b66c38e2f204e67ebdb1a92ebb3e180dfbcc8edb57f02ffc65e90c6b738ac86dd5a8d9c40aaf521500e8373c8b59238719422d670f938f543f5a546d1fe60ba85526eb0686a",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003308Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=89186cd8436e0136c7dfb26ea0e556f967921d885cec08bb5c6421031157bedd2828486668eedaf4e0d231b2ffd3cbfd820c09ea1459567730dfe98cd17d5d75306dc63cff0e7b685d105e76f4c38d8fb1946770e49baddf1a536b76ba85684480827bd43371f0971bab5351b4bb84c5b8d6a81d112a82127aa0af8bc7e0a0ff530e96706adba6cbc3ec1ccc69a9fe07819f85a78df68683e0cdc9a37c2d916610c43f8cdcbcc5fa29bac52dac3a474b14d7ed56c3e8d9516feb7c4d1cdc173bf24e1990a1aaa5e77a0349a9646385b539fc1d1de512b766972976d3fbc00b8ba098e74557fe1ec6f2b734671063001355b84efdca143ee65ef86da19ba0107e"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003330Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=737c4e442f3a4844f96549d0e1ac710dbe499cb225c6a2dac316500e5333e85e6c0e346d577b5fd9d90ccf697874d6c1ab5af2e87be4d808562bef236a4fff2d71ea0dd1ea5c9b1e2c1fe6c1833b6be863109e66b90b5e3be2ba1087dce8e19e2e96e8eab64623ddc66e05e896d8339edf150998bbe8a1bd9b9d503cf80c61b27b2d33f96a53902e376fb1df8091acdc4cbaaf9bc28eafd6a383267356178b94dad38b9609aef7fb4443231931209ecf6400732ff2221e77fb2acf76d92af55a7a04241783ae9f0c71eeee9dd671730c9902b9031503e81e03dc4bb734840735d30873087dd8003098f61bacf9863e1e42088bb13a50cdd2df979adabcaceb1f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003330Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a34993dc422c77bcbc72f08ad4eb0bd22b43103270e8bb27a2e8156ae9f42a819b8cb1c94f4ed95d2090676b31a60b80ee7bd7ed4b40f61192c8f5c6cb434e01c970297bc1d3b3aa4f193af2d68f4e34a3c1e5e1b3d21d057f926812babf9a719365f0299e7cfb07227f65b4ffca4f6beb5eac250098ff58085c59583780228d15ae28e44c3bbace988b708d8b0cb2aa0b446ab10cdb1b6b9398aa43d32d09953c8a32fe46aacca16dcca1bde99f350669f0a4126c1b26067c1da0168a7afc4247262f41e7aff636910ac7aafb72ab3025ecfef01fce15805c4120452ac2a0feadf313a00f385fb2faef907628d5faa31af042a59be602e6f997c8649497bb38"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003420Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1bcae40c7ca0e8be3d5176fc5cc993e16a88d98b90af49f2aa46abce052833a8624e5f78e1465ed240a2ea4ce88d93e03cfae3d8675e142859ea139c5859b51e1993ce94687cee2b764b6ec6821f9f8435ad1766015187f4293ee30911ab7b40d6606b96f51af2866c519e9e5b1aadf3ad0565bca120c247b5818cf2934d71b93c36a82c1bb5aafd8cc4bca030a5a310ae3318acda0f7a188a9e013cf51fefb8e5fa0ab332116aa01c6fcd81bc4ebd0a1237dc8d3c2595951bff225b8b715861151d44d6294ebd069a34aa8736ff796cee7e2d6f989fde25ab58a317c2827718e760e7ac94385fa149258b98638e19c73c1af330204050d1e19c9c5c9052dc71",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003421Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=61f403322bbe4c7012beece33967a3fde06e84c7b26e168d6b0db15e92e423dee9b7f3f5a8a7391479470c5bf8c0c2cf6bfa9bc74c64a2f2465da2587f21dec85541e43d6c67d7734eb5d37fc16bee0c0fd0438686981e954957f8acda4bcec2a37d7f3b5769634106e5bdef3614ff2dc2b574a4b1323128c4baa7043decd6a4ec26f6dfad49a8cec6d1fa81920cdd10b588a61ea6198aba3e3484efea843e39480ede05a487e00aa3fb7800f738646a7d19d330c8ae59a30b636e343a19931a17581d74236441c784e05150acf84b7fc6c24a79c40f96cdfa63b389dc4846ba55317e190409326bdfcf2ef2221e43c9723106c8bbe80f04ab6a8b69916ea5e5"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003253Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9963a3e5661680dce14633d54a13a6b1a58fdf2020b94136de78fb06137dc47c074d92a532c452f3ca15cf41a2d5788fa9143b6e497fab57a7934ea1055662136af0bf3c6da963d7c63a194323ffbeb9ff3aeac506a4b66578db379982a88386498efc8f44e5e2cb2e7d192e85235d2d2dc2f158255bb132e0d5e092996b8b90694bc60d3567430b5d96a1c70873da586b4354020aa576ad4937d368f3985bbef959fe1734685d47c31f96f89d332c0b6e13f06eb4e14aab3533c0768ed3ce23f228e15f880a515ba66fc08524f9b4bf5bb4654431c17ea7a597b891a1ae7612cc33a9b09060a8f25e7cc104d963bb5716cfa7f4a0491f3c0f763c230fb8c2dc",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003253Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4f44587047842d812ac257459a6bb2796774d7c956c2f8b0c9ff72354f4f322f331c5b158a17334025ff064ed26e9a824b478db0510d94ae7897eb66a94851e64cdfa3915ae5479082bce0d63cd851cc378883cdc2db0a49fcc7bb1ecf2dcf273ab950312bee2fdc5ad8d00d70ca7c2e837bb92e4f75a9950cdb063374676d83023b3b4387ab56dc8ba3e4578435e3e9e8f4421bf9ab84a061b306f54261726e580feb20f843f4c1f86518f0925731167d6b1859b4fb376d4b4989e9ba5d72332e714be46d8636fa3cba2d573cdf66b33038e372ef1291bfbc1b6cd245664352fc560359ab4dd56b2124a4dc47f44069271862b42470ad0a086db74feadeb888"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003319Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3c99c1bd63035d2b9fffe7e7aa43cfa2b9a9c090a253fc9a3678c1db50f0e8811b1aa7ee95af0a8e903fa256fc048a5d6e961d6ff936d67c0cc1b1d71918f228b40abd4f3e0373cc509dd3e8a66f9f62f6ccf21bf7c64fc75724aaff6ccf9e280369c46eea6c48847aa676d170ac2ed3cb550aa6de4322c20e7bedc60d1bf1920e7af087e2d68fcc197becbc04270ca0e05425547e916607f6d4218dd78840b9d124bb4802285d0fd25320a63c2c299fb9246dd89b07082c9b77ff2f702ce9a896799aefb15f0dffd9134054e8d5d32dfd7729aff865b67f5ef71046adc9aa655842b66184a7366584b27e7aa49444d39dce1b659c9e8e98ba33c71be4c82e96",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003319Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=906a4200fafb5bcf40e2ed356d1f6cc609ce0acf65da7bc47116da64281e381e22cb4406a6540b20ab6425df9da38183a204540524068fa18934f11c5d630bd9a6b9cd5c5095fa4bbe17cc7b4f3c6d5106ae3bc61c62e28caa1b1c49b6043e8e7282bc49ebb6d89de7879afe9a545c7c3ce580fefa3178cc2d5bee04140fc04b252de6e257fcce0e80bef468ce1da50e181b887d61a8ae2b441281d8bfc3179be48c4b77f2c2d4f3d8b24461981f2bcb0e4d5896fd8b95c35ce5b0db419edf311faaee539440b529358d0fddc540785bce5ab159d3f1f03a7be33b78894a8a06b50425dd2f4e3d56d6978a97bc5e166ebba768299cfc56e30234fd9ffadd5f64"
            },
            "s-6": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003401Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7fd795c8f7cdb126502800d291aac655a6e318a5b2d80b189949ab7e2083fefa4b7674b6f03193548352200572408de5d329dc0b1998ce41421dffe7eec21222cd8dd8b43703df23a11c8c26ab06fcad82a8e10a8121ff78cfa0ff7de42b874fd84a91e652b13af88c78e69bf43221d61a0c6471d5f60d9d16071a4ae17f1443473842718bbee0d8eda8b53b096c248def82593758b16505dd700cecbcae4e433023d59ec16ad458d610d3a4a2fba57867ff8e8542e322e6ae2a6f03d3d9e950447d9478e8fbff14f9b94fb041f01120fa8555e077d17f84ae325c8c15dd810ca73476d88b614746f3a2f11f5a7b973df88152d70949e648b11a16870af3c826",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003401Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7db2946f8f7718622bdb198ef9ac7607c9e2104aa0207dccc5a8dbd7ffed652503cf39898a9099e73107a1a9b4d73bd58851afafaf3b21fc4e659a0205cc5fd6fdabaf7b065624314f2d83b7b939e8795cded956e38c5a95be61730d05f4196b0c374b44a86bce3d41a7e491aba043a8f5c16c0e82e9e636bf59c6472a3a1a5d3c9dc2bb4b1f8ee286277bb553673e5d80b5756d7046566f8f747b8c14160f8e5290af6e712fe6f5bbbc30948d0d9811b58ac99462bee76668c5f607f9ffe483b71cfa4e2671e3e60e9f8826d903e523e46a8ef05ea2b8aa937913c8a6565e9ffec9a7ead8e7014aaaa7e23c75bce06fd59a3163af8f1dcdba704fbd0fd44554"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003341Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=73089a1ba5ff5931dcd146fde10cc498d91c7e659b0eb3a7978913f7080588a2a183c8793f34fc8f969172ba5a9ad6f71b18fc47a2d570a8ab35864bd2e1df217fba9ba1b749e1ce648487dbfd522ab0768baa6d620635ad3b1175bf6653c27bec4ba52baf75be381bf00428441e95c25646ae13b4aac34d76c396e5cf824d7f8e30f4b85a997f26d497e5299625facf665d796297fb9c4387d9c2eb4f744040014b687f2caa3dc319121f0c210034fb8d5f7fe96c39af45f28319175e8aef053cd8aa3c84bec80d4da09eac76978e87ed2630c317f7d85dcea8e5ceee4a5d19081c0cb11f1be6a82a96aff7ab70123f338ecabc8615dfbd89f04fd8bc0e9276",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003341Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=72126820c47d7723255f9bde8d69c4c0e14b2259083b58018e0fd3e8241f1f6da6692961bcad3bbdc967f272f6f3e153c3cdb30290c6fb7f50a53f5f3f17f9f75965396e3e95276eba2b0ad9e2e0d771d3583cc464c69a5e95d313360ddbec351310b7463d384fec6461ba56a4c58debc5025db271cef87fbb9ad49be370b10963a4266bf3608d191e72ba55df507ef564e1e2438adc79b4b41f85a30a217d8183020a3ae5452261d2851c852150e1166c1073bd410e9531c63c091c8dde15ffbe429c1b0a2dc3164ad9d058e2b13c374528b5bba660c0238bd28680306fdab8569fd981e7f5d1ff24e53787a692d58e7ef9a5ce767a14819ee5b1e89eccdeff"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003232Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3219efc7e137de20414e947bf5b5b5851e61757e6d639c55b2bbd541026037a6c993c0fbce363f6e4673bfea497b17852cc71eaf822c2f5cf2d7435677f9687ab310ac3ff4c788a45e472bfa5691a3bac4f6d9889fb0db12154226acae51682a30f6495e495691cfb356fc3ffcfc47abdfe7b34d5019fc8c0f304bb9404534cb5d4129f53ce0153cf85cb38572fc468d1115ef51be09743ec7e602da112bac41c4055456a04ae107f5c6e32a5f23c339ba965e8b01d73f1367e73291b22a0bfcf5a8742adf74645f46df0e381a76eec3e4149e2792af2765d7d186c1ed3897556f853a93680262564f29764ce6e68d604c13cf831060f697bf51fb29c10041fb",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003232Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=422b091bb7d9dfdc17c273cdb2718c02e2aa59e0b6e94a69a2574de30a0ff3b9388903a7b10cb514a64df3f28af648648f16a4097fbf13e8b967a5f91f189330bd4ce54d28b3df675800f722f7a100470954982429ec7ee1771e14606301dda71d0c00f0da5d5d29df61a7385cfacc2f3e05593ee20db46b7c900de7881b51b1ab21412685c3de39ebf1bf2686bb87427ee7f508fe9b4e97885f27b6e4184867300ab686fa8ddc22d1d6759fa86c7edf209fe3d4edfefbff194014eaa69c48a91371f3d07d54ae46422d09a55879a7711e83fe0ff163c436a9620e6240beb216fbc00da541c450e919bc812ce967e9992d3016ab1d2f13df1e4d4c1ae28926f8"
            },
            "s-7": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003411Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=14d4cd8d4bd2d990b48139bfff1dafb690ae85d7614fe468fa93398c84bd76c1d4b42a8cb66d16baa7017f30ca9cc4b60b2061a958bb825f8b68bb80595e1c541866227e8ae4dc31e9c15426b9fb630ef652638e402bf0fdf9b7d378e22923fe9135dc7f5cb70f88205ca4cd682bc20a0c0ad5d0b474adbee7eb3f3daa816324979a7e9cc857bdb693ff3dc2af019c4977120e38505a9cab973d31ead0dc08ab7408ba3f1ef803e673a3d8b3c9e8e637f4d40a0246af01020623398f28fcdbcda87fcbd26cc24f3be7603ef6dc35413980f78ff2de1f57fe31f3e5d22c8c4e00d1f0f89f5d9162ad9956016a12d708dc5170fa2b6fabdc811aacfbab057a0d6a",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003411Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7cbdf6130ae14351794466d73f3e91c8a0339e97bc8bd80d359d580332e4adfbc66b81fb7782e2738ae1f16cfd9887fa9cf180e239a67c411b661fff7ddbe2548d655c2e062da86e19c13c25e09cd5edd28d250d3dba5e8ab69d1edff1c79e27ccc17a7df845a45c2f4d5a654f8fa426e015380814353824f8474c99612cb0f32431c28b63884140dd00953c9fdda92023172a806aca3fa5fc7f3bcd5538e8b6ed48297f18c436425b16e877a30f6ccbd0d7d2e0aef7ab17da3c2833e81137298608a4856f1e943187ae9583e512788922af6c95ce368ce1e3a149d10fed0d58d69e94c65076845d8d9fc65d7bb26661b00016566f590078309cf2bee4c153e8"
            }
        },
        "testState": {
            "status": "finished",
            "stateHistory": {
                "turn_8": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_5": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_6": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_7": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_9": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "id": "tst-70c666eae37e493f",
            "screenshots": {}
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784472,
            "nanoseconds": 391000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-9bd4b798d6bc473e",
        "testState": {
            "id": "tst-9bd4b798d6bc473e",
            "screenshots": {},
            "status": "finished",
            "stateHistory": {
                "turn_8": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_7": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_6": {
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
                "turn_9": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "bootConfig": {
            "id": "bootcfg-41195e0729f842b7",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "name": "<",
                            "hasRightOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasLeftOperand": true
                        },
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "name": "LINK_Y",
                                "type": "float",
                                "rawValue": -1
                            }
                        }
                    }
                }
            },
            "emulatorConfig": {
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "id": "tst-9bd4b798d6bc473e",
                "gameId": "GZLE01",
                "endStateMemWatches": {},
                "mode": "turn-based"
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "agentConfig": {
                "temperature": 1,
                "maxIterations": "10",
                "taskName": "Find and climb down the ladder",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "contextHistorySize": 3,
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "llmProvider": "openai"
            },
            "experimentId": "exp-d7f3b57db87b4310"
        },
        "agentState": {
            "status": "finished",
            "id": "astate-08adb6bc06ba4e94"
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003205Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2c2b966f0882b74d9a9769cd94e11089bf276bf7782752d11c44d24cd4f1dc9a8c4acdb3b8be3bb60b0dc786b33364ceca1164949409e609676f925fd2df6ba6a9058dd8ea2e02a5fd17b36befed413366765dfb719706b7635bb6ec197b05fd5043081367e0fac5e745a3a4b9e9b8b50c47eb926dfc21a1bb31c861d19166de97efdff25e517578ce6a2db17e0ca403b849fd0508aa14d7680c49d90657b93ba3ed6c9f2b90ecefa38ad1bf7f0249056ac17be01d2e33672f705333e1b3d6c147cf652dae10a827bf4ca4651adf327f5a4153d049793bed2c0989b05baf769735390b7b69a63a4606603866dbadf45e8c915772450e604c3b6ef923b4a0a180",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003205Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0a21a09c634981798fcd2c1f53b29d9c8a2bb69f56625fd7fb04667062f67275e306e673470fee78e95585aec4eedf44a1399e29cbc098a3c7a58ef5b13a47369c27b02991fa04972f07e7f7289779567792f4177ddd6949352025918ddbb930afe08aa5a0613b36113661a974f1cfa06e959936ae606941336a3ea521d98455270f7d0d559aa78ab543ea7b03f283d26667688135ab1d423bcfe1d5ccb49e6e96358c03d7b047816b4d3f007891831ed58f42e979857ec61d0be75de250f675841d7437bf7afb91ad61237aac60ddfb8b4c26aac74dde4c6c981b2af58f06c0fa9d6452ec2e1851b1dfdef2ca0862c34a04a8e991bf61d3712ded6f1bd44c41"
            },
            "s-6": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003138Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3eb97fc1772c080e89f63c92dd3abc17f5b4a4699efa4622c635d296b4201fff079084b2861914acbfe2eeffe2a0f9a53dffaf5849ac5d19c5535b54331e6b78e58a094ba9637715391e2e9b4d9d3d6cf1bb0f654cefd3b378799fda524835bf02125b244fec50da9f72b96f7fecc94de72015323ecbed4e752cb21e7e552ae2e23f71ad4d1f3e498a298deb895243d17143c98efbc850a4d2827291f65ff97b9ba8001bca84e7efb0ee9bb7582e60b2414a52c9a964866497fff60b1b38830533c658ceb8143efe9425600ee53cde80086620542a00bacb4d9514c76db3b2889f95102c39a54c78062537ac74eb6c858ce199be7945d38fdc02e4b8f6ddedd5",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003138Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=999479a4103980b8e736d4255b86c2b5591866ce93c93c18a28f2519de261f62f779356fd8e98f6c8ff0c9728865aaf3c299472a92f6fa44d4bc4ed47ac35318cf395b36a7ebd41a7f5a85560cde4c2aaab08874c876972ce945d40eb1fddf5176b634e7fffe02dcc56529cedfb85b33ef48980536f48091db00c4d9f0092b79cd3c94725d55a26c6c3b8416baf087b1a69571e2f8588fd0fa0bae71e7e91841910334313e8833a137bd4f70c6ae8fb08e513bfc7f0c401c22ce9dc0874f91da588ba4510bf6778079dad2c1b8582790de6bd380f1dc39fd795b5ae98f9450aa12381f5f7e0f2ce960b199f06b8f687a7c390f3fe410c22a70091199872bd7ba"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003053Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3756cbc4c38df7fb2927c3e3ef3182771ffd67c34ab100466cfca5b0320484a9bdeea422ed3e91a74057f30e22941ecb9061688780886bd68de2154b8499d544ea1ae3f219b80cffcf1e9512201ec0bdfcbc8291abfa54c7e91b52c0fc3b957d59ac92b4c37ed3623256ebe8f2d17a1bce36f09edabf322fad15fc2cedfa3aa43e24543df6d3e4e24f15c1bf27b5d3c612e18f686d3a9828b9fede555e7eaed974e7059b0f417bcfc427b9a4625df76f27c019b40a303f01c5ca1fc1ef44b0b7338870c7e847eba389bde12cda2420ef9a5651fe7174db610311d5745ccd02d309c96661427072e25b4dcd091363aea69597eec3a70ec12d8d2c5fd076f0d42d",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003053Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1740aae7adad8e3e178e6678a78344d9df7c7f91a7d402eb3f4a9a42ef51ac76f1f3e06f40a87f4143a674f66d3df5ed6d04f575624e427d4ff9dac3264b9cd054a9b1b73226af2edef7f326fe79031006d276dbc4412e89fe4bb53660e50534fb962a260cb018173191222e858520992df48cf82f55143cec3ba194d4ef8ca1b4175273b928bd42d7a62c7656973a58b7e13e5e0f2972d3912dec6aa6bb226921c675b1eec8751e2ae23f6ca6aea86d6d72811cedc4fd20b44da1d439c1cd03cee363e8d04ad6033aab45ac8fb0eb5a50630e3b061625665b2610770388c506def6d47280eb78538d545b155c279909ed29bb46e2974bb9538e7fe2ea27c9ad"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003120Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2adb9363345f531bb391e5c3ff46e7b38dff87f85e3e3de055406782d98de53f0ac35df5cc8fc7cc788158e35d5ba293e7d44d56a5cb63959f87aaf3aa82b7e6eb078a556707bf7d99d52fb841a53cb7b65e21bd03d64abc9821d73279e2050daf946f06cda56666fbbe06b29d63d6b8a9c4b3978862dcf59fac98684a2cda57fcdac38b9a5411f9df44a3eb5a769677801c783bc570a57cc24246f75a34a7bb9d8a3418074bd5edf8754ff6397c755cdef6c947f8c7eecabbb6d238703b12846bc8b5bfedb2c940b470813c2bdb57fcacc8b156e5240d3a2466fc1c8be31be226b37afa7231e48581e24554a90d88ac73a2e2b8f59f1f6d7f8b9709b9a858be",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003120Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8d9a55563c5f4b9d5d69c092f381e28aa3af830b2b9de2c041f9e0e3b56e857fe565657944ee07c295b73dac8946ba6a806e1690e21f3627c07c0884a3e3a817db028f88ea56563f1ed4812668f0e0aaf2f0e36840aaf4f63fe75bc6b034a16383944bdd4081a0de6a16a85bdaf74f8b5462dc29b88737af08314bb5714683eb0b27cf33224d1e37b1bc10eb4aeefe97589f6eb151d3c8db39dbf929a3331b2c7a14ea32a83051d2b86f80315367921a13fb6bd6b1111fb64dc6bd2358b42923ec9e2ee7bda849e0f641b9ab34b035a414068f5e2b4c32650ec693055c8fc67ffc76a4a9dfc81195d78458b9c972861099257399942e87400165613840810ed2"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003110Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=aa421acfc6f4ce9e11bd72e1f7b58fd32d2409decfcfcf99f887ea211f4b790f9427f3fe1ab1e4f67ca51a1551dfb257451d1643684cf8345d2e97ffaeb845b0b2d36ec8ac62129124512f93b8786099146fff558075592124f9f32dc26713d0c8793d107f0a55914e7f365f323fe6fd7bcdfb35154ef9a382aa66d4e9d9931622db1f07f79219cd4fef914ac8cee7f62b18bfbdac961970be49fd8d2bb0a3bbb9e513f8d9d54da905cb0eaf76cf573649bd541fb888771048e2985c0e07ca75e84723eccd98cc22195593f01e28546bb520861c6af1c3abdedcc3a37499d30021baadcbec661fdffccc89c9c5f800bcefe9d10ff69574d5c0f3d47aa2e6f166",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003110Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=385e271199fa763d5700b2392af9e9669729b058606746fd79331c5c7743c683f8546c8ca35a640ba2d0acb61ef8ce92b50fadd64b33a9532eabd982fb5e67b4a0514a7790465e6448330345bd739071e9fc33e980197b931450e17abc39bf84dfaf14c5154697a126b52cf0a4a1c41ffa27e70daac59b645494921bf5739162a290c2b1c952776b72610521c7ebc5f25f711b0fcb3052302bad62997b22b1ef6cd813b80dd375d43bcd7025048f46c91d6ae693b42557abefafdac2db80094ecd2b7461f811f1e13ee702efbbc19cb2f11293c0d9dbe54295a2d9e7d14b3aae838d9e7172006a15ac9890e954148bdaa0edd8ee010a7ce328a235bd28fdf847"
            },
            "s-7": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003146Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=720a73ef13dba06b8f342814f4f7562a194b0b5688b07b5f8ada0db1789c7cfc745e66ee8a14d6e8257562902bf09982ac121d9c56638dfc5cf649ddc42dd1cc5bdbd6d91834ab90029ce2cd09be3ca6b69d44b3fd7095fe649218d06bdabc2eb5c52c01c041f4812e316039c87bb63f6db8d5ef04e3d3770f80344e544fef4d6fc370072194e1e1bfc2f161d793a16daf7c573e424dbf3b66098bc643572899c826cefbfad9a08447136127f0dc95ebb16c2f75f2d06a70d7e71b7399093aabc3fe7c6df8940c61d3754a936fc96cc77fa06cca1e6b076fd3a28716aa8347316c144d820d8419d5de4b1aa8e7716beca048934c6a90351f5a1f2261af9e76c5",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003146Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=84ce272b93f2d51ccb45f428401d5c88842f55c39e6ea379555442b71585bc8336f657dd89de5c55ffaeb568f0bfa13ecdd3fbde1661f998224a3da102d143c75f4cb7cbb623b9fc73c8d4b178f70ef247c0377fffae4d8e454c295fa55390921d2e8fa4e5df78d5a7c10512cab3dd995608e8bf673bbd7054c790c0e02f9e601f8dba92edfa0e217adcdfa72c2b0d3aecaa5f931390d79ef6a4769e4b18577e9e13b12a07cc2b9edda95009a1723dc94f1e26ffbe35051a4a6a28c0008cf6cca05b409a6b9a9cec71508ff7dead790d09f0c4e46742c566ff5167b37ad278f76dcef529474ceec2ae264698ea88bf999a5ba4d2707a5e5da40a902119267487"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003100Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0c4b738340aa99aefa05a0c7ac0c982bb19e88d8e3af144e70b3d57ddf85f5a219c7bdf64545275f0d3f7fa65f82efb8d12b09ce318fa1658bae0b4cf0edf267ce0402ca6f049428fee15d92f9069e1e5c4a982d8b87060f0738424273d110590a31a0aca679eafc220bb63a2193846b781ac7d0eeda2eda9be4a47da4fe58b20246df966964309604eef1ec4c27a41132fe58a48b7cc083d91eb5ff30f44d2f9a6a08616f8d64fa7b2b8e19ba41c467606c7f4df3dae0897ef2cbce79e5b18d63c7e9c53cb947e88c854895e611ae09786fb171638575f5f5778e4d4c518e631b7eca1dcee89abd3611a36da9e630743ff0f4068fb483ae80d0417a0a41f359",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003100Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9c3d4dce65ec007f3e46261bf5f4aee353d48b06dd1db3f553babfe7c7e804087ab972fb5e6615ce4c5a35dd27f406cd042d39270a7fe6e1f7bdce48809d0494dc936c77026f4db69cbc69ae0f713fca5e58f07241075ab1b318b58307f62c851b5b0c0ba3cf1af8143c63db62e0722316ea8c18ce117e8b68a48383b947c4340fdb568e168f0aa9efc3e146981499204145019793e115aba3e120f1f4390b8dc1205d6ffef0dfc8b82e469b112eff8481ba33de8401247815e572777f00b80044ef048c0f6c7dcab0ba279d80c0ad32d838b20557cafaae145d2cc8927a10ebb73c3debed8140501400a4273c624ffc0f282a45d72c672abee7c545c2356f65"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003016Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=72677cd5e1a2808ead57e138bb7c02bd9bba1d96e960097787f3375aae5b96bfcf1d63bee222733f128a7335626159652c7207eb4dc3dd6dd3a108a4fc41271488b81c3902c7f6ec24fb766f53311f7b99e794a67ea486f02febe2b792876b229b5fb6309b3596be84216568f35cf5513aa036ed5cbe4654e2072037357c855209631cad1e59b9eea85a9cff2addd0dd5d7e97636daaccd3db982d26a460270d4188564f3ebf5362fc33d98a67dcde38eacb370ff000b2a1ec30fc679cdfbe52cab20888710c6bf90ef44cecb2b627e539355bcd5882b1d22ab3c0deb5c0f22d17fcd8a651645d2b468ab67f476e9e2fb5ec03b660105f5642ea1011543bc3d7",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003016Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ae372cad5596f1e164ee648db2821193d45846851d5583190da0811115be281cd643d3ed1edda5de99ef0411a5bb61b97fb567cc7446ea01ea6682c80eaad12fd5eea1dff7a8d9b84e1bac35f498baa4dbddb33c4db8503ba5bc97b0e131f6cb9839c3fa36c4f20c29bbb77193e02db8a35f44c61d0806601aa17fb5187b58e1df25202f94c835e741e9ccc9d6b1957cb29e32f27658107df7515d5a0178dc83af3ed9e800f2308b1208b9ff47e46b7298769987353edf04350a403543e6375c3ee3cc649772300deabcfc0ed0e9dce14347f505016c66efe1412aecd611ce77676305eceaee4fd775d41ddf9cab8c7d99acb5b050ba7934af79a1645df51a47"
            },
            "s-5": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003129Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4ad2060663b337c37f47ee228abecd9eb6b04dc7d1ee3cc042cbc6e65238be4f0c9ca3741280057e076695a0405d0f65791e290a6881a1103a15ea3c03baabd8f677aedc9f51a6bc0d0244e20bcc76299d042afe00eaf8d65ebf336fd70c239cca4b8547be581fd9dbb0e52c3935c39e2d08a2e0a63d246643906d08402dfd9802e499664f7cc6b67daf5f39a1a3957afac1cf65d677f8ab29fd62a8069c9027fb23ea6788bbb44523ebc9e03bcd65ee6011f6e4b7077ef204c6cc7e3a592cbe71be34999f9532b35493b6cf6511b5c494ca3e44328a73d8e67650465cdc187d017d1a1ef864ed17d64e28943473936a182250f076fbbb585d9e5bfbdea08c98",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003129Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5ec77148bd90a727889210c0b14565603367ca06d0f7f9043c24104f7ab6463e98df58ecdf1d13e4fab4ceb14d1eb565ad197e9bbf8158a008ad49b40f8f256a9edd07ec503a77127b4627f590a2f04bbce139bdf29e9e105aa08b83eb3f990b0c48524e71cdfe8f230f3d2df4804649703e94d2f8a4fbc26293b4f40b885ba9d099c5c36f05025bb15febeb8aeffc655db61b13f325028ede271eb2026259b0c211a448c05dcaaabbc6f926a0def53a72d3fcccb7210af688f83f5897084b731a848a4887e9eb86d5cef7ff47e16e2a4b9614cfebbfa0c9a7ee974252aceb9c73a993f1f271e10e89c9f41a22760de30af842c96e874862a68e6e80f847ed9c"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003154Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=aa303a999c317a8096102cc6e76a1901dacd0eb0a5d7e7a0403ea4a677d6ea27052c4bdcbf05f3a3a4b444ba6d07c698d604fe98920895ddd9c9cf030cbba2dc731f56d25a9da4127decdbaa3f1b0b15d6a531d440f7a29080605f15df4cd6ce86d275a564bef1b95482040bf6fca16bf2b01cde5185fcbabfdc2a7f870788d9592815e29f9dd8fe57d806af5403f76eb1282f028c1e20c3254f530987e5ed11f289155180f12501eb77889d39cd656ca223e8d1831dc843563272781c3d42571b08c870ec65f3504d62bf9eeedcb1c7b65a9014dd4d315ee8d1e512e65c3b464df23f5d98a113fbc75802cda9eeeba38f1da0abe451996d2cbcedc8db56bb2c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003154Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8bcd8c3197bb19ab1b9db31706b8788ae8d1d29f7429cac366d9af3bffe0a656c58afa0cc8120b430c15604110cdd229cee50e515347454c58892caf0bd657c7587ce6b0ec5d59258c5192e6e58d32496ca646b038b1ac810af41713ae09ebec7605aa939c9e10f53b9a7823ac487b630ee2a3db9f103af69e9c6def146ce5547decf3cf1de032a925c7a16aef6ee28aa98ef525a2ac18b948555bd47cc7d8e4a530aceed013bbe09f0fa928f88bcf3bdd1e6de0bdcd327def798a79c44d91c686c4b1452b5ad9a85704cf5951a13fa47e7449748a54055b2e63a6d7947b75d14d359d08f3215fcef550cdc9d7daf0e3d10c61676cd92bebb18aa739ecbd537c"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784201,
            "nanoseconds": 145000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784326,
            "nanoseconds": 525000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-9cd8d4d0978d48e9",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784211,
            "nanoseconds": 556000000
        },
        "bootConfig": {
            "experimentId": "exp-d7f3b57db87b4310",
            "id": "bootcfg-0db0176a81e84e49",
            "agentConfig": {
                "contextHistorySize": 3,
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "10",
                "temperature": 1,
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "llmProvider": "openai",
                "taskName": "Find and climb down the ladder",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective."
            },
            "emulatorConfig": {
                "gameId": "GZLE01",
                "platform": "gamecube",
                "startStateFilename": "ww_game_play_start.sav",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "mode": "turn-based",
                "id": "tst-9cd8d4d0978d48e9",
                "endStateMemWatches": {}
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "operation": {
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "name": "<"
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "name": "LINK_Y",
                                "pointerOffsets": [],
                                "type": "float"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    }
                }
            }
        },
        "agentState": {
            "status": "finished",
            "id": "astate-251222d312d5475a"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784329,
            "nanoseconds": 118000000
        },
        "screenshots": {
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003202Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6c1c39f74c4003e9c3a4bfb77e16adc2cd7539f4f9c21c1a883812384c15db367c74fa6579d6f92ba6683ef2c26235b8f51715ab349b23434c61bf5c943b83849119bd1aa4b6331ad240ce23746cd770cfd11addc9a3622c3d2fe5aff3920e2d4ce62e5722764924851cf2d9d7d33a14d0e600bc53b0934036006918807d3931462f8e8f246c2d773b9ffa88daf0c79c582f8fa5e657829c804030bbd66b7fb2a2428e3a776ffdf1c6eddfde59c711d23f111b5cf70a800aea3098b402f6e19cc11800250c135d553a78c6f3a50e056e514bdda38ac757f100feb4f68cc81a989797c954f37e5a0ecaceb484483b459ae6e8ac51039bf8f52f31b69591d93078",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003202Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7836c97675b95f656546fa7e1f2bcd3bdf53462e2303ef7dba2fcf81868ca32c058aa96696b44b1e8871001237ce69f4367eb3b4335187ccc26d356bda477e17336e27c714cfb5663234e7cddef493c85c2df811e7ec03dfdca11078c5c0c60bae102504f7697e65dd0547b0deb656fe0d228b2d7bc27da185b281e25568d0d8f01bf5416ba403de4ce06ba58161359aef01011eec93a7d7a3bde2340ddd2ef3b3c0dc718f6a8f63b7086a1c72ea3af6a979cbad81238f24a2c2354036686ba6d539da696ea5ceea466373eb118cc354df1bc0c90f3adbd4a397c50dcfaaba699688822c987f8619b1701be76dfca54512a27838a1f3502e352962ce28e5f657"
            },
            "s-7": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003153Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ad6e1847b2440ab98b23089f930fe61869952235fee7d8446bc7b69f5537616d29fac96dd7b94fa20c0e56d2083e7e80ecfcd73add9deb32fa081fb6662650202fe1fe642cd69f224169a2382cf9963a551cf313740e659a05d8f8fda07640c9d6995cccd0c97686f64614e9d339d14ea41cf70fdd326a1881617e2319473217b4b9d1095d62a628dc887b5acd8f164c07a36b166bd90fafe42bd887e7cc1ce7a41451129f8890f76b3033b953e35272976a4cd8fc94c87def3916fc48cf6b8c6ac128655d3cea7dd960612e769e7a3051919bca44fa75d5ccde2b5605c403e9efda874be940c658f17ebc2aa139d867025a5057cb94469eaed7535ea2638217",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003153Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=36c83f085a969c45b7818281b4d1cbd332c97615c4f57693cc5d288c573ad69ba89f4a2a3e0b0ab66578e3338030463c61a753e182aed7ff3e9d44874960edbd4a9f68931c039d3e01289bf3142cb263f8b99c1796a3c7ce971c32e1d4bc11b962b64e8cb63fe5d3e1b28d2e2258d0ec510db6c5963c829214af199a0b4e893adcd0ff9999c104db39b05f74233a8dede2cfb446b6420bd712e93d1fd8ddd7bee19aeb47c12abeb4cae88c8e45c91013f9c7bdab785d754ec5581f02ce3e6e883569a1957468d836156786d24dccc8125e833e530f934b34412e3e27149b5b8c415cc10f7fd093a9382feef4b2c4f8b698b84b4a64d33cad6d15f5d97cd37776"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003054Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=add3f3ef675e2eaf93ca2268b700318f0e9013d7a82615b9c478736f6b6a229c046e54a98adb2313f951d2d25ee362a14d798f8a8e6528cb52f978ce604c6cc4846f32aac076da57651768799fc9aa7aa54d799af3e200bff4dd644f1a5df3e5e9852ae21e0277ec5bb7812be6657c0908e583d24bd5998993f9ef537770a98f74fee30ec2aef0d7d8d5e93a69bc35c636bf9d5380421c5095ef16522a01ecf8570576657228922a92e86acf8bd3963de74547df3279a05ad27ab79ebf3c45c92dd2b696613cb9f765c87251cdb3f678c7064bd5f3e006b6c1291c607ac937d85665f8cfa9b4c55dab908c73558442f8caa87a8aac284f41826f65a633640f9b",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003054Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1b199b105fe7f20e552da416d675261edaa6323e3dd5061b7a28549b2f783be2b03363afe125bd75081d3a1d41f056f390ad21ed2eb275288d680daf33d9780fb309fc2e5581da79eecd03c610c5c9ad021a48fecadae09dda3c8717c44f3dd420bd8aaeaa256f474229b1f238b14d6616eaa54d514c553f333121f48d881f301303bf768304b3930e070ff878791538bb47068f242ec00c694c4663b1f13798813187c71a2a5157e75a62cd5734ec01c709bea6c9b57a2253458513a466e64cb8d628732b1bc20152aafd494dcc5b1811c624aeb5bfff27c8d899cead6a515c0010a3ef207985778fd7480e26d85bf64bcc842a043eae491615d37313d59724"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003103Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7da5980f7106e62bb521e981a19cb22933a8cb624ea1cdf1d30c28bde9e676e802acf2b685ece9ce936a0a6a6d5f6c3ee94caa8e6d11ff07c5f10fa08db19659c07183928ea64ea1c5f3243e8bcb1f030602706a4a2d823235b91e72892277a7066c8b0f14bef26a15a6439396cdbc4d4d90e441306d26d2e63c9a790195afa9ecfdb7518525be536439801d2f335e7b38b8438052554aea53c75ce4a59be70c1e89af4f62fb8a00531e2f6bdded4dc46aeaa60edf0fa28ebca8d84f1680037819d988fbd3e9bfb9da9bb55a8ce6f75e2af8bfd84fdb4d401ccdea5d54eea19c0e5de3ef6c79e49b6632a062e71f606affe77bf33e6ab6a9604a8a932b87fcea",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003103Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=954d886176e7e2948c51500988e7344f6f511ab50f1ba79decb29af69e008f59eecc7e7e06d786d95ba6cdfd287e40087496ce9d108523515282f139b2f3fbd18c60de220e27fee3304a86c565d12d2c3a31e87512843a1291db00c2bbb96cc7b8fabd5e2ba3588689b1e05a1dbfb4d3360ae94d4b58df23d6a9e6f2ce9cdabaf97853b6d4d7bc19d16386ca9e4be078e5a904fd619f2a86196c594d604a2d28318530321160a338ba1fa9485290afb28b90d4206e60db1eb6804c29052a3d272ee38f0f5f9a7b6194f90ccac4e56efe5a73577822945610094227f8e0d2b95fc50304c21d516d5a22a9af01d954dc2b2465b8364f4c7870309c48c656429266"
            },
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003144Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0a40a63231b6cb7a81794d31a91f9c63d71eb49b2f64b6e8444cf0959ef94a6ec5aaf79c3c04273d58776b219502f366b0cc5d1e16869fa1bf965ac28d31f33f2746a229a32cd57f4e7086afb1f50f3d992a8ebce7f8a2f0743c1b7491012cff892a0ac3d637c8b73aee938bf09c4eb1af6f8e4c6269f5a6a312893638d2ad488e7328174af94b508c420cbc93e94cd7bf1e0356150d54edabaa7acc221ee86ff27d8f04b8b69e0833122919980710f200abf747027725b546e22af9d7617c4983ecd265594feae5dd0ece24243975205309e4016bd85a682950a6e8597550380a6da79c856e781bb2b15a927842c75696d2b803ca81ef1fa6eede032385c3eb",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003144Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=50749a5e0e49e51d97cf5454cb973dd3e9602cedc26d010813e08543f46b9df3ac6923a6f13f428169c4a0492b633515ceab3c2a209a9a64523a047dffe596b06887afdba84781a6247ac6ae2e1198c1c8631b257d9c15a11829956dc1c061d19d86dd44ba6fdd7b14fc172a76da2383a7caa0635f846ea5504bd6deeb62ec6936b5d7a98d1066290b5b0ee1b36c2114004f7bd325215c5e41d6061421a68b95c14f2ac64e3b24624c66ba30d5aca0aa3c159c9dc44298dbf0b21f0e08d122ac2b1a4fd4966e28da533248e35ede15a4caefc47cf09576b3f8a97625b014d6cdb1e48dbd1d8f159636d9c8766de087fe190233b514c99cb66c08deae5bfc2a1d"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003113Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=24c34b8dd4f4dac698312b57310495b6e4e010f38f4599b541dac8c7c437e843268209dd20bc2c6a27ea0590cc546086d9a64811d1b05a2ab185bb419d6834d855b822a7200e7b63fed20d350127e8d3ad481e889d5654deb08e6b74955c3dd7185df7e3035fa95aea44f14bf84f7e8a6bbb0ba4b4c71780f3bd63ab16746d696dd29a2ebea0e0fc79ac5cc1b97ec644e569f5266c05f991ed338c9adc8a8ffb5212864bafc4346958e633de2b3bd369988ef6d3f74e788c8ca0ad43c40b34f28e86241b79bf4472d030abffce11fe4500b1120ce5dd5220704f990b1396b2d001fbee8ba9020fb31d03419cef6f7f6003e6e13a940ae74c072bd5df03cf542d",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003113Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=232f003d7b7dcada1be2ec6355e776829105393d099a2bb355d70883795b784d4e6e908334704ea586b4a326242ce689cf84e0ff6fdf650f3fc6516ab95b4d776c2edaac4ea3166e394054a70a9708ab84517726c6913e35d8b235ee12b0c2d98bcadbab0320eef9cbb6076c4c24f1f5085f5ecb6b1b70fcedea7cc6bb27633cf511b25cafb92b74cca62deff36efcf1670acbed03a99691d5c9cb7eca07d1347bcbcbb6fe49f9b5dbb81dec9efc4450dda65520d95cb1bcc3c98f4a748eda522fd4237a98908db97dcf3636b8819dc02cffcd327963121701bead494a0b33357db26783a38ac74e1e76478e9b543f62d6efb7ee7613cf67a2d0fe707a37475d"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003137Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=08af80b6f6e49f22d31eae554a2a41282394ec23f3ced828a3d28ce77efa8db2409b436e48d50984bd2ff78612b3e7e736a354761098262d62e956dbb40d05fa0fe2cc3d1aff40e4892ddf8a87128291b42c7da140c6d9d50d1328615b8a2f8e592e49fd3baabbbb7b5e4b925aca602769a20c92eaf96b8ee43c948907e769a2028199423731ad056f43709ade0017ef8638f13187fa94a85ff5cf9dbe04898eb16c37ca8fe4ed21ad1845d60e42a9ab7048cec935e773693cab66c1d9a41bf19d1d7e93333984f89357192e10676e56d28166e6e7d875b1b5bbfe4868ed3d619840db11bc4effd84621b8baed68b48bec5aaf79b588459974462f6f8439123c",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003137Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7b2ba64ffc2de23f996cbd72132c437b7baea1db722d815a04301cd7a8f21352ae07d9e043eff3014070183323ac0da54dff7cbcc3fe5f915fec1bfb60be8c149b0560a561ee3b6d135f76f53573cabf79d618dc2a18a9e510cf34ade4bf95301b2905400753b77992222375ac4778ada494dfbf930184d09882a329d97bf5352b6c9df18039b2d4420f5d7d4bbf65fad2a36d3be3022fffaacd3582bfe989672943d3063625efa1b57b6406deea0ab676edda29336da1f36f0738f49f530330b45cdc205e1a960e3876b777597841325b2836605f4644b7ee71ff092c138d9227dbd01d7fdcec873e776d2b3fcce815109d86f0e45ef7d738937305b0e716f5"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003128Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4caf472372cd4cbe613eb031cce572161d22d4b428676a3b31600d961d782fc695a6946492ca340c59896cda9e6cbb52511fcac138c365e3a96cc818245994d1090266a0522f2f10c444506c2efbeff99e5f6bdd451dff180b8e4ce5655818fed05d150ce97f1b8cc1fe35d3e4891f7480f99c1a97e0867c4f8d8dc204bf20162374763f561c23623ed9b54867bc815e0907cd95bb65d5a68bbe0fa6b5f1efec9f37852a73c3db0083c3f4c3b9858d6d095278cb01c105265f6dae008c43ab5895672dd8ab63ab331be217c44778b2955a59fffac97dad70ab9e6796658cbb480439a732ae9086e160013605bb1b53442eb0d3041a514580c03cdc752376ba68",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003128Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=663501250d166352e91f575fc4dc1f50dc3db41a2325e969a96e968f9c3b7c872f6362ca28ac82a5a6c5593fdff487859aa0fe310bb973d936edd7ac9ff56ab706d06255ed80260abec99e2819e8c6d968542ed44d32436d9b921204871c9be596bdbb34e4f562c5ffbdae17f93ce9b3025b00c33f7fadf13b41238f3280e64f93291b929bb8cfd9ad53ef17d6d32d4cf54df15fb3b35dca78b02ebf8105e29943aa6fcc4af9e11ffdaf3a080700cef1b6549df10774d611ce9909a5571a69203b1aaf3eff0c3fa9ba407c92c05772006feb5b9ed442bca655bfcd0912e95309c5d949a05dc234d456c058f239afed828997a7c25a2fc1ec93c81c9fd7a11678"
            },
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003208Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1a21aa03be5cd1800af93574fbf1517353f404bff41fea43f28c2d61edd900f28d5c46e849b2e57a61709661ce4a4e668ee0b40c54da2dd886c5e770275837af067237cf380ea96e250d8277aa896a56309149ebff85f04b4c8bba96e738c1c876990ebcd90aef5233889ba94fbc4235d3ef426fa11119c86acf45c29bb50fd233bd362a7b3efb61e5b945e922edeada90272ea375029e7defbc3bfec1799a42941df61a2f06b32740a703663b160db01da5c0e48f3c8570ae1df119380a7fe6ed2eec04bcb711fd96c9f666da633c94919b00bea323917ac90a562a3e4ef08c76018ecb16a8042ce493eefbbdba15a054c427f12401d2ebdb6f67d9a9a04dae",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003208Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=24bf30b726dc262d33b42f9ed00b9c5b1001b235acb67e2d4193b869f9bd2e230421bcaef5fc93d2a535c927d4376c0cae529d06c8073e9c15859c42bc70bd7327997d574860962b3ac320de27a8cb48d657b04cabf05e7e61d0d73e01436309a7efa93b858a7c18936bed9601095e6e4b7f1374670a976ed5cf632660ab200eb2e30771d9bf1c60f156dd80aefca9f43de4b06523356f60c91477786dc23939bddd6b2336dafa72de9f6f5fdb34902493f8b1d8f16fb042e2cdf1586e04c2e868448cfd59f7949f4e398a711063b89e797b8797f3e902af13b17931f48cdccd5b312e98c8136432711fc05274f5fc3c2ad4f6d4ece291e4a75937af8bd3cc1b"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003028Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8acb909cd5bf86211519b57893bfa17337e2711c3e48926dd65a07ee5968cba6464a1950333b5114a47d73ff2eca2cde6fb7cde32897e532b000236102e9059e7b687ac408549da8bf3369bebc0e17f1fa874f108a53ab64262d153bd566b53755afeeaeb89b22fe808bc220c8bf8a652b29fc4074bcca9729035935ee5f083e147dcdfdb882677fb1bde399867dea183db7093d43588f76294ec1f6a6453eade6877b60d6cb6e02d7aff207212c55472638e75d341f9d2768a8db2a29b44d6c8918acc97b8ef87a7013157ff2ec63ffa2d730a549e556238d8f6e3d1e2623ad3d08b1b77dc5b8c46ecfbc3e7354e5ef41bec60c2c57cc7bd9d095543d6d8cb2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003028Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=975bd1035c7f8098936625653460de81b8ac21a67c73dfc127dc6780a9453cf29acb2d7e7e3c2645703ce24b7c26589656bbe259ed6a05c6de2aa757c652cea39427c4b09004d9d517fb64b1c6618a9263680f649418647f403cb4196059dec6618980d46b4d60b26ab6d90063df6ee1a9c989f510c5ab0741d9a46710eefd15b07e46c20c07c3dd2e27878ebe37ae0b0dab5236c20b29cdad5730604e7f9dbeaf78618f009b4366feb5da9b5cc525d51d3e41cd685139bd5af282c60b7cae2314599f7fea2f8127303fac3ddbf74f0e2d19989c5db95017e286c13c154d9090a99f7e76f80acf76e8b1f3aa1ba721d61cf0047db7302fd8fa7f9e13b51d2459"
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "testState": {
            "stateHistory": {
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
                },
                "turn_6": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_9": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "screenshots": {},
            "id": "tst-9cd8d4d0978d48e9",
            "status": "finished"
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-9d494efbd7484bc5",
        "agentState": {
            "status": "error",
            "id": "astate-0de6ba15e6d140ea"
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-9": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003634Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6f293f0d5cb7dfab66be972632374935de64ef981841665af16cd0c6596c8506079165c61b2873bec78b5f777bb7a6d77c476e9da8a4430da43cdefdf515b76706a0162b1c847f25cee327e9f1740a7557b14fa47a946942c882113687b42c9ad75f8f28f2931701a75b168f9d2196b27a35eb47c5b6aafb3ca042a9c3cd019dfac4fd4daca0da537bbf084afee1de975ba7ee3b2c4a0cb46bc2075fcc391e428ffdd65abd0ab5a131e412a5201066095124d98c570545dfcccc5c9feee073b2732cbde77d47b2e90a22844d87a0721094734ccfcde1760653f414aac09641d7223b475bea23e186c39f79495fe7f6544f5ab48146671751567aff8e2aba9468",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003634Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=07b12e1edcc3a1ff6f1965383576c2744543ac0d84e62693ff9acba3f51fa690ebd0d2fbce64d31146c63a0791930cc214c8f21d191dfc956419d012ddda8238178ec7e8a33a58339b1cb06ec69cf0a6771cc2c38aa767316ca1bd2b013e02e3632bc4ac278c80801425c620022e728bfb1090293437fcd2ccbf5d1d6ac2dc98841320bda0dca81076294dcbf61b0adc6bc86c52e008e80a316651d00c747d276937d41109b28f19bd978a46ca65645de2ae7cb3f1b9b6728bc7abacf98828547f9f6a6d7f327627f7dd284ed6b99003b844f88ac20fe66e5db843cf04d00634dcf824e121a7ef8811a44cefd4d3309b6923fe4e6f8270fddf9882310c691fc5"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003634Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=98c08416f5e37afc162a1b7bb93ca88d8b9b3556c7555422779a8592687b6a9fed8bb630b8712721fde51b05b7fa61abc3055267ca3cae123dd4dd6257326d14676ca0a1cef26bd80584eea2f4dbba5dc91fe3da9c4c08b4f967494a53dcf4b0bfdcabe20a9c07b93c3e8e2359192678f5240e11961b3b4b0ce735f7ef8c173855bd9119ad149466f9427e030029ad7349695dc0064ae3926e5ccfea36df982e31042afdb282cc2db64c1611af3d93f4e28bbd8d48b425487678c3ae6effc6c1bb36cc34767ed46556b08a75ac61a6535e7c39da480186ca11b99a9f3d6ac4a24e02b123e41fcf5a1738fd85b5af6a755498589d3e3050df21646e5226fc87eb",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003634Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=70303724b1a2730ec962407c36c9e72163998abd7203ad3d1aeb4cad1b73339ed8cdcf22463a26e69d893d1b51d4089f52864419768880f6ef4224c2e58a1fcc3a4557ded1f62c274af0e8712740f55a91448f81efe16306cac5548277d163fb8655495a717456f3b5b7cd2ad0561312c2692d9fc3fa25a14d0ff6a9a983e01a8c8cf0e48c1caa95be9511cbb20ef2701ae9da891cda06973e34444ab0b21a76a7eb00c822d32db0f7624940349e0a10b3a34fa46d82e2b09a3b7694856d13c12e1613e4b07128a44d96131f776e8667f716c978d205f28081c9ccb1b2865a473926a80b1012e01a3cdf8af35106bb08971f7b2df9e272156a03df8da0f4bf4e"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003523Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8da9a9823d888d27dc326b31efdd1ff8edf8b7e38b60a34585f09d4e4c7d571d0e3bbf707abf98cdb0465ca74a1abf915e6ec00ea07ddd1011756615836f3802ded4dddd33002bfada01a98546d5489b9ac7bc4e443d56a42df41cde2166156601d8648708dbe476e8bbfe751efb1dd4b7ed2b97e752c0edb717db0d97313fb775858d92e303b8091be7a8e128626c244b5ae0dce818a90c2f3639b59fd613b82886a561a49f6ef89f508cc4fcfbe60f6e877a81b606e0bb8ca3134c29f699c1399d75218ad977e9accc655bfd0e48ca1da6fabc50c83e9ef3dd6f22c3e5296bedf30ba1687432625019b5255c1189bac4d2757a14a970ab4954a2ffc276d43a",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003523Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=86494d8fff791a42ab80c237cc101f71767cd4f32d900c9ce6f90161da13b1faf2b071512ee002fd883d39fc5485757c40f3f4c2d965f7abb9d02227618c689c8713c193de6467b4af766b8147aeea65d1fa7e04572ee0d4350cf44cb9113d50848c20527297599adfa5694d84bd4d5dd950afc36a95d4d94b5f3ddf1b13b2e2b355e2a7b2ed1182a877c2272e087b2404d44be548174714c9a919720751ca3e781289707ef0ea27cf118be6e5608630385341db3d9e586154d97c3f0d5c060c30e794dbb6ce8b0f7646c6cae71dfc59c7739ed7d3babc4da57ff606dcc51f54d589a241707a5ed6e617f7b78fb258532eca13b88d15cfb39bbfb03da683f22b"
            },
            "s-10": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/10.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003717Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3e699eb649355682cdb94182e29a938a5e2883d029285d20e175e16ea871678a54a9af6106a13754cce9da168ff1bf81ff873f79ac8710b91e2f36b4fb563e91f431c4517cb4f567e591baf1eb7223088b425e0bd90879e1055fbcab6273e98534e79f48e7d0bf7f4ee50780e851b8b09502d227b8b2548b8d54b8b36cecb9bcf6f49583ff71b50b68902b173fae766666e2fcc1584c841e5e130297bdfa7c7ab69b6e25879c32e967b17207a184d24af5c79b3130f97f429795162b6e53a526b88c4aa48ead22a494120424d62bf264280fdee4a8517bb6743717118c1dd2ce901e303fc78396b931800f4e1e35b4e1b7f8078c54ce53996a90f983acf63d0c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/10_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003717Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7a35263d4df27cb32b37d2137a93356eb791bcfcf3853cd0a52e62e8464d18494e6946ca996d29e183c586772f9779bc887cfb67b4e5866260d86101099a5412c16433fedeb6d142880f973149878fc5c81196c452ffc9d6e5db93c0bd6d6c43ae0e8a718c0affdda6bc0433150b44d9017bb0fc4528c5b831a23f17fd126039ea0ebbc809819fad4c56903574cad506e4c372609ed5908376dfb65ab0569e56968db53a0a829fadcca687b8645e63d0710c873b0927e80fdf8e63a9ad7d5b2f1be7fe98bf82987b5ce4f52d2614d173311e1cd4d771e0fe466ded37384402c664485c280fd991fe05318430f47b34de5941c3d14890e372671630094e12c6b3"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003514Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8389e01c20675a184f89d51c3806f9f4fdec526ccf75cf1f22b3d76773e04549cbc4e02873b51422e26ed7e8ee384c96c002fef41d1b20623a56cf7eaa60f8a4fc3c1651fe8a43b742908815cb0dd10f638e48e526f2c790762e5f30f92c0b902b824e492c08e85390ee41e661835c286c95abc7fb6e96f347687df75e015ca4c46c92d160d899917bd27c35952508bc90709b90eb89641431b151c6f847c264b19cbef1b07a20e5306703c18c6b27cad4f57ad9efdcf429c0e0a162bff14c2c330fefca28d475f005d16ca35be38b40613ee34b9ee80087ca45d90d158ea8f93153e6588c552512c5d10bdb366f9dc77b8bf6b3a66cc79a750e802d56eeccb1",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003514Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=172dc990acbce87862222e842f4dbfc7f2c40cb91ba31d27c0a3a2c003bd2e7425ac265f5ff8bd6e7be88a5296034abb97116bb34fd547fde61320e2b3daccadb2ab7a79bcd51a3580aaa62bfc613ce4bd6bb2f3caeb26d6573fe512dd2addcdb558838e814071dec503533a703fa97587efe45f360859083745d80fd4fb12e31fcad2e5c827887e0ead36e3de0f054625a529a014b4196bd52566bacc5df94eb69956dce3fc300524aecdb2f80b5d613c5676d58e31a118f2ab35222f84079e4fa765ae0741ef8a8c8fb4459d08c59314dc7a22d00ca96ae9f964dce40e9ab5636982d5ad58072b0590c6588010177bcde872ad8875fe20872d0cf0c2609244"
            },
            "s-5": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003533Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3bfacf802b1f2836dc809cd9553d1b13afe3a81010d5202e60be3a8465fa8cf56967e9cfd1ae92cf85a0cdb15dc6093537e057cbbfaa220d6688312dacd503cbc3d40c38915cedfe208cd06426130406e8485a2ffd97bbe84e94448addd03e1977289d8df2e0edfb670ed999cd26ed7b3232a1103b3dc1fcc7504d06acebf94b5c082ddb2fb93d450ef6b74e497f62205016a3de4d9741c2ad4095899c14b4a84ba1eec9a480a80d473bb319f277c637df7d8e131bd22b80ff451537ac5bd8286dcc0c0d76fe5ff4cc1836d630bb1010fa553d640b7359d935532c1861049f0810aa1b18a0ead20590c983353a1408b8f2da831faca56e7a4551cfe1905f2f6a",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003533Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5b12c6d4c2162e23ca647373ffffed0239fbbeb5553380ae99a9e514fd9731baa245da65cdad98f58774fadfb917dab7029ce2a500d179fc368f3d9fc0f2f824c83b257f09167319fb1e18a811f82899f28af5ab0dc67618ef4b8c17cbef1fbcf20be37372d9ceb0ef02b87bc77c0b3a640c9098dcf344287cb9961eba4a96d7d266979cd018e4d26fd03f021b5723578ebae9e78d2ba6566ade223ad3fef704fed76e30cbbe1e81c118f6ce0d9cd39f717d49e48b5b77926e34f85ed3c5965779a81827851daa16bce6a79381e64ea32606c84d5216577d8301904bcb3a0384161a84c7e955bd5dc55cee7c7d1101e7fea7e3833b32d185b412e89e75c84277"
            },
            "s-7": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003548Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=41e1d0415d4bd9419f06bd1aad8f826486188b99bf71418be02fa2372b70ccece4e0d98c85281bb509e3f44e63fbe00d057ed63cd9117dbd6e3f961a5bf068791fc3ff77f7dab261a8e256b6bf58596fbdb270e10a2228a166ebe09f1600a9a5cc91df72988e7bf9bd7d46ad9f5040904e9ed7c8ecbcfa9611f88e92a62ffc5414a80348b99bc87f788cdd2fd4f03a303fe42e1ab46b57deecdcf12c1e553d61de0d44d9d7ce8c3d8cf77cf03c5b8016026580fb5bcbe0c1ed2a66fa7cf6a5bdf12ef4aec97ea62e75a100232ac630da75eb69197c66ce813b136a0480a1b039a39616eab66b0d38ce374d13d826b8bc06b292ae9a48f243b1eafc31b08dd29c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003548Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2e67f51dfbdd29a819520c8ab58811dad6e68ed0c85867bf705510b4b754f6cd515bc0e48549f5ae7b0bd00cb728a7b17ee6717d8220d77557df8167abc0473fb57029f90d5c7204dcd60c5346769fd33a50bc8cbe2c88e1b3b5fdef05e153ed4d13f7cad390ae73e108a41a43e0fca932a9972615ea9d32cb663286b41c4d97cd660752a6de9755db3da0c53e8b42041ab1cd2ffa3f7988652e9e6dc1023ac4754a928327679bc60ceff2a304d34d798d3a14a3f7e5ab07bfd0efee50d580da3d4d60a7622a8040e170f03efa12a5d00361ff42df9d40ccc0c4809ac5fa7313b24ebd7736b3555201602c04b4c651c86938158f5b2c74fa4798f16f142fe678"
            },
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003543Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=89a6d3af692ac3f4a31bce4dae07789c9674b173af66ef576512b5864a0bf5c341cfbe4e91e93b83e3ad864b3c846c35c98b2a58a2c96b482b9510dfb134eea415cf7b1a14b2aba71b13e059853cb249810ae38e7cd061041b29045564d257e2b4ae3f620fb1956e77f276b744a681cb6809b317f769f2f5604d1f3b6418d137486035b574abd758550a2bcedd2478753e62681b661b20c4c68a89de7790a523d4a2941675e3267c5c78dc8eb786cadcfbcc83c747297be29757a7d817dd3a6502be355117a1311f8334903c6d3c30392ff619b83190ae29bee1724fd6a8e753d2aef3e02e0868b73654c204024b0050e14dcfb8c9a38d00e3dea932bbaa6a1e",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003543Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5fb8788244d8fb6cde3aa178cd9c629dbcacfcec1ab13e5cfb3777012bb1dc009688d9674796f6f76fd8b8256fc5a50a05f8063eedcb44491d38aab7eb645ccb6f643824cf0caf5f73df89aeba0333946c60fed4253690e31805ca37445727af22cca53ae11931d2ab3e5666a19510f1e29e03063304a6cf75fc23af627aa40f6bc2ab444e037975a903bd00dc612674e5823fab5c4d4e0b557dc290a6bc104691221867d1cdb7b1eb578dd965cc090a42374dcd086ea260f56224ef79a204a6536e0c5701fcbbe9229f853aa389ad272c0c43ec7af69106bf539a4e8339873baecc4f62d4300301008669e815151eff0e187ee3bbd77f9fe837057e015d64c6"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003454Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=08b03c58ebb62c1589cd405440779051d54a6b12cae1ca48361398c1ac7c88889345e05b51733ce48b2140887ce62c09419b91bd752812037752300488c591b6f9be83a2ea4f442b34474163175b82e95b83982b1cd7f9546e428425c96158fc669311041c4c9a4fe9d82a0c645a4982c5f3fb26a7d08c5dd7e4c24a51310e7aa510842826c193e01439209ae5fddd3c5d504cd2637385260c6e14fe482a8aeb9ea1e8634af59b981fce2c598db82ce51d34cfcc6c74cfc47e946fa370f2a150a4b170a634f81b2aaee9578fa64be43b3d5206657aaf31ad5258ded9dd98fb23b0feba31df756db60516eed95c4da0fa8718699f6a2d99c5a25a209765828de1",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003454Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4b75897a35284c5dc4554eb302a987e21018153b69c1f28a55ad3b556e368f5a1c07802caeb15a90b864e77fd4e197aabab57d62e33fbdd0394fcffbabc78e4200b9d86867a2445e75dd2662a1f46f9fcedf5ffc6a39db63f5fe86483ee75f2912c6287fdcda630abca77297363781090fc7b2e43df411eb485b82342010df0e3b7125e61fa0e032297529c366aa49660e0c770c0201bf8724705c11978c9255093c8235e9b417b9437c04f709fc9213afcf53258d119584cc7fbfcf06f2c34ab10854d1fcdc6f617d170166d872fc2275ddbb5b4796ae10c7b19527fc4af53a3767054fd24ff4a7a27e54bd7871597247f4796c806e4a7dd8bc718d5ded2e9a"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003417Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=631035867612c418ab0584d2a4c0416d3cf0e39b1053c5167d9bd9d3b7d4f7184939922c1e5d694d6343bfb710d84a54cac26f3a4f3a861e7e3add1b33a16bd626d4626cd0ea732902d2564c21adf5db8f153d6856410ebd05bb1d7b4b6172734bed209a462954ab1a02ae51fbd033c5e433460aa290165d30351fb2a4173362c6627cbd4c456c5307454d88fd4f38bba2a44b4a883638b0db58ffdfb59d34b58bde11bdca71a4359c0acc8828f5a4e4c5ba746618ab149102553732dc812a20f363e632627bde40e6594195ea18a2ee648c502a99c2cc67559d8c5f378b7148809374ef7cbdc29260cda22af4665a6a965f88fc530a260f5e04c1710888989a",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003417Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=152e3d75c923790489da4b0b9124362ee45975bdab0262427f62b88e49ae1467102485c6ef91f597375dfae603af922211218562e339411c4b58cc800bdc1cc080e6fff71d013764d068838bcefa470c338bbc7d47da3e7646ff54c32afd0475b500329e15d2be2892fa63cf20d615ad6449e19d4a6ea9f189c76996ea8058d6c0a92da750cbb7177ae3080da68856bc60360207d48da2bfa07b681d08f79a3d5bf1e5c1e856819ff8ba01002198e5eac74f6a246c4b7b444df508eec01e460bce9ae8dd3f30f5b7395503381b006f45df1ce800d56c4add3e8bb0fbc1080f6ff2f6e0a986f1046957b71ba5d47cdcf4f0910092153fa4a0037a5963bae08133"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003504Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a44fdba2d5c3b7cb8a7b947794369f5edc79040b4dd8bb3494488e6219366bd57ec672b42f9802fc9fda32691681b602c6a5aefe2319b4a1c01313cd6f7b1aedaaa5f690d3e00ede64bbdb00e5059f9a636016a8f6676aec9168bd8a2e24cc4f039647478ebe26cada17c5b6af93c308c8dd5bea8f97678d9e5eaa9ebe3276fc640789fa6a59758944b82c2ec529f953304dedefee284aa14f1147378c4dff19670ab8cb956ff8af42872fca53cafcb8fd39f0b1a88985534e4e68ab303154dffdceed3831f365cb22ffbd7bba7e59a3f9f3eb5f8b88e6193932dd364bf37b2f3ce364ba4a1cb2f8ca9cf98c160493d0cedaa9307e12cfdad09de892d3f3ed56",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003504Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6524fced4729960b4d6781f9e93ed93caf739f2e91e97bb14f5764efa4fcfe6d8550c4184a2918b41626d782b73838efcfc4129301ee1fefd9cac6329d933ed3be1ab160492d3deeda9f86b4fa8ae70d74fce76ec9ae03d2dbf40550fb8bca255f30e47fb91db0aebfa0d3b65ed90d1fffbabc932e7daffc9b3ae8054facf723838e13f640e6a863fee375bec328b145305f60ec685f4d5036ec1bdc2d0418f6f9926805ea63368578767092a1bbfd827ee530e56bc30460d9351759b3719ba399055776e10807bf4604dfd6eee6cbe03a744d26d0b45d29957be7556b1d1313071666eb04da323458bb8eba73d247baff2433160c9bcad66f5660f7fea096b3"
            }
        },
        "testState": {
            "screenshots": {},
            "stateHistory": {
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_6": {
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
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "status": "finished",
            "id": "tst-9d494efbd7484bc5"
        },
        "bootConfig": {
            "id": "bootcfg-24a5a61f84ca47e2",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "operation": {
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "name": "<"
                        },
                        "lhs": {
                            "input": {
                                "type": "float",
                                "name": "LINK_Y",
                                "rawValue": -1,
                                "pointerOffsets": []
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    }
                }
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "agentConfig": {
                "model": "gpt-4o",
                "contextHistorySize": 3,
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "maxIterations": "10",
                "taskName": "Find and climb down the ladder",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "temperature": 1,
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down."
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "emulatorConfig": {
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "id": "tst-9d494efbd7484bc5",
                "endStateMemWatches": {},
                "mode": "turn-based",
                "startStateFilename": "ww_game_play_start.sav",
                "gameId": "GZLE01"
            }
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784679,
            "nanoseconds": 510000000
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784393,
            "nanoseconds": 591000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-b477e4569356463d",
        "agentState": {
            "status": "error",
            "id": "astate-c562eee506dd48d5"
        },
        "testState": {
            "stateHistory": {},
            "status": "finished",
            "screenshots": {},
            "id": "tst-b477e4569356463d"
        },
        "emulatorState": {
            "status": "finished"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784312,
            "nanoseconds": 525000000
        },
        "screenshots": {
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003213Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a1d244c98f09f04c7ce3fbd2ef6c93da1505977c135c91346eeaf266c94e1db5396b33c09d83fae48a86c6c15aaeecb488724e729e0f92fcde62353d1f9f25d24bf90141308873581068f74ecd3a4f790e4f4c8a8e2c06184f07e86b217a4d56db594b205e9ef0fe954c16b3924d0decb78b29ba0d99d0cd830b9c350e4c164fc16d6f0483fb266c1a3a1c7365a2884d4156d031581c57322915372657f6ff35ef8e26d51176ab1257453aeac438ffdffefaad671f7c5f6ede70dfed215068291e928fbc6a77bbe51a15d720be2c0a5d0cf189854f84fc41a2fd12bfebf37e7b53034b6085516181df512661828998b97e1cf8271f680e05ed2d4cb6321f2267",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003213Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=871c64eaa546874f005578863521344cabd5bd81451a466e6d191c2479c222003b469f3ecfc0ae85fcad568ba7e6d6171a24f3dada204decab7518b03d927273286f4385e59f1587c87169df0789069f2ccac12f5fa083aa891a19a6a46fe898d6a14880d702dba226ed66ae73727e361730eba7430c0d70db1c19493ffa8bb6e267f15f0ee90e210a0329e0c1dad65615ceb0bb25ac325ebe21ec5636342fb1af35b8770e6f33edf6613b4f317f16db1f42b8fa6de6acefd23c3b7a14dd19a2f4d764d20ecffdfece9f66478b6e2d6892d65ef6c259a44bcffacc57fcba397e0e0db7eda96a5daae583c0d61d6a1bf91ca0bbff6e6b030ff278bec217d26d33"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003313Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9ae4583f59e64400bfa1502896b28bd02e1852507b7f2e4f1a5cc3c2715bc7560a580df0e7113a1139a1f72cfa1ff23b27dc33e78222f1adad96ed3a59028208ae764dbbace8ccd45930013b1d9c9ce33ba4000d5fbc95eea0c6e02db4657e312b16504163fdff4c3797ac7d662ee72de78550aab1315d08af28ad0eb79e789ac0f61b418b0586366f00051ba1ba8eb826abaaa3e74cd83fc0ccf5ab18b2cb2ae18e9d3282536c1232f801f4643f04d0c1716138485e3d7ba319e1e679783e2b843802d8ca0b56c131a4ed95f1aca6f04acfd066414799f9d25fb108f45dcfc00e9d070e81b34b8c26592d41940c04bfd99a7cf01b92ae2a4d14535742450f62",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003313Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3624c2d2f2427aae9a148835c9c46dab20dbf87de51402f4edd0be6d39e3b4124371278c81e9189dadf688d5becc2dd595be4ed9bfd98c4ddf52d6e06fe9f949bec245ca3d85a95437daa40fac4dd402608bca056635979702c4a66db8c3c829fa46453a0cca992182ff847dd03b435e4a5033302d059f9cbfbb3c32be9dd0ba25cb6017e36bfce0e1c1aba211e5ca060203b1491d95538cc7ecf9a45a98c8005cb308de59336fafee70e5ff80ce1c3c4dc94f1fdaf20bb17d04144da91e129f35052acccc80588dee14d5af756f593d3f18c8e03b92d6abe724c0822d70486ecdee07185cc5b50774e15283b4ca1713103947b30b103596fd4125e9b42f28c4"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003227Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=92afb6d309c9f894405956ef42878b12c8ad0cc08dad29c7f4c35e6007e65a3ce93c5c49884c4043fcf3ff4840a7195e900221bdc8f142973b588b3644eceb53517d526541c3c6b1c943fd1c5e558dfd79be8a7bd796f8f5c22dd16447c783c6b85500eec2efb1eed024aea9818aac9acacc6b607c21b0474db7afed27fb56c447c063ac5670419cef0a7bf5b34549ef6a9d1793545b96ae1ef7c4b2bbf6ce202cdcf7abd267bc5c2922cdb02949ffbbf18cf8ef872a60f81cafc92007f0d6790eea7ebda03846ca43d823ff703713ad3070c1769f04cdbcf599da9a730fa13cc7c770f9364ae67e22ac485a4dcd24dbcaf2591ed6e4eab8cc425643b3c0cbba",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003227Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7209020fcbfa829608b88b2f12cce53309299ff3ea4a06908de40b90203b402f081d265ac8028fdab50df441a350b3af6d954227c0976dad7f7a625a12a758da661693e6753980f4111ded67c6fa9fcad07bc0b160809622a21ca0e80b53201a99fff0f937028790be67cd3b83c7ea7ed5dd465b3528246d9a1c720e65bc55bb6440fd3c6dadf062428955820762c2bcd996b7cfa0ef0a14a20dd8cde94ead6f1121acb5993c4c896a32941fb167821858aa67a8ed9238c281a66bcda10aa24447ed52eae2ab1ddaf92755fcb882bed15df04a81607abf08b5924ea5606b3da6e1303baa84f3f3a5acb1119ed669aa07e097b976c26a62d7bb451b7a04a67bc7"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003358Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7e1efcb5a243dcdc83bdc6dee0de94c381ddd127c3e4e6cdc85cd97b0b3ffc95734b536185ed13eed73d3c042c07dc90e4d7f413cbe1c2f20969a6908105c354e5e0d4d035a30339043315fe522c0847821b517518fdc1ad84e677efb2ae5acef38c5439bbc83bdcae940066327fab21ef36231b24b948d238db4a9b901f24b1a33d4b98774f653070f6add7db3dba6f4ef52c99164f8a99e08a65e74346d01d3f6b296f7a69d6be9d2a91b31d0c58c127bbf830f7cffb73821e6922bda825ed5670ced3671baa55860696ad1c45fbd692df1c4758d3825433594cedf341e5b28f50b644ff39263b7df4a77694e2095aed6f9e4194431dcde562473989c0a627",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003358Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4435baf7f67108f575b8bc386a2116750f50494a589270a0bc090a75ae6b0bee89cfd0cc06705081b3b7144a7c0f767d0e945b0b4ba45db196353c0351ea6ccdce837e9e4cd30b43d7574ce4851afc9ef99391b715412a5bd1de2d8fcecc9a10624e8e98b72a1b9f8373388c9f40bbdd068445f45f7562d699e0cd074fff8173e8a2aa836b1471a0afded0356abe7d6e893bcdf7c9bfd85a4485620b1b33e057a57b9593a262228d117e66528b81f8d73eb93eb9a5e322c98c1d19ac6ac60d759fb2f438d6b4f6f8af0c9c88bf44e467351f7571a8783a8e884075c9eacb59948882bf81a681bc472794bd5c80e008e8db78e8bbf3325b5b5eca1836fa34c970"
            }
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784479,
            "nanoseconds": 352000000
        },
        "bootConfig": {
            "emulatorConfig": {
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "platform": "gamecube",
                "endStateMemWatches": {},
                "gameId": "GZLE01",
                "startStateFilename": "ww_game_play_start.sav",
                "id": "tst-b477e4569356463d",
                "mode": "turn-based"
            },
            "goalConfig": {
                "condition": {
                    "logic": {
                        "operation": {
                            "name": "<",
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891"
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "rawValue": -1,
                                "type": "float",
                                "pointerOffsets": []
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "id": "bootcfg-1e5a84bdafd34d82",
            "agentConfig": {
                "taskName": "Find and climb down the ladder",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "temperature": 1,
                "contextHistorySize": 3,
                "llmProvider": "openai",
                "model": "gpt-4o",
                "maxIterations": "10",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube."
            }
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-ce06410ab83a44e9",
        "agentState": {
            "status": "error",
            "id": "astate-7ea303f524f94337"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784303,
            "nanoseconds": 165000000
        },
        "emulatorState": {
            "status": "finished"
        },
        "bootConfig": {
            "emulatorConfig": {
                "mode": "turn-based",
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-ce06410ab83a44e9",
                "startStateFilename": "ww_game_play_start.sav",
                "endStateMemWatches": {},
                "platform": "gamecube"
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "id": "bootcfg-ada2a3bd62154847",
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    },
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "name": "LINK_Y",
                                "pointerOffsets": []
                            }
                        },
                        "operation": {
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "name": "<"
                        }
                    }
                }
            },
            "agentConfig": {
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "llmProvider": "openai",
                "temperature": 1,
                "model": "gpt-4o",
                "maxIterations": "10",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "taskName": "Find and climb down the ladder",
                "contextHistorySize": 3
            }
        },
        "screenshots": {
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003200Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=21baa162204a0a24920202c9db7a17751329f0190f2d30fa5961b793fe7621891f4f0e9006721012b6accb206c6b1f72f91d6ff9b8dd101515adcda1f5fc26ddd42f30a8cc79a10f29444995aca7ac4ccf23220389d5d4eb9f3240fc02eb143c4e117792f4c3a9fccf32756e1bea3672b28cfd4984f1f484534287ded8e83fe58788844c14cd52b2a1788caa581afde99c52c9f08a57345ffe2e255589cab3349d2386067ea0a9b1e57114ec8edcd64c41f3e2c08f4e4b802a62a9bdaa4af11764898ec43cfe6da177c481731dc738de6a3c5b7335c93d5b90df646edfb095140cf324e6ae3ec72645d44a676d8a5a5d004993d444e524adb9b8aec0265bff94",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003200Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=954c13f962494eda712c1e7681a2a038aa4ebf7c4778ea056671039ee6a20d123cfee97361217c5cf21360b46b4142b37f375dfbf50abec880f851b8065115231c10b93b4088f71398893e8c0cc0910c7c0c682b02d7a82ebbf746ae51f0fd09cee083d94ba5d44a94c35d36ea5cf171482fd51185d75a07ea0252ef7e4c960f917fec378f8370c31290b11870a2fce454ffe1ca7bf7cfcdfeeaca724b59a7de9f07915ff1095ce25a83f88b6a6e230377a28feb3b54973dfc26b14e90d47a45967b9cd20096f932f87879f9cdaf0d4dd5f23258e3d5fc91cfbf6cf9d263b432cd2765e9aa5b4902fdca8fbf57c03fa610e6e1259573bdeaa8c398d4159bd11f"
            },
            "s-6": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003329Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4b749bc0b873eb84276bdddde451eeaac0a76ecce7d08343e3c75cace838104ff3b146c414d9a96ff5a9427e6868fb901521d4a4122c3bcfb9be4fb403a0e0516f7449a2cd290ef8fd6cb2c83f076319de7878265baabc7440a28abfad849aa101809702c9ce4fce850379e2b551bf9b6ae66a6dd2f921c92fba44f3ae45c6f9fc3c7565051e6ab58a2526926d31c443dece05b1fadbb31312c4363751bf19c83d2475d9a2488614cf640c805194461229b0b6d19903a3864aae70de2e6c5a162a15ace296e641f1a5715f79bca494b7933a3b67182013d0f3ed5925d8feccbe4256cce1aa9043800bce50599ff2b505eb338106e9b4155ab2c42a03844d7a5f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003329Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a19f0621d02380786cf7f118e3699c577b1f9be0979f405fdda4c670be44ba4c228adac358b06e1a26888787f7f274c58966447b2a354976c9e47fe962a7d24a84e6f9a3224e19eb615dd098470bf281747a0701673dc3a1e374f85273cf75e0385dd646f0741febfc633958b92b166d1644e7d019ae06b8e91379c985a1a8e48a289086bbe4c00450367ebeb32c089b0e43e58f445418a48397f90eb022aa97cc117728e98e96d617a6f57e799a1e860abc1217a8ce5a0cd448dbd5e51aaff3c1f7f3e955bb3571bc43237b7b87d0020f6f07f8ffbc1278bb6aa6064917213165a9af2a7af501f21ca0b522bc5632fbe4f0f3900935e33a1020bd063320add6"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003243Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b03fe99bef1fcab771aef0c92eb43354326e491ead54308d0bb4b1b5e76263d837565692b73bfed42d5f17011da369d72b001bd93d1239ab6b0d2e59612a71ce5d2be8e9a7180f95ae9efd22716ceb7a2ceacb0ed1ea4dfc6f9402a152d7390f62f00061eea8e55a95a2f579499d76c4f38d15526a1a674290ed39ace35c280543e358cc2e240dd1c656d9a7bc8a66fdb4e24294535eaf6e57841896bd773f676b60dcf4728ba5784efa7431f4e602fb7cbd8167616d73c729e6f63a8cf6c5f19950a61359a6985567f47c1fb5932106962c3d39c51d8df325bca342a0fec9fea0c5e1b0b426ac66a23e65e67192b24b6758b67bdc2bfd378daffcdafc4fb89f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003243Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=182b445865a6b828b3fd10a52b7e2e5a1e87f85a2cefa61b3e79f229c0c8105a3c44dd657c2ce987e4730f4d0f32e40367fabdab23ee88c771f087fa3718b24482b6410f73a88a9e2d0ea6711214225489767f0f57f864a3b44e2e60188cc6980fc10c5e39c6387f13faf4c18ad6a06d99cdc6bb61db2d78e951197246163ed2e6a6432ac40a888818bff8cfc65d35061d610860b17efb8caf235590bec4984adf4394b633ad5fdf310b6a363ae6394c53831194fd69e7ab27d3aa1f50cf7a298dedfc5eb42658b7420f1ee32c06cbf07e457bce0bf290035d48e29c6ecc97be2f0c738f891fc1350a6fa4a0967af6859ab9c061bb003344becc58f2b09c1444"
            },
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003354Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=741010197cf832285e87e2777089623d77c441c820e09dfb6571cd8175d95fe6dd6f5260771b5a9038020366c35e4157425265299a7efdf4110e678a176ae557df3752d5a86e50f0d8f253f3119776b579ab18a95e1fa8e7a6d4677de7d6dc17860fbe0ec32e0e2619ee84021f538aae850893b1acbe6c3b412a7caa031184a00e57f60368ff2e037c7a8387b918b14a8986d34d6300a63ca376158409388db558efad74ff89bcfac046ff78a1b2fdadb152b6f5d121072b63165846ecaa1a3bb0c21193398d01a9fa0a4f0c449149f2539b59e51ac2814b2db19f9c9aafefc1f424c89fdf3c82241c4029a2b04996a8d3b55f83ec225c25d45321f56f4ecee4",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003354Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6df730389eee8bfdd8c9fed9b8a7b98c942e255ea05fcd205951280b017686ba904687d7d89420d39c693b03cd678805b64d2a36f1025e2931ad7911cdff7caeaff99158e72a9538e2bf91cd107706132a2ac1a4765d8093d361e086f74ceefe9be6175a4b47b414d98d25a4a73024257761ba66c25f15391e364cc97970640a946062b1fa07e7f6cb2fc3066dcb58142531538c21d7f32bf54f6ddc2b96e98615b7be2826428509e5af12a93ee21ff6fe3658a00f2d384af58676791a24d13d2b036b9f87e517a416fd66d957b115b2c7a1da8e1599b595516ef74f305efb703c89f22d610d5b8e74eeb82d807af2b489d9d2f6c9854d5c5290b0b3e3c739f5"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003307Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9a321d292ba19ff346a57bc6b83013210a5c43f99cceb11215843765fea4eb7f1a4ef0929e7d04fa22e5d66560448745edb5ece515f5daeee0a583818bfeab68e101cc85bda74df02ad30385b49ffaadff7c87d53c57c76ea71e0525a1eadec16b79094787dd73a8d4f5a0b6a9c175f4aedbad16d820983e3cb57cc92ffd792355af742c7dce20aec3c4079cde00646b57d08cb8e97500e67ac3aa21078e6f5cd21efccdefc88d9b15811c61d6c2b054a2f4ee4a1bde408babf3c42f5a4a06236a07b28f9810c31754ceb4ac802fdabad3cbbd020f3320c81a11304be5a695840c0d0a376c9a450e222858d6e656f13afbec7b1cf88b4dc577aacfd76876e3f8",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003308Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6097ea108234e42d7b0475ae4cbc96977a7053b845b2deb8b058b3b9cf79d0c3074c6e61ef7006fcd9207894bfa9f37927ebe62739f1fde4e4ac6f1b273a6bcd6448b67d1e7278dcbaf76748d0f99b20ed0f915c29ce1624862c6cbec0dbdd8ee7c89ef19e57e0e922f2071faadc6519b99727f27faf939fc708455cb3214b274546b059d2177825bcf3080e02a2a18e3a9a2e445b799c2feadb004e7f26975f54895835bfe5a9f89b319e3e4bac95cccdd4a2814b90e574ad83a3aca95afc44f4cad25ebf660c061d9d0c318a28e35e0506ac996ecd4ec1ecf8fa45c3055132b51520d5881c1610a38e72215d00cddb73f023d115e8f5f2d08870c7c3bd3e64"
            },
            "s-11": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/11_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003526Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8afd0d5c4a6c89a42d2652b40949ff3e3cff42f6ee5a9d57254f74e2f5df5e8491d1140b467f3842fd55bf9d20f2a4ef245c47c75808d78aae5ad7b32dafda5f027e9820eee67fa9bfa8175f463a0ac66fe2ee039f28eeddd62c14af005b6b30bf6a3a84b5945995d1ca40f834d78142ffdb4cb3ade2a4896334a38bf838cdd2a4fd2ece47508024b60bac9bb2a88708529e1b39280826c06ac3af7239cf139c7ffad61328ad3b8cbc65c840a52829edbaab6ee96be806cc0dd43eaf7f50613d411643266aa948020f0ef70395af1b651e119435054536e9385ad40804b2565dae4eeeceeb439ebd0e536c48ae61c4222b8be52f259f458ec2b4c974398c6197",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/11.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003526Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5997ef319df9997afd4468ad600e7107ae0cb420c3ebf95e1fce16fee3bbe294a4c65875da0fd1b868f6ee9ddde8c875ea00770271d3693e47000be176fa1d6ef6e8218d7dad5109e39b1d67f216449fb1e1732fd9fd17648269942d5d210893864dc26c9f779630cbe10e4de34b1b50e609d768ef96b0389288943d27fd142b5f4761655580c8c27fa082d2f7aa3843f6bd29e472eea0ae2f327da8e80bd188521846570defb62ebe5138dbdf1cc8fe3a1a1c8874741e8eca763352579caaf12e918f496a0355ae4f94495ca991a04dae55b8a1dba70b3cba3998ba14cf5d33746b5c7e4b9fb056e8e320a0a62e528846c678cdf164f6e7d2e61f91ebe623e5"
            },
            "s-10": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/10_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003439Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ad54ad123685031f534dead36f939f80bb166ea27ba8d9e246911a3a66716b1b55df6a7a604569960e890b79915e6ef2e4811d90d60257d37a383abc514029d20decfb2103883133e2d6c818fdae382981bf6545d1194bee6b21ef5642a581706f43fc74a6c01bcdfa1f664b75b82417e490fe223b0cf6966ca88c2a2178c5596fec42fd56f198ce6aeff2582709278f3d5b2d16c95d616c8c180bb494ee41c298f13c2cb77af6349ef539c592fe300d85bf0661aca256845295de66f3d9f90192690778758b43ed263d9831f231e0660b8da56f564b9d53c2770543ec75b16cd52d7de3c7dd786cd9737d95615914b26aaa77bf2205b4e10b97c044066689b1",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/10.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003439Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1ea9c31a23ef4c81600c4ba14b4bbd3b16e4f2fed138f58560c9c13a6a389ca900a05c294e7474c7237e060531cc52372aaf1ea0158311b83a12b43209b483c172f7a0654c4d7a793473687278189633956ad887747830000d6f9f369ef338b46e6f02accb4d3060d04bba59e8b7d0d5c6b0f459afb30d3181e50605669b56ba0fad288d1de79fec36aec4053430b99ae04e48e18f220c0f6e2d459285276ee2bf8a522f99de137fa3e7c32d4e6ed8ec7fa467b20accde70b47099fec7fd6e0037d411bc7fb8599c1e7bcb69ffe741fd8e0468f24bdc3e130aa56303cb0551b6268de8bdfdee0a1d6970be04233b82a36240d7c818b7025931cce16ee8eed4bd"
            },
            "s-7": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003339Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=387341276520973a4de72a291a58144e8c1e45c7b6a031705cbb1a9f6b256194279a3c96f04099fb2021a99f5042000ec522d7dc405ab07c9ff23f1bfb7ef7d90bbb89c638372ed0dbebace2ff70bf86ba3b21db8aa7453f89d836421a67a4db7e4420fc2b0a99ca9f1bd8fdfec59ad9c6f5e3d6c3121a04c4264b116d746a0e0b41f7ded91cdba4c378fc8afe23163e63bb37f709c143d2ce910ba874d8a128a7b2089463cb0c1895ebcd7b78d14015863f6094e11200cc6709ec6b21fb844e5fa78b064539cd8a4b77e7a79762b648425555b9a89d36464fe819a81f24b626c2a273949c5a58d9dd5e0287bfba73a0fb4840c29d0da8682c2a27f6f9fe0b90",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003339Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0d6b8aad1e2eb9d47770942681a57b1470988f8671fc59c1c3a8759bfe53290f44b21784755dd00b6b65d51bd7876dcce2a349980003533d8fbad431bcea573388303062531f810dcbe87d7f5187ab33e4bfac3e3c345aee97891e7e4bf92139b168e80858b4fcf5a7a0d6f2766838d47c5ca840491fd01b169e95d03750b9bc8cf03585426dec1c9b3c799fa2a63c5be579655c55f9b89285698d2b0b55440f760d901a4fa5c5ceaf16ee6fb5006b138c857fefb897f73ae7699cd9dc80ee94e8ce5a896d63485b87a6ba6c9dcc459b63e4f57c06e2c42cdc442285d11fbeee7ec79b5e6cd4884d1cf730a11c68bb1d42aee35453a8f90d8e7854574d1779de"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003233Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1285a5eb6dc7e6a50b5464fbbae8f8f6e21db9b31fe9ed3278b8c90f2ea87f97c4e70f72f6ee4d56115f5346e3c9704cd1e4f5cfe2bd5cbfec3f0565496a06e361aa9259db0f53fda8a5d23c241133a64467dce85c1c49f28467144dd5e22881eb093cf9c544b0047ad1d114fac648baa8e2712470bd82b57e985fd700523eddecbea244cacd1eb95b031e81033da8c8c32dc9d935a888baa388bc36ee1b49429fbc40f2066e06b171ed32f9e5a042be6ca8d67143d7bc5f06a4b36d515e19c97ce0c4800255bf5befbbeed5451be63617a5e72a30528b82fbb489bc26391f012f39e6a8d9275eb320bcbb95fb0be99dd69dd4718126f8ee8bd0894eff3eacb5",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003233Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=092bb0fd75257ddd6f0dc1021c6ade062fdf53474f907d4eb8a13b10b112e3f12bdd543f3bc816ba349b31e9187d7d985dd1c60d46c4125467f8ecee7c7556bd6c22c66e9262dabc11a21a34ba2ad9dfab8b181dd46cdd31a87b69214936c5bfc66ac3fdedea1a9cd3d8a838e2e7984f7a4b701cb0cea90f87bfa91f824d0a26a62b631b207424162bca202904c5467d17389ab6a29fd8c184535b1097b18584889847588fe7a5dbb40fe610b143059a571deecff158acf466351406c49b8dceb965060d5c20a7b2afb418333c16fcc9570e22bd2b76d36804205dcc2d64448678db789e0dad1d4c94fef0d4e03752bac73720a1cb6d5d930f2c62ab09ebe476"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003224Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5d12d6c30e7f55411a3be1102259840e5efdee08e5ee61a00d9d1c046168c1a17c25afb18e785e19ca2c6b8a919c9313887a0eacdd5688870f1b15cb51759db33cdffbdd0559863c1a374d441c9f8f3e0282a54a40a2cc725afdf7d1d2c6aec5a2213231c759f15be2265122c0caadbccac30152fae1a964d0edb6de41da4ce18229c785595eb65a1c3f4f89eda2721da25a1d979c6e22e0c811331d9275e1a54d449744c7a5b40558091d23b94aa2581964d8277eec8b20acb75aa6487bdb908dced2d4788f64808066b747552d3ddab8b0433e35a4bee67697be35b1e1d208b3c977122853494a601ca5ae47000af5ce9596d4f5a69dc493af76cf331b68ea",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003224Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=12b52ac00e6d080c7c8c886930a9a30da9d422970de18a23927470a76e129b61be6ddfbeb4811896c17360e3440a04eade800f04715a6c5a6b5ae93f6d95af5afcb741383cd67c8d7165f9549ef25e12b579dff961b33e1d21bb725ab87a803d236f15d40da6015e38fc0b15c1dcc0d8db8c31bb9428253e8424803d01f94db1cbcad245ef34c3298f6f7dbf648b7127835226c7358dec4abc00316319d46bdc90ee0a2b673b8305b01e729419b3ece424e8ec34f36bcca488a277205e0715aebf869ab71da29e40a1048304c8fd315c417c21af25cb9cf2f0a371c4b05415961d366fbf1b23318f9bcaf70d93de081ec624c69404b2c7ffeb977a76bff27748"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003350Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6d1c329dba4875a6001f6a611fbb2da5f5f7217adce2332099cf451b0d8a2ce6043a2226a6d987b0766ca18842bc41e96dbad9503513ef8b4547c7f54c1549b6c430c43c183a817e5a492a263d5747c185ae1662b4063f63c3d47b68711a64375261c36e68be1e63c1ac2cd1a2166f30190ab8175a9760da0074aba25cd97045f4ecf094da90688ffd17ffa5368ca7f90b8811a54cd439e984ff54e20e9e8db1c9b079411c073217d071d58d48ec291b913c89a9fa9838e3d38c725e9b36b615ebd724e6c378ab75035f5cb3bb3ddcf701a0039b1c7b59ae134b03870ebd74cdc15c05e8528fc1bc4e741760fbc33e86590733765d309bf038bed4096c2c1476",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003350Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2ac022e51c59ded1e4f6b20a36820cf0033be3d4266ad945c81c3bee3c4612ba334993def18176c1015d80810a8692248db04ab0e2caee1e29bc728acaa35cfd28a40e02ce89c6f03e31dd1e64a797b1fa2081e99b916e8606258019e024b7c89e63444ced7e58c1f4ebcf977789d5ec81aa1247705414512b01173fd08716ca7f51b1f68ad8c1333603cf5ab6f67bd97017b8ca12be01e03a36129fa30c7474eb064e8a33424ca315226a0c9f79b3d753443f3cfb011366703eddc90b302134324a5a06cf7f943d3d902898cc00a5ed9523a81245097b4f8b18c2cf5fa8f399a1e88adb7d9382ae4d678e02f7c24403014fd7926fdb31225dd4b143f94d1125"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003319Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7ca60788278e934468a8352581d253f5859c93f535401dcfe33bce43485b1883c44c3855b7afb83c7be7fa5d9f0636e5d0ef6b3d7d9b716f6708ec75725d1c9caab1ac1cc71f829586c6c7dbb6a9060278ec47e3a89f3bd0e527dce74fbb1aa35331f6351fada070365b2dac852ba8d1b87b14ef12e37f96bc6ea3b4e300c35f664c5eaf213b82d89bfd733a5ccf506d35de61dc6bf08865ec06087449f7cbd7787233f5b1de53673fb5018bb0442a149fba1d5ed71b18f9c33dd7dfa823e14b2d9687843b3af9c180347f6ce80407b2d99f7fee1ad62ace0858bb750be58048b2b18866f44379b8fd4a0963eb46d9739df0c932ec4179f32f20b8fdd8da3871",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003319Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=154509437853c53986285126cfab37061b415de561bc3a405593f309f0fada2c9441ddb69e7245997cdc0f3479f9252d9fdbba6dfaeede59dbc61637f624f165f4722149b6c7ea5a2aa6d27f23c620950c69901133141509a964433b0b54130e326dc6b88658c65fb139d52c175b784152194587b2e8fbb5e46ba186065391d947c0610a71c3e3ed4cdb878e4970518181df3bbf7a408bacbb8306c88e978ab4d0f0dbb079c15427ab14ab7cd50b900fabbb2b3deb9c80c1b3b2386e3da29a95e0d410628ee9b4de222999b34dee1652ce38e13bc565480f6e4ee6fc91b8e148459742bb17ae08cc4f62c48f0b61a5fa698c5e6e6ff23def0e16661a0914f94e"
            }
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784566,
            "nanoseconds": 1000000
        },
        "testState": {
            "screenshots": {},
            "status": "finished",
            "id": "tst-ce06410ab83a44e9",
            "stateHistory": {
                "turn_8": {
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
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_7": {
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
                "turn_6": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-11706b5345124834",
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784412,
            "nanoseconds": 234000000
        },
        "testState": {
            "id": "tst-11706b5345124834",
            "screenshots": {},
            "stateHistory": {
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44AD7000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_3": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44C0C157"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "status": "finished"
        },
        "agentState": {
            "id": "astate-1ac1eb2e734e4908",
            "status": "finished"
        },
        "bootConfig": {
            "emulatorConfig": {
                "mode": "turn-based",
                "id": "tst-11706b5345124834",
                "endStateMemWatches": {},
                "gameId": "GZLE01",
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                }
            },
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "operation": {
                            "name": "<",
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "hasLeftOperand": true
                        },
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "rawValue": -1,
                                "pointerOffsets": [],
                                "type": "float"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    }
                }
            },
            "id": "bootcfg-d9abefd2f1254a91",
            "agentConfig": {
                "temperature": 1,
                "taskName": "Find and climb down the ladder",
                "contextHistorySize": 3,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "model": "gpt-4o",
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "10",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective."
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "experimentId": "exp-d7f3b57db87b4310"
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003301Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=778a9701e26fcb192c5b4b5de706136c57250bef20ec63bbcf6f9c57b2e0e6b1847aa0ede3dbf775b37c45f2af4b1dc24d7dc079e4cd6961d5fe2ef29bce51bbaeb9e0e79b837d5434fddae5dd5f2fa34cf6ccd12587c261b4d351d6fc0c3051a64108237af7f75a31b80142a852aedb66e668be52199775373b1b08e6ae3d86aa83befb31612b35cc2ad3232887c7dd60075b248376077f8cd2041e455ef3a12037a4120d79229f6ae034f53cf5ce1fd377f22d0fd2187bb0c1911c3b4c372da2b4d1336bd6b6d352af0d0fdceeb991983c045a822eaf00e777d30fd0d9ab3bd632242a50b5489beeda1e3575b4d93082591084126ae9dbfc81a1b0db29aa69",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003301Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9ff9759290b46d7d143709fac1c1c922d4de570eba76c5896235d36d392b5db495d7faa346384ccbf6169544a8cb0fa71998dce76c2654e7923aa3902e3c599a816b07def1aa90ff32aaaa57a327df8a8dd2ddfb6d9240f9a6327c86bdfd720266e20cfc0a4e0ac3c47c51396f85ac8f7b6c9ca97cca4c63de71ed071a7f9dc2d742b55caa67112235bfb80f8c89fdef0dd5c9e9e983630e8a5263948192388a4904b3859cd7d214ad042c3b34bded082f3befddf893b748dca1da32f7b5e030dd9d71fd96b89f273655b86efd8e97ac9b3c2f3a728644b92dc582ec00ad89d7b0e4d3d2c33641b095c5d52976230327c1132fdb73f68b75718b4aaed7dd0eb9"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003331Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=74db592740cc35a5cb37a687066d494cfae485cabe1c0c534a9e65cb3f9db6ef000ab3b53d6196de927845d51dc7ae45a4075f14026dd52ba0c063bed6a25762ea5c8c5e0e835310f2b5582589cbb2f11adcb7ad5f130b8929d2bdf8ead397bbe4b94607a72b608812cc7917aa11ec059a19a2b465a493c2f0e9ab7ad305cb55d1fd7e61e8c30dc42d38c4088a7dc127b079771ed4b04121ef1f8e65a54a36fce44b738b89e24654ec131f7aa9ec2eab7dfc48ca63b253310cb207ec3c3913ae3f4ed60c4117b75e1e848c2847121892023b412954536ab87b928e47d9a8c4a64d2f16c6db648c13b69140e992ea7a13c21bfc995b3249fa7b06a981568f0ab1",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003331Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5bdeefcd67de93590f67125a75a2c897d767a59de81f7b9a48771ea1a05e87d9596be094be9df0041615e9c881f884067517693eda90a61b1b8b386848f0c42059db68c5b7108c92caa9ae31553bc16b18a4ca32daed371ff11dde0759c133f47327d9fdd195d55d7818e7bb507e993b4524eb403864a4a1d2c03c75401a401acf34e19e5f25534068cdc826c9ac7791dc584937fc37ef309010f88ebf81d84abbaf28380b91c1b0dcf34313ffe29e597832b3eb18d0c0344729465a97fa4a37b034df915e1ad7b04113badaa2b6b1e3b1ee82109afe958dc200c3928e45efdf312619e52018dc7106cf620fbbc7752910749d29c97dd678c02cd2f00556e044"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003232Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8191dea3a8b4b210949877ed9ae8c0a593e338bd5bcd65972fd0c1341523b936b664417a12eca361543defc3fe69c0df698dc5ddd04001d680112e6afb3434a84c939d24ad10d9e678a679f60427c9267e3baaa7f2e69f3495d849e28d80c23c33aa681d515820611c4d3f73cf0b9749bffc7e3ee2e986fda1c4329692a366553fbefe3b60f019d8c496ec43a245b9bacc7dd42d542821d53468a8a88b60b4f9291741d00f5fafc9b9140a93e36920f1e081aa4750712fe8bcd6017b48816b493ca48dead97eb49c01ce600c2a9eef839ec1484d951d93d5bc7a2e24b8558bc9dcd8434229ee4b4b7f4c198b9a2849be8d88463405bf5e7cd94b9718a4c630b6",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003232Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0f18fbb328b05234e2140be840fa5548f3728bafc285e63c87f6317b02b6616ba163c150d530a3fcdca0ec9f1e783f1e5e69f4f0a19229f3bfcdce0a508ac1406391984b5e8108dbc8b9ce7eeb29e4fd21a4d9b34a2d8dc1cf91b898f4969996a8c5bc3c59bc84dee63bbce4f6272ae1d946563a50fbc74f9e5fae615d2568227254ed36811142d3209b666206e825ebad47d1864b50c3d590b488819d9e36baade04356f70bb0c23965dba46576cba4fc496944d6510b5d97382b7f1e37766f708100384d9e8b3b93c403e10980257e25d19d269eb8cfcec3482130f8b27353ae8f19c5cf18a2767ad01127b8a908ed099a1ce62105ca791dadc584888cf49b"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003252Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2feae6b74752475c9c9475e7ba01270026a1b52d0a43ff9d666c04b3f4e3e1474c6ad75563d43bae999bd883c69cf3b1988466cd60e549a08001244af57f4c842127c40331d8f12097c9d2d1327a11cfcde2ff802d5d7215987bb823bce31f05ca67613d3cf49dd4c89ced18c6c9d6e58491036c8ddd91b3af806ab16e555ec3176c6c60ae01b3bc39a1beb5ff5ed552614172d2f1695fda2350219054cb40d4f90ed604770aad7a49ffaaf3a27c9753328faed7b4addd7623e45eb3ed1d39fa6f8225dc9d0afa78daac0409e649181a4648b8cc54a1fc5c8e2a0b8ec9bfa1f6bd6c06df14bfe480d2fcd5a2c49ce9f3e385c732e378c30074ecf15cb162ebe2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003252Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=744585761d09aad38145485d2a0b69d52945e63588b20fc515af7da19df78f48c3c2aac4e8059ce31f9288a8d51aba959b1dcd088d0b803f2b0e6fb0aa0d5886554d8f01a89532d3ff4127a8cfd52fcbb59d570491a3583c232994943346524298c71e5c0399063ab3ddbcd9a2bce4746bd03c261786e407cd2c10df2b0a7a4748ad00e69a05275d0a41e62d194f32aa55fb095a7ec64ca715e152be7c2715fd336b9f566586dd56ebfbd25966ce61ef50acd8c390393e4171291a10c49662e50c38453f645694a47d13967d04281b468591dc8952f34fb40147e9f3a08b9ad2888b21aca6963cb984384a380624d7d45576cf5c920865620588d0f5dd48a65d"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003316Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=057bd4b0a7a6eb7197cb4d02c0a73303db90825e49fadd22f5962e055e3db77b1d3ff1b5ac2bc49b32ad30d1102f27831f388b21ad2c8f9e8057bb0490ed98d306f25f7afd6069c72b3971c63a8361f0a74e9cabec07d07613e566755e9544a8f12a6577a7b5d4bf56234c13310a93f0edabb14863aff95f129df981e2cab7e7bc82069360c4d3e50b1f2c234247098bdd6d72e385dadba6f157b29ef8d2d7f683ce0bbb8f03b61d6e490a005eeb8ef3fdd2a7e839c13a69f670895556956ece274a642b3b948aefc4576d40b0ac01ca0187adafbb937db83b81aa0719d19e90b297fec060d0a2222a2fa774d59ffcc537874f25d753c6347b5b8fca9166d9ad",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-11706b5345124834/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003316Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7cba9d618ffd1e178ab0d101b8a7529aa97fe8d290a8fb62c506ee70d44f6408cfc8b9befb0bb40b3fa04b05eb88d9900d69dcfdaca7e58a3ffe5498d1541df6c985fa0986344106fb1e3fc8ad2e92a27deb12d1f081c8a066f94a583c4177066841f492ff4c3206f23c4a7e7563592183c3ea83cd5c58da935602e0b795a3dd060c2ff285ef8ca96301f64bca615e75c4df25fa5decc2da5df0984eaa9c5f952ea70f99c0b28134df3b878e1fe40dd4fe303818ae471945929db16710a0666be7310072ea7c1a76cb8d1e602c27f561795af1c6b51cb77c911d07a6c6cb72fc4c99405f5d452b22b6dbdde6f0860f1dbde394d62a829bd7c8ab596749ae782e"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784331,
            "nanoseconds": 989000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-1519bdc277e3464c",
        "emulatorState": {
            "status": "finished"
        },
        "testState": {
            "status": "finished",
            "stateHistory": {
                "turn_6": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_9": {
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
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_8": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_7": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "screenshots": {},
            "id": "tst-1519bdc277e3464c"
        },
        "bootConfig": {
            "id": "bootcfg-61e9a4786a504e69",
            "emulatorConfig": {
                "gameId": "GZLE01",
                "id": "tst-1519bdc277e3464c",
                "platform": "gamecube",
                "mode": "turn-based",
                "startStateFilename": "ww_game_play_start.sav",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "endStateMemWatches": {}
            },
            "agentConfig": {
                "model": "gpt-4o",
                "contextHistorySize": 3,
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "llmProvider": "openai",
                "maxIterations": "10",
                "temperature": 1,
                "taskName": "Find and climb down the ladder"
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "type": "float",
                                "name": "LINK_Y",
                                "rawValue": -1
                            }
                        },
                        "operation": {
                            "hasRightOperand": true,
                            "name": "<",
                            "id": "emuop-e59df391b2714891",
                            "hasLeftOperand": true
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    }
                }
            }
        },
        "screenshots": {
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003259Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=936555c8361b2c21dafebc831ba1c84a3fc36af29b8b7cfe918c955e454cac5ec8d557e23048b9f4e6a29876754d7c9235a6f61fc7100b6e88ec70431f514f61237d5bb71e53b3e01befe2e0852c90a367c669233bb4330fec1b5ce4aae5b98e33bb82d79b0315fd52fa5f7dde48b502729e2b27e0c56fccecde69067dc67881b8a164c4eaab243a460f0d12e5211386c8c16a4ff025b464120f99f153948fa1fc888533771ea08248f4d79f514603910ed6abd624816d6422360423335e62d22395963f4ef1ac6fb1ed169ed72d1e9382c0e9460d99b2b103d6982192c885001c9539f959a9a2287f83f70a45288bbbd8a7cdb9a334c1ad6fbae427860767ee",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003259Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=80787ae4c654af391e2ab24805ec21c53c4e2479d82532f29ecf8605971656aad2789305e0ebf826513563e527bc345563cf526ef25814b8d011859fcdb3fc9538fcb476cc5a6680608597852dbc6de03cdf7e4edec572f75300282165716ac5d972c74f98a56e4e658836698ffa7a62d577863b4460b14190e26627a194e2cc7e5527bf3e791601a95e442ef4ce9a0421420807e50d43e30022e6bf7e5e1da05c19c2476a20f93d0f3c05eff0f9b888f4fec32abd8ed34c279a4615a7bbfb29963c3454998c3327b4e8d5eee44e6e4305983e38807e08e5bc8398fc4713a6f1970347c490a696d779790b92a432feb0b271e1589f0eb0ceb938041bac8eb456"
            },
            "s-5": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003249Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0bac5cb86e11df0d3d897b90d2446434489ef111f82770c61d4335cf531b4236b0ea92bb50464c474fe6781323a1ca0de314f24520b40a5e2c3b32a29cd9d1a759aeceac4d086c8d81981d8e6990707abf92358a78491426875746d50ca4e759c0ba1216bfd0b5b09696527e6f803b6cde67ccd0af505c9e15a9a7ddefbc2bdd684b2d7515239a3642e78a62f3d60eaa16437ff86be738b1c195545b6e038a1b49fb4afdd4cfb3b206aa75d667eef3171485fc7c7e4f0c10cc69c7b22e77c0135549f241cdbade151636e6d4ace540f50e99aa0c1e88a658053279250450e27808ff2e823725fce452e5a196bf05c2703f0766df59d7a42cf688eecca07c4976",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003249Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=69d7d702266f489ec2ba04643b210a9fe1c95a6d78730d547e38c5012f5a07c93b4b36659b28fcaf2648b5899b85e5609bda769cbe3f741006e53ece659536322e5e6016bfa3ec853124701e514a296e2556600f5644135b2923930954a8c6fcc736c736d78ca4260a7f6f5871ffcd7462481d5ce41d23c93bf76d8a60dd8e4cd376ae9c88a6a5c5f17f314aacea3a444daa44e5dfc2fe46f2edc56922fa827d4f7c2149b84dbbd25fff9a7901ace4d0cb7624420eb36295acdff405cb0726e2a4d863111261e928f31c1e86e08be95a17716397e1ac3835ee89aca603421981ed836b7eaebe0a19f52da3cd2328978206de0389f79ea2e9246b076b1d6ea844"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003233Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=12e50cdf40ada398da124d50d5c0fd730e49e2b42f22e9a9f5fed83e753c5f945a1f3d67fc66bc572173d79c6252427bf22a79d8a3569440f60837e05b1bf73a4fb2a3588ea34f69d5e61a7a1120efdc0bbdb0e70acd6b4981e2dcbec866409c1acefe5842d789d947bf9aed1e736308569a9cdd69a5de37e085cca1177436f9293dfb488c3d3d8948d583f8d3cfa956890f2bbbc4b8b6b260fe9d77c182e94f0a1ea3d5b8461e7176d2c8b8fa23d70b9a8a006d6c08eeed3f1cdc419f524bc35bb7557c09fe84013378387ec738814a6d6c1c8420b8d6b62d3a56bff7ca285000e0fd7fd417278f07c93162c3d14ab87b72df2c89159e022f674801a76e49b5",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003233Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=80956763567f0412f5ab7994c612edc39991bc1690c51fabee377672837f3d6d9eba93c00c32e492e60712014956172a5a1e921820b917f7555bdbc0f45058fb86f20502e2da840ee198534557e2b4d89aa5d4b990c68a5813209ca553a1ff24bc1abd193da5fed8bc16c0bdab5e222a6126fc062a6d1fc1e5dd6e93f87c2ac63c64cd7053b731ce228411d06aa49620fa37bebd862b0daec0139a33ff614f63b83cf8ee62ae512f3777ee04aae7f9f6eb7db00488cee79413f13d8f719cb89d9a10f650fb883818fa8224b5be3f3b6efc55fadda6449422b77dab8d0499854c12a67dcee4f1bf4e2035c8e5372a69b680ca820728840034499db2b7b4ba4200"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003239Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=167cc5dd294631742de50e9005ca699e7e00fd7d3af77f7001e6906d96ed2a380709e714a04f972e1e85dd2b3607c5fa3c7c6ca220b4260d275d7328698ae1383d70568ff95e26a96fe5e67b7548d22f84b4886adc01821f9540a2b2906fc61b53b8c6b728a6f7be4bd449ea1d4565ddf83f39f5f0518b1e86e22f1b695761774c84e42dd876795a70db7f0f4364559a13f5c0711218a07f54110db5a4279c4435a85979dc01a7c91cbf489c08b429bff94f7a45f0896a9ba0f2fd8d038e8df964573c9ea1ae76966f0eea2e22224287e24f47fb52086a0f5868e767b9a510f7ba99e79b8d9ce098f05d71bf0c85cd100512c675074b4215a50fa74c778e3925",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003239Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=77761becfe4f156d0365e144d66a2d9c0e6bb109083a2083f1b0e077d2937c17e8e9e435a2ad8e0b28e40f25d7dc8a29efeb846ea03684989039198de103b42593887b957f5619f0cf0e09ebd7246e59830dd3a583782e193d585d1add1e8c5cbfec54c137f570f23bf8df0bb4ee53f462ef01574cd656a7e85c27e67be9ada173dc4d5cfc6d0ff8a176fe2394c11908a4e9312a1f532d421e408496f3130c21134ba615046ea20452efd773aa1818e69db4ac501fe92a2c846baa05a35672037e1ed0e9ad2556574eff7697888e20ddddc943d5a3acf04e7c53b2bae76da12e9acea16e49e405e16f9f2799db00caf01e95dd9d4088d6e9a0eeb01c758c499e"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003210Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1d6ccbf1d88a14cc3bc06f197c05c1adb5cd1397b95135e940adc003d08b0aa2927e3dff7c0348fb161875ccc4294899a5e24343bc1a99fcd02e69b0e3981d2a7d5ba6377c5bdf162a111c56e5313d0c380e0afd432eae22354e7edf7ae96006cae83790843022f6998da0510994940f68c93936b3b9fd430ea16be19c82199e0788f972fb257e785bd4a9c778a1a7cc1c891625a8e395b89d248d4a2450b24db9b8e4c2214cd70f410cc54f732ae0b6d9462c6c29c4a403cfaa7ca6bd070a5ef615e977c2796ff00359808699bf1e1b6e4f321ab39f49788e303a7fb0348f4d4ecaa82a9c4e7e290e61676633370a5948c27dc2a338e92cde0571e00c0059e4",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003210Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=67b9d1a5648e4fa7f43de74a1bba9f3ed4cf3d56847a7839662be8b5da50293488bd75bcc55d7eb883be6c781162246181cb0f723c45b1ab24b9dff06395c61668b6ff62dd7ae644b6e8b613c48dc652cbf22ff66d739ecfc5908e9b0289e097d7417dd841b192cc5d3fa8283926164c56fcb824abf72452a653a7c4c7d77e44354b0877c2f0c8254443c78d87d8b9f3d195e3ea9682c111a826f2fb582c3cb1f2e4664e7c9c1728b9aaa8a561b759debdd9980f657306918df5b1b56f33d03bb87ed37de96b4f7a5266b3a1001bab87354a7f977b646ffc981dec637477a7061c373e208703f448a035a6189878e0b16861a2f99ff908677b135b013fd32027"
            },
            "s-7": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003333Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=57685d4d6410e857a47ec1ebf0eced6016f51fac048fe4598a1300f80525e3db2d5fdd9054c3ed15e5fe5fc0b780816ed998cd38322a46854fb28966ecd3c927a1d7b6a4bbffaa08a74087fcaff3cf4a5d88f417c18272384de3a18188b61081ee70c9d4fe6f44bb5b232ec0acff4f69cec7966beb5e55e0590d399e9b30c286fbf200c1d8f7190229e0a543c18c03752167a2555f29026dc14c650d2938501a9fdb6cc3a9279317562a0772bf4c7c8ddd5f314d179a324edd66a9e298f330036d679c6afd906707cc24d573d4d3c80b6107cd38712fbf45c75531288a0f2d3b96002279e66affb9446d53995e7f26b52931a6bcddbb6e5b4b4f8696e5d91d26",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003333Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b289fba9ee6954a6b7741cbe9475827c8fac00e9efbc1c56a64415222179bcadec0d8db1ac779d8614dd45ee212c473c7a9bb40b7bd222046944ed22a284d193ef03305ef965ae08bab7dc38736d787b867f72bd5b22d2a789c7fd43c0579494b2b2045d72dd280011ab988f665f09127bbc3151a8d3b86500f6be48d9ebaac265fd6a2e6cfa267346a6f95eacf5fe6bf066527c3ec42af8b2e26e0baa60c408fba2a66da5a0720ba4e66c18671459adf7d30532e61659d1a7e5a0097223159ee7f3fc854a950f7850aa2957df2a116715f2e015165a7e8ef19f89a36dde97e7f9b004ee00559bff5d59a0cfba36ec096a6aa79b656e676d91977b51b003a52f"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003340Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a6f24cf94908b65e5e7b949bf4214ea844d44bfef48a825154ee8a93d7c4615b255ab58aba9257bf1b15d6c8c60aac7315abd32e52a7e74f04f1a9774c2de4ac7585dea3bac388e9c0d9224c5ac6ca16bd392c68a882fe71d04fef44d8bcced16df1494b5968d8817fa5eece9986e83f675d492173348019d75d76058163f9219cae12656a248edd6762d54d7a57a571cf72284978ffb1b2e9283f0d28f2aed5e9473bee766df450ca648424f573735d429a8e8fdb1fd033c10e09cca89214420548587805e66f03bef71647b65aeda56ba12bbea8f9143fd6498ca47e6971e035df0d85d671772e090285161c622f06742703fdceac8cc1ccebb584c40f3825",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003340Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a44383cfe9609a43e85a9234a4a5ceeebdbff66e26dc7086f8e3c5906907df4dd76ea478ebeaefb330f093ceead4b8382afbbb7892071648ca63ab7b44ed2145f842fd656c7e74cbfcf721fcb47dbb31571097a27ac42764ba9dcb5484bda7a1334930f89f60145b1d90cc57c2546a8f32327da15112cec2d9eb090506e7c4fc8436b6b392eeb15a43dc076de887fcd949b90b2cd023af87e62520930f5ed493361a10b4ce9eac9d256d7fb979c76c4eaaaa2cc518bccdadc542ea61e87ca8a1161cd11bb9ff57de092bf98a9528d21e2d8dc14a3ff9843d0072f169e4738259831c06fffabfceb85593b99c4159350968aceb8202fe6190ab9e9d7d8df7172a"
            },
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003401Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2282e82ce33edba0f15b579a7efc1bbd7966884c4b7e85d434c0bbbb4ebb682851a9744c7778f536c3b4c8314b89fe6b64ad4297b06937a3f2a9640530f7ffd5c507ae979bfc1935179bc3c77dc9784d24c04f10f20afce05da6a0a77488f83ce22aabe1aeed3e8c54781e08f351bb666efcb60e7e5c7e4127ec1374b962ddd5b5cbde1278676866200514b4ce830b0729ce36b6867ff4c80cbcfb1e675705bd36990fe3e523522e8f86ca88ebbf63689ce44aef1bf18a7a95ddc3e731d6cb54d9b1ee899058688baf753862771234abc2b2c35b09d1295912061d40f0bac1907f6a12378bbdef4d38d6629de98cb176a2d91561252a12de7144852fa72e26e2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003401Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8597d8d5539147d42d5a26a53fb7a7ebb0b05f9ccb59f9aff72c278b518781d14b06e40b84be74141ba0fffc3118daa205411920aec0eccc970216ed5ac31a00295bbe7a4c739a4108a6694c3b07e48472a7cfdec4d54462e8a59ed91256cf4d341e15acc28e492d0e8e65be34bd9bef35e41f3f91f41d4de85c09bcb10eb6673dc8dadc71db2ae2f5c27024f3f13e4a915923e021f8c70e68beb29128abd8c9ed77f017a1a41474cedc08b9c85527d5485d1f84d88a037e3657a3df9d47af33dee30b56740718c8057425d9cef72563fab15e04345c11073bac6915e1dd3f7ec4cd7a406a1cad2e4265fb86cf3d14d18383b2aca0ab5b65b7bbba40116a1e50"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003223Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=89a76a358d9a7538437adda9593886fc6c291b26d4454ce875787d00963c4e34ed860efca9e09fb8514fb8a53e0ae9df189a64f0e555bb4b7bd8b536478653e92a5a8abd29c881e6ccb28ca31b515ec5ce8110efb79dd5996fcbc326075a32eabfb97ef0c076aa4b64a5444e13520e0b64637a161be22a7ea59fb1822e2a6ec625f44fccde7f99d5ca863cafcc98381482107916ee19c1994392ba544ed040dd40034b3642ff2ef0acd5a261ff7b38a4e42130e402794d99bf9a26b96af4e90ccc8ddc03c6c6f089de886512dda50350721a526e5018d02661683a63c78671552403f77500478460065ecc6e5f161feb049d7a022c5614bb8a9f493fc26dcb2c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003223Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4ad848089e78554eb189cc2e71c9823f612b6e9aa445dec7159b671e309a88023e521082cfaf6f0896ba002cfa43106fb85f8e4da748d8c4f302d3d3ebee8b650cdab31071b6eeacb0fb1c6453f2e34f8143128865797fe82b2cd6f51540d81065e476e7875316830abb1397af0243fd70ea015c3b4657f1842106a91cc34d255d69a66e303991b3f11c0585c5535815b9de7537c79dc6ab1a0490cb7fbb82cf07da1733be3e5fe8d962baf43742d428c1424d3238e3f531f6a1e2624bdacaaf2960b260c27fa9f7270826b608d38d4a309b726454e445d5d8de8c84a6d62552446e056e745f6cec5d530c85a80aee873df674bf06754a1668b67784d623e00e"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003151Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1071d809442f33c6c4e16421f36690c8ff67f0f99e40781b315244cc5235d614a1fc8c02613419be76ef7357f0c759e41aead5c1337f3a3fcb662149fc14e481a684936b9452679956100cd39c8f70eba7aca724d00a3ff8aa444851581005b91510d6719417228f7ebc2dbfe6b9f1126353de1e1c4861f4e2b81c764ac2a76bbbd6d396f672cb078167ecfd47691191d8694ab135c524e2ba4bb79a0a8fbd9ee5fc2a91c58e22527ae5a24e26fa7148c780d1d27eee966e1b3f81dcdba652f14ec21b27cee9c7cd30c8311c33add20f973b5742d98a56695a35ed22602973c91263548ac294f067a159640e4c66cd260c6c2b8b3990952ca2bf951586cb439c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-1519bdc277e3464c/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003151Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9f510e0cbec5ae82fd2fbe8f190ecce18e6f9b5d2dc49f9cd07ec5db2d78f32c9f4ea2220a3dbebb7202199437c685dff9b230f51ee9183ce8cb54cc30d1140690398707bb8ed92d78fafc0ae70e1625a75aaa868c7de6f94788ba5bddc72b7c9fa706caa7c2b8421b8eecb62c2195bac60c7ab70df8efcc3cf7e115fdb547723fa4111540fd25cf542969dcaea7aa34fdd8ea0376e2804236b903bea211a9442c7e4f0c8c7a491ce91c77337ef54e383af2ca56c89f2ca6aca978fc13b97fc40e6da9d43e7a488f31958eb208b0ceecea2cb0c5788fcbbfa40e2f717e72384989879058e33aa2a7f157bba13e3fe445bb6c15f36ff564ecaa0084d9a9a78e56"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784291,
            "nanoseconds": 302000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784442,
            "nanoseconds": 489000000
        },
        "agentState": {
            "status": "finished",
            "id": "astate-0fef53459aee478d"
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-504406302a7744c4",
        "screenshots": {
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003041Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4decf4eb0480574d181cec62ce1ec489c841d5f4bedd34366370e353a5cb1b05a022ab169a5056ee0675f15333294506cabea26131f5e3dedadc017553cec6896a814c7e84c58af9dcedcbea984a6052287ac5344fec9f36edc95c3387933df2c4fcf1285fa0ad9fa29cf1d1447936487b55f80d7895c06f881302431c0eccd0a13e23ebfba87c816f2337a32389d856aea0823991b66f217cc73ba31346384da6b829473dfb246a0359a1a53d854d3d3ade68ca1f651ad7d02d4420f34a203c6fb88f665aced201d87f2a81f69c24367527843b7aeedad24ab8487dfaeed95666caa5e9a549927c4f63efda750f784f58a31322a3e8c0cc89a90e1f3a15cea3",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003041Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0f285d9bf58e5da68a1cb31a152cf977a12459ec63a961e350966ef34eaf642dc93303cf8c5307a55989813bff0d2dc24b264063535c796be8a16569c7a333fe620151023311c28af5bdd98ef14f72d83a11963604f3f08f81c4e78c79a0cab66e2cf67fb84feff93769932d1bbe2915079323b8f36562059ca10f5789c49e83fc6ff7180698d6a2a6373381a4213abb99160228b57bd044d6765cbedf01d0be50e7bad654057fce3d3c9c81923fce14f0f922cbfee4c6454f083fa156496dbd8a2b2f9fa399141c430da63d511e08ec2e387a1655acfdbeda36a7dd2477f55962f6263a0fb4e02f1c9918e1dc538e8427601eb89ee84b558238a7902bf0c954"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003048Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=28b3e59ed4a74be9626b41cfc79e8c58c5e8511fb459e439daf2fb947b9f19d07bb71b6fb685213f8bfb81b1ba5dba4a337ec70b5079350007dbe80fdf7760683cce5abb6caacbfee2041f7eb198e57e5cfd6bbf196d0520004c9a5d6f1a9cb368f672237af0a24b3f37c89264f67aeb6ca06258a2ed69da547a19139bacad6a806bcb0780f1c6f38b58dd61203f133d9ae997ce88b376379afef0f08094f35a0a68f23a7cdad0e284d09d33b88d93002055f4a7605eed58bbe0285060d9ff50205992b54cc5aaf012cfbc596c54852953a24811c238fbc07184582827b296bdf24f7634e83ab5cbc1b32f2484f55831e5684224d5c5779f0789757ed680a07f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003048Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=10a488bc72fecabb466af6c88963e3a126137732022f5c3b77eb959af487b85c68cb3af66ed84b749f0ec409026f6c5b5c867786fa379710917b39176ed98c424362d9be3e7a130f907c1810cd82b5e95a4417058e20cc1e1f08ad41596b8ce84bc9f3da4fd3bdaa85939726c1112eaf2da682c511912e7809fa9dc58ea94462775d5f882d3cf0164041e5a87c90a822d1c78ff0620d8d81a7db53a370438617aec78b7215e326e486a690b4bef4f41b9dc5dcf663ec8d7e499f83ad8332afa78da2a2b2bb2d89a46671333103dd95a92a53d801277463405eb2331d0d52f2ff9e201cc72be73b00afe9fa103f642228ad9c1553734f08b2f11bb6e60e19a925"
            },
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003214Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=356730b3deb52a5b708c89585bcc683bf398f039bffdd47f101f5a85f04acd2b14d181774bb9d705815bfadc734ad0d5151b9ed89ca50b950de4704c49769c35b7a4775dba3783b9718c6225ac554e81e3b4d1e3ab26a94c21f268be87d47d6f137f3860dc0fbf886c2a6734cf58ead31aa12d546e9922dce05eadf9907056b7e6de7b809803c2557cb812b5ac44880ec4153edfb7ade40469b6fe348ca9afb9f949ab59b44ae7d9aa1ade89e2f116224d38b1ed6500b2bf6059de2581647b6d387f5e13bee8b5c0056424059434c4fd567012ba285c60eb64da2e0e97f5d36d3ba030a0795dd982888aa6e9d98bbed16222eee575b320d6c57ed1bac29308da",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003214Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3457f2007062da03b2703f7e6252a4afa8c535797f74b3a986121d2dd3fdc503282c0bda82500d1b1f04a1f727a07a6e017748630724e8b7b347a3c5dc5641f1c006d0a9bc159737950c7149093ce28274d61b24c493fe291ec4d79b08a191cbd0770e00cb8834852e758f41edd932d79764ace4e15de9b16de07bff32802783848d86e62da8e16260cce2f648eaeff0927a4e1d7490e151a6207717098570bbfecd8ec3efa564110d4b4399f458cc9f081f91c30baee37528dac70136ef6d9249f2afb975316451398ff0e2bfbc4f6c6a14a0b20f745406575114ed832faad3ce1b6d816f77e795c25d539b3156807fa740a554d4ea3a09796f242fefa47648"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003143Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=676ddfffa3dd316dd3fa16af295b1d47e7e2a53102c40a5a66f5e664888dc85ba516b0c46510a5f0f9dd44af3e2208cfa9bb14994bce2594aef768efee655c0e1464381a43670d1e5335e2daea53b4da9f63266d665e01f4301fd948523cba486a0c021e749f4858b388b83e96ceb85ed03a562fa6e0abbae9042e3f62a4b52983fe3862171f476557d5e2904f04689b92470c729cff4f578438d72529eba8f6117ea3e6de17038723d625f9a3fa32dad2e8a0a82ca83b82c3818a063fa4f9cbdd8cb280e94081d57d46f42bfab1d1aa9f09b6612616f49346d5eac8923ade7f1851e7a64dafc11574cc70e9e37f15dc8792765b09cf4c1f538bae350718fd45",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003143Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7e83d175e53a4f02d799e6f5c3a6487ca4295d2f91798c677e36339b94bac4a3d6168ca074fb96c770df181213017cd36ded03382b4ff7408591c890ae371a0f272af8de1aeca3ab81e370eb1d881732ee28f7487ea69184e42f1510a0df4a8fda40ce64230356f23b1337409b89cd2607d25c33a11d43f2404dd6571cec9c84b15907a3d3a2ae53108b29a1c71ba8756126d91d228c75820f6e234c091380c55bb04b609c19f5643f38b6042aeb3b30432ae70af4b10d6d7b471f184327fe653f1c368473b861fc00a7ebde0092f5331556403d77cef1c5e38b2319913a745e713bcf6719a5d46b08b26a3378c2e91906a5ea20b7497ed1df7d190b44b35935"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003015Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ae388805731f124ba10e082976b2195c4bc53c4cb79c927d22af57d74af3618e4a67008617de3ad96bcab8360ed0e6a9d9ab2270bb41011c9ca1ac2e39e1185691263e5e87bd63a20904a48365155a2207237d4699783289d99ef79672b9c32fbcef3fe4ca21ca75ff6302fd8290286a53f744980ea98c174ae5f7712b9b7b5d827f3a3067d26a753fda3940b3860ee682458c08c6f911ea20e8ee9add0e7de5a99962e2eb63f05c590f391c753a4cc3b5aac6a38842b83ef768c19ab3b7961a4a8b7a2c3bc41d18abcd88e41513e7249a1350b21489c75e658d418a50648359f3eda77cd6996e7866507faa73b829a7fa041ee2b2f232f8772352a10700b1d2",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003015Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2b8ee00a0b073f6629c7567d8caecdd7e7f06a69cdd064b53cd87f69f256f2f4088d5a9b1b26794cfa8d2d43b8aae8cf01afbfd72f4251737729904ead51caec92c13537da24d6665ac6784851b1d89700236864a77b138bc5bb1624aa125691a171e843dd52de1d50f6f135c22be4d252ede62873e7be9f210c4efa149c1c10d48ed8c38fb1b06a797afa93d00f3d950ca902f1b9791df4d6c7fcc53542d33c19fa222af23313a6ad047483aee662d68d5a2f04fb03e4f475c0c12bb0b286b021a0d2a5c2f1db551a2d13f79f9428aea765a5c7612eba7136a10c202be9e46f5bda0c74776fdfd4261369355cd9cef4c6579254bb56b914f49503debc0948fa"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003107Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=455b5629749b8275f6a8a6e45658456a5a1e34e4a8b7595e96ff4680a17ee8e3522fdbbda8c8c7dfc10eaea609942d2c6c6d7904c698ea323524ef8e74983a590e432b6d93f26ef2ce131e77ae20e9b08cb9785c21f166224ed11b62547e08fd698caf648079cd8eee8745a3b8d4856ff84b9e17735ed064afbdb8509e8f89b3eab0d4d775a7064f5bbd3dcf0893b62b47889fa48536d4d6f4240bda2f5dab8aa770969f7b5a484e7fb7f79074fb99415ad7d522a087ec3b05631aa3ee547b5df55159232bccef1203ac46aa6fe90e86cda264c0367cf3b3e607621777ebad259d80a0e47c4f3b41a708c2efed32abb9662093967b4ac56d20e8901b283fca10",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003107Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2f47a224685e9429baeeac0ad0be01827f334ac921903d1a35e48246d9f786de09883afb56ab237061c8612ad2a69ac65177658906387a773e3cc267594f4304f5eee93b8f945b7a7f7aa3d138ecdb4cbc531e9a2a8cfdf8c8b08488c68d47e280ff0afae35784da95df5df8baa484af497b5d088facff8d5355767cf39d27a3aba93ea05d961e932f1f29059bb482bd7e32d802fe79e2bc8876f5eb6115abac87d02cab5a33c4ff770dd68e4bc4f04ec9d23ad67e72ed5a2c7252e690410f9ce9875a378d4c23a43284faf5fe6f11790b87713689360cfe826442dfc7e3e03cb8520fcbe0f4773858b6282176620cd03823cf091caa25fceb8196126ff9e227"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003205Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=00ef4bf96b6543c47f8ca35b408c7c5e9d7565c46274fdf55a8e75eda84cbdccde97026a173f5767cc32871227faa8b6d7f7dff0b49f55ad651f0ffa1d5efa09f93d0dd8fdb24bfeb9e91b785de2acb1b02eb3890682e67f73fb745a6e4f7eb8232ef6f101789dcbda0ff2c9cdae03afef8c2f2abd97fdfc03a6d10de7598ffe20109797b05847bab3f33c216753aeb3c25251cae44de9e7c32b03ffbd3bf81302e3867b3b99491f1dbff97081eae8704615223f658f6cb556b4edaf290bdc5ca30a959696bdf35ccf7b0d6fd19ea23b70f97881b8813f31e653efffc1d56a63fac618f161d9bdfd997c6ba7d89ded4eb5f1fb46f52cf112e31e0828d7267054",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003205Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=06a4d74289dac8eaafc1af052d1348392c51261938a31c1be6b44340be50117b3229af8d0941f3840181bd5a9e570805f01e99839350341c83f1990dda36a5747875675236657b70c43532a56aa2ad961c31938cca983bb4abb1b5e3bd09bd71680629c4dd1e33cbb0331afef18c96ce780c0a6f91c7b2025f6933aafb89dc9d3fe20c5d8a64837345af8aee61aae2cd85e67d029cd4ead2ab968bf4b841a663f4edce5bee3f7eac70b592a5db2c674c570703ba72004c8a26694371e97c42e4be9691e1c965fbee6a6a56165bcd3040d815069354977ae3e8e31186836fbfb6e07b67ec78a6dd1ca9944b4b4a8249029a637bb70336cf32501488a6b2327ee5"
            },
            "s-7": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003157Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=523f3c50d2b115074b8c73bad3ad0f081830d17ce1031f7b6fe1a5a1a305ddb7b08a62b97bebc94076d1bb3d06c2283ce123e705861f9ed496da10e549de1d966507fb10605b7b3bcd3342b405102425e3c36228c2d607cf505e4fc6c7a86a52f79c6ac2bf5668f96c8b7129abfaa4b7649623e6c620753aaeb9928261880caa06620042cc4a1e4c1a71b8a4143a937b0db1f6fca009217d06ecbc9130a6e6c4971bf2b1b5effe144803e4020027eddbe848eb774fae4c497e25ef770e6f1213a2f913388647026b37a7e23aa47b81ceb8c6ba4c8f8c6e28d74f727e73a9a0c1a0f63ffee366ac787812422107f2901f967ba0e4115c8bb2c343c6ec7d0e7261",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003157Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a703d4f9116a574bf3cfd35e130147218c8f83726f29a34c3ee1950dbe207c850dfcfdb03cf21b482670f3484a05d52d901f5f720324af0a9f66c301e22166f2ef85212d33c79fe23bb6f7e50e203eaba8eba398fbc3659b2103c69c3f72560d71aaf95a08de4f88508f4192080ea63006fe1bc7e0d7851dc505603be0848e7965dc859bb16faa244a00cdab9eef9b3d5a4aca5db11060f5017775753bc373783143a4f88429df58cc2fa062fc9082b3a0a6337c0ced7c266e9856f1cd31f598f18509d27480d9eaa28373415dbb4f0f0c72f89e3183d2ab5af8a123fa61eb8788f556d749b11bd50b9c57949c24e9503f30cbbeec31841680987478ac952da7"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003057Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9103c26f0afcbe4fcdb15f4d72caddaebe25363e88c7a5ee82ba0cf9a856453d034411d66fe35db4ebd13157668cb9e31eceafe48878ad6fefe2eded4fadc3c97230e1f1e968e56f087d96e3029ce8dc01c574e85d239970908e96e74a1867aa7702a13f2c4415113c5b49aa57755e47956e48b481582aa32a7709933e536ffda47b3735bbcf6e4abbbe57dd7dabdcb1ee549f090a3f826e764c1d598efca20b446607e35e4d2884afc9af208f5f539acb1329b0e73157fea5546c45fceb2cc4d695cbcd84688cde776a9dd4221fdffe00a9ebb555b333b26506ad44786e6013d7c71628442f7a2fa1fcabf03a9790fc4744d7f570036d323ca3d9f20ff175c1",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003057Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6552ad024816ce005c3cabae105a06602917be37e1a755707809195afb5fb582e35702ef41bf23ef43d5a932e79d919c5342060526eec3b612f3fb688410657ce162de4c47b2052f66135a268c71a7072fb7881c58323cb220d6342d0eb6ea2761264ff8435aed11c7bb3b14d0654f517b903d9ac813bba6a361ab58652f84f00d10c6e4c2980536077e8d97a1306561f6585f3793f9e5443547bd48d48ce56dd82225f20ba695d0436731a07fd888e7b0ef31f6a463f6fd321c8da78656a08102e4e3a10d50559102315f3bef5152e8e54673b982dbf599f2da732f6387abea1b0f988b53b7d15b6ccd2ff535dd8b591be0664e00bce78ef601825db0faeb9d"
            },
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003150Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=31ebfc5d47f3a9a3dc29c15f2163babfa9c038f723fff9f222f39e3195aae5b8bc570f70accadb3813e4189109856257f6f91aa4cbda30fe4b91458b05cb4b092d458e74aea7a4d0d4e693abd4fc944a5a18ba5253a37c2a4960e590b7cdd7205a8cf5c035d812aed8427d1eeb1c981359f13b88f0b5a0e831fa61f689a83e544065b019c6f692b6e24bdbbac969f5cd40e21ae3e6fa2f4689cb361952d97a648dad61130bdd48c331b0ffcd820e43a479da265dba5aa4e7be8b0700f859390b88cdb19e2a83b7ab90b1c2916f43bb1d5c79ecaeba6158985e4c4b1dd5fee8bd32b941bb6152ece5bbfdc1d76fa0811eec34ac9f83d259324db71cd6b83caaf9",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-504406302a7744c4/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003150Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4bcc0dfbd51961b32ac5075005e83b3ddd42a8d774f2e7d076ea91e5dcb8742c936cfe6fa096b877efa7252b888a5694fe55e2e2bd66785ab28d0949c1327a1c960d0bda0d167a9dd9115bbaef1efb8083627412dfd2452a1078bb7ad9010874e451bf81fe092670dc595a75e40dddf8c5639980f4ec20246d1f914234d225b37c4841ef64c2f6f1e24c45cea5d06f5aec973d4f7ad9158dd8135c2d3d7f21eed13697884dbe8a8d291d4bf9b52e215bea245ef2e1f7503bfe7e16a71968af2aa203d717a16a2372a5e5c730453956a6a2c9d49f445466f10844aa91148da513fcedc31af85ca0ba2d23794fee59a65b69b35ac100e49e62ece3e197787a9e83"
            }
        },
        "testState": {
            "screenshots": {},
            "status": "finished",
            "stateHistory": {
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_6": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
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
                "turn_7": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_9": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_8": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "id": "tst-504406302a7744c4"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784202,
            "nanoseconds": 109000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784335,
            "nanoseconds": 704000000
        },
        "bootConfig": {
            "id": "bootcfg-a86de940d5434828",
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "emulatorConfig": {
                "id": "tst-504406302a7744c4",
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "endStateMemWatches": {},
                "gameId": "GZLE01",
                "mode": "turn-based"
            },
            "agentConfig": {
                "maxIterations": "10",
                "temperature": 1,
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "llmProvider": "openai",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "contextHistorySize": 3,
                "taskName": "Find and climb down the ladder",
                "model": "gpt-4o",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down."
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "id": "emuop-e59df391b2714891",
                            "name": "<",
                            "hasLeftOperand": true,
                            "hasRightOperand": true
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "pointerOffsets": [],
                                "name": "LINK_Y"
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    }
                }
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "agentState": {
            "id": "astate-4db5807301ed4511",
            "status": "finished"
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-5f230a97c4994e95",
        "screenshots": {
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003223Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=018198a476b6606341664b7d82c9d63d52eaf2b4492867c05d7cb3d17d860d921e5656e8e5d89696300d6120c9554218fab09c70d7c5a234487a5dbbc161f3bd5e2e314e0191d3da3cf4daf2573fe347d32f0fe24d4c5208be472bfb6db06270d98df483903e682a2a3e4345cf3178667d2579c6c4e0dffba6bd53037a91f72a059a999472bac7a49188b66b7cb36995edf55a500f6f79bbf6fce3308dba8ff7b0f72be5abcdc4063cbe803146b27d05cb411f42b16c8d639dd372cef9fe40bad12c8f3cd821fbef60b16b7c36b5e30140f51f1fb91612cc979dda0e89082d5d496cf72ab9800d9e871b40692e7b6a3342422ea111e154377dbd14b8c1377776",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003223Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9fbe14b1b3bb5ed04c682a0acf3eaf7fc681a8cbe478a3b81752eccf5f5648a16199b526a7841e6d2b72019b80723a772aa4dc24dfc123ef7dd6500dd48b4745669d57d106905d2d42ad66112d76bfa748ee46805b0934ecec1508fa2480f8c415e9931d8c5094316c037e2d8bf3ceb8656b00eb3eb0d558ea73d59dae48e833f4a1d8dbfe7a7799ac56f6d452ad13b4f06bbbcf1526624fc738ea8221419ca7db97bb38a82171fabc6606cab1fc08ef8a50e5f6418c087862e4d15578a05e2f4751cc12a735739129c1143f3ee5deddbba7587e0eaa4f764990e9c5d6b267a472cd571f3adba19477f0fa94f2e6f06e14f886e49716a52f87df14b8b50b2fcb"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003154Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=57f8c9ff0bf3f7d43bea7dc0092a8cb21e127db6aac4899487c536f1c6ad470605044c49e6272148e395da364238e278383ae29b7581c0512d2dcb034704f8c679d435cf1edded2939728958b6101e1c4376b3d30ebd83ca949bdb77ab7b5f0ea657c6acb3f12ba296aedb5134b45148c5637b0b4e968066480cf9378d0bb115895d142a367b58cfdd56f9eb1e463474fcd243050f22b8a90ece4944e3172a618af99b275d1fac4c21da9717d62956afa5092aac452945a195e02526ad36cc2430660f81084e3e329b37a421598a24c35930c569d9503915921f1bb5c5ef9c8190ce7596801842b7d18b9d328183f84ce7e6565418a71661ec7eaf7824402371",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003154Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=48ca3a9a22682e3e1493d1e15bfa249a2b80047beed354b3290e6d308ccd100381622e5c2c55c9f8cabe98b6e0e9e02a7ca6ee2b88276f9a225f4f7b60f21c3e252e9cebb1f1bd82ebb3d589ccf67524a2965610d51c8170043fd262d612c16ff51a51f392616c999ea528aa8e7ca8d78c5343d8dc7dc384d95e05e1ab2845b5eb6a6579f520cda63315e0bcfc8e2500ea22c59eeffa7c6eb7251d0cf8446558ebb5f865f6e2b8dffa5985156ef7a77f34f9bb36f1b37866736b03dd5530e4f472a87b447c12d58a6a5caae9beb26f91364a9b89ae173e49edac8097515751ff3b492a61977ce9b4c9a7546934a81665d917330e8a2a2761c736b00ef189c223"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003213Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3a32a6d8961abc04c8ac3ad84eb995407872e3c7cf056ac7e2de2a26dbb8dc4cfdf2a29317422ec300ae6e5ab157812fe3376de4f32ad1a343b66112aa150f0a37c2fbe2c630ad15b389b92e2e13e9c1361c46a71ed3b1549b0d383565a3cd85c5d3fc2a087179696b8c5794cfcf484179e2f64fde04465057a31a48203581629d5b8698e561421e494ecbce6f30a6ad52bceeb4366db597993b1b49cdbacce24bcfb957b26c09b8367d7b6f0f2f6b86bbfd9a4d8f5f2a30d3ec8eecc58573b0dd1649c2d2bd8fca434a8f6655eb3d9ab2011ba54c7666797886edc31f066bef5df1d67144a94cd4176d084afa5b0ce2fba55f958aca93e647c934ee4a8fcba7",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003213Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5510b740df4d88071c5f797282aed877ebc73040c0eec0b37ac71f4f436ccf8de435f492c9037afb23b0223b722eb8586a90a72ad538be15fcb55c04114923ae47bae321ac76829faee4d0fafc83625cb5d729ded8df9978c1bd0c951ab6ff20038166eebfbeae65a991f4de62c7a4063bd5eb530f1ca3a4a64c4be81518ac6fa73abf8f24e5fd24662b07110bf2cdf376b95630f67ccca6453dd7541e69751f2baa8b639d4d07800ad7c1d84ff607bbd106c4d34f17011ebbec06e3579ddbaa7d41378eba2177b096ee5d8b6cdc93028afb604a967a320d04578fbd6ceb581e245c2967f1b3acb0e23b128e1d472fe0810f28ea08539d0f6dddfb010b73dd1e"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003322Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=192302fd43b9a0839d02cdc2da58f95f86323e88235137a603ef45a98770ebf27d97c5b9e322b128b97e744bedf134f031c6f406401cb1e29f518162c78560b2f2bce763c231b4862418315f2b4d2c0c5e48537f9b3dec6338bc3d81d54806b73a62567ea06c7704b3f56dbcac45095653df0a7d5bc1980c67236f2edb4036e5a3b0b08d64e274b3ac0f62f56bcad7d52db17e8af7b340aa511e4cbc1ec32814197178cb27956802e0da39ccc4235e6829e269dadbcd1d4f75caa0b453fde2d335caa9ab5388e58329c9c29cd4f0907f4c49181b21fd0062afddfd2db2a5a8fa8f31184bc18b68cd40639a35b7703afbd280d16dacf6b7ee22bd4b613c254a03",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003321Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=52d4d88ba0f726b0a9436c102e6b1dded0cfcb9219834cf9957d182826a4bddbdd3e2b0637751a0f0d71e9850f052440e50f65ca15b50a4e9b8926438530c33da263da5c5fe883fb15642f1f13780026e9d78a5c53a02a1db32776930bd563fdc0882301ed608451ad227563e67a2b9b0db2194811adc4cc6e9279996d4102c51166e5298f3963ed3f9bac98081081f08b00902d71546bbfe95c065c5749da9ca48ace768b4718937d70b3c7045c51ed76cfeef34d78546f4f949b33ae7991312a6f47f74d7528a7d9bd3aff462fd4b139a502f6ce550b65a409c561070d29d1ca799ef5dd9131afa1b47f45f8d5aa8d43ec4ab0b88e5436651dc19714e4f7ad"
            },
            "s-6": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003408Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8eae4060d07e1a878cf535bb3736bfff08618809b8da5d46ec63fc647def24c886cabf723d784a7dc7047cc4c9fc4a7afa336a8cfe7f519bff3b30fd94b70aaa924b9ea07e941171f46fd66619931921d616ff1db166eb52682d76cdc667762c3ef50e6b1f3cd39502c0741abc094366c44a8e0e21cebad3438a10f0144ade390956e2efbc6f394a30e8f4033854c5f9c4700f6e629deaf2d4fcec36a4db89d10cddbeb2f625210bb2a046e96349ea554e29202e281fce1e835ad6d81f03f37f1bb169fd0985170b70c81798cedbee6ebebf158e4e0b5b4459a8cdae1694a86dda5a344aecd0e7dafab651f84ff8209118d699118f4812bc40d6667015987430",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003408Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8d1bb1a8c76eefc446a1edf04cc587886364a44f7676ea9ca164718a2f3f9c7d84fbfb63e5bc0f9dd386a2dcfe72fd44eea85a18b3b6eaeaefb97f37096af4949184a9da8711afeda18b81fcb10938f54431b929e64012cec422efcb3d42da9ad6fae902899756c8ae53b17587f86aeed4059eea3a87a96e370e9820d3910d81489ed83860e32cd8b977001cbe1a5d3f0f7c394b4a593c8918c1dd743ea1c21126f32ceb9eab85e21dcc7012b316b1a69128827fb07636915e06189c0d409c800fd293dcf1142c92b6b118f9cb8f19e2a4687b45385dfec96ed69bfef70dca87ac183b1ad4e0da94e1db2c3d18256626c92aa63a0684108ba3158589ef3bedd3"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003234Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=079582b06f96e8b10b6e3d8365ae5cfcbde4c5a0d65a7b5acda4572cffe1a51aebd8836e15ba46ea25171415c51a22f9d39a5baee258b2d53370a8a062396746779d74bc7e6e0079f6d32f9778886153fe7936d8d9d64ddfb8c24ad4c9290df4da1b524cd058db56146b314c93185704bc6eaa2ce36101362a2cb35e7d7fb0883d61a2f554bb7d02c37f3c07b9bc2aa2ba3936ee4818c00af8e5d3ad6333787808a167927858644b8b77fdfa13c0c8eaf67a7fc287275edfa1f7c963f2aef7fe745e1bfe263b8f541efd2df2eaeb9e6857b706dada67d78c360d6df308bdedb22e664599405ff483c2c2e774ffde4aa8d46398f59eebb3d57f199ad889f7fe15",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003234Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a3181b1c80ab2b91794caf1cf9aa15e522fd01ccbe5ec99a7535c23c657fac6f842d7a039aaeaa996c23e94917f828d2f725caf46c1a10b76a694a65fd1e312855939e6b50a72970ea796a60df644459ab555b4e122384bc0b5c8fb045daa27abe129c2ac24e176db1af398695e420ac9ab45a96207418e3a9c7f72521a87c7fa36d43fd4ceaa8e27bdb547a7135e0f6efd2ba5b3e5c174ad99b724143b172be0aaf91ffdf7c037b2d72fa8b82a98ae96e8cef8c3a193c57719175507316c0fd9f00b8ca5b4c679bf35239005936404eaf486189ad769837b62e260d23c3b29cc469ec15bcbb79ba355fa3be6e15c7b9501b508f8acc394d9b7842dfb4856fc9"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003238Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8ad8d9de32249e9a63ce3e1333ef987ec6a75464abea41fa5dc57e601191e48c6aa672e0f494acd822a382c1f278c950eedd3d52228ddc4228b252b4e4e4c6554a9d49f88f1fc67ed83083fd2c515fb8ec8a1bb20ecad16eed160654c83e8d8a6ffe91fe329f5d58c50e3b91bf3a9ca6858899e2060ba8c1df783a6015101e8069361435cf8f1eaab19212a5ab2c0fb9f39f34f7436f75f373e8e4775232cfcb7dcc4d65a0ea63fe78a1613e221ce1cfcc2c929e97dbd8268f591d0bff29fa71692356233a390f4b542a8a38edb43407d8a5162dfc79ac82cd25976790c3ad2f4dddbeee448569c4ae1e2b9c09db1abe62f9e4b2bb2aa05d94cb90858d1f3c59",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-5f230a97c4994e95/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003238Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3816564965f0370ec7ec8b697cbc5b85da791937d780271ed4054af15d66d9303a9907a9de8fd59e2ab3c7698246797a1d375f7960a285db81fb54bd3ba3541240e52247a9660f8f09b0ae25a67ad8e9f7575489bbbe8f49d11468bcd7e52cf5b33998a39566de61023f2a8c32adef932d28faa3c3c3c211b55c121ea6b52dc9b5412a2ac207b80042e9f2723a8a6fa9a51585c3241a1c7ee09ac0237f59bdfc542a1518349e4a6eded446429731837ea0f0468905eae5fa99cfd0024a52b95151ded5df7b1d6b36863f065bdd9341dc3b91c62867460a3307b03dbe70453bbfb7a05fb1c10894d643797b058e270090f33422ff983644dd38d6a6a723f941dd"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784283,
            "nanoseconds": 2000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784490,
            "nanoseconds": 320000000
        },
        "bootConfig": {
            "emulatorConfig": {
                "mode": "turn-based",
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "startStateFilename": "ww_game_play_start.sav",
                "id": "tst-5f230a97c4994e95",
                "endStateMemWatches": {},
                "platform": "gamecube"
            },
            "id": "bootcfg-1814f6671ada40e2",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "name": "<",
                            "hasLeftOperand": true
                        },
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "rawValue": -1,
                                "type": "float",
                                "name": "LINK_Y"
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "experimentId": "exp-d7f3b57db87b4310",
            "agentConfig": {
                "maxIterations": "10",
                "taskName": "Find and climb down the ladder",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "contextHistorySize": 3,
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "temperature": 1,
                "llmProvider": "openai"
            }
        },
        "testState": {
            "id": "tst-5f230a97c4994e95",
            "status": "finished",
            "screenshots": {},
            "stateHistory": {
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
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "agentState": {
            "status": "error",
            "id": "astate-5bcc0820a837472f"
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-70c666eae37e493f",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784332,
            "nanoseconds": 410000000
        },
        "emulatorState": {
            "status": "finished"
        },
        "bootConfig": {
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "agentConfig": {
                "contextHistorySize": 3,
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "maxIterations": "10",
                "taskName": "Find and climb down the ladder",
                "temperature": 1,
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "model": "gpt-4o",
                "llmProvider": "openai"
            },
            "emulatorConfig": {
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-70c666eae37e493f",
                "platform": "gamecube",
                "gameId": "GZLE01",
                "endStateMemWatches": {},
                "startStateFilename": "ww_game_play_start.sav",
                "mode": "turn-based"
            },
            "id": "bootcfg-e89181a2168d4b26",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "operation": {
                            "name": "<",
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "pointerOffsets": [],
                                "name": "LINK_Y"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "experimentId": "exp-d7f3b57db87b4310"
        },
        "agentState": {
            "id": "astate-9bc04b0129274f94",
            "status": "finished"
        },
        "screenshots": {
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003430Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=34a47646bacc03b7fe6dd01a386e501f7202c623814f2d48ba87e236e7feb4584e760109ee990b2ffa1e49899fc24bd9bb0690846202f1ef88e83e308595bba2728cfd8ebf64bf018d76023a96aa2cc054f245d9f0d6b6e8b7222b0e599bff17a9494b651b693baa31f776ce4ccc77bd879e08c850ba1345c50e55506be8830ef6ff36d371ec66496088240600ec7dbbd453f1d3af6cb82c1bbb0c5787f9f21cf91a2ea0370931b87e21be1ce89b8054fc1cefa8981c4d805077b3b524c76d0164730cfcd3fcc67822d0b8af157859d010186be7163cc236d11f29976ea4360d5872efbe1c4a717c46cbe53561c5890750d0703493c7c4759246ddb0bbfbe3c5",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003430Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7a80ce4566ad26df40542cf361b38f8ff6db55417afc715b6ad364089a622ef95bb555ffccd10b6061ce4f4fa7fbd7bdc27f69a9956e2a34875d982808d035ddb20b2890bb8a90e13b59a504862e7127b6918d24dc5d7604ec9796be6fa1bd849d52884b98d6ca72b1caf429212497d10e2371482088ca88b7286eaacc57ea41f031540e189209c364083a40e6a43ebfa16abcb31fabb8dfb0ce4300411ee77545b0a6ee9a6fe5bd9c6da687a9cef1ae4ffb1955560037ba58c14a3a0600eba63e573964eb47d5403de3941dd39fab5b1fc2e14d99d1c8aed5412f55aa9545032a78e5cf5d5ce76170191b5dd2a213c7842d98d041eb2ed7453fe77d701a55a4"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003308Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2624bf0236c62738b468c8a28645e291d01210e91e8cfb594498e16fea866651dc17f231d09dcf5b5b7d24fc081c0ca3f83d9ebbf782d9f08143f8850c43ef7f14f15cba0ab31ac35a00e558aec075c3f2a0aa4da597a47e0d1a547c434adac527f5eea1632dccc50b631d86be3d97ab5550b58d3301c6041f4a1feb97c9953b44aa6ba71cf3f17d1689dda6e0d7d0f67c5d5ede92aebacbc4c0058705994b21f7b760a370c9fc363b4b427d890cca1b6d8276effd5f355f7bfa3b66c38e2f204e67ebdb1a92ebb3e180dfbcc8edb57f02ffc65e90c6b738ac86dd5a8d9c40aaf521500e8373c8b59238719422d670f938f543f5a546d1fe60ba85526eb0686a",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003308Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=89186cd8436e0136c7dfb26ea0e556f967921d885cec08bb5c6421031157bedd2828486668eedaf4e0d231b2ffd3cbfd820c09ea1459567730dfe98cd17d5d75306dc63cff0e7b685d105e76f4c38d8fb1946770e49baddf1a536b76ba85684480827bd43371f0971bab5351b4bb84c5b8d6a81d112a82127aa0af8bc7e0a0ff530e96706adba6cbc3ec1ccc69a9fe07819f85a78df68683e0cdc9a37c2d916610c43f8cdcbcc5fa29bac52dac3a474b14d7ed56c3e8d9516feb7c4d1cdc173bf24e1990a1aaa5e77a0349a9646385b539fc1d1de512b766972976d3fbc00b8ba098e74557fe1ec6f2b734671063001355b84efdca143ee65ef86da19ba0107e"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003330Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=737c4e442f3a4844f96549d0e1ac710dbe499cb225c6a2dac316500e5333e85e6c0e346d577b5fd9d90ccf697874d6c1ab5af2e87be4d808562bef236a4fff2d71ea0dd1ea5c9b1e2c1fe6c1833b6be863109e66b90b5e3be2ba1087dce8e19e2e96e8eab64623ddc66e05e896d8339edf150998bbe8a1bd9b9d503cf80c61b27b2d33f96a53902e376fb1df8091acdc4cbaaf9bc28eafd6a383267356178b94dad38b9609aef7fb4443231931209ecf6400732ff2221e77fb2acf76d92af55a7a04241783ae9f0c71eeee9dd671730c9902b9031503e81e03dc4bb734840735d30873087dd8003098f61bacf9863e1e42088bb13a50cdd2df979adabcaceb1f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003330Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a34993dc422c77bcbc72f08ad4eb0bd22b43103270e8bb27a2e8156ae9f42a819b8cb1c94f4ed95d2090676b31a60b80ee7bd7ed4b40f61192c8f5c6cb434e01c970297bc1d3b3aa4f193af2d68f4e34a3c1e5e1b3d21d057f926812babf9a719365f0299e7cfb07227f65b4ffca4f6beb5eac250098ff58085c59583780228d15ae28e44c3bbace988b708d8b0cb2aa0b446ab10cdb1b6b9398aa43d32d09953c8a32fe46aacca16dcca1bde99f350669f0a4126c1b26067c1da0168a7afc4247262f41e7aff636910ac7aafb72ab3025ecfef01fce15805c4120452ac2a0feadf313a00f385fb2faef907628d5faa31af042a59be602e6f997c8649497bb38"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003420Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1bcae40c7ca0e8be3d5176fc5cc993e16a88d98b90af49f2aa46abce052833a8624e5f78e1465ed240a2ea4ce88d93e03cfae3d8675e142859ea139c5859b51e1993ce94687cee2b764b6ec6821f9f8435ad1766015187f4293ee30911ab7b40d6606b96f51af2866c519e9e5b1aadf3ad0565bca120c247b5818cf2934d71b93c36a82c1bb5aafd8cc4bca030a5a310ae3318acda0f7a188a9e013cf51fefb8e5fa0ab332116aa01c6fcd81bc4ebd0a1237dc8d3c2595951bff225b8b715861151d44d6294ebd069a34aa8736ff796cee7e2d6f989fde25ab58a317c2827718e760e7ac94385fa149258b98638e19c73c1af330204050d1e19c9c5c9052dc71",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003421Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=61f403322bbe4c7012beece33967a3fde06e84c7b26e168d6b0db15e92e423dee9b7f3f5a8a7391479470c5bf8c0c2cf6bfa9bc74c64a2f2465da2587f21dec85541e43d6c67d7734eb5d37fc16bee0c0fd0438686981e954957f8acda4bcec2a37d7f3b5769634106e5bdef3614ff2dc2b574a4b1323128c4baa7043decd6a4ec26f6dfad49a8cec6d1fa81920cdd10b588a61ea6198aba3e3484efea843e39480ede05a487e00aa3fb7800f738646a7d19d330c8ae59a30b636e343a19931a17581d74236441c784e05150acf84b7fc6c24a79c40f96cdfa63b389dc4846ba55317e190409326bdfcf2ef2221e43c9723106c8bbe80f04ab6a8b69916ea5e5"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003253Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9963a3e5661680dce14633d54a13a6b1a58fdf2020b94136de78fb06137dc47c074d92a532c452f3ca15cf41a2d5788fa9143b6e497fab57a7934ea1055662136af0bf3c6da963d7c63a194323ffbeb9ff3aeac506a4b66578db379982a88386498efc8f44e5e2cb2e7d192e85235d2d2dc2f158255bb132e0d5e092996b8b90694bc60d3567430b5d96a1c70873da586b4354020aa576ad4937d368f3985bbef959fe1734685d47c31f96f89d332c0b6e13f06eb4e14aab3533c0768ed3ce23f228e15f880a515ba66fc08524f9b4bf5bb4654431c17ea7a597b891a1ae7612cc33a9b09060a8f25e7cc104d963bb5716cfa7f4a0491f3c0f763c230fb8c2dc",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003253Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4f44587047842d812ac257459a6bb2796774d7c956c2f8b0c9ff72354f4f322f331c5b158a17334025ff064ed26e9a824b478db0510d94ae7897eb66a94851e64cdfa3915ae5479082bce0d63cd851cc378883cdc2db0a49fcc7bb1ecf2dcf273ab950312bee2fdc5ad8d00d70ca7c2e837bb92e4f75a9950cdb063374676d83023b3b4387ab56dc8ba3e4578435e3e9e8f4421bf9ab84a061b306f54261726e580feb20f843f4c1f86518f0925731167d6b1859b4fb376d4b4989e9ba5d72332e714be46d8636fa3cba2d573cdf66b33038e372ef1291bfbc1b6cd245664352fc560359ab4dd56b2124a4dc47f44069271862b42470ad0a086db74feadeb888"
            },
            "s-3": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003319Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3c99c1bd63035d2b9fffe7e7aa43cfa2b9a9c090a253fc9a3678c1db50f0e8811b1aa7ee95af0a8e903fa256fc048a5d6e961d6ff936d67c0cc1b1d71918f228b40abd4f3e0373cc509dd3e8a66f9f62f6ccf21bf7c64fc75724aaff6ccf9e280369c46eea6c48847aa676d170ac2ed3cb550aa6de4322c20e7bedc60d1bf1920e7af087e2d68fcc197becbc04270ca0e05425547e916607f6d4218dd78840b9d124bb4802285d0fd25320a63c2c299fb9246dd89b07082c9b77ff2f702ce9a896799aefb15f0dffd9134054e8d5d32dfd7729aff865b67f5ef71046adc9aa655842b66184a7366584b27e7aa49444d39dce1b659c9e8e98ba33c71be4c82e96",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003319Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=906a4200fafb5bcf40e2ed356d1f6cc609ce0acf65da7bc47116da64281e381e22cb4406a6540b20ab6425df9da38183a204540524068fa18934f11c5d630bd9a6b9cd5c5095fa4bbe17cc7b4f3c6d5106ae3bc61c62e28caa1b1c49b6043e8e7282bc49ebb6d89de7879afe9a545c7c3ce580fefa3178cc2d5bee04140fc04b252de6e257fcce0e80bef468ce1da50e181b887d61a8ae2b441281d8bfc3179be48c4b77f2c2d4f3d8b24461981f2bcb0e4d5896fd8b95c35ce5b0db419edf311faaee539440b529358d0fddc540785bce5ab159d3f1f03a7be33b78894a8a06b50425dd2f4e3d56d6978a97bc5e166ebba768299cfc56e30234fd9ffadd5f64"
            },
            "s-6": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003401Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7fd795c8f7cdb126502800d291aac655a6e318a5b2d80b189949ab7e2083fefa4b7674b6f03193548352200572408de5d329dc0b1998ce41421dffe7eec21222cd8dd8b43703df23a11c8c26ab06fcad82a8e10a8121ff78cfa0ff7de42b874fd84a91e652b13af88c78e69bf43221d61a0c6471d5f60d9d16071a4ae17f1443473842718bbee0d8eda8b53b096c248def82593758b16505dd700cecbcae4e433023d59ec16ad458d610d3a4a2fba57867ff8e8542e322e6ae2a6f03d3d9e950447d9478e8fbff14f9b94fb041f01120fa8555e077d17f84ae325c8c15dd810ca73476d88b614746f3a2f11f5a7b973df88152d70949e648b11a16870af3c826",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003401Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7db2946f8f7718622bdb198ef9ac7607c9e2104aa0207dccc5a8dbd7ffed652503cf39898a9099e73107a1a9b4d73bd58851afafaf3b21fc4e659a0205cc5fd6fdabaf7b065624314f2d83b7b939e8795cded956e38c5a95be61730d05f4196b0c374b44a86bce3d41a7e491aba043a8f5c16c0e82e9e636bf59c6472a3a1a5d3c9dc2bb4b1f8ee286277bb553673e5d80b5756d7046566f8f747b8c14160f8e5290af6e712fe6f5bbbc30948d0d9811b58ac99462bee76668c5f607f9ffe483b71cfa4e2671e3e60e9f8826d903e523e46a8ef05ea2b8aa937913c8a6565e9ffec9a7ead8e7014aaaa7e23c75bce06fd59a3163af8f1dcdba704fbd0fd44554"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003341Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=73089a1ba5ff5931dcd146fde10cc498d91c7e659b0eb3a7978913f7080588a2a183c8793f34fc8f969172ba5a9ad6f71b18fc47a2d570a8ab35864bd2e1df217fba9ba1b749e1ce648487dbfd522ab0768baa6d620635ad3b1175bf6653c27bec4ba52baf75be381bf00428441e95c25646ae13b4aac34d76c396e5cf824d7f8e30f4b85a997f26d497e5299625facf665d796297fb9c4387d9c2eb4f744040014b687f2caa3dc319121f0c210034fb8d5f7fe96c39af45f28319175e8aef053cd8aa3c84bec80d4da09eac76978e87ed2630c317f7d85dcea8e5ceee4a5d19081c0cb11f1be6a82a96aff7ab70123f338ecabc8615dfbd89f04fd8bc0e9276",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003341Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=72126820c47d7723255f9bde8d69c4c0e14b2259083b58018e0fd3e8241f1f6da6692961bcad3bbdc967f272f6f3e153c3cdb30290c6fb7f50a53f5f3f17f9f75965396e3e95276eba2b0ad9e2e0d771d3583cc464c69a5e95d313360ddbec351310b7463d384fec6461ba56a4c58debc5025db271cef87fbb9ad49be370b10963a4266bf3608d191e72ba55df507ef564e1e2438adc79b4b41f85a30a217d8183020a3ae5452261d2851c852150e1166c1073bd410e9531c63c091c8dde15ffbe429c1b0a2dc3164ad9d058e2b13c374528b5bba660c0238bd28680306fdab8569fd981e7f5d1ff24e53787a692d58e7ef9a5ce767a14819ee5b1e89eccdeff"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003232Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3219efc7e137de20414e947bf5b5b5851e61757e6d639c55b2bbd541026037a6c993c0fbce363f6e4673bfea497b17852cc71eaf822c2f5cf2d7435677f9687ab310ac3ff4c788a45e472bfa5691a3bac4f6d9889fb0db12154226acae51682a30f6495e495691cfb356fc3ffcfc47abdfe7b34d5019fc8c0f304bb9404534cb5d4129f53ce0153cf85cb38572fc468d1115ef51be09743ec7e602da112bac41c4055456a04ae107f5c6e32a5f23c339ba965e8b01d73f1367e73291b22a0bfcf5a8742adf74645f46df0e381a76eec3e4149e2792af2765d7d186c1ed3897556f853a93680262564f29764ce6e68d604c13cf831060f697bf51fb29c10041fb",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003232Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=422b091bb7d9dfdc17c273cdb2718c02e2aa59e0b6e94a69a2574de30a0ff3b9388903a7b10cb514a64df3f28af648648f16a4097fbf13e8b967a5f91f189330bd4ce54d28b3df675800f722f7a100470954982429ec7ee1771e14606301dda71d0c00f0da5d5d29df61a7385cfacc2f3e05593ee20db46b7c900de7881b51b1ab21412685c3de39ebf1bf2686bb87427ee7f508fe9b4e97885f27b6e4184867300ab686fa8ddc22d1d6759fa86c7edf209fe3d4edfefbff194014eaa69c48a91371f3d07d54ae46422d09a55879a7711e83fe0ff163c436a9620e6240beb216fbc00da541c450e919bc812ce967e9992d3016ab1d2f13df1e4d4c1ae28926f8"
            },
            "s-7": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003411Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=14d4cd8d4bd2d990b48139bfff1dafb690ae85d7614fe468fa93398c84bd76c1d4b42a8cb66d16baa7017f30ca9cc4b60b2061a958bb825f8b68bb80595e1c541866227e8ae4dc31e9c15426b9fb630ef652638e402bf0fdf9b7d378e22923fe9135dc7f5cb70f88205ca4cd682bc20a0c0ad5d0b474adbee7eb3f3daa816324979a7e9cc857bdb693ff3dc2af019c4977120e38505a9cab973d31ead0dc08ab7408ba3f1ef803e673a3d8b3c9e8e637f4d40a0246af01020623398f28fcdbcda87fcbd26cc24f3be7603ef6dc35413980f78ff2de1f57fe31f3e5d22c8c4e00d1f0f89f5d9162ad9956016a12d708dc5170fa2b6fabdc811aacfbab057a0d6a",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-70c666eae37e493f/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003411Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7cbdf6130ae14351794466d73f3e91c8a0339e97bc8bd80d359d580332e4adfbc66b81fb7782e2738ae1f16cfd9887fa9cf180e239a67c411b661fff7ddbe2548d655c2e062da86e19c13c25e09cd5edd28d250d3dba5e8ab69d1edff1c79e27ccc17a7df845a45c2f4d5a654f8fa426e015380814353824f8474c99612cb0f32431c28b63884140dd00953c9fdda92023172a806aca3fa5fc7f3bcd5538e8b6ed48297f18c436425b16e877a30f6ccbd0d7d2e0aef7ab17da3c2833e81137298608a4856f1e943187ae9583e512788922af6c95ce368ce1e3a149d10fed0d58d69e94c65076845d8d9fc65d7bb26661b00016566f590078309cf2bee4c153e8"
            }
        },
        "testState": {
            "status": "finished",
            "stateHistory": {
                "turn_8": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_5": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_6": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_7": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_9": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "id": "tst-70c666eae37e493f",
            "screenshots": {}
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784472,
            "nanoseconds": 391000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-9bd4b798d6bc473e",
        "testState": {
            "id": "tst-9bd4b798d6bc473e",
            "screenshots": {},
            "status": "finished",
            "stateHistory": {
                "turn_8": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_7": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_6": {
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
                "turn_9": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "bootConfig": {
            "id": "bootcfg-41195e0729f842b7",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "operation": {
                            "name": "<",
                            "hasRightOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasLeftOperand": true
                        },
                        "lhs": {
                            "input": {
                                "pointerOffsets": [],
                                "name": "LINK_Y",
                                "type": "float",
                                "rawValue": -1
                            }
                        }
                    }
                }
            },
            "emulatorConfig": {
                "startStateFilename": "ww_game_play_start.sav",
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "id": "tst-9bd4b798d6bc473e",
                "gameId": "GZLE01",
                "endStateMemWatches": {},
                "mode": "turn-based"
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "agentConfig": {
                "temperature": 1,
                "maxIterations": "10",
                "taskName": "Find and climb down the ladder",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "contextHistorySize": 3,
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "llmProvider": "openai"
            },
            "experimentId": "exp-d7f3b57db87b4310"
        },
        "agentState": {
            "status": "finished",
            "id": "astate-08adb6bc06ba4e94"
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003205Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2c2b966f0882b74d9a9769cd94e11089bf276bf7782752d11c44d24cd4f1dc9a8c4acdb3b8be3bb60b0dc786b33364ceca1164949409e609676f925fd2df6ba6a9058dd8ea2e02a5fd17b36befed413366765dfb719706b7635bb6ec197b05fd5043081367e0fac5e745a3a4b9e9b8b50c47eb926dfc21a1bb31c861d19166de97efdff25e517578ce6a2db17e0ca403b849fd0508aa14d7680c49d90657b93ba3ed6c9f2b90ecefa38ad1bf7f0249056ac17be01d2e33672f705333e1b3d6c147cf652dae10a827bf4ca4651adf327f5a4153d049793bed2c0989b05baf769735390b7b69a63a4606603866dbadf45e8c915772450e604c3b6ef923b4a0a180",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003205Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0a21a09c634981798fcd2c1f53b29d9c8a2bb69f56625fd7fb04667062f67275e306e673470fee78e95585aec4eedf44a1399e29cbc098a3c7a58ef5b13a47369c27b02991fa04972f07e7f7289779567792f4177ddd6949352025918ddbb930afe08aa5a0613b36113661a974f1cfa06e959936ae606941336a3ea521d98455270f7d0d559aa78ab543ea7b03f283d26667688135ab1d423bcfe1d5ccb49e6e96358c03d7b047816b4d3f007891831ed58f42e979857ec61d0be75de250f675841d7437bf7afb91ad61237aac60ddfb8b4c26aac74dde4c6c981b2af58f06c0fa9d6452ec2e1851b1dfdef2ca0862c34a04a8e991bf61d3712ded6f1bd44c41"
            },
            "s-6": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003138Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3eb97fc1772c080e89f63c92dd3abc17f5b4a4699efa4622c635d296b4201fff079084b2861914acbfe2eeffe2a0f9a53dffaf5849ac5d19c5535b54331e6b78e58a094ba9637715391e2e9b4d9d3d6cf1bb0f654cefd3b378799fda524835bf02125b244fec50da9f72b96f7fecc94de72015323ecbed4e752cb21e7e552ae2e23f71ad4d1f3e498a298deb895243d17143c98efbc850a4d2827291f65ff97b9ba8001bca84e7efb0ee9bb7582e60b2414a52c9a964866497fff60b1b38830533c658ceb8143efe9425600ee53cde80086620542a00bacb4d9514c76db3b2889f95102c39a54c78062537ac74eb6c858ce199be7945d38fdc02e4b8f6ddedd5",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003138Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=999479a4103980b8e736d4255b86c2b5591866ce93c93c18a28f2519de261f62f779356fd8e98f6c8ff0c9728865aaf3c299472a92f6fa44d4bc4ed47ac35318cf395b36a7ebd41a7f5a85560cde4c2aaab08874c876972ce945d40eb1fddf5176b634e7fffe02dcc56529cedfb85b33ef48980536f48091db00c4d9f0092b79cd3c94725d55a26c6c3b8416baf087b1a69571e2f8588fd0fa0bae71e7e91841910334313e8833a137bd4f70c6ae8fb08e513bfc7f0c401c22ce9dc0874f91da588ba4510bf6778079dad2c1b8582790de6bd380f1dc39fd795b5ae98f9450aa12381f5f7e0f2ce960b199f06b8f687a7c390f3fe410c22a70091199872bd7ba"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003053Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3756cbc4c38df7fb2927c3e3ef3182771ffd67c34ab100466cfca5b0320484a9bdeea422ed3e91a74057f30e22941ecb9061688780886bd68de2154b8499d544ea1ae3f219b80cffcf1e9512201ec0bdfcbc8291abfa54c7e91b52c0fc3b957d59ac92b4c37ed3623256ebe8f2d17a1bce36f09edabf322fad15fc2cedfa3aa43e24543df6d3e4e24f15c1bf27b5d3c612e18f686d3a9828b9fede555e7eaed974e7059b0f417bcfc427b9a4625df76f27c019b40a303f01c5ca1fc1ef44b0b7338870c7e847eba389bde12cda2420ef9a5651fe7174db610311d5745ccd02d309c96661427072e25b4dcd091363aea69597eec3a70ec12d8d2c5fd076f0d42d",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003053Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1740aae7adad8e3e178e6678a78344d9df7c7f91a7d402eb3f4a9a42ef51ac76f1f3e06f40a87f4143a674f66d3df5ed6d04f575624e427d4ff9dac3264b9cd054a9b1b73226af2edef7f326fe79031006d276dbc4412e89fe4bb53660e50534fb962a260cb018173191222e858520992df48cf82f55143cec3ba194d4ef8ca1b4175273b928bd42d7a62c7656973a58b7e13e5e0f2972d3912dec6aa6bb226921c675b1eec8751e2ae23f6ca6aea86d6d72811cedc4fd20b44da1d439c1cd03cee363e8d04ad6033aab45ac8fb0eb5a50630e3b061625665b2610770388c506def6d47280eb78538d545b155c279909ed29bb46e2974bb9538e7fe2ea27c9ad"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003120Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2adb9363345f531bb391e5c3ff46e7b38dff87f85e3e3de055406782d98de53f0ac35df5cc8fc7cc788158e35d5ba293e7d44d56a5cb63959f87aaf3aa82b7e6eb078a556707bf7d99d52fb841a53cb7b65e21bd03d64abc9821d73279e2050daf946f06cda56666fbbe06b29d63d6b8a9c4b3978862dcf59fac98684a2cda57fcdac38b9a5411f9df44a3eb5a769677801c783bc570a57cc24246f75a34a7bb9d8a3418074bd5edf8754ff6397c755cdef6c947f8c7eecabbb6d238703b12846bc8b5bfedb2c940b470813c2bdb57fcacc8b156e5240d3a2466fc1c8be31be226b37afa7231e48581e24554a90d88ac73a2e2b8f59f1f6d7f8b9709b9a858be",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003120Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8d9a55563c5f4b9d5d69c092f381e28aa3af830b2b9de2c041f9e0e3b56e857fe565657944ee07c295b73dac8946ba6a806e1690e21f3627c07c0884a3e3a817db028f88ea56563f1ed4812668f0e0aaf2f0e36840aaf4f63fe75bc6b034a16383944bdd4081a0de6a16a85bdaf74f8b5462dc29b88737af08314bb5714683eb0b27cf33224d1e37b1bc10eb4aeefe97589f6eb151d3c8db39dbf929a3331b2c7a14ea32a83051d2b86f80315367921a13fb6bd6b1111fb64dc6bd2358b42923ec9e2ee7bda849e0f641b9ab34b035a414068f5e2b4c32650ec693055c8fc67ffc76a4a9dfc81195d78458b9c972861099257399942e87400165613840810ed2"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003110Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=aa421acfc6f4ce9e11bd72e1f7b58fd32d2409decfcfcf99f887ea211f4b790f9427f3fe1ab1e4f67ca51a1551dfb257451d1643684cf8345d2e97ffaeb845b0b2d36ec8ac62129124512f93b8786099146fff558075592124f9f32dc26713d0c8793d107f0a55914e7f365f323fe6fd7bcdfb35154ef9a382aa66d4e9d9931622db1f07f79219cd4fef914ac8cee7f62b18bfbdac961970be49fd8d2bb0a3bbb9e513f8d9d54da905cb0eaf76cf573649bd541fb888771048e2985c0e07ca75e84723eccd98cc22195593f01e28546bb520861c6af1c3abdedcc3a37499d30021baadcbec661fdffccc89c9c5f800bcefe9d10ff69574d5c0f3d47aa2e6f166",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003110Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=385e271199fa763d5700b2392af9e9669729b058606746fd79331c5c7743c683f8546c8ca35a640ba2d0acb61ef8ce92b50fadd64b33a9532eabd982fb5e67b4a0514a7790465e6448330345bd739071e9fc33e980197b931450e17abc39bf84dfaf14c5154697a126b52cf0a4a1c41ffa27e70daac59b645494921bf5739162a290c2b1c952776b72610521c7ebc5f25f711b0fcb3052302bad62997b22b1ef6cd813b80dd375d43bcd7025048f46c91d6ae693b42557abefafdac2db80094ecd2b7461f811f1e13ee702efbbc19cb2f11293c0d9dbe54295a2d9e7d14b3aae838d9e7172006a15ac9890e954148bdaa0edd8ee010a7ce328a235bd28fdf847"
            },
            "s-7": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003146Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=720a73ef13dba06b8f342814f4f7562a194b0b5688b07b5f8ada0db1789c7cfc745e66ee8a14d6e8257562902bf09982ac121d9c56638dfc5cf649ddc42dd1cc5bdbd6d91834ab90029ce2cd09be3ca6b69d44b3fd7095fe649218d06bdabc2eb5c52c01c041f4812e316039c87bb63f6db8d5ef04e3d3770f80344e544fef4d6fc370072194e1e1bfc2f161d793a16daf7c573e424dbf3b66098bc643572899c826cefbfad9a08447136127f0dc95ebb16c2f75f2d06a70d7e71b7399093aabc3fe7c6df8940c61d3754a936fc96cc77fa06cca1e6b076fd3a28716aa8347316c144d820d8419d5de4b1aa8e7716beca048934c6a90351f5a1f2261af9e76c5",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003146Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=84ce272b93f2d51ccb45f428401d5c88842f55c39e6ea379555442b71585bc8336f657dd89de5c55ffaeb568f0bfa13ecdd3fbde1661f998224a3da102d143c75f4cb7cbb623b9fc73c8d4b178f70ef247c0377fffae4d8e454c295fa55390921d2e8fa4e5df78d5a7c10512cab3dd995608e8bf673bbd7054c790c0e02f9e601f8dba92edfa0e217adcdfa72c2b0d3aecaa5f931390d79ef6a4769e4b18577e9e13b12a07cc2b9edda95009a1723dc94f1e26ffbe35051a4a6a28c0008cf6cca05b409a6b9a9cec71508ff7dead790d09f0c4e46742c566ff5167b37ad278f76dcef529474ceec2ae264698ea88bf999a5ba4d2707a5e5da40a902119267487"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003100Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0c4b738340aa99aefa05a0c7ac0c982bb19e88d8e3af144e70b3d57ddf85f5a219c7bdf64545275f0d3f7fa65f82efb8d12b09ce318fa1658bae0b4cf0edf267ce0402ca6f049428fee15d92f9069e1e5c4a982d8b87060f0738424273d110590a31a0aca679eafc220bb63a2193846b781ac7d0eeda2eda9be4a47da4fe58b20246df966964309604eef1ec4c27a41132fe58a48b7cc083d91eb5ff30f44d2f9a6a08616f8d64fa7b2b8e19ba41c467606c7f4df3dae0897ef2cbce79e5b18d63c7e9c53cb947e88c854895e611ae09786fb171638575f5f5778e4d4c518e631b7eca1dcee89abd3611a36da9e630743ff0f4068fb483ae80d0417a0a41f359",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003100Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9c3d4dce65ec007f3e46261bf5f4aee353d48b06dd1db3f553babfe7c7e804087ab972fb5e6615ce4c5a35dd27f406cd042d39270a7fe6e1f7bdce48809d0494dc936c77026f4db69cbc69ae0f713fca5e58f07241075ab1b318b58307f62c851b5b0c0ba3cf1af8143c63db62e0722316ea8c18ce117e8b68a48383b947c4340fdb568e168f0aa9efc3e146981499204145019793e115aba3e120f1f4390b8dc1205d6ffef0dfc8b82e469b112eff8481ba33de8401247815e572777f00b80044ef048c0f6c7dcab0ba279d80c0ad32d838b20557cafaae145d2cc8927a10ebb73c3debed8140501400a4273c624ffc0f282a45d72c672abee7c545c2356f65"
            },
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003016Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=72677cd5e1a2808ead57e138bb7c02bd9bba1d96e960097787f3375aae5b96bfcf1d63bee222733f128a7335626159652c7207eb4dc3dd6dd3a108a4fc41271488b81c3902c7f6ec24fb766f53311f7b99e794a67ea486f02febe2b792876b229b5fb6309b3596be84216568f35cf5513aa036ed5cbe4654e2072037357c855209631cad1e59b9eea85a9cff2addd0dd5d7e97636daaccd3db982d26a460270d4188564f3ebf5362fc33d98a67dcde38eacb370ff000b2a1ec30fc679cdfbe52cab20888710c6bf90ef44cecb2b627e539355bcd5882b1d22ab3c0deb5c0f22d17fcd8a651645d2b468ab67f476e9e2fb5ec03b660105f5642ea1011543bc3d7",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003016Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ae372cad5596f1e164ee648db2821193d45846851d5583190da0811115be281cd643d3ed1edda5de99ef0411a5bb61b97fb567cc7446ea01ea6682c80eaad12fd5eea1dff7a8d9b84e1bac35f498baa4dbddb33c4db8503ba5bc97b0e131f6cb9839c3fa36c4f20c29bbb77193e02db8a35f44c61d0806601aa17fb5187b58e1df25202f94c835e741e9ccc9d6b1957cb29e32f27658107df7515d5a0178dc83af3ed9e800f2308b1208b9ff47e46b7298769987353edf04350a403543e6375c3ee3cc649772300deabcfc0ed0e9dce14347f505016c66efe1412aecd611ce77676305eceaee4fd775d41ddf9cab8c7d99acb5b050ba7934af79a1645df51a47"
            },
            "s-5": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003129Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4ad2060663b337c37f47ee228abecd9eb6b04dc7d1ee3cc042cbc6e65238be4f0c9ca3741280057e076695a0405d0f65791e290a6881a1103a15ea3c03baabd8f677aedc9f51a6bc0d0244e20bcc76299d042afe00eaf8d65ebf336fd70c239cca4b8547be581fd9dbb0e52c3935c39e2d08a2e0a63d246643906d08402dfd9802e499664f7cc6b67daf5f39a1a3957afac1cf65d677f8ab29fd62a8069c9027fb23ea6788bbb44523ebc9e03bcd65ee6011f6e4b7077ef204c6cc7e3a592cbe71be34999f9532b35493b6cf6511b5c494ca3e44328a73d8e67650465cdc187d017d1a1ef864ed17d64e28943473936a182250f076fbbb585d9e5bfbdea08c98",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003129Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5ec77148bd90a727889210c0b14565603367ca06d0f7f9043c24104f7ab6463e98df58ecdf1d13e4fab4ceb14d1eb565ad197e9bbf8158a008ad49b40f8f256a9edd07ec503a77127b4627f590a2f04bbce139bdf29e9e105aa08b83eb3f990b0c48524e71cdfe8f230f3d2df4804649703e94d2f8a4fbc26293b4f40b885ba9d099c5c36f05025bb15febeb8aeffc655db61b13f325028ede271eb2026259b0c211a448c05dcaaabbc6f926a0def53a72d3fcccb7210af688f83f5897084b731a848a4887e9eb86d5cef7ff47e16e2a4b9614cfebbfa0c9a7ee974252aceb9c73a993f1f271e10e89c9f41a22760de30af842c96e874862a68e6e80f847ed9c"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003154Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=aa303a999c317a8096102cc6e76a1901dacd0eb0a5d7e7a0403ea4a677d6ea27052c4bdcbf05f3a3a4b444ba6d07c698d604fe98920895ddd9c9cf030cbba2dc731f56d25a9da4127decdbaa3f1b0b15d6a531d440f7a29080605f15df4cd6ce86d275a564bef1b95482040bf6fca16bf2b01cde5185fcbabfdc2a7f870788d9592815e29f9dd8fe57d806af5403f76eb1282f028c1e20c3254f530987e5ed11f289155180f12501eb77889d39cd656ca223e8d1831dc843563272781c3d42571b08c870ec65f3504d62bf9eeedcb1c7b65a9014dd4d315ee8d1e512e65c3b464df23f5d98a113fbc75802cda9eeeba38f1da0abe451996d2cbcedc8db56bb2c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9bd4b798d6bc473e/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003154Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8bcd8c3197bb19ab1b9db31706b8788ae8d1d29f7429cac366d9af3bffe0a656c58afa0cc8120b430c15604110cdd229cee50e515347454c58892caf0bd657c7587ce6b0ec5d59258c5192e6e58d32496ca646b038b1ac810af41713ae09ebec7605aa939c9e10f53b9a7823ac487b630ee2a3db9f103af69e9c6def146ce5547decf3cf1de032a925c7a16aef6ee28aa98ef525a2ac18b948555bd47cc7d8e4a530aceed013bbe09f0fa928f88bcf3bdd1e6de0bdcd327def798a79c44d91c686c4b1452b5ad9a85704cf5951a13fa47e7449748a54055b2e63a6d7947b75d14d359d08f3215fcef550cdc9d7daf0e3d10c61676cd92bebb18aa739ecbd537c"
            }
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784201,
            "nanoseconds": 145000000
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784326,
            "nanoseconds": 525000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-9cd8d4d0978d48e9",
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784211,
            "nanoseconds": 556000000
        },
        "bootConfig": {
            "experimentId": "exp-d7f3b57db87b4310",
            "id": "bootcfg-0db0176a81e84e49",
            "agentConfig": {
                "contextHistorySize": 3,
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "maxIterations": "10",
                "temperature": 1,
                "model": "gpt-4o",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "llmProvider": "openai",
                "taskName": "Find and climb down the ladder",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective."
            },
            "emulatorConfig": {
                "gameId": "GZLE01",
                "platform": "gamecube",
                "startStateFilename": "ww_game_play_start.sav",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "mode": "turn-based",
                "id": "tst-9cd8d4d0978d48e9",
                "endStateMemWatches": {}
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    },
                    "logic": {
                        "operation": {
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "name": "<"
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "name": "LINK_Y",
                                "pointerOffsets": [],
                                "type": "float"
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    }
                }
            }
        },
        "agentState": {
            "status": "finished",
            "id": "astate-251222d312d5475a"
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784329,
            "nanoseconds": 118000000
        },
        "screenshots": {
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003202Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6c1c39f74c4003e9c3a4bfb77e16adc2cd7539f4f9c21c1a883812384c15db367c74fa6579d6f92ba6683ef2c26235b8f51715ab349b23434c61bf5c943b83849119bd1aa4b6331ad240ce23746cd770cfd11addc9a3622c3d2fe5aff3920e2d4ce62e5722764924851cf2d9d7d33a14d0e600bc53b0934036006918807d3931462f8e8f246c2d773b9ffa88daf0c79c582f8fa5e657829c804030bbd66b7fb2a2428e3a776ffdf1c6eddfde59c711d23f111b5cf70a800aea3098b402f6e19cc11800250c135d553a78c6f3a50e056e514bdda38ac757f100feb4f68cc81a989797c954f37e5a0ecaceb484483b459ae6e8ac51039bf8f52f31b69591d93078",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003202Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7836c97675b95f656546fa7e1f2bcd3bdf53462e2303ef7dba2fcf81868ca32c058aa96696b44b1e8871001237ce69f4367eb3b4335187ccc26d356bda477e17336e27c714cfb5663234e7cddef493c85c2df811e7ec03dfdca11078c5c0c60bae102504f7697e65dd0547b0deb656fe0d228b2d7bc27da185b281e25568d0d8f01bf5416ba403de4ce06ba58161359aef01011eec93a7d7a3bde2340ddd2ef3b3c0dc718f6a8f63b7086a1c72ea3af6a979cbad81238f24a2c2354036686ba6d539da696ea5ceea466373eb118cc354df1bc0c90f3adbd4a397c50dcfaaba699688822c987f8619b1701be76dfca54512a27838a1f3502e352962ce28e5f657"
            },
            "s-7": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003153Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ad6e1847b2440ab98b23089f930fe61869952235fee7d8446bc7b69f5537616d29fac96dd7b94fa20c0e56d2083e7e80ecfcd73add9deb32fa081fb6662650202fe1fe642cd69f224169a2382cf9963a551cf313740e659a05d8f8fda07640c9d6995cccd0c97686f64614e9d339d14ea41cf70fdd326a1881617e2319473217b4b9d1095d62a628dc887b5acd8f164c07a36b166bd90fafe42bd887e7cc1ce7a41451129f8890f76b3033b953e35272976a4cd8fc94c87def3916fc48cf6b8c6ac128655d3cea7dd960612e769e7a3051919bca44fa75d5ccde2b5605c403e9efda874be940c658f17ebc2aa139d867025a5057cb94469eaed7535ea2638217",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003153Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=36c83f085a969c45b7818281b4d1cbd332c97615c4f57693cc5d288c573ad69ba89f4a2a3e0b0ab66578e3338030463c61a753e182aed7ff3e9d44874960edbd4a9f68931c039d3e01289bf3142cb263f8b99c1796a3c7ce971c32e1d4bc11b962b64e8cb63fe5d3e1b28d2e2258d0ec510db6c5963c829214af199a0b4e893adcd0ff9999c104db39b05f74233a8dede2cfb446b6420bd712e93d1fd8ddd7bee19aeb47c12abeb4cae88c8e45c91013f9c7bdab785d754ec5581f02ce3e6e883569a1957468d836156786d24dccc8125e833e530f934b34412e3e27149b5b8c415cc10f7fd093a9382feef4b2c4f8b698b84b4a64d33cad6d15f5d97cd37776"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003054Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=add3f3ef675e2eaf93ca2268b700318f0e9013d7a82615b9c478736f6b6a229c046e54a98adb2313f951d2d25ee362a14d798f8a8e6528cb52f978ce604c6cc4846f32aac076da57651768799fc9aa7aa54d799af3e200bff4dd644f1a5df3e5e9852ae21e0277ec5bb7812be6657c0908e583d24bd5998993f9ef537770a98f74fee30ec2aef0d7d8d5e93a69bc35c636bf9d5380421c5095ef16522a01ecf8570576657228922a92e86acf8bd3963de74547df3279a05ad27ab79ebf3c45c92dd2b696613cb9f765c87251cdb3f678c7064bd5f3e006b6c1291c607ac937d85665f8cfa9b4c55dab908c73558442f8caa87a8aac284f41826f65a633640f9b",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003054Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1b199b105fe7f20e552da416d675261edaa6323e3dd5061b7a28549b2f783be2b03363afe125bd75081d3a1d41f056f390ad21ed2eb275288d680daf33d9780fb309fc2e5581da79eecd03c610c5c9ad021a48fecadae09dda3c8717c44f3dd420bd8aaeaa256f474229b1f238b14d6616eaa54d514c553f333121f48d881f301303bf768304b3930e070ff878791538bb47068f242ec00c694c4663b1f13798813187c71a2a5157e75a62cd5734ec01c709bea6c9b57a2253458513a466e64cb8d628732b1bc20152aafd494dcc5b1811c624aeb5bfff27c8d899cead6a515c0010a3ef207985778fd7480e26d85bf64bcc842a043eae491615d37313d59724"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003103Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7da5980f7106e62bb521e981a19cb22933a8cb624ea1cdf1d30c28bde9e676e802acf2b685ece9ce936a0a6a6d5f6c3ee94caa8e6d11ff07c5f10fa08db19659c07183928ea64ea1c5f3243e8bcb1f030602706a4a2d823235b91e72892277a7066c8b0f14bef26a15a6439396cdbc4d4d90e441306d26d2e63c9a790195afa9ecfdb7518525be536439801d2f335e7b38b8438052554aea53c75ce4a59be70c1e89af4f62fb8a00531e2f6bdded4dc46aeaa60edf0fa28ebca8d84f1680037819d988fbd3e9bfb9da9bb55a8ce6f75e2af8bfd84fdb4d401ccdea5d54eea19c0e5de3ef6c79e49b6632a062e71f606affe77bf33e6ab6a9604a8a932b87fcea",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003103Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=954d886176e7e2948c51500988e7344f6f511ab50f1ba79decb29af69e008f59eecc7e7e06d786d95ba6cdfd287e40087496ce9d108523515282f139b2f3fbd18c60de220e27fee3304a86c565d12d2c3a31e87512843a1291db00c2bbb96cc7b8fabd5e2ba3588689b1e05a1dbfb4d3360ae94d4b58df23d6a9e6f2ce9cdabaf97853b6d4d7bc19d16386ca9e4be078e5a904fd619f2a86196c594d604a2d28318530321160a338ba1fa9485290afb28b90d4206e60db1eb6804c29052a3d272ee38f0f5f9a7b6194f90ccac4e56efe5a73577822945610094227f8e0d2b95fc50304c21d516d5a22a9af01d954dc2b2465b8364f4c7870309c48c656429266"
            },
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003144Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0a40a63231b6cb7a81794d31a91f9c63d71eb49b2f64b6e8444cf0959ef94a6ec5aaf79c3c04273d58776b219502f366b0cc5d1e16869fa1bf965ac28d31f33f2746a229a32cd57f4e7086afb1f50f3d992a8ebce7f8a2f0743c1b7491012cff892a0ac3d637c8b73aee938bf09c4eb1af6f8e4c6269f5a6a312893638d2ad488e7328174af94b508c420cbc93e94cd7bf1e0356150d54edabaa7acc221ee86ff27d8f04b8b69e0833122919980710f200abf747027725b546e22af9d7617c4983ecd265594feae5dd0ece24243975205309e4016bd85a682950a6e8597550380a6da79c856e781bb2b15a927842c75696d2b803ca81ef1fa6eede032385c3eb",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003144Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=50749a5e0e49e51d97cf5454cb973dd3e9602cedc26d010813e08543f46b9df3ac6923a6f13f428169c4a0492b633515ceab3c2a209a9a64523a047dffe596b06887afdba84781a6247ac6ae2e1198c1c8631b257d9c15a11829956dc1c061d19d86dd44ba6fdd7b14fc172a76da2383a7caa0635f846ea5504bd6deeb62ec6936b5d7a98d1066290b5b0ee1b36c2114004f7bd325215c5e41d6061421a68b95c14f2ac64e3b24624c66ba30d5aca0aa3c159c9dc44298dbf0b21f0e08d122ac2b1a4fd4966e28da533248e35ede15a4caefc47cf09576b3f8a97625b014d6cdb1e48dbd1d8f159636d9c8766de087fe190233b514c99cb66c08deae5bfc2a1d"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003113Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=24c34b8dd4f4dac698312b57310495b6e4e010f38f4599b541dac8c7c437e843268209dd20bc2c6a27ea0590cc546086d9a64811d1b05a2ab185bb419d6834d855b822a7200e7b63fed20d350127e8d3ad481e889d5654deb08e6b74955c3dd7185df7e3035fa95aea44f14bf84f7e8a6bbb0ba4b4c71780f3bd63ab16746d696dd29a2ebea0e0fc79ac5cc1b97ec644e569f5266c05f991ed338c9adc8a8ffb5212864bafc4346958e633de2b3bd369988ef6d3f74e788c8ca0ad43c40b34f28e86241b79bf4472d030abffce11fe4500b1120ce5dd5220704f990b1396b2d001fbee8ba9020fb31d03419cef6f7f6003e6e13a940ae74c072bd5df03cf542d",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003113Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=232f003d7b7dcada1be2ec6355e776829105393d099a2bb355d70883795b784d4e6e908334704ea586b4a326242ce689cf84e0ff6fdf650f3fc6516ab95b4d776c2edaac4ea3166e394054a70a9708ab84517726c6913e35d8b235ee12b0c2d98bcadbab0320eef9cbb6076c4c24f1f5085f5ecb6b1b70fcedea7cc6bb27633cf511b25cafb92b74cca62deff36efcf1670acbed03a99691d5c9cb7eca07d1347bcbcbb6fe49f9b5dbb81dec9efc4450dda65520d95cb1bcc3c98f4a748eda522fd4237a98908db97dcf3636b8819dc02cffcd327963121701bead494a0b33357db26783a38ac74e1e76478e9b543f62d6efb7ee7613cf67a2d0fe707a37475d"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003137Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=08af80b6f6e49f22d31eae554a2a41282394ec23f3ced828a3d28ce77efa8db2409b436e48d50984bd2ff78612b3e7e736a354761098262d62e956dbb40d05fa0fe2cc3d1aff40e4892ddf8a87128291b42c7da140c6d9d50d1328615b8a2f8e592e49fd3baabbbb7b5e4b925aca602769a20c92eaf96b8ee43c948907e769a2028199423731ad056f43709ade0017ef8638f13187fa94a85ff5cf9dbe04898eb16c37ca8fe4ed21ad1845d60e42a9ab7048cec935e773693cab66c1d9a41bf19d1d7e93333984f89357192e10676e56d28166e6e7d875b1b5bbfe4868ed3d619840db11bc4effd84621b8baed68b48bec5aaf79b588459974462f6f8439123c",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003137Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7b2ba64ffc2de23f996cbd72132c437b7baea1db722d815a04301cd7a8f21352ae07d9e043eff3014070183323ac0da54dff7cbcc3fe5f915fec1bfb60be8c149b0560a561ee3b6d135f76f53573cabf79d618dc2a18a9e510cf34ade4bf95301b2905400753b77992222375ac4778ada494dfbf930184d09882a329d97bf5352b6c9df18039b2d4420f5d7d4bbf65fad2a36d3be3022fffaacd3582bfe989672943d3063625efa1b57b6406deea0ab676edda29336da1f36f0738f49f530330b45cdc205e1a960e3876b777597841325b2836605f4644b7ee71ff092c138d9227dbd01d7fdcec873e776d2b3fcce815109d86f0e45ef7d738937305b0e716f5"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003128Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4caf472372cd4cbe613eb031cce572161d22d4b428676a3b31600d961d782fc695a6946492ca340c59896cda9e6cbb52511fcac138c365e3a96cc818245994d1090266a0522f2f10c444506c2efbeff99e5f6bdd451dff180b8e4ce5655818fed05d150ce97f1b8cc1fe35d3e4891f7480f99c1a97e0867c4f8d8dc204bf20162374763f561c23623ed9b54867bc815e0907cd95bb65d5a68bbe0fa6b5f1efec9f37852a73c3db0083c3f4c3b9858d6d095278cb01c105265f6dae008c43ab5895672dd8ab63ab331be217c44778b2955a59fffac97dad70ab9e6796658cbb480439a732ae9086e160013605bb1b53442eb0d3041a514580c03cdc752376ba68",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003128Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=663501250d166352e91f575fc4dc1f50dc3db41a2325e969a96e968f9c3b7c872f6362ca28ac82a5a6c5593fdff487859aa0fe310bb973d936edd7ac9ff56ab706d06255ed80260abec99e2819e8c6d968542ed44d32436d9b921204871c9be596bdbb34e4f562c5ffbdae17f93ce9b3025b00c33f7fadf13b41238f3280e64f93291b929bb8cfd9ad53ef17d6d32d4cf54df15fb3b35dca78b02ebf8105e29943aa6fcc4af9e11ffdaf3a080700cef1b6549df10774d611ce9909a5571a69203b1aaf3eff0c3fa9ba407c92c05772006feb5b9ed442bca655bfcd0912e95309c5d949a05dc234d456c058f239afed828997a7c25a2fc1ec93c81c9fd7a11678"
            },
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003208Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1a21aa03be5cd1800af93574fbf1517353f404bff41fea43f28c2d61edd900f28d5c46e849b2e57a61709661ce4a4e668ee0b40c54da2dd886c5e770275837af067237cf380ea96e250d8277aa896a56309149ebff85f04b4c8bba96e738c1c876990ebcd90aef5233889ba94fbc4235d3ef426fa11119c86acf45c29bb50fd233bd362a7b3efb61e5b945e922edeada90272ea375029e7defbc3bfec1799a42941df61a2f06b32740a703663b160db01da5c0e48f3c8570ae1df119380a7fe6ed2eec04bcb711fd96c9f666da633c94919b00bea323917ac90a562a3e4ef08c76018ecb16a8042ce493eefbbdba15a054c427f12401d2ebdb6f67d9a9a04dae",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003208Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=24bf30b726dc262d33b42f9ed00b9c5b1001b235acb67e2d4193b869f9bd2e230421bcaef5fc93d2a535c927d4376c0cae529d06c8073e9c15859c42bc70bd7327997d574860962b3ac320de27a8cb48d657b04cabf05e7e61d0d73e01436309a7efa93b858a7c18936bed9601095e6e4b7f1374670a976ed5cf632660ab200eb2e30771d9bf1c60f156dd80aefca9f43de4b06523356f60c91477786dc23939bddd6b2336dafa72de9f6f5fdb34902493f8b1d8f16fb042e2cdf1586e04c2e868448cfd59f7949f4e398a711063b89e797b8797f3e902af13b17931f48cdccd5b312e98c8136432711fc05274f5fc3c2ad4f6d4ece291e4a75937af8bd3cc1b"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003028Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8acb909cd5bf86211519b57893bfa17337e2711c3e48926dd65a07ee5968cba6464a1950333b5114a47d73ff2eca2cde6fb7cde32897e532b000236102e9059e7b687ac408549da8bf3369bebc0e17f1fa874f108a53ab64262d153bd566b53755afeeaeb89b22fe808bc220c8bf8a652b29fc4074bcca9729035935ee5f083e147dcdfdb882677fb1bde399867dea183db7093d43588f76294ec1f6a6453eade6877b60d6cb6e02d7aff207212c55472638e75d341f9d2768a8db2a29b44d6c8918acc97b8ef87a7013157ff2ec63ffa2d730a549e556238d8f6e3d1e2623ad3d08b1b77dc5b8c46ecfbc3e7354e5ef41bec60c2c57cc7bd9d095543d6d8cb2",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9cd8d4d0978d48e9/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003028Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=975bd1035c7f8098936625653460de81b8ac21a67c73dfc127dc6780a9453cf29acb2d7e7e3c2645703ce24b7c26589656bbe259ed6a05c6de2aa757c652cea39427c4b09004d9d517fb64b1c6618a9263680f649418647f403cb4196059dec6618980d46b4d60b26ab6d90063df6ee1a9c989f510c5ab0741d9a46710eefd15b07e46c20c07c3dd2e27878ebe37ae0b0dab5236c20b29cdad5730604e7f9dbeaf78618f009b4366feb5da9b5cc525d51d3e41cd685139bd5af282c60b7cae2314599f7fea2f8127303fac3ddbf74f0e2d19989c5db95017e286c13c154d9090a99f7e76f80acf76e8b1f3aa1ba721d61cf0047db7302fd8fa7f9e13b51d2459"
            }
        },
        "emulatorState": {
            "status": "finished"
        },
        "testState": {
            "stateHistory": {
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
                },
                "turn_6": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                },
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_9": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_3": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                }
            },
            "screenshots": {},
            "id": "tst-9cd8d4d0978d48e9",
            "status": "finished"
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-9d494efbd7484bc5",
        "agentState": {
            "status": "error",
            "id": "astate-0de6ba15e6d140ea"
        },
        "emulatorState": {
            "status": "finished"
        },
        "screenshots": {
            "s-9": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003634Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6f293f0d5cb7dfab66be972632374935de64ef981841665af16cd0c6596c8506079165c61b2873bec78b5f777bb7a6d77c476e9da8a4430da43cdefdf515b76706a0162b1c847f25cee327e9f1740a7557b14fa47a946942c882113687b42c9ad75f8f28f2931701a75b168f9d2196b27a35eb47c5b6aafb3ca042a9c3cd019dfac4fd4daca0da537bbf084afee1de975ba7ee3b2c4a0cb46bc2075fcc391e428ffdd65abd0ab5a131e412a5201066095124d98c570545dfcccc5c9feee073b2732cbde77d47b2e90a22844d87a0721094734ccfcde1760653f414aac09641d7223b475bea23e186c39f79495fe7f6544f5ab48146671751567aff8e2aba9468",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003634Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=07b12e1edcc3a1ff6f1965383576c2744543ac0d84e62693ff9acba3f51fa690ebd0d2fbce64d31146c63a0791930cc214c8f21d191dfc956419d012ddda8238178ec7e8a33a58339b1cb06ec69cf0a6771cc2c38aa767316ca1bd2b013e02e3632bc4ac278c80801425c620022e728bfb1090293437fcd2ccbf5d1d6ac2dc98841320bda0dca81076294dcbf61b0adc6bc86c52e008e80a316651d00c747d276937d41109b28f19bd978a46ca65645de2ae7cb3f1b9b6728bc7abacf98828547f9f6a6d7f327627f7dd284ed6b99003b844f88ac20fe66e5db843cf04d00634dcf824e121a7ef8811a44cefd4d3309b6923fe4e6f8270fddf9882310c691fc5"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003634Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=98c08416f5e37afc162a1b7bb93ca88d8b9b3556c7555422779a8592687b6a9fed8bb630b8712721fde51b05b7fa61abc3055267ca3cae123dd4dd6257326d14676ca0a1cef26bd80584eea2f4dbba5dc91fe3da9c4c08b4f967494a53dcf4b0bfdcabe20a9c07b93c3e8e2359192678f5240e11961b3b4b0ce735f7ef8c173855bd9119ad149466f9427e030029ad7349695dc0064ae3926e5ccfea36df982e31042afdb282cc2db64c1611af3d93f4e28bbd8d48b425487678c3ae6effc6c1bb36cc34767ed46556b08a75ac61a6535e7c39da480186ca11b99a9f3d6ac4a24e02b123e41fcf5a1738fd85b5af6a755498589d3e3050df21646e5226fc87eb",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003634Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=70303724b1a2730ec962407c36c9e72163998abd7203ad3d1aeb4cad1b73339ed8cdcf22463a26e69d893d1b51d4089f52864419768880f6ef4224c2e58a1fcc3a4557ded1f62c274af0e8712740f55a91448f81efe16306cac5548277d163fb8655495a717456f3b5b7cd2ad0561312c2692d9fc3fa25a14d0ff6a9a983e01a8c8cf0e48c1caa95be9511cbb20ef2701ae9da891cda06973e34444ab0b21a76a7eb00c822d32db0f7624940349e0a10b3a34fa46d82e2b09a3b7694856d13c12e1613e4b07128a44d96131f776e8667f716c978d205f28081c9ccb1b2865a473926a80b1012e01a3cdf8af35106bb08971f7b2df9e272156a03df8da0f4bf4e"
            },
            "s-4": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003523Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8da9a9823d888d27dc326b31efdd1ff8edf8b7e38b60a34585f09d4e4c7d571d0e3bbf707abf98cdb0465ca74a1abf915e6ec00ea07ddd1011756615836f3802ded4dddd33002bfada01a98546d5489b9ac7bc4e443d56a42df41cde2166156601d8648708dbe476e8bbfe751efb1dd4b7ed2b97e752c0edb717db0d97313fb775858d92e303b8091be7a8e128626c244b5ae0dce818a90c2f3639b59fd613b82886a561a49f6ef89f508cc4fcfbe60f6e877a81b606e0bb8ca3134c29f699c1399d75218ad977e9accc655bfd0e48ca1da6fabc50c83e9ef3dd6f22c3e5296bedf30ba1687432625019b5255c1189bac4d2757a14a970ab4954a2ffc276d43a",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003523Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=86494d8fff791a42ab80c237cc101f71767cd4f32d900c9ce6f90161da13b1faf2b071512ee002fd883d39fc5485757c40f3f4c2d965f7abb9d02227618c689c8713c193de6467b4af766b8147aeea65d1fa7e04572ee0d4350cf44cb9113d50848c20527297599adfa5694d84bd4d5dd950afc36a95d4d94b5f3ddf1b13b2e2b355e2a7b2ed1182a877c2272e087b2404d44be548174714c9a919720751ca3e781289707ef0ea27cf118be6e5608630385341db3d9e586154d97c3f0d5c060c30e794dbb6ce8b0f7646c6cae71dfc59c7739ed7d3babc4da57ff606dcc51f54d589a241707a5ed6e617f7b78fb258532eca13b88d15cfb39bbfb03da683f22b"
            },
            "s-10": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/10.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003717Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3e699eb649355682cdb94182e29a938a5e2883d029285d20e175e16ea871678a54a9af6106a13754cce9da168ff1bf81ff873f79ac8710b91e2f36b4fb563e91f431c4517cb4f567e591baf1eb7223088b425e0bd90879e1055fbcab6273e98534e79f48e7d0bf7f4ee50780e851b8b09502d227b8b2548b8d54b8b36cecb9bcf6f49583ff71b50b68902b173fae766666e2fcc1584c841e5e130297bdfa7c7ab69b6e25879c32e967b17207a184d24af5c79b3130f97f429795162b6e53a526b88c4aa48ead22a494120424d62bf264280fdee4a8517bb6743717118c1dd2ce901e303fc78396b931800f4e1e35b4e1b7f8078c54ce53996a90f983acf63d0c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/10_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003717Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7a35263d4df27cb32b37d2137a93356eb791bcfcf3853cd0a52e62e8464d18494e6946ca996d29e183c586772f9779bc887cfb67b4e5866260d86101099a5412c16433fedeb6d142880f973149878fc5c81196c452ffc9d6e5db93c0bd6d6c43ae0e8a718c0affdda6bc0433150b44d9017bb0fc4528c5b831a23f17fd126039ea0ebbc809819fad4c56903574cad506e4c372609ed5908376dfb65ab0569e56968db53a0a829fadcca687b8645e63d0710c873b0927e80fdf8e63a9ad7d5b2f1be7fe98bf82987b5ce4f52d2614d173311e1cd4d771e0fe466ded37384402c664485c280fd991fe05318430f47b34de5941c3d14890e372671630094e12c6b3"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003514Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8389e01c20675a184f89d51c3806f9f4fdec526ccf75cf1f22b3d76773e04549cbc4e02873b51422e26ed7e8ee384c96c002fef41d1b20623a56cf7eaa60f8a4fc3c1651fe8a43b742908815cb0dd10f638e48e526f2c790762e5f30f92c0b902b824e492c08e85390ee41e661835c286c95abc7fb6e96f347687df75e015ca4c46c92d160d899917bd27c35952508bc90709b90eb89641431b151c6f847c264b19cbef1b07a20e5306703c18c6b27cad4f57ad9efdcf429c0e0a162bff14c2c330fefca28d475f005d16ca35be38b40613ee34b9ee80087ca45d90d158ea8f93153e6588c552512c5d10bdb366f9dc77b8bf6b3a66cc79a750e802d56eeccb1",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003514Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=172dc990acbce87862222e842f4dbfc7f2c40cb91ba31d27c0a3a2c003bd2e7425ac265f5ff8bd6e7be88a5296034abb97116bb34fd547fde61320e2b3daccadb2ab7a79bcd51a3580aaa62bfc613ce4bd6bb2f3caeb26d6573fe512dd2addcdb558838e814071dec503533a703fa97587efe45f360859083745d80fd4fb12e31fcad2e5c827887e0ead36e3de0f054625a529a014b4196bd52566bacc5df94eb69956dce3fc300524aecdb2f80b5d613c5676d58e31a118f2ab35222f84079e4fa765ae0741ef8a8c8fb4459d08c59314dc7a22d00ca96ae9f964dce40e9ab5636982d5ad58072b0590c6588010177bcde872ad8875fe20872d0cf0c2609244"
            },
            "s-5": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003533Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3bfacf802b1f2836dc809cd9553d1b13afe3a81010d5202e60be3a8465fa8cf56967e9cfd1ae92cf85a0cdb15dc6093537e057cbbfaa220d6688312dacd503cbc3d40c38915cedfe208cd06426130406e8485a2ffd97bbe84e94448addd03e1977289d8df2e0edfb670ed999cd26ed7b3232a1103b3dc1fcc7504d06acebf94b5c082ddb2fb93d450ef6b74e497f62205016a3de4d9741c2ad4095899c14b4a84ba1eec9a480a80d473bb319f277c637df7d8e131bd22b80ff451537ac5bd8286dcc0c0d76fe5ff4cc1836d630bb1010fa553d640b7359d935532c1861049f0810aa1b18a0ead20590c983353a1408b8f2da831faca56e7a4551cfe1905f2f6a",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003533Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5b12c6d4c2162e23ca647373ffffed0239fbbeb5553380ae99a9e514fd9731baa245da65cdad98f58774fadfb917dab7029ce2a500d179fc368f3d9fc0f2f824c83b257f09167319fb1e18a811f82899f28af5ab0dc67618ef4b8c17cbef1fbcf20be37372d9ceb0ef02b87bc77c0b3a640c9098dcf344287cb9961eba4a96d7d266979cd018e4d26fd03f021b5723578ebae9e78d2ba6566ade223ad3fef704fed76e30cbbe1e81c118f6ce0d9cd39f717d49e48b5b77926e34f85ed3c5965779a81827851daa16bce6a79381e64ea32606c84d5216577d8301904bcb3a0384161a84c7e955bd5dc55cee7c7d1101e7fea7e3833b32d185b412e89e75c84277"
            },
            "s-7": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003548Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=41e1d0415d4bd9419f06bd1aad8f826486188b99bf71418be02fa2372b70ccece4e0d98c85281bb509e3f44e63fbe00d057ed63cd9117dbd6e3f961a5bf068791fc3ff77f7dab261a8e256b6bf58596fbdb270e10a2228a166ebe09f1600a9a5cc91df72988e7bf9bd7d46ad9f5040904e9ed7c8ecbcfa9611f88e92a62ffc5414a80348b99bc87f788cdd2fd4f03a303fe42e1ab46b57deecdcf12c1e553d61de0d44d9d7ce8c3d8cf77cf03c5b8016026580fb5bcbe0c1ed2a66fa7cf6a5bdf12ef4aec97ea62e75a100232ac630da75eb69197c66ce813b136a0480a1b039a39616eab66b0d38ce374d13d826b8bc06b292ae9a48f243b1eafc31b08dd29c",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003548Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2e67f51dfbdd29a819520c8ab58811dad6e68ed0c85867bf705510b4b754f6cd515bc0e48549f5ae7b0bd00cb728a7b17ee6717d8220d77557df8167abc0473fb57029f90d5c7204dcd60c5346769fd33a50bc8cbe2c88e1b3b5fdef05e153ed4d13f7cad390ae73e108a41a43e0fca932a9972615ea9d32cb663286b41c4d97cd660752a6de9755db3da0c53e8b42041ab1cd2ffa3f7988652e9e6dc1023ac4754a928327679bc60ceff2a304d34d798d3a14a3f7e5ab07bfd0efee50d580da3d4d60a7622a8040e170f03efa12a5d00361ff42df9d40ccc0c4809ac5fa7313b24ebd7736b3555201602c04b4c651c86938158f5b2c74fa4798f16f142fe678"
            },
            "s-6": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003543Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=89a6d3af692ac3f4a31bce4dae07789c9674b173af66ef576512b5864a0bf5c341cfbe4e91e93b83e3ad864b3c846c35c98b2a58a2c96b482b9510dfb134eea415cf7b1a14b2aba71b13e059853cb249810ae38e7cd061041b29045564d257e2b4ae3f620fb1956e77f276b744a681cb6809b317f769f2f5604d1f3b6418d137486035b574abd758550a2bcedd2478753e62681b661b20c4c68a89de7790a523d4a2941675e3267c5c78dc8eb786cadcfbcc83c747297be29757a7d817dd3a6502be355117a1311f8334903c6d3c30392ff619b83190ae29bee1724fd6a8e753d2aef3e02e0868b73654c204024b0050e14dcfb8c9a38d00e3dea932bbaa6a1e",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003543Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5fb8788244d8fb6cde3aa178cd9c629dbcacfcec1ab13e5cfb3777012bb1dc009688d9674796f6f76fd8b8256fc5a50a05f8063eedcb44491d38aab7eb645ccb6f643824cf0caf5f73df89aeba0333946c60fed4253690e31805ca37445727af22cca53ae11931d2ab3e5666a19510f1e29e03063304a6cf75fc23af627aa40f6bc2ab444e037975a903bd00dc612674e5823fab5c4d4e0b557dc290a6bc104691221867d1cdb7b1eb578dd965cc090a42374dcd086ea260f56224ef79a204a6536e0c5701fcbbe9229f853aa389ad272c0c43ec7af69106bf539a4e8339873baecc4f62d4300301008669e815151eff0e187ee3bbd77f9fe837057e015d64c6"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003454Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=08b03c58ebb62c1589cd405440779051d54a6b12cae1ca48361398c1ac7c88889345e05b51733ce48b2140887ce62c09419b91bd752812037752300488c591b6f9be83a2ea4f442b34474163175b82e95b83982b1cd7f9546e428425c96158fc669311041c4c9a4fe9d82a0c645a4982c5f3fb26a7d08c5dd7e4c24a51310e7aa510842826c193e01439209ae5fddd3c5d504cd2637385260c6e14fe482a8aeb9ea1e8634af59b981fce2c598db82ce51d34cfcc6c74cfc47e946fa370f2a150a4b170a634f81b2aaee9578fa64be43b3d5206657aaf31ad5258ded9dd98fb23b0feba31df756db60516eed95c4da0fa8718699f6a2d99c5a25a209765828de1",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003454Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4b75897a35284c5dc4554eb302a987e21018153b69c1f28a55ad3b556e368f5a1c07802caeb15a90b864e77fd4e197aabab57d62e33fbdd0394fcffbabc78e4200b9d86867a2445e75dd2662a1f46f9fcedf5ffc6a39db63f5fe86483ee75f2912c6287fdcda630abca77297363781090fc7b2e43df411eb485b82342010df0e3b7125e61fa0e032297529c366aa49660e0c770c0201bf8724705c11978c9255093c8235e9b417b9437c04f709fc9213afcf53258d119584cc7fbfcf06f2c34ab10854d1fcdc6f617d170166d872fc2275ddbb5b4796ae10c7b19527fc4af53a3767054fd24ff4a7a27e54bd7871597247f4796c806e4a7dd8bc718d5ded2e9a"
            },
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003417Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=631035867612c418ab0584d2a4c0416d3cf0e39b1053c5167d9bd9d3b7d4f7184939922c1e5d694d6343bfb710d84a54cac26f3a4f3a861e7e3add1b33a16bd626d4626cd0ea732902d2564c21adf5db8f153d6856410ebd05bb1d7b4b6172734bed209a462954ab1a02ae51fbd033c5e433460aa290165d30351fb2a4173362c6627cbd4c456c5307454d88fd4f38bba2a44b4a883638b0db58ffdfb59d34b58bde11bdca71a4359c0acc8828f5a4e4c5ba746618ab149102553732dc812a20f363e632627bde40e6594195ea18a2ee648c502a99c2cc67559d8c5f378b7148809374ef7cbdc29260cda22af4665a6a965f88fc530a260f5e04c1710888989a",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003417Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=152e3d75c923790489da4b0b9124362ee45975bdab0262427f62b88e49ae1467102485c6ef91f597375dfae603af922211218562e339411c4b58cc800bdc1cc080e6fff71d013764d068838bcefa470c338bbc7d47da3e7646ff54c32afd0475b500329e15d2be2892fa63cf20d615ad6449e19d4a6ea9f189c76996ea8058d6c0a92da750cbb7177ae3080da68856bc60360207d48da2bfa07b681d08f79a3d5bf1e5c1e856819ff8ba01002198e5eac74f6a246c4b7b444df508eec01e460bce9ae8dd3f30f5b7395503381b006f45df1ce800d56c4add3e8bb0fbc1080f6ff2f6e0a986f1046957b71ba5d47cdcf4f0910092153fa4a0037a5963bae08133"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003504Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a44fdba2d5c3b7cb8a7b947794369f5edc79040b4dd8bb3494488e6219366bd57ec672b42f9802fc9fda32691681b602c6a5aefe2319b4a1c01313cd6f7b1aedaaa5f690d3e00ede64bbdb00e5059f9a636016a8f6676aec9168bd8a2e24cc4f039647478ebe26cada17c5b6af93c308c8dd5bea8f97678d9e5eaa9ebe3276fc640789fa6a59758944b82c2ec529f953304dedefee284aa14f1147378c4dff19670ab8cb956ff8af42872fca53cafcb8fd39f0b1a88985534e4e68ab303154dffdceed3831f365cb22ffbd7bba7e59a3f9f3eb5f8b88e6193932dd364bf37b2f3ce364ba4a1cb2f8ca9cf98c160493d0cedaa9307e12cfdad09de892d3f3ed56",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-9d494efbd7484bc5/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003504Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6524fced4729960b4d6781f9e93ed93caf739f2e91e97bb14f5764efa4fcfe6d8550c4184a2918b41626d782b73838efcfc4129301ee1fefd9cac6329d933ed3be1ab160492d3deeda9f86b4fa8ae70d74fce76ec9ae03d2dbf40550fb8bca255f30e47fb91db0aebfa0d3b65ed90d1fffbabc932e7daffc9b3ae8054facf723838e13f640e6a863fee375bec328b145305f60ec685f4d5036ec1bdc2d0418f6f9926805ea63368578767092a1bbfd827ee530e56bc30460d9351759b3719ba399055776e10807bf4604dfd6eee6cbe03a744d26d0b45d29957be7556b1d1313071666eb04da323458bb8eba73d247baff2433160c9bcad66f5660f7fea096b3"
            }
        },
        "testState": {
            "screenshots": {},
            "stateHistory": {
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_4": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_6": {
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
                "turn_2": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            },
            "status": "finished",
            "id": "tst-9d494efbd7484bc5"
        },
        "bootConfig": {
            "id": "bootcfg-24a5a61f84ca47e2",
            "goalConfig": {
                "condition": {
                    "logic": {
                        "operation": {
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "name": "<"
                        },
                        "lhs": {
                            "input": {
                                "type": "float",
                                "name": "LINK_Y",
                                "rawValue": -1,
                                "pointerOffsets": []
                            }
                        },
                        "rhs": {
                            "primitive": 1400
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    }
                }
            },
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "agentConfig": {
                "model": "gpt-4o",
                "contextHistorySize": 3,
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "maxIterations": "10",
                "taskName": "Find and climb down the ladder",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "temperature": 1,
                "llmProvider": "openai",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down."
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "emulatorConfig": {
                "platform": "gamecube",
                "contextMemWatches": {
                    "LINK_Y": {
                        "size": 4,
                        "address": "803E4410"
                    }
                },
                "id": "tst-9d494efbd7484bc5",
                "endStateMemWatches": {},
                "mode": "turn-based",
                "startStateFilename": "ww_game_play_start.sav",
                "gameId": "GZLE01"
            }
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784679,
            "nanoseconds": 510000000
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784393,
            "nanoseconds": 591000000
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-b477e4569356463d",
        "agentState": {
            "status": "error",
            "id": "astate-c562eee506dd48d5"
        },
        "testState": {
            "stateHistory": {},
            "status": "finished",
            "screenshots": {},
            "id": "tst-b477e4569356463d"
        },
        "emulatorState": {
            "status": "finished"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784312,
            "nanoseconds": 525000000
        },
        "screenshots": {
            "s-0": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003213Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a1d244c98f09f04c7ce3fbd2ef6c93da1505977c135c91346eeaf266c94e1db5396b33c09d83fae48a86c6c15aaeecb488724e729e0f92fcde62353d1f9f25d24bf90141308873581068f74ecd3a4f790e4f4c8a8e2c06184f07e86b217a4d56db594b205e9ef0fe954c16b3924d0decb78b29ba0d99d0cd830b9c350e4c164fc16d6f0483fb266c1a3a1c7365a2884d4156d031581c57322915372657f6ff35ef8e26d51176ab1257453aeac438ffdffefaad671f7c5f6ede70dfed215068291e928fbc6a77bbe51a15d720be2c0a5d0cf189854f84fc41a2fd12bfebf37e7b53034b6085516181df512661828998b97e1cf8271f680e05ed2d4cb6321f2267",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003213Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=871c64eaa546874f005578863521344cabd5bd81451a466e6d191c2479c222003b469f3ecfc0ae85fcad568ba7e6d6171a24f3dada204decab7518b03d927273286f4385e59f1587c87169df0789069f2ccac12f5fa083aa891a19a6a46fe898d6a14880d702dba226ed66ae73727e361730eba7430c0d70db1c19493ffa8bb6e267f15f0ee90e210a0329e0c1dad65615ceb0bb25ac325ebe21ec5636342fb1af35b8770e6f33edf6613b4f317f16db1f42b8fa6de6acefd23c3b7a14dd19a2f4d764d20ecffdfece9f66478b6e2d6892d65ef6c259a44bcffacc57fcba397e0e0db7eda96a5daae583c0d61d6a1bf91ca0bbff6e6b030ff278bec217d26d33"
            },
            "s-2": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003313Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9ae4583f59e64400bfa1502896b28bd02e1852507b7f2e4f1a5cc3c2715bc7560a580df0e7113a1139a1f72cfa1ff23b27dc33e78222f1adad96ed3a59028208ae764dbbace8ccd45930013b1d9c9ce33ba4000d5fbc95eea0c6e02db4657e312b16504163fdff4c3797ac7d662ee72de78550aab1315d08af28ad0eb79e789ac0f61b418b0586366f00051ba1ba8eb826abaaa3e74cd83fc0ccf5ab18b2cb2ae18e9d3282536c1232f801f4643f04d0c1716138485e3d7ba319e1e679783e2b843802d8ca0b56c131a4ed95f1aca6f04acfd066414799f9d25fb108f45dcfc00e9d070e81b34b8c26592d41940c04bfd99a7cf01b92ae2a4d14535742450f62",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003313Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3624c2d2f2427aae9a148835c9c46dab20dbf87de51402f4edd0be6d39e3b4124371278c81e9189dadf688d5becc2dd595be4ed9bfd98c4ddf52d6e06fe9f949bec245ca3d85a95437daa40fac4dd402608bca056635979702c4a66db8c3c829fa46453a0cca992182ff847dd03b435e4a5033302d059f9cbfbb3c32be9dd0ba25cb6017e36bfce0e1c1aba211e5ca060203b1491d95538cc7ecf9a45a98c8005cb308de59336fafee70e5ff80ce1c3c4dc94f1fdaf20bb17d04144da91e129f35052acccc80588dee14d5af756f593d3f18c8e03b92d6abe724c0822d70486ecdee07185cc5b50774e15283b4ca1713103947b30b103596fd4125e9b42f28c4"
            },
            "s-1": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003227Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=92afb6d309c9f894405956ef42878b12c8ad0cc08dad29c7f4c35e6007e65a3ce93c5c49884c4043fcf3ff4840a7195e900221bdc8f142973b588b3644eceb53517d526541c3c6b1c943fd1c5e558dfd79be8a7bd796f8f5c22dd16447c783c6b85500eec2efb1eed024aea9818aac9acacc6b607c21b0474db7afed27fb56c447c063ac5670419cef0a7bf5b34549ef6a9d1793545b96ae1ef7c4b2bbf6ce202cdcf7abd267bc5c2922cdb02949ffbbf18cf8ef872a60f81cafc92007f0d6790eea7ebda03846ca43d823ff703713ad3070c1769f04cdbcf599da9a730fa13cc7c770f9364ae67e22ac485a4dcd24dbcaf2591ed6e4eab8cc425643b3c0cbba",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003227Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7209020fcbfa829608b88b2f12cce53309299ff3ea4a06908de40b90203b402f081d265ac8028fdab50df441a350b3af6d954227c0976dad7f7a625a12a758da661693e6753980f4111ded67c6fa9fcad07bc0b160809622a21ca0e80b53201a99fff0f937028790be67cd3b83c7ea7ed5dd465b3528246d9a1c720e65bc55bb6440fd3c6dadf062428955820762c2bcd996b7cfa0ef0a14a20dd8cde94ead6f1121acb5993c4c896a32941fb167821858aa67a8ed9238c281a66bcda10aa24447ed52eae2ab1ddaf92755fcb882bed15df04a81607abf08b5924ea5606b3da6e1303baa84f3f3a5acb1119ed669aa07e097b976c26a62d7bb451b7a04a67bc7"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003358Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7e1efcb5a243dcdc83bdc6dee0de94c381ddd127c3e4e6cdc85cd97b0b3ffc95734b536185ed13eed73d3c042c07dc90e4d7f413cbe1c2f20969a6908105c354e5e0d4d035a30339043315fe522c0847821b517518fdc1ad84e677efb2ae5acef38c5439bbc83bdcae940066327fab21ef36231b24b948d238db4a9b901f24b1a33d4b98774f653070f6add7db3dba6f4ef52c99164f8a99e08a65e74346d01d3f6b296f7a69d6be9d2a91b31d0c58c127bbf830f7cffb73821e6922bda825ed5670ced3671baa55860696ad1c45fbd692df1c4758d3825433594cedf341e5b28f50b644ff39263b7df4a77694e2095aed6f9e4194431dcde562473989c0a627",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-b477e4569356463d/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003358Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4435baf7f67108f575b8bc386a2116750f50494a589270a0bc090a75ae6b0bee89cfd0cc06705081b3b7144a7c0f767d0e945b0b4ba45db196353c0351ea6ccdce837e9e4cd30b43d7574ce4851afc9ef99391b715412a5bd1de2d8fcecc9a10624e8e98b72a1b9f8373388c9f40bbdd068445f45f7562d699e0cd074fff8173e8a2aa836b1471a0afded0356abe7d6e893bcdf7c9bfd85a4485620b1b33e057a57b9593a262228d117e66528b81f8d73eb93eb9a5e322c98c1d19ac6ac60d759fb2f438d6b4f6f8af0c9c88bf44e467351f7571a8783a8e884075c9eacb59948882bf81a681bc472794bd5c80e008e8db78e8bbf3325b5b5eca1836fa34c970"
            }
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784479,
            "nanoseconds": 352000000
        },
        "bootConfig": {
            "emulatorConfig": {
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "platform": "gamecube",
                "endStateMemWatches": {},
                "gameId": "GZLE01",
                "startStateFilename": "ww_game_play_start.sav",
                "id": "tst-b477e4569356463d",
                "mode": "turn-based"
            },
            "goalConfig": {
                "condition": {
                    "logic": {
                        "operation": {
                            "name": "<",
                            "hasRightOperand": true,
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891"
                        },
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "name": "LINK_Y",
                                "rawValue": -1,
                                "type": "float",
                                "pointerOffsets": []
                            }
                        }
                    },
                    "inputs": {
                        "LINK_Y": {
                            "name": "LINK_Y",
                            "type": "float"
                        }
                    }
                }
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "id": "bootcfg-1e5a84bdafd34d82",
            "agentConfig": {
                "taskName": "Find and climb down the ladder",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "temperature": 1,
                "contextHistorySize": 3,
                "llmProvider": "openai",
                "model": "gpt-4o",
                "maxIterations": "10",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube."
            }
        },
        "result": {
          "conditionResult": 'passed',
          "conditionPrimitiveResult": true,
          "errorDetails": ""
        }
    },
    {
        "id": "tst-ce06410ab83a44e9",
        "agentState": {
            "status": "error",
            "id": "astate-7ea303f524f94337"
        },
        "createdAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784303,
            "nanoseconds": 165000000
        },
        "emulatorState": {
            "status": "finished"
        },
        "bootConfig": {
            "emulatorConfig": {
                "mode": "turn-based",
                "gameId": "GZLE01",
                "contextMemWatches": {
                    "LINK_Y": {
                        "address": "803E4410",
                        "size": 4
                    }
                },
                "id": "tst-ce06410ab83a44e9",
                "startStateFilename": "ww_game_play_start.sav",
                "endStateMemWatches": {},
                "platform": "gamecube"
            },
            "experimentId": "exp-d7f3b57db87b4310",
            "id": "bootcfg-ada2a3bd62154847",
            "experimentRunGroupId": "erg-42ff07c906914c31",
            "goalConfig": {
                "condition": {
                    "inputs": {
                        "LINK_Y": {
                            "type": "float",
                            "name": "LINK_Y"
                        }
                    },
                    "logic": {
                        "rhs": {
                            "primitive": 1400
                        },
                        "lhs": {
                            "input": {
                                "rawValue": -1,
                                "type": "float",
                                "name": "LINK_Y",
                                "pointerOffsets": []
                            }
                        },
                        "operation": {
                            "hasLeftOperand": true,
                            "id": "emuop-e59df391b2714891",
                            "hasRightOperand": true,
                            "name": "<"
                        }
                    }
                }
            },
            "agentConfig": {
                "systemPrompt": "You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Complete the objective.",
                "llmProvider": "openai",
                "temperature": 1,
                "model": "gpt-4o",
                "maxIterations": "10",
                "gameContext": "You are playing the Legend of Zelda Wind Waker on the Gamecube.",
                "taskDescription": "You will start out on top of a high wooden platform. You need to walk around using the main stick and find the ladder on the side of the platform. Walk into the ladder to start climbing down, and then climb all the way down.",
                "taskName": "Find and climb down the ladder",
                "contextHistorySize": 3
            }
        },
        "screenshots": {
            "s-0": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/0_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003200Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=21baa162204a0a24920202c9db7a17751329f0190f2d30fa5961b793fe7621891f4f0e9006721012b6accb206c6b1f72f91d6ff9b8dd101515adcda1f5fc26ddd42f30a8cc79a10f29444995aca7ac4ccf23220389d5d4eb9f3240fc02eb143c4e117792f4c3a9fccf32756e1bea3672b28cfd4984f1f484534287ded8e83fe58788844c14cd52b2a1788caa581afde99c52c9f08a57345ffe2e255589cab3349d2386067ea0a9b1e57114ec8edcd64c41f3e2c08f4e4b802a62a9bdaa4af11764898ec43cfe6da177c481731dc738de6a3c5b7335c93d5b90df646edfb095140cf324e6ae3ec72645d44a676d8a5a5d004993d444e524adb9b8aec0265bff94",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003200Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=954c13f962494eda712c1e7681a2a038aa4ebf7c4778ea056671039ee6a20d123cfee97361217c5cf21360b46b4142b37f375dfbf50abec880f851b8065115231c10b93b4088f71398893e8c0cc0910c7c0c682b02d7a82ebbf746ae51f0fd09cee083d94ba5d44a94c35d36ea5cf171482fd51185d75a07ea0252ef7e4c960f917fec378f8370c31290b11870a2fce454ffe1ca7bf7cfcdfeeaca724b59a7de9f07915ff1095ce25a83f88b6a6e230377a28feb3b54973dfc26b14e90d47a45967b9cd20096f932f87879f9cdaf0d4dd5f23258e3d5fc91cfbf6cf9d263b432cd2765e9aa5b4902fdca8fbf57c03fa610e6e1259573bdeaa8c398d4159bd11f"
            },
            "s-6": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/6.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003329Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=4b749bc0b873eb84276bdddde451eeaac0a76ecce7d08343e3c75cace838104ff3b146c414d9a96ff5a9427e6868fb901521d4a4122c3bcfb9be4fb403a0e0516f7449a2cd290ef8fd6cb2c83f076319de7878265baabc7440a28abfad849aa101809702c9ce4fce850379e2b551bf9b6ae66a6dd2f921c92fba44f3ae45c6f9fc3c7565051e6ab58a2526926d31c443dece05b1fadbb31312c4363751bf19c83d2475d9a2488614cf640c805194461229b0b6d19903a3864aae70de2e6c5a162a15ace296e641f1a5715f79bca494b7933a3b67182013d0f3ed5925d8feccbe4256cce1aa9043800bce50599ff2b505eb338106e9b4155ab2c42a03844d7a5f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/6_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003329Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a19f0621d02380786cf7f118e3699c577b1f9be0979f405fdda4c670be44ba4c228adac358b06e1a26888787f7f274c58966447b2a354976c9e47fe962a7d24a84e6f9a3224e19eb615dd098470bf281747a0701673dc3a1e374f85273cf75e0385dd646f0741febfc633958b92b166d1644e7d019ae06b8e91379c985a1a8e48a289086bbe4c00450367ebeb32c089b0e43e58f445418a48397f90eb022aa97cc117728e98e96d617a6f57e799a1e860abc1217a8ce5a0cd448dbd5e51aaff3c1f7f3e955bb3571bc43237b7b87d0020f6f07f8ffbc1278bb6aa6064917213165a9af2a7af501f21ca0b522bc5632fbe4f0f3900935e33a1020bd063320add6"
            },
            "s-3": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/3.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003243Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b03fe99bef1fcab771aef0c92eb43354326e491ead54308d0bb4b1b5e76263d837565692b73bfed42d5f17011da369d72b001bd93d1239ab6b0d2e59612a71ce5d2be8e9a7180f95ae9efd22716ceb7a2ceacb0ed1ea4dfc6f9402a152d7390f62f00061eea8e55a95a2f579499d76c4f38d15526a1a674290ed39ace35c280543e358cc2e240dd1c656d9a7bc8a66fdb4e24294535eaf6e57841896bd773f676b60dcf4728ba5784efa7431f4e602fb7cbd8167616d73c729e6f63a8cf6c5f19950a61359a6985567f47c1fb5932106962c3d39c51d8df325bca342a0fec9fea0c5e1b0b426ac66a23e65e67192b24b6758b67bdc2bfd378daffcdafc4fb89f",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/3_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003243Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=182b445865a6b828b3fd10a52b7e2e5a1e87f85a2cefa61b3e79f229c0c8105a3c44dd657c2ce987e4730f4d0f32e40367fabdab23ee88c771f087fa3718b24482b6410f73a88a9e2d0ea6711214225489767f0f57f864a3b44e2e60188cc6980fc10c5e39c6387f13faf4c18ad6a06d99cdc6bb61db2d78e951197246163ed2e6a6432ac40a888818bff8cfc65d35061d610860b17efb8caf235590bec4984adf4394b633ad5fdf310b6a363ae6394c53831194fd69e7ab27d3aa1f50cf7a298dedfc5eb42658b7420f1ee32c06cbf07e457bce0bf290035d48e29c6ecc97be2f0c738f891fc1350a6fa4a0967af6859ab9c061bb003344becc58f2b09c1444"
            },
            "s-9": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/9_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003354Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=741010197cf832285e87e2777089623d77c441c820e09dfb6571cd8175d95fe6dd6f5260771b5a9038020366c35e4157425265299a7efdf4110e678a176ae557df3752d5a86e50f0d8f253f3119776b579ab18a95e1fa8e7a6d4677de7d6dc17860fbe0ec32e0e2619ee84021f538aae850893b1acbe6c3b412a7caa031184a00e57f60368ff2e037c7a8387b918b14a8986d34d6300a63ca376158409388db558efad74ff89bcfac046ff78a1b2fdadb152b6f5d121072b63165846ecaa1a3bb0c21193398d01a9fa0a4f0c449149f2539b59e51ac2814b2db19f9c9aafefc1f424c89fdf3c82241c4029a2b04996a8d3b55f83ec225c25d45321f56f4ecee4",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003354Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6df730389eee8bfdd8c9fed9b8a7b98c942e255ea05fcd205951280b017686ba904687d7d89420d39c693b03cd678805b64d2a36f1025e2931ad7911cdff7caeaff99158e72a9538e2bf91cd107706132a2ac1a4765d8093d361e086f74ceefe9be6175a4b47b414d98d25a4a73024257761ba66c25f15391e364cc97970640a946062b1fa07e7f6cb2fc3066dcb58142531538c21d7f32bf54f6ddc2b96e98615b7be2826428509e5af12a93ee21ff6fe3658a00f2d384af58676791a24d13d2b036b9f87e517a416fd66d957b115b2c7a1da8e1599b595516ef74f305efb703c89f22d610d5b8e74eeb82d807af2b489d9d2f6c9854d5c5290b0b3e3c739f5"
            },
            "s-4": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003307Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9a321d292ba19ff346a57bc6b83013210a5c43f99cceb11215843765fea4eb7f1a4ef0929e7d04fa22e5d66560448745edb5ece515f5daeee0a583818bfeab68e101cc85bda74df02ad30385b49ffaadff7c87d53c57c76ea71e0525a1eadec16b79094787dd73a8d4f5a0b6a9c175f4aedbad16d820983e3cb57cc92ffd792355af742c7dce20aec3c4079cde00646b57d08cb8e97500e67ac3aa21078e6f5cd21efccdefc88d9b15811c61d6c2b054a2f4ee4a1bde408babf3c42f5a4a06236a07b28f9810c31754ceb4ac802fdabad3cbbd020f3320c81a11304be5a695840c0d0a376c9a450e222858d6e656f13afbec7b1cf88b4dc577aacfd76876e3f8",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/4_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003308Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6097ea108234e42d7b0475ae4cbc96977a7053b845b2deb8b058b3b9cf79d0c3074c6e61ef7006fcd9207894bfa9f37927ebe62739f1fde4e4ac6f1b273a6bcd6448b67d1e7278dcbaf76748d0f99b20ed0f915c29ce1624862c6cbec0dbdd8ee7c89ef19e57e0e922f2071faadc6519b99727f27faf939fc708455cb3214b274546b059d2177825bcf3080e02a2a18e3a9a2e445b799c2feadb004e7f26975f54895835bfe5a9f89b319e3e4bac95cccdd4a2814b90e574ad83a3aca95afc44f4cad25ebf660c061d9d0c318a28e35e0506ac996ecd4ec1ecf8fa45c3055132b51520d5881c1610a38e72215d00cddb73f023d115e8f5f2d08870c7c3bd3e64"
            },
            "s-11": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/11_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003526Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8afd0d5c4a6c89a42d2652b40949ff3e3cff42f6ee5a9d57254f74e2f5df5e8491d1140b467f3842fd55bf9d20f2a4ef245c47c75808d78aae5ad7b32dafda5f027e9820eee67fa9bfa8175f463a0ac66fe2ee039f28eeddd62c14af005b6b30bf6a3a84b5945995d1ca40f834d78142ffdb4cb3ade2a4896334a38bf838cdd2a4fd2ece47508024b60bac9bb2a88708529e1b39280826c06ac3af7239cf139c7ffad61328ad3b8cbc65c840a52829edbaab6ee96be806cc0dd43eaf7f50613d411643266aa948020f0ef70395af1b651e119435054536e9385ad40804b2565dae4eeeceeb439ebd0e536c48ae61c4222b8be52f259f458ec2b4c974398c6197",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/11.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003526Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5997ef319df9997afd4468ad600e7107ae0cb420c3ebf95e1fce16fee3bbe294a4c65875da0fd1b868f6ee9ddde8c875ea00770271d3693e47000be176fa1d6ef6e8218d7dad5109e39b1d67f216449fb1e1732fd9fd17648269942d5d210893864dc26c9f779630cbe10e4de34b1b50e609d768ef96b0389288943d27fd142b5f4761655580c8c27fa082d2f7aa3843f6bd29e472eea0ae2f327da8e80bd188521846570defb62ebe5138dbdf1cc8fe3a1a1c8874741e8eca763352579caaf12e918f496a0355ae4f94495ca991a04dae55b8a1dba70b3cba3998ba14cf5d33746b5c7e4b9fb056e8e320a0a62e528846c678cdf164f6e7d2e61f91ebe623e5"
            },
            "s-10": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/10_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003439Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ad54ad123685031f534dead36f939f80bb166ea27ba8d9e246911a3a66716b1b55df6a7a604569960e890b79915e6ef2e4811d90d60257d37a383abc514029d20decfb2103883133e2d6c818fdae382981bf6545d1194bee6b21ef5642a581706f43fc74a6c01bcdfa1f664b75b82417e490fe223b0cf6966ca88c2a2178c5596fec42fd56f198ce6aeff2582709278f3d5b2d16c95d616c8c180bb494ee41c298f13c2cb77af6349ef539c592fe300d85bf0661aca256845295de66f3d9f90192690778758b43ed263d9831f231e0660b8da56f564b9d53c2770543ec75b16cd52d7de3c7dd786cd9737d95615914b26aaa77bf2205b4e10b97c044066689b1",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/10.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003439Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1ea9c31a23ef4c81600c4ba14b4bbd3b16e4f2fed138f58560c9c13a6a389ca900a05c294e7474c7237e060531cc52372aaf1ea0158311b83a12b43209b483c172f7a0654c4d7a793473687278189633956ad887747830000d6f9f369ef338b46e6f02accb4d3060d04bba59e8b7d0d5c6b0f459afb30d3181e50605669b56ba0fad288d1de79fec36aec4053430b99ae04e48e18f220c0f6e2d459285276ee2bf8a522f99de137fa3e7c32d4e6ed8ec7fa467b20accde70b47099fec7fd6e0037d411bc7fb8599c1e7bcb69ffe741fd8e0468f24bdc3e130aa56303cb0551b6268de8bdfdee0a1d6970be04233b82a36240d7c818b7025931cce16ee8eed4bd"
            },
            "s-7": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003339Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=387341276520973a4de72a291a58144e8c1e45c7b6a031705cbb1a9f6b256194279a3c96f04099fb2021a99f5042000ec522d7dc405ab07c9ff23f1bfb7ef7d90bbb89c638372ed0dbebace2ff70bf86ba3b21db8aa7453f89d836421a67a4db7e4420fc2b0a99ca9f1bd8fdfec59ad9c6f5e3d6c3121a04c4264b116d746a0e0b41f7ded91cdba4c378fc8afe23163e63bb37f709c143d2ce910ba874d8a128a7b2089463cb0c1895ebcd7b78d14015863f6094e11200cc6709ec6b21fb844e5fa78b064539cd8a4b77e7a79762b648425555b9a89d36464fe819a81f24b626c2a273949c5a58d9dd5e0287bfba73a0fb4840c29d0da8682c2a27f6f9fe0b90",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/7_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003339Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0d6b8aad1e2eb9d47770942681a57b1470988f8671fc59c1c3a8759bfe53290f44b21784755dd00b6b65d51bd7876dcce2a349980003533d8fbad431bcea573388303062531f810dcbe87d7f5187ab33e4bfac3e3c345aee97891e7e4bf92139b168e80858b4fcf5a7a0d6f2766838d47c5ca840491fd01b169e95d03750b9bc8cf03585426dec1c9b3c799fa2a63c5be579655c55f9b89285698d2b0b55440f760d901a4fa5c5ceaf16ee6fb5006b138c857fefb897f73ae7699cd9dc80ee94e8ce5a896d63485b87a6ba6c9dcc459b63e4f57c06e2c42cdc442285d11fbeee7ec79b5e6cd4884d1cf730a11c68bb1d42aee35453a8f90d8e7854574d1779de"
            },
            "s-2": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/2_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003233Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1285a5eb6dc7e6a50b5464fbbae8f8f6e21db9b31fe9ed3278b8c90f2ea87f97c4e70f72f6ee4d56115f5346e3c9704cd1e4f5cfe2bd5cbfec3f0565496a06e361aa9259db0f53fda8a5d23c241133a64467dce85c1c49f28467144dd5e22881eb093cf9c544b0047ad1d114fac648baa8e2712470bd82b57e985fd700523eddecbea244cacd1eb95b031e81033da8c8c32dc9d935a888baa388bc36ee1b49429fbc40f2066e06b171ed32f9e5a042be6ca8d67143d7bc5f06a4b36d515e19c97ce0c4800255bf5befbbeed5451be63617a5e72a30528b82fbb489bc26391f012f39e6a8d9275eb320bcbb95fb0be99dd69dd4718126f8ee8bd0894eff3eacb5",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003233Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=092bb0fd75257ddd6f0dc1021c6ade062fdf53474f907d4eb8a13b10b112e3f12bdd543f3bc816ba349b31e9187d7d985dd1c60d46c4125467f8ecee7c7556bd6c22c66e9262dabc11a21a34ba2ad9dfab8b181dd46cdd31a87b69214936c5bfc66ac3fdedea1a9cd3d8a838e2e7984f7a4b701cb0cea90f87bfa91f824d0a26a62b631b207424162bca202904c5467d17389ab6a29fd8c184535b1097b18584889847588fe7a5dbb40fe610b143059a571deecff158acf466351406c49b8dceb965060d5c20a7b2afb418333c16fcc9570e22bd2b76d36804205dcc2d64448678db789e0dad1d4c94fef0d4e03752bac73720a1cb6d5d930f2c62ab09ebe476"
            },
            "s-1": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003224Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5d12d6c30e7f55411a3be1102259840e5efdee08e5ee61a00d9d1c046168c1a17c25afb18e785e19ca2c6b8a919c9313887a0eacdd5688870f1b15cb51759db33cdffbdd0559863c1a374d441c9f8f3e0282a54a40a2cc725afdf7d1d2c6aec5a2213231c759f15be2265122c0caadbccac30152fae1a964d0edb6de41da4ce18229c785595eb65a1c3f4f89eda2721da25a1d979c6e22e0c811331d9275e1a54d449744c7a5b40558091d23b94aa2581964d8277eec8b20acb75aa6487bdb908dced2d4788f64808066b747552d3ddab8b0433e35a4bee67697be35b1e1d208b3c977122853494a601ca5ae47000af5ce9596d4f5a69dc493af76cf331b68ea",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/1_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003224Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=12b52ac00e6d080c7c8c886930a9a30da9d422970de18a23927470a76e129b61be6ddfbeb4811896c17360e3440a04eade800f04715a6c5a6b5ae93f6d95af5afcb741383cd67c8d7165f9549ef25e12b579dff961b33e1d21bb725ab87a803d236f15d40da6015e38fc0b15c1dcc0d8db8c31bb9428253e8424803d01f94db1cbcad245ef34c3298f6f7dbf648b7127835226c7358dec4abc00316319d46bdc90ee0a2b673b8305b01e729419b3ece424e8ec34f36bcca488a277205e0715aebf869ab71da29e40a1048304c8fd315c417c21af25cb9cf2f0a371c4b05415961d366fbf1b23318f9bcaf70d93de081ec624c69404b2c7ffeb977a76bff27748"
            },
            "s-8": {
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003350Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=6d1c329dba4875a6001f6a611fbb2da5f5f7217adce2332099cf451b0d8a2ce6043a2226a6d987b0766ca18842bc41e96dbad9503513ef8b4547c7f54c1549b6c430c43c183a817e5a492a263d5747c185ae1662b4063f63c3d47b68711a64375261c36e68be1e63c1ac2cd1a2166f30190ab8175a9760da0074aba25cd97045f4ecf094da90688ffd17ffa5368ca7f90b8811a54cd439e984ff54e20e9e8db1c9b079411c073217d071d58d48ec291b913c89a9fa9838e3d38c725e9b36b615ebd724e6c378ab75035f5cb3bb3ddcf701a0039b1c7b59ae134b03870ebd74cdc15c05e8528fc1bc4e741760fbc33e86590733765d309bf038bed4096c2c1476",
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/8_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003350Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2ac022e51c59ded1e4f6b20a36820cf0033be3d4266ad945c81c3bee3c4612ba334993def18176c1015d80810a8692248db04ab0e2caee1e29bc728acaa35cfd28a40e02ce89c6f03e31dd1e64a797b1fa2081e99b916e8606258019e024b7c89e63444ced7e58c1f4ebcf977789d5ec81aa1247705414512b01173fd08716ca7f51b1f68ad8c1333603cf5ab6f67bd97017b8ca12be01e03a36129fa30c7474eb064e8a33424ca315226a0c9f79b3d753443f3cfb011366703eddc90b302134324a5a06cf7f943d3d902898cc00a5ed9523a81245097b4f8b18c2cf5fa8f399a1e88adb7d9382ae4d678e02f7c24403014fd7926fdb31225dd4b143f94d1125"
            },
            "s-5": {
                "thumbnailUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/5_t.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003319Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7ca60788278e934468a8352581d253f5859c93f535401dcfe33bce43485b1883c44c3855b7afb83c7be7fa5d9f0636e5d0ef6b3d7d9b716f6708ec75725d1c9caab1ac1cc71f829586c6c7dbb6a9060278ec47e3a89f3bd0e527dce74fbb1aa35331f6351fada070365b2dac852ba8d1b87b14ef12e37f96bc6ea3b4e300c35f664c5eaf213b82d89bfd733a5ccf506d35de61dc6bf08865ec06087449f7cbd7787233f5b1de53673fb5018bb0442a149fba1d5ed71b18f9c33dd7dfa823e14b2d9687843b3af9c180347f6ce80407b2d99f7fee1ad62ace0858bb750be58048b2b18866f44379b8fd4a0963eb46d9739df0c932ec4179f32f20b8fdd8da3871",
                "fullResolutionUrl": "https://storage.googleapis.com/emubench-sessions/tst-ce06410ab83a44e9/ScreenShots/5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=thumbnail-function-sa%40emubench-459802.iam.gserviceaccount.com%2F20251030%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251030T003319Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=154509437853c53986285126cfab37061b415de561bc3a405593f309f0fada2c9441ddb69e7245997cdc0f3479f9252d9fdbba6dfaeede59dbc61637f624f165f4722149b6c7ea5a2aa6d27f23c620950c69901133141509a964433b0b54130e326dc6b88658c65fb139d52c175b784152194587b2e8fbb5e46ba186065391d947c0610a71c3e3ed4cdb878e4970518181df3bbf7a408bacbb8306c88e978ab4d0f0dbb079c15427ab14ab7cd50b900fabbb2b3deb9c80c1b3b2386e3da29a95e0d410628ee9b4de222999b34dee1652ce38e13bc565480f6e4ee6fc91b8e148459742bb17ae08cc4f62c48f0b61a5fa698c5e6e6ff23def0e16661a0914f94e"
            }
        },
        "updatedAt": {
            "type": "firestore/timestamp/1.0",
            "seconds": 1761784566,
            "nanoseconds": 1000000
        },
        "testState": {
            "screenshots": {},
            "status": "finished",
            "id": "tst-ce06410ab83a44e9",
            "stateHistory": {
                "turn_8": {
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
                "turn_5": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_1": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_2": {
                    "endStateMemWatchValues": {},
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    }
                },
                "turn_7": {
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
                "turn_6": {
                    "contextMemWatchValues": {
                        "LINK_Y": "44CE4000"
                    },
                    "endStateMemWatchValues": {}
                }
            }
        },
        "result": {
          "conditionResult": 'failed',
          "conditionPrimitiveResult": false,
          "errorDetails": ""
        }
    }
];
