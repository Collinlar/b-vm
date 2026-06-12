import type { Metadata } from "next";
import { SITE_URL, BVM_EMAIL, BVM_PHONE_E164, ASCENDSME_EMAIL } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "Contact BVM, Let's Start a Real Conversation",
  description:
    "Reach the BVM team for website design, SEO and PEO, AI consulting, AscendSME support, or partnership enquiries. We respond to every message within 1 business day.",
  keywords:
    "contact BVM, BVM Digital contact, AscendSME support, partnership enquiry, AI consulting Ghana",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact BVM, Let's Start a Real Conversation",
    description:
      "Website design, SEO, PEO, AI consulting, AscendSME, or partnerships. We respond to every enquiry within 1 business day.",
    url: `${SITE_URL}/contact`,
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://b-vm.com/contact",
  name: "Contact Bold Vision MultiTech",
  description: "Reach the BVM team for digital services, AscendSME support, and partnership enquiries.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://b-vm.com/#organization",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: BVM_EMAIL,
        telephone: BVM_PHONE_E164,
        availableLanguage: ["English"],
        areaServed: "Africa",
      },
      {
        "@type": "ContactPoint",
        contactType: "Business Enquiries",
        email: BVM_EMAIL,
        telephone: BVM_PHONE_E164,
        availableLanguage: ["English"],
        areaServed: "Africa",
      },
      {
        "@type": "ContactPoint",
        contactType: "Technical Support",
        email: ASCENDSME_EMAIL,
        availableLanguage: ["English"],
        areaServed: "Africa",
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
