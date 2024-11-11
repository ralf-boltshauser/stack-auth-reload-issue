"use server";
import { prisma } from "@/lib/client";
import { stackServerApp } from "@/stack";

export async function getPosts() {
  return await prisma.post.findMany();
}

export async function createPost() {
  await prisma.post.create({
    data: {
      title: `New Post - ${new Date().toISOString()}`,
      content: "Lorem ipsum dolor sit amet",
    },
  });
}

export async function createSecurePost() {
  const user = await stackServerApp.getUser({ or: "redirect" });
  await prisma.post.create({
    data: {
      title: `Secure New Post - ${new Date().toISOString()}`,
      content: `Hello ${user.primaryEmail}`,
    },
  });
}
