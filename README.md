# Mucahit Tasan — Portfolio

Personal portfolio of **Mucahit Tasan**, Frontend Software Engineer focused on frontend architecture, product engineering and fintech / insurtech platforms.

**Live:** [mucahit-tasan.vercel.app](https://mucahit-tasan.vercel.app)

## Pages

| Route              | Content                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| `/`                | Hero, stats, selected work, expertise, experience overview, toolkit and contact                   |
| `/projects`        | All projects with Product / Client work / Personal filters                                       |
| `/projects/[slug]` | Project detail: overview, what I did, stack, links and previous / next navigation                |
| `/experience`      | Work history timeline with a scroll progress rail, education and languages                       |

## Featured projects

- **ReleaseProof** — Multi-tenant SaaS that compares live and staging environments and catches release risks before deployment.
- **Craftolio** — Full-stack SaaS that lets developers build and publish portfolio pages.
- **Volkswagen Doğuş Finans platforms** — VDF Sigorta, VDF Filo, VDF Faktoring, vdf.com.tr and the KHM credit-calculation platform, built at Doğuş Teknoloji.

## Features

- Dark and light themes with no flash on load
- Scroll-triggered reveals, word-by-word hero animation, animated counters, spotlight cards and a stack marquee
- Animations respect `prefers-reduced-motion`
- Fully static output: every page, including project details, is prerendered at build time
- Animation features are lazy-loaded to keep the initial bundle small
- SEO: per-page metadata, canonical URLs, `sitemap.xml`, `robots.txt`, a generated Open Graph image and Person JSON-LD
- Accessibility: semantic landmarks, skip link, keyboard-friendly navigation and visible focus states
- Responsive from 375px phones to wide desktops

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with CSS-first theme tokens
- [Motion](https://motion.dev) for animations
- [next-themes](https://github.com/pacocoursey/next-themes) and [lucide-react](https://lucide.dev)
- Deployed on [Vercel](https://vercel.com)

## Project structure

```
src/
├── app/                    # Routes, layout, 404 and SEO files (sitemap, robots, OG image)
├── components/
│   ├── layout/             # Navbar, footer, theme toggle, background
│   ├── sections/           # Home page sections
│   ├── projects/           # Project card, cover, filterable grid, links
│   ├── experience/         # Timeline entry and scroll progress rail
│   └── ui/                 # Shared primitives: Reveal, SpotlightCard, ButtonLink, Tag…
├── data/                   # All site content
│   ├── site.ts             # Profile, links, stats, expertise, skills, education
│   ├── experience.ts       # Work history
│   └── projects.ts         # Projects
└── lib/                    # Helpers (class names, date formatting)
```

## Updating content

All content lives in `src/data/`. You can update it without touching any components.

- **New project:** add an entry to `src/data/projects.ts`. Set `featured: true` to show it on the home page.
- **Project screenshot:** add a 16:10 image (e.g. 1600×1000 `.webp`) to `public/image/projects/` and set the `image` field:

  ```ts
  image: '/image/projects/my-project.webp',
  ```

  A project without an `image` gets a generated cover tinted by its `hue`.

- **New role:** add an entry to `src/data/experience.ts`. Durations are calculated automatically from `start` and `end`.
- **Resume:** replace `public/mucahit-tasan-cv.pdf`.
- **"Open to new opportunities" badge:** set `available` in `src/data/site.ts`.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script              | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start the development server |
| `npm run build`     | Create a production build    |
| `npm run start`     | Serve the production build   |
| `npm run lint`      | Run ESLint                   |
| `npm run typecheck` | Run the TypeScript compiler  |

## Contact

- Email: [mucahittasan0@gmail.com](mailto:mucahittasan0@gmail.com)
- LinkedIn: [in/mucahittasan](https://linkedin.com/in/mucahittasan)
- GitHub: [@mucahittasan](https://github.com/mucahittasan)
