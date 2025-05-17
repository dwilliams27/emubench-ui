import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Test } from "@/constants/games";

export interface ActiveTestSelectorProps {
  selectedTest: Test | undefined;
  activeTests: Test[];
  handleTestSelected: (id: string) => void;
}

export function ActiveTestSelector({ selectedTest, activeTests, handleTestSelected }: ActiveTestSelectorProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-row items-center justify-between space-x-2">
          <CardTitle>Active Tests</CardTitle>
          <div className="flex flex-col space-y-1.5">
            <Select value={selectedTest?.id} onValueChange={handleTestSelected}>
              <SelectTrigger id="endpoint">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                { activeTests.map((test) => (
                  <SelectItem key={test.id} value={test.id}>
                    {test.id}
                  </SelectItem>
                )) }
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
