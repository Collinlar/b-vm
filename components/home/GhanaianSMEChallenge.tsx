import { AlertCircle, TrendingUp, Users, Target } from "lucide-react";

const GhanaianSMEChallenge = () => {
  const challenges = [
    {
      icon: Users,
      title: "Majority of Businesses",
      description: "SMEs make up the majority of businesses in Ghana",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Majority of Workforce",
      description: "Employ the majority of the workforce",
      color: "text-secondary"
    },
    {
      icon: AlertCircle,
      title: "Critical Gaps",
      description: "Most remain unstructured, underfunded, and digitally invisible",
      color: "text-destructive"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              The <span className="text-gradient-orange">Ghanaian SME Challenge</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Most remain unstructured, underfunded, and digitally invisible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <div 
                key={index} 
                className="text-center card-hover animate-fade-up bg-card rounded-2xl p-6 border-2 border-transparent hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 shadow-glow-orange/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <challenge.icon className={`w-8 h-8 ${challenge.color}`} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-glow-orange border-2 border-primary/20 text-center card-hover animate-scale-in">
            <Target className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
            <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
              At BVM Digital, we're solving this
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With AscendSME, an intelligent ecosystem that helps every business structure, scale, and succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GhanaianSMEChallenge;



