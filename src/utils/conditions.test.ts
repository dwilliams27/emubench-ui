import { describe, it, expect } from 'vitest';
import type { EmuConditionInput } from './conditions';

describe("EmuConditionInput", () => {
  it("should have a type, size, pointerDepth, and key", () => {
    const input: EmuConditionInput = {
      type: "int",
      size: 4,
      pointerDepth: 0,
      key: "testKey"
    };
    expect(input.type).toBe("int");
    expect(input.size).toBe(4);
    expect(input.pointerDepth).toBe(0);
    expect(input.key).toBe("testKey");
  });
  }
);