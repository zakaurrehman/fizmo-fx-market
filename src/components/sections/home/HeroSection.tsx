import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Trophy, ShieldCheck, Zap, BarChart3, Wallet, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// recharts is only used by this chart — lazy-load it so the heavy charting
// library stays out of the initial bundle.
const HeroChart = lazy(() =>
  import('./HeroChart').then((m) => ({ default: m.HeroChart }))
)

export function HeroSection() {
  const trustItems = [
    { icon: <ShieldCheck size={16} />, label: 'Regulated Broker' },
    { icon: <Zap size={16} />, label: 'Instant Withdrawals' },
    { icon: <BarChart3 size={16} />, label: '300+ Instruments' },
    { icon: <Wallet size={16} />, label: 'From $10' },
  ]

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 80px)',
        background: 'var(--gradient-hero)',
      }}
    >
      {/* Subtle dot grid, faded toward the edges */}
      <div
        className="absolute inset-0 bg-dot-grid pointer-events-none"
        style={{
          maskImage:
            'radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* Radial overlay accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container-max relative z-10 flex items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center py-16 lg:py-20">

          {/* ── Left Column (60%) ────────────────────────────── */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-6"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Eyebrow badge */}
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-medium tracking-wide"
              style={{
                border: '1px solid var(--border-accent)',
                background: 'rgba(59,130,246,0.07)',
                color: 'var(--accent-300)',
              }}
            >
              <Trophy size={14} />
              Award-Winning Broker · Dubai 2024
            </div>

            {/* H1 */}
            <h1
              className="font-display font-bold leading-[1.05]"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              Trade Global Markets With
              <br />
              Unmatched{' '}
              <span className="text-gradient-accent">Precision</span>
            </h1>

            {/* Subtitle */}
            <p
              className="font-body leading-relaxed max-w-xl"
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
              }}
            >
              Access 300+ instruments including Forex, Crypto, Indices and
              Commodities. Ultra-tight spreads from 0.16 pips, 1:2000 leverage,
              and instant USDT withdrawals — built for traders who demand the
              best.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                variant="primary"
                size="lg"
                href="https://my.fizmofxmarkets.com/register"
                external
                icon={<ArrowRight size={18} />}
              >
                Open Live Account
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="https://my.fizmofxmarkets.com/register"
                external
              >
                Try Free Demo
              </Button>
            </div>

            {/* Small note */}
            <p
              className="font-body inline-flex items-center gap-1.5"
              style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
            >
              <Zap size={12} style={{ color: 'var(--accent-500)', flexShrink: 0 }} />
              Open account in under 2 minutes · No deposit required for demo
            </p>

            {/* Trust strip */}
            <div
              className="flex flex-wrap items-center gap-0 mt-2 pt-6"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              {trustItems.map((item, i) => (
                <React.Fragment key={item.label}>
                  <div className="flex items-center gap-2 px-4 py-1 first:pl-0">
                    <span className="inline-flex" style={{ color: 'var(--accent-500)' }}>{item.icon}</span>
                    <span
                      className="font-body text-sm font-medium whitespace-nowrap"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.label}
                    </span>
                  </div>
                  {i < trustItems.length - 1 && (
                    <div
                      className="hidden sm:block h-4 w-px mx-1"
                      style={{ background: 'var(--border-subtle)' }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column (40%) ───────────────────────────── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <Suspense
              fallback={<div style={{ minHeight: 396 }} aria-hidden="true" />}
            >
              <HeroChart />
            </Suspense>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
