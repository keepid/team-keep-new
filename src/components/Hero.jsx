import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { smoothScrollTo } from '../utils/smoothScroll'

export const Hero = ({ resultRef }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative bg-gray-950 bg-[url('../images/computerlab.png')] bg-cover bg-[position:center_45%] bg-no-repeat sm:bg-[length:100%_auto]">
      <div
        className="absolute inset-0 bg-gray-950/75"
        aria-hidden="true"
      />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="lg:py-42 mx-auto max-w-2xl py-32 sm:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className=" relative rounded-full bg-slate-500/75 px-3 py-1 text-sm leading-6 text-white ring-2 ring-gray-100/0 hover:ring-gray-100/10">
              To support our cause please donate {'   '}
              <a
                href="https://www.zeffy.com/en-US/donation-form/sponsor-an-id-for-an-individual-in-poverty"
                target="_blank"
                className="font-semibold text-grey-light"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                here<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              We remove the ID barriers that keep people from moving forward.
            </h1> 
            <p className="mt-6 text-lg leading-8 text-white">
              Team Keep serves Philly residents facing housing instability who face barriers to recovering essential identity documents needed for housing, work, benefits, healthcare, treatment, and financial access.
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Our ID Community Clinics, enabled by our Keep.id Platform and Hotline, turn complicated documentation processes into a clear path forward.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollTo(resultRef.current)
                }}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 motion-safe:animate-bounce"
              >
                Learn More
              </button>
              <a
                href="https://keep.id"
                target="_blank"
                className="text-sm font-semibold leading-6 text-white"
              >
                Visit Keep.id <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
