import { TestHistoryItem } from "@/components/test/history/test-history-item";
import type { Test } from "@/constants/games";

export interface TestHistoryListProps {
  tests: Test[];
};

export function TestHistoryList({ tests }: TestHistoryListProps) {
  return (
    <div className="space-y-2">
      {
        tests.map((test) => (
          <TestHistoryItem test={test} />
        ))
      }
    </div>
  );
};
