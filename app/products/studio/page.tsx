import type { Metadata } from "next";
import { Wand2 } from "lucide-react";
import ProductPageLayout from "@/components/products/ProductPageLayout";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "AI Image Generator for Brands | BVM Studio | Ghana & Africa",
  description:
    "Studio is a context-aware image and video generation tool. Brand-aligned, purpose-built, creatively intelligent. Visuals that belong to your brand, not generic AI output.",
  keywords:
    "AI image generator for brands, brand-aware AI image generation, AI video SME Africa, creative AI Ghana, BVM Studio, visual identity AI",
  alternates: { canonical: `${SITE_URL}/products/studio` },
  openGraph: {
    title: "AI Image Generator for Brands | BVM Studio",
    description:
      "Brand-aware AI image and video generation. Feed in your identity, get back work that looks and feels like yours.",
    url: `${SITE_URL}/products/studio`,
  },
};

export default function Studio() {
  return (
    <ProductPageLayout
      seoTitle="AI Image Generator for Brands | BVM Studio | Ghana & Africa"
      seoDescription="Studio is a context-aware image and video generation tool. Brand-aligned, purpose-built, creatively intelligent. Visuals that belong to your brand, not generic AI output."
      seoPath="/products/studio"
      definitionLead="BVM Studio is an AI image and video generation product that uses your brand context so creatives look like yours, not generic stock-style AI output."
      eyebrow="Products. Studio"
      Icon={Wand2}
      title={
        <>
          Visuals that belong <span className="text-gradient-orange">to your brand.</span>
        </>
      }
      subtitle="Studio is BVM's AI image and video generation tool, designed not as a generic creative platform but as a brand-aware and context-aware creative intelligence system. Feed in your brand identity. Get back work that looks and feels like yours."
      status="In Development"
      heroImage="/assets/product-studio.jpg"
      heroImageAlt="BVM Studio: African entrepreneur reviewing brand-aligned AI-generated marketing visuals"
      builtFor="Brands, agencies, content teams, and SMEs that need a steady output of high-quality, on-brand visuals without losing the look that makes them recognisable. Built for teams tired of generic AI output that could belong to anyone."
      whatItIsTitle="Creative intelligence, not a content factory"
      whatItIsBody="Studio is trained around your brand context. Visual identity, tone, colours, audience, product type, and use case all feed into the system. The output is not a generic stock-style render. It is creative work that belongs to your brand and serves a real purpose."
      capabilities={[
        {
          title: "Brand context engine",
          description:
            "Studio learns your brand identity, colour system, typography, and visual rules before it generates anything.",
        },
        {
          title: "Purpose-built generation",
          description:
            "Tell Studio what the visual is for. Product launch, social post, ad campaign, pitch deck. Output adapts to the use case.",
        },
        {
          title: "Image and video in one place",
          description:
            "Generate stills and short-form video assets from the same brand context, so everything stays visually coherent.",
        },
        {
          title: "Iteration without drift",
          description:
            "Refine, regenerate, and remix without watching every iteration drift further from your brand. Guardrails are baked in.",
        },
      ]}
      whyItMattersTitle="Generic AI output is a brand liability"
      whyItMattersBody="The biggest risk with generic AI tools is that everyone's output starts to look the same. Studio exists to keep your brand recognisable in a world where everyone has access to the same models. Brand-aware creative is the new competitive edge."
      whyItMattersPoints={[
        "Eliminates the 'this looks AI-generated' problem",
        "Keeps every asset visually consistent with your brand system",
        "Reduces dependency on briefing freelancers for routine creative",
        "Built for fast-moving brands that still care how their work looks",
      ]}
    />
  );
}
