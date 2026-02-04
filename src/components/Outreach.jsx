import Image from 'next/image'

import { Container } from '@/components/Container'
import face2face from '@/images/logos/face2face.png'

const outreachPrograms = [
    {
        name: 'Face to Face',
        logo: face2face,
        website: 'https://facetofacegermantown.org/',
        description: 'We partner with Face2Face to provide essential identification services to Germantown.',
        activities: [
            'Host a computer lab to assist community members with digital services',
            'Work with their birth certificate clinic to help attendees obtain vital documents',
            'Provide social security card applications and assistance to clinic attendees',
        ],
    },
]

export function Outreach() {
    return (
        <section id="outreach" aria-label="Outreach" className="py-16 sm:py-24 bg-purple-primary-light">
            <Container>
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Community Outreach
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-gray-700">
                    We work directly with community organizations to provide identification services where they're needed most.
                </p>
                <div className="mx-auto mt-8 max-w-4xl">
                    {outreachPrograms.map((program) => (
                        <div
                            key={program.name}
                            className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg"
                        >
                            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                                <div className="flex-shrink-0">
                                    <a
                                        href={program.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Image
                                            src={program.logo}
                                            alt={program.name}
                                            className="h-20 w-auto object-contain"
                                            unoptimized
                                        />
                                    </a>
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        <a
                                            href={program.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-600 transition-colors"
                                        >
                                            {program.name}
                                        </a>
                                    </h3>
                                    <p className="text-base text-gray-700 mb-4">
                                        {program.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {program.activities.map((activity, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3" />
                                                <span className="text-sm text-gray-600">{activity}</span>
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
