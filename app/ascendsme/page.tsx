import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Receipt, Boxes, ShoppingBag, Users, Wallet, Building,
  Handshake, BarChart3, ArrowRight, Store, Wrench,
  UtensilsCrossed, Briefcase, ExternalLink, Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AscendSME | SME Software Ghana & All-In-One Business Platform Africa",
  description: "AscendSME is small business management software for Ghana and Africa: invoicing, inventory, CRM, finance, HRM, shop, and a Sustainability Score for investment readiness.",
  keywords: "AscendSME, SME software Ghana, small business management software Africa, African business platform, invoicing software Ghana, business operating system Africa, CRM Ghana, inventory software Africa, investment-ready SME",
  alternates: { canonical: "https://b-vm.com/ascendsme" },
  openGraph: {
    title: "AscendSME | SME Software Ghana & All-In-One Business Platform Africa",
    description: "AscendSME is the Operating System for African SMEs: invoicing, inventory, CRM, finance, HRM, and a Sustainability Score for investment readiness.",
    url: "https://b-vm.com/ascendsme",
    images: [{ url: "https://b-vm.com/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AscendSME",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://b-vm.com/ascendsme",
  description: "AscendSME is the Operating System for African SMEs. A four-step engine (Establish, Operate, Grow, Sustain) covering invoicing, inventory, CRM, finance, HRM, and a Sustainability Score that signals investment readiness.",
  brand: { "@type": "Brand", name: "BVM (Bold Vision MultiTech)" },
  publisher: { "@id": "https://b-vm.com/#organization" },
  offers: { "@type": "Offer", availability: "https://schema.org/PreOrder", price: "0", priceCurrency: "USD" },
  featureList: ["Invoicing and billing", "Inventory management", "CRM and customer accounts", "Finance and accounting", "Human resources management", "Online shop", "Sustainability Score for investment readiness"],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://b-vm.com" },
    { "@type": "ListItem", position: 2, name: "AscendSME", item: "https://b-vm.com/ascendsme" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is AscendSME?", acceptedAnswer: { "@type": "Answer", text: "AscendSME is an all-in-one business management platform built for African SMEs. It brings invoicing, inventory, CRM, finance, HRM, and an online shop into one connected system. As businesses operate on the platform, they build a Sustainability Score — a verifiable investment readiness signal." } },
    { "@type": "Question", name: "What is the Sustainability Score in AscendSME?", acceptedAnswer: { "@type": "Answer", text: "The Sustainability Score is a proprietary credibility score generated from how a business actually operates on AscendSME. It is built from real operational data — invoicing, cash flow, inventory management — not a self-reported pitch deck. Investors and funders use it to assess a business's readiness for capital." } },
    { "@type": "Question", name: "What types of businesses is AscendSME built for?", acceptedAnswer: { "@type": "Answer", text: "AscendSME is built for retail and trade businesses, service businesses, food and hospitality operations, and professional services firms across Ghana and Africa. It is designed for SMEs that want to run a structured, formalized business without enterprise-level complexity." } },
    { "@type": "Question", name: "How is AscendSME different from global SME software?", acceptedAnswer: { "@type": "Answer", text: "AscendSME is built specifically for how African SMEs operate. It accounts for mobile-money payments, WhatsApp-heavy customer journeys, and the specific compliance and reporting needs of Ghanaian and pan-African businesses. The Sustainability Score is a unique feature with no equivalent in global SME tools." } },
  ],
};

const problems = [
  { title: "Fragmented Tools", desc: "Invoicing in one app, inventory in another, customer records in a spreadsheet. Nothing talks to anything." },
  { title: "Paperwork Traps", desc: "Critical business decisions buried in receipts, notebooks, and WhatsApp messages. No structure, no clarity." },
  { title: "Invisible to Investors", desc: "No verifiable business history means no access to funding, even when the business is performing well." },
  { title: "No Digital Support", desc: "Business owners left to figure out digital tools alone, with no account manager or structured guidance." },
];

const modules = [
  { icon: Receipt, name: "Invoicing & Receipts", tag: "Send. Track. Get paid." },
  { icon: Boxes, name: "Inventory Management", tag: "Stock, always in view." },
  { icon: ShoppingBag, name: "Shop", tag: "Sell online, seamlessly." },
  { icon: Users, name: "CRM", tag: "Every customer. One place." },
  { icon: Wallet, name: "Finance Module", tag: "P&L, cash flow, clarity." },
  { icon: Building, name: "HRM", tag: "Your team, structured." },
  { icon: Handshake, name: "Service Marketplace", tag: "Find providers you need." },
  { icon: BarChart3, name: "Account Manager", tag: "Guided digital support." },
];

const audiences = [
  { icon: Store, title: "Retail & Trade", desc: "Manage stock, sales, and customer relationships from one clean dashboard." },
  { icon: Wrench, title: "Service Businesses", desc: "Invoice clients, track projects, and build a professional brand with ease." },
  { icon: UtensilsCrossed, title: "Food & Hospitality", desc: "Orders, inventory, staff scheduling and finances, all connected." },
  { icon: Briefcase, title: "Professional Services", desc: "CRM, finance, and HR tools that make your operation look and run like a corporation." },
];

export default function AscendSMEPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navigation />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-background to-primary/10" />
          <div className="absolute top-20 right-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                  Run Your Entire Business From <span className="text-gradient-teal">One</span><br />
                  <span className="text-gradient-orange">Intelligent</span> Place.
                </h1>
                <p className="text-sm text-muted-foreground/90 max-w-xl mb-4 leading-relaxed border-l-2 border-secondary/40 pl-4">
                  AscendSME is an <strong className="font-medium text-foreground/90">all-in-one business operating system</strong> for African SMEs, bringing invoicing, inventory, CRM, finance, and more into one dashboard built for Ghana and the wider continent.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                  No more fragmented tools, no more paper traps, no more starting from scratch when investors ask for proof. One platform. Every module. One track record.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="https://ascendsme.africa" target="_blank" rel="noopener noreferrer">Start for Free <ArrowRight className="ml-2" size={18} /></a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="px-8 py-6 text-base">
                    <a href="#features">See All Features</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-tr from-secondary/25 via-transparent to-primary/20 blur-3xl rounded-full" />
                <Image
                  src="/assets/ascendsme-dashboard-mockup.png"
                  alt="African woman entrepreneur reviewing the BVM AscendSME dashboard with invoicing and sustainability score"
                  width={1264} height={848}
                  className="relative w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              African SMEs Are Being Held Back By the Tools They Don&apos;t Have.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Fragmented systems, manual processes, and invisible track records are costing businesses growth, time, and opportunity every day.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {problems.map((p) => (
                <div key={p.title} className="rounded-2xl border border-destructive/25 bg-destructive/[0.04] p-6">
                  <h5 className="font-bold mb-2 text-destructive/90">{p.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section id="features" className="py-24 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 leading-tight">
              Every Module Your Business Needs. All Connected.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">When everything talks, you stop repeating yourself.</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AscendSME brings every critical business function under one roof. When your invoicing talks to your inventory, your CRM talks to your finance module, and your HRM talks to everything, you stop repeating yourself and start seeing the full picture.
                </p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://ascendsme.africa" target="_blank" rel="noopener noreferrer">Explore the Platform <ArrowRight className="ml-2" size={16} /></a>
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                {modules.map((m) => (
                  <div key={m.name} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-card hover:border-secondary/40 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0"><m.icon className="w-4 h-4" /></div>
                    <span className="text-sm font-medium text-foreground/85">{m.name}</span>
                    <span className="text-xs text-muted-foreground ml-auto hidden sm:inline">{m.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SUSTAINABILITY SCORE */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative rounded-3xl border border-secondary/30 bg-gradient-to-br from-secondary/8 via-background to-background p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary via-primary to-transparent" />
              <div className="inline-flex items-center gap-2 text-secondary mb-4">
                <Award className="w-5 h-5" />
                <span className="text-sm font-semibold">The Sustainability Score</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                The More You Run Your Business, The More You Build Your Case for Investment.
              </h3>
              <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
                AscendSME&apos;s Sustainability Score is unlike anything else available to African SMEs. As you manage your business on the platform, your real operational behaviour generates a verifiable, proprietary score that investors and funders can trust because it&apos;s built from actual business data, not a pitch deck.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { n: "01", t: "Run Your Business", d: "Use AscendSME daily. Invoice, manage inventory, track finances, handle your team." },
                  { n: "02", t: "Build Your Track Record", d: "Every action creates a verified data trail. Your Sustainability Score grows with your behaviour." },
                  { n: "03", t: "Unlock Funding Pathways", d: "Present your score to investors and funders as real, credible evidence of business health." },
                ].map((s) => (
                  <div key={s.n} className="rounded-xl border border-secondary/20 bg-secondary/5 p-5">
                    <div className="font-bold text-3xl text-secondary leading-none mb-2">{s.n}</div>
                    <h6 className="font-medium mb-1">{s.t}</h6>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCES */}
        <section className="py-24 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Built for the Business Owners Running Africa&apos;s Real Economy.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              If you run a business, manage a team, or hustle every day to build something, AscendSME was built for you.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {audiences.map((a) => (
                <div key={a.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"><a.icon className="w-5 h-5" /></div>
                  <h5 className="font-bold mb-2">{a.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POSITIONING */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-primary rounded-full mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
              AscendSME vs spreadsheets, generic accounting tools, and disconnected apps
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              Founders often start with Excel, a regional accounting package, or a patchwork of free apps. That works until stock, sales, and finance stop reconciling, or investors ask for a single record of how the business runs. AscendSME is designed as a <strong className="font-medium text-foreground">Pan-African SME platform</strong> with modules that share one data model, plus a Sustainability Score narrative aimed at credibility.
            </p>
            <ul className="space-y-3 text-muted-foreground text-sm max-w-3xl mb-8 list-disc pl-5">
              <li><strong className="text-foreground">Vs spreadsheets:</strong> less manual reconciliation, fewer copy-paste errors, clearer history for banks and partners.</li>
              <li><strong className="text-foreground">Vs importing global SMB suites wholesale:</strong> workflows tuned for how African SMEs actually sell and collect cash, including mobile and WhatsApp-heavy journeys.</li>
              <li><strong className="text-foreground">Alongside BVM products:</strong> explore <Link href="/products" className="text-primary underline-offset-4 hover:underline">BVM&apos;s AI, WhatsApp, and FAQ tools</Link> that complement AscendSME for visibility and support.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="relative rounded-3xl border border-secondary/25 bg-secondary/[0.04] p-10 md:p-14 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--secondary)/0.1),_transparent_60%)] pointer-events-none" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight relative z-10">
                Your Business Deserves<br /><span className="text-gradient-teal">Real Infrastructure.</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed relative z-10">
                Stop stitching tools together. Start building a business that can be seen, trusted, and funded.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://ascendsme.africa" target="_blank" rel="noopener noreferrer">Get Started Free <ArrowRight className="ml-2" size={18} /></a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Talk to Our Team <ExternalLink className="ml-2" size={16} /></Link>
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
