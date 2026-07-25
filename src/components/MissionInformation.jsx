import { forwardRef } from 'react'
import Image from 'next/image'
import { GiftIcon } from '@heroicons/react/20/solid'
import typesOfID from '@/images/typesOfID.png'

export const MissionInformation = forwardRef(function MissionInformation(
  props,
  ref
) {
  return (
    <div ref={ref} className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                A Comprehsive ID Package
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Missing ID should not mean missing opportunity
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Keep.id provides specialized, end-to-end assistance with Birth Certificates, 
                Photo ID/Driver's Licenses, Social Security Cards, supporting records, and other administrative documents, allowing clients to take the next step. 
              </p>
              <a
                href="https://www.zeffy.com/en-US/donation-form/sponsor-an-id-for-an-individual-in-poverty"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <GiftIcon className="h-5 w-5" aria-hidden="true" />
                Support our cause
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end lg:order-first">
            <Image
              src={typesOfID}
              alt="Types of ID"
              className="h-auto w-full max-w-full rounded-xl ring-1 ring-gray-400/10 lg:w-[45.6rem] lg:max-w-none"
              width={1000}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  )
})
