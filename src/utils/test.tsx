import { Badge } from "@/components/ui/badge";

export function testStatusToBadge(testStatus?: string) {
  if (testStatus === 'starting') {
    return (
      <Badge variant="outline">
        Starting
      </Badge>
    );
  }

  if (testStatus === 'booting') {
    return (
      <Badge variant="outline">
        Booting
      </Badge>
    );
  }

  if (testStatus === 'ready' || testStatus === 'emulator-ready') {
    return (
      <Badge variant="outline">
        Ready
      </Badge>
    );
  }

  if (testStatus === 'running') {
    return (
      <Badge variant="default">
        Running
      </Badge>
    );
  }

  if (testStatus === 'finished') {
    return (
      <Badge variant="default">
        Finished
      </Badge>
    );
  }

  if (testStatus === 'error') {
    return (
      <Badge variant="destructive">
        Error
      </Badge>
    );
  }

  return (
    <Badge variant="outline">
      -
    </Badge>
  );
}
