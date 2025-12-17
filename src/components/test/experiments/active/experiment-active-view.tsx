import { ExperimentActiveGroupView } from "@/components/test/experiments/active/experiment-active-group-view";
import { ExperimentDistributionPanel } from "@/components/test/experiments/active/experiment-distribution-panel";
import { ExperimentPassRatePanel } from "@/components/test/experiments/active/experiment-pass-rate-panel";
import { ExperimentPermutationTestPanel } from "@/components/test/experiments/active/experiment-permutation-test-panel";
import { ExperimentResult } from "@/components/test/experiments/active/experiment-result";
import { ExperimentRewardPanel } from "@/components/test/experiments/active/experiment-reward-panel";
import { ExperimentStatTestPanel } from "@/components/test/experiments/active/experiment-stat-test-panel";
import { useFirestoreCollection } from "@/hooks/use-firstore-collection";
import { EmuExperiment, EmuExperimentRunGroup, EmuGroupData } from "@/shared/types/experiments";
import { EmuTestPublic } from "@/shared/types/test";
import { useMemo, useState } from "react";

export function ExperimentView({ experiment }: { experiment: EmuExperiment }) {
  const [completedTestMap, setCompletedTestMap] = useState<Record<string, EmuTestPublic[]>>({});

  const { data, loading } = useFirestoreCollection<EmuTestPublic>(
    'TESTS_PUBLIC',
    'bootConfig.experimentId',
    experiment.id,
  );
  
  const baseColors = [
    '#3B82F6', // Blue
    '#10B981', // Green
    '#F59E0B', // Orange
    '#8B5CF6', // Purple
    '#EF4444', // Red
  ];

  const groupsWithTests = useMemo(() => {
    const result: [EmuExperimentRunGroup, EmuTestPublic[]][] = [];
    for (const group of experiment.runGroups) {
      result.push([
        group,
        data.filter(test => test.bootConfig.experimentRunGroupId === group.id)
      ]);
    }
    return result;
  }, [data]);

  const groupData = useMemo(() => {
    return experiment.runGroups.map((group, index) => {
      const tests = data.filter(test => test.bootConfig.experimentRunGroupId === group.id);
      const color = index < baseColors.length 
        ? baseColors[index]
        : '#' + Math.floor(Math.random()*16777215).toString(16);
      const completedTests = completedTestMap[group.id] || [];
      tests.forEach(test => {
        if (!!test.result && !completedTests.find(t => t.id === test.id)) {
          completedTests.push(test);
        }
      });
      setCompletedTestMap(prev => ({
        ...prev,
        [group.id]: completedTests
      }));
      
      return {
        name: group.name,
        results: completedTests.map(test => test.result?.conditionResult === "passed"),
        rewards: completedTests
          .map(test => test.result?.reward)
          .filter((r): r is number => r !== null && r !== undefined),
        color
      };
    });
  }, [data, experiment.runGroups]);

  return (
    <div className="space-y-2">
      <ExperimentResult experiment={experiment} />
      <div className="flex flex-col md:flex-row space-x-2">
        {experiment.numericalResult ? (
          <>
            <ExperimentRewardPanel groups={groupData} />
            <ExperimentPermutationTestPanel groups={groupData} />
          </>
        ) : (
          <>
            <ExperimentPassRatePanel groups={groupData} />
            <ExperimentStatTestPanel groups={groupData} />
          </>
        )}
      </div>
      {experiment.numericalResult && (
        <ExperimentDistributionPanel groups={groupData} />
      )}
      {groupsWithTests.map((group) => (
        <ExperimentActiveGroupView key={group[0].id} runGroup={group[0]} tests={group[1]} />
      ))}
    </div>
  );
}
