import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { experiences } from '@/data/experience'
import { formatMonth } from '@/lib/utils'
import { ButtonLink } from '../ui/button'
import { Reveal } from '../ui/reveal'
import { SectionHeading } from '../ui/section-heading'
import { Serif } from '../ui/serif'

export function ExperiencePreview() {
  return (
    <section className="container-page py-12">
      <SectionHeading
        index="03"
        label="Experience"
        title={
          <>
            Where I&apos;ve <Serif gradient>shipped</Serif> so far.
          </>
        }
        action={
          <ButtonLink href="/experience" variant="secondary">
            Full experience
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        }
      />
      <ol className="border-t border-border">
        {experiences.map((job, index) => (
          <Reveal
            as="li"
            key={job.company}
            delay={index * 0.06}
            className="group relative grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-1 border-b border-border py-6 md:grid-cols-[auto_1.2fr_1fr_auto] md:py-8"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-surface transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <Image
              src={job.logo}
              alt=""
              width={48}
              height={48}
              className="relative row-span-2 size-12 rounded-xl border border-border object-cover md:row-span-1"
            />
            <div className="relative">
              <p className="text-lg font-semibold tracking-tight md:text-xl">{job.company}</p>
              {job.client && <p className="text-sm text-muted">for {job.client}</p>}
            </div>
            <p className="relative text-sm text-muted md:text-base">
              {job.role} <span className="text-subtle">· {job.type}</span>
            </p>
            <p className="relative col-start-2 font-mono text-xs text-subtle md:col-start-auto md:text-right">
              {formatMonth(job.start)} — {formatMonth(job.end)}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
