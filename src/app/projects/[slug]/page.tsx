import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProjectCover } from '@/components/projects/project-cover'
import { ProjectLinks } from '@/components/projects/project-links'
import { Reveal } from '@/components/ui/reveal'
import { Tag } from '@/components/ui/tag'
import { categoryLabels, getAdjacentProjects, getProject, getProjects } from '@/data/projects'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.description },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)

  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Type', value: categoryLabels[project.category] },
    { label: 'Timeline', value: project.period },
    ...(project.context ? [{ label: 'Context', value: project.context }] : []),
  ]

  return (
    <article>
      <header className="container-page pt-32 md:pt-40">
        <Reveal>
          <Link
            href="/projects"
            className="group mb-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            {categoryLabels[project.category]} · {project.period}
          </p>
          <h1 className="text-5xl leading-[0.95] font-semibold tracking-[-0.045em] sm:text-6xl md:text-8xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-pretty text-muted md:text-xl">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label} className="bg-background p-5">
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </div>
          ))}
        </Reveal>
      </header>

      <Reveal delay={0.15} className="container-page mt-10">
        <div className="group overflow-hidden rounded-3xl border border-border p-2">
          <ProjectCover project={project} priority sizes="(min-width: 1152px) 1152px, 100vw" className="rounded-[18px]" />
        </div>
      </Reveal>

      <div className="container-page mt-20 grid gap-16 lg:grid-cols-[1fr_320px]">
        <div>
          <Reveal>
            <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-subtle">Overview</h2>
            <p className="text-xl leading-relaxed text-pretty md:text-2xl">{project.description}</p>
          </Reveal>

          <Reveal className="mt-16">
            <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-subtle">What I did</h2>
            <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
              {project.highlights.map((highlight, index) => (
                <li key={highlight} className="flex gap-5 bg-background p-5 md:p-6">
                  <span className="text-gradient font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-pretty text-muted">{highlight}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-subtle">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech} className="px-3 py-1.5 text-xs">
                  {tech}
                </Tag>
              ))}
            </div>
          </Reveal>
          {project.links.length > 0 && (
            <Reveal>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-subtle">Links</h2>
              <ProjectLinks links={project.links} />
            </Reveal>
          )}
        </aside>
      </div>

      <nav aria-label="More projects" className="container-page mt-32 grid gap-4 sm:grid-cols-2">
        {[
          { project: prev, label: 'Previous', align: 'items-start' },
          { project: next, label: 'Next', align: 'sm:items-end sm:text-right' },
        ].map(({ project: item, label, align }) => (
          <Link
            key={label}
            href={`/projects/${item.slug}`}
            className={`group flex flex-col gap-2 rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-strong md:p-8 ${align}`}
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              {label === 'Previous' && <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />}
              {label}
              {label === 'Next' && <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />}
            </span>
            <span className="text-2xl font-semibold tracking-tight md:text-3xl">{item.title}</span>
            <span className="text-sm text-muted">{item.tagline}</span>
          </Link>
        ))}
      </nav>
    </article>
  )
}
