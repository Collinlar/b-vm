import { Calendar, Sparkles, Network } from "lucide-react";

const EvolutionSection = () => {
  const timeline = [
    {
      period: "2018–2022",
      title: "Digital Agency",
      description: "Providing website design and digital marketing services to African SMEs",
      icon: Calendar,
    },
    {
      period: "2023–2024",
      title: "AI & Tools Expansion",
      description: "Developing smart tools and AI-powered solutions for business growth",
      icon: Sparkles,
    },
    {
      period: "2025+",
      title: "Platform Ecosystem: AscendSME",
      description: "Building a comprehensive platform connecting tools, training, services, and finance",
      icon: Network,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            We've Evolved from Service Provider to{" "}
            <span className="text-gradient-teal">Platform Innovator.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            BVM Digital started as a digital marketing and website design agency. 
            Today, we're leading a digital transformation movement - connecting SMEs 
            to tools, training, and financial opportunities through our ecosystem platform, AscendSME.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center justify-between">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative z-10 bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft"
              >
                {/* Timeline Circle */}
                <div className="w-16 h-16 rounded-full bg-card border-4 border-primary shadow-glow-orange flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-bold mb-2 text-primary">{item.period}</h3>
                <h4 className="text-xl font-heading font-bold mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;



