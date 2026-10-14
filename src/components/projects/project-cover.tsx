import Image from 'next/image'
import type { Project } from '@/data/projects'
import { categoryLabels } from '@/data/projects'
import { cn } from '@/lib/utils'

type ProjectCoverProps = {
  project: Project
  className?: string
  priority?: boolean
  sizes?: string
}

/**
 * Project screenshot, or — until one is added — a generated cover tinted with the project's hue
 * that mimics a browser window so the grid still looks intentional.
 */
export function ProjectCover({ project, className, priority, sizes = '(min-width: 1024px) 50vw, 100vw' }: ProjectCoverProps) {
  const hue = project.hue

  return (
    <div
      className={cn('relative aspect-[16/10] overflow-hidden bg-surface-strong', className)}
      style={{ ['--hue' as string]: hue }}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            background:
              'radial-gradient(120% 90% at 0% 0%, hsl(var(--hue) 85% 60% / 0.35), transparent 55%), radial-gradient(90% 80% at 100% 100%, hsl(calc(var(--hue) + 60) 85% 60% / 0.28), transparent 60%)',
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-70" />
          <div className="absolute inset-x-[8%] top-[14%] bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-border-strong bg-background/70 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="ml-3 h-2 w-1/3 rounded-full bg-foreground/10" />
            </div>
            <div className="space-y-3 p-[6%]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: `hsl(${hue} 80% 60%)` }}>
                {categoryLabels[project.category]}
              </p>
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</p>
              <div className="space-y-2 pt-1">
                <span className="block h-2 w-4/5 rounded-full bg-foreground/10" />
                <span className="block h-2 w-3/5 rounded-full bg-foreground/10" />
              </div>
              <div className="grid grid-cols-3 gap-2 pt-3">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-12 rounded-lg border border-border"
                    style={{ background: `hsl(${hue + i * 25} 80% 60% / ${0.18 - i * 0.04})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
