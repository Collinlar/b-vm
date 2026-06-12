import Image from "next/image";
const story1 = "/assets/sme-story-1.jpg";
const story2 = "/assets/sme-story-2.jpg";
const story3 = "/assets/sme-story-3.jpg";

const SMEStories = () => {
  const stories = [
    {
      name: "Theresa",
      role: "Fashion Designer",
      image: story1,
      imageAlt:
        "Theresa, fashion designer in Africa: AscendSME story about growing a fashion brand, online store, and SME grant readiness · Bold Vision MultiTech",
      story:
        "Theresa wants to expand her fashion brand and raise funds. After signing up, she's guided to create her online store and ads, with an option to either do it herself via a guided experience or hire a service provider. Within weeks, she attracts new customers and qualifies for SME Service Grant funding.",
    },
    {
      name: "Sylvester",
      role: "Garage Owner",
      image: story2,
      imageAlt:
        "Sylvester, garage owner: AscendSME story about structured operations, customer management, and growth with BVM · Ghana SME",
      story:
        "Sylvester runs a garage but lacks structure. The platform recommends FlowTrack and business training. He now manages customers efficiently and has seen measurable growth.",
    },
    {
      name: "Esther",
      role: "Entrepreneur",
      image: story3,
      imageAlt:
        "Esther, entrepreneur: AscendSME story about building digital presence and social brand pages with guided support · African SME",
      story:
        "Esther knows digital presence is important but lacks skills. The platform offers her a guided experience to set up social media and brand pages. She learns while building, saving costs and gaining confidence.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            From Hustle to Growth:{" "}
            <span className="text-gradient-orange">See How SMEs Are Transforming</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from African entrepreneurs using AscendSME to scale their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-1">
                  {story.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-4">
                  {story.role}
                </p>
                <p className="text-muted-foreground">
                  {story.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SMEStories;



