import Link from 'next/link'

import { Container } from '@/components/Container'

export function OutreachCTA() {
  return (
    <section
      id="outreach-cta"
      aria-label="Community Outreach"
      className="bg-purple-primary-light py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meeting Philadelphians Where They Are
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            We partner with community organizations across Philadelphia to
            bring identification services directly to the people who need them
            most — at libraries, family centers, mobile outreach stops, and
            more.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/outreach"
              className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              See our community outreach
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
