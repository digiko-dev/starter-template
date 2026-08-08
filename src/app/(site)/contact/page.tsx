import type { Metadata } from 'next'
import { Flex } from '@adamarant/ds-react'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <section className="ds-section ds-pt-16">
      <Flex direction="col" gap="6" className="ds-container ds-max-w-3xl">
        <p className="ds-overline">Contact</p>
        <h1 className="ds-heading-2">Get in touch.</h1>
        <p className="ds-copy">
          Swap this for a form or your preferred contact method.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="ds-btn ds-btn--pill ds-btn--lg ds-self-start"
        >
          {siteConfig.email}
        </a>
      </Flex>
    </section>
  )
}
