import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Italic serif accent used inside headings. */
export function Serif({ children, gradient, className }: { children: ReactNode; gradient?: boolean; className?: string }) {
  return (
    <span className={cn('font-serif font-normal italic tracking-normal', gradient && 'text-gradient pr-1', className)}>
      {children}
    </span>
  )
}
