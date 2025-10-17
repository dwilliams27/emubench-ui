import { EmuConditionOperand } from "@/shared/conditions/types";

function renderOperand(operand: EmuConditionOperand) {
  const className = "p-2";
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

export function TestCondition({ flatCondition }: { flatCondition: EmuConditionOperand[] }) {
  return (
    <div className="flex flex-row border-2 rounded-2xl">
      {
        flatCondition.map(operand => renderOperand(operand))
      }
    </div>
  )
}
