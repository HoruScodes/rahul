interface ExperienceProps {
  date: string
  jobTitle: string
  companyName: string
  companyUrl: string
  technologies: string[]
  description: string[]
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  date,
  jobTitle,
  companyName,
  companyUrl,
  technologies,
  description,
}) => {
  return (
    <div className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 dark:lg:hover:!opacity-100 dark:lg:group-hover/list:opacity-50">
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2"
          aria-label={date}
        >
          {date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug ">
            <div>
              <a
                className="group/link inline-flex items-baseline text-base font-medium leading-tight  "
                href={companyUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${companyName}`}
              >
                <span className="absolute  -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {jobTitle} @{/* */}{" "}
                  <span className="inline-block">
                    {companyName}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <ul>
            {description &&
              description.map((descriptionItem) => (
                <li className="mt-2 text-sm leading-normal dark:text-gray-400">
                  {descriptionItem}
                </li>
              ))}
          </ul>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((technology) => (
              <li className="mr-1.5 mt-2" key={technology}>
                <div className="flex items-center rounded-full bg-primary px-3  py-1 text-xs font-medium leading-5 text-primary-foreground  ">
                  {technology}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
