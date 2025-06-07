import type { TestChatSegment } from "@/constants/games";
import { useEffect, useRef } from "react";

export interface ActiveTestChatProps {
  messages: TestChatSegment[];
}

export function ActiveTestChat({ messages }: ActiveTestChatProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!chatContainerRef.current) return;
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages.length]);

  return (
    <div ref={chatContainerRef} className="max-h-full p-2 flex flex-col overflow-y-scroll">
      {messages.slice(messages.length - 10).map((message, index) => (
        message.type === "message" ? (
          <h3 key={`${index}-${message.text.slice(0, 10)}`} className="text-gray-100 break-words">{message.author}: {message.text}</h3>
        ) : (
          <h3 key={`${index}-${message.text.slice(0, 10)}`} className="text-gray-400 break-words">{message.author}: {message.text}</h3>
        )
      ))} 
    </div>
  );
}
