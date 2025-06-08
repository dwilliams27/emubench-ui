import type { Api } from "@/services/emubench-serv";
import type { Session } from "@supabase/supabase-js";
import type { TestChatSegment, TestState } from "@/constants/games";
import { MockActiveTestResponses, MockGetActiveTestConfigResponse } from "@/services/mock-data/responses";

export class EmuBenchServMock implements Api {
  constructor(_session: Session | null) {}

  messages: TestChatSegment[] = [];

  updateAuthToken(_session: Session | null) {};
  async makeApiCall(_endpoint: string, _method: string, _data?: any) { return null };
  async fetchActiveTestConfigs() { return MockGetActiveTestConfigResponse };
  async getTestState(id: string): Promise<TestState> {
    return MockActiveTestResponses[id];
  }
}
