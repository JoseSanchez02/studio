import Link from 'next/link';
import {
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { LayoutDashboard, Palette, BookOpen, Users, Settings, LifeBuoy, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function SidebarNav() {
  return (
    <>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          {/* Icon visible when collapsed */}
          <Palette className="h-7 w-7 text-accent group-data-[collapsible=icon]:visible group-data-[state=expanded]:hidden" />
          {/* Text visible when expanded */}
          <span className="font-semibold text-lg text-primary-foreground group-data-[collapsible=icon]:hidden">
            Navigation
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Dashboard">
              <Link href="/">
                <LayoutDashboard />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Layout Builder">
              <Link href="/builder">
                <Palette />
                <span>Layout Builder</span>
                <Badge variant="outline" className="ml-auto group-data-[collapsible=icon]:hidden">New</Badge>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Guides">
              <Link href="/guides">
                <BookOpen />
                <span>Guides</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Community">
              <Link href="/community">
                <Users />
                <span>Community</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarSeparator className="my-4" />
        
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:justify-center">Tools</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Crosshair Gen">
                <Link href="/tools/crosshair">
                    {/* Placeholder for crosshair icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
                    <span>Crosshair Gen</span>
                </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Sensitivity Calc">
                <Link href="/tools/sensitivity">
                     {/* Placeholder for calculator icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><line x1="16" x2="12" y1="10" y2="10"/><line x1="12" x2="12" y1="10" y2="14"/><line x1="8" x2="8" y1="10" y2="18"/><line x1="12" x2="8" y1="14" y2="14"/></svg>
                    <span>Sensitivity Calc</span>
                </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2 mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Support">
              <Link href="/support">
                <LifeBuoy />
                <span>Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="GitHub Repository" className="!bg-sidebar-accent/50 hover:!bg-sidebar-accent">
              <Link href="https://github.com" target="_blank">
                <Github />
                <span>GitHub</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
