import { emuEvaluateCondition } from '@/utils/conditions/evaluate';
import { emuAddOperation } from '@/utils/conditions/operations';
import type { EmuCondition } from '@/utils/conditions/types';
import { describe, it, expect } from 'vitest';

describe("EmuConditionInput", () => {
  it("1+1", () => {
    const condition: EmuCondition = {
      inputs: {
        a: {
          type: "int",
          pointerDepth: 0,
          rawValue: "00000001",
        },
        b: {
          type: "int",
          pointerDepth: 0,
          rawValue: "00000001",
        }
      },
      logic: {
        lhs: { inputName: "a" },
        rhs: { inputName: "b" },
        operation: emuAddOperation(),
      }
    }
    expect(emuEvaluateCondition(condition)).toBe(2);
  });
});
