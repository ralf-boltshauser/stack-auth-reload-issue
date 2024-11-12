"use client";

import { Button } from "@/components/ui/button";
import { updatePost } from "@/lib/infinite-loop-actions";
import { Post } from "@prisma/client";
import { useAction } from "next-safe-action/hooks";

export default function UpdatePostsList({ posts }: { posts: Post[] }) {
  const { execute } = useAction(updatePost);
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div key={post.id} className="flex items-center gap-4">
          {post.title}
          <Button onClick={() => execute({ postId: post.id })}>Update</Button>
        </div>
      ))}
    </div>
  );
}
