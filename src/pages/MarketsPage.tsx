import { MarketsHero } from '@/components/sections/markets/MarketsHero'
import { MarketsTabs } from '@/components/sections/markets/MarketsTabs'
import useMeta from '@/hooks/useMeta'
import { seo, globalKeywords } from '@/data/seoData'
import { useLocation } from 'react-router-dom'

export function MarketsPage() {
  const { pathname } = useLocation()

  let entry = seo.markets
  if (pathname.includes('/markets/forex')) entry = seo.forex
  else if (pathname.includes('/markets/crypto')) entry = seo.crypto
  else if (pathname.includes('/markets/indices')) entry = seo.indices
  else if (pathname.includes('/markets/commodities')) entry = seo.commodities

  useMeta({ ...entry, keywords: entry.keywords || globalKeywords })

  return (
    <>
      <MarketsHero />
      <MarketsTabs />
    </>
  )
}
