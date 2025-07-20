import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EmuLogBlock } from "@/constants/shared";
import { useEffect, useRef } from "react";

export interface ActiveTestChatProps {
  messages: EmuLogBlock[] | undefined;
}

export function ActiveTestChat({ messages }: ActiveTestChatProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const renderLogBlock = (block: EmuLogBlock) => {
    return (
      <div key={block.title} className="break-words">
        <p>{block.title}</p>
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
                  <p>Tool: {log.metadata.toolName}</p>
                  <p>{JSON.stringify(log.metadata.toolPayload)}</p>
                </div>
              )
            }
          }
        }) }
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
        <div ref={chatContainerRef} className="max-h-[500px] w-full flex flex-col overflow-y-scroll">
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
