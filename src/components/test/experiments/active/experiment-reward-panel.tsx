import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useMemo } from "react";
import { EmuGroupData } from "@/shared/types/experiments";
import { meanConfidenceInterval, MeanCI } from "@/utils/statistics";

interface RewardPanelProps {
  groups: EmuGroupData[];
}

export function ExperimentRewardPanel({ groups }: RewardPanelProps) {
  const chartData = useMemo(() => {
    const maxLength = Math.max(...groups.map(g => g.rewards.length));
    if (maxLength === 0) return [];

    const data: any[] = [];

    for (let i = 0; i < maxLength; i++) {
      const point: any = { testNumber: i + 1 };

      groups.forEach(group => {
        if (i < group.rewards.length) {
          const rewardsSlice = group.rewards.slice(0, i + 1);
          const ci = meanConfidenceInterval(rewardsSlice);

          point[`${group.name}`] = ci.mean;
          point[`${group.name}_lower`] = ci.lower;
          point[`${group.name}_upper`] = ci.upper;
          point[`${group.name}_n`] = ci.n;
        }
      });

      data.push(point);
    }

    return data;
  }, [groups]);

  // Compute Y-axis domain from all data points
  const yDomain = useMemo(() => {
    if (chartData.length === 0) return [0, 1];

    let min = Infinity;
    let max = -Infinity;

    chartData.forEach(point => {
      groups.forEach(group => {
        const lower = point[`${group.name}_lower`];
        const upper = point[`${group.name}_upper`];
        const value = point[`${group.name}`];

        if (lower !== undefined && lower < min) min = lower;
        if (upper !== undefined && upper > max) max = upper;
        if (value !== undefined) {
          if (value < min) min = value;
          if (value > max) max = value;
        }
      });
    });

    if (min === Infinity || max === -Infinity) return [0, 1];

    // Add padding
    const padding = (max - min) * 0.1 || 0.5;
    return [min - padding, max + padding];
  }, [chartData, groups]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload) return null;

    return (
      <div className="bg-white border rounded-lg shadow-lg p-3">
        <p className="font-semibold mb-2">Test {label}</p>
        {payload.map((entry: any, index: number) => {
          const group = groups.find(g => g.name === entry.name);
          if (!group) return null;

          const dataPoint = chartData[label - 1];
          const lower = dataPoint[`${group.name}_lower`];
          const upper = dataPoint[`${group.name}_upper`];
          const n = dataPoint[`${group.name}_n`];

          return (
            <div key={index} className="text-sm py-1">
              <div style={{ color: entry.color }} className="font-medium">
                {entry.name}: {entry.value.toFixed(3)}
              </div>
              <div className="text-xs text-muted-foreground ml-4">
                CI: [{lower.toFixed(3)}, {upper.toFixed(3)}]
              </div>
              <div className="text-xs text-muted-foreground ml-4">
                n = {n}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <CardTitle>Mean Reward</CardTitle>
      </CardHeader>
      <CardContent>
        {chartData.length > 0 ? (
          <>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis
                  dataKey="testNumber"
                  label={{ value: 'Number of Tests', position: 'insideBottom', offset: -5 }}
                />
                <YAxis
                  domain={yDomain}
                  label={{ value: 'Mean Reward', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => value.toFixed(2)}
                />
                <Tooltip content={<CustomTooltip />} />

                {groups.map(group => (
                  <Line
                    key={group.name}
                    type="monotone"
                    dataKey={group.name}
                    stroke={group.color}
                    strokeWidth={3}
                    dot={{ fill: group.color, strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                    name={group.name}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-4 text-xs text-muted-foreground text-center">
              Hover over the chart to see 95% confidence intervals for each point
            </div>
          </>
        ) : (
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            Waiting for reward data...
          </div>
        )}

        {/* Group Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {groups.map(group => {
            const ci = meanConfidenceInterval(group.rewards);

            return (
              <div key={group.name} className="border rounded-lg p-4">
                <div className="font-semibold text-sm mb-2" style={{ color: group.color }}>
                  {group.name}
                </div>
                <div className="text-2xl font-bold mb-2">
                  {ci.n > 0 ? ci.mean.toFixed(3) : '—'}
                  <span className="text-sm text-muted-foreground ml-2">
                    (n={ci.n})
                  </span>
                </div>
                {ci.n > 1 && (
                  <>
                    <div className="text-sm text-muted-foreground mb-1">
                      SD: {ci.stdDev.toFixed(3)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      95% CI: [{ci.lower.toFixed(3)}, {ci.upper.toFixed(3)}]
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
