import missionHeroImage from '@/images/missionHeroImage.png'
import Image from 'next/image'
const values = [
  {
    name: 'Empathy',
    description:
      'Empathy for those whom we have the privilege to serve as we learn and remember their stories.',
  },
  {
    name: 'Creative Solutions',
    description:
      'Creative solutions as we apply digital technology to solve issues surrounding the underserved',
  },
  {
    name: 'Lasting Relationships',
    description:
      'Lasting relationships as we collaborate with volunteers, nonprofits, and the local community on our shared goals.',
  },
]

export const OurValues = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Vision and Values
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our vision is to see the marginalized gain security and stability in
          the digital age.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="text-2xl font-semibold text-gray-900">
              {value.name}
            </dt>
            <dd className="mt-1 text-lg text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
