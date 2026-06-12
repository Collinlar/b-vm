import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Layers, Users, ArrowRight, BookOpen, Laptop, BadgeCheck } from "lucide-react";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "BVM Academy | Digital Literacy & AI Training for African Businesses | Ghana",
  description:
    "BVM Academy is the digital literacy and AI training institution of Bold Vision MultiTech. Four tiers from free micro-learning to BVM Certified Professional. Built for African business owners, not developers.",
  keywords:
    "digital literacy Ghana, AI training for business Africa, business digital skills Ghana, BVM Academy, AI for business Ghana, digital transformation training Accra",
  alternates: { canonical: `${SITE_URL}/bvm-academy` },
  openGraph: {
    title: "BVM Academy | Digital Literacy & AI Training for African Businesses",
    description:
      "Four tiers from free micro-learning to BVM Certified Professional. Practical digital and AI skills built for African business owners.",
    url: `${SITE_URL}/bvm-academy`,
    images: [{ url: `${SITE_URL}/opengraph-image.png`, width: 1200, height: 630 }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/bvm-academy#organization`,
  name: "BVM Academy",
  url: `${SITE_URL}/bvm-academy`,
  description:
    "The digital literacy and AI training institution of Bold Vision MultiTech, building the capability of African business owners to use digital infrastructure effectively.",
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "Country", name: "Ghana" },
    { "@type": "Continent", name: "Africa" },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "BVM Academy", item: `${SITE_URL}/bvm-academy` },
  ],
};

const tiers = [
  {
    n: "01",
    icon: BookOpen,
    label: "Tier 1",
    title: "Free Micro-Learning",
    price: "Free. No login required.",
    audience: "Every business owner with a phone and curiosity.",
    description:
      "Short, shareable lessons covering the fundamentals: what digital infrastructure means for your business, how AI is already being used by SMEs in Ghana, and where to start. Top-of-funnel, viral by design.",
    outcomes: [
      "Understand what digital infrastructure your business actually needs",
      "See how AI tools apply to businesses like yours",
      "Know what BVM builds and how it connects",
    ],
    gate: null,
    accent: "border-primary/20 bg-primary/5",
    labelClass: "bg-primary/15 text-primary",
  },
  {
    n: "02",
    icon: Laptop,
    label: "Tier 2",
    title: "Digital Foundations Programme",
    price: "GHS 199 to GHS 349",
    audience: "Business owners running on WhatsApp, spreadsheets, and word of mouth.",
    description:
      "The structured programme that takes a business from informal to infrastructure-ready. Covers websites, social media strategy, payment systems, data capture, and the digital tools that move a Ghanaian SME forward.",
    outcomes: [
      "Your business operational on the right digital tools",
      "A working presence on web and social channels",
      "Understanding of data, payments, and customer management basics",
    ],
    gate: "Completion unlocks Tier 3 eligibility and AscendSME onboarding support.",
    accent: "border-secondary/20 bg-secondary/5",
    labelClass: "bg-secondary/15 text-secondary",
  },
  {
    n: "03",
    icon: Users,
    label: "Tier 3",
    title: "AI for Business Programme",
    price: "GHS 800 to GHS 1,200 per participant",
    audience: "Business owners and team leads ready to integrate AI into how they operate.",
    description:
      "A 6-week live cohort. Not theory about AI — practical application with the tools your business will actually use. Run on AscendSME as the classroom environment so every lesson connects to a real business outcome.",
    outcomes: [
      "AI tools deployed and working inside your business",
      "A live Sustainability Score building from real operations on AscendSME",
      "A documented AI workflow specific to your business type and sector",
    ],
    gate: "Cohort completion required for Tier 4 application.",
    accent: "border-primary/20 bg-primary/5",
    labelClass: "bg-primary/15 text-primary",
  },
  {
    n: "04",
    icon: BadgeCheck,
    label: "Tier 4",
    title: "BVM Certified Professional",
    price: "GHS 3,500 to GHS 8,000",
    audience: "Founders and operators who want the credential that proves their business is digitally capable.",
    description:
      "A 12-week programme delivering BVM's certification standard. The credential for digitally literate African SME operators. Covers advanced AI integration, business intelligence, investment readiness, and leadership in a digital economy. Assessed, not just attended.",
    outcomes: [
      "BVM Certified Professional credential",
      "Investment-ready Sustainability Score verified through AscendSME",
      "Advanced AI and data skills relevant to your industry",
      "Access to BVM's partner and investor network",
    ],
    gate: null,
    accent: "border-secondary/20 bg-secondary/5",
    labelClass: "bg-secondary/15 text-secondary",
  },
];

const ascendSMEClassroom = [
  "Students do not just study digital tools — they use AscendSME to run a real or simulated business while they learn",
  "Every module connects to a live business action: setting up invoicing, capturing customer data, running inventory, or generating an AI content brief",
  "The Sustainability Score builds in real time as students operate, creating a verifiable capability record alongside the credential",
  "Graduates leave with a functioning business on AscendSME and a Sustainability Score that proves they have done the work",
];

export default function BVMAcademyPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-background to-primary/8" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">
              BVM Academy
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              The capability to use the{" "}
              <span className="text-gradient-teal">infrastructure.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Tools only work if you know how to use them. BVM Academy builds the digital and AI skills that let African business owners get real value from the infrastructure BVM is building. Practical. Africa-first. Built for business owners, not developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="px-8 py-6 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Link href="#tiers">
                  See the programmes <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8 py-6 text-base">
                <Link href="/contact">Get notified when we launch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ASCENDSME AS CLASSROOM */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
                  How it works
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  AscendSME is the classroom
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Most business training teaches concepts in the abstract. BVM Academy teaches by doing. AscendSME is the live environment where every lesson becomes a business action and every action builds a verifiable record of capability.
                </p>
              </div>
              <ul className="space-y-4">
                {ascendSMEClassroom.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <GraduationCap size={16} className="text-secondary mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TIERS */}
        <section id="tiers" className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
              Programmes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-xl">
              Four tiers. One progression.
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
              Each tier has a graduation gate. You do not advance by paying — you advance by demonstrating capability. The Sustainability Score built on AscendSME is the evidence.
            </p>
            <div className="space-y-10">
              {tiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.n}
                    className={`border rounded-xl p-8 ${tier.accent}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex items-center gap-3 shrink-0">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tier.labelClass}`}>
                          {tier.label}
                        </span>
                        <span className="text-xs text-muted-foreground tabular-nums">{tier.n}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={18} className="text-foreground/70 shrink-0" />
                          <h3 className="text-xl font-semibold">{tier.title}</h3>
                        </div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">{tier.price}</p>
                        <p className="text-xs text-muted-foreground/70 mb-4 italic">{tier.audience}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                          {tier.description}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {tier.outcomes.map((o) => (
                            <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-secondary mt-0.5 shrink-0">+</span>
                              {o}
                            </li>
                          ))}
                        </ul>
                        {tier.gate && (
                          <p className="text-xs font-medium text-foreground/60 border-t border-border pt-3 mt-3">
                            {tier.gate}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
                  Long-term vision
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  The certification standard for African SMEs
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  BVM Certified Professional is designed to become what the ACCA or CFA is to accountants and finance professionals: a credential that signals genuine, verified capability to employers, partners, lenders, and investors across Africa.
                </p>
                <p>
                  As the Sustainability Score becomes a recognised signal for investment readiness and the BVM product ecosystem grows, the BVM Certified Professional credential becomes meaningful not just within BVM's network but across the African digital economy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Layers size={32} className="text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Join the first cohort
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              BVM Academy is in preparation. Register your interest now and we will notify you when the first cohort opens. Priority access for businesses already on AscendSME.
            </p>
            <Button
              size="lg"
              asChild
              className="px-10 py-6 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/contact">
                Register your interest <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
