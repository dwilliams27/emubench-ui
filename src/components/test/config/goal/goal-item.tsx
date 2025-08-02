import { BankItem } from '@/components/test/config/goal/goal-config';
import { useDraggable, useDroppable } from '@dnd-kit/core';

export function GoalItem({ item }: { item: BankItem }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: item.id,
    data: item.data
  });

  return (
    <div 
      ref={setNodeRef} 
      {...listeners} 
      {...attributes}
      className={`p-2 border ${!item.data.input && !item.data.primitiveValue ? 'w-10 rounded-full aspect-square flex items-center justify-center' : 'rounded'} bg-white shadow cursor-grab active:cursor-grabbing touch-none`}
    >
      {item.data.label}
    </div>
  );
}
