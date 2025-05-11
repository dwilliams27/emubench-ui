export function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <div className="flex items-center h-16 ml-4 mt-2">
        <img 
          src="/emubench.svg" 
          alt="EmuBench Logo" 
          width={36} 
          height={36} 
        />
        <h2 className="text-2xl ml-2">EmuBench</h2>
      </div>
    </div>
  );
}
