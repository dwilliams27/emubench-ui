import { ActiveTestSelector } from "@/components/test/active/active-test-selector";
import { ActiveTestWidget } from "@/components/test/active/active-test-widget";
import type { Test } from "@/constants/games";
import { useApi } from "@/contexts/api-context";
import React from "react";

export default function ActiveTests() {
  const { api } = useApi();
  const [selectedTest, setSelectedTest] = React.useState<Test | undefined>(undefined);
  const [activeTests, setActiveTests] = React.useState<Test[]>([]);

  const handleTestSelected = (id: string) => {
    setSelectedTest(activeTests.find((test) => test.id === id));
  };

  React.useEffect(() => {
    (async () => {
      const { tests } = await api.fetchActiveTestConfigs();
      setActiveTests(tests);
      setSelectedTest(tests[0]);
    })();
  }, [api]);
  
  return (
    <div className="space-y-2">
      <ActiveTestSelector selectedTest={selectedTest} activeTests={activeTests} handleTestSelected={handleTestSelected} />
      <ActiveTestWidget test={selectedTest} />
    </div>
  )
}
