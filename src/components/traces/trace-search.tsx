import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function TraceSearch({ search }: { search: (traceId: string) => void }) {
  const [traceId, setTraceId] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (traceId.trim()) {
      search(traceId.trim());
    }
  };

  return (
    <form onSubmit={onSubmit} className="mb-4 flex flex-row space-x-4">
      <Input
        type="text"
        value={traceId}
        onChange={(e) => setTraceId(e.target.value)}
        placeholder="Enter Trace ID"
        className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button type="submit">
        Search
      </Button>
    </form>
  );
};
