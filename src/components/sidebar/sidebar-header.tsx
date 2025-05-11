import { Anvil } from "lucide-react";

export function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <div className="flex items-center h-16 ml-4">
        <Anvil size={36} opacity={1} />
        <h2 className="text-2xl ml-2">EmuBench</h2>
      </div>
    </div>
  );
}
