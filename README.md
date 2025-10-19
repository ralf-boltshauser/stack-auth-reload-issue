# Stack Auth Revalidation Issue

This is an example of the issue I described. The buttons should do exactly the same thing, but the secure one triggers revalidation. (Which in some cases is not desired.)

## How to run

- Setup a db (check env)
- Connect Stack Auth Project

```bash
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

```bash
docker run --name mydb-postgres \
  -e POSTGRES_USER=johndoe \
  -e POSTGRES_PASSWORD=randompassword \
  -e POSTGRES_DB=mydb \
  -p 5432:5432 \
  -d postgres:latest

pnpm install
pnpx prisma generate
pnpx prisma db push
pnpm run dev
```

## Relevant Files
- [create-posts-buttons.tsx](./src/components/create-posts-buttons.tsx)
- [actions.ts](./src/lib/actions.ts)
