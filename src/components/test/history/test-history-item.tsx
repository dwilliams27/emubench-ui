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

      <div className="flex flex-col space-y-6 px-6">
        
      </div>
    </Card>
  );
};
