import { ArrowUpRight } from 'lucide-react'
import type { ProjectLink } from '@/data/projects'
import { cn } from '@/lib/utils'
import { GithubIcon } from '../ui/icons'

const labels = { live: 'Live site', source: 'Source' } as const

export function ProjectLinks({ links, className }: { links: ProjectLink[]; className?: string }) {
  if (links.length === 0) return null
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all active:scale-[0.97]',
            link.kind === 'live'
              ? 'bg-foreground text-background hover:opacity-85'
              : 'border border-border-strong bg-surface hover:bg-surface-strong',
          )}
        >
          {link.kind === 'source' && <GithubIcon className="size-4" />}
          {labels[link.kind]}
          {link.kind === 'live' && <ArrowUpRight className="size-4" />}
        </a>
      ))}
    </div>
  )
}
