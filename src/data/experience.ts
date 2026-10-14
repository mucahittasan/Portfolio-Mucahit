export type Experience = {
  company: string
  /** Client or product context, e.g. who the work was delivered for. */
  client?: string
  role: string
  type: 'Contract' | 'Part-time' | 'Full-time'
  /** ISO month, `YYYY-MM`. */
  start: string
  /** ISO month, `YYYY-MM`, or `null` for a current role. */
  end: string | null
  location: string
  logo: string
  summary: string
  highlights: string[]
  stack: string[]
  links: { label: string; href: string }[]
}

export const experiences: Experience[] = [
  {
    company: 'Doğuş Teknoloji',
    client: 'Volkswagen Doğuş Finans',
    role: 'Frontend Software Engineer',
    type: 'Contract',
    start: '2024-08',
    end: '2026-07',
    location: 'Istanbul, Türkiye',
    logo: '/image/dogus_teknoloji_logo.jpeg',
    summary:
      'Owned and drove frontend development across five Volkswagen Doğuş Finans digital products: VDF Sigorta, VDF Filo, VDF Faktoring, vdf.com.tr and the KHM credit-calculation platform.',
    highlights: [
      'Designed a scalable frontend architecture and reusable component patterns with Next.js, TypeScript, Tailwind CSS and Storybook, shared across multiple corporate products.',
      'Built production-grade customer journeys: OTP verification, personal and vehicle information flows, insurance quote comparison, policy selection and credit calculation.',
      'Designed form and validation architecture with React Hook Form and Zod — conditional fields, multi-step workflows, API validation and onboarding.',
      'Defined state and server-data patterns with Zustand and TanStack Query: caching, stale-time strategies, timeouts, retries and standardized error handling.',
      'Improved performance through image optimization, rendering improvements, request standardization and mobile initial-load work — reaching Lighthouse scores of up to 98.',
      'Implemented SEO-critical requirements: localized routes, redirects, canonical URLs, dynamic sitemaps, semantic HTML and metadata management.',
      'Integrated with REST APIs and .NET microservices, and worked with product, design, QA, backend and infrastructure teams from analysis to release on Azure DevOps.',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Storybook',
      'Zustand',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Azure DevOps',
    ],
    links: [
      { label: 'vdfsigorta.com.tr', href: 'https://www.vdfsigorta.com.tr' },
      { label: 'vdffilo.com.tr', href: 'https://www.vdffilo.com.tr' },
      { label: 'vdffaktoring.com.tr', href: 'https://vdffaktoring.com.tr' },
      { label: 'vdf.com.tr', href: 'https://www.vdf.com.tr' },
    ],
  },
  {
    company: '777 Sense Labs',
    role: 'Frontend Software Engineer',
    type: 'Contract',
    start: '2023-11',
    end: '2024-08',
    location: 'Istanbul, Türkiye',
    logo: '/image/777_sense_labs_logo.jpeg',
    summary:
      'Delivered cross-platform web and mobile applications with Next.js, React Native and TypeScript.',
    highlights: [
      'Translated Figma designs into responsive, reusable and pixel-accurate interfaces across web and mobile.',
      'Designed reusable component patterns and application structures to improve consistency and development speed.',
      'Integrated web and mobile apps with REST APIs backed by Node.js and MongoDB services.',
      'Improved load performance by optimizing rendering, network requests, assets and application state.',
      'Integrated Firebase Crashlytics for mobile error monitoring and production stability.',
    ],
    stack: ['Next.js', 'React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase', 'Figma'],
    links: [
      { label: '777senselabs.com', href: 'https://www.777senselabs.com/' },
      { label: 'brewriders.com', href: 'https://brewriders.com/' },
      { label: 'stake.brewriders.com', href: 'https://stake.brewriders.com/' },
    ],
  },
  {
    company: 'Educational Network, Inc.',
    role: 'Frontend Software Engineer',
    type: 'Part-time',
    start: '2022-06',
    end: '2023-10',
    location: 'Istanbul, Türkiye',
    logo: '/image/educational_networks_inc__logo.jpeg',
    summary: 'Developed responsive educational platforms using React, JavaScript, TypeScript and modern CSS.',
    highlights: [
      'Built reusable UI components and frontend patterns that reduced duplication across application screens.',
      'Implemented WCAG 2.1 practices: semantic HTML, keyboard navigation, accessible forms and ARIA.',
      'Improved performance and SEO through rendering optimizations, semantic structure and optimized assets.',
    ],
    stack: ['React', 'TypeScript', 'JavaScript', 'CSS', 'WCAG 2.1', 'SEO'],
    links: [
      { label: 'wlakeprep.org', href: 'https://www.wlakeprep.org/' },
      { label: 'innovation-prep.org', href: 'https://www.innovation-prep.org/' },
      { label: 'matergardens.org', href: 'https://www.matergardens.org/' },
      { label: 'somersetcentral.org', href: 'https://www.somersetcentral.org/' },
      { label: 'lakecharlescharter.org', href: 'https://www.lakecharlescharter.org/' },
    ],
  },
  {
    company: 'Kedi Games',
    role: 'Frontend Software Engineer',
    type: 'Contract',
    start: '2022-11',
    end: '2023-05',
    location: 'Istanbul, Türkiye',
    logo: '/image/kedi_games_logo.jpeg',
    summary: 'Developed interactive gaming interfaces and web experiences with React, Three.js and modern JavaScript.',
    highlights: [
      'Created interactive 3D elements and animations with Three.js and Spline to improve engagement.',
      'Built a responsive administration dashboard for managing application and game content.',
      'Implemented real-time features over WebSocket connections.',
    ],
    stack: ['React', 'Three.js', 'Spline', 'WebSocket', 'SCSS', 'Figma'],
    links: [],
  },
]
