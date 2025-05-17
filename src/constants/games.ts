export interface MemoryWatch {
  address: string; // Address in hex format, e.g. "0x80000000"
  offset?: string; // If the address is a pointer, this is the offset to read from
  size: number; // Size in bytes
}

export interface GameState {
  path: string;
  name: string;
  description: string;
}

export interface Game {
  id: string;
  name: string;
  platform: string;
  gamePath: string;
  availableStates: GameState[];
}

export interface TestResult {
  outcome: "pass" | "fail";
  metadata: Record<string, any>;
}

export interface Condition {
  comparison: "equal" | "not_equal" | "greater_than" | "less_than";
  watchName: string;
  expectedValue: string;
}

export interface Test {
  id: string;
  gameId: string;
  setup: boolean;
  started: boolean;
  result?: TestResult;
  startStateName: string;
  contextMemWatches: Record<string, MemoryWatch>;
  endStateMemWatches: Record<string, MemoryWatch>;
  endStateConditions: Condition[];
}

export interface TestSuite {
  name: string;
  tests: Test[];
}

export const PLATFORMS = {
  GAMECUBE: "GameCube",
}

export const GAMES: Record<string, Game> = {
  GWMP8P: {
    id: "GWMP8P",
    name: "Worms 3D",
    platform: PLATFORMS.GAMECUBE,
    gamePath: "/Users/dwilliams/Documents/roms/worms_3d.rvz",
    availableStates: [
      {
        path: "/Users/dwilliams/Documents/roms/dmcp-savestates/worms_aimfire_test.sav",
        name: "aimfire_test",
        description: "aimfire_test",
      }
    ]
  }
}

export const TEST_SUITES: TestSuite[] = [
  {
    name: "(Worms 3D) Aimfire Test",
    tests: [
      {
        id: "tst_123",
        gameId: "GWMP8P",
        setup: false,
        started: false,
        startStateName: "aimfire_test",
        contextMemWatches: {},
        // TODO: Get real end states
        endStateMemWatches: {
          "test_game_id": {
            address: "80000000",
            size: 6
          }
        },
        endStateConditions: [
          {
            comparison: "equal",
            watchName: "test_game_id",
            expectedValue: "0x00000000"
          }
        ]
      }
    ]
  }
];
