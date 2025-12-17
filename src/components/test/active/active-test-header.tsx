import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { CostIndicator } from "@/components/test/active/cost-indicator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { EmuAgentState, EmuBootConfig } from "@/shared/types";
import { testStatusToBadge } from "@/utils/test";

export interface ActiveTestHeaderProps {
  testId: string | null;
  requestError?: string | null;
  testStatus?: string;
  emulatorStatus?: string;
  agentState?: EmuAgentState | null;
  bootConfig?: EmuBootConfig;
}

export function ActiveTestHeader(
  { testId, requestError, testStatus, emulatorStatus, agentState, bootConfig }: ActiveTestHeaderProps) {
  if (requestError) {
    return (
      <Card className="w-full py-2 border-red-500">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            <div className="flex flex-row items-center space-x-2">
              <p className="text-red-500">Error: {requestError}</p>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
    )
  };

  return (
    <Card className="w-full py-2">
      <CardHeader className="flex flex-col md:flex-row items-center justify-between">
        <CardTitle>
          <div className="flex flex-row items-center space-x-2">
            <p>{testId || "No active test"}</p>
            {(testStatus && testStatus !== 'finished' && testStatus !== 'error') && (
              <LoadingSpinner />
            )}
          </div>
        </CardTitle>
        <div className="flex flex-row space-x-2 w-full md:w-auto">
          <div className="flex flex-col items-center justify-center w-full mr-4">
            <CostIndicator
              inputTokens={agentState?.inputTokenCount || 0}
              outputTokens={agentState?.outputTokenCount || 0}
              reasoningTokens={agentState?.reasoningTokenCount || 0}
              modelProvider={bootConfig?.agentConfig.llmProvider || "anthropic"}
              modelName={bootConfig?.agentConfig.model || "claude-sonnet-4-5"}
            />
          </div>
          <div className="flex flex-col items-center w-full">
            <p>Emulator</p>
            {testStatusToBadge(emulatorStatus)}
          </div>
          <div className="flex flex-col items-center w-full">
            <p>Agent</p>
            {testStatusToBadge(agentState?.status)}
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
