import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { EmuExperiment } from "@/shared/types/experiments";

export function ExperimentResult({ experiment }: { experiment: EmuExperiment }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {experiment.id} - {experiment.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        {experiment.description}
      </CardContent>
    </Card>
  )
}
