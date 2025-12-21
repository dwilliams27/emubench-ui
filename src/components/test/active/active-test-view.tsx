import { ActiveTestLogs } from "@/components/test/active/active-test-logs";
import { ActiveTestHeader } from "@/components/test/active/active-test-header";
import { ActiveTestScreen } from "@/components/test/active/active-test-screen";
import type { Test, TestState } from "@/constants/games";
import { useApi } from "@/contexts/api-context";
import { emuFlattenCondition } from "@/shared/conditions/evaluate";
import type { EmuActiveTestReponse } from "@/shared/types";
import { useEffect, useState, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { EmuConditionOperand } from "@/shared/conditions/types";
import { ActiveTestGoal } from "@/components/test/active/active-test-goal";
import { ActiveTestMemory } from "@/components/test/active/active-test-memory";

export interface ActiveTestViewProps {
  test: Test | undefined;
  state: TestState | undefined;
}

export function ActiveTestView() {
  const { api } = useApi();
  const [currentState, setCurrentState] = useState<EmuActiveTestReponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const activeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [searchParams] = useSearchParams();
  const testId = searchParams.get('testId');

  const flatCondition = useMemo(() => {
    const result: { successCondition: EmuConditionOperand[], failCondition: EmuConditionOperand[], rewardFunction: EmuConditionOperand[] } = { successCondition: [], failCondition: [], rewardFunction: [] };
    if (currentState?.currentSuccessCondition) {
      try {
        const flat = emuFlattenCondition(currentState.currentSuccessCondition);
        result.successCondition = flat;
      } catch (error) {
        console.log('Error flattening condition: ', error);
      }
    }

    if (currentState?.currentFailCondition) {
      try {
        const flat = emuFlattenCondition(currentState.currentFailCondition);
        result.failCondition = flat;
      } catch (error) {
        console.log('Error flattening condition: ', error);
      }
    }

    if (currentState?.currentRewardFunction) {
      try {
        const flat = emuFlattenCondition(currentState.currentRewardFunction);
        result.rewardFunction = flat;
      } catch (error) {
        console.log('Error flattening condition: ', error);
      }
    }

    if (!result.successCondition && !result.failCondition && !result.rewardFunction) {
      return null;
    }
    
    return result;
  }, [currentState]);

  const getActiveTestState = async () => {
    if (!testId) {
      console.log('Could not find testId query param.');
      return;
    }
    let response: [EmuActiveTestReponse, number];
    try {
      response = await api.getActiveTestState(testId);
    } catch (error) {
      console.log('[Active Test] Unable to fetch active test: ', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      if (activeIntervalRef.current) {
        clearInterval(activeIntervalRef.current);
        activeIntervalRef.current = null;
      }
      return;
    }

    if (
      response[0].emulatorState?.status === 'error' ||
      response[0].agentState?.status === 'error' ||
      (response[0].emulatorState?.status === 'finished' && response[0].agentState?.status === 'finished')
    ) {
      if (activeIntervalRef.current) {
        clearInterval(activeIntervalRef.current);
        activeIntervalRef.current = null;
      }
    }

    if (!currentState || response[1] === 200) {
      setCurrentState(response[0]);
      return;
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
      <ActiveTestHeader requestError={error} testStatus={currentState?.testState?.status} agentState={currentState?.agentState} emulatorStatus={currentState?.emulatorState?.status} testId={testId} />
      <div className="flex flex-col space-y-1 md:flex-row space-x-1">
        <ActiveTestScreen screenshots={currentState?.screenshots} testStarted={!!currentState?.bootConfig} />
        <ActiveTestLogs messages={currentState?.agentLogs} testStarted={!!currentState?.bootConfig} />
      </div>
      <div className="w-full h-full space-x-0 md:space-x-1 space-y-1 md:space-y-0 px-0 md:pr-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <ActiveTestGoal
            successCondition={flatCondition?.successCondition}
            failCondition={flatCondition?.failCondition}
            rewardFunction={flatCondition?.rewardFunction}
          />
        </div>
        <div className="w-full md:w-1/2">
          <ActiveTestMemory memory={currentState?.agentState?.memory}/>
        </div>
      </div>
    </div>
  )
}
