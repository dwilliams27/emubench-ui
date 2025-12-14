import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import type { EmuLogBlock } from "@/shared/types";
import { toolToLog } from "@/utils/tools";
import { ControllerInputDisplay } from "@/components/controller/controller-input-display";

export interface ActiveTestLogsProps {
  testStarted: boolean;
  messages?: EmuLogBlock[] | null;
}

export function ActiveTestLogs({ testStarted, messages }: ActiveTestLogsProps) {
  const renderLogBlock = (block: EmuLogBlock) => {
    return (
      <div key={block.title} className="break-words border-2 rounded-2xl p-2 items-center flex flex-col">
        <p>{block.title}</p>
        <Separator className="my-1"/>
        <div className="space-y-2">
          { block.logs.map((log) => {
            switch (log.metadata.type) {
              case ('message'): {
                return (
                  <p className="" key={log.metadata.timestamp}>{log.text}</p>
                );
              }
              case ('tool-call'): {
                if (log.metadata.toolName === 'sendControllerInput') {
                  return (
                    <div key={log.metadata.timestamp}>
                      <ControllerInputDisplay inputs={log.metadata.toolPayload} />
                    </div>
                  );
                }
                return (
                  <div key={log.metadata.timestamp}>
                    <p className="whitespace-pre-line">{toolToLog(log.metadata.toolName, log.metadata.toolPayload)}</p>
                  </div>
                )
              }
            }
          }) }
        </div>
      </div>
    )
  };

  return (
    <Card className="w-full md:w-1/3">
      <CardHeader>
        <CardTitle>Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full min-h-96 h-[600px] flex flex-col overflow-y-scroll space-y-2">
          {messages?.length && messages.length > 0
            ? (
              messages.map((message) => (
                renderLogBlock(message))
            )) : (
              (testStarted && <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] rounded-xl" />
                <Skeleton className="h-[125px] rounded-xl" />
                <Skeleton className="h-[125px] rounded-xl" />
                <Skeleton className="h-[125px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4" />
                </div>
              </div>)
            )
          }
        </div>
      </CardContent>
    </Card>
  );
}
