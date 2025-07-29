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

export interface TestChatSegment {
  text: string;
  type: "toolCall" | "message";
  author: string;
};

export interface TestState {
  images: string[];
  messages: TestChatSegment[];
  contextMemWatches: Record<string, MemoryWatch>;
  endStateMemWatches: Record<string, MemoryWatch>;
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
  state?: TestState;
}

export interface TestSuite {
  name: string;
  tests: Test[];
}

