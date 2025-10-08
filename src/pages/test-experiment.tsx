import { TestConfigForm } from "@/components/test/config/test-config-form";
import { SETUP_TEST_CONFIG_SCHEMA } from "@/components/test/config/types";
import { ExperimentGroupConfig } from "@/components/test/experiments/experiment-group-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmuBootConfig } from "@/shared/types";
import { configFormToEmuBootConfig } from "@/utils/forms";
import { useState } from "react";
import z from "zod";

const SETUP_EXPERIMENT_VIEWS = {
  BASE_CONFIG: 'BASE_CONFIG',
  GROUP_CONFIG: 'GROUP_CONFIG',
} as const;

export default function TestExperiment() {
  const [baseConfig, setBaseConfig] = useState<Omit<EmuBootConfig, "id"> | null>(null);
  const [currentView, setCurrentView] = useState<keyof typeof SETUP_EXPERIMENT_VIEWS>(SETUP_EXPERIMENT_VIEWS.BASE_CONFIG);

  const onSubmit = async (formData: z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>) => {
    const bootConfig = configFormToEmuBootConfig(formData);
    setBaseConfig(bootConfig);
    setCurrentView(SETUP_EXPERIMENT_VIEWS.GROUP_CONFIG);
  }

  return (
    <div>
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
          <TestConfigForm onSubmit={onSubmit} buttonText="Next" />
        </div>
      )}
      {currentView === SETUP_EXPERIMENT_VIEWS.GROUP_CONFIG && <ExperimentGroupConfig />}
    </div>
  )
}
