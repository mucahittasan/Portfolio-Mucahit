export type ProjectCategory = 'product' | 'client' | 'personal'

export type ProjectLink = {
  kind: 'live' | 'source'
  href: string
}

export type Project = {
  slug: string
  title: string
  /** One-line pitch shown on cards. */
  tagline: string
  description: string
  category: ProjectCategory
  period: string
  role: string
  context?: string
  /**
   * Cover screenshot in `/public` (e.g. `/image/projects/craftolio.png`) or a remote URL.
   * When omitted, a generated cover is rendered instead.
   */
  image?: string
  /** Hue (0–360) for the generated cover and accents. */
  hue: number
  highlights: string[]
  stack: string[]
  links: ProjectLink[]
  featured?: boolean
}

export const categoryLabels: Record<ProjectCategory, string> = {
  product: 'Product',
  client: 'Client work',
  personal: 'Personal',
}

export const projects: Project[] = [
  {
    slug: 'releaseproof',
    title: 'ReleaseProof',
    tagline: 'Website release assurance for web agencies.',
    description:
      'A multi-tenant SaaS platform that lets web agencies compare live and staging environments and catch release risks — SEO regressions, broken links, redirect changes, missing tracking — before they ship.',
    category: 'product',
    period: 'Jul 2026 — Present',
    role: 'Founder · Full-stack',
    image: '/image/projects/releaseproof.webp',
    hue: 152,
    highlights: [
      'Architected a multi-tenant SaaS with authenticated workspace, project, environment and scan workflows on Supabase Auth, PostgreSQL, Row Level Security and secure RPC contracts.',
      'Queue-based scan execution with PGMQ and a dedicated Node.js worker.',
      'Built an SSRF-protected, resource-bounded evidence collector with explicit route, concurrency, response-size, aggregate-byte, redirect and duration limits.',
      'Developed a modular, deterministic scanning engine with 16 checks: SEO metadata and content changes, redirects and status codes, canonical and noindex issues, broken internal links, GTM/GA tracking and expected scripts.',
      'Structured as a pnpm + Turborepo monorepo: Next.js app, Node.js worker and reusable scanner, checks, collector, domain and database-contract packages.',
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'PGMQ', 'Turborepo', 'pnpm', 'Vitest', 'Zod'],
    links: [{ kind: 'source', href: 'https://github.com/mucahittasan/RelaseProof' }],
    featured: true,
  },
  {
    slug: 'craftolio',
    title: 'Craftolio',
    tagline: 'Portfolio and CV builder for developers.',
    description:
      'A full-stack SaaS platform that enables developers to create, customize and publish professional portfolio pages — from profile and projects to experience, skills and certifications.',
    category: 'product',
    period: 'Oct 2025 — Present',
    role: 'Founder · Full-stack',
    image: '/image/projects/craftolio.webp',
    hue: 268,
    highlights: [
      'Authenticated dashboard with multi-step forms for profiles, social links, projects, education, work experience, skills and certifications.',
      'Reusable form architecture with React Hook Form and Zod: validation, conditional fields and consistent error handling.',
      'Public portfolio pages with dynamic routes, server-rendered content and customizable profile information.',
      'Architecture built on Next.js App Router, Supabase, PostgreSQL, Prisma, TanStack Query and Zustand.',
      'Product-oriented approach focused on maintainability, usability, performance and future SaaS monetization.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Prisma', 'TanStack Query', 'Zustand', 'React Hook Form', 'Zod', 'Tailwind CSS'],
    links: [
      { kind: 'live', href: 'https://craftolio.vercel.app' },
      { kind: 'source', href: 'https://github.com/mucahittasan/craftolio' },
    ],
    featured: true,
  },
  {
    slug: 'vdf-sigorta',
    title: 'VDF Sigorta',
    tagline: 'Digital insurance platform for Volkswagen Doğuş Finans.',
    description:
      "Volkswagen Doğuş Finans' online insurance platform, where customers get quotes, compare offers and choose a policy end-to-end. I owned the frontend architecture and delivered it to production.",
    category: 'client',
    period: '2024 — 2026',
    role: 'Frontend owner',
    context: 'Doğuş Teknoloji · Volkswagen Doğuş Finans',
    image: '/image/projects/vdf-sigorta.webp',
    hue: 210,
    highlights: [
      'Production customer journeys: OTP verification, personal and vehicle information, insurance quote comparison and policy selection.',
      'Multi-step form architecture with React Hook Form and Zod — conditional fields, API validation and error states.',
      'Server-state patterns with TanStack Query and Zustand: caching, stale-time strategies, timeouts and retries.',
      'Reusable, Storybook-documented component system shared with the other VDF products.',
      'Headless CMS integration with Strapi for content-managed pages.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'Strapi'],
    links: [{ kind: 'live', href: 'https://www.vdfsigorta.com.tr' }],
    featured: true,
  },
  {
    slug: 'vdf-corporate',
    title: 'vdf.com.tr',
    tagline: 'Corporate website of Volkswagen Doğuş Finans.',
    description:
      'The corporate services website of Volkswagen Doğuş Finans, built with SEO-critical requirements and corporate brand standards at its core.',
    category: 'client',
    period: '2024 — 2026',
    role: 'Frontend owner',
    context: 'Doğuş Teknoloji · Volkswagen Doğuş Finans',
    image: '/image/projects/vdf-corporate.webp',
    hue: 222,
    highlights: [
      'Localized routes, redirects, canonical URLs and dynamic sitemap generation.',
      'Semantic HTML and metadata management for search visibility.',
      'Pixel-accurate, responsive implementation of Figma designs across desktop, tablet and mobile.',
      'Image optimization and rendering improvements for fast initial loads.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'TanStack Query'],
    links: [{ kind: 'live', href: 'https://www.vdf.com.tr' }],
    featured: true,
  },
  {
    slug: 'vdf-filo',
    title: 'VDF Filo',
    tagline: 'Fleet management platform for Volkswagen Doğuş Finans.',
    description:
      "Frontend for Volkswagen Doğuş Finans' fleet management product, built on the shared VDF architecture and component system.",
    category: 'client',
    period: '2024 — 2026',
    role: 'Frontend owner',
    context: 'Doğuş Teknoloji · Volkswagen Doğuş Finans',
    image: '/image/projects/vdf-filo.webp',
    hue: 192,
    highlights: [
      'Built on the shared, Storybook-documented VDF component system for consistency across products.',
      'Responsive, accessible interfaces implemented from Figma within corporate brand standards.',
      'Integrated with REST APIs and .NET microservices with predictable data contracts.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'TanStack Query', 'Zustand'],
    links: [{ kind: 'live', href: 'https://www.vdffilo.com.tr' }],
  },
  {
    slug: 'vdf-faktoring',
    title: 'VDF Faktoring',
    tagline: 'Factoring services platform for Volkswagen Doğuş Finans.',
    description:
      "Frontend for Volkswagen Doğuş Finans' factoring product, delivered on the shared VDF architecture.",
    category: 'client',
    period: '2024 — 2026',
    role: 'Frontend owner',
    context: 'Doğuş Teknoloji · Volkswagen Doğuş Finans',
    image: '/image/projects/vdf-faktoring.webp',
    hue: 176,
    highlights: [
      'Reusable component patterns shared across the VDF product family.',
      'Form and validation architecture with React Hook Form and Zod.',
      'SEO and performance work: metadata, semantic HTML and optimized assets.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zod', 'TanStack Query'],
    links: [{ kind: 'live', href: 'https://vdffaktoring.com.tr' }],
  },
  {
    slug: 'khm-credit-calculation',
    title: 'KHM Credit Calculation',
    tagline: 'Credit-calculation experience for vehicle financing.',
    description:
      'A credit-calculation platform for Volkswagen Doğuş Finans, guiding customers through financing scenarios with multi-step, validated flows.',
    category: 'client',
    period: '2024 — 2026',
    role: 'Frontend owner',
    context: 'Doğuş Teknoloji · Volkswagen Doğuş Finans',
    hue: 32,
    highlights: [
      'Multi-step credit-calculation flows with conditional fields and API validation.',
      'Standardized loading, error and retry states with TanStack Query.',
      'Accessible, responsive UI aligned with the shared VDF design system.',
    ],
    stack: ['Next.js', 'TypeScript', 'React Hook Form', 'Zod', 'TanStack Query', 'Zustand'],
    links: [],
  },
  {
    slug: 'rick-and-morty',
    title: 'Rick and Morty Explorer',
    tagline: 'Interactive character explorer with 3D card animations.',
    description:
      'An interactive character explorer built with Next.js 15 and TypeScript, featuring 3D card animations, URL-driven filters and server-side rendering.',
    category: 'personal',
    period: 'Jan 2025',
    role: 'Solo project',
    image: '/image/rick_and_morty_image.png',
    hue: 96,
    highlights: [
      '3D card animations and transitions with Framer Motion.',
      'Advanced filtering with URL-based state via nuqs.',
      'Data fetching with React Query and client state with Zustand.',
      '90+ Lighthouse scores through SSR and performance optimizations.',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Query', 'Zustand', 'shadcn/ui', 'nuqs'],
    links: [
      { kind: 'live', href: 'https://rick-and-morty-wheat-seven.vercel.app/' },
      { kind: 'source', href: 'https://github.com/mucahittasan/rick-and-morty' },
    ],
  },
  {
    slug: 'threads-app',
    title: 'Threads Clone',
    tagline: 'Full-stack social platform clone.',
    description:
      'A modern social platform clone with authentication, threads, communities and file uploads, rendered on the server with Next.js.',
    category: 'personal',
    period: 'Jan 2024',
    role: 'Solo project',
    image: 'https://github.com/mucahittasan/Threads-App/assets/88967412/ed0e010d-a0eb-4d51-8fc8-1cb8e0aa0311',
    hue: 0,
    highlights: [
      'Authentication with Clerk and file uploads with UploadThing.',
      'Server-side rendering with Next.js and MongoDB persistence.',
      'Responsive UI built with Tailwind CSS.',
    ],
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Clerk', 'UploadThing'],
    links: [
      { kind: 'live', href: 'https://threads-app-navy-seven.vercel.app/' },
      { kind: 'source', href: 'https://github.com/mucahittasan/Threads-App' },
    ],
  },
  {
    slug: 'airbnb-clone',
    title: 'Airbnb Clone',
    tagline: 'Rental marketplace with auth, maps and reservations.',
    description:
      'A rental marketplace clone with OAuth sign-in, listings, map and calendar integrations and reservations, built with Next.js and Prisma.',
    category: 'personal',
    period: 'May 2023',
    role: 'Solo project',
    image: 'https://user-images.githubusercontent.com/88967412/235976433-01a788b0-b7dd-44a0-a10b-6261b825dccc.png',
    hue: 350,
    highlights: [
      'GitHub and Google sign-in with NextAuth.',
      'Prisma data layer for listings, favorites and reservations.',
      'Map and calendar integrations with modal-driven flows.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'NextAuth'],
    links: [
      { kind: 'live', href: 'https://rent-clone-nextjs.vercel.app/' },
      { kind: 'source', href: 'https://github.com/mucahittasan/Airbnb-Clone-NextJs' },
    ],
  },
  {
    slug: 'e-commerce',
    title: 'E-Commerce',
    tagline: 'Storefront with cart, favorites and search.',
    description:
      'A full-featured e-commerce storefront with product management, cart operations, favorites and search, built with React and Redux Toolkit.',
    category: 'personal',
    period: 'Jun 2023',
    role: 'Solo project',
    image: 'https://user-images.githubusercontent.com/88967412/235976385-3b4b5f76-b537-48e1-a1d3-406241f0a912.png',
    hue: 40,
    highlights: [
      'Global state with Redux Toolkit for cart and favorites.',
      'Typed with TypeScript for reliability.',
      'Product search and filtering.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
    links: [
      { kind: 'live', href: 'https://e-commerce-app-alpha-brown.vercel.app/' },
      { kind: 'source', href: 'https://github.com/mucahittasan/E-Commerce-MERN' },
    ],
  },
]

export const getProjects = () => [...projects]
export const getFeaturedProjects = () => projects.filter((p) => p.featured)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

/** Previous/next project in list order, wrapping around. */
export const getAdjacentProjects = (slug: string) => {
  const index = projects.findIndex((p) => p.slug === slug)
  const count = projects.length
  return {
    prev: projects[(index - 1 + count) % count],
    next: projects[(index + 1) % count],
  }
}
