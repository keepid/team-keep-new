import { forwardRef } from 'react'

import { CommunityMap } from '@/components/CommunityMap'

const calendarId =
  '4e4ce1efc70ae8ac2f4a1dc4d4af72c466870b19630f153469fa93883a3d61b8@group.calendar.google.com'

const calendarUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
  calendarId
)}&ctz=America%2FNew_York&mode=AGENDA`

export const OurServices = forwardRef(function OurServices(props, ref) {
  return (
    <section
      ref={ref}
      id="clinic-calendar"
      aria-labelledby="clinic-calendar-title"
      className="bg-indigo-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="mx-auto max-w-xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Upcoming Clinics and Locations
            </h2>
            <p
              id="clinic-calendar-title"
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Find an ID Clinic Near You
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              View our schedule to get location and other details. As a clinic pre-requisite, please bring a mailing address.
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm sm:p-4">
            <iframe
              src={calendarUrl}
              title="Keep.id upcoming clinic calendar"
              className="h-[22rem] w-full rounded-xl border-0 sm:h-[25rem]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <CommunityMap />
    </section>
  )
})
