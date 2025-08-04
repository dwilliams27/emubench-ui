export type EmuConditionInputType = 'int' | 'uint' | 'float' | 'hex' | 'chars';

export interface EmuConditionInput {
  name?: string;
  type: EmuConditionInputType;
  rawValue: string; // Hex string
  parsedValue?: EmuConditionPrimitiveResult;
}

export interface EmuCondition {
  inputs: EmuConditionInputSet;
  logic: EmuConditionPart;
};

export interface EmuConditionPart {
  lhs?: EmuConditionOperand;
  rhs?: EmuConditionOperand;
  operation: EmuConditionOperation;
}

export type EmuConditionInputSet = Record<string, EmuConditionInput>;
export type EmuConditionPrimitiveResult = string | number | boolean;
export type EmuConditionLookupValue = { inputName: string, value?: EmuConditionPrimitiveResult };
export type EmuConditionOperand = EmuConditionPrimitiveResult | EmuConditionLookupValue | EmuConditionPart;
export type EmuConditionOperationFunction = (inputs: EmuConditionInputSet, operands: { lhs?: EmuConditionOperand, rhs?: EmuConditionOperand }) => EmuConditionPrimitiveResult;

export interface EmuConditionOperation {
  id: string;
  name: string;
  func: EmuConditionOperationFunction;
}

export interface EmuLinkedExpressionPart {
  prev?: EmuLinkedExpressionPart;
  next?: EmuLinkedExpressionPart;
  value: EmuRawExpressionPart | EmuConditionPart;
}

export interface EmuRawExpressionPart {
  type: 'primitive' | 'input' | 'operator' | 'parentheses';
  primitiveValue?: string | number | boolean;
  input?: EmuConditionInput;
  operator?: EmuConditionOperation;
}
