import { ExperimentActiveGroupView } from "@/components/test/experiments/experiment-active-group-view";
import { useApi } from "@/contexts/api-context";
import { useFirestoreCollection } from "@/hooks/use-firstore-collection";
import { EmuExperiment } from "@/shared/types/experiments";
import { EmuGetExperimentSummaryResponse } from "@/shared/types/requests";
import { EmuTest } from "@/shared/types/test";
import { formatError } from "@/shared/utils/error";
import { useEffect, useState } from "react";

export function ExperimentView({ experiment }: { experiment: EmuExperiment }) {
  const { data, loading } = useFirestoreCollection<EmuTest>(
    'TESTS_PUBLIC',
    'bootConfig.experimentId',
    experiment.id,
  );
  console.log('ExperimentView tests data: ', data, loading);
  const { api } = useApi();
  const [summary, setSummary] = useState<EmuGetExperimentSummaryResponse | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const result = await api.getExperimentSummary(experiment.id);
        if (result[1] === 200) {
          const response = result[0];
          if (import.meta.env.VITE_MOCK_API === "true") {
            const keys = Object.keys(response.runGroupSummaries);
            for(let i = 0; i < keys.length; i++) {
              if (i < experiment.runGroups.length) {
                response.runGroupSummaries[experiment.runGroups[i].id] = response.runGroupSummaries[keys[i]]; 
              }
            }
          }
          setSummary(response);
        } else {
          setError('Could not fetch experiment summary');
        }
      } catch (error) {
        setError(formatError(error));
      }
    })();
  }, []);

  return (
    <div className="space-y-2">
      {experiment.runGroups.map((group) => (
        <ExperimentActiveGroupView runGroup={group} tests={summary?.runGroupSummaries[group.id]?.tests} />
      ))}
    </div>
  );
}
