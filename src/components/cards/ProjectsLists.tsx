'use client'

import getAllProjects from '@/actions/getAllProjects'
import ProjectCard from './ProjectCard'
import { motion as m } from 'framer-motion'

export interface ProjectsLists {
  id: number
  title: string
  description: string
  image: string
  source?: string
  demo?: string
  technologies: string[]
  date: string
  links?: { name: string; url: string }[]
}

function ProjectsLists() {
  const projects = getAllProjects()

  return (
    <m.div
      transition={{ duration: 0.75, ease: 'easeOut' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-20"
    >
      <m.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="primary-title mb-12"
      >
        <h3 className="select-none">Projects</h3>
        <h3 className="primary-title-dark">Projects</h3>
      </m.div>
      <ul className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <m.li
            key={index}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
          >
            <ProjectCard project={project} />
          </m.li>
        ))}
      </ul>
    </m.div>
  )
}

export default ProjectsLists
