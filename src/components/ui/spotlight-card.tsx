'use client'

import { useRef, type HTMLAttributes, type PointerEvent } from 'react'
import { cn } from '@/lib/utils'

/**
 * Card with a cursor-following radial highlight. Position is written straight to CSS
 * variables, so moving the pointer never re-renders React.
 */
export function SpotlightCard({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null)

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--x', `${event.clientX - rect.left}px`)
    node.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        'group/spotlight relative overflow-hidden rounded-3xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong',
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{
          background: 'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), var(--glow), transparent 70%)',
        }}
      />
      {children}
    </div>
  )
}
