import type { Metadata } from "next";
import "./globals.css";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schemas";
import {
  SITE_META_DESCRIPTION,
  SITE_META_KEYWORDS,
  SITE_TAGLINE,
  SITE_URL,
  OG_IMAGE,
  SITE_NAME,
} from "@/lib/siteCopy";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_TAGLINE} | BVM`,
    template: "%s | BVM",
  },
  description: SITE_META_DESCRIPTION,
  keywords: SITE_META_KEYWORDS,
  authors: [{ name: "BVM (Bold Vision MultiTech) Ltd" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GH",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-GH": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  other: {
    "geo.region": "GH",
    "geo.placename": "Accra, Ghana",
    language: "English",
    "revisit-after": "7 days",
    copyright: "BVM (Bold Vision MultiTech) Ltd",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Global structured data — server-rendered on first byte, visible to all AI and search crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
