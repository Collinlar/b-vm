import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Cpu, Database, BookOpen, BarChart2, Code2, Network, ArrowRight, Terminal } from "lucide-react";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "BVM MCP Server | Model Context Protocol Infrastructure for African Business | BVM",
  description:
    "BVM MCP Server is Model Context Protocol infrastructure that enables AI agents to interact with BVM's data layer, AscendSME business data, and knowledge infrastructure. Built for developers building AI agents for the African market.",
  keywords:
    "BVM MCP Server, Model Context Protocol Africa, AI agent infrastructure Ghana, AscendSME API, AI business data Ghana, MCP server African market",
  alternates: { canonical: `${SITE_URL}/bvm-mcp` },
  openGraph: {
    title: "BVM MCP Server | Model Context Protocol Infrastructure | BVM",
    description:
      "MCP infrastructure for AI agents that need to access AscendSME business data, BVM knowledge resources, and Ghana market intelligence.",
    url: `${SITE_URL}/bvm-mcp`,
    images: [{ url: `${SITE_URL}/opengraph-image.png`, width: 1200, height: 630 }],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "BVM MCP Server", item: `${SITE_URL}/bvm-mcp` },
  ],
};

const toolGroups = [
  {
    icon: Database,
    title: "AscendSME data access",
    description:
      "Read business metrics, Sustainability Score signals, transaction summaries, and operational data from AscendSME. All access is consent-gated and scoped to the authorised business.",
  },
  {
    icon: BookOpen,
    title: "BVM knowledge retrieval",
    description:
      "Query BVM's structured knowledgebase, FAQ content, brand facts layer, and Business Brain output. Enables AI agents to surface accurate, citation-ready information about BVM products and the businesses they serve.",
  },
  {
    icon: BarChart2,
    title: "Business intelligence tools",
    description:
      "Access Ghana market data, SME sector benchmarks, industry comparisons, and economic signals relevant to African business contexts. Not generic global datasets — Ghana-calibrated data.",
  },
  {
    icon: Code2,
    title: "Content generation scaffolding",
    description:
      "Brand-aware prompt templates and output scaffolding for AI agents generating content, reports, or recommendations within the BVM ecosystem. Outputs stay on-brand by default.",
  },
  {
    icon: Network,
    title: "Ecosystem navigation",
    description:
      "Route queries to the correct BVM product, service, or data source. An AI agent that knows which BVM tool handles a given task and can call it directly, without custom routing logic.",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Internal tools",
    description: "BVM's own AI agents and internal systems use the MCP Server to access the data layer. Validates the tool architecture against real usage.",
    status: "In development",
  },
  {
    phase: "Phase 2",
    title: "Developer preview",
    description: "Selected developers building AI agents for the African market get early access. Feedback drives the Phase 3 public specification.",
    status: "Planned",
  },
  {
    phase: "Phase 3",
    title: "Public registry listing",
    description: "BVM MCP Server listed on the MCP registry for any developer to discover, install, and use with compatible AI agent frameworks.",
    status: "Planned",
  },
  {
    phase: "Phase 4",
    title: "Partner integrations",
    description: "Direct integrations with fintech platforms, business service providers, and institutional partners operating in the African market.",
    status: "Planned",
  },
];

export default function BVMMCPPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/8" />
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              BVM MCP Server
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              AI agents that know{" "}
              <span className="text-gradient-teal">the African market.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed">
              BVM MCP Server is Model Context Protocol infrastructure for AI agents that need to access AscendSME business data, BVM's knowledge layer, and Ghana-calibrated market intelligence.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mb-10 leading-relaxed border-l-2 border-primary/30 pl-4">
              Built for developers. Not in public beta yet. Register interest to join the developer preview when Phase 2 opens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Register developer interest <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8 py-6 text-base">
                <Link href="#tool-groups">See what it exposes</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* WHAT IS MCP */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                  What is MCP
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The protocol that connects AI agents to real data
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Model Context Protocol (MCP) is an open standard that lets AI agents connect to external data sources, tools, and services in a structured, interoperable way. Instead of building custom integrations for every AI framework, developers install an MCP server and the agent can access everything it exposes.
                </p>
                <p>
                  BVM MCP Server gives AI agents contextualised access to BVM's ecosystem: AscendSME operational data, BVM's knowledge infrastructure, and Ghana-specific business intelligence that generic AI tools do not have.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TOOL GROUPS */}
        <section id="tool-groups" className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Tool groups
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12 max-w-xl">
              Five tool groups. One server.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {toolGroups.map((tg) => {
                const Icon = tg.icon;
                return (
                  <div
                    key={tg.title}
                    className="border border-border rounded-lg p-6 space-y-3"
                  >
                    <Icon size={20} className="text-primary" />
                    <h3 className="font-semibold text-lg">{tg.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tg.description}</p>
                  </div>
                );
              })}
              {/* Terminal — fifth card, full width or half */}
              <div className="border border-border rounded-lg p-6 bg-muted/30 space-y-3 md:col-span-2">
                <Terminal size={20} className="text-primary" />
                <h3 className="font-semibold text-lg">Built on open standards</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  BVM MCP Server is compatible with any AI agent framework that supports the Model Context Protocol specification, including Claude, GPT-based agents, and open-source frameworks. No proprietary lock-in. Install, configure, and query.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Roadmap
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12 max-w-xl">
              Four-phase rollout
            </h2>
            <div className="space-y-0">
              {roadmap.map((phase, i) => (
                <div
                  key={phase.phase}
                  className={`grid md:grid-cols-[140px_1fr] gap-6 py-8 ${
                    i < roadmap.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                      {phase.phase}
                    </p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        phase.status === "In development"
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Cpu size={32} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Building an AI agent for the African market?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Register your interest and we will include you in the developer preview when Phase 2 opens. Tell us what you are building — the preview cohort will be shaped around real use cases.
            </p>
            <Button
              size="lg"
              asChild
              className="px-10 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Register developer interest <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
