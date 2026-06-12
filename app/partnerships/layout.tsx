import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "Partnerships | Build With Bold Vision MultiTech",
  description:
    "Partner with Bold Vision MultiTech in Africa: B2B and fintech integrations, NGO and institutional SME programmes, referral networks, and ecosystem collaborations around AscendSME and BVM Digital.",
  keywords:
    "BVM partnerships, B2B partnership Africa, fintech partner Ghana, NGO SME partnership, technology partnership Africa, referral partner SME, institutional partnership, AscendSME partner, Bold Vision MultiTech partner",
  alternates: { canonical: `${SITE_URL}/partnerships` },
  openGraph: {
    title: "Partnerships | Build With Bold Vision MultiTech",
    description:
      "Four structured partnership types: technology integrations, referral networks, institutional programmes, and content collaborations. Built for the African SME ecosystem.",
    url: `${SITE_URL}/partnerships`,
  },
};

export default function PartnershipsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
