import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-lg bg-gradient-to-br from-accent/80 to-primary p-8 text-center shadow-xl">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-accent-foreground">
          Welcome to Valorant Layout Builder
        </h1>
        <p className="mb-8 text-xl text-accent-foreground/90">
          Craft your ultimate UI experience. Design, customize, and share your Valorant-inspired layouts with unparalleled precision.
        </p>
        <Button size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
          Start Building Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-accent/30 transition-shadow duration-300">
          <CardHeader>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Intuitive Drag & Drop" 
              width={600} 
              height={400} 
              className="mb-4 rounded-md object-cover"
              data-ai-hint="abstract design"
            />
            <CardTitle className="text-2xl text-accent">Intuitive Drag & Drop</CardTitle>
            <CardDescription>Easily arrange components with our seamless drag and drop interface.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Spend less time coding and more time designing. Our tools are built for speed and efficiency.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Learn More</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-lg hover:shadow-accent/30 transition-shadow duration-300">
          <CardHeader>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Customizable Themes" 
              width={600} 
              height={400} 
              className="mb-4 rounded-md object-cover"
              data-ai-hint="color palette"
            />
            <CardTitle className="text-2xl text-accent">Rich Component Library</CardTitle>
            <CardDescription>Access a wide variety of pre-designed, Valorant-style UI elements.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>From health bars to ability icons, get all the building blocks you need for an authentic look.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Explore Components</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-lg hover:shadow-accent/30 transition-shadow duration-300">
          <CardHeader>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Responsive Previews" 
              width={600} 
              height={400} 
              className="mb-4 rounded-md object-cover"
              data-ai-hint="mobile responsive"
            />
            <CardTitle className="text-2xl text-accent">Live Responsive Previews</CardTitle>
            <CardDescription>See your designs adapt in real-time across different screen sizes.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ensure your layout looks perfect on any device, from mobile to widescreen monitors.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Test Responsiveness</Button>
          </CardFooter>
        </Card>
      </section>
      
      <div className="p-8 bg-card rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Developer Notes</h2>
        <p className="text-foreground/80">This area demonstrates the main content section within the application layout. The sidebar provides navigation, and the header and footer frame the content. Try resizing your browser to see the responsive behavior of the sidebar and layout elements.</p>
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={i} className="mt-2 text-sm text-foreground/60">
            Scrollable content line {i + 1} to test overflow. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus, tortor sed viverra commodo, sapienLtest.
          </p>
        ))}
      </div>
    </div>
  );
}
