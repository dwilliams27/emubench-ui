import { HistoryLogView } from "@/components/test/history/history-log-view";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { EmuTestRun } from "@/shared/types/test-run";
import { useMemo, useState } from "react";

export function HistoryTestView({ testRun }: { testRun: EmuTestRun }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const logsUpToIndex = useMemo(() => testRun.history.slice(0, currentIndex + 1).flatMap(h => h.agentLogs).reverse(), [testRun.history, currentIndex]);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {testRun.id}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Slider className="w-full mb-6" defaultValue={[0]} max={testRun.history.length - 1} step={1} min={0} value={[currentIndex]} onValueChange={(values) => setCurrentIndex(values[0])} />
        <div className="flex flex-col md:flex-row">
          <div className="max-h-[600px] mb-2 md:mr-2 md:mb-0">
            <img src={testRun.history[currentIndex].images[0].screenshotName} alt="Game screenshot" className="w-full h-auto max-h-[600px] rounded-md" />
          </div>
          <HistoryLogView items={logsUpToIndex} />
        </div>
      </CardContent>
    </Card>
  );
}