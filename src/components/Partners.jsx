import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import whyNotProsper from '@/images/logos/whyNotProsper.png'
import face2face from '@/images/logos/face2face.png'
import freeLibrary from '@/images/logos/freeLibrary.png'
import chosen300 from '@/images/logos/chosen300logo.jpg'

const sponsors = [
  {
    name: 'Why Not Prosper',
    logo: whyNotProsper,
    website: 'https://www.why-not-prosper.org/',
  },
  {
    name: 'Face to Face',
    logo: face2face,
    website: 'https://facetofacegermantown.org/',
  },
  {
    name: 'Free Library of Philadelphia',
    logo: freeLibrary,
    website: 'https://www.freelibrary.org/',
  },
  {
    name: 'Chosen 300 Ministries',
    logo: chosen300,
    website: 'https://www.chosen300.org/',
  },
]

export function Partners() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-12 sm:py-16">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-medium tracking-tighter text-blue-900 sm:text-4xl">
          Our Nonprofit Partners
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-7 text-gray-600">
          We assist with direct ID services for Philadelphians.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 md:grid-cols-4 lg:gap-x-12">
          {sponsors.map((sponsor) => (
            <a
              href={sponsor.website}
              target="_blank"
              rel="noreferrer"
              key={sponsor.name}
              className="flex h-20 w-32 items-center justify-center sm:w-36 md:h-24 md:w-40"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-auto max-h-full w-full object-contain"
                unoptimized
              />
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/outreach"
            className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            See our community outreach
          </Link>
        </div>
      </Container>
    </section>
  )
}
