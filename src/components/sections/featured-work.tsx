import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'
import { ProjectCard } from '../projects/project-card'
import { ButtonLink } from '../ui/button'
import { Reveal } from '../ui/reveal'
import { SectionHeading } from '../ui/section-heading'
import { Serif } from '../ui/serif'

export function FeaturedWork() {
  const projects = getFeaturedProjects().slice(0, 4)

  return (
    <section id="work" className="container-page scroll-mt-24 py-12">
      <SectionHeading
        index="01"
        label="Selected work"
        title={
          <>
            Products I&apos;ve <Serif gradient>architected</Serif> and shipped.
          </>
        }
        description="From my own SaaS products to production platforms used by Volkswagen Doğuş Finans customers every day."
        action={
          <ButtonLink href="/projects" variant="secondary">
            All projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        }
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.1}>
            <ProjectCard project={project} size="large" priority={index < 2} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
