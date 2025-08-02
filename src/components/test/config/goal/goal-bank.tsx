import { BankItem } from "@/components/test/config/goal/goal-config";
import { GoalItem } from "@/components/test/config/goal/goal-item";

export function GoalBank({ items }: { items: BankItem[] }) {
  return (
    <div className="flex flex-row space-x-2">
      {items.map(item => (
        <GoalItem key={item.id} item={item} />
      ))}
    </div>
  );
}
