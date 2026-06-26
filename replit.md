# HyperNova Learning Institute

A French-language tech editorial and tutorial platform — a modern alternative to Comment Ça Marche, Le Crabe Info, Malekal, and similar sites. Guides, tutorials, and tech news for French-speaking users.

## Run & Operate

- `pnpm --filter @workspace/hypernova run dev` — run the frontend (port assigned by env)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, wouter routing, Tailwind CSS v4, framer-motion
- API: Express 5 (minimal — frontend is mostly static content)
- Forms: react-hook-form + zod
- Icons: lucide-react
- Build: Vite (frontend), esbuild (API)

## Where things live

- `artifacts/hypernova/src/` — main frontend application
  - `src/pages/` — all page components (Home, Actualites, Tutoriels, Article, About, Contact, legal pages)
  - `src/components/` — shared components (Header, Footer, AdSlot, SEOHead, CookieBanner, Newsletter, etc.)
  - `src/data/` — hardcoded articles, tutorials, categories
  - `src/hooks/` — useSEO, useTheme, etc.

## Architecture decisions

- Frontend-only for MVP: no database needed, all content is hardcoded in data files for fast iteration
- SEO via useEffect-based meta injection (no react-helmet) — canonical URLs, OG tags, Schema.org JSON-LD per page
- Cookie consent persisted in localStorage (key: `hnl_cookie_consent`)
- Dark mode persisted in localStorage (key: `hnl_theme`)
- AdSense slots are structural containers only — no real ad script until AdSense approval

## Product

HyperNova Learning Institute — French-language tech platform covering:
- Android, Windows, Réseaux & Wi-Fi, Sécurité informatique, Astuces, Guides débutants, Smartphones, Bureautique, Internet & Web
- Tutoriels pas-à-pas, actualités tech, guides comparatifs
- AdSense-ready structure with legal pages required for approval

## User preferences

- Language: French (all content and UI in French)
- Contact email: contact@hypernovalearninginstitute.org
- Site URL: https://hypernovalearninginstitute.org/
- No social media accounts — do not add social links
- AdSense-compatible: non-intrusive ad slots, full legal pages (RGPD)

## Gotchas

- Google Fonts @import must be the VERY FIRST line in index.css (before @import "tailwindcss")
- All CSS variables in :root must be replaced — scaffold ships with `red` placeholders
- SEO meta tags must be set dynamically per route via useSEO hook
- Cookie banner must appear on first visit (localStorage key: hnl_cookie_consent)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
