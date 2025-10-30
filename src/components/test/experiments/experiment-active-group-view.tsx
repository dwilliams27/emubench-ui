import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { EmuExperimentRunGroup } from "@/shared/types/experiments";
import { EmuTestPublic } from "@/shared/types/test";
import { ExperimentActiveCell } from "./experiment-active-cell";

export function ExperimentActiveGroupView({ runGroup, tests }: { runGroup: EmuExperimentRunGroup, tests: EmuTestPublic[] }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {runGroup.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(64px,128px))] gap-4 justify-center">
          {tests.map((test) => (
            <ExperimentActiveCell key={test.id} test={test} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
