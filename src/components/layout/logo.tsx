import Link from 'next/link'
import { site } from '@/data/site'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-gradient" x1="2" y1="16" x2="30" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--accent-from)" />
          <stop offset="1" stopColor="var(--accent-to)" />
        </linearGradient>
      </defs>
      <path
        d="M16 2.5 28 9.25v13.5L16 29.5 4 22.75V9.25L16 2.5Z"
        stroke="url(#logo-gradient)"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <path
        d="m12 12.5-3.5 3.5 3.5 3.5M20 12.5l3.5 3.5-3.5 3.5M17.25 11l-2.5 10"
        stroke="url(#logo-gradient)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name} — home`}>
      <LogoMark className="size-7 transition-transform duration-700 ease-out group-hover:rotate-[360deg]" />
      <span className="text-[15px] font-semibold tracking-tight">
        {site.shortName}
        <span className="text-subtle">.dev</span>
      </span>
    </Link>
  )
}
