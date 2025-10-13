import { ExperimentActiveGroupView } from "@/components/test/experiments/experiment-active-group-view";
import { useApi } from "@/contexts/api-context";
import { EmuExperiment } from "@/shared/types/experiments";
import { EmuGetExperimentSummaryResponse } from "@/shared/types/requests";
import { formatError } from "@/shared/utils/error";
import { useEffect, useState } from "react";

export function ExperimentView({ experiment }: { experiment: EmuExperiment }) {
  const { api } = useApi();
  const [summary, setSummary] = useState<EmuGetExperimentSummaryResponse | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const result = await api.getExperimentSummary(experiment.id);
        if (result[1] === 200) {
          setSummary(result[0]);
        } else {
          setError('Could not fetch experiment summary');
        }
      } catch (error) {
        setError(formatError(error));
      }
    })();
  }, []);

  return (
    <div>
      {experiment.runGroups.map((group) => (
        <ExperimentActiveGroupView runGroup={group} tests={summary[group.id]} />
      ))}
    </div>
  );
}
