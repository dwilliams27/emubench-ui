import { TestConfigForm } from "@/components/test/config/test-config-form";
import { SETUP_TEST_CONFIG_SCHEMA } from "@/components/test/config/types";
import { EXPERIMENT_CONFIG_SCHEMA, ExperimentConfig } from "@/components/test/experiments/experiment-config";
import { ExperimentGroupConfig } from "@/components/test/experiments/experiment-group-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApi } from "@/contexts/api-context";
import { EmuBootConfig } from "@/shared/types";
import { EmuExperimentRunGroup } from "@/shared/types/experiments";
import { configFormToEmuBootConfig } from "@/utils/forms";
import { useState } from "react";
import z from "zod";

const SETUP_EXPERIMENT_VIEWS = {
  EXPERIMENT_CONFIG: 'EXPERIMENT_CONFIG',
  BASE_CONFIG: 'BASE_CONFIG',
  GROUP_CONFIG: 'GROUP_CONFIG',
} as const;

export default function TestExperiment() {
  const { api } = useApi();
  const [baseConfig, setBaseConfig] = useState<Omit<EmuBootConfig, "id"> | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [experimentName, setExperimentName] = useState(`Experiment ${new Date().toISOString()}`);
  const [experimentDescription, setExperimentDescription] = useState('Experiment created via UI');
  const [currentView, setCurrentView] = useState<keyof typeof SETUP_EXPERIMENT_VIEWS>(SETUP_EXPERIMENT_VIEWS.EXPERIMENT_CONFIG);

  const submitExperiment = async (runGroups: EmuExperimentRunGroup[]) => {
    const experiment = {
      name: experimentName,
      description: experimentDescription,
      runGroups,
      baseConfig: baseConfig as EmuBootConfig,
      totalTestRuns: runGroups.reduce((acc, group) => acc + group.iterations, 0)
    };
    if (!baseConfig) {
      return;
    }
    try {
      const response = await api.setupExperiment(experiment);
    } catch (error) {
      console.error('Error submitting experiment: ', error);
    }
  }

  const onExperimentConfigSubmit = async (formData: z.infer<typeof EXPERIMENT_CONFIG_SCHEMA>) => {
    setExperimentName(formData.name);
    setExperimentDescription(formData.description);
    setCurrentView(SETUP_EXPERIMENT_VIEWS.BASE_CONFIG);
  }

  const onTestConfigSubmit = async (formData: z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>) => {
    const bootConfig = configFormToEmuBootConfig(formData);
    setBaseConfig(bootConfig);
    setCurrentView(SETUP_EXPERIMENT_VIEWS.GROUP_CONFIG);
  }

  const onExperimentGroupConfigSubmit = async (groupConfigExperimentRunGroups: EmuExperimentRunGroup[]) => {
    setSubmitting(true);
    // awk, fix
    await submitExperiment(groupConfigExperimentRunGroups);
    setSubmitting(false);
  }

  return (
    <div>
      {currentView === SETUP_EXPERIMENT_VIEWS.EXPERIMENT_CONFIG && (
        <ExperimentConfig onSubmit={onExperimentConfigSubmit} />
      )}
      {currentView === SETUP_EXPERIMENT_VIEWS.BASE_CONFIG && (
        <div className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Base Config</CardTitle>
            </CardHeader>
            <CardContent>
              Configure base settings for the experiment. Next you will be able to configure different test groups that can each a subset of these parameters.
            </CardContent>
          </Card>
          <TestConfigForm onSubmit={onTestConfigSubmit} buttonText="Next" />
        </div>
      )}
      {currentView === SETUP_EXPERIMENT_VIEWS.GROUP_CONFIG && <ExperimentGroupConfig onSubmit={onExperimentGroupConfigSubmit} submitting={submitting} />}
    </div>
  )
}
