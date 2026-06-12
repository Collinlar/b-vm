import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Server, Shield, Database, Code2, GlobeLock, Handshake, ArrowRight, Building2, CheckCircle, ExternalLink } from "lucide-react";
import { SITE_URL, BVM_TECHNOLOGIES_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "BVM Technologies | Enterprise IT Infrastructure & Digital Transformation | Ghana",
  description:
    "BVM Technologies is Bold Vision MultiTech's enterprise infrastructure arm. Enterprise software, managed IT, cybersecurity, data engineering, and government digital transformation for institutions across Ghana and West Africa.",
  keywords:
    "enterprise IT Ghana, government digital transformation Ghana, cybersecurity consulting Africa, managed IT infrastructure Ghana, enterprise software development West Africa, BVM Technologies",
  alternates: { canonical: BVM_TECHNOLOGIES_URL },
  openGraph: {
    title: "BVM Technologies | Enterprise IT Infrastructure | Ghana & West Africa",
    description:
      "Enterprise software, managed infrastructure, cybersecurity, and data engineering for institutions and large organisations in Ghana and West Africa.",
    url: BVM_TECHNOLOGIES_URL,
    images: [{ url: `${SITE_URL}/opengraph-image.png`, width: 1200, height: 630 }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BVM_TECHNOLOGIES_URL}/#organization`,
  name: "BVM Technologies",
  url: BVM_TECHNOLOGIES_URL,
  sameAs: `${SITE_URL}/bvm-technologies`,
  description:
    "The enterprise infrastructure arm of Bold Vision MultiTech, delivering managed IT, cybersecurity, enterprise software, data engineering, and government digital transformation across Ghana and West Africa.",
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
    { "@type": "ListItem", position: 2, name: "BVM Technologies", item: `${SITE_URL}/bvm-technologies` },
  ],
};

const services = [
  {
    n: "01",
    icon: Code2,
    title: "Enterprise Software Development",
    lead: "Custom software built for the operational complexity of large organisations. Systems integration, legacy modernisation, and purpose-built applications for institutions that cannot afford generic solutions.",
    points: [
      "Custom enterprise application development",
      "Legacy system modernisation and migration",
      "API development and third-party system integration",
      "ERP, HRMS, and workflow automation",
      "End-to-end quality assurance and testing",
    ],
  },
  {
    n: "02",
    icon: Server,
    title: "Managed IT Infrastructure",
    lead: "Cloud migration, infrastructure management, and ongoing managed services so institutions focus on their mandate rather than their server room.",
    points: [
      "Cloud architecture and migration strategy",
      "Infrastructure design, deployment, and management",
      "24/7 monitoring and incident response",
      "Backup, disaster recovery, and business continuity",
      "Vendor management and licensing oversight",
    ],
  },
  {
    n: "03",
    icon: Shield,
    title: "Cybersecurity Consulting",
    lead: "Threat assessment, security architecture, and implementation for organisations that hold sensitive data, serve the public, or operate in regulated environments.",
    points: [
      "Security audits and vulnerability assessments",
      "Security architecture design and implementation",
      "Endpoint, network, and cloud security",
      "Staff security awareness training",
      "Compliance frameworks and policy development",
    ],
  },
  {
    n: "04",
    icon: Database,
    title: "Data Engineering and Business Intelligence",
    lead: "Data infrastructure that turns operational data into decisions. From pipeline construction to executive dashboards, built on your data and your context.",
    points: [
      "Data warehouse and lake architecture",
      "ETL pipeline design and management",
      "Business intelligence dashboards and reporting",
      "Predictive analytics and modelling",
      "Data governance and quality frameworks",
    ],
  },
  {
    n: "05",
    icon: GlobeLock,
    title: "Government and Public Sector Transformation",
    lead: "Digital transformation for government agencies, public institutions, and NGOs operating in Ghana and West Africa. Built for accountability, scale, and the specific constraints of public sector delivery.",
    points: [
      "E-government platform development",
      "Citizen service digitalisation",
      "Public sector data infrastructure",
      "Interoperability and system integration across agencies",
      "Compliance with Ghana data protection and procurement frameworks",
    ],
  },
  {
    n: "06",
    icon: Handshake,
    title: "Technology Partnerships and Licensing",
    lead: "Strategic partnerships for institutions that need proven technology capabilities without building them entirely in-house. Licensing, co-development, and OEM arrangements with the BVM product portfolio.",
    points: [
      "BVM product licensing for enterprise contexts",
      "Co-development and joint venture arrangements",
      "Technology advisory and independent review",
      "Vendor evaluation and procurement support",
      "Long-term technology roadmap planning",
    ],
  },
];

const differentiators = [
  {
    icon: Building2,
    title: "Built for African institutional reality",
    body: "Infrastructure consulting from firms outside Africa regularly fails to account for power infrastructure, connectivity constraints, local procurement rules, and the human context of Ghanaian institutions. BVM Technologies is designed for where you actually operate.",
  },
  {
    icon: CheckCircle,
    title: "Connected to the BVM product ecosystem",
    body: "BVM Technologies clients benefit from BVM's broader product portfolio: AscendSME for operational data, Business Brain for knowledge infrastructure, and TrustShield for business verification. Enterprise engagements draw on a live product ecosystem rather than theoretical frameworks.",
  },
  {
    icon: Shield,
    title: "Security and compliance by default",
    body: "Every engagement is designed with Ghana Data Protection Act 2012 compliance as a baseline, not an afterthought. For regulated sectors, BVM Technologies builds the compliance posture into the architecture from day one.",
  },
];

export default function BVMTechnologyPage() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/8" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              BVM Technologies
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Enterprise Infrastructure,{" "}
              <span className="text-gradient-teal">Built for Africa.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
              BVM Technologies is the enterprise arm of Bold Vision MultiTech. We deliver managed IT infrastructure, cybersecurity, enterprise software, and government digital transformation for large organisations across Ghana and West Africa.
            </p>
            <a
              href={BVM_TECHNOLOGIES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ExternalLink size={14} />
              bvm-tech.com
            </a>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Discuss your project <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8 py-6 text-base">
                <Link href="#services">View services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                  What we are
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  The institutional counterpart to BVM Digital
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  BVM Digital serves SMEs. BVM Technologies serves the institutions, agencies, and large organisations that need a different level of engagement: deeper technical architecture, longer delivery cycles, more complex compliance environments, and infrastructure that serves hundreds or thousands of people.
                </p>
                <p>
                  Both sit inside the Bold Vision MultiTech group, which means BVM Technologies brings the same Africa-first product thinking and ecosystem connectivity that defines everything BVM builds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-16 max-w-xl">
              Six service lines. One infrastructure partner.
            </h2>
            <div className="space-y-12">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.n}
                    className="grid md:grid-cols-[auto_1fr] gap-8 pb-12 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="flex items-start gap-4 md:block">
                      <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                        {s.n}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Icon size={20} className="text-primary shrink-0" />
                        <h3 className="text-xl font-semibold">{s.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{s.lead}</p>
                      <ul className="space-y-2">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-0.5 shrink-0">+</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY BVM TECHNOLOGY */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Why BVM Technologies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12 max-w-xl">
              Infrastructure consulting that knows where it is working
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {differentiators.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.title} className="space-y-3">
                    <Icon size={24} className="text-primary" />
                    <h3 className="font-semibold text-lg">{d.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{d.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Ready to discuss your project?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              BVM Technologies works on a consulting basis. Tell us what you are building, what is not working, or what you need to modernise. We will tell you honestly whether we are the right partner.
            </p>
            <Button
              size="lg"
              asChild
              className="px-10 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Start the conversation <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
