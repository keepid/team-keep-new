import React, { useState, useEffect } from 'react'

export const OurStories = () => {
  const url =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/keep-informed'
  const [mediumData, setMediumData] = useState([])

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        const { status } = responseJSON
        if (status === 'ok') {
          setMediumData(responseJSON.items)
        }
      })
  }, [])

  const formatDescription = (description) => {
    const descriptionWithoutHtmlTags = description.replace(/(<([^>]+)>)/gi, '')
    const shorteneddDescription = descriptionWithoutHtmlTags
      .split(' ')
      .splice(0, 18)
      .join(' ')
      .trim()
    return `"${shorteneddDescription}..."`
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Keep.Informed
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A collection of writing by Team Keep about the homeless experience.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {mediumData.map((article) => (
            <article key={article.guid} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={article.thumbnail}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-5 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={article.link}>
                      <span className="absolute inset-0 mt-3" />
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {formatDescription(article.description)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
