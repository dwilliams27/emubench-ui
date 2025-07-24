import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { EmuLogBlock } from "@/constants/shared";
import { toolToLog } from "@/utils/tools";
import { useEffect, useRef } from "react";

export interface ActiveTestChatProps {
  messages: EmuLogBlock[] | undefined;
}

export function ActiveTestChat({ messages }: ActiveTestChatProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const renderLogBlock = (block: EmuLogBlock) => {
    return (
      <div key={block.title} className="break-words border-2 rounded-2xl p-2">
        <p>{block.title}</p>
        <Separator className="my-1"/>
        <div className="space-y-2">
          { block.logs.map((log) => {
            switch (log.metadata.type) {
              case ('message'): {
                return (
                  <p key={log.metadata.timestamp}>{log.text}</p>
                );
              }
              case ('tool-call'): {
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
  
  useEffect(() => {
    if (!chatContainerRef.current) return;
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <Card className="w-full min-h-96 md:w-1/3">
      <CardHeader>
        <CardTitle>Agent Logs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div ref={chatContainerRef} className="w-full flex flex-col overflow-y-scroll">
          {messages?.length && messages.length > 0
            ? (
              messages.map((message) => (
                renderLogBlock(message))
            )) : (
              <h3>No messages yet</h3>
            )
          }
        </div>
      </CardContent>
    </Card>
  );
}
