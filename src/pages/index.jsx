import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Partners } from '@/components/Partners'
import { MissionInformation } from '@/components/MissionInformation'
import { OurImpact } from '@/components/OurImpact'
import { IdentificationInformationDark } from '@/components/IdentificationInformationDark'
import { IdentificationInformationLeft } from '@/components/IdentificationInformationLeft'
import { FullIDServices } from '@/components/FullIDServices'
import { OurServices } from '@/components/OurServices'
import { AnnualReportCTA } from '@/components/AnnualReportCTA'
import { EventEmbed } from '@/components/EventEmbed'
import { useRef } from 'react'

export default function Home() {
  const resultRef = useRef(null)
  const annualReportRef = useRef(null)
  const ourServicesRef = useRef(null)
  const eventRef = useRef(null)
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
        <Hero resultRef={resultRef} eventRef={eventRef} />
        <MissionInformation ref={resultRef} />
        <OurImpact annualReportRef={annualReportRef} />
        <div ref={eventRef} id="event-section" className="grid min-h-[70vh] place-items-center px-4 py-20">
          <EventEmbed
            src="https://luma.com/embed/event/evt-7qez1Ke8tGJdXnE/simple"
            title="Team Keep event"
          />
        </div>
        <FullIDServices ourServicesRef={ourServicesRef} />
        <IdentificationInformationDark />
        <OurServices ref={ourServicesRef} />
        
        <Partners />
        {/* <IdentificationInformationLeft /> */}
        <Newsletter mailchimpUrl={mailchimpUrl} />
        <AnnualReportCTA
          ref={annualReportRef}
          mailchimpUrl={mailchimpUrl}
        />
      </main>
      <Footer />
    </>
  )
}
