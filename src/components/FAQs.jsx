const faqs = [
  {
    question: 'Describe your venture in a single sentence.',
    answer:
      'Keep.id is a 501(c)3 organization operating a HIPAA-compliant online platform for case managers to help assist clients experiencing homelessness in obtaining, securely storing, and utilizing government-issued identification to apply for aid services.',
  },
  {
    question: 'Who is your customer?',
    answer:
      'Our customers are nonprofit partner organizations and Continuums of Care, or county-wide government bodies that oversee homelessness services and coordinate with all the nonprofits in that region. For case managers at nonprofits, Keep.id is an administrative resource to manage every step of a client’s journey, including organizing the logistics and data involved with this process. Nonprofits are able to generate reports and track coordinated entry data through Keep.id, as well as manage and perform actions on behalf of PEH - including uploading and managing their IDs, saving caseworkers time and streamlining identification services for that nonprofit. In return for these time-saving features, nonprofit partners financially support Keep.id through our subscription model, but we also negotiate pricing to ensure that any nonprofit that wants to use Keep.id can afford to do so. With regards to the clients experiencing homelessness, the product’s services (from ID storage and retrieval to Applications) are offered to them for free through the partnerships with nonprofits we form.',
  },
  {
    question: 'What is your geographic focus?',
    answer:
      "We are based in Philadelphia, Pennsylvania. According to the Department of Housing and Urban Development's 2020 Annual Homeless Assessment Report, Philadelphia had an estimated 4,219 people experiencing homelessness on a single night in January 2020, with a significant portion of that population being unsheltered. Additionally, Philadelphia has a poverty rate of approximately 23%, which is higher than the national average. This poverty rate correlates to more people experiencing homelessness and needing assistance to obtain identification and access aid services. Keep.id’s part in Philadelphia’s homelessness equation is clear and distinct: providing accessible digital identification that streamlines the often challenging benefits and jobs application process. This approach is vital to targeting homelessness in the long-run because digital ID and the doors it opens provide the building blocks necessary for PEH to live more independently of a shelter and in dignity. ",
  },
  {
    question:
      'What is the social or environmental problem you are trying to solve?',
    answer:
      'Homelessness is a complex and pervasive issue in the United States. According to the Department of Housing and Urban Development, on a single night in January 2022, there were an estimated 582,462 people experiencing homelessness (PEH) in the US. One significant challenge that people experiencing homelessness face is the lack of identification documents, which can create barriers to accessing critical services and benefits. According to a survey conducted by the National Law Center on Homelessness & Poverty (NLCHP), 53% of PEH were denied food stamps, 54% were denied access to shelters or housing services, and 45% were denied access to Medicaid or medical services. Lack of identification forces individuals to find alternative, informal assistance that is neither adequate nor consistent. ',
  },
]

export const FAQs = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a
                href="mailto:contact@keep.id"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                support team.
              </a>{' '}
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
