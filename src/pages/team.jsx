import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Members } from '@/components/Members'

export default function Team() {
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
      <Footer />
    </>
  )
}
