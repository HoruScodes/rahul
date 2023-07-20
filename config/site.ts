export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Rahul Pipaliya",
  description:
    "Rahul Pipaliya is a full-stack developer who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  mainNav: [
    {
      title: "Experience",
      href: "/experience",
    },
  ],
  links: {
    twitter: "https://twitter.com/rahul_pipaliya1",
    github: "https://github.com/horuscodes",
    linkedin: "https://www.linkedin.com/in/rahulpipaliya/",
    resume:
      "https://docs.google.com/document/d/1DrEcGvplUqe0PIA3xCyfA-FIZ-RKBJBeClhaQoUdFFk/edit?usp=sharing",
    email: "mailto:pipaliya1997@gmail.com",
  },
  workExperiences: [
    {
      date: "2021 — Present",
      jobTitle: "Web Developer",
      companyName: "Amilia",
      companyUrl: "https://Amilia.com",
      technologies: [
        "React",
        "C#",
        ".NET Core",
        "SCSS",
        "TypeScript",
        "JavaScript",
        "Docker",
      ],
      description: [
        "Successfully migrated features from .NET to .NETCore, resulting in improved performance of up to 35%. ",
        "Implemented over 100 fixes and improvements to existing features, resulting in a 25% reduction in customer support tickets.",
        "Writing unit and integration tests in Jest / Selenium / React Testing Library  to maintain or increase our code coverage, resulting in fewer bugs and improved code quality.",
        "Converted the frontend modules  from Backbone to React/ TypeScript, resulting in a more responsive user interface.",
        "Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients  and Actively participate in code reviews on a daily basis.",
      ],
    },
    {
      date: "2018 — 2019",
      jobTitle: "Associate Software Developer",
      companyName: "Srkay Consulting Group",
      companyUrl: "https://srkay.com",
      technologies: [
        "Angular",
        "Node.js",
        "SCSS",
        "JavaScript",
        "TypeScript",
        "MongoDB",
      ],
      description: [
        "Write modern, performant, and robust code Developed a high-performance web platform for a SaaS product SCIKEY, used by 100+ clients. ",
        "Successfully migrated Web-Applications from Angular 4 to Angular 7 while ensuring no loss in quality or functionality.",
        "Migrated major Angularjs Modules to React, improving performance benchmarks by 20%. ",
        "Used Scrum Agile Methodology in my work (Daily Scrum Meeting, Sprint Backlog, 1 on1 meeting).",
      ],
    },
  ],
}
