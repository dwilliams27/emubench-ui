import { TestCondition } from "@/components/shared/test-condition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { EmuConditionOperand } from "@/shared/conditions/types";

export interface ActiveTestGoalProps {
  successCondition?: EmuConditionOperand[];
  failCondition?: EmuConditionOperand[];
  rewardFunction?: EmuConditionOperand[];
}

export function ActiveTestGoal({ successCondition, failCondition, rewardFunction }: ActiveTestGoalProps) {
  const anyConditions = successCondition || failCondition || rewardFunction;
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Goal</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row space-x-2">
        {anyConditions ? (
          <div>
            {!!rewardFunction?.length && (
              <div>
                <p className="text-sm font-medium mb-1">Reward Function:</p>
                <TestCondition flatCondition={rewardFunction} />
              </div>
            )}
            {!!successCondition?.length && (
              <div>
                <p className="text-sm font-medium mb-1">Test succeeds if:</p>
                <TestCondition flatCondition={successCondition} />
              </div>
            )}
            {!!failCondition?.length && (
              <div>
                <p className="text-sm font-medium mb-1">Test fails if:</p>
                <TestCondition flatCondition={failCondition} />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-row space-x-4 overflow-x-auto">
            <Skeleton className="h-12 w-32 mb-2" />
            <Skeleton className="h-12 w-32 mb-2" />
            <Skeleton className="h-12 w-32 mb-2" />
            <Skeleton className="h-12 w-32 mb-2" />
            <Skeleton className="h-12 w-32 mb-2" />
            <Skeleton className="h-12 w-32 mb-2" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
