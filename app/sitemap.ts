import type { MetadataRoute } from "next";
import { getAllPublishedSlugs } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteCopy";

export const revalidate = 3600;

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE_URL}/ascendsme`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/bvm-digital`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/partnerships`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/knowledgebase`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/pulse`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  { url: `${SITE_URL}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/products/ai-social-media-manager`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/products/whatsapp-bot`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/products/business-brain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/products/trustshield`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/bvm-technologies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/bvm-academy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/bvm-mcp`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/careers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPublishedSlugs();

  const blogRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/pulse/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
