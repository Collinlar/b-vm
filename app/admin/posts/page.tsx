'use client';

import { useState } from "react";
import Link from "next/link";
import { useAdminBlogPosts, useDeleteBlogPost } from "@/hooks/useBlogPosts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Edit, Trash2, Eye, Search, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/types/blog";
import { format } from "date-fns";
import { toast } from "sonner";

export default function AdminPosts() {
  const { data: posts, isLoading } = useAdminBlogPosts();
  const deletePost = useDeleteBlogPost();
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filteredPosts = posts?.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deletePost.mutateAsync(deleteId);
      toast.success("Post deleted");
    } catch {
      toast.error("Could not delete that post. Try again.");
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">All Posts</h1>
          <p className="text-muted-foreground">Manage your blog articles</p>
        </div>
        <Link href="/admin/posts/new">
          <Button className="gap-2"><Plus className="w-4 h-4" />New Post</Button>
        </Link>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Posts ({filteredPosts?.length || 0})</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-border">
                  <Skeleton className="h-16 w-24 rounded" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-64 mb-2" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                  <Skeleton className="h-8 w-24" />
                </div>
              ))}
            </div>
          ) : filteredPosts?.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                {searchQuery ? "No posts match your search" : "No posts yet"}
              </p>
              {!searchQuery && (
                <Link href="/admin/posts/new">
                  <Button className="gap-2"><Plus className="w-4 h-4" />Create Post</Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="divide-y divide-border">
              {filteredPosts?.map((post) => (
                <div key={post.id} className="flex items-center gap-4 py-4">
                  <div className="w-24 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    {post.featured_image_url ? (
                      // Using plain img here intentionally — admin-only, arbitrary external URLs
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.featured_image_url} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-6 h-6 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">{post.title}</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <Badge variant="outline" className={`text-xs ${CATEGORY_COLORS[post.category]}`}>
                        {CATEGORY_LABELS[post.category]}
                      </Badge>
                      <span className="text-xs text-muted-foreground">by {post.author_name}</span>
                      {post.publish_date && (
                        <span className="text-xs text-muted-foreground">
                          • {format(new Date(post.publish_date), 'MMM d, yyyy')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Badge variant={post.published ? "default" : "secondary"}>
                      {post.published ? "Published" : "Draft"}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    {post.published && (
                      <Link href={`/pulse/${post.slug}`} target="_blank">
                        <Button variant="ghost" size="icon" title="View"><Eye className="w-4 h-4" /></Button>
                      </Link>
                    )}
                    <Link href={`/admin/posts/${post.id}`}>
                      <Button variant="ghost" size="icon" title="Edit"><Edit className="w-4 h-4" /></Button>
                    </Link>
                    <Button variant="ghost" size="icon" title="Delete" onClick={() => setDeleteId(post.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post? This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
