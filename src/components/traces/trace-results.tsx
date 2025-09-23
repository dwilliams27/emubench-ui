import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EmuTrace, EmuTraceLog } from "@/shared/types";

export interface TraceResultsProps {
  traces: EmuTrace[] | undefined;
}

export function TraceResults({ traces }: TraceResultsProps) {
  const renderLogBlock = (log: EmuTraceLog) => {
    return (
      <div key={log.id} className="break-words border-2 rounded-2xl p-2">
        <p>{log.message}</p>
      </div>
    )
  };

  const renderTrace = (trace: EmuTrace) => {
    if (trace.logs.length === 0) {
      return null;
    }
    return (
      <div key={trace.id} className="break-words border-2 rounded-2xl p-2 space-y-2">
        <p>{trace.id}</p>
        {trace.logs.map((log) => renderLogBlock(log))}
      </div>
    )
  };

  return (
    <div className="w-full min-h-96 h-[600px] flex flex-col overflow-y-scroll space-y-2">
      {traces?.length && traces.length > 0
        ? (
          traces.map((trace) => (
            renderTrace(trace))
        )) : (
          <h3>-</h3>
        )
      }
    </div>
  );
}
