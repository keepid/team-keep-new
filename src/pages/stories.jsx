import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { OurStories } from '@/components/OurStories'

export default function Team() {
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
      <Footer />
    </>
  )
}
