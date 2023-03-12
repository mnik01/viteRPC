# viteRPC: Vite + tRPC + TailwindCSS template

## Requirements

- NVM or node v18.12.1
- pnpm v7.15.0

## Setup

Environment variables need to be setup.

```bash
# From ./ (root directory)

# React Frontend
cp ./packages/react/.env.local.example ./packages/react/.env.local;

# tRPC Backend
cp ./packages/trpc/.env.example ./packages/trpc/.env;
```

Install & start entire application:

```bash
pnpm install;
pnpm run dev;
```
