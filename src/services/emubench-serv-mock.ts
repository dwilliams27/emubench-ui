import type { Api } from "@/services/emubench-serv";
import type { TestChatSegment, TestState } from "@/constants/games";
import { MockActiveTestResponses, MockGetActiveTestConfigResponse, MockGetActiveTestStateResponse } from "@/services/mock-data/responses";
import type { REQ_SETUP_TEST } from "@/components/test/config/types";
import type z from "zod";
import type { EmuActiveTestReponse } from "@/constants/shared";

export class EmuBenchServMock implements Api {
  messages: TestChatSegment[] = [];

  async getAuthToken() { return 'testing'; };
  async makeApiCall(_endpoint: string, _method: string, _data?: any) { return null };
  async fetchTestConfigs() { return MockGetActiveTestConfigResponse };
  async getTestState(id: string): Promise<TestState> {
    return MockActiveTestResponses[id];
  }
  async setupTest(_: z.infer<typeof REQ_SETUP_TEST>) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { testId: "tst-123456" };
  }
  async getActiveTestState(_: string) {
    await new Promise(resolve => setTimeout(resolve, 500));

    return MockGetActiveTestStateResponse as unknown as EmuActiveTestReponse;
  }
}
