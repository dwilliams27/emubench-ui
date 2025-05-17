import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Test } from "@/constants/games";
import { testToBadge } from "@/utils/test";

export interface ActiveTestWidgetProps {
  test: Test | undefined;
}

export function ActiveTestWidget({ test }: ActiveTestWidgetProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-row items-center justify-between space-x-2">
          <CardTitle>{test ? test.id : "No test selected"}</CardTitle>
          { test && testToBadge(test)}
        </div>
      </CardHeader>
    </Card>
  )
}