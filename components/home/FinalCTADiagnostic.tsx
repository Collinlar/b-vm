import { Button } from "../ui/button";
import Link from "next/link";
import { Brain, ArrowRight, Play } from "lucide-react";

const FinalCTADiagnostic = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <Brain className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Take the <span className="text-gradient-teal">2-Minute Diagnostic</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-gradient-orange text-white hover-glow-orange px-8 py-4 text-lg font-bold shadow-glow-orange hover:shadow-glow-orange transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-3" size={20} />
              Start Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/40 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-bold hover:border-primary/60 transition-all duration-300"
            >
              <ArrowRight className="mr-3" size={20} />
              Learn More About AscendSME
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTADiagnostic;




