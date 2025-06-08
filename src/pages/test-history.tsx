import { TestHistoryList } from "@/components/test/history/test-history-list";
import type { Test } from "@/constants/games";
import { useApi } from "@/contexts/api-context";
import { useEffect, useState } from "react";

export default function TestHistory() {
  const { api } = useApi();
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    (async () => {  
      const { tests } = await api.fetchActiveTestConfigs();
      setTests(tests);
    })();
  }, [api]);
  
  return (
    <div>
      <TestHistoryList tests={tests} />
    </div>
  )
}