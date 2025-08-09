import { GoalCanvasItem } from "@/components/test/config/goal/goal-canvas-item";
import { CanvasItem } from "@/components/test/config/goal/goal-config";
import { useDroppable } from "@dnd-kit/core";

export function GoalCanvas({ items, error, result }: { items: CanvasItem[], error?: string, result?: any }) {
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas' });
  
  const getBorderColor = () => {
    if (isOver) return 'border-blue-500 bg-blue-50';
    if (error) return 'border-red-500 bg-red-50';
    if (result) return 'border-green-500 bg-green-50';
    return 'border-gray-300 bg-gray-50';
  };
  
  return (
    <div 
      ref={setNodeRef}
      id="goal-canvas"
      className={`relative w-full h-[80px] border-2 border-dashed transition-colors ${getBorderColor()}`}
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
