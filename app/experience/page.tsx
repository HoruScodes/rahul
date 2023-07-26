import { siteConfig } from "@/config/site"
import ExperienceItem from "@/components/experience-item"

export default async function ExperiencePage() {
  const { workExperiences } = siteConfig
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {workExperiences.map((item) => (
        <ExperienceItem {...item} />
      ))}
    </div>
  )
}
