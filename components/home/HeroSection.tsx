import { Button } from "../ui/button";
import Link from "next/link";
import { Brain, Play, ArrowRight } from "lucide-react";
const heroNetwork = "/assets/hero-network.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroNetwork})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
            Empowering Ghana's SMEs to{" "}
            <span className="text-gradient-orange">Scale Smarter</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building Ghana's most connected SME ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link href="/ascendsme">
                <Play className="mr-2" size={20} />
                Explore the Ecosystem
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/ascendsme">
                <Brain className="mr-2" size={20} />
                Take the 2-Minute Diagnostic
              </Link>
            </Button>
          </div>

          {/* Ecosystem Animation Placeholder */}
          <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl border-2 border-primary/20 shadow-glow-orange animate-scale-in">
            <h3 className="text-lg font-semibold text-primary mb-4">Ghana's SME Ecosystem in Action</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-orange rounded-full animate-pulse shadow-glow-orange"></div>
                <span className="font-medium">AI Diagnostic</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-teal rounded-full animate-pulse shadow-glow-teal"></div>
                <span className="font-medium">Structure</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-orange rounded-full animate-pulse shadow-glow-orange"></div>
                <span className="font-medium">Tools</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-teal rounded-full animate-pulse shadow-glow-teal"></div>
                <span className="font-medium">Training</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-orange rounded-full animate-pulse shadow-glow-orange"></div>
                <span className="font-medium">Finance</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-teal rounded-full animate-pulse shadow-glow-teal"></div>
                <span className="font-medium">Marketplace</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-orange rounded-full animate-pulse shadow-glow-orange"></div>
                <span className="font-medium">Account Managers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




