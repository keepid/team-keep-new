import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AboutHero } from '@/components/AboutHero'
import { OurValues } from '@/components/OurValues'
import { FAQs } from '@/components/FAQs'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="About Us at Keep.id"
        />
      </Head>
      <Header />
      <main>
        <AboutHero />
        <OurValues /> 
        <FAQs />
      </main>
      <Footer />
    </>
  )
}
