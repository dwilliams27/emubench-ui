import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { EmuAgentMemory } from "@/shared/types";

export function ActiveTestMemory({ memory }: { memory?: EmuAgentMemory }) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Memory</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row space-x-2">
        {memory?.longTermNotes ? (
          <div>...</div>
        ): (
          <p>N/A</p>
        )}
      </CardContent>
    </Card>
  );
}
