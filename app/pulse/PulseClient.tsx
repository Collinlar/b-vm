'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost, BlogCategory } from "@/types/blog";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/types/blog";
import { pulseListingImageAlt } from "@/lib/blogImageAlt";
import { Calendar, ArrowRight, Zap } from "lucide-react";
import { format } from "date-fns";

const CATEGORIES: { value: BlogCategory | "all"; label: string }[] = [
  { value: "all", label: "All Articles" },
  { value: "market_intelligence", label: "Market Intelligence" },
  { value: "company_updates", label: "Company Updates" },
  { value: "sme_insights", label: "SME Insights" },
  { value: "opinion_thought_leadership", label: "Thought Leadership" },
  { value: "case_studies", label: "Case Studies" },
];

export default function PulseClient({ posts }: { posts: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");

  const filtered =
    selectedCategory === "all" ? posts : posts.filter((p) => p.category === selectedCategory);

  const featuredPost = selectedCategory === "all" ? filtered[0] : undefined;
  const listPosts = selectedCategory === "all" ? filtered.slice(1) : filtered;

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles in this category yet. Check back soon.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <Link href={`/pulse/${featuredPost.slug}`} className="block mb-16 group">
                  <Card className="overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                        {featuredPost.featured_image_url ? (
                          <Image
                            src={featuredPost.featured_image_url}
                            alt={pulseListingImageAlt(featuredPost.title, featuredPost.category)}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                            <Zap className="w-16 h-16 text-primary/40" />
                          </div>
                        )}
                      </div>
                      <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                        <Badge className={`w-fit mb-4 ${CATEGORY_COLORS[featuredPost.category]}`}>
                          {CATEGORY_LABELS[featuredPost.category]}
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {featuredPost.publish_date &&
                              format(new Date(featuredPost.publish_date), "MMM d, yyyy")}
                            <span className="mx-2">·</span>
                            {featuredPost.author_name}
                          </div>
                          <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              )}

              {/* Article Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {listPosts.map((post) => (
                  <Link key={post.id} href={`/pulse/${post.slug}`} className="group">
                    <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all">
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        {post.featured_image_url ? (
                          <Image
                            src={post.featured_image_url}
                            alt={pulseListingImageAlt(post.title, post.category)}
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
                        <Badge className={`mb-3 ${CATEGORY_COLORS[post.category]}`}>
                          {CATEGORY_LABELS[post.category]}
                        </Badge>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {post.publish_date && format(new Date(post.publish_date), "MMM d, yyyy")}
                          <span className="mx-1">·</span>
                          {post.author_name}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
