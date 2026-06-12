import { Button } from "../ui/button";
import Link from "next/link";
import { Laptop, Users, GraduationCap, CreditCard } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Laptop,
      title: "Smart Tools",
      description: "Simplify your operations with integrated digital tools like Engage, FlowTrack, PharmaC, and GrowthOS.",
      cta: "Discover Tools",
      link: "/ascendsme#tools",
      gradient: "gradient-orange",
    },
    {
      icon: Users,
      title: "Managed Services",
      description: "Connect with verified service providers and freelancers for branding, marketing, and e-commerce.",
      cta: "Find a Provider",
      link: "/ascendsme#services",
      gradient: "gradient-teal",
    },
    {
      icon: GraduationCap,
      title: "Training & Skills",
      description: "Get personalized training in business, customer service, and digital marketing.",
      cta: "Start Learning",
      link: "/learning",
      gradient: "gradient-orange",
    },
    {
      icon: CreditCard,
      title: "Finance & Support",
      description: "Access SME Service Grants and financial packages from our partners.",
      cta: "Learn More",
      link: "/partners#finance",
      gradient: "gradient-teal",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            How <span className="text-gradient-orange">AscendSME</span> Helps You Grow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/50"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.gradient} mb-6`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>
              
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href={feature.link}>
                  {feature.cta} →
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;




