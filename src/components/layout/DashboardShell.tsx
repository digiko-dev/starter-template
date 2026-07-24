'use client'

import type { ReactNode } from 'react'
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react'
import { AdminShell, type NavItem } from '@adamarant/ds-admin'
import { AdminThemeToggle } from '@adamarant/ds-admin/theme'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'

/* The dashboard frame is `@adamarant/ds-admin`'s AdminShell — the sidebar,
   mobile drawer, header and content well all come from the package, so this
   template (and every scaffold from it) shares one shell instead of a copy
   that rots. Only the project's own data is wired here: nav, brand, theme. */

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  Settings,
}

const nav: NavItem[] = siteConfig.dashboardNav.map((item) => {
  const Icon = iconMap[item.icon] ?? LayoutDashboard
  return {
    id: item.href,
    label: item.label,
    href: item.href,
    icon: <Icon size={18} />,
  }
})

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <AdminShell
      nav={nav}
      brandName={siteConfig.name}
      brandHref={ROUTES.dashboard}
      themeToggle={<AdminThemeToggle />}
    >
      {children}
    </AdminShell>
  )
}
