import Link from 'next/link'
import { Flex, Grid } from '@adamarant/ds-react'
import { ROUTES } from '@/config/routes'
import { Zap, ShieldCheck, Gauge } from 'lucide-react'

const features = [
  {
    icon: Zap,
    eyebrow: 'Fast',
    title: 'Ship in minutes',
    body: 'A public site and a dashboard, wired together and ready to extend. No boilerplate to write twice.',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Consistent',
    title: 'Design system native',
    body: 'Every surface is built on the Adamarant design system — tokens, components, light and dark out of the box.',
  },
  {
    icon: Gauge,
    eyebrow: 'Modern',
    title: 'Motion that feels premium',
    body: 'A floating header with a fullscreen mobile overlay, staggered reveals, and reduced-motion support baked in.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="ds-section ds-min-h-screen ds-flex ds-items-center">
        <Flex
          direction="col"
          align="center"
          gap="6"
          className="ds-container ds-text-center ds-max-w-3xl ds-mx-auto"
        >
          <p className="ds-overline">Starter template</p>
          <h1 className="ds-heading-1">A website and a dashboard, in one starter.</h1>
          <p className="ds-copy">
            Header, content, footer, and a modern fullscreen mobile menu — plus the
            dashboard you already know. Start from a real site, not a blank page.
          </p>
          <Flex justify="center" gap="3" className="ds-flex-wrap">
            <Link href={ROUTES.dashboard} className="ds-btn ds-btn--pill ds-btn--xl">
              Open the dashboard
            </Link>
            <Link
              href={ROUTES.features}
              className="ds-btn ds-btn--outline ds-btn--pill ds-btn--xl"
            >
              See features
            </Link>
          </Flex>
        </Flex>
      </section>

      {/* Feature grid */}
      <section id="features" className="ds-section ds-section--bordered">
        <Flex direction="col" gap="8" className="ds-container">
          <Flex direction="col" gap="4" className="ds-max-w-2xl">
            <p className="ds-overline">Features</p>
            <h2 className="ds-heading-2">Everything a new project reuses.</h2>
          </Flex>
          <Grid cols="1" gap="6" className="ds-md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="ds-card ds-card__body ds-flex ds-flex-col ds-gap-3">
                <f.icon size={22} className="ds-text-primary" />
                <p className="ds-overline">{f.eyebrow}</p>
                <h3 className="ds-card__title">{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </Grid>
        </Flex>
      </section>

      {/* CTA band */}
      <section id="pricing" className="ds-section ds-section--bordered">
        <Flex
          direction="col"
          align="center"
          gap="6"
          className="ds-container ds-text-center ds-max-w-2xl ds-mx-auto"
        >
          <h2 className="ds-heading-2">Start building.</h2>
          <p className="ds-copy">
            Clone it, rename the config, and you have a site and an app ready to grow.
          </p>
          <div className="ds-flex ds-gap-3">
            <Link href={ROUTES.dashboard} className="ds-btn ds-btn--pill ds-btn--lg">
              Get started
            </Link>
            <Link href={ROUTES.about} className="ds-btn ds-btn--outline ds-btn--pill ds-btn--lg">
              Learn more
            </Link>
          </div>
        </Flex>
      </section>
    </>
  )
}
