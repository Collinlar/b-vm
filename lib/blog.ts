import { createServerClient } from "./supabase";
import type { BlogPost, BlogCategory } from "@/types/blog";

export async function getBlogPosts(category?: BlogCategory): Promise<BlogPost[]> {
  try {
    const supabase = createServerClient();
    if (!supabase) return [];
    let query = supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .lte("publish_date", new Date().toISOString())
      .order("publish_date", { ascending: false });

    if (category) {
      query = query.eq("category", category);
    }

    const { data, error } = await query;
    if (error) return [];
    return (data as BlogPost[]) ?? [];
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const supabase = createServerClient();
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .lte("publish_date", new Date().toISOString())
      .single();

    if (error) return null;
    return data as BlogPost;
  } catch {
    return null;
  }
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  try {
    const supabase = createServerClient();
    if (!supabase) return [];
    const { data } = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("published", true)
      .lte("publish_date", new Date().toISOString());

    return (data ?? []).map((row: { slug: string }) => row.slug);
  } catch {
    return [];
  }
}

export async function getRelatedPosts(
  category: BlogCategory,
  excludeId: string
): Promise<BlogPost[]> {
  try {
    const supabase = createServerClient();
    if (!supabase) return [];
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .eq("category", category)
      .neq("id", excludeId)
      .lte("publish_date", new Date().toISOString())
      .order("publish_date", { ascending: false })
      .limit(3);

    return (data as BlogPost[]) ?? [];
  } catch {
    return [];
  }
}

/** For admin — returns all posts regardless of published/date status */
export async function getAdminBlogPosts(): Promise<BlogPost[]> {
  try {
    const supabase = createServerClient();
    if (!supabase) return [];
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return [];
    return (data as BlogPost[]) ?? [];
  } catch {
    return [];
  }
}

export async function getAdminBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const supabase = createServerClient();
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) return null;
    return data as BlogPost;
  } catch {
    return null;
  }
}
