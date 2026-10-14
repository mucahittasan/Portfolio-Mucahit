export const site = {
  name: 'Mucahit Tasan',
  shortName: 'Mucahit',
  role: 'Frontend Software Engineer',
  focus: ['Frontend Architecture', 'Product Engineering', 'Fintech & Insurtech'],
  description:
    'Frontend Software Engineer specialized in React, Next.js and TypeScript — building scalable component systems, complex multi-step workflows and fast, accessible product experiences.',
  url: 'https://mucahit-tasan.vercel.app',
  email: 'mucahittasan0@gmail.com',
  location: 'Diyarbakır, Türkiye',
  timezone: 'Europe/Istanbul',
  timezoneLabel: 'GMT+3',
  /** Toggles the "open to opportunities" badge in the hero. */
  available: true,
  cv: '/mucahit-tasan-cv.pdf',
  socials: {
    github: 'https://github.com/mucahittasan',
    linkedin: 'https://linkedin.com/in/mucahittasan',
  },
  source: 'https://github.com/mucahittasan/Portfolio-Mucahit',
} as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'Experience', href: '/experience' },
] as const

export const stats = [
  { value: 7, suffix: '', label: 'Years writing software' },
  { value: 4, suffix: '+', label: 'Years in product teams' },
  { value: 5, suffix: '', label: 'Production platforms owned' },
  { value: 98, suffix: '', label: 'Lighthouse score reached' },
] as const

export const expertise = [
  {
    title: 'Frontend Architecture',
    description:
      'Scalable Next.js architectures, reusable component patterns and design systems documented in Storybook — consistent across multiple products.',
    icon: 'layers',
  },
  {
    title: 'Complex Product Flows',
    description:
      'OTP verification, multi-step onboarding, quote comparison and credit calculation journeys built on React Hook Form + Zod.',
    icon: 'workflow',
  },
  {
    title: 'Server State & Data',
    description:
      'Predictable data layers with TanStack Query and Zustand: caching, stale-time strategies, retries, timeouts and standardized error handling.',
    icon: 'database',
  },
  {
    title: 'Performance & SEO',
    description:
      'Core Web Vitals, image and rendering optimization, canonical URLs, localized routes and dynamic sitemaps — up to 98 on Lighthouse.',
    icon: 'gauge',
  },
  {
    title: 'Accessibility',
    description:
      'WCAG 2.1 practices by default: semantic HTML, keyboard navigation, accessible forms and appropriate ARIA.',
    icon: 'accessibility',
  },
  {
    title: 'Pixel-accurate UI',
    description:
      'Faithful Figma-to-code implementation across desktop, tablet and mobile while respecting corporate brand standards.',
    icon: 'pen',
  },
] as const

export type ExpertiseIcon = (typeof expertise)[number]['icon']

export const skillGroups = [
  {
    title: 'Core Frontend',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'State, Forms & Data',
    items: ['Zustand', 'Redux Toolkit', 'TanStack Query', 'React Hook Form', 'Zod', 'REST APIs'],
  },
  {
    title: 'Performance & Quality',
    items: ['Core Web Vitals', 'Lighthouse', 'WCAG 2.1', 'SEO', 'Storybook', 'Jest', 'React Testing Library', 'Playwright'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'Prisma', 'MongoDB', 'Strapi'],
  },
  {
    title: 'Tools & Delivery',
    items: ['Git', 'GitHub', 'Azure DevOps', 'CI/CD', 'Docker', 'Figma', 'Agile'],
  },
] as const

export const marqueeStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'TanStack Query',
  'Zustand',
  'React Hook Form',
  'Zod',
  'Storybook',
  'React Native',
  'Supabase',
  'PostgreSQL',
  'Prisma',
  'Node.js',
  'Playwright',
  'Turborepo',
]

export const education = {
  degree: 'Associate Degree in Computer Programming',
  school: 'Mardin Artuklu University',
  period: '2021 — 2023',
}

export const languages = [
  { name: 'Turkish', level: 'Native' },
  { name: 'English', level: 'Intermediate · B1' },
]
