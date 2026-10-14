import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })

const parseMonth = (value: string) => {
  const [year, month] = value.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, 1))
}

/** `2024-08` → `Aug 2024` */
export function formatMonth(value: string | null) {
  return value ? monthFormatter.format(parseMonth(value)) : 'Present'
}

/** Inclusive duration between two `YYYY-MM` months, e.g. `1 yr 11 mos`. */
export function formatDuration(start: string, end: string | null) {
  const from = parseMonth(start)
  const to = end ? parseMonth(end) : new Date()
  const total = (to.getUTCFullYear() - from.getUTCFullYear()) * 12 + (to.getUTCMonth() - from.getUTCMonth()) + 1
  const years = Math.floor(total / 12)
  const months = total % 12
  const parts = [
    years > 0 && `${years} yr${years > 1 ? 's' : ''}`,
    months > 0 && `${months} mo${months > 1 ? 's' : ''}`,
  ].filter(Boolean)
  return parts.join(' ')
}

/** Strips protocol, `www.` and trailing slash for display. */
export function prettyUrl(href: string) {
  return href.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')
}
