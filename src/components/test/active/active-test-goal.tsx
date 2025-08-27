import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmuConditionOperand } from "@/shared/conditions/types";

function renderOperand(operand: EmuConditionOperand) {
  if (operand.conditionPart) {
    return (
      <div>
        {operand.conditionPart.operation.name}
      </div>
    );
  } else if (operand.input) {
    return (
      <div>
        {operand.input.name}: {operand.input.parsedValue}
      </div>
    );
  } else if (operand.primitive) {
    return (
      <div>
        {operand.primitive}
      </div>
    )
  }
}

export function ActiveTestGoal({ flatCondition }: { flatCondition: EmuConditionOperand[] }) {
  return (
    <Card className="w-full md:w-1/3">
      <CardHeader>
        <CardTitle>Goal</CardTitle>
      </CardHeader>
      <CardContent>
        {
          flatCondition.map(operand => renderOperand(operand))
        }
      </CardContent>
    </Card>
  )
}
