/**
 * Statistical utility functions for experiment analysis
 */

// T-distribution critical values for 95% confidence intervals (two-tailed)
// df -> t-value at 0.975 quantile
const T_VALUES: Record<number, number> = {
  1: 12.706, 2: 4.303, 3: 3.182, 4: 2.776, 5: 2.571,
  6: 2.447, 7: 2.365, 8: 2.306, 9: 2.262, 10: 2.228,
  11: 2.201, 12: 2.179, 13: 2.160, 14: 2.145, 15: 2.131,
  16: 2.120, 17: 2.110, 18: 2.101, 19: 2.093, 20: 2.086,
  21: 2.080, 22: 2.074, 23: 2.069, 24: 2.064, 25: 2.060,
  26: 2.056, 27: 2.052, 28: 2.048, 29: 2.045, 30: 2.042,
};

/**
 * Get t-value for given degrees of freedom (95% CI)
 */
export function getTValue(df: number): number {
  if (df >= 30) return 1.96; // Normal approximation
  if (df <= 0) return 12.706; // Use df=1 for edge cases

  // Find closest df in table
  const dfRounded = Math.round(df);
  if (T_VALUES[dfRounded]) return T_VALUES[dfRounded];

  // Interpolate for values not in table
  const keys = Object.keys(T_VALUES).map(Number).sort((a, b) => a - b);
  const lower = keys.filter(k => k < dfRounded).pop() || 1;
  const upper = keys.find(k => k > dfRounded) || 30;

  const ratio = (dfRounded - lower) / (upper - lower);
  return T_VALUES[lower] + ratio * (T_VALUES[upper] - T_VALUES[lower]);
}

/**
 * Calculate mean of an array
 */
export function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

/**
 * Calculate variance (sample variance by default)
 */
export function variance(values: number[], sample: boolean = true): number {
  if (values.length < 2) return 0;
  const m = mean(values);
  const divisor = sample ? values.length - 1 : values.length;
  return values.reduce((sum, v) => sum + Math.pow(v - m, 2), 0) / divisor;
}

/**
 * Calculate standard deviation
 */
export function stdDev(values: number[], sample: boolean = true): number {
  return Math.sqrt(variance(values, sample));
}

/**
 * Calculate percentile of sorted array
 */
export function percentile(sortedValues: number[], p: number): number {
  if (sortedValues.length === 0) return 0;
  if (sortedValues.length === 1) return sortedValues[0];

  const index = (p / 100) * (sortedValues.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);

  if (lower === upper) return sortedValues[lower];

  // Linear interpolation
  return sortedValues[lower] + (index - lower) * (sortedValues[upper] - sortedValues[lower]);
}

export interface MeanCI {
  mean: number;
  lower: number;
  upper: number;
  stdDev: number;
  stdError: number;
  n: number;
}

/**
 * Calculate mean with 95% confidence interval using t-distribution
 */
export function meanConfidenceInterval(values: number[]): MeanCI {
  const n = values.length;

  if (n === 0) {
    return { mean: 0, lower: 0, upper: 0, stdDev: 0, stdError: 0, n: 0 };
  }

  if (n === 1) {
    return {
      mean: values[0],
      lower: values[0],
      upper: values[0],
      stdDev: 0,
      stdError: 0,
      n: 1
    };
  }

  const m = mean(values);
  const sd = stdDev(values, true);
  const se = sd / Math.sqrt(n);
  const t = getTValue(n - 1);

  return {
    mean: m,
    lower: m - t * se,
    upper: m + t * se,
    stdDev: sd,
    stdError: se,
    n
  };
}

export interface PermutationResult {
  observedDiff: number;
  pValue: number;
  permutations: number;
  group1Mean: number;
  group2Mean: number;
}

/**
 * Permutation test for comparing means of two groups
 * Uses two-tailed test
 */
export function permutationTest(
  group1: number[],
  group2: number[],
  numPermutations: number = 10000
): PermutationResult {
  if (group1.length === 0 || group2.length === 0) {
    return {
      observedDiff: 0,
      pValue: 1,
      permutations: 0,
      group1Mean: group1.length > 0 ? mean(group1) : 0,
      group2Mean: group2.length > 0 ? mean(group2) : 0
    };
  }

  const combined = [...group1, ...group2];
  const n1 = group1.length;
  const group1Mean = mean(group1);
  const group2Mean = mean(group2);
  const observedDiff = group1Mean - group2Mean;

  let extremeCount = 0;

  for (let i = 0; i < numPermutations; i++) {
    // Fisher-Yates shuffle
    const shuffled = [...combined];
    for (let j = shuffled.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [shuffled[j], shuffled[k]] = [shuffled[k], shuffled[j]];
    }

    const permGroup1 = shuffled.slice(0, n1);
    const permGroup2 = shuffled.slice(n1);
    const permDiff = mean(permGroup1) - mean(permGroup2);

    // Two-tailed test: count if abs(permDiff) >= abs(observedDiff)
    if (Math.abs(permDiff) >= Math.abs(observedDiff)) {
      extremeCount++;
    }
  }

  return {
    observedDiff,
    pValue: extremeCount / numPermutations,
    permutations: numPermutations,
    group1Mean,
    group2Mean
  };
}

export interface BoxPlotStats {
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  outliers: number[];
  iqr: number;
}

/**
 * Calculate box plot statistics
 */
export function boxPlotStats(values: number[]): BoxPlotStats {
  if (values.length === 0) {
    return { min: 0, q1: 0, median: 0, q3: 0, max: 0, outliers: [], iqr: 0 };
  }

  const sorted = [...values].sort((a, b) => a - b);

  const q1 = percentile(sorted, 25);
  const median = percentile(sorted, 50);
  const q3 = percentile(sorted, 75);
  const iqr = q3 - q1;

  const lowerFence = q1 - 1.5 * iqr;
  const upperFence = q3 + 1.5 * iqr;

  const outliers = sorted.filter(v => v < lowerFence || v > upperFence);
  const inRange = sorted.filter(v => v >= lowerFence && v <= upperFence);

  return {
    min: inRange.length > 0 ? inRange[0] : q1,
    q1,
    median,
    q3,
    max: inRange.length > 0 ? inRange[inRange.length - 1] : q3,
    outliers,
    iqr
  };
}
