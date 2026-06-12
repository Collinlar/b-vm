import { Brain, Wrench, GraduationCap, DollarSign, Store, UserCheck } from "lucide-react";

const SMEAdvantage = () => {
  const advantages = [
    {
      icon: Brain,
      title: "AI Diagnostic",
      description: "Discover what your business really needs",
      color: "bg-primary"
    },
    {
      icon: Wrench,
      title: "Integrated Tools",
      description: "CRM, Inventory, Finance & More",
      color: "bg-secondary"
    },
    {
      icon: GraduationCap,
      title: "Training & Academy",
      description: "Practical courses for Ghanaian entrepreneurs",
      color: "bg-primary"
    },
    {
      icon: DollarSign,
      title: "Financial Access",
      description: "Loans, grants & microcredit from Ghanaian partners",
      color: "bg-secondary"
    },
    {
      icon: Store,
      title: "Marketplace Access",
      description: "Trade securely with verified buyers",
      color: "bg-primary"
    },
    {
      icon: UserCheck,
      title: "Account Managers",
      description: "Get professional help anytime you need it",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              The <span className="text-gradient-teal">SME Advantage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Everything Ghanaian SMEs need, guided by AI and supported by people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 shadow-glow-orange border-2 border-transparent hover:border-primary/30 card-hover transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${advantage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg hover-glow-orange`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMEAdvantage;



