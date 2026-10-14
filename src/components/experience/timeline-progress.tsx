'use client'

import { m, useScroll, useSpring } from 'motion/react'
import { useRef, type ReactNode } from 'react'

/** Wraps the timeline and draws a gradient rail that fills as the reader scrolls through it. */
export function TimelineProgress({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div ref={ref} className="relative">
      <div aria-hidden className="absolute top-2 bottom-0 left-[7px] w-px bg-border md:left-[calc(220px+31px)]">
        <m.div
          style={{ scaleY, background: 'linear-gradient(to bottom, var(--accent-from), var(--accent-to))' }}
          className="absolute inset-0 origin-top"
        />
      </div>
      {children}
    </div>
  )
}
