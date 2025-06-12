import { ActiveTestSelector } from "@/components/test/active/active-test-selector";
import { ActiveTestWidget } from "@/components/test/active/active-test-widget";
import type { Test, TestState } from "@/constants/games";
import { useApi } from "@/contexts/api-context";
import { useEffect, useState } from "react";

const pollInterval = 5000;
let intervalId: NodeJS.Timeout;

export default function ActiveTests() {
  const { api } = useApi();
  const [selectedTest, setSelectedTest] = useState<Test | undefined>(undefined);
  const [selectedTestState, setSelectedTestState] = useState<TestState | undefined>(undefined);
  const [activeTests, setActiveTests] = useState<Test[]>([]);

  const handleTestSelected = (id: string) => {
    console.log(`Setting selected test ${id}`)
    setSelectedTest(activeTests.find((test) => test.id === id));
  };

  useEffect(() => {
    (async () => {  
      const { tests } = await api.fetchTestConfigs();
      setActiveTests(tests);
      setSelectedTest(tests[0]);
    })();
  }, [api]);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const fetchData = async () => {
      if (!selectedTest) {
        console.log('No selected test...');
        return;
      }
      
      console.log('Fetching latest test state...')
      try {
        const updatedState = await api.getTestState(selectedTest.id);
        setSelectedTestState(updatedState);
      } catch (error) {
        // pass
      }
    };

    fetchData();
    intervalId = setInterval(fetchData, pollInterval);

    return () => clearInterval(intervalId);
  }, [selectedTest]);
  
  return (
    <div className="space-y-2">
      <ActiveTestSelector selectedTest={selectedTest} activeTests={activeTests} handleTestSelected={handleTestSelected} />
      <ActiveTestWidget test={selectedTest} state={selectedTestState} />
    </div>
  )
}
