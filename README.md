# Mucahit Tasan — Portfolio

Personal portfolio of Mucahit Tasan, Frontend Software Engineer. Live at [mucahit-tasan.vercel.app](https://mucahit-tasan.vercel.app).

## Stack

- **Next.js 16** (App Router, React Server Components, fully static output)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theme tokens in `src/app/globals.css`)
- **Motion** (lazy-loaded features, respects `prefers-reduced-motion`)
- **next-themes** for dark / light mode, **lucide-react** for icons

Built-in SEO: per-page metadata, canonical URLs, `sitemap.xml`, `robots.txt`, a generated Open Graph image and Person JSON-LD.

## Structure

```
src/
├── app/                    # Routes: /, /projects, /projects/[slug], /experience, 404, SEO files
├── components/
│   ├── layout/             # Navbar, footer, theme toggle, background
│   ├── sections/           # Home page sections (hero, work, expertise, contact…)
│   ├── projects/           # Project card, cover, grid with filters, links
│   ├── experience/         # Timeline entry + scroll progress rail
│   └── ui/                 # Primitives: Reveal, SpotlightCard, ButtonLink, Tag…
├── data/                   # All content lives here
│   ├── site.ts             # Name, links, stats, expertise, skills, education
│   ├── experience.ts       # Work history
│   └── projects.ts         # Projects
└── lib/                    # Helpers (cn, date formatting)
```

## Editing content

All copy comes from `src/data/*`. No component changes are needed to update content.

**Adding a project screenshot:** put the image in `public/image/projects/` (16:10 works best, e.g. 1600×1000) and set `image` on the project in `src/data/projects.ts`:

```ts
image: '/image/projects/craftolio.png',
```

Projects without an `image` render a generated cover tinted by their `hue`.

**Resume:** replace `public/mucahit-tasan-cv.pdf`.

**Availability badge:** toggle `available` in `src/data/site.ts`.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```
