'use client'

import { AnimatePresence, m, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navLinks, site } from '@/data/site'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'

const isActive = (pathname: string, href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

export function Navbar() {
  const pathname = usePathname() ?? '/'
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'border-b transition-all duration-500',
          scrolled || open ? 'border-border bg-background/70 backdrop-blur-xl' : 'border-transparent',
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-border bg-surface p-1 backdrop-blur">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href)
                return (
                  <li key={link.href} className="relative">
                    {active && (
                      <m.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-surface-strong shadow-[inset_0_0_0_1px_var(--border)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'relative block rounded-full px-4 py-1.5 text-sm transition-colors',
                        active ? 'text-foreground' : 'text-muted hover:text-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`mailto:${site.email}`}
              className="hidden h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-[13px] font-medium text-background transition-opacity hover:opacity-85 md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="size-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid size-9 place-items-center rounded-full border border-border bg-surface md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 bottom-0 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-page flex flex-col gap-2 pt-10">
              {navLinks.map((link, index) => (
                <m.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.06, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-baseline gap-4 border-b border-border py-4 text-4xl font-semibold tracking-tight',
                      isActive(pathname, link.href) ? 'text-foreground' : 'text-muted',
                    )}
                  >
                    <span className="font-mono text-xs text-subtle">0{index + 1}</span>
                    {link.label}
                  </Link>
                </m.li>
              ))}
              <m.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="pt-8"
              >
                <a href={`mailto:${site.email}`} className="text-gradient text-lg font-medium">
                  {site.email}
                </a>
              </m.li>
            </ul>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
