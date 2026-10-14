import type { MetadataRoute } from 'next'
import { getProjects } from '@/data/projects'
import { site } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/projects', '/experience'].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
  const projects = getProjects().map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))
  return [...pages, ...projects]
}
