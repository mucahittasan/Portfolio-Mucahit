'use client'

import { site } from '@/data/site'
import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react'
import { m, type Variants } from 'motion/react'
import { ButtonLink } from '../ui/button'
import { GithubIcon, LinkedinIcon } from '../ui/icons'

const ease = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}

const word: Variants = {
  hidden: { opacity: 0, y: '60%', filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: '0%',
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease },
  },
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})

type Word = { text: string; accent?: boolean }

const headline: Word[][] = [
  [{ text: 'Interfaces' }, { text: 'that' }, { text: 'are' }],
  [{ text: 'fast,', accent: true }, { text: 'accessible' }],
  [{ text: '&' }, { text: 'built' }, { text: 'to' }, { text: 'scale.' }],
]

export function Hero() {
  return (
    <section className="container-page relative flex min-h-[calc(100svh-4rem)] flex-col justify-center pt-28 pb-16 md:pt-32">
      <m.div
        {...fadeUp(0)}
        className="mb-8 flex flex-wrap items-center gap-3"
      >
        {site.available && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
          <MapPin className="size-3.5" />
          {site.location}
        </span>
      </m.div>

      <m.p
        {...fadeUp(0.05)}
        className="mb-5 font-mono text-sm text-muted"
      >
        {site.name} — <span className="text-foreground">{site.role}</span>
      </m.p>

      <m.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="text-[clamp(2.75rem,7.6vw,6.25rem)] leading-[0.95] font-semibold tracking-[-0.045em]"
      >
        {/* Lines are fixed on larger screens and flow naturally on phones. */}
        {headline.map((line, lineIndex) => (
          <span
            key={lineIndex}
            className="sm:block"
          >
            {line.map((w, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden pb-[0.08em] align-bottom"
              >
                <m.span
                  variants={word}
                  className={
                    w.accent
                      ? 'text-gradient inline-block pr-[0.08em] font-serif font-normal italic tracking-normal'
                      : 'inline-block'
                  }
                >
                  {w.text}
                </m.span>
                {i < line.length - 1 && ' '}
              </span>
            ))}{' '}
          </span>
        ))}
      </m.h1>

      <m.p
        {...fadeUp(0.75)}
        className="mt-8 max-w-2xl text-base text-pretty text-muted md:text-lg"
      >
        7 years writing software, 4+ in product teams. Most recently I owned the
        frontend architecture of{' '}
        <span className="text-foreground">
          five production platforms for Volkswagen Doğuş Finans
        </span>{' '}
        — insurance, fleet, factoring, corporate and credit calculation.
      </m.p>

      <m.div
        {...fadeUp(0.9)}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <ButtonLink href="/projects">
          View selected work
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </ButtonLink>
        <ButtonLink
          href={site.cv}
          variant="secondary"
          external
        >
          <Download className="size-4" />
          Download CV
        </ButtonLink>
        <div className="ml-1 flex items-center gap-1">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </a>
        </div>
      </m.div>

      <m.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-subtle transition-colors hover:text-foreground md:flex"
      >
        Scroll
        <m.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-3.5" />
        </m.span>
      </m.a>
    </section>
  )
}
