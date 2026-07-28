'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SiteHeader as DSSiteHeader } from '@adamarant/ds-react'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

/* Thin data-driven wrapper over the SiteKit header (ds-react 1.11.1), the
   sibling of the SiteFooter wrapper. The bar, the mobile panel, the scroll
   lock, Escape and the ARIA wiring all come from the package; only the
   project's own data is passed in. activeHref is what makes the current
   nav item primary while the rest stay secondary, which is the one place
   DS_HEALTH §10 allows an all-secondary block. */
export function SiteHeader() {
  const pathname = usePathname()

  const dashboardCta = (
    <Link href={ROUTES.dashboard} className="ds-btn ds-btn--pill ds-btn--sm">
      Dashboard
    </Link>
  )

  return (
    <DSSiteHeader
      LinkComponent={Link}
      brand={siteConfig.name}
      brandHref={ROUTES.home}
      items={[...siteConfig.siteNav]}
      activeHref={pathname}
      actions={
        <>
          <ThemeToggle />
          <span className="ds-hidden ds-md:block">{dashboardCta}</span>
        </>
      }
      mobileExtra={
        <Link
          href={ROUTES.dashboard}
          className="ds-btn ds-btn--pill ds-btn--lg ds-mt-6"
        >
          Dashboard
        </Link>
      }
    />
  )
}
