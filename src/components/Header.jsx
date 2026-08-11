import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

const navigation = [
  { name: 'Our Team', href: '/team' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gray-950/90">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="/">
          <div className="flex-direction:row flex flex-nowrap items-center gap-4">
            <Logo className="h-12 w-auto text-slate-900" />
            <div className="font-logo text-3xl font-medium text-white">
              Team Keep
            </div>
          </div>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex scale-150 items-center justify-center rounded-md p-2.5 text-purple-primary-light"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden flex-row lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-md m-auto items-center font-semibold leading-6 text-gray-100"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://luma.com/event/evt-7qez1Ke8tGJdXnE"
            className="inline-flex items-center rounded-2xl bg-blue-600 px-4 py-2 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            data-luma-action="checkout"
            data-luma-event-id="evt-7qez1Ke8tGJdXnE"
          >
            Register for Our Fundraiser
          </a>
          <Button
            href="https://keep.id"
            className="bg-slate-700 text-md m-auto items-center font-semibold leading-6 hover:bg-slate-600"
          >
            Visit Keep.id
          </Button>
          <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
            <Button
              href="https://www.zeffy.com/en-US/donation-form/sponsor-an-id-for-an-individual-in-poverty"
              target="_blank"
              className="bg-purple-primary"
            >
              Donate Now
            </Button>
          </div>
        </div>

        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-0 z-50 w-full h-screen overflow-y-auto bg-white px-6 py-6 shadow-2xl sm:inset-auto sm:left-1/2 sm:top-2 sm:bottom-2 sm:h-[calc(100vh-1rem)] sm:w-[min(90vw,64rem)] sm:-translate-x-1/2 sm:rounded-3xl sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo className="h-12 w-auto text-slate-900" />
            <div className="font-logo text-3xl font-medium">Team Keep</div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root text-center">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="mx-auto block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://luma.com/event/evt-7qez1Ke8tGJdXnE"
                  className="mx-auto block rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-7qez1Ke8tGJdXnE"
                >
                  Register for Our Fundraiser
                </a>
              </div>
              <div className="py-6">
                <h1 className="hero-header pb-6 text-black text-center">
                  Help us build a safety net for our most vulnerable citizens.
                </h1>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="https://www.zeffy.com/en-US/donation-form/sponsor-an-id-for-an-individual-in-poverty"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl bg-purple-primary px-6 py-3 text-base font-semibold text-white hover:bg-purple-700"
                  >
                    Donate Now
                  </a>
                  <a
                    href="https://keep.id"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl bg-slate-700 px-6 py-3 text-base font-semibold text-white hover:bg-slate-600"
                  >
                    Visit Keep.id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Script
        id="luma-checkout"
        src="https://embed.lu.ma/checkout-button.js"
        strategy="afterInteractive"
      />
    </header>
  )
}
