import CreatePostsButtons from "@/components/create-posts-buttons";
import { getPosts } from "@/lib/actions";
import { stackServerApp } from "@/stack";

export default async function ProtectedPage() {
  await stackServerApp.getUser({ or: "redirect" });
  const posts = await getPosts();
  return (
    <div>
      <h1>Protected Page</h1>
      <div className="flex flex-col gap-1 my-3">
        {posts.map((post) => (
          <div key={post.id} className="text-sm text-muted-foreground">
            {post.title}
          </div>
        ))}
      </div>
      <CreatePostsButtons />
    </div>
  );
}
