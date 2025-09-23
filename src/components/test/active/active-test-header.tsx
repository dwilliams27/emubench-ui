import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { testStatusToBadge } from "@/utils/test";

export interface ActiveTestHeaderProps {
  testId: string | null;
  requestError?: string | null;
  testStatus?: string;
  emulatorStatus?: string;
  agentStatus?: string;
}

export function ActiveTestHeader(
  { testId, requestError, testStatus, emulatorStatus, agentStatus }: ActiveTestHeaderProps) {
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
              // Loading spinner
              <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
          </div>
        </CardTitle>
        <div className="flex flex-row space-x-2 w-full md:w-auto">
          <div className="flex flex-col items-center w-full">
            <p>Emulator</p>
            {testStatusToBadge(emulatorStatus)}
          </div>
          <div className="flex flex-col items-center w-full">
            <p>Agent</p>
            {testStatusToBadge(agentStatus)}
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
