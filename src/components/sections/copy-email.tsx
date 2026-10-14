'use client'

import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(id)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong bg-surface px-5 text-sm font-medium transition-colors hover:bg-surface-strong active:scale-[0.97]"
      aria-live="polite"
    >
      {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
      {copied ? 'Copied to clipboard' : 'Copy email'}
    </button>
  )
}
