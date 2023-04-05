import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Members } from '@/components/Members'

export default function Team() {
  const mailchimpUrl =
    'https://keep.us7.list-manage.com/subscribe/post?u=9896e51b9ee0605d5e6745f82&amp;id=f16b440eb5'
  return (
    <>
      <Head>
        <title>Our Team</title>
        <meta
          name="description"
          content="Our Team at Keep.id"
        />
      </Head>
      <Header />
      <main>
        <Members />
      </main>
      <Footer mailchimpUrl={mailchimpUrl} />
    </>
  )
}
