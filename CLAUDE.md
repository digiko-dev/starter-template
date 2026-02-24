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

### 2. Design System Classes

The design system provides prefixed classes (`ds-*`). Use them for components:

```tsx
// Buttons
<button className="ds-btn">Primary</button>
<button className="ds-btn ds-btn--secondary">Secondary</button>
<button className="ds-btn ds-btn--ghost ds-btn--sm">Small Ghost</button>

// Cards
<div className="ds-card">
  <div className="ds-card__header">
    <h3 className="ds-card__title">Title</h3>
  </div>
  <div className="ds-card__body">Content</div>
</div>

// Badges
<span className="ds-badge ds-badge--success">Active</span>

// Tables
<div className="ds-table-wrapper">
  <table className="ds-table">...</table>
</div>

// Forms
<input className="ds-input" />
<select className="ds-select">...</select>
```

### 3. Tailwind for Layout, DS for Components

Use Tailwind utilities for layout, spacing, and custom styling.
Use DS classes for pre-built components.

```tsx
// Layout with Tailwind
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

// Component from DS
  <div className="ds-card ds-card__body">...</div>
</div>
```

### 4. Semantic Color Tokens

Never use hardcoded colors. The design system + globals.css maps tokens to Tailwind:

```tsx
// Backgrounds
bg-base           // Page background
bg-surface        // Card/section background
bg-elevated       // Elevated elements
bg-hover          // Hover states

// Text
text-primary      // Main content
text-secondary    // Supporting content
text-tertiary     // Hints, metadata

// Borders
border-default    // Standard border
border-hover      // Hover state

// Inverted (primary buttons)
bg-inverted       // Dark bg in light mode, light bg in dark
text-on-inverted  // Contrasting text

// Status
text-error / bg-error-subtle
text-success / bg-success-subtle
text-warning / bg-warning-subtle
text-info / bg-info-subtle
```

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
Design System:  node_modules/digiko-designsystem/dist/designsystem.css
DS Docs:        github.com/digiko-dev/designsystem
```
