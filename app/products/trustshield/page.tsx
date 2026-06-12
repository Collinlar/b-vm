import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import ProductPageLayout from "@/components/products/ProductPageLayout";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "BVM TrustShield | Buyer-Seller Trust Infrastructure for African Commerce | BVM",
  description:
    "TrustShield is BVM's trust infrastructure for digital commerce in Africa. Verified seller credibility, protected transactions, and escrow — so buyers and sellers can trade with confidence, even when they have never met.",
  keywords:
    "buyer seller trust Ghana, digital commerce trust Africa, escrow service Ghana, online marketplace trust, B2B trading trust Africa, BVM TrustShield, safe online transactions Ghana",
  alternates: { canonical: `${SITE_URL}/products/trustshield` },
  openGraph: {
    title: "BVM TrustShield | Buyer-Seller Trust Infrastructure for African Commerce",
    description:
      "Verified seller credibility, protected transactions, and escrow for digital commerce in Africa. Trade with confidence, even with parties you have never met.",
    url: `${SITE_URL}/products/trustshield`,
  },
};

export default function TrustShield() {
  return (
    <ProductPageLayout
      seoTitle="BVM TrustShield | Buyer-Seller Trust Infrastructure for African Commerce | BVM"
      seoDescription="TrustShield is BVM's trust infrastructure for digital commerce in Africa. Verified seller credibility, protected transactions, and escrow — so buyers and sellers can trade with confidence, even when they have never met."
      seoPath="/products/trustshield"
      definitionLead="BVM TrustShield is trust infrastructure for digital commerce. It gives buyers confidence that the seller they are dealing with is verified and credible, gives sellers a badge that converts hesitant buyers, and protects transactions through escrow so funds only move when both parties are satisfied."
      eyebrow="Products. TrustShield"
      Icon={ShieldCheck}
      title={
        <>
          Trade with confidence.{" "}
          <span className="text-gradient-orange">Even with strangers.</span>
        </>
      }
      subtitle="Digital commerce in Africa is growing fast. The obstacle is not awareness or demand — it is trust. Buyers hesitate because they cannot verify sellers. Sellers lose sales because buyers fear being cheated. TrustShield is the infrastructure that closes that gap: verified seller profiles, trust signals that convert, and escrow protection that makes every transaction safe."
      status="In Development"
      heroImage="/assets/product-trustshield.jpg"
      heroImageAlt="BVM TrustShield: buyer-seller trust infrastructure for digital commerce in Africa"
      builtFor="Online sellers, marketplace operators, B2B buyers, and any platform facilitating transactions between parties who do not know each other. Especially relevant in Ghana and across Africa where the trust deficit between buyers and sellers is one of the primary barriers to digital commerce growth."
      whatItIsTitle="The layer between intent and completed transaction"
      whatItIsBody="Most digital commerce in Africa fails not because buyers lack money or sellers lack products, but because neither party trusts the other enough to commit. TrustShield is not a rating system or a review platform. It is active trust infrastructure: verified identity, operational credibility signals, and transaction protection that removes the risk from both sides of the deal."
      capabilities={[
        {
          title: "Verified seller profiles",
          description:
            "Sellers complete a verification process that confirms business registration, identity, and basic operational history. A TrustShield badge on a listing tells buyers this seller is real, confirmed, and accountable.",
        },
        {
          title: "Buyer-facing trust signals",
          description:
            "Trust signals displayed on product listings, storefronts, and marketplace profiles. Not just a badge — structured data that shows what was verified, when, and to what level. Buyers can see exactly what they are transacting with.",
        },
        {
          title: "Transaction escrow",
          description:
            "Funds are held in escrow from the moment a buyer commits. The seller ships or delivers. The buyer confirms. The funds release. If there is a dispute, TrustShield mediates before any money moves. Neither side can be cheated by default.",
        },
        {
          title: "Dispute resolution layer",
          description:
            "When delivery is contested, TrustShield's structured dispute process gives both parties a clear path to resolution before funds are released or returned. Removes the friction and uncertainty that kills repeat business.",
        },
        {
          title: "Platform and marketplace API",
          description:
            "Marketplaces, e-commerce platforms, and B2B trading platforms can integrate TrustShield's trust signals and escrow engine via API. Build verified commerce into any platform without building the trust infrastructure yourself.",
        },
      ]}
      whyItMattersTitle="The trust gap is the biggest hidden cost in African digital commerce"
      whyItMattersBody="Every transaction that does not happen because a buyer was not sure the seller was legitimate is lost commerce. Every seller who cannot grow their online business because buyers default to physical markets is trapped by a structural problem, not a product problem. TrustShield does not just protect individual transactions — it expands the total volume of commerce that can happen digitally by making trust the default, not the exception."
      whyItMattersPoints={[
        "Converts hesitant buyers into committed ones by removing the fear of being cheated",
        "Gives verified sellers a competitive advantage over unverified listings on the same platform",
        "Escrow removes the most common reason high-value transactions fail to complete online",
        "Dispute resolution gives both parties confidence that there is a fair process if something goes wrong",
        "Platform API means any marketplace or e-commerce platform can offer TrustShield protection without building it themselves",
        "Works independently of the AscendSME Sustainability Score — TrustShield is about the transaction, not the business trajectory",
      ]}
    />
  );
}
