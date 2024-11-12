import { stackServerApp } from "@/stack";
import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient();

export const authClient = actionClient.use(async ({ next }) => {
  const user = await stackServerApp.getUser({ or: "redirect" });
  return next({
    ctx: { user },
  });
});
