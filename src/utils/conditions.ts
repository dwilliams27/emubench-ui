// Data type interpretation
// Raw Hex
// Chars
// Parsed int

// Pointer depth

export interface EmuConditionInput {
  type: EmuConditionResult;
  size: number;
  pointerDepth: number;
  key: string;
}

export interface EmuCondition {
  inputs: EmuConditionInput[];
  pipeline: EmuConditionStage[];
};

export interface EmuConditionStage {
  lhs: EmuConditionOperand;
  rhs: EmuConditionOperand;
  operation: EmuConditionOperation;
}

export type EmuConditionResult = { value: string | number | boolean, name?: string };
export type EmuConditionOperand = EmuConditionResult | EmuConditionStage;
export type EmuConditionOperation = (lhs: EmuConditionOperand, rhs: EmuConditionOperand) => EmuConditionResult;

export function emuEvaluateCondition(condition: EmuCondition): EmuConditionResult {
  if (!condition?.pipeline?.length) {
    throw new Error('Invalid condition: Pipeline is empty or undefined');
  }


}

export function emuEvaluateOperand(operand: EmuConditionOperand): EmuConditionResult {
  if (typeof operand === 'number' || typeof operand === 'string' || typeof operand === 'boolean') {
    return operand;
  } else if (typeof operand === 'object' && 'lhs' in operand && 'rhs' in operand && 'operation' in operand) {
    const lhsResult = emuEvaluateOperand(operand.lhs);
    const rhsResult = emuEvaluateOperand(operand.rhs);
    return operand.operation(lhsResult, rhsResult);
  }
  throw new Error('Invalid operand type');
}

export function emuAddOperation(): EmuConditionOperation {
  return (lhs, rhs) => {
    const lhsResult = emuEvaluateOperand(lhs);
    const rhsResult = emuEvaluateOperand(rhs);
    if (typeof lhsResult === 'number' && typeof rhsResult === 'number') {
      return lhsResult + rhsResult;
    }
    if (typeof lhsResult === 'string' && typeof rhsResult === 'string') {
      return lhsResult + rhsResult;
    }
    throw new Error('Invalid operands for +');
  };
}

export function emuMultiplyOperation(): EmuConditionOperation {
  return (lhs, rhs) => {
    const lhsResult = emuEvaluateOperand(lhs);
    const rhsResult = emuEvaluateOperand(rhs);
    if (typeof lhsResult === 'number' && typeof rhsResult === 'number') {
      return lhsResult * rhsResult;
    }
    throw new Error('Invalid operands for *');
  };
}

export function emuAndOperation(): EmuConditionOperation {
  return (lhs, rhs) => {
    const lhsResult = emuEvaluateOperand(lhs);
    const rhsResult = emuEvaluateOperand(rhs);
    if (typeof lhsResult === 'boolean' && typeof rhsResult === 'boolean') {
      return lhsResult && rhsResult;
    }
    throw new Error('Invalid operands for &&');
  };
}

export function emuOrOperation(): EmuConditionOperation {
  return (lhs, rhs) => {
    const lhsResult = emuEvaluateOperand(lhs);
    const rhsResult = emuEvaluateOperand(rhs);
    if (typeof lhsResult === 'boolean' && typeof rhsResult === 'boolean') {
      return lhsResult || rhsResult;
    }
    throw new Error('Invalid operands for ||');
  };
}

export function emuGreaterThanOperation(): EmuConditionOperation {
  return (lhs, rhs) => {
    const lhsResult = emuEvaluateOperand(lhs);
    const rhsResult = emuEvaluateOperand(rhs);
    if (typeof lhsResult === 'number' && typeof rhsResult === 'number') {
      return lhsResult > rhsResult;
    }
    throw new Error('Invalid operands for >');
  };
}

export function emuLessThanOperation(): EmuConditionOperation {
  return (lhs, rhs) => {
    const lhsResult = emuEvaluateOperand(lhs);
    const rhsResult = emuEvaluateOperand(rhs);
    if (typeof lhsResult === 'number' && typeof rhsResult === 'number') {
      return lhsResult < rhsResult;
    }
    throw new Error('Invalid operands for <');
  };
}

export function emuLessThanOperation(): EmuConditionOperation {
  return (lhs, rhs) => {
    const lhsResult = emuEvaluateOperand(lhs);
    if (typeof lhsResult === 'boolean') {
      return !lhsResult;
    }
    throw new Error('Invalid operands for !');
  };
}
