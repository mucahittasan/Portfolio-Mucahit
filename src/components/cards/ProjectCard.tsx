import { ProjectsLists } from '@/actions/getAllProjects'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

interface ProjectCardProps {
  project: ProjectsLists
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group "
    >
      <div className="relative w-full rounded-lg overflow-hidden sm:h-[200px] shadow-[0px_0px_18px_0_rgb(158,97,179,.2)]">
        <Image
          className="object-cover rounded-lg h-full !relative group-hover:scale-110 transition-all duration-200"
          fill
          alt={project.title}
          src={project.image}
          loading="lazy"
        />
      </div>
      <article>
        <h2 className="text-2xl font-bold mt-4 mb-1 transition-all hover:gradient-text dark:hover:gradient-dark-text">
          {project.title}
        </h2>
        <div className="flex items-center gap-x-8  text-gray-400 dark:text-gray-500 font-medium">
          <div className="flex items-center gap-x-2">
            <AiOutlineCalendar />
            <span>{project.date}</span>
          </div>
        </div>
        {project.links && project.links.length > 0 && (
          <div className="project-link-list mt-3 flex flex-wrap gap-2">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-item px-3 py-1 rounded font-semibold transition-all flex items-center gap-1"
              >
                <span className="project-link-icon">🔗</span>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}

export default ProjectCard
