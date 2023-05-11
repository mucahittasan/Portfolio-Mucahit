import { ProjectsLists } from '@/actions/getAllProjects'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface ProjectCardProps {
    project: ProjectsLists
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link href={`/projects/${project.id}`} className='group'>
            <div className='relative w-full rounded-lg overflow-hidden sm:h-[200px]'>
                <Image
                    className='object-cover rounded-lg h-full !relative group-hover:scale-110 transition-all duration-200'
                    fill
                    alt={project.title}
                    src={project.image}
                />
            </div>
            <h3 className='mt-4 text-xl font-bold group-hover:gradient-text transition-all duration-200'>{project.title}</h3>
        </Link>
    )
}

export default ProjectCard