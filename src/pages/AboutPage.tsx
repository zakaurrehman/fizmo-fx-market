import { AboutHero } from '@/components/sections/about/AboutHero'
import { OurStory } from '@/components/sections/about/OurStory'
import { ValuesSection } from '@/components/sections/about/ValuesSection'
import { RegulatorySection } from '@/components/sections/about/RegulatorySection'
import { GlobalPresence } from '@/components/sections/about/GlobalPresence'
import { AwardsShowcase } from '@/components/sections/about/AwardsShowcase'
import useMeta from '@/hooks/useMeta'
import { seo, globalKeywords } from '@/data/seoData'

export function AboutPage() {
  useMeta({ ...seo.about, keywords: seo.about.keywords || globalKeywords })
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
