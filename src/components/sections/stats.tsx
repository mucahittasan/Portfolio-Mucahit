import { stats } from '@/data/site'
import { Counter } from '../ui/counter'
import { Reveal } from '../ui/reveal'

export function Stats() {
  return (
    <section className="container-page py-24 md:py-32">
      <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-border md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.08}
            className="flex flex-col-reverse gap-2 border-border p-6 not-last:border-r max-md:nth-[2]:border-r-0 max-md:nth-[-n+2]:border-b md:p-8"
          >
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="text-5xl font-semibold tracking-tighter md:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
