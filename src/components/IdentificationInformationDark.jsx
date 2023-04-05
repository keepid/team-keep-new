import {
  PresentationChartBarIcon,
  CakeIcon,
  HomeIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import { forwardRef } from 'react'

import SeekingKindnessPng from '@/images/seekingKindness.png'


const features = [
  {
    name: 'Access to Shelters: ',
    description:
      '54% of homeless individuals report being denied access to shelters or adequate housing services',
    icon: HomeIcon
  },
  {
    name: 'Access to Food: ',
    description:
      '54% of homeless individuals report being denied access being denied access to foodstamps',
    icon: CakeIcon
  },
  {
    name: 'Access to Medical Services: ',
    description:
      '49% of homeless individuals report being denied access to Medicaid or other medical services',
    icon: PresentationChartBarIcon
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
                The Problem
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Identification is key to essential services
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Homelessness falls at the intersection of many social issues:
                income inequality, substance abuse, unaffordable healthcare, and
                more.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Obtaining identification helps individuals access essential
                services and escape the cycle of homelessness.
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
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={SeekingKindnessPng}
            alt="Product screenshot"
            className="w-[48-rem] rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[48-rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1142}
          />
        </div>
      </div>
    </div>
  )
})
