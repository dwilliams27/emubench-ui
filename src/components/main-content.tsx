import { SidebarTrigger } from "@/components/ui/sidebar";
import { useUIState } from "@/contexts/ui-state-context";
import { getTestTabIdForPath } from "@/utils/tab";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { Outlet, useLocation } from "react-router";

export function MainContent() {
  const location = useLocation();
  const { activeTab, setActiveTab } = useUIState();
  
  React.useEffect(() => {
    const currentPage = location.pathname;
    
    setActiveTab(getTestTabIdForPath(currentPage));
  }, [location.pathname]);

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-semibold">{activeTab.title}</h1>
        </div>
      </header>
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}
