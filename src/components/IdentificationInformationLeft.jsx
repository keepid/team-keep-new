import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import myApplicationPng from '@/images/myApplication.png'

export const IdentificationInformationLeft = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Our Solution and Approach
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Secure, obtain and utilize identification
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Team Keep is dedicated to see the oppressed gain security and
                stability in the digital age. Our product, Keep.id, aims to
                reduce barriers in identification services in the Philadelphia
                community.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={myApplicationPng}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
