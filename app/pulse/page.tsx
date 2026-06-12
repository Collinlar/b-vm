import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteCopy";
import PulseClient from "./PulseClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "The BVM Pulse - Intelligence, Insights & Updates",
  description:
    "Stay informed with the latest market intelligence, SME insights, and thought leadership from BVM. Your source for African business ecosystem trends and analysis.",
  keywords:
    "BVM blog, African SME insights, market intelligence Africa, business thought leadership, SME case studies, African economy news",
  alternates: { canonical: `${SITE_URL}/pulse` },
  openGraph: {
    title: "The BVM Pulse - Intelligence, Insights & Updates",
    description:
      "Market intelligence, SME insights, case studies, and thought leadership from Bold Vision MultiTech.",
    url: `${SITE_URL}/pulse`,
    type: "website",
  },
};

export default async function Pulse() {
  const posts = await getBlogPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://b-vm.com/pulse#blog",
    name: "The BVM Pulse",
    description:
      "Market intelligence, SME insights, case studies, and thought leadership from Bold Vision MultiTech.",
    url: "https://b-vm.com/pulse",
    publisher: { "@id": "https://b-vm.com/#organization" },
    inLanguage: "en",
  };

  const itemListSchema =
    posts.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "BVM Pulse Articles",
          itemListElement: posts.slice(0, 10).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://b-vm.com/pulse/${p.slug}`,
            name: p.title,
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      )}
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">The BVM Pulse</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Intelligence. Insights. <span className="text-primary">Impact.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your source for analysis, market trends, and thought leadership shaping Africa's SME economy.
            </p>
          </div>
        </div>
      </section>

      <PulseClient posts={posts} />

      <Footer />
    </div>
  );
}
