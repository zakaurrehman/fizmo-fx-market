import { PlatformHero } from '@/components/sections/platform/PlatformHero'
import { MT5Features } from '@/components/sections/platform/MT5Features'
import { PlatformTabs } from '@/components/sections/platform/PlatformTabs'
import { TradingTools } from '@/components/sections/platform/TradingTools'
import { MT5vsmt4Table } from '@/components/sections/platform/MT5vsmt4Table'
import useMeta from '@/hooks/useMeta'
import { seo, globalKeywords } from '@/data/seoData'

export function PlatformPage() {
  useMeta({ ...seo.platform, keywords: seo.platform.keywords || globalKeywords })
  return (
    <>
      <PlatformHero />
      <MT5Features />
      <PlatformTabs />
      <TradingTools />
      <MT5vsmt4Table />
    </>
  )
}
