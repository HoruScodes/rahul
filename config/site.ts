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
      "https://docs.google.com/document/d/1ItTaB-iHiQQJzCwxoArQkl7PjBV5lhpwr2LaU4Gpn04/edit?usp=sharing",
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
        "Mentored and onboarded interns and new employees, fostering their seamless integration into the dev team." ,
        "Developed comprehensive test cases and suites in (Jest/Selenium/React Testing Library) to increase code coverage to ensure robust functionality and performance of critical features." ,
        "Spearheaded the development of internal tools, streamlining development processes and boosting productivity. facilitated tasks like code analysis, automated testing, and deployment, saving time and enhancing workflows.",
        "Authored and maintained internal developer documentation, serving as a valuable resource for understanding complex systems, coding standards, and best practices." ,
        "Successfully migrated features from .NET to .NET Core, improving performance by up to 35%. Conducted thorough testing and optimization for a seamless transition.",
        "Implemented over 100 fixes and enhancements, Collaborated with customer support to address recurring issues effectively ,reducing customer support tickets by 25%." ,
        "Converted the frontend modules  from Backbone to React/ TypeScript, resulting in a more responsive user interface.",
        "Collaborated and communicated effectively with diverse teams, actively participating in daily code reviews, and mentoring junior developers to foster a culture of continuous improvement and knowledge sharing.",
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
        "Developed a web platform for the SaaS product SCIKEY, used by 100+ clients. Collaborated closely with product managers and UX designers to translate requirements into efficient and visually appealing user interfaces.",
        "Successfully migrated Web-Applications from Angular 4 to Angular 7 while ensuring no loss in quality or functionality. Conducted extensive testing and worked closely with QA teams to identify and resolve any issues before deployment.",
        "Migrated major AngularJS Codebase to React, improving performance benchmarks by 20%. Employed best practices and design patterns to create scalable and maintainable code.",
        "Actively contributed to the adoption of Scrum Agile Methodology within the team. Facilitated sprint planning meetings, conducted daily scrums, and participated in retrospective sessions to continuously improve team efficiency and product delivery.",
      ],
    },
  ],
}
