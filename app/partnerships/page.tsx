'use client';

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Network, Users, Building2, Mic } from "lucide-react";
import Image from "next/image";

const whyCards = [
  {
    title: "Access to Africa's SME network",
    description:
      "Connect with a growing base of SMEs across Ghana and Africa actively looking for the tools, services, and expertise you offer.",
  },
  {
    title: "Distribution for your product or service",
    description:
      "BVM's platforms, especially AscendSME, give technology and service partners a direct channel into a structured, engaged SME market.",
  },
  {
    title: "Commercial referral arrangements",
    description:
      "Referral and reseller partners earn from every BVM Digital client or AscendSME user they bring in. Real value, not just association.",
  },
  {
    title: "Alignment with a forward-looking group",
    description:
      "BVM is building for where African business is going, not where it has been. Partnership places you at the front of that movement.",
  },
];

const tiers = [
  {
    number: "01",
    icon: Network,
    title: "Technology & integration partners",
    badge: "Highest priority",
    badgeClass: "bg-primary/15 text-primary border-primary/30",
    summary:
      "Companies whose tools or platforms integrate with BVM's products, enhancing the ecosystem and adding measurable value for shared users. These are strategic alliances that make BVM's products more powerful.",
    relationship: [
      "Co-developed integrations connecting your product to AscendSME or BVM tools",
      "Listed as an official integration partner on BVM platforms and documentation",
      "Joint go-to-market activities targeting the African SME segment",
    ],
    bestFor: [
      "Payment processors and fintech platforms",
      "Design and content tools (Canva, CapCut and equivalents)",
      "WhatsApp Business API providers",
      "HR, accounting, and productivity platforms",
      "Cloud infrastructure and hosting providers",
    ],
    examples: "MTN MoMo · Hubtel · accounting platforms · cloud providers",
    cta: "Apply as a technology partner",
  },
  {
    number: "02",
    icon: Users,
    title: "Referral & reseller partners",
    badge: "High priority",
    badgeClass: "bg-secondary/15 text-secondary border-secondary/30",
    summary:
      "Individuals and organisations that recommend or distribute BVM Digital services or AscendSME to their own networks. Our most scalable growth channel and our most commercially rewarding partnership type.",
    relationship: [
      "Earn a commercial referral fee for every qualified BVM Digital client or AscendSME user you introduce",
      "Access to co-branded sales materials and product demos",
      "Dedicated BVM contact for onboarding and support on every referral",
    ],
    bestFor: [
      "Business consultants and advisors with SME client bases",
      "Accountants, lawyers, and financial advisors serving businesses",
      "Chambers of commerce and SME support organisations",
      "Bank SME relationship managers and business coaches",
    ],
    examples: "Consultants · accountants · chambers of commerce · coaches",
    cta: "Register as a referral partner",
  },
  {
    number: "03",
    icon: Building2,
    title: "Institutional & ecosystem partners",
    badge: "Strategic",
    badgeClass: "bg-foreground/10 text-foreground border-foreground/20",
    summary:
      "Organisations whose mission aligns with BVM's, particularly around SME development, digital inclusion, and business formalisation. These partnerships build shared impact and connect BVM to investment and funding networks relevant to AscendSME's vision.",
    relationship: [
      "Programme partnerships linking BVM tools and services to your SME beneficiaries",
      "Co-developed research, reporting, or policy contributions",
      "Shared access to funding pathways and investor networks",
    ],
    bestFor: [
      "Development organisations and donor-funded SME programmes",
      "Government bodies and investment promotion agencies",
      "Banks and fintech platforms with SME mandates",
      "Startup hubs, accelerators, and universities",
    ],
    examples: "GIPC · NBSSI · GIZ · fintech platforms · incubators",
    cta: "Explore institutional partnership",
  },
  {
    number: "04",
    icon: Mic,
    title: "Content & community partners",
    badge: "Supporting",
    badgeClass: "bg-muted text-muted-foreground border-border",
    summary:
      "Media, creators, and communities in the African business and technology space who amplify BVM's reach, co-create thought leadership content, or support the Digital Literacy Programme rollout.",
    relationship: [
      "Co-produced content (articles, podcasts, video series) for shared audiences",
      "Community distribution for BVM Digital Literacy Programme content",
      "Featured positioning in BVM's content and thought leadership calendar",
    ],
    bestFor: [
      "Business media outlets and newsletters",
      "Entrepreneur communities and LinkedIn networks",
      "Business podcasters and YouTube creators",
      "Business schools and professional associations",
    ],
    examples: "Media · podcasts · entrepreneur communities · business schools",
    cta: "Discuss a content partnership",
  },
];

const lookFor = [
  {
    title: "Mission alignment",
    description:
      "You care about African businesses getting access to better tools, better infrastructure, and better outcomes. Not just as a market, but as a conviction.",
  },
  {
    title: "SME focus",
    description:
      "Your work touches SMEs as clients, beneficiaries, users, or community members. This is the heart of what BVM is building for.",
  },
  {
    title: "Quality and outcomes",
    description:
      "You measure success by what changes for the businesses you serve, not just by activity, transactions, or deliverables.",
  },
  {
    title: "Long-term mindset",
    description:
      "You're interested in building something durable, not a one-off arrangement. The partnerships we value most grow over time.",
  },
];

const process = [
  { n: "01", title: "You reach out", body: "Submit the expression of interest form below. Five fields, less than two minutes." },
  { n: "02", title: "We review", body: "We review every submission within five business days and respond either way." },
  { n: "03", title: "Intro call", body: "If there's a fit, we schedule a focused 30-minute call to explore the opportunity properly." },
  { n: "04", title: "Partnership defined", body: "We agree on terms, structure, and next steps, then get to work building something real." },
];

export default function Partnerships() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/8" />
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 mb-6 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Partnerships. Bold Vision MultiTech
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] tracking-tight mb-6">
                  We're building something significant.{" "}
                  <span className="text-gradient-orange">Build it with us.</span>
                </h1>
                <p className="text-sm text-muted-foreground/90 max-w-xl mb-4 leading-relaxed border-l-2 border-primary/30 pl-4">
                  A <strong className="font-medium text-foreground/90">BVM partnership</strong> is a structured
                  collaboration for technology, referrals, institutions, or ecosystem reach, designed for African SMEs,
                  fintech and platform scale-outs, and NGO-style inclusion programmes.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  Bold Vision MultiTech is building the infrastructure Africa's businesses need to compete, grow, and
                  lead. We're selective about who we build it with, because the right partners don't just extend our
                  reach. They strengthen what we're building.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#partner-form">
                      Start a conversation <ArrowRight className="ml-2" size={18} />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#partnership-types">Explore partnership types</a>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-2 relative">
                <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-3xl rounded-full" />
                <Image
                  src="/assets/partnerships-hero.jpg"
                  alt="BVM Bold Vision MultiTech partnerships: B2B and institutional collaboration across Africa"
                  width={1280}
                  height={960}
                  className="relative w-full h-auto rounded-3xl border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY PARTNER */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-primary rounded-full mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-5 leading-tight">
              What partnership with BVM <span className="text-gradient-orange">actually unlocks</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
              We don't offer generic co-branding arrangements. Every partnership we enter is built around a specific
              value exchange, one that creates real benefit for the partner and advances our shared mission.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {whyCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 transition-all"
                >
                  <h3 className="font-heading font-bold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP TYPES */}
        <section id="partnership-types" className="py-20 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-5 leading-tight">
              Four types of partnerships. <span className="text-gradient-teal">Find your lane.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
              We've structured partnerships into four distinct types, each with a clear value proposition and a clear
              path to working together. Every partner self-selects into the lane that matches what they bring and what
              they're looking for.
            </p>

            <div className="space-y-5">
              {tiers.map((tier) => (
                <div
                  key={tier.number}
                  className="rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/20 transition-all"
                >
                  <div className="px-6 md:px-8 py-5 border-b border-border bg-background/50 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                        <tier.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground tracking-wider mb-1">{tier.number}</div>
                        <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight">{tier.title}</h3>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-medium px-3 py-1 rounded-full border whitespace-nowrap ${tier.badgeClass}`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                  <div className="px-6 md:px-8 py-6 grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{tier.summary}</p>
                      <div className="text-[11px] font-medium tracking-wider text-foreground/60 mb-3 uppercase">
                        What the relationship looks like
                      </div>
                      <ul className="space-y-2">
                        {tier.relationship.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-primary mt-0.5">→</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[11px] font-medium tracking-wider text-foreground/60 mb-3 uppercase">
                        Best for
                      </div>
                      <ul className="space-y-2">
                        {tier.bestFor.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-secondary mt-0.5">→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 md:px-8 py-4 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span className="text-xs italic text-muted-foreground">{tier.examples}</span>
                    <a
                      href="#partner-form"
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {tier.cta} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE LOOK FOR */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-primary rounded-full mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-5 leading-tight">
              We're selective. Here's what <br className="hidden md:block" />
              that means in practice.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Not every partnership enquiry becomes a partnership. We're looking for specific qualities, not credentials
              or size, but alignment.
            </p>
            <div className="rounded-3xl border border-border bg-muted/30 p-8 md:p-10">
              <div className="grid sm:grid-cols-2 gap-8">
                {lookFor.map((l) => (
                  <div key={l.title}>
                    <h4 className="font-heading font-bold text-base mb-2">{l.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{l.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-5 leading-tight">
              What happens after you reach out
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
              We've designed the partnership process to be straightforward and respectful of your time.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-border bg-card overflow-hidden">
              {process.map((step, idx) => (
                <div
                  key={step.n}
                  className={`p-6 ${idx < process.length - 1 ? "lg:border-r border-border" : ""} ${
                    idx % 2 === 0 ? "sm:border-r lg:border-r" : ""
                  } ${idx < 2 ? "sm:border-b lg:border-b-0" : ""}`}
                >
                  <div className="text-3xl font-heading font-bold text-primary mb-3">{step.n}</div>
                  <h5 className="font-heading font-bold text-base mb-2">{step.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-primary pl-6 py-3">
              <p className="text-base md:text-lg italic text-foreground/80 leading-relaxed">
                "We're building the infrastructure Africa's businesses need to compete and lead. The right partners
                build it with us, not for us."
              </p>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section id="partner-form" className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-5 leading-tight">
              Tell us about yourself <br className="hidden md:block" />
              and how you see it working
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              No lengthy application. Just a short introduction so we know who you are, what you do, and how you think a
              partnership with BVM could work.
            </p>

            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-heading font-bold mb-3">Thanks. We've got it.</h3>
                  <p className="text-muted-foreground mb-6">
                    We review every submission and respond within 5 business days.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Submit another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your name</Label>
                      <Input id="name" required placeholder="Collins Mensah" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org">Organisation</Label>
                      <Input id="org" required placeholder="Company or organisation name" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input id="email" type="email" required placeholder="you@yourcompany.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" type="tel" placeholder="+233 ..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Type of partnership you're interested in</Label>
                    <Select required>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select a partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Technology &amp; integration partner</SelectItem>
                        <SelectItem value="referral">Referral &amp; reseller partner</SelectItem>
                        <SelectItem value="institutional">Institutional &amp; ecosystem partner</SelectItem>
                        <SelectItem value="content">Content &amp; community partner</SelectItem>
                        <SelectItem value="unsure">Not sure yet, I'd like to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How do you see it working?</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us briefly what you do, who you serve, and how you think a partnership with BVM could create value for both sides."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Start the conversation <ArrowRight className="ml-2" size={18} />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    We review every submission and respond within 5 business days. No spam, no cold follow-ups.
                  </p>
                </form>
              )}
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Prefer to email us directly? Get in touch →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
