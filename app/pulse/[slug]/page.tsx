import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/blog/ShareButtons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getBlogPost, getAllPublishedSlugs, getRelatedPosts } from "@/lib/blog";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/types/blog";
import { pulseArticleHeroImageAlt, pulseListingImageAlt } from "@/lib/blogImageAlt";
import { Calendar, ArrowLeft, User, Zap, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { SITE_URL } from "@/lib/siteCopy";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Article Not Found" };

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt || "";
  const url = `${SITE_URL}/pulse/${post.slug}`;
  const image = post.featured_image_url || undefined;

  return {
    title,
    description,
    keywords: [CATEGORY_LABELS[post.category], "BVM Pulse", "African SME", "Bold Vision MultiTech"].join(", "),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.publish_date || undefined,
      modifiedTime: post.updated_at,
      authors: [post.author_name],
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function PulseArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post.category, post.id);

  const author: Record<string, unknown> = {
    "@type": "Person",
    name: post.author_name,
  };
  const profile = post.author_same_as?.trim();
  if (profile) {
    author.url = profile;
    author.sameAs = [profile];
  }
  if (post.author_bio?.trim()) {
    author.description = post.author_bio.trim();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || "",
    image: post.featured_image_url || "https://b-vm.com/opengraph-image.png",
    author,
    publisher: {
      "@type": "Organization",
      name: "BVM (Bold Vision MultiTech)",
      logo: { "@type": "ImageObject", url: "https://b-vm.com/logo.png" },
    },
    datePublished: post.publish_date,
    dateModified: post.updated_at,
    articleSection: CATEGORY_LABELS[post.category],
    inLanguage: "en",
    isPartOf: {
      "@type": "Blog",
      "@id": "https://b-vm.com/pulse#blog",
      name: "The BVM Pulse",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://b-vm.com/pulse/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Navigation />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <Link
            href="/pulse"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to The BVM Pulse
          </Link>

          <header className="max-w-4xl mx-auto mb-12">
            <Badge className={`mb-6 ${CATEGORY_COLORS[post.category]}`}>
              {CATEGORY_LABELS[post.category]}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{post.excerpt}</p>
            )}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author_same_as?.trim() ? (
                    <a
                      href={post.author_same_as.trim()}
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {post.author_name}
                    </a>
                  ) : (
                    <span>{post.author_name}</span>
                  )}
                </div>
                {post.publish_date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.publish_date}>
                      {format(new Date(post.publish_date), "MMMM d, yyyy")}
                    </time>
                  </div>
                )}
              </div>
              <ShareButtons
                url={`https://b-vm.com/pulse/${post.slug}`}
                title={post.title}
                description={post.excerpt || undefined}
              />
            </div>
          </header>

          {post.featured_image_url && (
            <div className="max-w-5xl mx-auto mb-12">
              <Image
                src={post.featured_image_url}
                alt={pulseArticleHeroImageAlt(post.title, post.category)}
                width={1200}
                height={630}
                className="w-full rounded-2xl shadow-xl"
                priority
              />
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </div>

          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">{post.author_name}</p>
                {post.author_bio?.trim() ? (
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{post.author_bio.trim()}</p>
                ) : (
                  <p className="text-muted-foreground text-sm">Contributing author · The BVM Pulse</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">Related Articles</h2>
              <Link href="/pulse" className="text-primary hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/pulse/${relatedPost.slug}`} className="group">
                  <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all">
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      {relatedPost.featured_image_url ? (
                        <Image
                          src={relatedPost.featured_image_url}
                          alt={pulseListingImageAlt(relatedPost.title, relatedPost.category)}
                          width={640}
                          height={360}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                          <Zap className="w-10 h-10 text-primary/30" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
