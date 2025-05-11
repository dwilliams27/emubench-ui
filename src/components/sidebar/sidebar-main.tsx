import { SidebarHeader } from "@/components/sidebar/sidebar-header";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DEV_TABS, TEST_TABS, type TabItem } from "@/constants/tabs"
import { useUIState } from "@/contexts/ui-state-context";
import { Link } from "react-router-dom"

function renderSidebarTab(tab: TabItem, activeTabUrl: string) {
  const IconComponent = tab.icon;
  return (
    <SidebarMenuItem key={tab.url}>
      <SidebarMenuButton asChild className={`${tab.url === activeTabUrl ? 'bg-gray-200 hover:bg-gray-200' : ''}`}>
        <Link to={tab.url}>
          {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
          <span>{tab.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export function AppSidebar() {
  const { activeTab } = useUIState();
  
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader />
        <SidebarGroup>
          <SidebarGroupLabel>Test</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.keys(TEST_TABS).map((id) => renderSidebarTab(TEST_TABS[id], activeTab.url))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Dev</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.keys(DEV_TABS).map((id) => renderSidebarTab(DEV_TABS[id], activeTab.url))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
