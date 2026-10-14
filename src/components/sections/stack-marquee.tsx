import { marqueeStack } from '@/data/site'
import { Marquee } from '../ui/marquee'

export function StackMarquee() {
  return (
    <section aria-label="Technologies I work with" className="border-y border-border bg-surface/50 py-6">
      <Marquee duration={45}>
        {marqueeStack.map((tech) => (
          <span key={tech} className="flex items-center gap-12 text-lg font-medium whitespace-nowrap text-subtle">
            {tech}
            <span className="size-1.5 rounded-full bg-border-strong" aria-hidden />
          </span>
        ))}
      </Marquee>
    </section>
  )
}
