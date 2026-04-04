import { Link } from 'react-router-dom'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowCard } from '@/components/ui/GlowCard'

interface MarketCardData {
  emoji: string
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
    emoji: '🌐',
    category: 'FOREX',
    title: 'Foreign Exchange',
    badge: '60+ Currency Pairs',
    description:
      'Trade major, minor and exotic currency pairs in the world\'s largest financial market. $7.5 trillion daily volume, 24/5 access, spreads from 0.0 pips.',
    pairs: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD'],
    linkLabel: 'Trade Forex →',
    linkHref: '/markets/forex',
  },
  {
    emoji: '₿',
    category: 'CRYPTO',
    title: 'Cryptocurrencies',
    badge: '30+ Crypto Pairs',
    description:
      'Capitalize on 24/7 cryptocurrency markets with CFD leverage. Trade Bitcoin, Ethereum, Ripple, Litecoin and more without owning the underlying asset.',
    pairs: ['BTC/USD', 'ETH/USD', 'XRP/USD', 'SOL/USD'],
    linkLabel: 'Trade Crypto →',
    linkHref: '/markets/crypto',
  },
  {
    emoji: '📊',
    category: 'INDICES',
    title: 'Stock Indices',
    badge: '15+ Global Indices',
    description:
      'Gain exposure to entire economies with a single trade. Trade the S&P 500, NASDAQ 100, DAX 40, FTSE 100, Nikkei 225 and more with ultra-low spreads.',
    pairs: ['SPX500', 'NAS100', 'DAX40', 'FTSE100'],
    linkLabel: 'Trade Indices →',
    linkHref: '/markets/indices',
  },
  {
    emoji: '💎',
    category: 'COMMODITIES',
    title: 'Commodities',
    badge: '20+ Commodities',
    description:
      'Diversify with gold, silver, crude oil, natural gas, and agricultural products. Zero commission on commodity CFDs with competitive overnight financing.',
    pairs: ['XAU/USD', 'WTI/OIL', 'BRENT', 'NGAS'],
    linkLabel: 'Trade Commodities →',
    linkHref: '/markets/commodities',
  },
]

function MarketCard({ market, delay }: { market: MarketCardData; delay: number }) {
  return (
    <GlowCard padding="lg" delay={delay} className="flex flex-col gap-5 h-full group">
      {/* Emoji + category */}
      <div className="flex items-center gap-3">
        <span
          className="text-4xl leading-none"
          role="img"
          aria-label={market.title}
        >
          {market.emoji}
        </span>
        <span
          className="font-mono text-xs font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
          style={{
            color: 'var(--gold-500)',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.2)',
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
              background: 'rgba(255,255,255,0.04)',
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
        className="font-body text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-150"
        style={{ color: 'var(--gold-500)' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold-300)'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold-500)'
        }}
      >
        {market.linkLabel}
      </Link>
    </GlowCard>
  )
}

export function MarketsPreviewSection() {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
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
