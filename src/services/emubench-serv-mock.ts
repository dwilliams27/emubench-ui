import { MockGetActiveTestConfigResponse } from "@/constants/mocks";
import type { Api } from "@/services/emubench-serv";
import type { Session } from "@supabase/supabase-js";

export class EmuBenchServMock implements Api {
  constructor(_session: Session | null) {}

  updateAuthToken(_session: Session | null) {};
  async makeApiCall(_endpoint: string, _method: string, _data?: any) { return null };
  async fetchActiveTestConfigs() { return MockGetActiveTestConfigResponse };
}
