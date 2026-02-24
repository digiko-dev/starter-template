'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  Settings,
  X,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  Settings,
}

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-overlay lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 z-50 flex h-screen w-64 flex-col border-r border-border-default bg-surface transition-transform duration-300',
          'lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Brand */}
        <div className="flex h-16 items-center justify-between border-b border-border-default px-6">
          <Link href="/" className="font-display text-lg text-primary">
            {siteConfig.name}
          </Link>
          <button
            onClick={onClose}
            className="ds-btn ds-btn--ghost ds-btn--icon lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {siteConfig.nav.map((item) => {
              const Icon = iconMap[item.icon] ?? LayoutDashboard
              const isActive = pathname === item.href

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors',
                      isActive
                        ? 'bg-elevated text-primary font-medium'
                        : 'text-secondary hover:bg-hover hover:text-primary'
                    )}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-border-default px-6 py-4">
          <p className="text-xs text-tertiary">
            Built with Digiko DS
          </p>
        </div>
      </aside>
    </>
  )
}
