// PassRatePanel.tsx - SIMPLER, MORE RELIABLE VERSION
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useMemo } from "react";
import { EmuConfidenceInterval, EmuGroupData } from "@/shared/types/experiments";

interface PassRatePanelProps {
  groups: EmuGroupData[];
}

function wilsonCI(successes: number, n: number): EmuConfidenceInterval {
  if (n === 0) return { rate: 0, lower: 0, upper: 0 };
  
  const pHat = successes / n;
  const z = 1.96; // 95% confidence
  
  const denominator = 1 + z * z / n;
  const centre = (pHat + z * z / (2 * n)) / denominator;
  const adjustment = z * Math.sqrt((pHat * (1 - pHat) + z * z / (4 * n)) / n) / denominator;
  
  return {
    rate: pHat,
    lower: Math.max(0, centre - adjustment),
    upper: Math.min(1, centre + adjustment)
  };
}

export function ExperimentPassRatePanel({ groups }: PassRatePanelProps) {
  const chartData = useMemo(() => {
    const maxLength = Math.max(...groups.map(g => g.results.length));
    if (maxLength === 0) return [];
    
    const data: any[] = [];
    
    for (let i = 0; i < maxLength; i++) {
      const point: any = { testNumber: i + 1 };
      
      groups.forEach(group => {
        if (i < group.results.length) {
          const resultsSlice = group.results.slice(0, i + 1);
          const successes = resultsSlice.filter(r => r).length;
          const ci = wilsonCI(successes, i + 1);
          
          point[`${group.name}`] = ci.rate * 100;
          point[`${group.name}_lower`] = ci.lower * 100;
          point[`${group.name}_upper`] = ci.upper * 100;
        }
      });
      
      data.push(point);
    }
    
    return data;
  }, [groups]);

  // Custom tooltip that shows confidence intervals
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
          
          return (
            <div key={index} className="text-sm py-1">
              <div style={{ color: entry.color }} className="font-medium">
                {entry.name}: {entry.value.toFixed(1)}%
              </div>
              <div className="text-xs text-muted-foreground ml-4">
                CI: [{lower.toFixed(1)}%, {upper.toFixed(1)}%]
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
        <CardTitle>Pass Rates</CardTitle>
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
                  domain={[0, 100]}
                  label={{ value: 'Pass Rate (%)', angle: -90, position: 'insideLeft' }}
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
            
            {/* Visual CI indicators below chart */}
            <div className="mt-4 text-xs text-muted-foreground text-center">
              Hover over the chart to see 95% confidence intervals for each point
            </div>
          </>
        ) : (
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            Waiting for test data...
          </div>
        )}
        
        {/* Group Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {groups.map(group => {
            const successes = group.results.filter(r => r).length;
            const total = group.results.length;
            const rate = total > 0 ? (successes / total) * 100 : 0;
            const ci = wilsonCI(successes, total);
            
            return (
              <div key={group.name} className="border rounded-lg p-4">
                <div className="font-semibold text-sm mb-2" style={{ color: group.color }}>
                  {group.name}
                </div>
                <div className="text-2xl font-bold mb-2">
                  {successes}/{total} <span className="text-lg text-muted-foreground">({rate.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${rate}%`,
                      backgroundColor: group.color
                    }}
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  95% CI: {(ci.lower * 100).toFixed(1)}% - {(ci.upper * 100).toFixed(1)}%
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}