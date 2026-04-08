# Hamkar Plus MVP

Persian RTL SaaS MVP for project management, task operations, team collaboration, and light CRM workflows.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- React Hook Form + Zod
- TanStack Query
- Prisma + PostgreSQL
- Session-based auth + RBAC
- Storage abstraction (local + S3-ready)

## Run Locally
1. Copy `.env.example` to `.env`
2. Install dependencies with `npm install`
3. Run `npm run prisma:generate`
4. Run `npm run prisma:migrate`
5. Run `npm run prisma:seed`
6. Start the app with `npm run dev`

## Local Seed Data
After running the seed script, the app creates a local development owner account for testing.

- Email: `owner@hamkar.app`
- Password: `12345678`

This account is intended for local development only and should not be reused in any shared or production environment.

## Scope
This repository is positioned as an MVP and foundation for a larger Persian-first operations platform.