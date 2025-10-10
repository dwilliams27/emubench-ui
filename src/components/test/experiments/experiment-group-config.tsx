import { ExperimentGroup } from "@/components/test/experiments/experiment-group";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { EmuExperimentRunGroup } from "@/shared/types/experiments";
import { EXPERIMENT_RUN_GROUP_ID, genId } from "@/shared/utils/id";
import { useState } from "react";

export function ExperimentGroupConfig() {
  const [experimentRunGroups, setExperimentRunGroups] = useState<EmuExperimentRunGroup[]>([{
    name: "Group 1",
    baseConfigDelta: {
      agentConfig: {
        model: "gpt-3.5-turbo",
      },
    },
    iterations: 1,
    id: genId(EXPERIMENT_RUN_GROUP_ID)
  }]);
  
  return (
    <div className="space-y-2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-row justify-between items-center">
              <div>Experiment Groups</div>
              <Button variant="outline">+ Add Group</Button>
            </div>  
          </CardTitle>
        </CardHeader>
      </Card>
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
              delete newGroups[index].baseConfigDelta.agentConfig[key];
              setExperimentRunGroups(newGroups);
            }
          }}
        />
      ))}
    </div>
  );
}
