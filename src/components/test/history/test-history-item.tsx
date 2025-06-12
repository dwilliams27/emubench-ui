import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Test } from "@/constants/games";
import { testResultToBadge } from "@/utils/test";

export interface TestHistoryItemProps {
  test: Test;
};

export function TestHistoryItem({ test }: TestHistoryItemProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-row items-center justify-between space-x-2">
          <CardTitle>{test.id}</CardTitle>
          { testResultToBadge(test) }
        </div>
      </CardHeader>

      <div className="flex flex-row px-6">
        <h3>GameID: {test.gameId}</h3>
      </div>
    </Card>
  );
};
