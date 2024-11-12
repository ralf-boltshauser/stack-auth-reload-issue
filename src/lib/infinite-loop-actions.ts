"use server";

import { stackServerApp } from "@/stack";
import { z } from "zod";
import { prisma } from "./client";
import { authClient } from "./safe-action";

export async function getSafePosts() {
  await stackServerApp.getUser({ or: "redirect" });
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export const updatePost = authClient
  .schema(
    z.object({
      postId: z.string(),
    })
  )
  .action(async ({ parsedInput: { postId } }) => {
    await prisma.post.update({
      where: { id: postId },
      data: { title: "Updated Post" },
    });
  });
