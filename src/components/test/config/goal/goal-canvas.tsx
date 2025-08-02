import { GoalCanvasItem } from "@/components/test/config/goal/goal-canvas-item";
import { CanvasItem } from "@/components/test/config/goal/goal-config";
import { useDroppable } from "@dnd-kit/core";

export function GoalCanvas({ items }: { items: CanvasItem[] }) {
  const { setNodeRef } = useDroppable({ id: 'canvas' });
  
  return (
    <div 
      ref={setNodeRef}
      className="relative w-full h-[600px] overflow-auto border"
    >
      {items.map(item => (
        <GoalCanvasItem
          key={item.id}
          canvasItem={item}
        />
      ))}
    </div>
  );
}
