import { ActiveTestChat } from "@/components/test/active/active-test-chat";
import { ActiveTestMemory } from "@/components/test/active/active-test-memory";
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
          <div className="flex-shrink-0 aspect-[4/3] max-h-[600px] rounded-xl border p-2 shadow-sm md:h-full">
            <ActiveTestScreen images={state?.images ?? []} />
          </div>
          <div className="min-w-0 w-full h-[600px] rounded-xl border p-2 shadow-sm">
            <ActiveTestChat messages={state?.messages ?? []} />
          </div>
        </div>
        <div className="w-full rounded-xl border p-2 shadow-sm">
          <ActiveTestMemory />
        </div>
      </div>
    </Card>
  )
}
