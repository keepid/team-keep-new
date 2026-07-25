import { smoothScrollTo } from '../utils/smoothScroll'

const services = [
  {
    title: 'Public Libraries',
    icon: 'local_library',
    description:
      'We run weekly community clinics across six Free Library branches, giving clients access to support in trusted, familiar locations throughout Philadelphia.',
    href: '#clinic-calendar',
    linkLabel: 'Find a library clinic',
    scrollToServices: true,
  },
  {
    title: 'Nonprofit Partners',
    icon: 'diversity_3',
    description:
      'Our nonprofit partnerships connect clients with trusted organizations and coordinated identification support throughout Philadelphia.',
    href: '#sponsors',
    linkLabel: 'Meet our partners',
  },
  {
    title: 'Phone Hotline & SMS',
    icon: 'phone_in_talk',
    description:
      'Our public hotline and SMS services let clients get our service schedule, receive reminders, resolve application issues, and stay connected when their contact information changes.',
    href: 'tel:+1844533743',
    linkLabel: 'Call 1-844-KEEPID',
  },
  {
    title: 'Computer Lab',
    icon: 'computer',
    description:
      'Our Face to Face Computer Lab partnership, running for the past three years, expands technology access and helps clients build digital literacy.',
  },
]

export const FullIDServices = ({ ourServicesRef }) => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              We meet clients where they are
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Successful ID Recovery starts with a Trusted Relationship.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We meet clients through accessible locations and communication channels, then stay engaged until their documentation needs are resolved.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <span
                      className="material-symbols-outlined text-[22px]"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </span>
                  </span>
                  <h3 className="text-base font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-1.5 flex-1 text-sm leading-5 text-gray-600">
                  {service.description}
                </p>
                {service.href && (
                  <a
                    href={service.href}
                    onClick={
                      service.scrollToServices
                        ? (event) => {
                            event.preventDefault()
                            smoothScrollTo(ourServicesRef.current)
                          }
                        : undefined
                    }
                    className="mt-3 inline-flex w-fit items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {service.linkLabel}
                    <span aria-hidden="true" className="ml-2">
                      &rarr;
                    </span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
