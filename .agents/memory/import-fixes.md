---
name: Import management in subagent-generated pages
description: Subagents frequently omit lucide-react icon imports and wouter Link imports when rewriting page components
---

When a design subagent rewrites page components, always verify these common missing imports after:
- lucide-react icons (Clock, Send, Target, etc.) — check every icon used is in the import line
- wouter `Link` — often omitted when page uses inline links inside JSX text

**Why:** Subagents focus on structure and forget to update import statements when adding new icons or components.

**How to apply:** After any page rewrite delegation, run `pnpm run typecheck` to catch "Cannot find name 'X'" errors and add missing imports.
