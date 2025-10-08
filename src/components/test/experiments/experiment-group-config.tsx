import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperimentGroupConfig() {
  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Experiment Groups</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          Configure groups with modified configurations to compare results.
        </CardContent>
      </Card>
    </div>
  );
}
