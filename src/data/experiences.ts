export type Experience = {
  job_title: string
  company_name: string
  technologies: string[]
  about_job: string[]
  logo: string
  work_time: {
    start: string
    end: string
    total?: string
  }
  links: { name: string; url: string }[]
}

export const experiences = [
  {
    job_title: 'Frontend Software Engineer',
    company_name: 'Doğuş Teknoloji',
    technologies: [
      'Next.js',
      'TypeScript',
      'Storybook',
      'Zustand',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Azure Boards',
      'Strapi',
    ],
    about_job: [
      'Successfully Lead the Frontend development and launch of the Volkswagen Doğuş Finans (VDF) Insurance platform , managing the entire FE architecture, collaborating with Strapi for headless CMS integration, and delivering the product to production as the Frontend Lead.',
      'Leading the development of Volkswagen Doğuş Finans (VDF) insurance platform using Next.js and TypeScript',
      'Implementing component-driven architecture with Storybook, improving development efficiency by 40%',
      'Architecting state management solutions using Zustand and establishing data fetching patterns with TanStack Query',
      'Managing complex form validations using React Hook Form and Zod',
      'Collaborating with cross-functional teams using Azure Boards for project management',
    ],
    links: [{ name: 'vdfsigorta.com.tr', url: 'https://vdfsigorta.com.tr' }],
    work_time: {
      start: 'August 2024',
      end: 'Present',
    },
    logo: '/image/dogus_teknoloji_logo.jpeg',
  },
  {
    job_title: 'Frontend Software Engineer',
    company_name: '777 Sense Labs',
    technologies: ['React Native', 'Next.js', 'Node.js', 'MongoDB', 'Figma'],
    about_job: [
      'Developed cross-platform applications using React Native and Next.js',
      'Implemented pixel-perfect UI components from Figma designs for web and mobile platforms',
      'Established efficient data flow patterns between frontend and backend using Node.js and MongoDB',
      'Reduced application load time by 30% through optimization techniques',
      "Contributed to team's adoption of modern frontend practices and component library development",
    ],
    links: [
      { name: '777senselabs.com', url: 'https://www.777senselabs.com/' },
      { name: 'brewriders.com', url: 'https://brewriders.com/' },
      { name: 'stake.brewriders.com', url: 'https://stake.brewriders.com/' },
    ],
    work_time: {
      start: 'November 2023',
      end: 'August 2024',
      total: '9 Months',
    },
    logo: '/image/777_sense_labs_logo.jpeg',
  },
  {
    job_title: 'Frontend Software Engineer',
    company_name: 'Educational Network, Inc.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'WCAG 2.1',
      'Performance Optimization',
    ],
    about_job: [
      'Developed responsive educational platforms using modern web technologies',
      'Implemented accessibility standards (WCAG 2.1) across all web applications',
      'Optimized website performance achieving 90+ Lighthouse scores',
      'Created reusable component library reducing development time by 25%',
    ],
    links: [
      { name: 'wlakeprep.org', url: 'https://www.wlakeprep.org/' },
      { name: 'innovation-prep.org', url: 'https://www.innovation-prep.org/' },
      { name: 'matergardens.org', url: 'https://www.matergardens.org/' },
      { name: 'somersetcentral.org', url: 'https://www.somersetcentral.org/' },
      {
        name: 'lakecharlescharter.org',
        url: 'https://www.lakecharlescharter.org/',
      },
    ],
    work_time: {
      start: 'June 2022',
      end: 'December 2023',
      total: '1.7 Years',
    },
    logo: '/image/educational_networks_inc__logo.jpeg',
  },
  {
    job_title: 'Frontend Software Engineer',
    company_name: 'Kedi Games',
    technologies: [
      'React.js',
      'Three.js',
      'Spline',
      'SCSS',
      'Node.js',
      'MongoDB',
      'Figma',
      'WebSocket',
    ],
    about_job: [
      'Developed interactive gaming interfaces using React.js and Three.js',
      'Created engaging 3D animations using Spline, enhancing user experience',
      'Built responsive admin dashboard for content management',
      'Implemented real-time features using WebSocket connections',
    ],
    links: [],
    work_time: {
      start: 'November 2022',
      end: 'May 2023',
      total: '6 Months',
    },
    logo: '/image/kedi_games_logo.jpeg',
  },
]
