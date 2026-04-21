import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Outreach } from '@/components/Outreach'

export default function OutreachPage() {
  const mailchimpUrl =
    'https://keep.us7.list-manage.com/subscribe/post?u=9896e51b9ee0605d5e6745f82&id=f16b440eb5'
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
      <Footer mailchimpUrl={mailchimpUrl} />
    </>
  )
}
