import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { testStatusToBadge } from "@/utils/test";

export function ActiveTestHeader({ testId, emulatorStatus, agentStatus }: { testId: string | null, emulatorStatus?: string, agentStatus?: string }) {
  return (
    <Card className="w-full py-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{testId || "No active test"}</CardTitle>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col items-center">
            <p>Emulator</p>
            {testStatusToBadge(emulatorStatus)}
          </div>
          <div className="flex flex-col items-center">
            <p>Agent</p>
            {testStatusToBadge(agentStatus)}
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
