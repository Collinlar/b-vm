import type { Metadata } from "next";
import { Brain } from "lucide-react";
import ProductPageLayout from "@/components/products/ProductPageLayout";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "Business Brain | Knowledge Intelligence for African SMEs | BVM",
  description:
    "Business Brain is BVM's five-section knowledge intelligence engine. FAQs, knowledgebase, brand facts, policies, and process documentation, structured for both human readers and AI systems. Built for Prompt Engine Optimization (PEO).",
  keywords:
    "business knowledge base Ghana, FAQ builder Africa, Prompt Engine Optimization, PEO, AI citations, knowledge intelligence, BVM Business Brain",
  alternates: { canonical: `${SITE_URL}/products/business-brain` },
  openGraph: {
    title: "Business Brain | Knowledge Intelligence for African SMEs | BVM",
    description:
      "Five-section knowledge intelligence engine. Structure your brand knowledge so humans find it and AI systems cite it. Built for PEO.",
    url: `${SITE_URL}/products/business-brain`,
  },
};

export default function BusinessBrain() {
  return (
    <ProductPageLayout
      seoTitle="Business Brain | Knowledge Intelligence for African SMEs | BVM"
      seoDescription="Business Brain is BVM's five-section knowledge intelligence engine. FAQs, knowledgebase, brand facts, policies, and process documentation, structured for both human readers and AI systems. Built for Prompt Engine Optimization (PEO)."
      seoPath="/products/business-brain"
      definitionLead="BVM Business Brain is a knowledge intelligence engine that organises everything a business knows into five structured sections, so customers can find answers, support teams can work faster, and AI systems can learn from and cite the brand accurately."
      eyebrow="Products. Business Brain"
      Icon={Brain}
      title={
        <>
          Everything your business knows,{" "}
          <span className="text-gradient-orange">structured to be found.</span>
        </>
      }
      subtitle="Business Brain is BVM's knowledge intelligence engine. Five interconnected sections, one canonical content layer: FAQs, knowledgebase, brand facts, policies, and process documentation. Readable by humans. Learnable by AI. Built around Prompt Engine Optimization (PEO) from the ground up."
      status="In Development"
      heroImage="/assets/product-faqs.jpg"
      heroImageAlt="BVM Business Brain: structured knowledge intelligence for AI citation and business operations"
      builtFor="Businesses and teams that answer the same questions repeatedly, run support or help content, or need one reliable source of truth that both customers and AI systems can depend on. Especially relevant for any brand that wants to appear in AI-generated answers and search results across Ghana and Africa."
      whatItIsTitle="Knowledge intelligence, not a document folder"
      whatItIsBody="Business Brain is not a file storage system. It is a structured knowledge layer built around how modern discovery works: people use search engines, and increasingly they ask AI assistants. The same content that answers a customer question needs to be structured so an AI can learn from it and recommend the brand accurately. Business Brain does both in one place."
      capabilities={[
        {
          title: "FAQs Builder",
          description:
            "Generates structured, brand-aligned FAQ sets ready to publish. Shaped so AI models can read, learn from, and cite them accurately. Central to BVM Digital's Prompt Engine Optimization (PEO) work.",
        },
        {
          title: "Knowledgebase Builder",
          description:
            "Builds an organised knowledgebase across policies, processes, how-tos, and brand facts. One canonical source that powers your site, help desk, or internal wiki without duplication.",
        },
        {
          title: "Brand Facts Layer",
          description:
            "A structured record of the things that define your business: founding story, product details, key people, service areas, and verified claims. The reference AI systems draw from when they describe your brand.",
        },
        {
          title: "Policies and Processes",
          description:
            "Turn operational documents into structured, searchable content. Return policies, onboarding guides, service terms, and team processes, all in one place and consistently formatted.",
        },
        {
          title: "PEO-ready output",
          description:
            "Every section exports with the structure that Prompt Engine Optimization requires: clear entities, plain-language Q and A patterns, and formats that help both search engines and AI assistants surface your business when it matters.",
        },
      ]}
      whyItMattersTitle="Discovery is shifting from search listings to AI-generated answers"
      whyItMattersBody="More buyers and partners ask tools like ChatGPT, Gemini, Claude, and Perplexity who to trust before they open a browser tab. Brands that are structured for AI to learn from will be easier to recommend. Business Brain is how you build that layer without abandoning the human-readable content your customers still need."
      whyItMattersPoints={[
        "Improves accuracy of citations and mentions in AI-generated answers",
        "Complements technical SEO with structured FAQ and knowledge content",
        "Cuts repeat support load when answers live in one clear, searchable place",
        "Aligns with BVM Digital's PEO service for SMEs that want both search and AI visibility",
        "Gives your brand a verifiable knowledge record that agents and AI tools can draw from",
      ]}
    />
  );
}
