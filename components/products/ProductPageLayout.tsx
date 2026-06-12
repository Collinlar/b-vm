import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, LucideIcon, ChevronRight } from "lucide-react";

interface Capability {
  title: string;
  description: string;
}

export interface ProductPageLayoutProps {
  seoTitle: string;
  seoDescription: string;
  seoPath: string;
  seoKeywords?: string;
  definitionLead?: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  status: string;
  heroImage: string;
  heroImageAlt: string;
  Icon: LucideIcon;
  builtFor: string;
  whatItIsTitle: string;
  whatItIsBody: string;
  capabilities: Capability[];
  whyItMattersTitle: string;
  whyItMattersBody: string;
  whyItMattersPoints: string[];
}

export default function ProductPageLayout({
  seoDescription,
  seoPath,
  definitionLead,
  eyebrow,
  title,
  subtitle,
  status,
  heroImage,
  heroImageAlt,
  Icon,
  builtFor,
  whatItIsTitle,
  whatItIsBody,
  capabilities,
  whyItMattersTitle,
  whyItMattersBody,
  whyItMattersPoints,
}: ProductPageLayoutProps) {
  const productName = eyebrow.replace(/^Products\.\s*/i, "");
  const url = `https://b-vm.com${seoPath}`;

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: productName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url,
    description: seoDescription,
    brand: { "@type": "Brand", name: "BVM (Bold Vision MultiTech)" },
    publisher: { "@id": "https://b-vm.com/#organization" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: capabilities.map((c) => `${c.title}: ${c.description}`),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${productName}?`,
        acceptedAnswer: { "@type": "Answer", text: `${whatItIsTitle}. ${whatItIsBody}` },
      },
      {
        "@type": "Question",
        name: `Who is ${productName} built for?`,
        acceptedAnswer: { "@type": "Answer", text: builtFor },
      },
      {
        "@type": "Question",
        name: `Why does ${productName} matter for African SMEs?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${whyItMattersBody} Key benefits: ${whyItMattersPoints.join("; ")}.`,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/8" />
          <div className="container mx-auto px-4 py-20 md:py-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav aria-label="Breadcrumb" className="mb-6">
                  <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <li>
                      <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                    </li>
                    <ChevronRight className="w-3 h-3 opacity-50" />
                    <li>
                      <Link href="/products" className="hover:text-foreground transition-colors">
                        Products
                      </Link>
                    </li>
                    <ChevronRight className="w-3 h-3 opacity-50" />
                    <li className="text-foreground font-medium">{eyebrow.replace(/^Products\.\s*/i, "")}</li>
                  </ol>
                </nav>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="h-px flex-1 bg-border max-w-[80px]" />
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted-foreground">
                    {status}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight mb-5">
                  {title}
                </h1>
                {definitionLead ? (
                  <p className="text-sm text-muted-foreground/90 leading-relaxed mb-4 max-w-xl border-l-2 border-primary/30 pl-4">
                    {definitionLead}
                  </p>
                ) : null}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">{subtitle}</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" size="lg" asChild>
                    <Link href="/contact">
                      Get Early Access <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/partnerships">Become a Partner</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-3xl rounded-full" />
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  width={1280}
                  height={960}
                  className="relative w-full h-auto rounded-3xl border border-border shadow-soft"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BUILT FOR */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-tight mb-4">Built for</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{builtFor}</p>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-primary rounded-full mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-5">{whatItIsTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">{whatItIsBody}</p>

            <div className="grid sm:grid-cols-2 gap-5">
              {capabilities.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary mb-3" />
                  <h3 className="font-heading font-bold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-20 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="w-10 h-1 bg-secondary rounded-full mb-5" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-5 leading-tight">
                  {whyItMattersTitle}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">{whyItMattersBody}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <ul className="space-y-4">
                  {whyItMattersPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED FROM BVM */}
        <section className="py-14 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="w-10 h-1 bg-primary/60 rounded-full mb-5" />
            <h2 className="text-xl md:text-2xl font-heading font-bold tracking-tight mb-4">
              Explore more of BVM
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-6">
              This product sits inside Bold Vision MultiTech&apos;s SME operating system. For the full business platform, see{" "}
              <Link href="/ascendsme" className="text-primary underline-offset-4 hover:underline font-medium">
                AscendSME: business management for African SMEs
              </Link>
              . For ecosystem and NGO or fintech partnerships, visit{" "}
              <Link href="/partnerships" className="text-primary underline-offset-4 hover:underline font-medium">
                Partnerships
              </Link>
              . For positioning on AI and search, read{" "}
              <Link href="/pulse" className="text-primary underline-offset-4 hover:underline font-medium">
                The BVM Pulse
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
              Want this for your business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Talk to us about early access, pilot programmes, or partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Talk to Us <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
