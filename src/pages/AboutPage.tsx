import { AboutHero } from '@/components/sections/about/AboutHero'
import { OurStory } from '@/components/sections/about/OurStory'
import { ValuesSection } from '@/components/sections/about/ValuesSection'
import { RegulatorySection } from '@/components/sections/about/RegulatorySection'
import { GlobalPresence } from '@/components/sections/about/GlobalPresence'
import { AwardsShowcase } from '@/components/sections/about/AwardsShowcase'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <RegulatorySection />
      <GlobalPresence />
      <AwardsShowcase />
    </>
  )
}
