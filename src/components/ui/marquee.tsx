import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Infinite horizontal ticker, pure CSS. Content is rendered twice for a seamless loop. */
export function Marquee({ children, className, duration = 40 }: { children: ReactNode; className?: string; duration?: number }) {
  const group = 'flex shrink-0 items-center gap-12 pr-12'
  return (
    <div
      className={cn('group flex overflow-hidden mask-fade-x', className)}
      style={{ ['--marquee-duration' as string]: `${duration}s` }}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <div className={group}>{children}</div>
        <div className={group} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
