import type { ReactNode } from 'react';
import { SidebarInset } from '@/components/ui/sidebar';

interface AppMainContentProps {
  children: ReactNode;
}

export function AppMainContent({ children }: AppMainContentProps) {
  return (
    <SidebarInset>
      <main className="flex-1 overflow-y-auto p-6 bg-background text-foreground">
        {children}
      </main>
    </SidebarInset>
  );
}
