import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from "recharts";
import { useMemo } from "react";
import { EmuGroupData } from "@/shared/types/experiments";
import { permutationTest, PermutationResult } from "@/utils/statistics";

interface PermutationTestPanelProps {
  groups: EmuGroupData[];
  minSampleSize?: number;
  numPermutations?: number;
}

function getSignificanceStatus(pValue: number, sampleSize: number, minSize: number) {
  if (sampleSize < minSize) {
    return {
      color: "text-gray-500",
      bgColor: "bg-gray-100",
      icon: "\u23F3",
      status: "Collecting data...",
      description: `Need ${minSize - sampleSize} more samples`
    };
  } else if (pValue < 0.01) {
    return {
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: "\u2713\u2713",
      status: "Highly significant",
      description: "Strong evidence of difference"
    };
  } else if (pValue < 0.05) {
    return {
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      icon: "\u2713",
      status: "Significant",
      description: "Evidence of difference"
    };
  } else if (pValue < 0.10) {
    return {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      icon: "\u25CB",
      status: "Trending",
      description: "Weak evidence of difference"
    };
  } else {
    return {
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: "\u25CB",
      status: "No significant difference",
      description: "Groups appear similar"
    };
  }
}

export function ExperimentPermutationTestPanel({
  groups,
  minSampleSize = 10,
  numPermutations = 10000
}: PermutationTestPanelProps) {
  const { currentResult, pValueHistory, currentSampleSize, isTwoGroups } = useMemo(() => {
    // Permutation test only works for exactly 2 groups
    if (groups.length !== 2) {
      return {
        currentResult: null,
        pValueHistory: [],
        currentSampleSize: 0,
        isTwoGroups: false
      };
    }

    const [group1, group2] = groups;
    const maxLength = Math.min(group1.rewards.length, group2.rewards.length);
    const history: { testNumber: number; pValue: number }[] = [];

    let currentRes: PermutationResult | null = null;

    // Start computing p-values once we have minimum sample size
    for (let i = minSampleSize; i <= maxLength; i++) {
      const rewards1 = group1.rewards.slice(0, i);
      const rewards2 = group2.rewards.slice(0, i);

      const result = permutationTest(rewards1, rewards2, numPermutations);
      history.push({ testNumber: i, pValue: result.pValue });

      if (i === maxLength) {
        currentRes = result;
      }
    }

    return {
      currentResult: currentRes,
      pValueHistory: history,
      currentSampleSize: maxLength,
      isTwoGroups: true
    };
  }, [groups, minSampleSize, numPermutations]);

  // Not exactly 2 groups
  if (!isTwoGroups) {
    return (
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Statistical Significance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-50 rounded-lg p-6 text-center">
            <div className="text-yellow-600 text-lg font-semibold mb-2">
              Permutation Test Requires 2 Groups
            </div>
            <div className="text-sm text-muted-foreground">
              Currently {groups.length} group{groups.length !== 1 ? 's' : ''} in experiment.
              <br />
              Add or remove groups to enable statistical comparison.
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const status = getSignificanceStatus(
    currentResult?.pValue ?? 1,
    currentSampleSize,
    minSampleSize
  );

  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <CardTitle>Statistical Significance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current P-Value Display */}
        <div className={`${status.bgColor} rounded-lg p-6 text-center`}>
          <div className="text-sm font-medium text-muted-foreground mb-2">
            Permutation Test (n={numPermutations.toLocaleString()})
          </div>
          <div className={`text-5xl font-bold ${status.color} mb-2`}>
            {currentSampleSize >= minSampleSize && currentResult
              ? `p = ${currentResult.pValue.toFixed(4)}`
              : status.icon
            }
          </div>
          <div className={`text-lg font-semibold ${status.color} mb-1`}>
            {status.status}
          </div>
          <div className="text-sm text-muted-foreground">
            {status.description}
          </div>
        </div>

        {/* Mean Difference Display */}
        {currentResult && currentSampleSize >= minSampleSize && (
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-muted-foreground mb-2">
              Observed Mean Difference
            </div>
            <div className="text-2xl font-bold">
              {currentResult.observedDiff >= 0 ? '+' : ''}
              {currentResult.observedDiff.toFixed(4)}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {groups[0].name}: {currentResult.group1Mean.toFixed(4)} | {groups[1].name}: {currentResult.group2Mean.toFixed(4)}
            </div>
          </div>
        )}

        {/* P-Value Trend Chart */}
        {pValueHistory.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-3">P-value Over Time</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={pValueHistory}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis
                  dataKey="testNumber"
                  label={{ value: 'Sample Size (per group)', position: 'insideBottom', offset: -5 }}
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  scale="log"
                  domain={[0.0001, 1]}
                  ticks={[0.0001, 0.001, 0.01, 0.05, 0.1, 1]}
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  formatter={(value: number) => value.toFixed(4)}
                  labelFormatter={(label) => `n = ${label} per group`}
                />
                <ReferenceLine y={0.05} stroke="#ef4444" strokeDasharray="3 3" label="p = 0.05" />
                <ReferenceLine y={0.01} stroke="#991b1b" strokeDasharray="3 3" label="p = 0.01" />
                <Line
                  type="monotone"
                  dataKey="pValue"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Sample Sizes */}
        <div>
          <h4 className="text-sm font-medium mb-3">Sample Sizes</h4>
          <div className="grid grid-cols-2 gap-3">
            {groups.map(group => (
              <div key={group.name} className="border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1" style={{ color: group.color }}>
                  {group.name}
                </div>
                <div className="text-2xl font-bold">{group.rewards.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {group.rewards.length < minSampleSize
                    ? `${minSampleSize - group.rewards.length} more needed`
                    : '\u2713 Sufficient'
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
