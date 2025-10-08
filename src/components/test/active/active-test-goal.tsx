import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmuConditionOperand } from "@/shared/conditions/types";

function renderOperand(operand: EmuConditionOperand) {
  const className = "border-2 rounded-2xl p-2";
  if (operand.conditionPart !== undefined) {
    return (
      <div className={className} key={JSON.stringify(operand)}>
        {operand.conditionPart.operation?.name}
      </div>
    );
  } else if (operand.input !== undefined) {
    return (
      <div className={className} key={operand.input.name}>
        {operand.input.name}: {operand.input.parsedValue || "N/A"}
      </div>
    );
  } else if (operand.primitive !== undefined) {
    return (
      <div className={className} key={JSON.stringify(operand.primitive)}>
        {operand.primitive}
      </div>
    )
  }
}

export function ActiveTestGoal({ flatCondition }: { flatCondition: EmuConditionOperand[] }) {
  return (
    <Card className="w-full md:w-2/3">
      <CardHeader>
        <CardTitle>Goal</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row space-x-2">
        {
          flatCondition.map(operand => renderOperand(operand))
        }
      </CardContent>
    </Card>
  )
}
