import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import { EmuGroupData } from "@/shared/types/experiments";
import { boxPlotStats, BoxPlotStats, mean } from "@/utils/statistics";

interface DistributionPanelProps {
  groups: EmuGroupData[];
}

interface BoxPlotData extends BoxPlotStats {
  name: string;
  color: string;
  mean: number;
  n: number;
}

export function ExperimentDistributionPanel({ groups }: DistributionPanelProps) {
  const boxPlotData = useMemo(() => {
    return groups.map(group => ({
      ...boxPlotStats(group.rewards),
      name: group.name,
      color: group.color,
      mean: mean(group.rewards),
      n: group.rewards.length
    }));
  }, [groups]);

  // Calculate global min/max for consistent scale
  const { globalMin, globalMax } = useMemo(() => {
    let min = Infinity;
    let max = -Infinity;

    boxPlotData.forEach(data => {
      if (data.n === 0) return;

      // Include whiskers and outliers in range
      min = Math.min(min, data.min, ...data.outliers);
      max = Math.max(max, data.max, ...data.outliers);
    });

    if (min === Infinity) return { globalMin: 0, globalMax: 1 };

    // Add padding
    const padding = (max - min) * 0.1 || 0.5;
    return { globalMin: min - padding, globalMax: max + padding };
  }, [boxPlotData]);

  const hasData = boxPlotData.some(d => d.n > 0);

  if (!hasData) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Reward Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center text-muted-foreground">
            Waiting for reward data...
          </div>
        </CardContent>
      </Card>
    );
  }

  // SVG dimensions
  const width = 800;
  const height = 300;
  const margin = { top: 20, right: 40, bottom: 40, left: 80 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (value: number) => {
    return margin.left + ((value - globalMin) / (globalMax - globalMin)) * plotWidth;
  };

  // Calculate box positions
  const boxHeight = Math.min(60, (plotHeight - 20) / groups.length);
  const boxGap = (plotHeight - boxHeight * groups.length) / (groups.length + 1);

  const getBoxY = (index: number) => {
    return margin.top + boxGap + index * (boxHeight + boxGap);
  };

  // Generate tick values for x-axis
  const tickCount = 6;
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    return globalMin + (i / (tickCount - 1)) * (globalMax - globalMin);
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Reward Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[600px]">
            {/* X-axis */}
            <line
              x1={margin.left}
              y1={height - margin.bottom}
              x2={width - margin.right}
              y2={height - margin.bottom}
              stroke="#e5e7eb"
              strokeWidth={1}
            />

            {/* X-axis ticks and labels */}
            {ticks.map((tick, i) => (
              <g key={i}>
                <line
                  x1={xScale(tick)}
                  y1={height - margin.bottom}
                  x2={xScale(tick)}
                  y2={height - margin.bottom + 5}
                  stroke="#9ca3af"
                  strokeWidth={1}
                />
                <text
                  x={xScale(tick)}
                  y={height - margin.bottom + 20}
                  textAnchor="middle"
                  fontSize={12}
                  fill="#6b7280"
                >
                  {tick.toFixed(2)}
                </text>
              </g>
            ))}

            {/* X-axis label */}
            <text
              x={width / 2}
              y={height - 5}
              textAnchor="middle"
              fontSize={12}
              fill="#374151"
            >
              Reward Value
            </text>

            {/* Grid lines */}
            {ticks.map((tick, i) => (
              <line
                key={`grid-${i}`}
                x1={xScale(tick)}
                y1={margin.top}
                x2={xScale(tick)}
                y2={height - margin.bottom}
                stroke="#f3f4f6"
                strokeWidth={1}
              />
            ))}

            {/* Box plots */}
            {boxPlotData.map((data, index) => {
              if (data.n === 0) return null;

              const y = getBoxY(index);
              const boxMidY = y + boxHeight / 2;

              return (
                <g key={data.name}>
                  {/* Group label */}
                  <text
                    x={margin.left - 10}
                    y={boxMidY}
                    textAnchor="end"
                    dominantBaseline="middle"
                    fontSize={12}
                    fill={data.color}
                    fontWeight="500"
                  >
                    {data.name}
                  </text>

                  {/* Whisker line (min to max) */}
                  <line
                    x1={xScale(data.min)}
                    y1={boxMidY}
                    x2={xScale(data.max)}
                    y2={boxMidY}
                    stroke={data.color}
                    strokeWidth={1}
                  />

                  {/* Min whisker cap */}
                  <line
                    x1={xScale(data.min)}
                    y1={y + boxHeight * 0.25}
                    x2={xScale(data.min)}
                    y2={y + boxHeight * 0.75}
                    stroke={data.color}
                    strokeWidth={2}
                  />

                  {/* Max whisker cap */}
                  <line
                    x1={xScale(data.max)}
                    y1={y + boxHeight * 0.25}
                    x2={xScale(data.max)}
                    y2={y + boxHeight * 0.75}
                    stroke={data.color}
                    strokeWidth={2}
                  />

                  {/* Box (Q1 to Q3) */}
                  <rect
                    x={xScale(data.q1)}
                    y={y + boxHeight * 0.1}
                    width={Math.max(0, xScale(data.q3) - xScale(data.q1))}
                    height={boxHeight * 0.8}
                    fill={data.color}
                    fillOpacity={0.2}
                    stroke={data.color}
                    strokeWidth={2}
                    rx={2}
                  />

                  {/* Median line */}
                  <line
                    x1={xScale(data.median)}
                    y1={y + boxHeight * 0.1}
                    x2={xScale(data.median)}
                    y2={y + boxHeight * 0.9}
                    stroke={data.color}
                    strokeWidth={3}
                  />

                  {/* Mean marker (diamond) */}
                  <polygon
                    points={`
                      ${xScale(data.mean)},${y + boxHeight * 0.2}
                      ${xScale(data.mean) + 6},${boxMidY}
                      ${xScale(data.mean)},${y + boxHeight * 0.8}
                      ${xScale(data.mean) - 6},${boxMidY}
                    `}
                    fill="white"
                    stroke={data.color}
                    strokeWidth={2}
                  />

                  {/* Outliers */}
                  {data.outliers.map((outlier, i) => (
                    <circle
                      key={i}
                      cx={xScale(outlier)}
                      cy={boxMidY}
                      r={4}
                      fill="white"
                      stroke={data.color}
                      strokeWidth={2}
                    />
                  ))}

                  {/* Sample size label */}
                  <text
                    x={width - margin.right + 10}
                    y={boxMidY}
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontSize={11}
                    fill="#6b7280"
                  >
                    n={data.n}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-gray-400 bg-gray-100 rounded-sm" />
            <span>Box: Q1 to Q3</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-[3px] bg-gray-400" />
            <span>Median</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <polygon
                points="6,0 12,6 6,12 0,6"
                fill="white"
                stroke="#9ca3af"
                strokeWidth="2"
              />
            </svg>
            <span>Mean</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="4" fill="white" stroke="#9ca3af" strokeWidth="2" />
            </svg>
            <span>Outliers</span>
          </div>
        </div>

        {/* Summary Statistics Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4">Group</th>
                <th className="text-right py-2 px-2">n</th>
                <th className="text-right py-2 px-2">Min</th>
                <th className="text-right py-2 px-2">Q1</th>
                <th className="text-right py-2 px-2">Median</th>
                <th className="text-right py-2 px-2">Q3</th>
                <th className="text-right py-2 px-2">Max</th>
                <th className="text-right py-2 px-2">Mean</th>
                <th className="text-right py-2 pl-2">IQR</th>
              </tr>
            </thead>
            <tbody>
              {boxPlotData.map(data => (
                <tr key={data.name} className="border-b">
                  <td className="py-2 pr-4 font-medium" style={{ color: data.color }}>
                    {data.name}
                  </td>
                  <td className="text-right py-2 px-2">{data.n}</td>
                  <td className="text-right py-2 px-2">{data.n > 0 ? data.min.toFixed(3) : '—'}</td>
                  <td className="text-right py-2 px-2">{data.n > 0 ? data.q1.toFixed(3) : '—'}</td>
                  <td className="text-right py-2 px-2 font-medium">{data.n > 0 ? data.median.toFixed(3) : '—'}</td>
                  <td className="text-right py-2 px-2">{data.n > 0 ? data.q3.toFixed(3) : '—'}</td>
                  <td className="text-right py-2 px-2">{data.n > 0 ? data.max.toFixed(3) : '—'}</td>
                  <td className="text-right py-2 px-2">{data.n > 0 ? data.mean.toFixed(3) : '—'}</td>
                  <td className="text-right py-2 pl-2">{data.n > 0 ? data.iqr.toFixed(3) : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
