## Design System → [DS_HEALTH.md](/Projects/infra/DS_HEALTH.md)
For dev conventions (API shape, TanStack Query, Supabase, Redis, commit) → [DEV_CONVENTIONS.md](/Projects/infra/DEV_CONVENTIONS.md)

CONTROLLED MODE attivo. Regole DS, azioni aperte, metriche: tutto centralizzato in [DS_HEALTH.md](/Projects/infra/DS_HEALTH.md).
Ops Triage: when the user describes a task, automatically call `ops_triage`. Details in DS_HEALTH.md section "Ops Triage".
Customizzazioni CSS project-specific: [DS_CUSTOM.md](DS_CUSTOM.md) — consultare prima di aggiungere/modificare CSS custom.

---

# CLAUDE.md — Starter Template Guidelines

## Project Overview

Starter template with dashboard layout. Built on the Digiko Design System.

**Stack:** Next.js (App Router), React, TypeScript
**Design System:** `@digiko-npm/designsystem` (CSS-only, installed from npm — vedi `package.json` per versione corrente)
**Deploy:** Vercel
**Typography:** Clash Display (headings) + Switzer (body) + Geist Mono (code)
**Theme:** Dark default, light + system supported via `next-themes`

---

## Critical Rules

### 1. No Hardcoding

Every literal value has a home in `src/config/`.

| File | What belongs here |
|------|-------------------|
| `site.ts` | App name, description, nav items |
| `routes.ts` | All route paths |

Add more config files as the project grows (copy.ts, auth.ts, env.ts, etc.).

### 2. Design System — Single Source of Truth

The design system is installed from `@digiko-npm/designsystem`. Always read source before using a component:

| What you need | Where to look |
|---------------|---------------|
| Component classes (`ds-btn`, `ds-card`, etc.) | `node_modules/@digiko-npm/designsystem/src/components/` |
| Token values (colors, spacing, radius) | `node_modules/@digiko-npm/designsystem/src/tokens/` |
| Utility classes | `node_modules/@digiko-npm/designsystem/src/utilities/` |
| Full compiled CSS | `node_modules/@digiko-npm/designsystem/dist/designsystem.css` |
| Usage examples | `node_modules/@digiko-npm/designsystem/examples/index.html` |

For DS styling rules, component-first approach, and usage patterns → DS_HEALTH.md

### 3. CSS Architecture

```css
/* globals.css */
@import "@digiko-npm/designsystem";   /* All DS tokens, components, utilities */
@import "../styles/components.css";    /* Project-specific component classes */
```

Three layers:
1. **DS tokens & utilities** — from the npm package (`ds-*` prefix)
2. **Project component classes** — in `src/styles/components.css` (nearly empty now -- layout CSS is in DS via `ds-admin-layout`)
3. **Base styles** — in `globals.css` (body, selection, font-display)

### 4. Adding a New Page

1. Create `src/app/your-page/page.tsx`
2. Add route to `src/config/routes.ts`
3. Add nav item to `src/config/site.ts`
4. Wrap content in `<DashboardShell>`

### 5. Overriding Design Tokens

Add overrides in `globals.css`:

```css
:root {
  --ds-font-display: "Inter", sans-serif;
  --ds-radius-xl: 12px;
  --ds-container-max: 1400px;
}
```

---

## Project Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, providers)
│   ├── page.tsx            # Dashboard page
│   └── globals.css         # DS import + base styles
├── components/
│   ├── layout/             # Shell, Sidebar, Header, ThemeProvider
│   └── ui/                 # ThemeToggle, future components
├── config/                 # All configuration
│   ├── site.ts             # App name, nav items
│   └── routes.ts           # Route paths
├── styles/
│   └── components.css      # Project-specific component classes
└── lib/
    └── utils.ts            # cn() helper (clsx)
```

---

## Quick Reference

```
Local URL:      http://starter.test (PM2 + Caddy, port 4006)
Dev server:     npm run dev (only for hot-reload when actively developing)
Build:          npm run build
Lint:           npm run lint
Design System:  node_modules/@digiko-npm/designsystem/
DS Source:      node_modules/@digiko-npm/designsystem/src/
DS Compiled:    node_modules/@digiko-npm/designsystem/dist/designsystem.css
DS Repo:        github.com/digiko-dev/designsystem
```

---

### Living Registry

- `ds.manifest.json` nella root del progetto traccia versione DS, override, e ultima sessione
- A chiusura sessione, aggiornare `last_session` (data) e `last_session_summary` (1 riga su cosa e stato fatto)
- Per rigenerare i conteggi override: `node ~/Projects/generate-manifest.js`
- Per stato ecosistema: `node ~/Projects/ds-registry.js`
- Il manifest va committato in git

---

## End-of-Session Checklist

For DS checklist (CONTROLLED MODE, compliance, build, git) → [DS_HEALTH.md](/Projects/infra/DS_HEALTH.md)

This is a template project — no project-specific checklist items needed.
