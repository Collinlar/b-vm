import type { Metadata } from "next";
import { Bot } from "lucide-react";
import ProductPageLayout from "@/components/products/ProductPageLayout";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "AI Social Media Manager for African SMEs | Brand-Aware Content | BVM",
  description:
    "A brand-aware AI social media manager that creates content aligned with your tone, voice, and policies. Designs hand off directly to Canva. Video prompts go to CapCut.",
  keywords:
    "AI social media manager Ghana, SME social media Africa, brand-aware AI, content automation Africa, Canva integration, CapCut prompts, digital marketing content Africa",
  alternates: { canonical: `${SITE_URL}/products/ai-social-media-manager` },
  openGraph: {
    title: "AI Social Media Manager for African SMEs | BVM",
    description:
      "Brand-aware AI content creation for African SMEs. Canva design handoff. CapCut video prompts. Your brand voice, in every post.",
    url: `${SITE_URL}/products/ai-social-media-manager`,
  },
};

export default function AISocialMediaManager() {
  return (
    <ProductPageLayout
      seoTitle="AI Social Media Manager for African SMEs | Brand-Aware Content | BVM"
      seoDescription="A brand-aware AI social media manager that creates content aligned with your tone, voice, and policies. Designs hand off directly to Canva. Video prompts go to CapCut."
      seoPath="/products/ai-social-media-manager"
      definitionLead="The BVM AI Social Media Manager is an AI content system that generates on-brand social posts and creative handoffs for African SMEs, with guardrails for voice, audience, and platform."
      eyebrow="Products. AI Social Media Manager"
      Icon={Bot}
      title={
        <>
          Your brand voice. <span className="text-gradient-orange">Now in every post.</span>
        </>
      }
      subtitle="A brand-aware AI that creates social media content the way your brand should sound. Designs hand off directly to Canva. Video prompts go to CapCut. Your brand, amplified by intelligence."
      status="In Development"
      heroImage="/assets/product-ai-social.jpg"
      heroImageAlt="BVM AI Social Media Manager: brand-aligned social content calendar for an African SME"
      builtFor="SMEs, marketing teams, and founders who need consistent, on-brand social content without hiring a full marketing team or spending hours every week writing captions, planning posts, and chasing designers."
      whatItIsTitle="What it actually does"
      whatItIsBody="Most AI content tools create generic output. Ours starts with your brand. We feed in your tone, voice, audience, and policies, then let the AI work inside those guardrails. The result feels like your brand, not a chatbot trying to impersonate it."
      capabilities={[
        {
          title: "Brand-aware content generation",
          description:
            "Trained on your brand voice, audience, and content policies. Every caption, post, and idea reflects how you actually sound.",
        },
        {
          title: "Direct Canva handoff",
          description:
            "Designs are passed straight to Canva with your brand kit applied. No copy paste, no rework, no off-brand visuals.",
        },
        {
          title: "Video prompts to CapCut",
          description:
            "Short-form video ideas come with structured prompts ready for CapCut. Editing stays human, ideation gets faster.",
        },
        {
          title: "Multi-channel planning",
          description:
            "Plan and generate across LinkedIn, Instagram, Facebook, and X. The same brand voice, adapted for each platform.",
        },
      ]}
      whyItMattersTitle="Why this matters for African SMEs"
      whyItMattersBody="Most African businesses run lean. Marketing is often the founder's seventh hat. The AI Social Media Manager closes the gap between what your brand needs and what you have time for, without sacrificing quality or losing your voice."
      whyItMattersPoints={[
        "Cuts content creation time from hours to minutes",
        "Removes the off-brand AI content problem most tools create",
        "Plugs into the design and video tools you already use",
        "Built for the realities of African markets, languages, and audiences",
      ]}
    />
  );
}
