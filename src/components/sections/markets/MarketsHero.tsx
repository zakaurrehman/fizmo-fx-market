import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const REGISTER_URL = 'https://my.fizmofxmarkets.com/register'

interface StatChip {
  number: string
  label: string
}

const statChips: StatChip[] = [
  { number: '60+', label: 'Forex Pairs' },
  { number: '30+', label: 'Crypto CFDs' },
  { number: '15+', label: 'Indices' },
  { number: '20+', label: 'Commodities' },
]

export function MarketsHero() {
  return (
    <section
      className="relative flex items-center justify-center py-20 overflow-hidden"
      style={{
        minHeight: '50vh',
        background:
          'radial-gradient(ellipse at 60% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), #080B14',
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-max relative z-10 text-center px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex items-center justify-center gap-2 text-sm font-body"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="text-[var(--text-secondary)] hover:text-[var(--text-accent)] transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-[var(--text-muted)]">/</span>
          <span className="text-[var(--text-accent)] font-medium">Markets</span>
        </motion.nav>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-[var(--text-primary)] mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}
        >
          <span className="text-gradient-accent">300+ Markets.</span> One
          Powerful Platform.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Trade the world's most liquid financial markets with institutional
          pricing, deep liquidity, and lightning-fast execution.
        </motion.p>

        {/* Stat Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {statChips.map((chip, index) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 + index * 0.07 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-body"
              style={{
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid var(--border-accent)',
              }}
            >
              <span className="font-mono font-bold text-[var(--accent-300)]">
                {chip.number}
              </span>
              <span className="text-sm text-[var(--text-secondary)]">
                {chip.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href={REGISTER_URL} external>
            Start Trading
          </Button>
          <Button variant="outline" size="lg" href="#markets-tabs">
            Explore Markets
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
