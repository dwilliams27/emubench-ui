import { HistoryTestView } from "@/components/test/history/history-test-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useApi } from "@/contexts/api-context";
import { EmuTestRun } from "@/shared/types/test-run";
import { useEffect, useState } from "react";
import { set } from "zod";

export default function TestHistory() {
  const { api } = useApi();
  const [testRunId, setTestRunId] = useState('');
  const [testRun, setTestRun] = useState<EmuTestRun | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchTestRun = async () => {
    setLoading(true);
    if (testRunId.length === 0) {
      setTestRun(null);
      setLoading(false);
      return;
    }

    try {
      const testRunResult = await api.getTestHistory(testRunId);
      if (testRunResult[1] === 200 && testRunResult[0].testRun) {
        setTestRun(testRunResult[0].testRun);
      }
    } catch (error) {
      console.log('Error fetching test run history: ', error);
      setTestRun(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex flex-row mb-4 space-x-2 items-center">
        <Input placeholder="Enter Test Run ID" value={testRunId} onChange={(e) => setTestRunId(e.target.value)} />
        <Button onClick={fetchTestRun} disabled={loading}>Submit</Button>
      </div>
      {testRun && <HistoryTestView testRun={testRun} />}
    </div>
  )
}