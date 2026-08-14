import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const givingOptions = [
  {
    title: 'Monthly Giving',
    intro:
      "Your generosity allows our ID Recovery Services and Keep.id technology platform to reach hundreds more each year.",
    link: {
      label: 'Our Zeffy Donation Portal',
      href: 'https://www.zeffy.com/en-US/donation-form/sponsor-an-id-for-an-individual-in-poverty',
    },
  },
  {
    title: 'Become a Corporate Sponsor',
    paragraphs: [
      'Corporate Sponsorships support clinic operations, application fees, technology access, volunteer coordination, and public events that connect residents with the documents they need to move forward.',
    ],
    link: {
      label: 'View our corporate sponsorship one-pager',
      href: 'https://canva.link/z0yu2feph1vu1nr',
    },
    contact: {
      label: 'Contact Steffen Cornwell to learn more',
      emailUser: 'steffencornwell',
      emailDomain: 'keep.id',
      emailLabel: 'Email Steffen Cornwell',
    },
  },
  {
    title: 'Annual Keep.id Fundraiser',
    intro:
      'We have an upcoming Keep.id Fundraiser in Philadelphia. If you are in the Philadelphia area, we would love for you to join us and meet us in person!',
    link: {
      label: 'Five Years of Opening Doors Annual Fundraiser',
      href: 'https://luma.com/keepid-5yrs',
    },
  },
  {
    title: 'Workplace Donation Matching',
    intro:
      'Many employers will match and sometimes even double or triple their employees donations. We work with Benevity, which partners with most Fortune 500 companies including Google for corporate matching.',
    paragraphs: [
      'Check with your corporate giving team or your company\'s benevity portal.',
      'Team Keep is happy to provide any documents or materials needed.',
    ],
    contact: {
      label: 'Contact Connor Chong to learn more',
      emailUser: 'connorchong',
      emailDomain: 'keep.id',
      emailLabel: 'Email Team Keep',
    },
  },
  {
    title: 'Donate Brokerage Assets & Securities',
    intro:
      'Donating appreciated securities, stock options, or other brokerage assets can be a tax-efficient way to support Team Keep while helping Philadelphia residents recover the vital documents they need.',
    paragraphs: [
      'Your broker or financial advisor can help initiate a direct transfer and determine how the deduction, fair market value, holding period, and any capital gains considerations apply to your situation.',
    ],
    bullets: [
      {
        text: 'Give directly from a brokerage account: ',
        linkLabel: 'IRS charitable contribution rules',
        href: 'https://www.irs.gov/publications/p526',
      },
      {
        text: 'Support Team Keep without first selling appreciated assets: ',
        linkLabel: 'IRS donated property valuation guide',
        href: 'https://www.irs.gov/publications/p561',
      },
      {
        text: 'Ask us for transfer instructions before initiating the gift: ',
        linkLabel: 'IRS Form 8283 noncash contribution guidance',
        href: 'https://www.irs.gov/forms-pubs/about-form-8283',
      },
    ],
    contact: {
      label: 'Contact Connor Chong to learn more',
      emailUser: 'connorchong',
      emailDomain: 'keep.id',
      emailLabel: 'Email Connor Chong',
    },
  },
  
  {
    title: 'Qualified Charitable IRA Distributions',
    intro:
      "If you're 70-1/2 or older, you can donate up to $111,000 in 2026 directly from an Individual Retirement Account (IRA) to charities like Team Keep. Couples may donate up to $222,000.",
    paragraphs: [
      "Distributions may be made in one large contribution or several smaller contributions during the course of the year. Contact your IRA custodian to let them know that you'd like to make a Qualified Charitable Distribution to Team Keep.",
    ],
    contact: {
      label: 'Contact Connor Chong to learn more',
      emailUser: 'connorchong',
      emailDomain: 'keep.id',
      emailLabel: 'Email Connor Chong',
    },
  },
  {
    title: 'Donor Advised Funds',
    intro:
      'If you have a donor-advised fund, please consider recommending a grant to Team Keep. You can contact your financial institution or charitable sponsor in order to make this recommendation.',
    details: [
      'Our Tax EIN #: 85-1899918',
      'Mailing Address: 3675 Market Street, Ste 200, Philadelphia, PA 19104',
    ],
  },
  
  {
    title: 'Honor & Memorial Gifts',
    intro: "Gifts in honor or celebration",
    paragraphs: [
      "Looking for a special way to celebrate a loved one's birthday or anniversary? Make a donation in someone's honor. We will contact the special person or people in whose name the donation is made.",
      'Celebratory gifts to Team Keep help residents recover essential documents and access the services, housing, jobs, and care connected to them.',
      'Gifts in memoriam',
      'Team Keep is honored and grateful to be considered for donations in memoriam of a friend or loved one. When you make a donation in memory of someone, we will notify family members or other requested parties of this donation.',
    ],
  },
  
]

function ObfuscatedEmailLink({ user, domain, fallbackLabel, className }) {
  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail(`${user}@${domain}`)
  }, [domain, user])

  if (!email) {
    return <span className={className}>{fallbackLabel}</span>
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  )
}

function GivingCard({ option, index }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">
          {index + 1}
        </span>
        <h2 className="text-xl font-semibold leading-7 text-gray-900">
          {option.title}
        </h2>
      </div>

      <div className="mt-5 space-y-4 text-sm leading-6 text-gray-600">
        <p>{option.intro}</p>
        {option.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {option.bullets && (
        <ul className="mt-5 space-y-3">
          {option.bullets.map((bullet) => (
            <li
              key={typeof bullet === 'string' ? bullet : bullet.text}
              className="flex gap-3 text-sm leading-6 text-gray-700"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
              <span>
                {typeof bullet === 'string' ? (
                  bullet
                ) : (
                  <>
                    {bullet.text}{' '}
                    <a
                      href={bullet.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      {bullet.linkLabel}
                    </a>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}

      {option.details && (
        <dl className="mt-5 space-y-3 border-t border-gray-100 pt-5">
          {option.details.map((detail) => {
            const [label, value] = detail.split(': ')

            return (
              <div key={detail}>
                <dt className="text-sm font-semibold text-gray-900">{label}</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-600">{value}</dd>
              </div>
            )
          })}
        </dl>
      )}

      {option.link && (
        <div className="mt-6">
          <a
            href={option.link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {option.link.label}
          </a>
        </div>
      )}

      {option.contact && (
        <div className="mt-6 border-t border-gray-100 pt-5">
          <p className="text-sm font-semibold text-gray-900">
            {option.contact.label}
          </p>
          <ObfuscatedEmailLink
            user={option.contact.emailUser}
            domain={option.contact.emailDomain}
            fallbackLabel={option.contact.emailLabel}
            className="mt-1 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          />
        </div>
      )}
    </article>
  )
}

export default function WaysToGive() {
  return (
    <>
      <Head>
        <title>Ways to Give</title>
        <meta
          name="description"
          content="Explore monthly giving, securities gifts, sponsorship, donor advised fund, and fundraiser options."
        />
      </Head>
      <Header />
      <main className="bg-purple-primary-light pt-24">
        <section className="px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* <p className="text-base font-semibold leading-7 text-indigo-700">
              Support the mission
            </p> */}
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Support Team Keep Your Way
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              We are an innovative, technology-enabled nonprofit with proven results, transforming 
              how Philadelphia residents facing housing insecurity recover their most important documents. 
              Each $150 pledge fully supports one individual with their end-to-end ID needs. 
              Help us recover the dignity and identity of those facing housing insecurity in our city by giving in the way that works best for you.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {givingOptions.map((option, index) => (
              <GivingCard key={option.title} option={option} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
