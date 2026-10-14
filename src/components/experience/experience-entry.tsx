import { ArrowUpRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import type { Experience } from '@/data/experience'
import { formatDuration, formatMonth, prettyUrl } from '@/lib/utils'
import { Reveal } from '../ui/reveal'
import { Tag } from '../ui/tag'

export function ExperienceEntry({ job }: { job: Experience }) {
  const period = `${formatMonth(job.start)} — ${formatMonth(job.end)}`
  const duration = formatDuration(job.start, job.end)

  return (
    <Reveal as="li" className="relative grid gap-4 pb-20 pl-10 last:pb-0 md:grid-cols-[220px_1fr] md:gap-16 md:pl-0">
      {/* Period column (desktop) */}
      <div className="hidden pt-1 text-right md:block">
        <p className="font-mono text-sm">{period}</p>
        <p className="mt-1 font-mono text-xs text-subtle">{duration}</p>
      </div>

      <span
        aria-hidden
        className="absolute top-2 left-0 size-[15px] rounded-full border-2 border-background bg-foreground ring-1 ring-border-strong md:left-[calc(220px+24px)]"
      />

      <div className="md:pl-6">
        <p className="mb-3 font-mono text-xs text-subtle md:hidden">
          {period} · {duration}
        </p>
        <div className="flex items-start gap-4">
          <Image src={job.logo} alt={`${job.company} logo`} width={56} height={56} className="size-14 shrink-0 rounded-2xl border border-border object-cover" />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{job.company}</h2>
            <p className="mt-1 text-muted">
              {job.role} <span className="text-subtle">· {job.type}</span>
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-subtle">
          {job.client && <span>Client: <span className="text-muted">{job.client}</span></span>}
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {job.location}
          </span>
        </div>

        <p className="mt-6 text-lg text-pretty">{job.summary}</p>

        <ul className="mt-6 space-y-3">
          {job.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-pretty text-muted">
              <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-border-strong" />
              {highlight}
            </li>
          ))}
        </ul>

        {job.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {job.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                {prettyUrl(link.href)}
                <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
              </a>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {job.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
