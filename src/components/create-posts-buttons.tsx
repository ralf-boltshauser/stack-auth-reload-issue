"use client";

import { createPost, createSecurePost } from "@/lib/actions";
import { Button } from "./ui/button";

export default function CreatePostsButtons() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <p>
          These buttons should only create something in the backend, not trigger
          revalidation.
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Button
          onClick={async () => {
            await createPost();
            alert("Post created!");
          }}
          variant={"outline"}
        >
          Create Post in background (no revalidation)
        </Button>
        <Button
          onClick={async () => {
            await createSecurePost();
            alert("Secure post created!");
          }}
          variant={"outline"}
        >
          Create Secure Post in background (<strong>should</strong> no
          revalidation) <strong>securely</strong>!
        </Button>
      </div>
    </div>
  );
}
