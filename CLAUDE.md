# CLAUDE.md — Starter Template Guidelines

## Project Overview

Starter template with dashboard layout. Built on the Digiko Design System.

**Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS 4
**Design System:** `digiko-designsystem` (installed from GitHub)
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

The design system is installed from `@digiko/designsystem`. **Do not hardcode class names or token values here.**

To find available classes, tokens, and components, always read from the source:

| What you need | Where to look |
|---------------|---------------|
| Component classes (`ds-btn`, `ds-card`, etc.) | `node_modules/@digiko/designsystem/src/components/` |
| Token values (colors, spacing, radius) | `node_modules/@digiko/designsystem/src/tokens/` |
| Utility classes | `node_modules/@digiko/designsystem/src/utilities/` |
| Full compiled CSS | `node_modules/@digiko/designsystem/dist/designsystem.css` |
| Usage examples | `node_modules/@digiko/designsystem/examples/index.html` |

**Rules:**
- All DS classes use the `ds-` prefix (BEM-like: `ds-card__header`, `ds-btn--ghost`)
- Use Tailwind utilities for layout, spacing, and custom styling
- Use DS classes for pre-built components (buttons, cards, badges, tables, forms, modals, toasts)
- Read the source CSS files before using a component — they are the truth

### 3. Semantic Color Tokens

The Tailwind theme mapping lives in `globals.css`. These tokens auto-adapt to light/dark mode. **Do not hardcode color values — read `globals.css` for the current mapping.**

General pattern:
- Backgrounds: `bg-base`, `bg-surface`, `bg-elevated`, `bg-hover`
- Text: `text-primary`, `text-secondary`, `text-tertiary`
- Borders: `border-default`, `border-hover`
- Inverted: `bg-inverted`, `text-on-inverted`
- Status: `text-error`, `bg-error-subtle`, etc.

If a token is missing or renamed, check `globals.css` `@theme inline` block — that is the truth.

### 4. CSS Layer Order — Do Not Change

The first line of `globals.css` is critical:

```css
@layer theme, base, ds, components, utilities;
```

This sets the priority cascade between Tailwind and the Design System:

| Layer | Priority | What it contains |
|-------|----------|------------------|
| `theme` | Lowest | Tailwind theme variables |
| `base` | ↑ | Tailwind reset/preflight |
| `ds` | ↑ | **Design System** (tokens, components, utilities) |
| `components` | ↑ | Tailwind components |
| `utilities` | Highest | Tailwind utilities (`p-6`, `flex`, `lg:pl-64`, etc.) |

**Why this matters:**
- `base` > `ds`: Tailwind's reset takes precedence over the DS reset (no conflicts)
- `ds` > `base`: DS component styles (tables, badges, cards) apply correctly
- `utilities` > `ds`: Tailwind utilities always win (you can override DS with `p-6`, `rounded-lg`, etc.)

**If you remove or reorder this line**, DS components will either break (no styles) or override Tailwind utilities (padding, margin, etc. stop working).

### 5. Absolute Prohibitions

```tsx
// FORBIDDEN — Hardcoded colors
className="text-blue-500"
className="bg-zinc-900"

// REQUIRED — Semantic tokens
className="text-primary"
className="bg-surface"

// FORBIDDEN — Arbitrary values
className="max-w-[1200px]"
className="text-[14px]"

// REQUIRED — Tokens or standard Tailwind
className="max-w-7xl"
className="text-sm"
```

### 6. Import Alias

Always use `@/` for imports:

```typescript
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'
import { cn } from '@/lib/utils'
import { DashboardShell } from '@/components/layout/DashboardShell'
```

### 7. Adding a New Page

1. Create `src/app/your-page/page.tsx`
2. Add route to `src/config/routes.ts`
3. Add nav item to `src/config/site.ts`
4. Wrap content in `<DashboardShell>`

### 8. Overriding Design Tokens

Add overrides in `globals.css` under `:root` (light) or `.dark` (dark):

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
│   └── globals.css         # DS import + Tailwind theme mapping
├── components/
│   ├── layout/             # Shell, Sidebar, Header, ThemeProvider
│   └── ui/                 # ThemeToggle, future components
├── config/                 # All configuration
│   ├── site.ts             # App name, nav items
│   └── routes.ts           # Route paths
└── lib/
    └── utils.ts            # cn() helper
```

---

## Quick Reference

```
Dev server:     npm run dev (localhost:3000)
Build:          npm run build
Lint:           npm run lint
Design System:  node_modules/@digiko/designsystem/
DS Source:      node_modules/@digiko/designsystem/src/
DS Compiled:    node_modules/@digiko/designsystem/dist/designsystem.css
DS Repo:        github.com/digiko-dev/designsystem
```
