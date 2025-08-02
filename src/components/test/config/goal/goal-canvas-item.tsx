import { CanvasItem } from "@/components/test/config/goal/goal-config";
import { cn } from "@/lib/utils";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function GoalCanvasItem({ canvasItem, onSelect }: { canvasItem: CanvasItem, onSelect?: (id: string) => void }) {
  const { 
    attributes, 
    listeners, 
    setNodeRef, 
    transform,
    isDragging
  } = useDraggable(canvasItem);

  const style = {
    position: 'absolute',
    left: `${canvasItem.x}px`,
    top: `${canvasItem.y}px`,
    width: canvasItem.width ? `${canvasItem.width}px` : 'auto',
    height: canvasItem.height ? `${canvasItem.height}px` : 'auto',
    transform: CSS.Transform.toString(transform),
    zIndex: isDragging ? 1000 : 1,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style as any}
      {...listeners}
      {...attributes}
      onClick={() => onSelect?.(canvasItem.id)}
      className={cn(
        "bg-white border-2 rounded-lg shadow-md transition-all",
        "hover:shadow-lg"
      )}
    >
      {canvasItem.data.label}
    </div>
  );
}