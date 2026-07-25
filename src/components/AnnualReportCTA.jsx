import React, { forwardRef } from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    years: '2019–2022',
    title: 'Building the Foundation',
    description:
      'Developed the initial product, assembled the founding team, and established Team Keep as a 501(c)(3) nonprofit.',
    reportYears: ['2020', '2021', '2022'],
  },
  {
    years: '2023–2025',
    title: 'Developing Services through Partnerships',
    description:
      'Expanded Keep.id, established initial partnerships with Face to Face and Why Not Prosper, and supported the Face to Face computer lab.',
    reportYears: ['2023', '2024'],
  },
  {
    years: '2026–Present',
    title: 'Expanding Community-based ID Recovery',
    description:
      'Launched Team Keep’s direct-service clinic model and expanded recurring services through libraries and nonprofit partners across Philadelphia.',
    reportYears: [],
  },
]

const annualReports = [
  {
    year: '2024',
    href: 'https://www.canva.com/design/DAGaDhBzUpU/9cZ_XXya0cE5KFs2LCr9FQ/view?utm_content=DAGaDhBzUpU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf349b0a254',
  },
  {
    year: '2023',
    href: 'https://www.canva.com/design/DAF3NQ0yO_I/xZ4DhoLex6Zt1UaKmeWVng/view?utm_content=DAF3NQ0yO_I&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  },
  {
    year: '2022',
    href: 'https://www.canva.com/design/DAFUy5hOxIY/Jc8sPqRNGnmFpQehvgUg/view?utm_content=DAFUy5hOxIY&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  },
  {
    year: '2021',
    href: 'https://drive.google.com/file/d/1-Z45XqU77y_tFvGGFq3RR9tdAqgUtFil/view?usp=sharing',
  },
  {
    year: '2020',
    href: 'https://drive.google.com/file/d/1QfqBtmEBH5PcYFlj2tBXpdsRM-Y_YzAx/view?usp=sharing',
  },
]

export const AnnualReportCTA = forwardRef(function AnnualReportCTA(props, ref) {
  return (
    <section ref={ref} className="bg-purple-primary-light">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Journey and Annual Reports
          </h2>
          <p
            className="mt-3 text-lg leading-8 text-gray-600"
          >
            From building our platform to delivering recurring ID recovery services across Philadelphia.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-indigo-200 lg:bottom-auto lg:left-[16.66%] lg:right-[16.66%] lg:top-[7px] lg:h-0.5 lg:w-auto"
            aria-hidden="true"
          />
          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {timeline.map((phase) => (
              <li
                key={phase.years}
                className="relative pl-8 lg:pl-0 lg:pt-9 lg:text-center"
              >
                <span className="absolute left-0 top-0 h-4 w-4 rounded-full border-4 border-purple-primary-light bg-indigo-600 ring-2 ring-indigo-600 lg:left-1/2 lg:-translate-x-1/2" />
                <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                  {phase.years}
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {phase.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {phase.description}
                </p>
                {phase.reportYears.length > 0 && (
                  <div className="mt-6 flex flex-col gap-3 lg:mx-auto lg:max-w-xs">
                    {phase.reportYears.map((year) => {
                      const report = annualReports.find(
                        (item) => item.year === year
                      )

                      return (
                        <a
                          key={year}
                          href={report.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group grid w-full grid-cols-[3rem_minmax(0,1fr)_1.25rem] items-center gap-3 rounded-xl bg-white px-4 py-3 text-left shadow-sm ring-1 ring-indigo-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <span className="text-lg font-bold text-indigo-600">
                            {year}
                          </span>
                          <span className="text-center text-sm font-semibold text-gray-700">
                            Read the Annual Report
                          </span>
                          <ArrowUpRightIcon
                            className="h-5 w-5 shrink-0 text-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      )
                    })}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
})
