import { TraceResults } from "@/components/traces/trace-results";
import { TraceSearch } from "@/components/traces/trace-search";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApi } from "@/contexts/api-context";
import { EmuGetTraceLogsResponse, EmuReqTraceLog } from "@/shared/types";
import React, { useEffect } from "react";

export default function Traces() {
  const { api } = useApi();
  const [traceId, setTraceId] = React.useState<string>('');
  const [traceLogs, setTraceLogs] = React.useState<EmuReqTraceLog[]>([]);

  const fetchTraceLogs = async (id: string) => {
    let response: [EmuGetTraceLogsResponse, number];
    try {
      response = await api.getTrace(traceId);
    } catch (error) {
      console.log('[Trace] Unable to fetch trace: ', error);
      return;
    }
    setTraceLogs(response[0].logs);
  }

  useEffect(() => {
    if (!traceId) return;
    fetchTraceLogs(traceId);
  }, [traceId]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <TraceSearch search={(id: string) => setTraceId(id)} />
          <TraceResults results={traceLogs} />
        </CardContent>
      </Card>
    </div>
  )
}
