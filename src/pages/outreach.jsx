import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Outreach } from '@/components/Outreach'

export default function OutreachPage() {
  return (
    <>
      <Head>
        <title>Community Outreach</title>
        <meta
          name="description"
          content="Team Keep partners with community organizations across Philadelphia to deliver identification services where they're needed most."
        />
      </Head>
      <Header />
      <main className="pt-24">
        <Outreach />
      </main>
      <Footer />
    </>
  )
}
