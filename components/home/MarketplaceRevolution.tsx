import { Button } from "../ui/button";
import Link from "next/link";
import { Shield, CheckCircle, Globe, Users, ArrowRight } from "lucide-react";

const MarketplaceRevolution = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Businesses",
      description: "Only verified, structured, and compliant SMEs can list products or services"
    },
    {
      icon: CheckCircle,
      title: "Authenticated Transactions",
      description: "Every business is authenticated, giving customers and partners confidence"
    },
    {
      icon: Globe,
      title: "Cross-border Visibility",
      description: "Connect with local and diaspora buyers across Ghana and Africa"
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Built on trust, structure, and digital empowerment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ghana's First <span className="text-gradient-orange">Verified Marketplace</span> for SMEs
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Verified businesses. Authenticated transactions. Trusted marketplace.
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-6 py-3 rounded-full font-semibold border border-primary/30 shadow-glow-teal hover:shadow-glow-teal transition-all duration-300">
              <Globe className="w-5 h-5" />
              <span>Making Ghana Africa's model SME marketplace</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 shadow-glow-orange border-2 border-transparent text-center card-hover animate-fade-up hover:border-secondary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 hover-glow-orange transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-scale-in">
            <Button size="lg" className="bg-gradient-orange text-white px-8 py-4 text-lg font-bold shadow-glow-orange hover-glow-orange transition-all duration-300 hover:scale-105">
              <ArrowRight className="mr-3" size={20} />
              Join the Marketplace Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceRevolution;




