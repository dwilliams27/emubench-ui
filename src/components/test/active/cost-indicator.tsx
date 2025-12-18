import { MODELS } from "../config/types";
import { Money } from "./money";

export interface CostIndicatorProps {
  inputTokens: number;
  outputTokens: number;
  reasoningTokens: number;
  modelProvider: string;
  modelName: string;
}

export function CostIndicator({
  inputTokens,
  outputTokens,
  reasoningTokens,
  modelProvider,
  modelName,
}: CostIndicatorProps) {
  // Find the model in the MODELS object
  const model = MODELS[modelProvider]?.find((m) => m.name === modelName);

  // Calculate cost
  const calculateCost = (): number => {
    if (!model) return 0;

    const inputCost = inputTokens * model.tokenCost.input;
    const outputCost = outputTokens * model.tokenCost.output;
    const reasoningCost = reasoningTokens * model.tokenCost.reasoning;

    return inputCost + outputCost + reasoningCost;
  };

  const totalCost = calculateCost();

  // Format cost for display
  const formatCost = (cost: number): string => {
    if (cost === 0) return '0.00';
    if (cost < 0.01) {
      // For very small amounts, show more decimal places
      return cost.toFixed(4);
    }
    return cost.toFixed(2);
  };

  const formattedCost = formatCost(totalCost);

  return (
    <div className="flex items-center justify-center">
      <Money cost={formattedCost} />
    </div>
  );
}
