import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

interface SignalCardData {
  direction: 'BUY' | 'SELL'
  symbol: string
  entry: string
  tp: string
  sl: string
  floatDuration: number
  delay: number
}

const signals: SignalCardData[] = [
  {
    direction: 'BUY',
    symbol: 'EUR/USD',
    entry: '1.0823',
    tp: '1.0890',
    sl: '1.0795',
    floatDuration: 4,
    delay: 0,
  },
  {
    direction: 'SELL',
    symbol: 'XAU/USD',
    entry: '2,318',
    tp: '2,285',
    sl: '2,335',
    floatDuration: 5,
    delay: 0.15,
  },
  {
    direction: 'BUY',
    symbol: 'BTC/USD',
    entry: '66,840',
    tp: '68,500',
    sl: '65,200',
    floatDuration: 6,
    delay: 0.3,
  },
]

const checklist: string[] = [
  '50+ signals delivered daily',
  'Covers Forex, Crypto, Gold & Indices',
  'Entry price, stop loss & take profit included',
  'Delivered directly to MT5 terminal',
  'Win rate tracked and published transparently',
]

function SignalCard({ card }: { card: SignalCardData }) {
  const isBuy = card.direction === 'BUY'
  const directionColor = isBuy ? 'var(--green-400)' : 'var(--red-400)'
  const directionBg = isBuy
    ? 'rgba(52,211,153,0.12)'
    : 'rgba(248,113,113,0.12)'
  const directionBorder = isBuy
    ? 'rgba(52,211,153,0.3)'
    : 'rgba(248,113,113,0.3)'

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: card.delay, ease: 'easeOut' }}
      animate={{
        y: [0, -8, 0],
        transition: {
          duration: card.floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '1rem',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.875rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          {/* Direction chip */}
          <span
            style={{
              background: directionBg,
              color: directionColor,
              border: `1px solid ${directionBorder}`,
              borderRadius: 'var(--radius-sm)',
              padding: '0.15rem 0.6rem',
              fontSize: '0.75rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              letterSpacing: '0.08em',
            }}
          >
            {card.direction}
          </span>
          {/* Symbol */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--text-primary)',
            }}
          >
            {card.symbol}
          </span>
        </div>

        {/* Active signal indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'var(--green-400)',
              display: 'inline-block',
              boxShadow: '0 0 6px var(--green-400)',
            }}
          />
          <span
            style={{
              fontSize: '0.6875rem',
              color: 'var(--text-muted)',
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: '0.05em',
            }}
          >
            Active Signal
          </span>
        </div>
      </div>

      {/* Price rows */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.375rem',
        }}
      >
        {[
          { label: 'Entry', value: card.entry },
          { label: 'TP', value: card.tp },
          { label: 'SL', value: card.sl },
        ].map((row) => (
          <div
            key={row.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.3rem 0',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {row.label}
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                fontSize: '0.9375rem',
                color:
                  row.label === 'TP'
                    ? 'var(--green-400)'
                    : row.label === 'SL'
                    ? 'var(--red-400)'
                    : 'var(--text-primary)',
              }}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function SignalsSection() {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left: copy */}
          <ScrollReveal direction="left">
            <SectionHeader
              eyebrow="FREE ACCESS"
              title={
                <>
                  Professional Signals.{' '}
                  <span className="text-gradient-accent">Zero Cost.</span>
                </>
              }
              subtitle="Receive institutional-quality trade signals powered by advanced technical analysis and real-time market data. Never miss a high-probability setup again."
              align="left"
            />

            {/* Checklist */}
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              {checklist.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9375rem',
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'rgba(52,211,153,0.12)',
                      border: '1px solid rgba(52,211,153,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={12} color="var(--green-400)" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              size="lg"
              href="https://my.fizmofxmarkets.com/register"
              external
            >
              Access Free Signals
            </Button>
          </ScrollReveal>

          {/* Right: signal cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {signals.map((card) => (
              <SignalCard key={card.symbol} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
