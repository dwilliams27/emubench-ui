import { EmuHistoryAtom } from "@/shared/types/test-result";

export function HistoryLogView({ items }: { items: EmuHistoryAtom[] }) {
  return (
    <div className="flex-1 w-full min-h-96 h-[600px] overflow-y-scroll space-y-2">
      <div className="font-mono text-sm bg-gray-100 space-y-2">
        {items.map((item) => (
          <div key={item.id} className="whitespace-pre-wrap break-words border-2 rounded-2xl p-2">
            {item.log?.text}
          </div>
        ))}
      </div>
    </div>
  );
}