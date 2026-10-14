import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { categoryLabels, type Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import { SpotlightCard } from '../ui/spotlight-card'
import { Tag } from '../ui/tag'
import { ProjectCover } from './project-cover'

type ProjectCardProps = {
  project: Project
  className?: string
  /** Large cards get a taller cover and more stack tags. */
  size?: 'default' | 'large'
  priority?: boolean
}

export function ProjectCard({ project, className, size = 'default', priority }: ProjectCardProps) {
  const tags = project.stack.slice(0, size === 'large' ? 5 : 3)

  return (
    <SpotlightCard className={cn('h-full', className)}>
      <Link href={`/projects/${project.slug}`} className="group flex h-full flex-col p-2">
        <ProjectCover
          project={project}
          priority={priority}
          className="rounded-[18px] border border-border"
          sizes={size === 'large' ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
        />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-5 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                {categoryLabels[project.category]} · {project.period}
              </p>
              <h3 className={cn('font-semibold tracking-tight', size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl')}>
                {project.title}
              </h3>
            </div>
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted transition-all duration-300 group-hover:rotate-45 group-hover:border-border-strong group-hover:bg-foreground group-hover:text-background">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
          <p className="text-sm text-pretty text-muted">{project.tagline}</p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {tags.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
            {project.stack.length > tags.length && <Tag>+{project.stack.length - tags.length}</Tag>}
          </div>
        </div>
      </Link>
    </SpotlightCard>
  )
}
