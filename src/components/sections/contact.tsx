import { ArrowUpRight } from 'lucide-react'
import { site } from '@/data/site'
import { ButtonLink } from '../ui/button'
import { GithubIcon, LinkedinIcon } from '../ui/icons'
import { Reveal } from '../ui/reveal'
import { Serif } from '../ui/serif'
import { CopyEmail } from './copy-email'

export function Contact() {
  return (
    <section id="contact" className="container-page scroll-mt-24 pt-12">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-6 py-16 text-center sm:px-12 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/2 left-1/2 h-full w-3/4 -translate-x-1/2 rounded-full opacity-60 blur-[100px]"
          style={{ background: 'linear-gradient(90deg, var(--accent-from), var(--accent-to))' }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-y" />
        <div className="relative">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-subtle">Get in touch</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-7xl">
            Let&apos;s build something <Serif gradient>great</Serif> together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-muted md:text-lg">
            Have a product to build, a frontend to scale or a role to fill? My inbox is always open.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight className="size-4" />
            </ButtonLink>
            <CopyEmail email={site.email} />
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted">
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <GithubIcon className="size-4" /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
