import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteCopy";
import data from "@/data/faqKnowledgebase.json";
import { knowledgeBaseHowToSchemas } from "@/lib/knowledgeHowTos";

type Entry = { id: string; question: string; answer: string };

const entries = data.entries as Entry[];
const meta = data.meta as { title: string; description: string; categories: { id: string; label: string }[] };

export const metadata: Metadata = {
  title: "BVM Knowledgebase. Answers about Bold Vision MultiTech, AscendSME, and the BVM ecosystem",
  description:
    "The official BVM knowledgebase. Structured answers about Bold Vision MultiTech, BVM Digital, AscendSME, SEO and PEO, AI consulting, and every BVM product. Built for humans and AI assistants.",
  keywords:
    "BVM knowledgebase, BVM FAQ, AscendSME FAQ, Prompt Engine Optimization, PEO, BVM Digital services, African SME platform FAQ, AI recommendations, AI citations, ChatGPT brand discovery",
  alternates: { canonical: `${SITE_URL}/knowledgebase` },
  openGraph: {
    title: "BVM Knowledgebase: 65 structured answers for humans and AI assistants",
    description:
      "Every question about BVM Digital, AscendSME, PEO, and the full BVM ecosystem. Structured for search engines and AI models alike.",
    url: `${SITE_URL}/knowledgebase`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: meta.title,
  description: meta.description,
  url: "https://b-vm.com/knowledgebase",
  publisher: { "@id": "https://b-vm.com/#organization" },
  mainEntity: entries.map((e) => ({
    "@type": "Question",
    name: e.question,
    acceptedAnswer: { "@type": "Answer", text: e.answer },
  })),
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "BVM Knowledgebase",
  description: meta.description,
  url: "https://b-vm.com/knowledgebase",
  isPartOf: { "@id": "https://b-vm.com/#website" },
  about: meta.categories.map((c) => ({ "@type": "Thing", name: c.label })),
};

export default function KnowledgebaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {knowledgeBaseHowToSchemas().map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
