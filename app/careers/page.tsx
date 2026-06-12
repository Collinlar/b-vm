import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layers, Globe2, Users, CheckCircle } from "lucide-react";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "Careers at BVM | Chief Technology Officer (CTO) Co-Founder | Accra, Ghana",
  description:
    "Bold Vision MultiTech is searching for a Chief Technology Officer and technical co-founder to scale AscendSME and the BVM AI product suite across Africa. Based in Accra, Ghana. Equity-aligned. Mission-driven.",
  keywords:
    "CTO Africa, Chief Technology Officer Ghana, technical co-founder Africa, BVM careers, technology leadership Accra, AI product engineering Africa",
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: "CTO Co-Founder Opportunity | Bold Vision MultiTech | Accra, Ghana",
    description:
      "BVM is searching for a Chief Technology Officer to lead the engineering and product teams scaling AscendSME and the AI product suite across Africa.",
    url: `${SITE_URL}/careers`,
    images: [{ url: `${SITE_URL}/opengraph-image.png`, width: 1200, height: 630 }],
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Chief Technology Officer (CTO) — Co-Founder",
  description:
    "Bold Vision MultiTech is searching for a Chief Technology Officer and technical co-founder to lead engineering and product development for AscendSME and BVM's AI product suite. This is an equity-aligned, mission-driven role for a senior technical leader who wants to build infrastructure for African businesses at scale.",
  hiringOrganization: {
    "@type": "Organization",
    name: "Bold Vision MultiTech",
    sameAs: SITE_URL,
    logo: `${SITE_URL}/assets/bvm-logo.png`,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
  },
  employmentType: "FULL_TIME",
  datePosted: "2026-06-01",
  validThrough: "2026-12-31",
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Ghana",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
  ],
};

const whatYouWillBuild = [
  "AscendSME — the all-in-one business management platform for African SMEs, from current foundation to continent-scale infrastructure",
  "The AI product suite: AI Social Media Manager, CSBot, Business Brain, Studio — from development to production",
  "BVM TrustShield — the business verification and Trust Score API layer",
  "BVM MCP Server — Model Context Protocol infrastructure connecting BVM's data layer to AI agents",
  "The engineering team, culture, and processes that scale all of the above",
];

const whoYouAre = [
  "A senior engineer or engineering leader with full-stack product depth — not a manager who stopped coding years ago",
  "Someone who has built and shipped real products, preferably in a high-growth or resource-constrained environment",
  "Experienced with Next.js, Node.js, PostgreSQL, and cloud infrastructure (Vercel, Supabase, or equivalent)",
  "Comfortable with the Anthropic Claude API or equivalent LLM integration in production systems",
  "Either based in Ghana, willing to relocate to Accra, or operating in a timezone compatible with regular Accra collaboration",
  "Preferably experienced building for African markets — not required, but strongly valued",
];

const whatYouGet = [
  "Meaningful equity stake — this is a co-founder role, not a hire",
  "Ownership of all technical decisions from day one",
  "A product with real users, real market fit, and a founder who has been building since 2016",
  "The chance to be the technical architect of Africa's business infrastructure — not a side project",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/8" />
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Careers at BVM
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              We are looking for a{" "}
              <span className="text-gradient-orange">CTO co-founder.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
              Bold Vision MultiTech is searching for the technical leader who will build the engineering side of Africa's business infrastructure — from AscendSME to the AI product suite to TrustShield.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mb-10 leading-relaxed border-l-2 border-primary/30 pl-4">
              This is not a job listing. It is a co-founder search. Equity. Ownership. A seat at the table from day one.
            </p>
            <Button
              size="lg"
              asChild
              className="px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Apply or make contact <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>

        {/* CONTEXT */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                  The context
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  A technology group that needs its technical co-founder
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Collins Lartey founded Bold Vision MultiTech in 2016 and has grown it to a seven-entity group with a live platform, multiple AI products in development, a digital services arm, and a clear product vision for where Africa's business infrastructure needs to go.
                </p>
                <p>
                  What BVM needs now is the engineering leader who can take that vision and build it properly: architecture decisions, team building, product delivery, and the technical credibility to take BVM into its next phase of scale.
                </p>
                <p>
                  Collins handles the product vision, business development, market relationships, and go-to-market. The CTO owns the technical execution, end to end.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU WILL BUILD */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-3">
              <Code2 size={20} className="text-primary" />
              <p className="text-xs font-semibold tracking-widest uppercase text-primary">
                What you will build
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10 max-w-xl">
              The full technical stack of BVM
            </h2>
            <ul className="space-y-4">
              {whatYouWillBuild.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <Layers size={16} className="text-primary mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHO YOU ARE */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-3">
              <Users size={20} className="text-primary" />
              <p className="text-xs font-semibold tracking-widest uppercase text-primary">
                Who you are
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10 max-w-xl">
              The technical profile we are searching for
            </h2>
            <ul className="space-y-4">
              {whoYouAre.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-3">
              <Globe2 size={20} className="text-primary" />
              <p className="text-xs font-semibold tracking-widest uppercase text-primary">
                What you get
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10 max-w-xl">
              This is a co-founder role
            </h2>
            <ul className="space-y-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <CheckCircle size={16} className="text-secondary mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              If this is you, let's talk.
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Send a message through the contact page. Tell us what you have built, what you are looking for, and why Africa's business infrastructure is the problem you want to work on.
            </p>
            <p className="text-sm text-muted-foreground mb-10">
              No recruiter fees. No agencies. Direct contact with Collins.
            </p>
            <Button
              size="lg"
              asChild
              className="px-10 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Make contact <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
