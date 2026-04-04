import { PlatformHero } from '@/components/sections/platform/PlatformHero'
import { MT5Features } from '@/components/sections/platform/MT5Features'
import { PlatformTabs } from '@/components/sections/platform/PlatformTabs'
import { TradingTools } from '@/components/sections/platform/TradingTools'
import { MT5vsmt4Table } from '@/components/sections/platform/MT5vsmt4Table'

export function PlatformPage() {
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
