import { useEffect, useState } from 'react'

import { smoothScrollTo } from '../utils/smoothScroll'

const METRICS_URL = 'https://server.keep.id/api/public/metrics'

const metrics = [
  {
    key: 'clientsEnrolledLast90Days',
    label: 'Distinct Clients served with ID Services',
  },
  {
    key: 'idsUploadedLast90Days',
    label: 'IDs Received and Stored on Keep.id',
  },
  {
    key: 'applicationsCreatedLast90Days',
    label: 'ID Applications Submitted through Keep.id',
  },
]

export function OurImpact({ annualReportRef }) {
  const [impact, setImpact] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadMetrics() {
      try {
        const response = await fetch(METRICS_URL, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Metrics request failed: ${response.status}`)
        }

        const data = await response.json()
        setImpact(data)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setHasError(true)
        }
      }
    }

    loadMetrics()

    return () => controller.abort()
  }, [])

  if (hasError) {
    return null
  }

  return (
    <section
      aria-labelledby="our-impact-title"
      className="bg-indigo-600 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <h2
              id="our-impact-title"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Our Impact in Philadelphia
            </h2>
            <div className="mt-4 flex items-center gap-1.5 px-0 text-xs font-semibold uppercase tracking-widest text-indigo-100">
              <span className="h-2 w-2 shrink-0 rounded-full bg-green" />
              Live data
            </div>
            <button
              type="button"
              onClick={() => smoothScrollTo(annualReportRef.current)}
              className="mt-6 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See our Impact Breakdown
            </button>
          </div>

          <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-indigo-400">
            {metrics.map((metric) => (
              <div
                key={metric.key}
                className="flex min-w-0 flex-col px-4 lg:px-6"
              >
                <dd className="text-6xl font-bold tracking-tighter text-white sm:text-7xl">
                  {impact
                    ? Number(impact[metric.key] || 0).toLocaleString()
                    : '—'}
                </dd>
                <dt className="mx-auto mt-3 max-w-[14rem] break-words text-sm font-medium leading-5 text-indigo-100">
                  {metric.label}
                </dt>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-200">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>
                  Past 90 days
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
