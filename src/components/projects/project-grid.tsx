'use client'

import { AnimatePresence, m } from 'motion/react'
import { useState } from 'react'
import { categoryLabels, type Project, type ProjectCategory } from '@/data/projects'
import { cn } from '@/lib/utils'
import { ProjectCard } from './project-card'

type Filter = 'all' | ProjectCategory

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('all')

  const filters: { value: Filter; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: projects.length },
    ...(Object.keys(categoryLabels) as ProjectCategory[]).map((value) => ({
      value,
      label: categoryLabels[value],
      count: projects.filter((p) => p.category === value).length,
    })),
  ]

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {filters.map((item) => {
          const active = item.value === filter
          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.value)}
              className={cn(
                'relative inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm transition-colors',
                active ? 'border-transparent text-background' : 'border-border text-muted hover:text-foreground hover:border-border-strong',
              )}
            >
              {active && (
                <m.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative">{item.label}</span>
              <span className={cn('relative font-mono text-[11px]', active ? 'text-background/60' : 'text-subtle')}>
                {item.count}
              </span>
            </button>
          )
        })}
      </div>

      <m.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <m.li
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} priority={index < 3} />
            </m.li>
          ))}
        </AnimatePresence>
      </m.ul>
    </div>
  )
}
