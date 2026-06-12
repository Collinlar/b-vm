'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminBlogPost, useCreateBlogPost, useUpdateBlogPost } from "@/hooks/useBlogPosts";
import type { BlogCategory, BlogPostFormData } from "@/types/blog";
import { CATEGORY_LABELS } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Save, Loader2, Eye } from "lucide-react";
import { toast } from "sonner";
import RichTextEditor from "@/components/admin/RichTextEditor";

const generateSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

const EMPTY_FORM: BlogPostFormData = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  featured_image_url: '',
  category: 'company_updates',
  author_name: '',
  author_same_as: '',
  author_bio: '',
  published: false,
  publish_date: '',
  meta_title: '',
  meta_description: '',
};

interface PostEditorProps {
  id?: string;
}

export default function PostEditor({ id }: PostEditorProps) {
  const router = useRouter();
  const isEditing = !!id;

  const { data: existingPost, isLoading: postLoading } = useAdminBlogPost(id ?? '');
  const createPost = useCreateBlogPost();
  const updatePost = useUpdateBlogPost();

  const [formData, setFormData] = useState<BlogPostFormData>(EMPTY_FORM);
  const [autoSlug, setAutoSlug] = useState(true);

  useEffect(() => {
    if (existingPost && isEditing) {
      setFormData({
        title: existingPost.title,
        slug: existingPost.slug,
        excerpt: existingPost.excerpt || '',
        content: existingPost.content || '',
        featured_image_url: existingPost.featured_image_url || '',
        category: existingPost.category,
        author_name: existingPost.author_name,
        author_same_as: existingPost.author_same_as ?? '',
        author_bio: existingPost.author_bio ?? '',
        published: existingPost.published,
        publish_date: existingPost.publish_date ? existingPost.publish_date.split('T')[0] : '',
        meta_title: existingPost.meta_title || '',
        meta_description: existingPost.meta_description || '',
      });
      setAutoSlug(false);
    }
  }, [existingPost, isEditing]);

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: autoSlug ? generateSlug(title) : prev.slug,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) { toast.error("Title is required"); return; }
    if (!formData.slug.trim()) { toast.error("Slug is required"); return; }
    if (!formData.author_name.trim()) { toast.error("Author name is required"); return; }

    try {
      if (isEditing && id) {
        await updatePost.mutateAsync({ id, post: formData });
        toast.success("Post updated");
      } else {
        await createPost.mutateAsync(formData);
        toast.success("Post created");
      }
      router.push('/admin/posts');
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : '';
      if (msg.includes('duplicate key')) {
        toast.error("A post with this slug already exists");
      } else {
        toast.error(isEditing ? "Could not update post. Try again." : "Could not create post. Try again.");
      }
    }
  };

  const isSubmitting = createPost.isPending || updatePost.isPending;

  if (postLoading && isEditing) {
    return (
      <div className="p-8">
        <Skeleton className="h-8 w-48 mb-8" />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={() => router.push('/admin/posts')}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{isEditing ? 'Edit Post' : 'New Post'}</h1>
          <p className="text-muted-foreground">{isEditing ? 'Update your article' : 'Create a new article'}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader><CardTitle>Content</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input id="title" value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter article title" required />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="slug">URL Slug *</Label>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground">
                      <input type="checkbox" checked={autoSlug}
                        onChange={(e) => setAutoSlug(e.target.checked)} className="rounded" />
                      Auto-generate
                    </label>
                  </div>
                  <Input id="slug" value={formData.slug}
                    onChange={(e) => { setAutoSlug(false); setFormData((prev) => ({ ...prev, slug: e.target.value })); }}
                    placeholder="article-url-slug" required />
                  <p className="text-xs text-muted-foreground">
                    URL: /pulse/{formData.slug || 'article-slug'}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea id="excerpt" value={formData.excerpt}
                    onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Brief summary of the article (shown in previews)" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label>Content</Label>
                  <RichTextEditor content={formData.content}
                    onChange={(content) => setFormData((prev) => ({ ...prev, content }))}
                    placeholder="Start writing your article..." />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>SEO Settings</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta_title">Meta Title</Label>
                  <Input id="meta_title" value={formData.meta_title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, meta_title: e.target.value }))}
                    placeholder="SEO title (defaults to article title)" maxLength={60} />
                  <p className="text-xs text-muted-foreground">{formData.meta_title.length}/60 characters</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta_description">Meta Description</Label>
                  <Textarea id="meta_description" value={formData.meta_description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, meta_description: e.target.value }))}
                    placeholder="SEO description (defaults to excerpt)" rows={2} maxLength={160} />
                  <p className="text-xs text-muted-foreground">{formData.meta_description.length}/160 characters</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle>Publish</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="published">Published</Label>
                  <Switch id="published" checked={formData.published}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, published: checked }))} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="publish_date">Publish Date</Label>
                  <Input id="publish_date" type="date" value={formData.publish_date}
                    onChange={(e) => setFormData((prev) => ({ ...prev, publish_date: e.target.value }))} />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1 gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" />Saving...</>
                    ) : (
                      <><Save className="w-4 h-4" />{isEditing ? 'Update' : 'Create'}</>
                    )}
                  </Button>
                  {isEditing && formData.published && (
                    <Button type="button" variant="outline"
                      onClick={() => window.open(`/pulse/${formData.slug}`, '_blank')}>
                      <Eye className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Details</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category}
                    onValueChange={(value: BlogCategory) => setFormData((prev) => ({ ...prev, category: value }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                        <SelectItem key={value} value={value}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author_name">Author Name *</Label>
                  <Input id="author_name" value={formData.author_name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, author_name: e.target.value }))}
                    placeholder="Author's full name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author_same_as">Author profile URL (optional)</Label>
                  <Input id="author_same_as" value={formData.author_same_as ?? ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, author_same_as: e.target.value }))}
                    placeholder="https://www.linkedin.com/in/..." />
                  <p className="text-xs text-muted-foreground">
                    Used for structured data (sameAs) to strengthen author authority in search and AI citations.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author_bio">Author bio (optional)</Label>
                  <Textarea id="author_bio" value={formData.author_bio ?? ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, author_bio: e.target.value }))}
                    placeholder="One or two short lines about the author" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="featured_image_url">Featured Image URL</Label>
                  <Input id="featured_image_url" value={formData.featured_image_url}
                    onChange={(e) => setFormData((prev) => ({ ...prev, featured_image_url: e.target.value }))}
                    placeholder="https://example.com/image.jpg" />
                  {formData.featured_image_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={formData.featured_image_url} alt="Preview"
                      className="w-full h-32 object-cover rounded-lg mt-2"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
