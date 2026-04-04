import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface Milestone {
  year: string
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    year: '2021',
    title: 'Fizmo FX Markets Launched',
    description:
      'Fizmo FX Markets launched, focusing on transparent ECN trading conditions for retail traders worldwide.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description:
      'Expanded to 50+ countries, crossed 25,000 active trading accounts with industry-leading execution.',
  },
  {
    year: '2024',
    title: 'Award-Winning Recognition',
    description:
      'Awarded Best Deposit & Withdrawal Broker at Dubai Forex Expo — recognising our commitment to seamless fund management.',
  },
]

export function OurStory() {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Text ─────────────────────────────────────── */}
          <ScrollReveal direction="left">
            <div>
              {/* Heading with gold underline decoration */}
              <div className="mb-8">
                <h2
                  className="font-display font-bold mb-3"
                  style={{
                    fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  Our Story
                </h2>
                {/* Gold underline accent */}
                <div className="flex items-center gap-1">
                  <div
                    className="h-1 rounded-full"
                    style={{ width: '3rem', background: 'var(--gradient-gold)' }}
                  />
                  <div
                    className="h-1 rounded-full"
                    style={{ width: '1rem', background: 'var(--border-gold)' }}
                  />
                </div>
              </div>

              {/* Paragraphs */}
              <div className="flex flex-col gap-5">
                <p
                  className="font-body leading-relaxed"
                  style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
                >
                  Fizmo FX Markets was established by a team of trading industry
                  veterans who saw a fundamental problem in retail trading: traders
                  were being underserved. High spreads, slow withdrawals, poor
                  execution, and opaque pricing were the norm.
                </p>
                <p
                  className="font-body leading-relaxed"
                  style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
                >
                  We built Fizmo FX around a different philosophy. Every feature —
                  from our ECN pricing to our instant USDT withdrawals — exists
                  because a real trader asked for it. We listen, we build, and we
                  continually raise the bar.
                </p>
                <p
                  className="font-body leading-relaxed"
                  style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
                >
                  Today, we serve traders across 50+ countries, offering 300+
                  instruments with the speed, transparency, and reliability that
                  modern traders demand. Our Dubai recognition as Best Deposit &amp;
                  Withdrawal Broker in 2024 reflects our commitment to that promise.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: Timeline ─────────────────────────────────── */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative">
              {/* Vertical dashed line */}
              <div
                className="absolute left-[1.875rem] top-8 bottom-8 w-px"
                style={{
                  background:
                    'repeating-linear-gradient(to bottom, var(--border-gold) 0, var(--border-gold) 6px, transparent 6px, transparent 14px)',
                }}
              />

              <div className="flex flex-col gap-10">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
                    className="flex items-start gap-6"
                  >
                    {/* Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-[3.75rem] h-[3.75rem] rounded-full flex items-center justify-center"
                        style={{
                          background: 'var(--bg-elevated)',
                          border: '2px solid var(--border-gold)',
                          boxShadow: '0 0 16px rgba(201,168,76,0.15)',
                        }}
                      >
                        <span
                          className="font-mono font-bold"
                          style={{ fontSize: '0.75rem', color: 'var(--gold-300)' }}
                        >
                          {milestone.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 rounded-[var(--radius-lg)] p-5"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div
                        className="font-mono font-bold mb-1"
                        style={{ fontSize: '1.375rem', color: 'var(--gold-500)', lineHeight: 1 }}
                      >
                        {milestone.year}
                      </div>
                      <h3
                        className="font-display font-semibold mb-2"
                        style={{ fontSize: '1.0625rem', color: 'var(--text-primary)' }}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className="font-body leading-relaxed"
                        style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
