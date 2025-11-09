import { EmulatorConfigForm } from "@/components/test/config/test-config-form";
import { DEBUG_GAME_MAP, GAMES, SETUP_TEST_CONFIG_SCHEMA } from "@/components/test/config/types";
import { Button } from "@/components/ui/button";
import { useApi } from "@/contexts/api-context";
import { EmuError } from "@/shared/types";
import { configFormToEmuBootConfig } from "@/utils/forms";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import z from "zod";

export default function EmulatorConfig() {
  const { api } = useApi();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [testId, setTestId] = useState('');
  const [error, setError] = useState('');

  const navigateToTest = (testId: string) => {
    navigate(`/dashboard/active-tests?testId=${testId}`);
  }

  const onSubmit = async (formData: z.infer<typeof SETUP_TEST_CONFIG_SCHEMA>) => {
    setSubmitting(true);
    console.log("Form submitted:", formData);
    const bootConfig = configFormToEmuBootConfig(formData);

    try {
      const result = await api.setupTest(bootConfig);
      
      console.log('[Test Config Form] Test setup!', result.testId);

      // Stupid safari
      setTestId(result.testId);

      navigateToTest(result.testId);
    } catch (error) {
      if (error instanceof EmuError) {
        setError(error.traceId || error.message);
      }
      console.log('[Test Config Form]: Unable to setup test: ', error);
      setError(JSON.stringify(error));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <EmulatorConfigForm onSubmit={onSubmit} submitting={submitting} />
      { testId && (
        <Button className="mx-auto" size="sm" disabled={submitting} onClick={() => navigateToTest(testId)}>
          {`Navigate to ${testId}`}
        </Button>
      ) }
      { error && <p className="text-destructive">{error}</p> }
    </div>
  )
}
