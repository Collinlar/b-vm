import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe2, Layers, Microscope, Handshake, Zap, Quote } from "lucide-react";
import {
  SITE_URL,
  FOUNDER_LINKEDIN_URL,
  COMPANY_LINKEDIN_URL,
  BVM_DIGITAL_URL,
  BVM_TECHNOLOGIES_URL,
} from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "About Bold Vision MultiTech | Our Story, Mission & Founder",
  description:
    "We started as an agency in 2016. We evolved into a technology group. Discover the story, mission, vision, and values of Bold Vision MultiTech, parent company of BVM Digital and builder of AscendSME.",
  keywords:
    "about Bold Vision MultiTech, BVM founder Collins Lartey, BVM history, African technology group, BVM mission and vision, Accra Ghana technology company",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Bold Vision MultiTech | Our Story, Mission & Founder",
    description:
      "From a digital agency in Accra to a technology group building infrastructure for African businesses. The BVM story.",
    url: `${SITE_URL}/about`,
  },
};

const timeline = [
  {
    year: "2016",
    title: "The Beginning",
    desc: "Founded as a digital services company in Accra, Ghana. Website design, social media, digital marketing.",
  },
  {
    year: "2018 – 2020",
    title: "Growing Deeper",
    desc: "Expanded services. Built relationships with SMEs across Ghana. Started seeing the same structural problems everywhere.",
  },
  {
    year: "2021 – 2022",
    title: "The Pivot",
    desc: "Made the deliberate decision to evolve beyond services. Bold Vision MultiTech emerged as the parent company. BVM Digital was formed as the focused digital arm.",
  },
  {
    year: "2023 – 2024",
    title: "Building the Products",
    desc: "Development of AscendSME, AI Social Media Manager, WhatsApp CS Bot, and Business Brain begins. The product vision takes shape.",
  },
  {
    year: "Now",
    title: "The Full Ecosystem",
    desc: "Seven entities. BVM Digital, BVM Technologies, AscendSME, BVM Academy, BVM TrustShield, BVM MCP Server, and the parent group. One mission.",
  },
];

const values = [
  {
    icon: Building2,
    title: "Solutions Over Services",
    desc: "We don't chase briefs. We identify gaps and build to close them permanently, not temporarily.",
  },
  {
    icon: Globe2,
    title: "Africa First",
    desc: "Every product, service, and decision is calibrated for the African business environment. Not copied from elsewhere and pasted on.",
  },
  {
    icon: Layers,
    title: "Structure Enables Freedom",
    desc: "Structure isn't a constraint. It's what gives businesses the freedom to scale without collapsing under their own growth.",
  },
  {
    icon: Microscope,
    title: "Evidence Over Assumptions",
    desc: "We build data-driven products and run data-informed services. Intuition is the starting point. Evidence is the validator.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We don't deliver and disappear. Our best relationships are the ones where we grow alongside the businesses we serve.",
  },
  {
    icon: Zap,
    title: "Ambition Without Apology",
    desc: "We think big. We aim for significance. African businesses and African technologists can lead, and we build like we mean it.",
  },
];

export default function About() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: "https://b-vm.com/about",
    name: "About Bold Vision MultiTech",
    description: "The story, mission, vision, and values of Bold Vision MultiTech.",
    mainEntity: { "@id": "https://b-vm.com/#organization" },
    inLanguage: "en",
  };

  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://b-vm.com/about#founder",
    name: "Collins Lartey",
    jobTitle: "Founder",
    url: FOUNDER_LINKEDIN_URL,
    worksFor: { "@id": "https://b-vm.com/#organization" },
    sameAs: [FOUNDER_LINKEDIN_URL, COMPANY_LINKEDIN_URL],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <Navigation />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 py-28 md:py-36 relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight mb-6">
              We Started as an Agency.
              <br />
              We Evolved Into
              <br />a <span className="text-gradient-orange">Technology</span>{" "}
              <span className="text-gradient-teal">Group.</span>
            </h1>
            <p className="text-sm text-muted-foreground/90 max-w-3xl mb-6 leading-relaxed border-l-2 border-primary/30 pl-4">
              <strong className="font-medium text-foreground/90">Bold Vision MultiTech (BVM)</strong> is a Ghana-based
              technology group that builds products and services for African SMEs, covering digital execution (BVM
              Digital), the AscendSME platform, and complementary AI and automation tools.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Bold Vision MultiTech was born from a simple, stubborn belief: African businesses deserve access to the
              same quality of technology, structure, and tools that businesses everywhere else in the world take for
              granted. That belief has never changed. Everything we build is in service of it.
            </p>
          </div>
        </section>

        {/* ORIGIN STORY */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="font-heading font-bold text-7xl md:text-8xl text-primary/20 leading-none mb-4 tracking-tighter">
                  2016
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
                  It Started With a Website and a Bigger Question.
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    In 2016, we started as a digital services company building websites, managing social media, running
                    digital campaigns for businesses across Ghana. We were good at it. But we kept running into the same
                    thing:{" "}
                    <em className="text-foreground/80 not-italic font-medium">
                      the services were solving symptoms, not the structural problems underneath.
                    </em>
                  </p>
                  <p>
                    Businesses weren't struggling just because they didn't have a website. They were struggling because
                    they had no system. No structure. No visibility. No infrastructure. And no one was building that for
                    them.
                  </p>
                  <p>
                    That realisation changed everything. We didn't want to just be a service provider. We wanted to be a
                    solutions group.
                  </p>
                </div>
              </div>

              <div className="relative pl-6 border-l border-border">
                {timeline.map((t, i) => (
                  <div key={i} className="mb-8 relative">
                    <span className="absolute -left-[30px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                    <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-primary mb-1">{t.year}</div>
                    <h5 className="font-heading font-bold mb-1">{t.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-24 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-10 leading-tight">
              What We Stand For.
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-primary mb-3">Our Mission</div>
                <blockquote className="font-heading font-bold text-xl md:text-2xl leading-snug mb-4">
                  To build the tools, systems, and intelligence that give African businesses the infrastructure to grow
                  with structure, compete with confidence, and be seen by the world.
                </blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every product we build, every service we deliver, and every business we work with is in service of
                  this mission.
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-8">
                <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-secondary mb-3">
                  Our Vision
                </div>
                <blockquote className="font-heading font-bold text-xl md:text-2xl leading-snug mb-4">
                  A continent where no business is held back by the absence of tools, and where doing business well is
                  enough to be investment-ready.
                </blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  That's the Africa we're building towards. One business, one tool, one solution at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-10 leading-tight">
              The Principles That Guide
              <br />
              Every Decision We Make.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h5 className="font-heading font-bold mb-2">{v.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="py-24 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-8 leading-tight">
              Built by Someone Who
              <br />
              Knows the Problem Firsthand.
            </h2>
            <div className="rounded-3xl border border-primary/25 bg-primary/[0.03] p-8 md:p-12 grid md:grid-cols-[120px_1fr] gap-8 items-start">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center font-heading font-bold text-3xl text-primary">
                C
              </div>
              <div>
                <div className="font-heading font-bold text-2xl mb-1">Collins Lartey</div>
                <div className="text-xs font-medium uppercase tracking-[0.1em] text-secondary mb-4">
                  Founder &amp; Visionary · Bold Vision MultiTech
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Collins Lartey founded Bold Vision MultiTech in 2016 with an instinct that digital services alone
                  weren't enough for African businesses. Over nearly a decade, he has grown the company from a Ghanaian
                  digital agency into a technology group with multiple products, a dedicated digital services arm, and a
                  flagship platform, AscendSME, that is redefining what business management looks like for SMEs across
                  Africa.
                </p>
                <p className="text-foreground/80 italic leading-relaxed">
                  "I've watched incredible businesses struggle not because they lacked ambition or capacity, but because
                  they lacked infrastructure. That's a fixable problem. That's what we're here to fix."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM STRUCTURE */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-8 leading-tight">
              One Group. Seven Entities.
              <br />
              One Unified Mission.
            </h2>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
              <h3 className="font-heading font-bold text-center text-xl mb-8">The BVM Group Structure</h3>

              <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-center mb-6">
                <h4 className="font-heading font-bold text-primary text-xl">Bold Vision MultiTech (BVM)</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Parent Company · Technology Solutions Group · Accra, Ghana · Est. 2016
                </p>
              </div>

              <div className="text-center text-border text-2xl mb-4">│</div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a href={BVM_DIGITAL_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-secondary/30 bg-secondary/5 p-5 hover:border-secondary/60 transition-colors block">
                  <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-secondary mb-1">
                    Digital Services
                  </div>
                  <h5 className="font-heading font-bold mb-1">BVM Digital</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Web design · SEO &amp; PEO · AI consulting · Digital Literacy Programme
                  </p>
                  <p className="text-[10px] text-secondary/70 mt-2 font-medium">bvm-digital.com ↗</p>
                </a>
                <a href={BVM_TECHNOLOGIES_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-primary/30 bg-primary/5 p-5 hover:border-primary/60 transition-colors block">
                  <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-primary mb-1">
                    Enterprise Infrastructure
                  </div>
                  <h5 className="font-heading font-bold mb-1">BVM Technologies</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Enterprise software · Managed IT · Cybersecurity · Government digital transformation
                  </p>
                  <p className="text-[10px] text-primary/70 mt-2 font-medium">bvm-tech.com ↗</p>
                </a>
                <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-5">
                  <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-secondary mb-1">
                    SME Platform
                  </div>
                  <h5 className="font-heading font-bold mb-1">AscendSME</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All-in-one business management · Sustainability Score · Investment readiness
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                  <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-primary mb-1">
                    Training Institution
                  </div>
                  <h5 className="font-heading font-bold mb-1">BVM Academy</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    4 tiers · Free to BVM Certified Professional · AscendSME as classroom
                  </p>
                </div>
                <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-5">
                  <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-secondary mb-1">
                    Business Verification
                  </div>
                  <h5 className="font-heading font-bold mb-1">BVM TrustShield</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Verified seller profiles · Transaction escrow · Buyer-seller trust for digital commerce
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                  <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-primary mb-1">
                    AI Infrastructure
                  </div>
                  <h5 className="font-heading font-bold mb-1">BVM MCP Server</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Model Context Protocol · AI agent integration · AscendSME data access · In development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BIG QUOTE */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Quote className="w-10 h-10 text-primary mx-auto mb-6" />
            <blockquote className="font-heading font-bold text-2xl md:text-4xl leading-tight tracking-tight mb-6">
              "Africa's businesses don't have a potential problem.
              <br />
              They have an <span className="text-gradient-orange">infrastructure problem</span>.
              <br />
              We're here to fix that."
            </blockquote>
            <p className="text-sm text-muted-foreground italic">
              Collins Lartey, Founder · Bold Vision MultiTech · Est. 2016
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="rounded-3xl border border-primary/25 bg-primary/[0.04] p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4 leading-tight">
                Ready to Build With Us?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a business looking for services, a partner exploring collaboration, or an investor paying
                attention, we'd love to talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/ascendsme">Explore Our Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
