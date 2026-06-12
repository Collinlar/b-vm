import { Button } from "../ui/button";
import Link from "next/link";
import { Handshake, TrendingUp, Target, Rocket } from "lucide-react";

const PartnershipCTA = () => {
  const benefits = [
    {
      icon: Target,
      title: "Strategic Alignment",
      description: "Join a mission-driven ecosystem focused on SME empowerment and sustainable growth",
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "Transparent reporting on business outcomes, job creation, and economic development",
    },
    {
      icon: Rocket,
      title: "Growth Opportunity",
      description: "Be part of a scalable platform poised for regional expansion and market leadership",
    },
  ];

  const impactAreas = [
    "Access to digital transformation tools and training",
    "Financial inclusion for underserved businesses",
    "Job creation and economic empowerment",
    "Sustainable business growth across Ghana",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Drive Real Impact Through{" "}
                <span className="text-gradient-orange">Strategic Partnership</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Your investment or partnership enables transformative change across Ghana's SME ecosystem, 
                creating lasting value for businesses, communities, and stakeholders.
              </p>

              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/partners">
                    <Handshake className="mr-2" size={20} />
                    Explore Partnerships
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/invest">
                    View Investment Details
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-2xl font-heading font-bold mb-4">Your Investment Powers</h3>
              <div className="space-y-4">
                {impactAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCTA;




