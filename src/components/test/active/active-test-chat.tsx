import { useEffect, useRef } from "react";

export interface TestChatSegment {
  text: string;
  type: "toolCall" | "message";
  author: string;
};

export interface ActiveTestChatProps {
  messages: TestChatSegment[];
};

export function ActiveTestChat({ messages }: ActiveTestChatProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!chatContainerRef.current) return;

    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, chatContainerRef]);

  return (
    <div ref={chatContainerRef} className="h-72 p-2 flex flex-col overflow-y-scroll">
      {messages.map((message) => (
        message.type === "message" ? (
          <h3 className="text-gray-100">{message.author}: {message.text}</h3>
        ) : (
          <h3 className="text-gray-400">{message.author}: {message.text}</h3>
        )
      ))} 
    </div>
  );
};
