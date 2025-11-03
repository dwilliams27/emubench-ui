import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from "recharts";
import { useMemo } from "react";
import { EmuGroupData } from "@/shared/types/experiments";

interface StatisticalTestPanelProps {
  groups: EmuGroupData[];
  minSampleSize?: number;
}

function chiSquareTest(contingencyTable: number[][]): number {
  // Calculate row and column totals
  const rowTotals = contingencyTable.map(row => row.reduce((a, b) => a + b, 0));
  const colTotals = contingencyTable[0].map((_, colIdx) => 
    contingencyTable.reduce((sum, row) => sum + row[colIdx], 0)
  );
  const grandTotal = rowTotals.reduce((a, b) => a + b, 0);
  
  if (grandTotal === 0) return 1;
  
  // Calculate chi-square statistic
  let chiSquare = 0;
  for (let i = 0; i < contingencyTable.length; i++) {
    for (let j = 0; j < contingencyTable[i].length; j++) {
      const expected = (rowTotals[i] * colTotals[j]) / grandTotal;
      if (expected > 0) {
        chiSquare += Math.pow(contingencyTable[i][j] - expected, 2) / expected;
      }
    }
  }
  
  // Calculate degrees of freedom
  const df = (contingencyTable.length - 1) * (contingencyTable[0].length - 1);
  
  // Approximate p-value using chi-square CDF
  // This is a simplified approximation - in production, use a proper stats library
  return approximatePValue(chiSquare, df);
}

function approximatePValue(chiSquare: number, df: number): number {
  // Simplified approximation - for production use jstat or similar
  // This uses Wilson-Hilferty approximation
  if (df === 0) return 1;
  
  const z = Math.pow(chiSquare / df, 1/3) - (1 - 2/(9*df));
  const normalizedZ = z / Math.sqrt(2/(9*df));
  
  // Approximate normal CDF
  const t = 1 / (1 + 0.2316419 * Math.abs(normalizedZ));
  const d = 0.3989423 * Math.exp(-normalizedZ * normalizedZ / 2);
  const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  
  return normalizedZ > 0 ? 2 * prob : 2 * (1 - prob);
}

function getSignificanceStatus(pValue: number, sampleSize: number, minSize: number) {
  if (sampleSize < minSize) {
    return {
      color: "text-gray-500",
      bgColor: "bg-gray-100",
      icon: "⏳",
      status: "Collecting data...",
      description: `Need ${minSize - sampleSize} more samples`
    };
  } else if (pValue < 0.01) {
    return {
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: "✓✓",
      status: "Highly significant",
      description: "Strong evidence of difference"
    };
  } else if (pValue < 0.05) {
    return {
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      icon: "✓",
      status: "Significant",
      description: "Evidence of difference"
    };
  } else if (pValue < 0.10) {
    return {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      icon: "○",
      status: "Trending",
      description: "Weak evidence of difference"
    };
  } else {
    return {
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: "○",
      status: "No significant difference",
      description: "Groups appear similar"
    };
  }
}

export function ExperimentStatTestPanel({ groups, minSampleSize = 20 }: StatisticalTestPanelProps) {
  const { currentPValue, pValueHistory, currentSampleSize } = useMemo(() => {
    const maxLength = Math.max(...groups.map(g => g.results.length));
    const history: { testNumber: number; pValue: number }[] = [];
    
    let currentP = 1;
    
    for (let i = Math.max(10, minSampleSize); i <= maxLength; i++) {
      const contingency = groups.map(group => {
        const slice = group.results.slice(0, i);
        const successes = slice.filter(r => r).length;
        return [successes, i - successes];
      });
      
      const pValue = chiSquareTest(contingency);
      history.push({ testNumber: i, pValue });
      
      if (i === maxLength) {
        currentP = pValue;
      }
    }
    
    return {
      currentPValue: currentP,
      pValueHistory: history,
      currentSampleSize: maxLength
    };
  }, [groups, minSampleSize]);

  const status = getSignificanceStatus(currentPValue, currentSampleSize, minSampleSize);

  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <CardTitle>Statistical Significance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current P-Value Display */}
        <div className={`${status.bgColor} rounded-lg p-6 text-center`}>
          <div className="text-sm font-medium text-muted-foreground mb-2">
            Chi-squared Test
          </div>
          <div className={`text-5xl font-bold ${status.color} mb-2`}>
            {currentSampleSize >= minSampleSize 
              ? `p = ${currentPValue.toFixed(4)}`
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

        {/* P-Value Trend Chart */}
        {pValueHistory.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-3">P-value Over Time</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={pValueHistory}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis 
                  dataKey="testNumber" 
                  label={{ value: 'Number of Tests', position: 'insideBottom', offset: -5 }}
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
                  labelFormatter={(label) => `Test ${label}`}
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {groups.map(group => (
              <div key={group.name} className="border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">{group.name}</div>
                <div className="text-2xl font-bold">{group.results.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {group.results.length < minSampleSize 
                    ? `${minSampleSize - group.results.length} more needed`
                    : '✓ Sufficient'
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
