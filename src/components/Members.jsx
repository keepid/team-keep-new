import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import connorChong from '@/images/people/connorChong.jpg'
import steffenCornwell from '@/images/people/steffenCornwell.jpg'
import michaelHagan from '@/images/people/michaelHagan.png'
import danielJoo from '@/images/people/danielJoo.png'
import jacksonFoltz from '@/images/people/jacksonFoltz.jpg'
import johnOndik from '@/images/people/johnOndik.png'
import ravindarGujaral from '@/images/people/ravindarGujaral.jpg'
import karissaForino from '@/images/people/karissaForino.jpg'
import danTreglia from '@/images/people/danTreglia.jpg'
import kaylaWhite from '@/images/people/kaylaWhite.jpg'
import allisonMi from '@/images/people/allisonMi.png'
import allyKim from '@/images/people/allyKim.png'
import danielLee from '@/images/people/danielLee.png'
import jiayangKuang from '@/images/people/jiayangKuang.jpg'
import samuelLee from '@/images/people/samuelLee.png'


const teams = [
  {
    name: 'Keep.id',
    largeText: 'Leadership',
    people: [
      {
        name: 'Connor Chong',
        role: 'Executive Director, CTO',
        image: connorChong,
      },
      {
        name: 'Steffen Cornwell',
        role: 'Nonprofit Liaison Lead',
        image: steffenCornwell,
      },
      {
        name: 'Daniel Joo',
        role: 'Chief Operations Officer',
        image: danielJoo,
      },
      {
        name: 'Kayla White',
        role: 'Grantwriting Lead',
        image: kaylaWhite,
      }
    ],
  },
  {
    name: 'Board of Directors',
    largeText: 'Board',
    people: [
      {
        name: 'Steffen Cornwell',
        role: 'President, Treasurer',
        image: steffenCornwell,
      },
      {
        name: 'Jackson Foltz',
        role: 'Secretary',
        image: jacksonFoltz,
      },
      {
        name: 'Michael Hagan',
        role: '',
        image: michaelHagan,
      },
      {
        name: 'John Ondik',
        role: '',
        image: johnOndik,
      },
      {
        name: 'Dan Treglia',
        role: '',
        image: danTreglia,
      },
      {
        name: 'Ravindar Gujaral',
        role: '',
        image: ravindarGujaral,
      },
      {
        name: 'Karissa Forino',
        role: '',
        image: karissaForino,
      },
    ],
  },
  {
    name: 'Keep.id',
    largeText: 'Engineering',
    people: [
      {
        name: 'Connor Chong',
        role: 'Engineering Lead',
        image: connorChong,
      },
      {
        name: 'Sam Lee',
        role: 'Backend Engineer',
        image: samuelLee,
      },
      {
        name: 'Daniel Joo',
        role: 'Frontend Engineer',
        image: danielJoo,
      },
      {
        name: 'Ally Kim',
        role: 'Frontend Engineer',
        image: allyKim,
      },
      {
        name: 'Allison Mi',
        role: 'Frontend Engineer',
        image: allisonMi,
      },
      {
        name: 'Jiayang Kuang',
        role: 'Backend Engineer',
        image: jiayangKuang,
      },
      {
        name: 'Daniel Lee',
        role: 'Backend Engineer',
        image: danielLee,
      },
    ],
  },
  {
    name: 'Keep.id',
    largeText: 'Nonprofit Liaisons',
    people: [
      {
        name: 'Steffen Cornwell',
        role: 'Nonprofit Liaison Lead',
        image: steffenCornwell,
      }
    ],
  },
  {
    name: 'Keep.id',
    largeText: 'Grantwriting',
    people: [
      {
        name: 'Kayla White',
        role: 'Grantwriting Lead',
        image: kaylaWhite,
      }
    ],
  },
  {
    name: 'Keep.id',
    largeText: 'Product',
    people: [
      {
        name: 'Connor Chong',
        role: 'Product Lead',
        image: connorChong,
      },
      {
        name: 'Steffen Cornwell',
        role: 'Product Manager',
        image: steffenCornwell,
      }
    ],
  },
  {
    name: 'Keep.id',
    largeText: 'Legal and Ops',
    people: [
      {
        name: 'Daniel Joo',
        role: 'Chief Operations Officer',
        image: danielJoo,
      }
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        {/* <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath> */}
      </defs>
    </svg>
  )
}

export function Members() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="members"
      aria-labelledby="members-title"
      className="py-20 pt-10 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="members-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Keep.id Members
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Our teammates focused on helping vulnerable populations.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                teams.map((team, teamIndex) => (
                  <div key={team.name} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        teamIndex === selectedIndex
                          ? 'fill-blue-600 stroke-blue-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          teamIndex === selectedIndex
                            ? 'text-blue-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {team.name}
                        </Tab>
                      </div>
                      <time className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900">
                        {team.largeText}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {teams.map((team) => (
              <Tab.Panel
                key={team.name}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {team.people.map((person, personIndex) => (
                  <div key={personIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][personIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${personIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={person.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {person.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
