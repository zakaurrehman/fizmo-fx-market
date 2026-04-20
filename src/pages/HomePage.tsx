import { HeroSection } from '@/components/sections/home/HeroSection'
import { StatsBar } from '@/components/sections/home/StatsBar'
import { HowItWorksSection } from '@/components/sections/home/HowItWorksSection'
import { MarketsPreviewSection } from '@/components/sections/home/MarketsPreviewSection'
import { AccountsPreviewSection } from '@/components/sections/home/AccountsPreviewSection'
import { WhyFizmoSection } from '@/components/sections/home/WhyFizmoSection'
import { AwardsSection } from '@/components/sections/home/AwardsSection'
import { SignalsSection } from '@/components/sections/home/SignalsSection'
import { AffiliateSection } from '@/components/sections/home/AffiliateSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { NewsSection } from '@/components/sections/home/NewsSection'
import { BottomCTABanner } from '@/components/sections/home/BottomCTABanner'
import useMeta from '@/hooks/useMeta'
import { seo, globalKeywords } from '@/data/seoData'

export function HomePage() {
  useMeta({ ...seo.home, keywords: seo.home.keywords || globalKeywords })
  return (
    <>
      <HeroSection />
      <StatsBar />
      <HowItWorksSection />
      <MarketsPreviewSection />
      <AccountsPreviewSection />
      <WhyFizmoSection />
      <AwardsSection />
      <SignalsSection />
      <AffiliateSection />
      <TestimonialsSection />
      <NewsSection />
      <BottomCTABanner />
    </>
  )
}
