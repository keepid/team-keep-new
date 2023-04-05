import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { OurStories } from '@/components/OurStories'

export default function Team() {
  const mailchimpUrl =
    'https://keep.us7.list-manage.com/subscribe/post?u=9896e51b9ee0605d5e6745f82&amp;id=f16b440eb5'
  return (
    <>
      <Head>
        <title>Our Stories</title>
        <meta
          name="description"
          content="Our stories at Keep.id"
        />
      </Head>
      <Header />
      <main>
        <OurStories />
      </main>
      <Footer mailchimpUrl={mailchimpUrl} />
    </>
  )
}
