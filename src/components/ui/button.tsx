import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-foreground text-background hover:bg-foreground/85 shadow-[0_0_0_1px_var(--border-strong),0_8px_30px_-12px_var(--accent-from)]',
  secondary: 'border border-border-strong bg-surface text-foreground hover:bg-surface-strong backdrop-blur',
  ghost: 'text-muted hover:text-foreground hover:bg-surface',
} as const

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants
  size?: 'sm' | 'md'
  external?: boolean
}

export function ButtonLink({ variant = 'primary', size = 'md', external, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 active:scale-[0.97]',
        size === 'md' ? 'h-11 px-5 text-sm' : 'h-9 px-4 text-[13px]',
        variants[variant],
        className,
      )}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </Link>
  )
}
