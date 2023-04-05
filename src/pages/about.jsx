import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AboutHero } from '@/components/AboutHero'
import { OurValues } from '@/components/OurValues'
import { FAQs } from '@/components/FAQs'

export default function About() {
  const mailchimpUrl =
    'https://keep.us7.list-manage.com/subscribe/post?u=9896e51b9ee0605d5e6745f82&amp;id=f16b440eb5'
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
      <Footer mailchimpUrl={mailchimpUrl} />
    </>
  )
}
