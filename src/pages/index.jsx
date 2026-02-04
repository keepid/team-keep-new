import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Partners } from '@/components/Partners'
import { Outreach } from '@/components/Outreach'
import { IdentificationInformationDark } from '@/components/IdentificationInformationDark'
import { IdentificationInformationLeft } from '@/components/IdentificationInformationLeft'
import { AnnualReportCTA } from '@/components/AnnualReportCTA'
import { useRef } from 'react'

export default function Home() {
  const resultRef = useRef(null)

  const mailchimpUrl =
    'https://keep.us7.list-manage.com/subscribe/post?u=9896e51b9ee0605d5e6745f82&amp;id=f16b440eb5'
  return (
    <>
      <Head>
        <title>Team Keep Home</title>
        <meta
          name="description"
          content="Team Keep is a nonprofit dedicated towards helping those vulnerable with identification services"
        />
      </Head>
      <Header />
      <main>
        <Hero resultRef={resultRef} />
        <AnnualReportCTA mailchimpUrl={mailchimpUrl} />
        <IdentificationInformationDark ref={resultRef} />
        <IdentificationInformationLeft />
        <Outreach />
        <Newsletter mailchimpUrl={mailchimpUrl} />
        <Partners />
      </main>
      <Footer mailchimpUrl={mailchimpUrl} />
    </>
  )
}
