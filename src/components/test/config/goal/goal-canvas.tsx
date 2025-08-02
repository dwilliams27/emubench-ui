import { GoalCanvasItem } from "@/components/test/config/goal/goal-canvas-item";
import { CanvasItem } from "@/components/test/config/goal/goal-config";
import { useDroppable } from "@dnd-kit/core";

export function GoalCanvas({ items }: { items: CanvasItem[] }) {
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas' });
  
  return (
    <div 
      ref={setNodeRef}
      id="goal-canvas"
      className={`relative w-full h-[80px] border-2 border-dashed transition-colors ${
        isOver 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-300 bg-gray-50'
      }`}
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
