import { navLinks, site } from '@/data/site'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from '../ui/icons'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted">
            {site.role} building reliable, fast and accessible product
            experiences.
          </p>
          <p className="font-mono text-xs text-subtle">{site.location}</p>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            Pages
          </p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.cv}
                target="_blank"
                className="text-muted transition-colors hover:text-foreground"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            Elsewhere
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-3.5" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="size-3.5" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-muted transition-colors hover:text-foreground"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex items-center justify-between gap-4 border-t border-border py-6 text-xs text-subtle">
        <p>
          © {new Date().getFullYear()} {site.name}.{' '}
          <a
            href={site.source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Source on GitHub
          </a>
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          Back to top <ArrowUp className="size-3" />
        </a>
      </div>
    </footer>
  )
}
