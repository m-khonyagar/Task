# Repository Boundaries

## Canonical scope
This repository contains a single SaaS MVP application.

## Main areas
- `src/`: application code
- `prisma/`: database schema and seed data
- root config files: framework, build, and tooling configuration

## Rules
- Keep new runtime code inside `src/`.
- Keep schema and seed changes inside `prisma/`.
- Avoid adding unrelated experiments or secondary products at the repository root.
