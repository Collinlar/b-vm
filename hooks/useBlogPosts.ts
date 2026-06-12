'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { BlogPost, BlogPostFormData, BlogCategory } from '@/types/blog';

export const useAdminBlogPosts = () =>
  useQuery({
    queryKey: ['admin-blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as BlogPost[];
    },
  });

export const useAdminBlogPost = (id: string) =>
  useQuery({
    queryKey: ['admin-blog-post', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      return data as BlogPost;
    },
    enabled: !!id,
  });

export const useCreateBlogPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (post: BlogPostFormData) => {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([{ ...post, publish_date: post.publish_date || null }])
        .select()
        .single();
      if (error) throw error;
      return data as BlogPost;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
    },
  });
};

export const useUpdateBlogPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, post }: { id: string; post: Partial<BlogPostFormData> }) => {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(post)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data as BlogPost;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
      queryClient.invalidateQueries({ queryKey: ['admin-blog-post'] });
    },
  });
};

export const useDeleteBlogPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
    },
  });
};
