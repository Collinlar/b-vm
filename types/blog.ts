export type BlogCategory =
  | "market_intelligence"
  | "company_updates"
  | "sme_insights"
  | "opinion_thought_leadership"
  | "case_studies";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  featured_image_url: string | null;
  category: BlogCategory;
  author_name: string;
  author_same_as: string | null;
  author_bio: string | null;
  published: boolean;
  publish_date: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPostFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url: string;
  category: BlogCategory;
  author_name: string;
  author_same_as?: string;
  author_bio?: string;
  published: boolean;
  publish_date: string;
  meta_title: string;
  meta_description: string;
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  market_intelligence: "Market Intelligence",
  company_updates: "Company Updates",
  sme_insights: "SME Insights",
  opinion_thought_leadership: "Opinion & Thought Leadership",
  case_studies: "Case Studies",
};

export const CATEGORY_COLORS: Record<BlogCategory, string> = {
  market_intelligence: "bg-secondary text-secondary-foreground",
  company_updates: "bg-primary text-primary-foreground",
  sme_insights: "bg-accent text-accent-foreground",
  opinion_thought_leadership: "bg-muted text-muted-foreground",
  case_studies: "bg-secondary/80 text-secondary-foreground",
};
