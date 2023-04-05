import Image from 'next/image'

import { Container } from '@/components/Container'
import whyNotProsper from '@/images/logos/whyNotProsper.png'
import face2face from '@/images/logos/face2face.png'
import safeHarborEaston from '@/images/logos/safeHarborEaston.png'
const sponsors = [
  { name: 'Why Not Prosper', logo: whyNotProsper , website: "https://www.why-not-prosper.org/"},
  { name: 'Face to Face', logo: face2face, website: "https://facetofacegermantown.org/" },
  { name: 'Safe Harbor Easton', logo: safeHarborEaston, website: "https://www.safeharboreaston.com/" }
]

export function Partners() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Our Nonprofit Partners
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <a
              href={sponsor.website} target="_blank"
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
