import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Wand2, MessageCircle, Brain, ShieldCheck, Cpu, ChevronRight, ArrowRight } from "lucide-react";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "BVM Products | AI Tools for African SMEs | Bold Vision MultiTech",
  description:
    "Explore BVM's AI product suite: AI Social Media Manager, WhatsApp Customer Service Bot, Business Brain, TrustShield, and BVM MCP Server. Built for African businesses.",
  keywords:
    "BVM products, African SME software, WhatsApp bot Africa, AI social media Ghana, Business Brain PEO, TrustShield verification, BVM MCP Server",
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: "BVM Products | AI Tools for African SMEs",
    description:
      "AI Social Media Manager, WhatsApp Bot, Business Brain, TrustShield, and MCP Server. The BVM AI product suite for African businesses.",
    url: `${SITE_URL}/products`,
  },
};

const products = [
  {
    href: "/products/ai-social-media-manager",
    title: "AI Social Media Manager",
    blurb: "Brand-aware content creation for African SMEs. Ingests your brand identity and generates on-brand social content. Hands designs to Canva, video prompts to CapCut.",
    Icon: Bot,
    status: "In Development",
  },
  {
    href: "/products/whatsapp-bot",
    title: "WhatsApp Customer Service Bot",
    blurb: "WhatsApp-native lead qualification. Presents products and pricing, scores purchase intent, generates a lead brief with confidence rating for your sales team.",
    Icon: MessageCircle,
    status: "In Development",
  },
  {
    href: "/products/business-brain",
    title: "Business Brain",
    blurb: "Five-section knowledge intelligence engine: FAQs, knowledgebase, brand facts, policies, and processes. Structured for humans and AI citations through Prompt Engine Optimization.",
    Icon: Brain,
    status: "In Development",
  },
  {
    href: "/products/trustshield",
    title: "TrustShield",
    blurb: "Trust infrastructure for digital commerce. Verified seller profiles, buyer-facing trust signals, and escrow protection so buyers and sellers can transact safely, even when they have never met.",
    Icon: ShieldCheck,
    status: "In Development",
  },
  {
    href: "/bvm-mcp",
    title: "BVM MCP Server",
    blurb: "Model Context Protocol infrastructure that connects AI agents to AscendSME data, BVM's knowledge layer, and Ghana-calibrated market intelligence.",
    Icon: Cpu,
    status: "In Development",
  },
];

export default function ProductsIndex() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              </li>
              <ChevronRight className="w-3 h-3 opacity-50" />
              <li className="text-foreground font-medium">Products</li>
            </ol>
          </nav>
          <p className="text-sm text-muted-foreground mb-3 max-w-2xl">
            BVM's AI product suite is built for African SMEs: brand-aware content, customer service automation, knowledge intelligence, business verification, and AI agent infrastructure.
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Products for the African business
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-4">
            Every product connects to the broader mission: an operating infrastructure for Africa&apos;s SME economy, anchored by{" "}
            <Link href="/ascendsme" className="text-primary underline-offset-4 hover:underline">
              AscendSME
            </Link>
            .
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mb-12 border-l-2 border-primary/30 pl-4">
            All products are currently in active development. No general availability dates are published.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {products.map(({ href, title, blurb, Icon, status }) => (
              <Link key={href} href={href} className="group block">
                <Card className="h-full border-border transition-all hover:border-primary/30 hover:shadow-soft">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                        {title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h2>
                      <span className="inline-block text-[10px] font-medium tracking-wide bg-primary/10 text-primary rounded-full px-2 py-0.5 mb-2">
                        {status}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{blurb}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            {/* AscendSME cross-link */}
            <Link href="/ascendsme" className="group block sm:col-span-2">
              <Card className="h-full border-secondary/30 bg-secondary/5 transition-all hover:border-secondary/50 hover:shadow-soft">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center border border-secondary/20 shrink-0">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-lg mb-1 group-hover:text-secondary transition-colors flex items-center gap-2">
                      AscendSME
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h2>
                    <span className="inline-block text-[10px] font-medium tracking-wide bg-secondary/15 text-secondary rounded-full px-2 py-0.5 mb-2">
                      Live Platform
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      BVM&apos;s flagship all-in-one business management platform for African SMEs. Invoicing, inventory, CRM, finance, HRM, and the Sustainability Score. The foundation every other BVM product builds on.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
