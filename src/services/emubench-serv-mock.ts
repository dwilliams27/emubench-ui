import type { Api } from "@/services/emubench-serv";
import type { TestChatSegment } from "@/constants/games";
import { MockGetActiveTestConfigResponse, MockGetActiveTestStateResponse, MockGetHistoryResponse, MockGetTraceLogsResponse } from "@/services/mock-data/responses";
import type { REQ_SETUP_TEST } from "@/components/test/config/types";
import type z from "zod";
import type { EmuActiveTestReponse, EmuGetTestHistoryResponse, EmuGetTraceLogsResponse, EmuSetupExperimentResponse } from "@/shared/types";
import { EmuExperiment } from "@/shared/types/experiments";

export class EmuBenchServMock implements Api {
  messages: TestChatSegment[] = [];

  async getAuthToken() { return 'testing'; };
  async makeApiCall(_endpoint: string, _method: string, _data?: any) { return null };
  async fetchTestConfigs() { return MockGetActiveTestConfigResponse };
  async setupTest(_: z.infer<typeof REQ_SETUP_TEST>) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { testId: "tst-123456" };
  }
  async getActiveTestState(_: string) {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [MockGetActiveTestStateResponse, 200] as unknown as [EmuActiveTestReponse, number];
  }
  async getTrace(_traceId: string) {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [MockGetTraceLogsResponse, 200] as unknown as [EmuGetTraceLogsResponse, number];
  }
  async getTestHistory(testRunId: string) {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [MockGetHistoryResponse, 200] as unknown as [EmuGetTestHistoryResponse, number];
  }
  async setupExperiment(experimentConfig: Omit<EmuExperiment, "status" | "id" | "completedTestRunIds">) {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [{ experimentId: 'exp-1234' }, 200] as unknown as [EmuSetupExperimentResponse, number];
  }
}
