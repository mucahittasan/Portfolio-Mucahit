'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative grid size-9 place-items-center overflow-hidden rounded-full border border-border bg-surface text-muted transition-colors hover:text-foreground hover:border-border-strong',
        className,
      )}
      aria-label="Toggle color theme"
    >
      {/* Both icons render on the server; CSS picks the visible one so there is no hydration flash. */}
      <Sun className="size-4 transition-all duration-500 dark:-translate-y-8 dark:rotate-90 dark:opacity-0" />
      <Moon className="absolute size-4 translate-y-8 -rotate-90 opacity-0 transition-all duration-500 dark:translate-y-0 dark:rotate-0 dark:opacity-100" />
    </button>
  )
}
