'use client';

import PostEditor from "@/components/admin/PostEditor";

export default function EditPost({ params }: { params: { id: string } }) {
  return <PostEditor id={params.id} />;
}
