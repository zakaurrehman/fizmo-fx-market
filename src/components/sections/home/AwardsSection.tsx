import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const stats: { value: string; label: string }[] = [
  { value: '10+', label: 'Awards' },
  { value: '50+', label: 'Countries' },
  { value: 'Since 2021', label: 'Founded' },
]

export function AwardsSection() {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="RECOGNITION"
          title="Award-Winning Excellence"
          subtitle="Recognized by the global trading industry for our commitment to outstanding service."
          align="center"
        />

        {/* Award card */}
        <ScrollReveal delay={0.1} direction="up">
          <motion.div
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            style={{
              maxWidth: '32rem',
              margin: '0 auto',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-gold)',
              boxShadow: 'var(--shadow-glow)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              textAlign: 'center',
            }}
          >
            {/* Icon wrapper */}
            <div
              style={{
                width: 80,
                height: 80,
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                background: 'rgba(212,175,55,0.12)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Trophy size={48} color="var(--gold-500)" strokeWidth={1.5} />
            </div>

            {/* Award name */}
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '1.5rem',
                lineHeight: 1.25,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Best Deposit &amp; Withdrawal Broker
            </h3>

            {/* Event */}
            <p
              className="text-gradient-gold"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                marginBottom: '1rem',
              }}
            >
              Dubai Forex Expo 2024
            </p>

            {/* Stars */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.375rem',
                marginBottom: '1.25rem',
              }}
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} fill="var(--gold-500)" color="var(--gold-500)" />
              ))}
            </div>

            {/* Description */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
              }}
            >
              Awarded for our industry-leading withdrawal processing speeds and
              seamless deposit experience across all payment methods.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={0.25} direction="up">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '3rem',
              gap: 0,
              flexWrap: 'wrap',
            }}
          >
            {stats.map((stat, index) => (
              <Fragment key={stat.label}>
                {index > 0 && (
                  <div
                    style={{
                      width: 1,
                      height: 40,
                      background: 'var(--border-subtle)',
                      margin: '0 2.5rem',
                    }}
                  />
                )}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      fontSize: '1.875rem',
                      color: 'var(--gold-500)',
                      lineHeight: 1,
                      marginBottom: '0.375rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
