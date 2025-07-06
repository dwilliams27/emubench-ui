import type { Api } from "@/services/emubench-serv";
import type { TestChatSegment, TestState } from "@/constants/games";
import { MockActiveTestResponses, MockGetActiveTestConfigResponse } from "@/services/mock-data/responses";

export class EmuBenchServMock implements Api {
  messages: TestChatSegment[] = [];

  async getAuthToken() { return 'testing'; };
  async makeApiCall(_endpoint: string, _method: string, _data?: any) { return null };
  async fetchTestConfigs() { return MockGetActiveTestConfigResponse };
  async getTestState(id: string): Promise<TestState> {
    return MockActiveTestResponses[id];
  }
}
