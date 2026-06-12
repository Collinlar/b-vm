import { Button } from "../ui/button";
import Link from "next/link";
import { Sparkles, CheckCircle2 } from "lucide-react";

const AIPersonalization = () => {
  const features = [
    "2-minute diagnostic quiz identifies your business needs",
    "Personalized dashboard with actionable recommendations",
    "Smart matching with tools, training, and service providers",
    "Automated project management for all engagements",
    "Track your growth journey with AI-powered insights",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Personalized Growth Powered by{" "}
                <span className="text-gradient-teal">AI</span>
              </h2>
              
              <h3 className="text-2xl font-heading font-bold mb-6">
                Your Business is Unique. So Is Your Growth Path.
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8">
                AscendSME's 2-minute AI diagnostic quiz identifies your needs and serves up 
                personalized solutions, from tools and training to services and funding.
              </p>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg" asChild>
                <Link href="/ascendsme">
                  <Sparkles className="mr-2" size={20} />
                  Take the 2-Minute Quiz
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-medium border border-border">
              <div className="space-y-4">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold">Recommended for You</h4>
                      <p className="text-xs text-muted-foreground">Based on your business profile</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">Set up your online store</p>
                </div>

                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold">Learning Path</h4>
                      <p className="text-xs text-muted-foreground">Enhance your skills</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">Learn how to manage your customers</p>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold">Funding Opportunity</h4>
                      <p className="text-xs text-muted-foreground">You may qualify</p>
                    </div>

                  </div>
                  <p className="text-sm font-medium">Apply for SME Service Grant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPersonalization;





