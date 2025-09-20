import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EmuReqTraceLog } from "@/shared/types";

export interface TraceResultsProps {
  results: EmuReqTraceLog[] | undefined;
}

export function TraceResults({ results }: TraceResultsProps) {
  const renderLogBlock = (log: EmuReqTraceLog) => {
    return (
      <div key={log.id} className="break-words border-2 rounded-2xl p-2">
        <p>{log.message}</p>
      </div>
    )
  };

  return (
    <div className="w-full min-h-96 h-[600px] flex flex-col overflow-y-scroll space-y-2">
      {results?.length && results.length > 0
        ? (
          results.map((result) => (
            renderLogBlock(result))
        )) : (
          <h3>-</h3>
        )
      }
    </div>
  );
}
