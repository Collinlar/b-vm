import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";
import ProductPageLayout from "@/components/products/ProductPageLayout";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "WhatsApp Business Bot for Africa | Lead Qualification & Customer Service AI | BVM",
  description:
    "A WhatsApp AI built for Africa's number one customer channel. Qualifies leads, surfaces product and pricing information, scores intent, and hands a confidence-weighted brief to your sales team.",
  keywords:
    "WhatsApp Business Bot Africa, WhatsApp bot Ghana, lead qualification AI, customer service automation, WhatsApp business AI, sales handoff, intent scoring, SME WhatsApp automation",
  alternates: { canonical: `${SITE_URL}/products/whatsapp-bot` },
  openGraph: {
    title: "WhatsApp Business Bot for Africa | BVM",
    description:
      "Lead qualification, intent scoring, and clean sales handoff on Africa's primary commerce channel. WhatsApp-native AI.",
    url: `${SITE_URL}/products/whatsapp-bot`,
  },
};

export default function WhatsAppBot() {
  return (
    <ProductPageLayout
      seoTitle="WhatsApp Business Bot for Africa | Lead Qualification & Customer Service AI | BVM"
      seoDescription="A WhatsApp AI built for Africa's number one customer channel. Qualifies leads, surfaces product and pricing information, scores intent, and hands a confidence-weighted brief to your sales team."
      seoPath="/products/whatsapp-bot"
      definitionLead="BVM's WhatsApp Customer Service Bot is an AI assistant that qualifies leads, answers product and pricing questions, and hands scored conversations to your sales team on Africa's primary commerce channel."
      eyebrow="Products. WhatsApp Customer Service Bot"
      Icon={MessageSquare}
      title={
        <>
          Built for Africa's <span className="text-gradient-orange">number one channel.</span>
        </>
      }
      subtitle="A WhatsApp AI that qualifies leads, surfaces product and pricing information, and delivers a confidence-weighted brief to your sales team. Your inbox stops being a bottleneck and starts being a pipeline."
      status="In Development"
      heroImage="/assets/product-whatsapp-bot.jpg"
      heroImageAlt="BVM WhatsApp Business Bot: African entrepreneur reviewing qualified WhatsApp leads on a phone"
      builtFor="SMEs, retailers, service businesses, and B2B teams across Africa whose customers buy, ask, and complain on WhatsApp before they ever touch a website. If WhatsApp drives your revenue, this is built for you."
      whatItIsTitle="A real conversation, not a clunky bot"
      whatItIsBody="The WhatsApp Customer Service Bot understands the way your customers actually talk. It answers product and pricing questions, qualifies real buyers from window shoppers, scores intent, and sends a clean handoff brief to whoever needs to close the deal."
      capabilities={[
        {
          title: "Natural lead qualification",
          description:
            "Asks the right questions in a conversational way. Builds a profile of every lead without making customers fill forms.",
        },
        {
          title: "Product and pricing intelligence",
          description:
            "Surfaces accurate product info, pricing, and availability from your catalogue. No more 'send me your price list' loops.",
        },
        {
          title: "Confidence-weighted intent scoring",
          description:
            "Every conversation is scored for purchase intent so your sales team knows where to focus first.",
        },
        {
          title: "Clean sales handoff",
          description:
            "When a lead is ready, your team gets a structured brief with the conversation context, the customer's needs, and the next best action.",
        },
      ]}
      whyItMattersTitle="WhatsApp is where Africa actually buys"
      whyItMattersBody="Most CRMs and chatbots were built for the western web funnel. African commerce runs through WhatsApp. The WhatsApp Customer Service Bot meets your customers where they already are, and turns conversations into qualified sales pipeline."
      whyItMattersPoints={[
        "Stops leads from getting lost in a busy WhatsApp inbox",
        "Frees your team from answering the same five questions every day",
        "Gives sales a prioritised, scored pipeline straight from chat",
        "Built around real African buying behaviour, not imported playbooks",
      ]}
    />
  );
}
