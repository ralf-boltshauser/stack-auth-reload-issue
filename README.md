# Stack Auth Revalidation Issue

This is an example of the issue I described. The buttons should do exactly the same thing, but the secure one triggers revalidation. (Which in some cases is not desired.)

## How to run

- Setup a db (check env)
- Connect Stack Auth Project



```bash
pnpm install
pnpx prisma generate
pnpx prisma db push
pnpm run dev
```

## Relevant Files
- [create-posts-buttons.tsx](./src/components/create-posts-buttons.tsx)
- [actions.ts](./src/lib/actions.ts)
