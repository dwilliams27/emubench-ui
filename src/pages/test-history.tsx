import { HistoryTestView } from "@/components/test/history/history-test-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useApi } from "@/contexts/api-context";
import { EmuTestResult } from "@/shared/types/test-result";
import { useEffect, useState } from "react";
import { set } from "zod";

export default function TestHistory() {
  const { api } = useApi();
  const [testResultId, setTestResultId] = useState('');
  const [testResult, setTestResult] = useState<EmuTestResult | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchTestResult = async () => {
    setLoading(true);
    if (testResultId.length === 0) {
      setTestResult(null);
      setLoading(false);
      return;
    }

    try {
      const testResult = await api.getTestHistory(testResultId);
      if (testResult[1] === 200 && testResult[0].testResult) {
        setTestResult(testResult[0].testResult);
      }
    } catch (error) {
      console.log('Error fetching test run history: ', error);
      setTestResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex flex-row mb-4 space-x-2 items-center">
        <Input placeholder="Enter Test Run ID" value={testResultId} onChange={(e) => setTestResultId(e.target.value)} />
        <Button onClick={fetchTestResult} disabled={loading}>Submit</Button>
      </div>
      {testResult && <HistoryTestView testResult={testResult} />}
    </div>
  )
}