# Gym App

Diario de entrenamiento multiusuario. Web first, shared Supabase backend for future Android and iOS clients.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Supabase Auth (Google OAuth) and PostgreSQL

## Local setup
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in Supabase URL and anon key.
3. `npm run dev`

See `docs/SUPABASE_SETUP.md` for the database schema and Google OAuth setup.
