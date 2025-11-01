import { ExperimentGroup } from "@/components/test/experiments/config/experiment-group";
import { DeltaFields } from "@/components/test/experiments/types";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { EmuExperimentRunGroup } from "@/shared/types/experiments";
import { EXPERIMENT_RUN_GROUP_ID, genId } from "@/shared/utils/id";
import { useState } from "react";

export function ExperimentGroupConfig({ onSubmit, submitting }: { onSubmit: (experimentRunGroups: EmuExperimentRunGroup[]) => void, submitting: boolean }) {
  const [experimentRunGroups, setExperimentRunGroups] = useState<EmuExperimentRunGroup[]>([]);

  const addNewRunGroup = () => {
    setExperimentRunGroups([...experimentRunGroups, {
      name: `Group ${experimentRunGroups.length + 1}`,
      baseConfigDelta: {},
      iterations: 1,
      id: import.meta.env.VITE_MOCK_API ? (experimentRunGroups.length === 0 ? "erg-3ecacf292af34da8" : "erg-42ff07c906914c31") : genId(EXPERIMENT_RUN_GROUP_ID)
    }]);
  }

  const handleSubmit = () => {
    if (experimentRunGroups.length > 0) {
      onSubmit(experimentRunGroups);
    }
  }
  
  return (
    <div className="space-y-2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-row justify-between items-center">
              <div>Experiment Groups</div>
              <Button variant="outline" onClick={addNewRunGroup}>+ Add Group</Button>
            </div>  
          </CardTitle>
        </CardHeader>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {experimentRunGroups.map((group, index) => (
          <ExperimentGroup
            key={group.name}
            group={group}
            addIterations={(amount: number) => {
              const newGroups = [...experimentRunGroups];
              newGroups[index].iterations += amount;
              if (newGroups[index].iterations < 1) {
                newGroups[index].iterations = 1;
              }
              setExperimentRunGroups(newGroups);
            }}
            removeConfigDeltaItem={(key: string) => {
              const newGroups = [...experimentRunGroups];
              if (newGroups[index].baseConfigDelta.agentConfig && key in newGroups[index].baseConfigDelta.agentConfig) {
                // @ts-ignore
                const { [key]: deleted, ...remainingConfig } = newGroups[index].baseConfigDelta.agentConfig;
                newGroups[index] = {
                  ...newGroups[index],
                  baseConfigDelta: {
                    ...newGroups[index].baseConfigDelta,
                    agentConfig: remainingConfig
                  }
                };
                setExperimentRunGroups(newGroups);
              }
            }}
            addConfigDeltaItem={(data: { key: string, value?: any }) => {
              const newGroups = [...experimentRunGroups];
              newGroups[index] = {
                ...newGroups[index],
                baseConfigDelta: {
                  ...newGroups[index].baseConfigDelta,
                  agentConfig: {
                    ...newGroups[index].baseConfigDelta.agentConfig,
                    [DeltaFields[data.key].key]: data.value
                  }
                }
              };
              setExperimentRunGroups(newGroups);
            }}
            deleteGroup={(id: string) => {
              setExperimentRunGroups(experimentRunGroups.filter(g => g.id !== id));
            }}
            updateGroupName={(id: string, name: string) => {
              const newGroups = [...experimentRunGroups];
              const groupIndex = newGroups.findIndex(g => g.id === id);
              if (groupIndex !== -1) {
                newGroups[groupIndex] = {
                  ...newGroups[groupIndex],
                  name: name
                };
                setExperimentRunGroups(newGroups);
              }
            }}
          />
        ))}
      </div>
      <div className="w-full flex justify-center mt-10">
        <Button type="submit" disabled={submitting} size="lg" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </div>
    </div>
  );
}
