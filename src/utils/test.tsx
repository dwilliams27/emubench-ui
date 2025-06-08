import { Badge } from "@/components/ui/badge";
import type { Test } from "@/constants/games";

export function testToBadge(test: Test) {
  if (!test.setup && !test.started) {
    return (
      <Badge variant="outline">
        Initializing
      </Badge>
    );
  }

  if (test.setup && !test.started) {
    return (
      <Badge variant="default">
        Queued
      </Badge>
    );
  }

  if (!test.result) {
    return (
      <Badge variant="default">
        Running
      </Badge>
    );
  } else {
    return (
      <Badge variant="secondary">
        Finished
      </Badge>
    );
  }
}

export function testResultToBadge(test: Test) {
  if (!test.result) {
    return (
      <Badge variant="outline">
        In progress
      </Badge>
    );
  }

  if (test.result.outcome === "pass") {
    return (
      <Badge variant="default">
        Pass
      </Badge>
    );
  }
  return (
    <Badge variant="destructive">
      Fail
    </Badge>
  );
}
