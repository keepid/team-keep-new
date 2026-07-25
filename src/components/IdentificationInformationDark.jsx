import {
  ArrowUpRightIcon,
  BuildingLibraryIcon,
  HomeIcon,
  IdentificationIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import { forwardRef } from 'react'

import libraryIdClinic from '@/images/libraryIdClinic.png'

function MedicalCrossIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M8 2a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4V3a1 1 0 0 0-1-1H8Z" />
    </svg>
  )
}

function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 1.75a1 1 0 0 1 .43.098l6 2.875A1 1 0 0 1 17 5.625v3.57c0 4.05-2.57 7.49-6.42 8.964a1.65 1.65 0 0 1-1.16 0C5.57 16.684 3 13.245 3 9.195v-3.57a1 1 0 0 1 .57-.902l6-2.875A1 1 0 0 1 10 1.75Zm0 2.106L5 6.252v2.943c0 3.14 1.94 5.85 5 7.08 3.06-1.23 5-3.94 5-7.08V6.252l-5-2.396Z" />
    </svg>
  )
}

const features = [
  {
    name: 'Missing documents delay housing: ',
    description:
      '53% of people experiencing homelessness identified missing documents as a barrier to permanent housing, and 37% said the barrier significantly affected them.',
    icon: HomeIcon,
    source:
      'https://homelessness.ucsf.edu/sites/default/files/2026-04/CASPEH_Report_62023_v4.pdf#page=79',
    sourceLabel: 'Read the CASPEH report',
  },
  {
    name: 'ID access has recurring barriers: ',
    description:
      'The U.S. Government Accountability Office identified ID theft or loss, unsafe storage, address requirements, fees, transportation, and technology as recurring barriers.',
    icon: IdentificationIcon,
    source: 'https://www.gao.gov/assets/d24105435.pdf',
    sourceLabel: 'Read the GAO report',
  },
]

const additionalResearch = [
  {
    prefix: 'Journal on identification barriers as a facilitator of social determinants of health',
    title: 'You Need ID to Get ID',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7345293/',
    icon: MedicalCrossIcon,
  },
  {
    prefix: 'Qualitative study on barriers to housing in NYC',
    title:
      'If you’re gonna help me, help me',
    href: 'https://www.sciencedirect.com/science/article/abs/pii/S0149718918303823',
    icon: ShieldIcon,
  },
  {
    prefix: 'Reintegration for justice-impacted individuals revolves around ID',
    title: 'Reentry Strategies for State and Local Leaders',
    href: 'https://csgjusticecenter.org/wp-content/uploads/2020/02/State-Identification.pdf',
    icon: BuildingLibraryIcon,
  },
]


export const IdentificationInformationDark = forwardRef((props, ref) => {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                Identification is key to essential services
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Obtaining ID helps those escape the cycle of homelessness.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We provide ID services to five core populations: people experiencing homelessness, justice-impacted individuals, people with substance use disorders, people with disabilities, and people experiencing poverty.

              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">
                      {feature.description}
                      {feature.source && (
                        <>
                          {' '}
                          <a
                            href={feature.source}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-semibold text-indigo-300 underline decoration-indigo-400/60 underline-offset-4 transition hover:text-indigo-200"
                          >
                            {feature.sourceLabel}
                            <ArrowUpRightIcon
                              className="h-3.5 w-3.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="w-full self-center">
            <Image
              src={libraryIdClinic}
              alt="Keep.id library ID clinic"
              className="h-auto w-full max-w-full rounded-xl shadow-xl ring-1 ring-white/10 md:-ml-4 lg:-ml-0"
            />
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                Additional research
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-300">
                {additionalResearch.map((source) => (
                  <li key={source.title} className="flex items-start gap-3">
                    <source.icon
                      className="mt-1 h-5 w-5 shrink-0 text-indigo-400"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="text-gray-400">{source.prefix}: </span>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-indigo-300 underline decoration-indigo-400/60 underline-offset-4 transition hover:text-indigo-200"
                      >
                        {source.title}
                        <ArrowUpRightIcon
                          className="h-3.5 w-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="sr-only">
                          {' '}
                          (opens in a new tab)
                        </span>
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
