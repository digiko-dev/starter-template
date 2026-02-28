# CLAUDE.md — Starter Template Guidelines

## Project Overview

Starter template with dashboard layout. Built on the Digiko Design System.

**Stack:** Next.js (App Router), React, TypeScript
**Design System:** `@digiko-npm/designsystem` (CSS-only, installed from npm)
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

The design system is installed from `@digiko-npm/designsystem`. **Do not hardcode class names or token values here.**

To find available classes, tokens, and components, always read from the source:

| What you need | Where to look |
|---------------|---------------|
| Component classes (`ds-btn`, `ds-card`, etc.) | `node_modules/@digiko-npm/designsystem/src/components/` |
| Token values (colors, spacing, radius) | `node_modules/@digiko-npm/designsystem/src/tokens/` |
| Utility classes | `node_modules/@digiko-npm/designsystem/src/utilities/` |
| Full compiled CSS | `node_modules/@digiko-npm/designsystem/dist/designsystem.css` |
| Usage examples | `node_modules/@digiko-npm/designsystem/examples/index.html` |

**Rules:**
- All DS classes use the `ds-` prefix (BEM-like: `ds-card__header`, `ds-btn--ghost`)
- Use DS utility classes for layout, spacing, and styling (e.g. `ds-flex`, `ds-p-6`, `ds-text-sm`)
- Use DS component classes for pre-built components (buttons, cards, badges, tables, forms, modals, toasts)
- Read the source CSS files before using a component — they are the truth
- **No Tailwind** — this project uses only DS utilities and project-level component classes

### 3. Semantic Color Tokens

DS tokens auto-adapt to light/dark mode. **Do not hardcode color values.**

General pattern:
- Backgrounds: `ds-bg-base`, `ds-bg-surface`, `ds-bg-elevated`, `ds-bg-muted`
- Text: `ds-text-primary`, `ds-text-secondary`, `ds-text-tertiary`
- Borders: `ds-border-b`, `ds-border-t` (use DS border tokens)
- Inverted: `ds-bg-inverted`, `ds-text-on-inverted`
- Status: `ds-badge--error`, `ds-badge--success`, etc.

### 4. CSS Architecture

```css
/* globals.css */
@import "@digiko-npm/designsystem";   /* All DS tokens, components, utilities */
@import "../styles/components.css";    /* Project-specific component classes */
```

Three layers:
1. **DS tokens & utilities** — from the npm package (`ds-*` prefix)
2. **Project component classes** — in `src/styles/components.css` (semantic names like `sidebar`, `nav-item`, `dashboard-header`)
3. **Base styles** — in `globals.css` (body, selection, font-display)

### 5. Absolute Prohibitions

```tsx
// FORBIDDEN — Hardcoded colors
style={{ color: '#3b82f6' }}

// REQUIRED — Semantic DS tokens
className="ds-text-primary"

// FORBIDDEN — Arbitrary inline values for things DS covers
style={{ padding: '24px' }}

// REQUIRED — DS utility classes
className="ds-p-6"

// FORBIDDEN — Tailwind classes (no Tailwind in this project)
className="flex items-center gap-4"

// REQUIRED — DS-prefixed utilities
className="ds-flex ds-items-center ds-gap-4"
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

Add overrides in `globals.css`. Dark mode is handled natively by the DS (via `.dark` class from `next-themes`), so you only need `:root` for global overrides:

```css
:root {
  --ds-font-display: "Inter", sans-serif;
  --ds-radius-xl: 12px;
  --ds-container-max: 1400px;
}
```

To override only in dark mode:

```css
.dark {
  --ds-color-bg: #0a0a0f;
}
```

### 9. Project Component Classes

Project-specific interactive patterns live in `src/styles/components.css`. These use DS tokens but are not part of the DS itself:

| Class | Purpose |
|-------|---------|
| `sidebar` | Fixed sidebar with mobile translate |
| `sidebar--open` | Sidebar visible (mobile) |
| `sidebar-overlay` | Mobile backdrop overlay |
| `main-offset` | Desktop content offset for sidebar |
| `dashboard-header` | Sticky header with blur |
| `nav-item` | Sidebar navigation link |
| `nav-item--active` | Active state for nav link |

### 10. cn() Utility

`cn()` in `src/lib/utils.ts` uses `clsx` for conditional class merging:

```tsx
className={cn('nav-item', isActive && 'nav-item--active')}
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
Dev server:     npm run dev (localhost:3000)
Build:          npm run build
Lint:           npm run lint
Design System:  node_modules/@digiko-npm/designsystem/
DS Source:      node_modules/@digiko-npm/designsystem/src/
DS Compiled:    node_modules/@digiko-npm/designsystem/dist/designsystem.css
DS Repo:        github.com/digiko-dev/designsystem
```
