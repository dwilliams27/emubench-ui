import { TestCondition } from "@/components/shared/test-condition";
import { TestConditionResult } from "@/components/shared/test-condition-result";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { emuFlattenCondition } from "@/shared/conditions/evaluate";
import { EmuCondition } from "@/shared/conditions/types";
import { EmuExperimentRunGroup, EmuTestSummary } from "@/shared/types/experiments";
import { testStatusToBadge } from "@/utils/test";

export function ExperimentActiveGroupView({ runGroup, tests }: { runGroup: EmuExperimentRunGroup, tests?: Record<string, EmuTestSummary> }) {
  const renderCondition = (condition: EmuCondition) => {
    const flatCondition = emuFlattenCondition(condition);
    return (
      <div>
        <TestCondition flatCondition={flatCondition} />
        <TestConditionResult condition={condition} />
      </div>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {runGroup.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {
          tests ? (
            <div className="space-y-2">
              {Object.keys(tests).map((key) => (
                <div className="flex flex-row items-center justify-between space-x-2 w-full md:w-auto border-2 rounded-2xl p-4">
                  <div className="min-w-16">
                    {key}
                  </div>
                  {renderCondition(tests[key].currentCondition)}
                  <div className="flex flex-row space-x-2">
                    <div className="flex flex-col items-center">
                      <p>Emulator</p>
                      {testStatusToBadge(tests[key].emulatorState.status)}
                    </div>
                    <div className="flex flex-col items-center">
                      <p>Agent</p>
                      {testStatusToBadge(tests[key].agentState.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              No data
            </div>
          )
        }
      </CardContent>
    </Card>
  );
}
