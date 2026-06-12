import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Globe, Search, Cpu, GraduationCap, ArrowRight, Globe2, Target, Link2, Compass, ExternalLink } from "lucide-react";
import { BVM_DIGITAL_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "BVM Digital | Web Development, SEO & Prompt Engine Optimization, AI Consulting",
  description: "BVM Digital is Bold Vision MultiTech's Accra-based digital services arm: web design and development in Ghana, SEO and AI-ready PEO, plus automation and AI consulting for African SMEs.",
  keywords: "BVM Digital, web development Ghana, web design Accra Ghana, digital marketing agency Accra, SEO agency Ghana, SEO Ghana, prompt engine optimization, PEO, AI consulting Africa, digital agency Accra, automation African SMEs",
  alternates: { canonical: "https://bvm-digital.com" },
  openGraph: {
    title: "BVM Digital | Web Development, SEO & PEO, AI Consulting",
    description: "BVM Digital delivers web design, SEO, Prompt Engine Optimization, and AI consulting for African SMEs.",
    url: "https://bvm-digital.com",
    images: [{ url: "https://b-vm.com/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://bvm-digital.com/#organization",
  name: "BVM Digital",
  url: "https://bvm-digital.com",
  sameAs: "https://b-vm.com/bvm-digital",
  description: "The execution arm of Bold Vision MultiTech, delivering web development, SEO, PEO, automation, and AI consulting for African SMEs.",
  parentOrganization: { "@id": "https://b-vm.com/#organization" },
  areaServed: [{ "@type": "Country", name: "Ghana" }, { "@type": "Continent", name: "Africa" }],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is BVM Digital?", acceptedAnswer: { "@type": "Answer", text: "BVM Digital is the digital services arm of Bold Vision MultiTech (BVM), based in Accra, Ghana. It delivers web design and development, SEO, Prompt Engine Optimization (PEO), automation, and AI consulting for SMEs across Ghana and Africa." } },
    { "@type": "Question", name: "What is Prompt Engine Optimization (PEO)?", acceptedAnswer: { "@type": "Answer", text: "Prompt Engine Optimization is the practice of structuring your business's online presence so that AI language models discover, understand, and confidently recommend your brand. When someone asks an AI tool like ChatGPT or Claude for a recommendation in your category, PEO positions your business as the answer." } },
    { "@type": "Question", name: "Does BVM Digital work with businesses outside Ghana?", acceptedAnswer: { "@type": "Answer", text: "Yes. BVM Digital serves clients across Africa. While the team is based in Accra, Ghana, all services are delivered remotely and are designed with pan-African market realities in mind." } },
    { "@type": "Question", name: "What makes BVM Digital different from other digital agencies in Ghana?", acceptedAnswer: { "@type": "Answer", text: "BVM Digital is the services arm of Bold Vision MultiTech, a technology group building proprietary products for African SMEs. Clients benefit from access to AscendSME, PEO-ready FAQ infrastructure, and AI tools the rest of the market does not have. BVM Digital also explicitly builds for PEO, which most Ghanaian agencies do not offer." } },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://b-vm.com" },
    { "@type": "ListItem", position: 2, name: "BVM Digital", item: "https://b-vm.com/bvm-digital" },
  ],
};

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Retention" },
];

const services = [
  {
    n: "01", tag: "Web Design & Development", icon: Globe,
    borderClass: "border-secondary/30", tagClass: "bg-secondary/15 text-secondary", arrowClass: "text-secondary",
    title: "Your Website Is Your\nMost Powerful Sales Tool.",
    lead: "We build websites that do more than exist. They represent your brand, convert your visitors, and work hard every day whether you're there or not.",
    includes: ["Brand-aligned design that reflects who you actually are", "Conversion-focused structure and user experience", "Mobile-first, fast-loading development", "SEO-ready architecture from day one", "CMS setup so you stay in control of your content", "Ongoing support and maintenance options"],
    why: "In Ghana and across Africa, your website is often the first formal impression a potential customer or partner has of your business. A weak web presence costs you credibility before a conversation even starts.",
    peo: null,
  },
  {
    n: "02", tag: "SEO & Prompt Engine Optimization (PEO)", icon: Search,
    borderClass: "border-primary/30", tagClass: "bg-primary/15 text-primary", arrowClass: "text-primary",
    title: "Get Found on Search.\nGet Recommended by AI.",
    lead: "Search visibility has two fronts now: traditional search engines and AI models. BVM Digital covers both. We optimise your business to rank on Google and to appear when AI tools recommend businesses in your space.",
    includes: ["Technical SEO audit and implementation", "Keyword strategy for your industry and market", "Content strategy for discoverability", "PEO: positioning you in AI model recommendations", "FAQ and thought leadership content builds", "Brand authority signals and citation building"],
    why: "Most businesses focus only on Google. But increasingly, customers ask AI tools: 'What's the best accounting firm in Accra?' PEO ensures your business is in that answer.",
    peo: { title: "What is PEO?", body: "Prompt Engine Optimization is the practice of structuring your business's online presence so that AI language models discover, understand, and confidently recommend your brand. It's the next frontier of digital visibility." },
  },
  {
    n: "03", tag: "Automation & AI Consulting", icon: Cpu,
    borderClass: "border-secondary/30", tagClass: "bg-secondary/15 text-secondary", arrowClass: "text-secondary",
    title: "AI Is Not Coming.\nIt's Already Here. Are You Ready?",
    lead: "Most businesses in Africa are watching AI from the sidelines. BVM Digital walks with you from curiosity to capability, at your pace.",
    includes: ["AI Readiness Assessment for your business", "Practical AI consulting, what applies to you specifically", "Automation mapping for repetitive business processes", "Team training on AI tools relevant to your industry", "Implementation support for AI-powered workflows", "Ongoing advisory as the landscape evolves"],
    why: "AI is not one tool. It's a shift in how businesses operate. The businesses that understand this early and integrate it thoughtfully will outpace those that don't.",
    peo: null,
  },
  {
    n: "04", tag: "Coming Soon · Digital Literacy Programme", icon: GraduationCap,
    borderClass: "border-border", tagClass: "bg-foreground/10 text-foreground/70", arrowClass: "text-muted-foreground",
    title: "Because Tools Only Work If\nYou Know How to Use Them.",
    lead: "BVM Digital is rolling out a structured Digital Literacy Programme for business owners across Ghana and Africa. Practical, relevant, and built for people running real businesses.",
    includes: [],
    why: "",
    peo: null,
  },
];

const process = [
  { n: "01", t: "Understand", d: "We start by understanding your business, goals, audience, and gaps." },
  { n: "02", t: "Strategise", d: "We recommend the right service combination and map out the approach." },
  { n: "03", t: "Execute", d: "We build, implement, and deliver, with you in the loop throughout." },
  { n: "04", t: "Optimise", d: "We review results, refine the approach, and grow from the baseline." },
];

const trust = [
  { icon: Globe2, t: "Africa-First Thinking", d: "We don't import templates from other markets. Every solution is built with the realities of the Ghanaian and African business environment in mind." },
  { icon: Target, t: "Outcome-Oriented", d: "We measure success by what changed in your business after working with us, not just deliverables." },
  { icon: Link2, t: "Connected to the BVM Ecosystem", d: "As the digital arm of Bold Vision MultiTech, our clients benefit from proprietary tools, platforms, and products the rest of the market doesn't have access to." },
  { icon: Compass, t: "We Stay With You", d: "Not a project-and-disappear agency. We build long-term relationships with businesses that want to grow continuously." },
];

export default function BVMDigitalPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-background to-primary/10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Your Business Deserves to Be <span className="text-gradient-teal">Found,</span><br />
              <span className="text-gradient-orange">Trusted</span> & Chosen.
            </h1>
            <p className="text-sm text-muted-foreground/90 max-w-2xl mb-4 leading-relaxed border-l-2 border-secondary/40 pl-4">
              BVM Digital is a Ghana-based digital services firm focused on <strong className="font-medium text-foreground/90">web design</strong>, <strong className="font-medium text-foreground/90">SEO</strong>, and <strong className="font-medium text-foreground/90">AI consulting</strong> for African SMEs, so you rank in search and show up when people ask AI tools for recommendations.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
              BVM Digital is the execution arm of Bold Vision MultiTech. We deliver focused, high-impact digital services for SMEs in Ghana and across Africa.
            </p>
            <a
              href={BVM_DIGITAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ExternalLink size={14} />
              bvm-digital.com
            </a>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Start a Project <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-6 text-base">
                <a href="#services">View Our Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{s.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Three Services. Chosen Because They&apos;re the Ones That Matter Most.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              We don&apos;t do everything. We do the things that have the highest impact on a business&apos;s visibility, credibility, and operational intelligence in Africa&apos;s evolving digital economy.
            </p>
            <div className="space-y-8">
              {services.map((svc) => (
                <article key={svc.n} className={`rounded-2xl border ${svc.borderClass} bg-card overflow-hidden`}>
                  <div className="p-8 md:p-10 grid md:grid-cols-[80px_1fr] gap-6 items-start">
                    <div className="font-bold text-5xl md:text-6xl leading-none opacity-15 select-none">{svc.n}</div>
                    <div>
                      <span className={`inline-block text-[11px] font-medium tracking-[0.1em] uppercase ${svc.tagClass} rounded-full px-3 py-1 mb-3`}>{svc.tag}</span>
                      <h3 className="font-bold text-xl md:text-3xl leading-tight mb-3 whitespace-pre-line">{svc.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{svc.lead}</p>
                    </div>
                  </div>
                  {svc.includes.length > 0 && (
                    <div className="border-t border-border p-8 md:p-10 grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3">What&apos;s Included</h5>
                        <ul className="flex flex-col gap-2">
                          {svc.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-foreground/75 leading-relaxed">
                              <span className={`${svc.arrowClass} flex-shrink-0 mt-0.5`}>→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-xl bg-foreground/[0.03] p-5">
                          <h5 className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">Why It Matters</h5>
                          <p className="text-sm text-foreground/65 leading-relaxed">{svc.why}</p>
                        </div>
                        {svc.peo && (
                          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                            <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-primary mb-2">{svc.peo.title}</div>
                            <p className="text-sm text-foreground/70 leading-relaxed">{svc.peo.body}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">How We Work With You.</h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed">No mystery. No jargon. Just a clear process focused on outcomes that matter to your business.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-border overflow-hidden">
              {process.map((p, i) => (
                <div key={p.n} className={`bg-card p-6 text-center ${i < process.length - 1 ? "border-b sm:border-b-0 sm:border-r border-border" : ""}`}>
                  <div className="font-bold text-2xl text-secondary mb-2 tracking-tight">{p.n}</div>
                  <h6 className="font-medium mb-1">{p.t}</h6>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-10 h-1 bg-secondary rounded-full mb-5 mx-auto" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Trusted By Leading Brands</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We&apos;ve partnered with organizations across industries to deliver exceptional digital experiences.</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <Image
                src="/assets/bvm-clients.png"
                alt="BVM Digital clients including Sintex, People's Pension Trust, Josh Travels, Mega Growth, SDG Awards, Avnash, The Sharks, OSeed, Agree Limited, MCPHS University, Built, Deedew Foods, ASK Apartments, Comsol, and Transcend"
                width={1200} height={300}
                className="w-full opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </section>

        {/* WHY BVM DIGITAL */}
        <section className="py-24 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 leading-tight">We Know Your Market. We Build for It.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {trust.map((t) => (
                <div key={t.t} className="rounded-2xl border border-border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"><t.icon className="w-5 h-5" /></div>
                  <h5 className="font-bold mb-2">{t.t}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="relative rounded-3xl border border-secondary/25 bg-secondary/[0.04] p-10 md:p-14 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--secondary)/0.1),_transparent_60%)] pointer-events-none" />
              <Code className="w-10 h-10 text-secondary mx-auto mb-6 relative z-10" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight relative z-10">
                Ready to Build Your<br /><span className="text-gradient-teal">Digital Presence Right?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed relative z-10">Tell us about your business. We&apos;ll tell you exactly what we&apos;d do and why.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Start a Conversation <ArrowRight className="ml-2" size={18} /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">About BVM</Link>
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
