'use client'

import { useEffect, useState } from 'react'
import { site } from '@/data/site'

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: site.timezone,
})

/** Live clock in the owner's timezone. Renders a stable placeholder on the server. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()))
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [])

  return (
    <time className="tabular-nums" suppressHydrationWarning>
      {time ?? '--:--'}
    </time>
  )
}
