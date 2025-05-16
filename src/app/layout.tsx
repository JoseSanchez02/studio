import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppNavbar } from '@/components/layout/app-navbar';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { AppMainContent } from '@/components/layout/app-main-content';
import { AppFooter } from '@/components/layout/app-footer';
import { Toaster } from '@/components/ui/toaster';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Valorant Layout Builder',
  description: 'Build and customize Valorant-inspired layouts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <SidebarProvider>
          <div className="flex h-screen w-full"> {/* Main container taking full screen */}
            <AppSidebar /> {/* Actual Sidebar component */}
            <div className="flex flex-col flex-1 overflow-hidden"> {/* Right side: Navbar + Main Content + Footer */}
              <AppNavbar /> {/* Has access to sidebar context for trigger */}
              <AppMainContent>
                {children}
              </AppMainContent>
              <AppFooter />
            </div>
          </div>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
