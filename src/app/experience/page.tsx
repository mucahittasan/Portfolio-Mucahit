import { Download, GraduationCap, Languages } from 'lucide-react'
import type { Metadata } from 'next'
import { ExperienceEntry } from '@/components/experience/experience-entry'
import { TimelineProgress } from '@/components/experience/timeline-progress'
import { ButtonLink } from '@/components/ui/button'
import { PageHeader } from '@/components/ui/page-header'
import { Reveal } from '@/components/ui/reveal'
import { Serif } from '@/components/ui/serif'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { experiences } from '@/data/experience'
import { education, languages, site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience of Mucahit Tasan — Doğuş Teknoloji, 777 Sense Labs, Educational Network and Kedi Games.',
  alternates: { canonical: '/experience' },
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="Experience"
        title={
          <>
            Four teams, <Serif gradient>one</Serif> craft.
          </>
        }
        description="From interactive 3D game interfaces to the frontend architecture of five fintech and insurtech platforms — here is where I've worked and what I delivered."
      >
        <div className="mt-10">
          <ButtonLink href={site.cv} variant="secondary" external>
            <Download className="size-4" />
            Download CV
          </ButtonLink>
        </div>
      </PageHeader>

      <section className="container-page" aria-label="Work history">
        <TimelineProgress>
          <ol>
            {experiences.map((job) => (
              <ExperienceEntry key={job.company} job={job} />
            ))}
          </ol>
        </TimelineProgress>
      </section>

      <section className="container-page mt-32 grid gap-4 md:grid-cols-2" aria-label="Education and languages">
        <Reveal>
          <SpotlightCard className="h-full p-7 md:p-8">
            <GraduationCap className="mb-8 size-6 text-muted" strokeWidth={1.5} />
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-subtle">Education</p>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{education.degree}</h2>
            <p className="mt-2 text-muted">
              {education.school} · <span className="font-mono text-sm">{education.period}</span>
            </p>
          </SpotlightCard>
        </Reveal>
        <Reveal delay={0.08}>
          <SpotlightCard className="h-full p-7 md:p-8">
            <Languages className="mb-8 size-6 text-muted" strokeWidth={1.5} />
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-subtle">Languages</p>
            <ul className="space-y-2">
              {languages.map((language) => (
                <li key={language.name} className="flex items-baseline justify-between gap-4 border-b border-border pb-2 last:border-0">
                  <span className="text-xl font-semibold tracking-tight md:text-2xl">{language.name}</span>
                  <span className="text-sm text-muted">{language.level}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </section>
    </>
  )
}
