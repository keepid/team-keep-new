import Image from 'next/image'

import { Container } from '@/components/Container'
import face2face from '@/images/logos/face2face.png'
import freeLibrary from '@/images/free-library-partnership.png'
import whyNotProsper from '@/images/logos/whyNotProsper.png'
import jeffersonPartnership from '@/images/jefferson-partnership.jpg'

const outreachPrograms = [
    {
        name: 'Face to Face',
        logo: face2face,
        website: 'https://facetofacegermantown.org/',
        description:
            'We partner with Face to Face to provide essential identification services to Germantown.',
        activities: [
            'Host a weekly computer lab to assist community members with digital services from job searches to benefits applications',
            'Work with their birth certificate clinic to help attendees store digital copies of vital documents',
            'Assist clinic attendees with completing social security card applications',
        ],
    },
    {
        name: 'Free Library of Philadelphia',
        logo: freeLibrary,
        website: 'https://www.freelibrary.org/',
        description:
            'At Parkway Central library, we host ID application clinics the first and third Thursday of each month from 12-4pm.',
        activities: [
            'Apply for Social Security Cards, Birth Certificates, Voter Registration, and Photo IDs',
            'Tailor needs for people with missing IDs or without addresses to mail',
            "Provide digital backups on keep.id for clients' current documents",
        ],
    },
    {
        name: 'Why Not Prosper REV Van',
        logo: whyNotProsper,
        website:
            'https://metrophiladelphia.com/stories/rolling-engagement-van-offers-services-to-formerly-incarcerated-philadelphians,97653',
        description:
            "We ride along with Why Not Prosper's Rolling Engagement Van (REV) to meet formerly incarcerated Philadelphians where they are and connect them with the identification and services they need to rebuild their lives.",
        activities: [
            'Join mobile outreach stops across Philadelphia to serve returning citizens on the ground',
            'Assist clients with replacing lost IDs, birth certificates, and Social Security cards',
            'Connect attendees with Keep.id so they have a secure digital backup of their vital documents',
        ],
    },
    {
        name: 'Jefferson MATER and Family Center',
        logo: jeffersonPartnership,
        website: 'https://www.jeffersonhealth.org/',
        description:
            "We partner with Jefferson's MATER Family Center and My Sister's Place to support mothers and families in recovery with the documents they need to access housing, benefits, and employment.",
        activities: [
            'Run on-site ID clinics alongside Jefferson care teams',
            'Help clients apply for Social Security Cards, birth certificates, and Photo IDs',
            "Provide digital backups on keep.id so clients never lose access to their documents again",
        ],
    },
]

export function Outreach() {
    return (
        <section
            id="outreach"
            aria-label="Outreach"
            className="bg-purple-primary-light py-16 sm:py-24"
        >
            <Container>
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Community Outreach
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-gray-700">
                    We work directly with community organizations to provide
                    identification services where they're needed most.
                </p>
                <div className="mx-auto mt-8 max-w-4xl space-y-8">
                    {outreachPrograms.map((program) => (
                        <div
                            key={program.name}
                            className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
                        >
                            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
                                <div className="flex-shrink-0">
                                    <a
                                        href={program.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        {program.logo ? (
                                            <Image
                                                src={program.logo}
                                                alt={program.name}
                                                className="h-auto w-48 object-contain sm:w-72"
                                                unoptimized
                                            />
                                        ) : (
                                            <div className="flex h-32 w-48 items-center justify-center rounded-xl bg-purple-primary-light px-4 text-center text-lg font-semibold text-gray-900 sm:h-40 sm:w-72 sm:text-xl">
                                                {program.name}
                                            </div>
                                        )}
                                    </a>
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                        <a
                                            href={program.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition-colors hover:text-blue-600"
                                        >
                                            {program.name}
                                        </a>
                                    </h3>
                                    <p className="mb-4 text-base text-gray-700">
                                        {program.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {program.activities.map((activity, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                                                <span className="text-sm text-gray-600">
                                                    {activity}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
