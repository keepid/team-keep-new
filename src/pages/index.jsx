import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Partners } from '@/components/Partners'
import { IdentificationInformationDark } from '@/components/IdentificationInformationDark'
import { IdentificationInformationLeft } from '@/components/IdentificationInformationLeft'
import { AnnualReportCTA } from '@/components/AnnualReportCTA'
import { useRef } from 'react'

export default function Home() {
  const resultRef = useRef(null)

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
        <AnnualReportCTA />
        <IdentificationInformationDark ref={resultRef} />
        <IdentificationInformationLeft />
        <Newsletter />
        <Partners />
      </main>
      <Footer />
    </>
  )
}
