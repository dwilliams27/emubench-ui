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

      <div className="flex flex-col space-y-6 px-6">
        <div className="flex flex-col space-x-6 md:flex-row">
          <Card className="w-full md:w-1/2 h-72">
          </Card>
          <Card className="w-full md:w-1/2">
          </Card>
        </div>
        <Card className="w-full">
        </Card>
      </div>
    </Card>
  )
}