import { ArrowLeft } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button'
import { Serif } from '@/components/ui/serif'

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80svh] flex-col items-center justify-center pt-24 text-center">
      <p className="text-gradient font-mono text-sm">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
        Lost in the <Serif gradient>void</Serif>.
      </h1>
      <p className="mt-6 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <ButtonLink href="/" className="mt-10">
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        Back home
      </ButtonLink>
    </section>
  )
}
