import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <section className="w-full max-w-3xl rounded-lg bg-gradient-to-br from-accent/80 to-primary p-8 text-center shadow-xl md:p-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-accent-foreground sm:text-5xl md:text-6xl">
          Welcome to my Valorant based page.
        </h1>
        <p className="mb-8 text-lg text-accent-foreground/90 sm:text-xl md:text-2xl">
          Ready for a 1v1 challenge?
        </p>
        <Button size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
          Start<ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  );
}
