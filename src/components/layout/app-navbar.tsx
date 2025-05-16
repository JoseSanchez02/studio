"use client";

import Link from 'next/link';
import { Shield, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';

export function AppNavbar() {
  const { isMobile } = useSidebar(); // Ensure useSidebar is used within SidebarProvider context

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-primary px-4 shadow-md md:px-6">
      <div className="flex items-center gap-4">
        {isMobile && <SidebarTrigger asChild><Button variant="ghost" size="icon"><Menu /></Button></SidebarTrigger>}
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-accent" />
          <h1 className="text-xl font-bold text-primary-foreground">
            Valorant Layout
          </h1>
        </Link>
      </div>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link href="/" className="text-primary-foreground/80 transition-colors hover:text-accent">
          Home
        </Link>
        <Link href="/builder" className="text-primary-foreground/80 transition-colors hover:text-accent">
          Builder
        </Link>
        <Link href="/guides" className="text-primary-foreground/80 transition-colors hover:text-accent">
          Guides
        </Link>
        <Link href="/community" className="text-primary-foreground/80 transition-colors hover:text-accent">
          Community
        </Link>
      </nav>
      <div>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
          <User className="h-6 w-6" />
          <span className="sr-only">User Profile</span>
        </Button>
      </div>
    </header>
  );
}
