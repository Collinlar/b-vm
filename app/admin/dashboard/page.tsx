'use client';

import Link from "next/link";
import { useAdminBlogPosts } from "@/hooks/useBlogPosts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, Plus, Eye, Edit, Clock, CheckCircle } from "lucide-react";
import { CATEGORY_LABELS } from "@/types/blog";

export default function AdminDashboard() {
  const { data: posts, isLoading } = useAdminBlogPosts();

  const publishedPosts = posts?.filter((p) => p.published) || [];
  const draftPosts = posts?.filter((p) => !p.published) || [];
  const recentPosts = posts?.slice(0, 5) || [];

  const stats = [
    { label: "Total Posts", value: posts?.length || 0, icon: FileText, color: "bg-primary/10 text-primary" },
    { label: "Published", value: publishedPosts.length, icon: CheckCircle, color: "bg-green-500/10 text-green-600" },
    { label: "Drafts", value: draftPosts.length, icon: Clock, color: "bg-yellow-500/10 text-yellow-600" },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <Link href="/admin/posts/new">
          <Button className="gap-2"><Plus className="w-4 h-4" />New Post</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  {isLoading ? (
                    <Skeleton className="h-8 w-16 mt-1" />
                  ) : (
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  )}
                </div>
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Posts</CardTitle>
          <Link href="/admin/posts">
            <Button variant="ghost" size="sm">View All</Button>
          </Link>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex-1">
                    <Skeleton className="h-5 w-64 mb-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <Skeleton className="h-8 w-20" />
                </div>
              ))}
            </div>
          ) : recentPosts.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No posts yet. Create your first post.</p>
              <Link href="/admin/posts/new">
                <Button className="gap-2"><Plus className="w-4 h-4" />Create Post</Button>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between py-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">{post.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span className="truncate">{CATEGORY_LABELS[post.category]}</span>
                      <span>•</span>
                      <span className={post.published ? "text-green-600" : "text-yellow-600"}>
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {post.published && (
                      <Link href={`/pulse/${post.slug}`} target="_blank">
                        <Button variant="ghost" size="icon"><Eye className="w-4 h-4" /></Button>
                      </Link>
                    )}
                    <Link href={`/admin/posts/${post.id}`}>
                      <Button variant="ghost" size="icon"><Edit className="w-4 h-4" /></Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
