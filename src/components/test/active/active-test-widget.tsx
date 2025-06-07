import { ActiveTestChat } from "@/components/test/active/active-test-chat";
import { ActiveTestScreen } from "@/components/test/active/active-test-screen";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Test, TestState } from "@/constants/games";
import { testToBadge } from "@/utils/test";

export interface ActiveTestWidgetProps {
  test: Test | undefined;
  state: TestState | undefined;
}

export function ActiveTestWidget({ test, state }: ActiveTestWidgetProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-row items-center justify-between space-x-2">
          <CardTitle>{test ? test.id : "No test selected"}</CardTitle>
          { test && testToBadge(test)}
        </div>
      </CardHeader>

      <div className="flex flex-col space-y-6 px-6">
        <div className="flex flex-col space-y-6 min-h-fit md:h-72 md:flex-row md:space-y-0 md:space-x-6">
          <Card className="flex-shrink-0 aspect-[4/3] h-[600px] md:h-full">
            <ActiveTestScreen images={state?.images ?? []} />
          </Card>
          <div className="min-w-0 h-[600px] rounded-xl border py-2 shadow-sm">
            <ActiveTestChat messages={state?.messages ?? []} />
          </div>
        </div>
        <Card className="w-full">
        </Card>
      </div>
    </Card>
  )
}
