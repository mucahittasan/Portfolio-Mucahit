"use client"

import getAllProjects from "@/actions/getAllProjects"
import ProjectCard from "./ProjectCard";
import { motion as m } from 'framer-motion'

function ProjectsLists() {

    const projects = getAllProjects();

    return (
        <m.div
            transition={{ duration: 0.75, ease: "easeOut" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="my-20">
            <div className="primary-title mb-12">
                <h3 className="select-none">Projects</h3>
                <h3 className="primary-title-dark">Projects</h3>
            </div>
            <ul className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                {projects.map((project, index) => (
                    <li key={index}>
                        <ProjectCard project={project} />
                    </li>
                ))}

            </ul>
        </m.div>
    )
}

export default ProjectsLists