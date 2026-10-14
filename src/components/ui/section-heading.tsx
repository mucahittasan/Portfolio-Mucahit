import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type SectionHeadingProps = {
  index?: string
  label: string
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  className?: string
}

export function SectionHeading({ index, label, title, description, action, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-2xl">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
          {index && <span className="text-gradient">{index}</span>}
          <span className="h-px w-8 bg-border-strong" aria-hidden />
          {label}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">{title}</h2>
        {description && <p className="mt-4 text-base text-pretty text-muted md:text-lg">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  )
}
