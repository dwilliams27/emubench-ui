import { ActiveTestChat } from "@/components/test/active/active-test-chat";
import { ActiveTestHeader } from "@/components/test/active/active-test-header";
import { ActiveTestScreen } from "@/components/test/active/active-test-screen";
import type { Test, TestState } from "@/constants/games";
import type { EmuActiveTestReponse } from "@/constants/shared";
import { useApi } from "@/contexts/api-context";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface ActiveTestViewProps {
  test: Test | undefined;
  state: TestState | undefined;
}

export function ActiveTestView() {
  const { api } = useApi();
  const [currentState, setCurrentState] = useState<EmuActiveTestReponse | null>(null);
  const [activeInterval, setActiveInterval] = useState<NodeJS.Timeout | null>(null);
  const [searchParams] = useSearchParams();
  const testId = searchParams.get('testId');

  const getActiveTestState = async () => {
    if (!testId) {
      console.log('Could not find testId query param.');
      return;
    }
    let response: EmuActiveTestReponse;
    try {
      response = await api.getActiveTestState(testId);
    } catch (error) {
      console.log('[Active Test] Unable to fetch active test: ', error);
      return;
    }

    if ((response.status === 'error' || response.status === 'finished') && activeInterval) {
      clearInterval(activeInterval);
    }

    if (!currentState) {
      setCurrentState(response);
      return;
    }

    if (response.agentLogs.length > currentState?.agentLogs.length || response.screenshots.length > currentState.screenshots.length || response.testState.length > currentState.testState.length) {
      setCurrentState(response);
    }
  }

  useEffect(() => {
    if (!testId) return;

    getActiveTestState();
    const interval = setInterval(getActiveTestState, 5000);
    setActiveInterval(interval);
    
    return () => clearInterval(interval);
  }, [testId]);

  return (
    <div className="flex flex-col space-y-1">
      <ActiveTestHeader status={currentState?.status} testId={testId} />
      <div className="flex flex-col space-y-1 md:flex-row space-x-1">
        <ActiveTestScreen screenshots={currentState?.screenshots} />
        <ActiveTestChat messages={currentState?.agentLogs} />
      </div>
    </div>
  )
}
