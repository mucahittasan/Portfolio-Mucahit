import { skillGroups } from '@/data/site'
import { Reveal } from '../ui/reveal'
import { SectionHeading } from '../ui/section-heading'
import { Serif } from '../ui/serif'

export function Skills() {
  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading
        index="04"
        label="Toolkit"
        title={
          <>
            The stack I <Serif gradient>reach for</Serif>.
          </>
        }
      />
      <div className="divide-y divide-border border-y border-border">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05} className="grid gap-4 py-6 md:grid-cols-[240px_1fr] md:py-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle md:pt-2">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-border-strong hover:bg-surface-strong"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
