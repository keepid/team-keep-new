import MailchimpSubscribe from 'react-mailchimp-subscribe'
import React from 'react'

export const AnnualReportCTA = (props) => {
  const mailchimpUrl = props.mailchimpUrl
  return (
    <div className="bg-purple-primary-light">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Read our Annual Reports
          </h2>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://www.canva.com/design/DAF3NQ0yO_I/xZ4DhoLex6Zt1UaKmeWVng/view?utm_content=DAF3NQ0yO_I&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              target="_blank"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              2023 Annual Report
            </a>
            <a
              href="https://www.canva.com/design/DAFUy5hOxIY/fDmczXWlTtWtKgekVSHuig/view?utm_content=DAFUy5hOxIY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              2022 Annual Report
            </a>
            <a
              href="https://drive.google.com/file/d/1-Z45XqU77y_tFvGGFq3RR9tdAqgUtFil/view?usp=sharing"
              target="_blank"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              2021 Annual Report
            </a>
            <a
              href="https://drive.google.com/file/d/1QfqBtmEBH5PcYFlj2tBXpdsRM-Y_YzAx/view?usp=sharing"
              target="_blank"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              2020 Annual Report
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Stay connected with us and join our newsletter to receive updates on
            our platform and our impact.
          </p>
          <MailchimpSubscribe
            url={mailchimpUrl}
            render={({ subscribe, status }) => (
              <form
                className="mt-10"
                onSubmit={(e) => {
                  e.preventDefault()
                  subscribe({
                    EMAIL: e.target.email.value,
                  })
                }}
              >
                <div className="flex gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onSubmit={(e) => {
                      e.preventDefault()

                      alert('Thank you for subscribing!')
                    }}
                  >
                    Subscribe
                  </button>
                  {status === 'sending' && (
                    <p className="my-auto">Sending...</p>
                  )}
                  {status === 'error' && (
                    <p className="my-auto">This email address is not valid.</p>
                  )}
                  {status === 'success' && (
                    <p className="my-auto">Thank you for subscribing!</p>
                  )}
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  )
}
