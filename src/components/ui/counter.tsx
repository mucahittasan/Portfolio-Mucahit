'use client'

import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'

/** Counts up from 0 to `value` the first time it scrolls into view. */
export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!inView || !node) return
    if (reduceMotion) {
      node.textContent = `${value}${suffix}`
      return
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix, reduceMotion])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  )
}
