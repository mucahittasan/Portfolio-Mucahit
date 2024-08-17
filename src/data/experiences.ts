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
}

export const experiences = [
  {
    job_title: 'Frontend Sofwtare Engineer',
    company_name: 'Doğuş Teknoloji',
    technologies: [
      'React.js',
      'Next.js (SSR, CSR)',
      'Typescript',
      'Tailwindcss',
      'Storybook',
      'Azure DevOps',
      'Figma',
    ],
    about_job: [],
    work_time: {
      start: 'August 2024',
      end: 'Present',
    },
    logo: '/image/dogus_teknoloji_logo.jpeg',
  },
  {
    job_title: 'Frontend Sofwtare Engineer',
    company_name: '777 Sense Labs',
    technologies: [
      'React.js',
      'React Native',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Figma',
      'Prisma',
      'Node.js',
    ],
    about_job: [
      'Contributed as part of the development team, utilizing technologies such as React, Next.js, TypeScript, and Tailwind CSS to craft user interfaces for web platforms.',
      'Developed applications for mobile platforms using React Native, ensuring a seamless experience between mobile and web interfaces.',
      'Translated Figma designs into code, implementing them into both web and mobile frontend realms, creating user-friendly interfaces.',
      'Facilitated communication with the backend, managing data flow using contemporary technologies like Node.js and MongoDB, enabling client-server interactions.',
    ],
    work_time: {
      start: 'November 2023',
      end: 'August 2024',
    },
    logo: '/image/777_sense_labs_logo.jpeg',
  },
  {
    job_title: 'Frontend Sofwtare Engineer',
    company_name: 'Educational Networks',
    technologies: ['Html', 'Css', 'Javascript', 'Photoshop'],
    about_job: [
      'I honed my skills in developing user-friendly school websites using pure CSS, HTML, and JavaScript',
      'Developing the responsive part of Web Sites from start to finish',
      'Making the necessary arrangements in the pictures with Photoshop and converting them from photoshop to html',
      'I gained experience in accessibility and UX design during my time there',
    ],
    work_time: {
      start: 'June 2022',
      end: 'October 2023',
      total: '1.7 Years',
    },
    logo: '/image/educational_networks_inc__logo.jpeg',
  },
  {
    job_title: 'Frontend Sofwtare Engineer',
    company_name: 'Kedi Games',
    technologies: ['React.js', 'Scss', 'Node.js', 'MongoDB', 'Figma', 'Spline'],
    about_job: [
      'The process of transferring the design made in Figma to the React.js code',
      'Preparation of the admin panel to keep the news data and communication channel',
      'I prepared the 3d animations that the website needs with spline and transferred them to the react project.',
    ],
    work_time: {
      start: 'November 2022',
      end: 'May 2023',
      total: '6 Month',
    },
    logo: '/image/kedi_games_logo.jpeg',
  },
]
