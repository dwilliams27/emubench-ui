import type { Api } from "@/services/emubench-serv";
import type { TestChatSegment } from "@/constants/games";
import { MockGetActiveEmulatorConfigResponse, MockGetActiveTestStateResponse, MockGetExperimentSummaryResponse, MockGetHistoryResponse, MockGetTraceLogsResponse } from "@/services/mock-data/responses";
import type { EmuActiveTestReponse, EmuBootConfig, EmuGetTestHistoryResponse, EmuGetTraceLogsResponse, EmuSetupExperimentResponse } from "@/shared/types";
import { EmuExperiment } from "@/shared/types/experiments";
import { EmuGetExperimentSummaryResponse } from "@/shared/types/requests";

export class EmuBenchServMock implements Api {
  messages: TestChatSegment[] = [];

  async getAuthToken() { return 'testing'; };
  async makeApiCall(_endpoint: string, _method: string, _data?: any) { return null };
  async fetchEmulatorConfigs() { return MockGetActiveEmulatorConfigResponse };
  async setupTest(_: EmuBootConfig) {
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
  async getTestHistory(testResultId: string) {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [MockGetHistoryResponse, 200] as unknown as [EmuGetTestHistoryResponse, number];
  }
  async setupExperiment(experimentConfig: Omit<EmuExperiment, "status" | "id" | "completedTestRunIds">) {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [{ experimentId: 'exp-1234' }, 200] as unknown as [EmuSetupExperimentResponse, number];
  }
  async getExperimentSummary(experimentId: string) {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [MockGetExperimentSummaryResponse, 200] as unknown as [EmuGetExperimentSummaryResponse, number];
  }
}
