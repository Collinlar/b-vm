import { Button } from "../ui/button";
import Link from "next/link";
import { Building2, Briefcase, Handshake, TrendingUp } from "lucide-react";

const FinalCTA = () => {
  const actions = [
    {
      icon: Building2,
      label: "I'm an SME",
      cta: "Get Started",
      link: "/ascendsme",
      variant: "hero" as const,
    },
    {
      icon: Briefcase,
      label: "I'm a Freelancer",
      cta: "Join Now",
      link: "/partners#freelancers",
      variant: "secondary" as const,
    },
    {
      icon: Handshake,
      label: "I'm a Partner",
      cta: "Collaborate",
      link: "/partners",
      variant: "outline" as const,
    },
    {
      icon: TrendingUp,
      label: "I'm an Investor",
      cta: "Learn More",
      link: "/invest",
      variant: "outline" as const,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Ready to Transform{" "}
            <span className="text-gradient-orange">SME Growth</span> in Ghana?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Join the movement that's revolutionizing how African businesses grow
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((action, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center mb-4">
                  <action.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {action.label}
                </p>
                <Button variant={action.variant} size="default" asChild className="w-full">
                  <Link href={action.link}>
                    {action.cta}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;




