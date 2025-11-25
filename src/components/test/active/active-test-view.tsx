import { ActiveTestLogs } from "@/components/test/active/active-test-logs";
import { ActiveTestHeader } from "@/components/test/active/active-test-header";
import { ActiveTestScreen } from "@/components/test/active/active-test-screen";
import type { Test, TestState } from "@/constants/games";
import { useApi } from "@/contexts/api-context";
import { emuFlattenCondition } from "@/shared/conditions/evaluate";
import type { EmuActiveTestReponse } from "@/shared/types";
import { useEffect, useState, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestCondition } from "@/components/shared/test-condition";
import { Skeleton } from "@/components/ui/skeleton";
import { CostIndicator } from "@/components/test/active/cost-indicator";

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
    if (!currentState?.currentCondition) {
      return [];
    }
    try {
      const flat = emuFlattenCondition(currentState.currentCondition);
      return flat;
    } catch (error) {
      console.log('Error flattening condition: ', error);
      return [];
    }
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
      <Card className="w-full md:w-2/3">
        <CardHeader>
          <CardTitle>Goal</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row space-x-2">
          {flatCondition?.length > 0 ? (
            <TestCondition flatCondition={flatCondition} />
          ) : (
            <div className="flex flex-row space-x-4 overflow-x-auto">
              <Skeleton className="h-12 w-32 mb-2" />
              <Skeleton className="h-12 w-32 mb-2" />
              <Skeleton className="h-12 w-32 mb-2" />
              <Skeleton className="h-12 w-32 mb-2" />
              <Skeleton className="h-12 w-32 mb-2" />
              <Skeleton className="h-12 w-32 mb-2" />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
