import { BankItem } from '@/components/test/config/goal/goal-config';
import { useDraggable, useDroppable } from '@dnd-kit/core';

export function GoalItem({ item }: { item: BankItem }) {
  const { attributes, listeners, setNodeRef } = useDraggable(item);
  const { setNodeRef: setDropRef, isOver } = useDroppable({
    id: `drp-${item.id}`,
    data: { canSnapTo: true }
  });

  return (
    <div 
      ref={setNodeRef} 
      {...listeners} 
      {...attributes}
      className="cursor-copy"
    >
      {item.data.label}
    </div>
  );
}
