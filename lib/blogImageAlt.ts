import type { BlogCategory } from "@/types/blog";
import { CATEGORY_LABELS } from "@/types/blog";

const PULSE_ENTITY = "The BVM Pulse · Bold Vision MultiTech";

export function pulseListingImageAlt(title: string, category: BlogCategory): string {
  return `${title} · ${CATEGORY_LABELS[category]} · ${PULSE_ENTITY} · insights for African SMEs`;
}

export function pulseArticleHeroImageAlt(title: string, category: BlogCategory): string {
  return `Featured image for article: ${title} · ${CATEGORY_LABELS[category]} · ${PULSE_ENTITY}`;
}
