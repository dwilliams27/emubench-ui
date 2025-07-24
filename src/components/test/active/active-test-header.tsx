import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { testStatusToBadge } from "@/utils/test";

export function ActiveTestHeader({ testId, status }: { testId: string | null, status?: string }) {
  return (
    <Card className="w-full py-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{testId}</CardTitle>
        {testStatusToBadge(status)}
      </CardHeader>
    </Card>
  )
}
