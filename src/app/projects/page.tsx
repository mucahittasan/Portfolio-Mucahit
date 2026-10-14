import type { Metadata } from 'next'
import { ProjectGrid } from '@/components/projects/project-grid'
import { Contact } from '@/components/sections/contact'
import { PageHeader } from '@/components/ui/page-header'
import { Serif } from '@/components/ui/serif'
import { getProjects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected products, client platforms and personal projects by Mucahit Tasan.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Work"
        title={
          <>
            Selected <Serif gradient>work</Serif>, 2023 — today.
          </>
        }
        description="SaaS products I'm building, production platforms I owned for Volkswagen Doğuş Finans, and personal projects where I explore new tools."
      />
      <section className="container-page">
        <ProjectGrid projects={getProjects()} />
      </section>
      <div className="pt-32">
        <Contact />
      </div>
    </>
  )
}
