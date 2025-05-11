import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/sidebar-main"
import { MainContent } from "@/components/main-content"

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <MainContent />
      </SidebarInset>
    </SidebarProvider>
  )
}
