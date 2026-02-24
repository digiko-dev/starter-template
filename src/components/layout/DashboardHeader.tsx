'use client'

import { Menu } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border-default bg-nav-bg px-6 backdrop-blur-xl backdrop-saturate-150">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="ds-btn ds-btn--ghost ds-btn--icon lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
        <h1 className="font-display text-lg text-primary">Dashboard</h1>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-inverted text-on-inverted text-sm font-medium">
          U
        </div>
      </div>
    </header>
  )
}
