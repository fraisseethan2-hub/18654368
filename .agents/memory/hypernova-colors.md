---
name: HyperNova Learning Institute color and data system
description: Key design decisions for the HyperNova site color scheme and data architecture
---

## Color system
- Hero and footer background: `bg-[#0b0f1a]` (deep navy, nearly black) with SVG grid pattern overlay
- Accent/primary: indigo `#4f46e5` (CSS var `--primary: 239 84% 61%`)
- Content pages: white/gray-50 background
- Logo: HN badge with `bg-gradient-to-br from-indigo-600 to-blue-500`, rounded-lg, text-white font-bold

## Data system (data.ts)
- `CATEGORY_COLORS`: Record<Category, string> — values are Tailwind badge classes like `"bg-green-100 text-green-700"` (NOT gradients)
- `DIFFICULTY_COLORS`: same format for Débutant/Intermédiaire/Avancé
- Article type has optional `image?: string` field — Unsplash URLs for real tech photography
- Categories include: Android, Windows, Réseaux & Wi-Fi, Sécurité informatique, IA & Automatisation, Astuces & Trucs, Guides débutants, Smartphones, Bureautique, Internet & Web, Comparatifs

**Why:** Added IA & Automatisation and Comparatifs to match the reference site hyper-nova-mastery.base44.app

## pino-http v10
Named import: `import { pinoHttp } from "pino-http"` (not default import)
