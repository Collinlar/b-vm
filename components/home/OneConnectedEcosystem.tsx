import { Brain, Building2, Wrench, GraduationCap, DollarSign, Store, UserCheck, ArrowRight } from "lucide-react";

const OneConnectedEcosystem = () => {
  const ecosystemSteps = [
    {
      icon: Brain,
      title: "AI Diagnostic",
      description: "Assess your business stage and needs",
      color: "bg-primary"
    },
    {
      icon: Building2,
      title: "Structure",
      description: "Formalize and register your business",
      color: "bg-secondary"
    },
    {
      icon: Wrench,
      title: "Tools",
      description: "Access CRM, inventory, and operations tools",
      color: "bg-primary"
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Learn digital and management skills",
      color: "bg-secondary"
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Connect with local financial partners",
      color: "bg-primary"
    },
    {
      icon: Store,
      title: "Marketplace",
      description: "Trade with verified buyers and sellers",
      color: "bg-secondary"
    },
    {
      icon: UserCheck,
      title: "Account Managers",
      description: "Get professional support when needed",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Structure. Train. Operate. Finance. Trade.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All in one place.
            </p>
          </div>

          {/* Circular Flow Visualization */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ecosystemSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="text-center group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg hover-glow-orange`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            
            {/* Connecting Lines */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path
                  d="M50 75 Q200 25 350 75 Q200 125 50 175 Q200 225 350 175"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF7A00" />
                    <stop offset="50%" stopColor="#009B9E" />
                    <stop offset="100%" stopColor="#FF7A00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="text-center animate-scale-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-3 rounded-full font-semibold border border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <Brain className="w-5 h-5" />
              <span>Every Ghanaian SME can grow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneConnectedEcosystem;



