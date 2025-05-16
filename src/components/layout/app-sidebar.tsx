import { Sidebar, SidebarRail } from '@/components/ui/sidebar';
import { SidebarNav } from './sidebar-nav';

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r" defaultOpen={true}>
      <SidebarNav />
      <SidebarRail /> {/* Optional: Adds a draggable rail to resize/toggle */}
    </Sidebar>
  );
}
