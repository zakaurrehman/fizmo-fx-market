import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const MT5_DOWNLOAD_URL = 'https://www.metatrader5.com/en/download'
const WEB_TERMINAL_URL = 'https://my.fizmofxmarkets.com'

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: '21', label: 'Timeframes' },
  { value: '80+', label: 'Indicators' },
  { value: '6', label: 'Order Types' },
  { value: 'Multi-Asset', label: '' },
]

export function PlatformHero() {
  return (
    <section
      className="relative flex items-center justify-center py-20 overflow-hidden"
      style={{
        minHeight: '50vh',
        background:
          'radial-gradient(ellipse at 60% 50%, rgba(16,185,129,0.08) 0%, transparent 60%), #080B14',
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(16,185,129,0.05) 1px, transparent 1px)',
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
          <span className="text-[var(--text-accent)] font-medium">Platform</span>
        </motion.nav>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-[var(--text-primary)] mb-6"
          style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)', lineHeight: 1.15 }}
        >
          <span className="text-gradient-accent">MetaTrader 5</span> — The
          World's Most Advanced Trading Platform
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Trusted by millions of traders globally. Powerful, reliable, and
          available on every device.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button variant="primary" size="lg" href={MT5_DOWNLOAD_URL} external>
            Download MT5
          </Button>
          <Button variant="outline" size="lg" href={WEB_TERMINAL_URL} external>
            Trade on Web Browser
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`${stat.value}-${stat.label}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.45 + index * 0.07 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body"
              style={{
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid var(--border-accent)',
              }}
            >
              <span className="font-mono font-bold text-[var(--accent-300)]">
                {stat.value}
              </span>
              {stat.label && (
                <span className="text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
