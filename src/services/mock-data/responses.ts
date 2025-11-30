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

export const MockGetActiveTestStateResponse = {"currentCondition":{"inputs":{"LINK_X":{"name":"LINK_X","type":"float","parsedValue":1000},"LINK_Y":{"name":"LINK_Y","type":"float","parsedValue":1600}},"logic":{"operation":{"id":"emuop-b73a1dcb9e9447ac","name":"<","hasLeftOperand":true,"hasRightOperand":true},"lhs":{"input":{"name":"LINK_X","type":"float","pointerOffsets":[],"rawValue":-1}},"rhs":{"primitive":0}}},"testState":{"id":"tst-284b9f3ff4a54896","stateHistory":{"1":{"contextMemWatchValues":{"LINK_X":"C83E0680","LINK_Y":"455AC000"},"endStateMemWatchValues":{}}},"screenshots":{"0.png":"https://storage.googleapis.com/emubench-sessions/tst-284b9f3ff4a54896/ScreenShots/0.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250929%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250929T015436Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b3597d28b81300a668eecc6b32ecdafb62442ac254e765bff0947cda58d2cb88eb226b1d616821121046f8c7d41558f43e88e06bcffe3b9cc0186de43d3e75158fd24d66b565671df6bf2430c2a9b3199927fc17734ef7cc5de2f2af2999a2ca2695d877ea4d99b3b6701a287670e7bd0f57e57487c7502f19cda5aced4bb98f336752402316e68062e62f55aac7aae74186e47de8578097c46985e8be3f216895f6becb0df1a13aa43d64e57be6024a2064b1b49daeba64e73fbf22cd3dbcb9c0def8f9ecd420ac98537f790b2bd0bf82389efc36297982c97c77237d899cc30420c69dfb51924534f4f747769d7bfa5b5ad4c63fcadf2b04bb9fb7dfd3e425","1.png":"https://storage.googleapis.com/emubench-sessions/tst-284b9f3ff4a54896/ScreenShots/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=emubench-cloud-run-sa%40emubench-459802.iam.gserviceaccount.com%2F20250929%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250929T015544Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a3c59ec97bd81428adf948c9bf532a9dba43d621542200e4103b8d2173ca18b36496a4da3868ac2b55a1b1de67ee866ddbaee9a8726eeb8b4292a00d0a7dcc37cdf7a554142d6e17f665693ef04d1726f9815842b062fe712eabc8915a615a61d7a2976b08353dc4f93cc3d64c23b6fb6e8e72e91c42e0afa054f51188e94dc3869c34675f2e3f1394fbb267913c15cf5aa230272a72771e418b231da80877a47a36e2fbe25a606bc58c0291a006feba4a4cc2566f82f9abe6488ee8bd83b1f2b6af673c8f6d786fde6bb6b45ad1be22d0df567bc94c410094793759ed837ea5258247c2c698750fdbf0c88ac3a713f2637bba1ffcc9510c23090f72dbcc5eff"},"status":"finished","createdAt":{"_seconds":1759110946,"_nanoseconds":929000000},"updatedAt":{"_seconds":1759110946,"_nanoseconds":929000000}},"agentState":{"id":"astate-d95e38d351f945ee","status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":446000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":446000000}},"agentLogs":[{"id":"logb-7e323a6320804aa9","title":"Turn 1","logs":[{"text":"I will press the start button to begin the game as prompted on the screen.","metadata":{"type":"message","timestamp":"2025-09-29T01:55:44.196Z"}},{"text":"","metadata":{"type":"tool-call","timestamp":"2025-09-29T01:55:44.196Z","toolName":"sendControllerInput","toolPayload":{"actions":{"buttons":{"start":true}},"duration":5},"screenshotName":"0.png"}}],"createdAt":{"_seconds":1759110944,"_nanoseconds":512000000},"updatedAt":{"_seconds":1759110944,"_nanoseconds":512000000}}],"emulatorState":{"id":"estate-1","contextMemWatchValues":{"LINK_X":"C83E0680","LINK_Y":"455AC000"},"endStateMemWatchValues":{},"status":"finished","createdAt":{"_seconds":1759110945,"_nanoseconds":498000000},"updatedAt":{"_seconds":1759110945,"_nanoseconds":498000000}},"bootConfig":{"id":"bootcfg-1ba959eab2954e31","agentConfig":{"systemPrompt":"You are an extremely competent video game playing agent. You will be given a task and tools to interact with a game. The game will pause while you are thinking, and only play during actions you take. Tools will be executed sequentially. Sometimes you may want to take an action, and then wait. Each response you give should be a very concise summary (1 sentance) of the action you are taking and why. You MUST give a text response every single time, even if calling tools. These responses will be fed back in as context for subsequent prompts. You will be given a history of your recent actions and related screenshots. Look extremely closely at the menus to see what option is selected. Complete the objective.","gameContext":"Controls:\nLeft stick: Move Link/Navigate menus\nA: Context-sensitive action (talk, grab, climb, roll attack)\nB: Sword attack\nX/Y: Assigned items/tools\nStart: Pause menu\nZ: Z-target enemies/objects","llmProvider":"google","model":"gemini-2.5-pro","maxIterations":20,"temperature":1,"turnMemoryLength":3,"task":{"name":"Start a new game","description":"Navigate through the main menu and start a new game."}},"emulatorConfig":{"gameId":"GZLE01","platform":"gamecube","mode":"turn-based","startStateFilename":"ww_main_menu.sav","contextMemWatches":{"LINK_X":{"address":"803E440C","size":4},"LINK_Y":{"address":"803E4410","size":4}},"endStateMemWatches":[],"id":"tst-284b9f3ff4a54896"},"goalConfig":{"condition":{"inputs":{"LINK_X":{"name":"LINK_X","type":"float"},"LINK_Y":{"name":"LINK_Y","type":"float"}},"logic":{"operation":{"id":"emuop-b73a1dcb9e9447ac","name":"<","hasLeftOperand":true,"hasRightOperand":true},"lhs":{"input":{"name":"LINK_X","type":"float","pointerOffsets":[],"rawValue":-1}},"rhs":{"primitive":0}}}},"createdAt":{"_seconds":1759110861,"_nanoseconds":420000000},"updatedAt":{"_seconds":1759110861,"_nanoseconds":420000000}}}

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
