import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Trophy, ShieldCheck, Zap, BarChart3, Wallet } from 'lucide-react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Button } from '@/components/ui/Button'
import { ParticleCanvas } from '@/components/ui/ParticleCanvas'

interface ChartDataPoint {
  index: number
  price: number
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length > 0) {
    return (
      <div
        style={{
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 12px',
        }}
      >
        <span
          className="font-mono text-sm"
          style={{ color: 'var(--gold-300)' }}
        >
          {payload[0].value.toFixed(2)}
        </span>
      </div>
    )
  }
  return null
}

interface PulsingDotProps {
  cx?: number
  cy?: number
}

function PulsingDot({ cx = 0, cy = 0 }: PulsingDotProps) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="var(--gold-500)" opacity={0.9} />
      <circle cx={cx} cy={cy} r={9} fill="none" stroke="var(--gold-500)" strokeWidth={1.5} opacity={0.4}>
        <animate attributeName="r" values="5;14;5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
  )
}

export function HeroSection() {
  const chartData = useMemo<ChartDataPoint[]>(() => {
    const base = 2295
    const seed = [
      0, 8, 15, 22, 12, 18, 30, 25, 35, 28,
      38, 32, 42, 36, 30, 25, 33, 40, 35, 42,
      38, 45, 40, 48, 43, 38, 45, 41, 47, 44,
    ]
    return seed.map((offset, i) => ({
      index: i,
      price: base + offset + Math.round(Math.sin(i * 0.6) * 4),
    }))
  }, [])

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
      {/* Particle background */}
      <ParticleCanvas />

      {/* Radial overlay accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)',
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
                border: '1px solid var(--border-gold)',
                background: 'rgba(201,168,76,0.07)',
                color: 'var(--gold-300)',
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
              <span className="text-gradient-gold">Precision</span>
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
              >
                Open Live Account →
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
              <Zap size={12} style={{ color: 'var(--gold-500)', flexShrink: 0 }} />
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
                    <span className="inline-flex" style={{ color: 'var(--gold-500)' }}>{item.icon}</span>
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
            <div
              className="rounded-[var(--radius-xl)] overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              {/* Chart header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--green-400)' }}
                  />
                  <span
                    className="font-mono text-sm font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    XAU/USD
                  </span>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{
                      background: 'rgba(52,211,153,0.12)',
                      color: 'var(--green-400)',
                    }}
                  >
                    LIVE
                  </span>
                </div>
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--text-muted)' }}
                >
                  30D Chart
                </span>
              </div>

              {/* Area chart */}
              <div className="px-2 pt-4 pb-2" style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C9A84C" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#C9A84C" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="index" hide />
                    <YAxis
                      domain={['auto', 'auto']}
                      hide
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="var(--gold-500)"
                      strokeWidth={2}
                      fill="url(#goldGradient)"
                      dot={false}
                      activeDot={{ r: 4, fill: 'var(--gold-300)', stroke: 'none' }}
                      isAnimationActive={true}
                    />
                    {/* Pulsing dot at last point */}
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="none"
                      fill="none"
                      dot={(props) => {
                        const { index, cx, cy } = props as { index: number; cx: number; cy: number }
                        if (index === chartData.length - 1) {
                          return <PulsingDot key="pulse" cx={cx} cy={cy} />
                        }
                        return <g key={`dot-${index}`} />
                      }}
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Price row */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderTop: '1px solid var(--border-subtle)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono font-bold"
                    style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}
                  >
                    2,318.40
                  </span>
                  <span
                    className="font-mono text-sm font-medium"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    XAU/USD
                  </span>
                </div>
                <div
                  className="flex items-center gap-1 px-3 py-1 rounded-full font-mono text-sm font-semibold"
                  style={{
                    background: 'rgba(52,211,153,0.12)',
                    color: 'var(--green-400)',
                  }}
                >
                  ▲ 0.43% today
                </div>
              </div>
            </div>

            {/* Below chart hint */}
            <p
              className="text-center font-mono mt-3"
              style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}
            >
              Live pricing · spreads from 0.16 pips · zero commission
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
