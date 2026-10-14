import type { ReactNode } from 'react'
import { Reveal } from './reveal'

export function PageHeader({ label, title, description, children }: { label: string; title: ReactNode; description?: ReactNode; children?: ReactNode }) {
  return (
    <header className="container-page pt-36 pb-16 md:pt-44 md:pb-20">
      <Reveal>
        <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
          <span className="h-px w-8 bg-border-strong" aria-hidden />
          {label}
        </p>
        <h1 className="max-w-4xl text-5xl leading-[0.95] font-semibold tracking-[-0.045em] text-balance sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {description && <p className="mt-8 max-w-2xl text-base text-pretty text-muted md:text-lg">{description}</p>}
        {children}
      </Reveal>
    </header>
  )
}
