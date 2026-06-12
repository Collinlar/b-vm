import {
  SITE_TAGLINE,
  SITE_META_DESCRIPTION,
  FOUNDER_LINKEDIN_URL,
  ORGANIZATION_SAME_AS,
  BVM_EMAIL,
  ASCENDSME_EMAIL,
  BVM_PHONE_E164,
  ORG_STREET_ADDRESS,
  ORG_ADDRESS_LOCALITY,
  ORG_ADDRESS_REGION,
  ORG_ADDRESS_COUNTRY,
  ORG_FOUNDING_YEAR,
} from "./siteCopy";

/** Shared Organization schema — embedded on every page. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://b-vm.com/#organization",
  name: "BVM (Bold Vision MultiTech) Ltd",
  alternateName: ["BVM", "Bold Vision MultiTech", "BVM Digital"],
  url: "https://b-vm.com",
  slogan: SITE_TAGLINE,
  logo: {
    "@type": "ImageObject",
    url: "https://b-vm.com/logo.png",
    width: 512,
    height: 512,
  },
  description:
    "Bold Vision MultiTech (BVM) builds tools and intelligence for the African business: business management software (AscendSME), BVM Digital services, AI tools, and Prompt Engine Optimization.",
  foundingDate: ORG_FOUNDING_YEAR,
  founder: {
    "@type": "Person",
    name: "Collins Lartey",
    url: FOUNDER_LINKEDIN_URL,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: ORG_STREET_ADDRESS,
    addressLocality: ORG_ADDRESS_LOCALITY,
    addressRegion: ORG_ADDRESS_REGION,
    addressCountry: ORG_ADDRESS_COUNTRY,
  },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: ORG_ADDRESS_COUNTRY,
      addressLocality: ORG_ADDRESS_LOCALITY,
    },
  },
  areaServed: [
    { "@type": "Country", name: "Ghana" },
    { "@type": "Continent", name: "Africa" },
  ],
  sameAs: [...ORGANIZATION_SAME_AS],
  telephone: BVM_PHONE_E164,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: BVM_EMAIL,
      telephone: BVM_PHONE_E164,
      availableLanguage: ["English"],
      areaServed: ["GH", { "@type": "Continent", name: "Africa" }],
    },
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: BVM_EMAIL,
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "Technical Support",
      email: ASCENDSME_EMAIL,
      availableLanguage: ["English"],
      areaServed: ["GH", { "@type": "Continent", name: "Africa" }],
    },
  ],
  knowsAbout: [
    "Business management software Africa",
    "SME tools Ghana",
    "Digital solutions for African businesses",
    "Prompt Engine Optimization",
    "AscendSME",
    "BVM Digital",
    "Sustainability Score",
    "Web design Ghana",
    "African business infrastructure",
    "Investment readiness for SMEs",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://b-vm.com/#localbusiness",
  name: "BVM (Bold Vision MultiTech) Ltd",
  url: "https://b-vm.com",
  telephone: BVM_PHONE_E164,
  email: BVM_EMAIL,
  priceRange: "$$",
  parentOrganization: { "@id": "https://b-vm.com/#organization" },
  address: {
    "@type": "PostalAddress",
    streetAddress: ORG_STREET_ADDRESS,
    addressLocality: ORG_ADDRESS_LOCALITY,
    addressRegion: ORG_ADDRESS_REGION,
    addressCountry: ORG_ADDRESS_COUNTRY,
  },
  areaServed: [
    { "@type": "Country", name: "Ghana" },
    { "@type": "Continent", name: "Africa" },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://b-vm.com/#website",
  url: "https://b-vm.com",
  name: "BVM (Bold Vision MultiTech)",
  description: SITE_META_DESCRIPTION,
  publisher: { "@id": "https://b-vm.com/#organization" },
  inLanguage: "en",
};

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://b-vm.com${item.path === "" ? "/" : item.path}`,
    })),
  };
}
