import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { EmuExperimentRunGroup, EmuTestSummary } from "@/shared/types/experiments";
import { testStatusToBadge } from "@/utils/test";

export function ExperimentActiveGroupView({ runGroup, tests }: { runGroup: EmuExperimentRunGroup, tests: Record<string, EmuTestSummary> }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {runGroup.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {Object.keys(tests).map((key) => (
          <div className="flex flex-row space-x-2 w-full md:w-auto">
            <div>
              {key}
            </div>
            <div className="flex flex-col items-center w-full">
              <p>Emulator</p>
              {testStatusToBadge(tests[key].emulatorState.status)}
            </div>
            <div className="flex flex-col items-center w-full">
              <p>Agent</p>
              {testStatusToBadge(tests[key].agentState.status)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
