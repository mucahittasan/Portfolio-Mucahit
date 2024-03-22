import { projects } from '@/data/projects'

export interface ProjectsLists {
  id: number
  title: string
  description: string
  image: string
  source: string
  demo: string
  technologies: string[]
  date: string
}

export default function getAllProjects() {
  return projects
}
