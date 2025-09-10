import { ActiveTestChat } from "@/components/test/active/active-test-chat";
import { ActiveTestGoal } from "@/components/test/active/active-test-goal";
import { ActiveTestHeader } from "@/components/test/active/active-test-header";
import { ActiveTestScreen } from "@/components/test/active/active-test-screen";
import type { Test, TestState } from "@/constants/games";
import { useApi } from "@/contexts/api-context";
import { emuFlattenCondition } from "@/shared/conditions/evaluate";
import type { EmuActiveTestReponse } from "@/shared/types";
import { useEffect, useState, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export interface ActiveTestViewProps {
  test: Test | undefined;
  state: TestState | undefined;
}

export function ActiveTestView() {
  const { api } = useApi();
  const [currentState, setCurrentState] = useState<EmuActiveTestReponse | null>(null);
  const activeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [searchParams] = useSearchParams();
  const testId = searchParams.get('testId');

  const flatCondition = useMemo(() => {
    if (!currentState?.goalConfig?.condition || !currentState.testState?.contextMemWatchValues) {
      return [];
    }

    const conditionCopy = { ...currentState.goalConfig.condition };
    Object.keys(currentState.testState.contextMemWatchValues).forEach((key) => {
      conditionCopy.inputs[key].rawValue = currentState.testState.contextMemWatchValues[key];
    })
    return emuFlattenCondition(conditionCopy);
  }, [currentState]);

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

    if (response.emulatorStatus === 'error' || response.agentStatus === 'error' || (response.emulatorStatus === 'finished' && response.agentStatus === 'finished')) {
      if (activeIntervalRef.current) {
        clearInterval(activeIntervalRef.current);
        activeIntervalRef.current = null;
      }
    }

    if (!currentState) {
      setCurrentState(response);
      return;
    }

    if (response.agentLogs.length > currentState?.agentLogs.length || response.screenshots.length > currentState.screenshots.length) {
      setCurrentState(response);
    }
  }

  useEffect(() => {
    if (!testId) return;

    getActiveTestState();
    const interval = setInterval(getActiveTestState, 5000);
    activeIntervalRef.current = interval;
    
    return () => {
      if (activeIntervalRef.current) {
        clearInterval(activeIntervalRef.current);
        activeIntervalRef.current = null;
      }
    };
  }, [testId]);

  return (
    <div className="flex flex-col space-y-1">
      <ActiveTestHeader agentStatus={currentState?.agentStatus} emulatorStatus={currentState?.emulatorStatus} testId={testId} />
      <div className="flex flex-col space-y-1 md:flex-row space-x-1">
        <ActiveTestScreen screenshots={currentState?.screenshots} />
        <ActiveTestChat messages={currentState?.agentLogs} />
      </div>
      <ActiveTestGoal flatCondition={flatCondition} />
    </div>
  )
}
