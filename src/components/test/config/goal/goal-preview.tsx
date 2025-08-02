import { CanvasItem } from "@/components/test/config/goal/goal-config";
import { useMemo } from "react";

export function GoalPreview({ items }: { items: CanvasItem[] }) {
  const preview = useMemo(() => {
    const sorted = items.slice().sort((a, b) => a.x - b.x);
    return sorted.map(item => item.data.label).join(' ');
  }, [items]);

  return (
    <div className="goal-preview">
      {items.length > 0 ? preview : "No Goal set"}
    </div>
  );
}
