import { ROUTES } from './routes'

export const siteConfig = {
  name: 'My App',
  title: 'My App — Dashboard',
  description: 'A modern dashboard built with Next.js and the Digiko Design System.',
  url: 'https://myapp.com',

  nav: [
    { label: 'Dashboard', href: ROUTES.dashboard, icon: 'LayoutDashboard' },
    { label: 'Projects', href: ROUTES.projects, icon: 'FolderKanban' },
    { label: 'Team', href: ROUTES.team, icon: 'Users' },
    { label: 'Analytics', href: ROUTES.analytics, icon: 'BarChart3' },
    { label: 'Settings', href: ROUTES.settings, icon: 'Settings' },
  ],
} as const
