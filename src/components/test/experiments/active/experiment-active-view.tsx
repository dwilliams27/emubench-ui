import { ExperimentActiveGroupView } from "@/components/test/experiments/active/experiment-active-group-view";
import { ExperimentResult } from "@/components/test/experiments/active/experiment-result";
import { useFirestoreCollection } from "@/hooks/use-firstore-collection";
import { EmuExperiment, EmuExperimentRunGroup } from "@/shared/types/experiments";
import { EmuTestPublic } from "@/shared/types/test";
import { useMemo } from "react";

export function ExperimentView({ experiment }: { experiment: EmuExperiment }) {
  const { data, loading } = useFirestoreCollection<EmuTestPublic>(
    'TESTS_PUBLIC',
    'bootConfig.experimentId',
    experiment.id,
  );
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

  return (
    <div className="space-y-2">
      <ExperimentResult experiment={experiment} />
      {groupsWithTests.map((group) => (
        <ExperimentActiveGroupView key={group[0].id} runGroup={group[0]} tests={group[1]} />
      ))}
    </div>
  );
}
