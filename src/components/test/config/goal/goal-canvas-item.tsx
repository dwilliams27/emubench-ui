import { CanvasItem } from "@/components/test/config/goal/goal-config";
import { useDraggable } from "@dnd-kit/core";

export function GoalCanvasItem({ canvasItem, onSelect }: { canvasItem: CanvasItem, onSelect?: (id: string) => void }) {
  const { 
    attributes, 
    listeners, 
    setNodeRef,
    isDragging
  } = useDraggable({
    id: canvasItem.id,
    data: canvasItem.data
  });

  const style = {
    position: 'absolute' as const,
    left: `${canvasItem.x}px`,
    top: `${canvasItem.y}px`,
    zIndex: isDragging ? 1000 : 1,
    opacity: isDragging ? 0.5 : 1,
    touchAction: 'none' as const
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={() => onSelect?.(canvasItem.id)}
      className={`p-2 border ${!canvasItem.data.input && !canvasItem.data.primitiveValue ? 'w-10 rounded-full aspect-square flex items-center justify-center' : 'rounded'} bg-white shadow cursor-grab active:cursor-grabbing`}
    >
      {canvasItem.data.label}
    </div>
  );
}