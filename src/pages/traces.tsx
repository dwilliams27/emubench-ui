import { TraceResults } from "@/components/traces/trace-results";
import { TraceSearch } from "@/components/traces/trace-search";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApi } from "@/contexts/api-context";
import { EmuGetTraceLogsResponse, EmuTrace } from "@/shared/types";
import { useState } from "react";

export default function Traces() {
  const { api } = useApi();
  const [traces, setTraces] = useState<EmuTrace[]>([]);

  const fetchTraceLogs = async (id: string) => {
    let response: [EmuGetTraceLogsResponse, number];
    try {
      response = await api.getTrace(id);
    } catch (error) {
      console.log('[Trace] Unable to fetch trace: ', error);
      return;
    }
    setTraces(response[0]?.traces || []);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <TraceSearch search={(id: string) => fetchTraceLogs(id)} />
          <TraceResults traces={traces} />
        </CardContent>
      </Card>
    </div>
  )
}
