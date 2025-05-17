import { MockGetActiveTestConfigResponse } from "@/constants/mocks";
import type { Api } from "@/services/emubench-serv";
import type { Session } from "@supabase/supabase-js";

export class EmuBenchServMock implements Api {
  constructor(session: Session | null) {}

  updateAuthToken(session: Session | null) {};
  async makeApiCall(endpoint: string, method: string, data?: any) { return null };
  async fetchActiveTestConfigs() { return MockGetActiveTestConfigResponse };
}
