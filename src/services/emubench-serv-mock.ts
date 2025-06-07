import { MockGetActiveTestConfigResponse } from "@/constants/mocks";
import type { Api } from "@/services/emubench-serv";
import type { Session } from "@supabase/supabase-js";
import * as screenshot from "./mock-data/emu-screenshot-b64.json";
import type { TestChatSegment, TestState } from "@/constants/games";

export class EmuBenchServMock implements Api {
  constructor(_session: Session | null) {}

  messages: TestChatSegment[] = [];

  updateAuthToken(_session: Session | null) {};
  async makeApiCall(_endpoint: string, _method: string, _data?: any) { return null };
  async fetchActiveTestConfigs() { return MockGetActiveTestConfigResponse };
  async getTestState(id: string): Promise<TestState> {
    this.messages.push({
      text: `Mock testing message, ${window.crypto.getRandomValues(new Uint32Array(10))}`,
      type: "message",
      author: "claude"
    });
    return {
      images: [screenshot.content],
      messages: this.messages
    };
  }
}
