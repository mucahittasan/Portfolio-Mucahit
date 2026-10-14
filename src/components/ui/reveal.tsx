'use client'

import { m, type HTMLMotionProps } from 'motion/react'

const elements = { div: m.div, li: m.li, section: m.section, article: m.article }

type RevealProps = HTMLMotionProps<'div'> & {
  as?: keyof typeof elements
  delay?: number
  /** Vertical offset in px the element travels from. */
  y?: number
}

/** Fades and lifts its children into view once, when scrolled into the viewport. */
export function Reveal({ as = 'div', delay = 0, y = 24, children, ...props }: RevealProps) {
  const Element = elements[as] as typeof m.div
  return (
    <Element
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Element>
  )
}
