import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EmuLogBlock } from "@/constants/shared";
import { useEffect, useRef } from "react";

export interface ActiveTestChatProps {
  messages: EmuLogBlock[];
}

export function ActiveTestChat({ messages }: ActiveTestChatProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!chatContainerRef.current) return;
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages.length]);

  const recentMessages = messages.slice(messages.length - 10);

  return (
    <Card className="min-h-96 w-1/3">
      <CardHeader>
        <CardTitle>Agent Logs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div ref={chatContainerRef} className="max-h-full w-full flex flex-col overflow-y-scroll">
          {recentMessages.length > 0
            ? (
              recentMessages.map((message, index) => (
                message.logs.map((log, logIndex) => (
                  <h3 key={`${index}:${logIndex}`} className="text-gray-100 break-words">{log.text}</h3>
                ))
            ))) : (
              <h3>No messages yet</h3>
            )
          }
        </div>
      </CardContent>
    </Card>
  );
}
