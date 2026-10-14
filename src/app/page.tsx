import { Contact } from '@/components/sections/contact'
import { ExperiencePreview } from '@/components/sections/experience-preview'
import { Expertise } from '@/components/sections/expertise'
import { FeaturedWork } from '@/components/sections/featured-work'
import { Hero } from '@/components/sections/hero'
import { Skills } from '@/components/sections/skills'
import { StackMarquee } from '@/components/sections/stack-marquee'
import { Stats } from '@/components/sections/stats'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <Stats />
      <FeaturedWork />
      <Expertise />
      <ExperiencePreview />
      <Skills />
      <Contact />
    </>
  )
}
