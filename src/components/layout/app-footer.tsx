import Link from 'next/link';

export function AppFooter() {
  return (
    <footer className="border-t bg-primary px-4 py-6 text-sm text-primary-foreground/70 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Valorant Layout Builder. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link href="/about" className="transition-colors hover:text-accent">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-accent">
            Contact
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-accent">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
