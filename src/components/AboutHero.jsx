import missionHeroImage from '@/images/missionHeroImage.png'
import Image from 'next/image'

export const AboutHero = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Our Mission
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our mission is to provide empathetic support and a valuable
                  network of resources to help the marginalized access services
                  and employment.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://www.canva.com/design/DAFUy5hOxIY/fDmczXWlTtWtKgekVSHuig/view?utm_content=DAFUy5hOxIY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                    target="_blank"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Read our latest Annual Report
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <Image src={missionHeroImage} />
          </div>
        </div>
      </div>
    </div>
  )
}
