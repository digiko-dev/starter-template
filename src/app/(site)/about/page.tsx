import type { Metadata } from 'next'
import { Flex } from '@adamarant/ds-react'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <section className="ds-section ds-pt-16">
      <Flex direction="col" gap="6" className="ds-container ds-max-w-3xl">
        <p className="ds-overline">About</p>
        <h1 className="ds-heading-2">One place to start every project.</h1>
        <p className="ds-copy">
          Replace this copy with your story. This page is a placeholder that shows
          the site shell — header, content, footer — on an inner route.
        </p>
      </Flex>
    </section>
  )
}
