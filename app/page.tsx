import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Bot, MessageSquare, ListChecks, Wand2,
  Globe, Search, Cpu, GraduationCap, Building2,
} from "lucide-react";
import {
  SITE_META_DESCRIPTION, SITE_META_KEYWORDS, SITE_TAGLINE,
  SITE_URL, OG_IMAGE, ORG_ADDRESS_FULL,
  BVM_DIGITAL_URL, BVM_TECHNOLOGIES_URL,
} from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: SITE_TAGLINE,
  description: SITE_META_DESCRIPTION,
  keywords: SITE_META_KEYWORDS,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_TAGLINE} | BVM`,
    description: SITE_META_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "BVM Products",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AscendSME", url: "https://b-vm.com/ascendsme" },
    { "@type": "ListItem", position: 2, name: "AI Social Media Manager", url: "https://b-vm.com/products/ai-social-media-manager" },
    { "@type": "ListItem", position: 3, name: "WhatsApp Customer Service Bot", url: "https://b-vm.com/products/whatsapp-bot" },
    { "@type": "ListItem", position: 4, name: "Business Brain", url: "https://b-vm.com/products/business-brain" },
    { "@type": "ListItem", position: 5, name: "TrustShield", url: "https://b-vm.com/products/trustshield" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BVM (Bold Vision MultiTech)?",
      acceptedAnswer: { "@type": "Answer", text: "BVM (Bold Vision MultiTech) builds tools and intelligence for the African business: AscendSME, BVM Digital services, PEO-ready SaaS, and brand-aware AI products that help SMEs compete, formalize, and scale." },
    },
    {
      "@type": "Question",
      name: "What is AscendSME?",
      acceptedAnswer: { "@type": "Answer", text: "AscendSME is BVM's flagship Operating System for African SMEs. It includes invoicing, inventory, CRM, finance, HRM, a shop, and a Sustainability Score used by partners and financial institutions to assess investment readiness." },
    },
    {
      "@type": "Question",
      name: "What is Prompt Engine Optimization (PEO)?",
      acceptedAnswer: { "@type": "Answer", text: "Prompt Engine Optimization is the practice of structuring brand content (especially FAQs and knowledgebases) so that AI language models cite and recommend the brand when answering user questions. BVM coined the term and offers PEO as a service through BVM Digital." },
    },
    {
      "@type": "Question",
      name: "Where does BVM operate?",
      acceptedAnswer: { "@type": "Answer", text: `BVM is headquartered at ${ORG_ADDRESS_FULL} and serves SMEs and partners across Africa.` },
    },
  ],
};

const products = [
  { icon: Bot, title: "AI Social Media Manager", description: "Brand-aware AI that creates content aligned with your tone, voice, and policies. Hands designs to Canva and video prompts to CapCut.", status: "In Development", accent: "primary" as const, href: "/products/ai-social-media-manager" },
  { icon: MessageSquare, title: "WhatsApp Customer Service Bot", description: "Built for Africa's number one customer channel. Qualifies leads, surfaces product and pricing information, scores purchase intent.", status: "In Development", accent: "secondary" as const, href: "/products/whatsapp-bot" },
  { icon: ListChecks, title: "Business Brain", description: "Five-section knowledge intelligence engine. FAQs, knowledgebase, brand facts, policies, and processes. Structured for humans and AI citations through Prompt Engine Optimization.", status: "In Development", accent: "primary" as const, href: "/products/business-brain" },
  { icon: Wand2, title: "TrustShield", description: "Trust infrastructure for digital commerce. Verified seller profiles, buyer-facing trust signals, and escrow protection so buyers and sellers can transact safely, even when they have never met.", status: "In Development", accent: "secondary" as const, href: "/products/trustshield" },
];

const services = [
  { icon: Globe, image: "/assets/service-web-development.jpg", title: "Website Design & Development", description: "Purposeful, conversion-optimized websites built to represent your brand and work hard for your business.", imageAlt: "BVM Digital website design and development for Ghana and African SMEs: professional web presence and conversion-focused layout" },
  { icon: Search, image: "/assets/service-seo-peo.jpg", title: "SEO & Prompt Engine Optimization", description: "Get found on search engines and recommended by AI. We position your business to appear in AI model answers, FAQs, and thought leader citations.", imageAlt: "BVM Digital SEO and Prompt Engine Optimization (PEO) for Ghana: search visibility and AI discoverability for African businesses" },
  { icon: Cpu, image: "/assets/service-automation-ai.jpg", title: "Automation & AI Consulting", description: "From AI Readiness assessments to practical implementation. We walk with you from curiosity to capability, at your pace.", imageAlt: "BVM Digital automation and AI consulting for small businesses in Ghana and Africa" },
  { icon: GraduationCap, image: "/assets/service-digital-literacy.jpg", title: "Digital Literacy Programme", description: "Coming soon. A structured digital literacy programme for business owners across Ghana and Africa. Practical, relevant, real.", imageAlt: "BVM Digital literacy programme for business owners across Ghana and Africa: practical digital skills" },
];

const ascendModules = ["Invoicing", "Receipts", "Inventory", "CRM", "Shop", "Finance", "HRM", "Account Manager", "Service Marketplace"];

export default function Home() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navigation />
      <main className="pt-16">

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                  We build Tools and Intelligence for{" "}
                  <span className="text-gradient-teal">the </span>
                  <span className="text-gradient-orange">African </span>
                  <span className="text-gradient-teal">Business.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                  Bold Vision MultiTech is a technology group building the infrastructure, platforms, and intelligence that African businesses need to operate, compete, and become investment-ready.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/ascendsme">Explore Our Ecosystem <ArrowRight className="ml-2" size={18} /></Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="px-8 py-6 text-base">
                    <Link href="/contact">Talk to Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-3xl rounded-full" />
                <Image
                  src="/assets/hero-infrastructure.png"
                  alt="African woman entrepreneur surrounded by an orbital diagram of business infrastructure: invoicing, inventory, CRM, finance, AI assistant, web presence, and sustainability score"
                  width={1024} height={1024} priority
                  className="relative w-full max-w-xl mx-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">Who we are</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Founded in 2016, we have evolved from a digital services agency into a seven-entity technology group. From SME platforms to enterprise infrastructure, digital literacy to AI agent tooling, everything BVM builds is in service of one mission: giving African businesses the infrastructure to operate with structure, compete with confidence, and access capital on their own terms.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <a href={BVM_DIGITAL_URL} target="_blank" rel="noopener noreferrer" className="relative rounded-2xl border border-primary/30 bg-card p-8 overflow-hidden hover:border-primary/60 transition-colors block">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                <div className="w-10 h-1 bg-primary rounded-full mb-5" />
                <h3 className="text-2xl font-bold mb-3">BVM Digital</h3>
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm">The execution partner for businesses ready to grow online. Web design, SEO, Prompt Engine Optimization, and AI consulting for SMEs across Ghana and Africa.</p>
                <div className="flex flex-wrap gap-2">{["Web Development", "SEO & PEO", "AI Consulting", "Automation"].map((p) => (<span key={p} className="text-xs px-3 py-1 rounded-md border border-border text-muted-foreground">{p}</span>))}</div>
                <p className="text-xs text-primary/70 font-medium mt-4">bvm-digital.com ↗</p>
              </a>
              <a href={BVM_TECHNOLOGIES_URL} target="_blank" rel="noopener noreferrer" className="relative rounded-2xl border border-secondary/30 bg-card p-8 overflow-hidden hover:border-secondary/60 transition-colors block">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary to-transparent" />
                <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
                <h3 className="text-2xl font-bold mb-3">BVM Technologies</h3>
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm">The enterprise infrastructure arm. Managed IT, cybersecurity, enterprise software, data engineering, and government digital transformation for large organisations across Ghana and West Africa.</p>
                <div className="flex flex-wrap gap-2">{["Enterprise Software", "Managed IT", "Cybersecurity", "Data Engineering"].map((p) => (<span key={p} className="text-xs px-3 py-1 rounded-md border border-border text-muted-foreground">{p}</span>))}</div>
                <p className="text-xs text-secondary/70 font-medium mt-4">bvm-tech.com ↗</p>
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "BVM Academy", desc: "Digital literacy and AI training. Four tiers from free micro-learning to BVM Certified Professional.", href: "/bvm-academy", color: "primary" },
                { label: "BVM TrustShield", desc: "AI-powered business verification and Trust Score API for lenders and platforms.", href: "/products/trustshield", color: "secondary" },
                { label: "BVM MCP Server", desc: "Model Context Protocol infrastructure connecting AI agents to BVM's data layer.", href: "/bvm-mcp", color: "primary" },
              ].map((e) => (
                <Link key={e.label} href={e.href} className={`group rounded-xl border border-border bg-card p-5 hover:border-${e.color}/30 transition-colors block`}>
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{e.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* VISION QUOTE */}
        <section className="py-20 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="relative rounded-3xl border border-primary/20 bg-background/40 p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08),_transparent_60%)] pointer-events-none" />
              <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-8 relative z-10" />
              <blockquote className="font-bold text-2xl md:text-4xl leading-tight tracking-tight mb-6 relative z-10">
                &ldquo;Africa&apos;s businesses don&apos;t have a potential problem.<br />
                They have an <span className="text-gradient-orange">infrastructure problem</span>.<br />
                We&apos;re here to fix that.&rdquo;
              </blockquote>
              <p className="text-sm text-muted-foreground relative z-10">Bold Vision MultiTech · Est. 2016 · Accra, Ghana</p>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">Built for the Businesses Africa Runs On.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">Every product in the BVM ecosystem is designed around a real and urgent problem. We build for SMEs because SMEs build economies.</p>

            {/* AscendSME Feature Block */}
            <div className="relative rounded-[2rem] bg-foreground text-background p-8 md:p-14 mb-8 overflow-hidden">
              <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] bg-secondary/25 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-32 -right-24 w-[32rem] h-[32rem] bg-primary/25 rounded-full blur-[140px] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
              <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="w-10 h-1 bg-secondary rounded-full mb-6" />
                  <h3 className="text-3xl md:text-5xl font-bold mb-5 leading-[1.05] tracking-tight">
                    AscendSME. One Platform.<br /><span className="text-background/70">Every Part of</span><br />Your Business.
                  </h3>
                  <p className="text-base md:text-lg text-background/70 mb-7 leading-relaxed max-w-md">
                    Africa&apos;s most comprehensive business management suite for SMEs. Stop juggling disconnected tools. Start running a structured, scalable, investment-ready business.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-7 max-w-lg">
                    {ascendModules.map((m) => (<span key={m} className="text-xs px-3 py-1.5 rounded-full bg-background/5 border border-background/15 text-background/85">{m}</span>))}
                  </div>
                  <div className="relative rounded-2xl border border-secondary/30 bg-secondary/10 p-5 mb-7 max-w-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0"><ArrowRight className="w-4 h-4" /></div>
                      <p className="text-sm text-background/85 leading-relaxed">
                        The more you run your business on AscendSME, the more you build a verifiable track record powered by our proprietary <span className="font-semibold text-background">Sustainability Score</span>, unlocking real investment and funding pathways.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/ascendsme">Explore AscendSME <ArrowRight className="ml-2" size={16} /></Link>
                    </Button>
                    <Button asChild className="bg-transparent border-2 border-background/40 text-background hover:bg-background hover:text-foreground transition-colors">
                      <a href="https://ascendsme.africa" target="_blank" rel="noopener noreferrer">Visit ascendsme.africa</a>
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-primary/30 blur-3xl" />
                  <div className="relative">
                    <Image src="/assets/ascendsme-dashboard-mockup.png" alt="AscendSME dashboard on a desktop computer showing revenue, sustainability score, and recent invoices" width={1264} height={848} loading="lazy" className="relative w-full h-auto drop-shadow-2xl" />
                    <div className="hidden md:flex absolute -left-2 top-8 items-center gap-2 rounded-xl bg-background text-foreground px-3 py-2 shadow-xl border border-border">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <div className="text-xs"><div className="font-semibold">Sustainability</div><div className="text-muted-foreground">87/100</div></div>
                    </div>
                    <div className="hidden md:flex absolute -right-2 bottom-10 items-center gap-2 rounded-xl bg-background text-foreground px-3 py-2 shadow-xl border border-border">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="text-xs"><div className="font-semibold">Revenue MTD</div><div className="text-muted-foreground">GHS 84,320</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((p) => (
                <Link key={p.title} href={p.href} className="group rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 hover:-translate-y-1 transition-all block">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${p.accent === "primary" ? "bg-primary/15 text-primary" : "bg-secondary/15 text-secondary"}`}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 leading-snug">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                  <span className="inline-block text-[11px] font-medium tracking-wide bg-primary/10 text-primary rounded-full px-3 py-1">{p.status}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BVM DIGITAL SERVICES */}
        <section className="py-24 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">The Digital Services SMEs in Africa Actually Need.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">BVM Digital focuses on what moves the needle for African businesses competing in a digital-first economy.</p>
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {services.map((s) => (
                <div key={s.title} className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/20 hover:-translate-y-1 transition-all">
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <Image src={s.image} alt={s.imageAlt} width={1024} height={768} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-background/80 backdrop-blur text-primary flex items-center justify-center border border-border">
                      <s.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-2">{s.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="/bvm-digital">See All BVM Digital Services <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Building2 className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">Ready to Build With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you&apos;re a business looking for services, a partner exploring collaboration, or an investor paying attention, we&apos;d love to talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get in Touch <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/ascendsme">Explore Our Products</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
