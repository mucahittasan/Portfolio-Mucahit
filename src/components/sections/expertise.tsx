import { Accessibility, Database, Gauge, Layers, PenTool, Workflow, type LucideIcon } from 'lucide-react'
import { expertise, type ExpertiseIcon } from '@/data/site'
import { Reveal } from '../ui/reveal'
import { SectionHeading } from '../ui/section-heading'
import { Serif } from '../ui/serif'
import { SpotlightCard } from '../ui/spotlight-card'

const icons: Record<ExpertiseIcon, LucideIcon> = {
  layers: Layers,
  workflow: Workflow,
  database: Database,
  gauge: Gauge,
  accessibility: Accessibility,
  pen: PenTool,
}

export function Expertise() {
  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading
        index="02"
        label="What I do"
        title={
          <>
            Frontend with a <Serif gradient>product</Serif> mindset.
          </>
        }
        description="I care about the whole delivery lifecycle — from requirement analysis and architectural decisions to production release and optimization."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item, index) => {
          const Icon = icons[item.icon]
          return (
            <Reveal key={item.title} delay={(index % 3) * 0.08}>
              <SpotlightCard className="h-full p-6 md:p-7">
                <div className="mb-6 grid size-11 place-items-center rounded-2xl border border-border bg-surface-strong">
                  <Icon className="size-5 text-foreground" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm text-pretty text-muted">{item.description}</p>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
