import { Button } from "../ui/button";
import Link from "next/link";
import { Building2, Users, Briefcase, DollarSign, Heart } from "lucide-react";

const EcosystemJoin = () => {
  const opportunities = [
    {
      icon: Building2,
      title: "SMEs",
      description: "Grow your business with tools, training, and support",
      cta: "Grow Your Business",
      link: "/ascendsme",
    },
    {
      icon: Users,
      title: "Service Providers",
      description: "Reach more clients through our verified marketplace",
      cta: "Reach More Clients",
      link: "/partners#providers",
    },
    {
      icon: Briefcase,
      title: "Freelancers",
      description: "Get verified and access quality gig opportunities",
      cta: "Get Verified, Get Gigs",
      link: "/partners#freelancers",
    },
    {
      icon: DollarSign,
      title: "Finance Partners",
      description: "Connect with qualified SMEs ready for growth",
      cta: "Support Business Growth",
      link: "/partners#finance",
    },
    {
      icon: Heart,
      title: "Sponsors",
      description: "Empower Ghana's SMEs through strategic partnerships",
      cta: "Empower Ghana's SMEs",
      link: "/partners#sponsors",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Ecosystem
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-foreground">
            One Platform. Unlimited Opportunities.
          </h3>
          <p className="text-lg text-muted-foreground">
            Whether you're an SME, freelancer, service provider, or finance partner, 
            there's a place for you in our ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
                <opportunity.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                {opportunity.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {opportunity.description}
              </p>
              
              <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto" asChild>
                <Link href={opportunity.link}>
                  {opportunity.cta} →
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/partners">
              Explore All Partnership Options
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EcosystemJoin;




