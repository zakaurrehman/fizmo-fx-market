import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Bitcoin, BarChart3, Gem, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowCard } from '@/components/ui/GlowCard'

interface MarketCardData {
  icon: ReactNode
  category: string
  title: string
  badge: string
  description: string
  pairs: string[]
  linkLabel: string
  linkHref: string
}

const markets: MarketCardData[] = [
  {
    icon: <Globe size={24} strokeWidth={1.75} />,
    category: 'FOREX',
    title: 'Foreign Exchange',
    badge: '60+ Currency Pairs',
    description:
      'Trade major, minor and exotic currency pairs in the world\'s largest financial market. $7.5 trillion daily volume, 24/5 access, spreads from 0.0 pips.',
    pairs: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD'],
    linkLabel: 'Trade Forex',
    linkHref: '/markets/forex',
  },
  {
    icon: <Bitcoin size={24} strokeWidth={1.75} />,
    category: 'CRYPTO',
    title: 'Cryptocurrencies',
    badge: '30+ Crypto Pairs',
    description:
      'Capitalize on 24/7 cryptocurrency markets with CFD leverage. Trade Bitcoin, Ethereum, Ripple, Litecoin and more without owning the underlying asset.',
    pairs: ['BTC/USD', 'ETH/USD', 'XRP/USD', 'SOL/USD'],
    linkLabel: 'Trade Crypto',
    linkHref: '/markets/crypto',
  },
  {
    icon: <BarChart3 size={24} strokeWidth={1.75} />,
    category: 'INDICES',
    title: 'Stock Indices',
    badge: '15+ Global Indices',
    description:
      'Gain exposure to entire economies with a single trade. Trade the S&P 500, NASDAQ 100, DAX 40, FTSE 100, Nikkei 225 and more with ultra-low spreads.',
    pairs: ['SPX500', 'NAS100', 'DAX40', 'FTSE100'],
    linkLabel: 'Trade Indices',
    linkHref: '/markets/indices',
  },
  {
    icon: <Gem size={24} strokeWidth={1.75} />,
    category: 'COMMODITIES',
    title: 'Commodities',
    badge: '20+ Commodities',
    description:
      'Diversify with gold, silver, crude oil, natural gas, and agricultural products. Zero commission on commodity CFDs with competitive overnight financing.',
    pairs: ['XAU/USD', 'WTI/OIL', 'BRENT', 'NGAS'],
    linkLabel: 'Trade Commodities',
    linkHref: '/markets/commodities',
  },
]

function MarketCard({ market, delay }: { market: MarketCardData; delay: number }) {
  return (
    <GlowCard padding="lg" delay={delay} className="flex flex-col gap-5 h-full group">
      {/* Icon + category */}
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center flex-shrink-0"
          style={{
            background: 'rgba(168,134,42,0.1)',
            color: 'var(--gold-500)',
          }}
          aria-hidden="true"
        >
          {market.icon}
        </div>
        <span
          className="font-mono text-xs font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
          style={{
            color: 'var(--gold-500)',
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.2)',
          }}
        >
          {market.category}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3
          className="font-display font-bold text-xl mb-1"
          style={{ color: 'var(--text-primary)' }}
        >
          {market.title}
        </h3>
        <span
          className="font-body text-xs font-medium"
          style={{ color: 'var(--text-muted)' }}
        >
          {market.badge}
        </span>
      </div>

      {/* Description */}
      <p
        className="font-body text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-secondary)' }}
      >
        {market.description}
      </p>

      {/* Example pairs */}
      <div
        className="flex flex-wrap gap-2 py-3"
        style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        {market.pairs.map((pair) => (
          <span
            key={pair}
            className="font-mono text-xs px-2 py-1 rounded"
            style={{
              color: 'var(--text-muted)',
              background: 'rgba(0,0,0,0.04)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {pair}
          </span>
        ))}
      </div>

      {/* Internal link */}
      <Link
        to={market.linkHref}
        className="group/link link-gold font-body text-sm font-semibold inline-flex items-center gap-1"
      >
        {market.linkLabel}
        <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
      </Link>
    </GlowCard>
  )
}

export function MarketsPreviewSection() {
  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#F8F6F1' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="WHAT YOU CAN TRADE"
          title="Global Markets at Your Fingertips"
          subtitle="From currency pairs to digital assets, trade the world's most liquid markets with institutional-grade conditions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {markets.map((market, i) => (
            <MarketCard key={market.category} market={market} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
