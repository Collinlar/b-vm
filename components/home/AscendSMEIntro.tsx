import { Button } from "../ui/button";
import Link from "next/link";
import { Wrench, Users, GraduationCap, DollarSign, ShoppingBag, Compass } from "lucide-react";

const AscendSMEIntro = () => {
  const features = [
    { 
      icon: Wrench, 
      label: "Tools", 
      color: "text-primary",
      description: "CRM, inventory, and accounting tools to streamline operations."
    },
    { 
      icon: Users, 
      label: "Services", 
      color: "text-secondary",
      description: "Verified providers and freelancers for any business need."
    },
    { 
      icon: GraduationCap, 
      label: "Training", 
      color: "text-accent",
      description: "Courses and workshops to build essential business skills."
    },
    { 
      icon: DollarSign, 
      label: "Finance", 
      color: "text-primary",
      description: "Access to loans, grants, and investment opportunities."
    },
    { 
      icon: ShoppingBag, 
      label: "Marketplace", 
      color: "text-secondary",
      description: "Trade with verified buyers and sellers in Ghana."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background overflow-visible">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            AscendSME
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-foreground">
            Your One-Stop SME Growth Platform.
          </h3>
          <p className="text-lg text-muted-foreground">
            Everything SMEs need to thrive in one place.
          </p>
        </div>

        {/* Orbit Visualization */}
        <div className="relative w-full max-w-3xl mx-auto h-[500px] mb-12 overflow-visible">
          {/* Center Circle - Fixed positioning */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-32 h-32 rounded-full bg-gradient-orange shadow-glow-orange flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float">
              <div className="text-center">
                <Compass className="w-12 h-12 text-primary-foreground mx-auto mb-1" />
                <div className="text-sm font-bold text-primary-foreground">AscendSME</div>
              </div>
            </div>
          </div>

          {/* Orbiting Icons */}
          {features.map((feature, index) => {
            const angle = (index * 360) / features.length - 90; // Start from top
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute z-10"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-card shadow-glow-teal border-2 border-transparent hover:border-primary/40 hover:shadow-xl hover:shadow-teal-500/50 flex flex-col items-center justify-center transition-all duration-300 animate-float peer cursor-pointer group">
                    <feature.icon className={`w-8 h-8 ${feature.color} mb-1 hover:scale-110 transition-transform`} />
                    <span className="text-xs font-semibold text-foreground">{feature.label}</span>
                  </div>
                  
                  {/* Hover Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-[100] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-foreground text-background px-4 py-2 rounded-lg shadow-2xl max-w-[220px] w-max text-xs font-medium text-center whitespace-nowrap">
                      {feature.description}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-up">
          <Button variant="hero" size="lg" asChild>
            <Link href="/ascendsme">
              <Compass className="mr-2" size={20} />
              See How It Works
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AscendSMEIntro;




