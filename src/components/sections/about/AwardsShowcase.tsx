import type { ReactNode } from 'react'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Zap, Lock, BarChart2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface AwardMetric {
  icon: ReactNode
  title: string
  value: string
  description: string
}

const metrics: AwardMetric[] = [
  {
    icon: <Zap size={22} strokeWidth={1.5} />,
    title: 'Lightning-Fast Withdrawals',
    value: 'Avg. 18 min',
    description: 'Average USDT withdrawal processing time — the fastest in the industry.',
  },
  {
    icon: <Lock size={22} strokeWidth={1.5} />,
    title: 'Zero Withdrawal Failures',
    value: '100% success',
    description: 'Not a single withdrawal failure recorded throughout the entire year of 2024.',
  },
  {
    icon: <BarChart2 size={22} strokeWidth={1.5} />,
    title: 'Execution Accuracy',
    value: '99.97%',
    description: 'Order execution accuracy across all account types and instruments in 2024.',
  },
]

const awardStats: { value: string; label: string }[] = [
  { value: '10+', label: 'Awards' },
  { value: '50+', label: 'Countries' },
  { value: 'Since 2021', label: 'Founded' },
]

export function AwardsShowcase() {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            eyebrow="RECOGNITION"
            title="Industry Recognition"
            subtitle="Awarded by global trading institutions for our dedication to client-first service and operational excellence."
            align="center"
          />
        </ScrollReveal>

        {/* Large award card */}
        <ScrollReveal delay={0.1}>
          <motion.div
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            style={{
              maxWidth: '34rem',
              margin: '0 auto 4rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-gold)',
              boxShadow: 'var(--shadow-glow)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem 2.5rem',
              textAlign: 'center',
            }}
          >
            {/* Trophy icon */}
            <div
              style={{
                width: 96,
                height: 96,
                margin: '0 auto 2rem',
                borderRadius: '50%',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Trophy size={52} color="var(--gold-500)" strokeWidth={1.5} />
            </div>

            {/* Award year badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-medium tracking-wide mb-4"
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid var(--border-gold)',
                color: 'var(--gold-300)',
              }}
            >
              Dubai Forex Expo · 2024
            </div>

            {/* Award name */}
            <h3
              className="font-display font-bold mb-3"
              style={{
                fontSize: '1.75rem',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Best Deposit &amp; Withdrawal Broker
            </h3>

            {/* Stars */}
            <div
              style={{
                fontSize: '1.375rem',
                color: 'var(--gold-500)',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
              }}
            >
              ★★★★★
            </div>

            {/* Description */}
            <p
              className="font-body leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}
            >
              Awarded for our industry-leading withdrawal processing speeds and
              seamless deposit experience across all payment methods. Recognised
              among 200+ global brokers at the world's premier forex industry event.
            </p>

            {/* Stats row */}
            <div
              className="flex items-center justify-center gap-0 mt-8 pt-6"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              {awardStats.map((stat, index) => (
                <Fragment key={stat.label}>
                  {index > 0 && (
                    <div
                      style={{
                        width: 1,
                        height: 36,
                        background: 'var(--border-subtle)',
                        margin: '0 2rem',
                      }}
                    />
                  )}
                  <div className="text-center">
                    <div
                      className="font-mono font-bold"
                      style={{
                        fontSize: '1.5rem',
                        color: 'var(--gold-500)',
                        lineHeight: 1,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="font-mono text-xs uppercase tracking-wide"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>

        {/* "What makes us award-winning?" section */}
        <ScrollReveal delay={0.2}>
          <h3
            className="font-display font-bold text-center mb-10"
            style={{
              fontSize: '1.375rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            What makes us award-winning?
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.title} delay={0.1 + index * 0.1} direction="up">
              <div
                className="rounded-[var(--radius-lg)] p-6 text-center h-full"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid var(--border-gold)',
                    color: 'var(--gold-500)',
                  }}
                >
                  {metric.icon}
                </div>

                {/* Value */}
                <div
                  className="font-mono font-bold mb-1"
                  style={{ fontSize: '1.25rem', color: 'var(--gold-300)' }}
                >
                  {metric.value}
                </div>

                {/* Title */}
                <h4
                  className="font-display font-semibold mb-2"
                  style={{ fontSize: '0.9375rem', color: 'var(--text-primary)' }}
                >
                  {metric.title}
                </h4>

                {/* Description */}
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                >
                  {metric.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
