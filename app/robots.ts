import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteCopy";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/products/studio",
          "/products/faqs-knowledgebase",
          "/sme-academy",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
