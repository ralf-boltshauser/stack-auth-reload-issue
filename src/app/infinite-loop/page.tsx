import { getSafePosts } from "@/lib/infinite-loop-actions";
import UpdatePostsList from "./update-posts-list";

export default async function InfiniteLoop() {
  const posts = await getSafePosts();
  return <UpdatePostsList posts={posts} />;
}
