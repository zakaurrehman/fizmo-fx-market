import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface StaticStatProps {
  value: string
  label: string
  sublabel: string
}

function StaticStat({ value, label, sublabel }: StaticStatProps) {
  return (
    <div className="text-center">
      <div
        className="font-mono font-bold leading-none"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--gold-500)',
        }}
      >
        {value}
      </div>
      <p
        className="mt-2 font-display font-semibold text-sm uppercase tracking-wider"
        style={{ color: 'var(--text-primary)' }}
      >
        {label}
      </p>
      <p
        className="mt-1 font-body text-xs"
        style={{ color: 'var(--text-muted)' }}
      >
        {sublabel}
      </p>
    </div>
  )
}

export function StatsBar() {
  return (
    <section
      className="py-16"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">

          {/* Stat 1: Minimum Deposit */}
          <ScrollReveal delay={0} direction="up">
            <div className="relative flex items-stretch">
              <div className="flex-1">
                <AnimatedCounter
                  target={10}
                  prefix="$"
                  label="Minimum Deposit"
                  sublabel="Start trading from just $10"
                />
              </div>
              {/* Vertical divider - right side */}
              <div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px"
                style={{
                  height: '60%',
                  background:
                    'linear-gradient(180deg, transparent 0%, var(--border-gold) 50%, transparent 100%)',
                }}
              />
            </div>
          </ScrollReveal>

          {/* Stat 2: Trading Instruments */}
          <ScrollReveal delay={0.1} direction="up">
            <div className="relative flex items-stretch">
              <div className="flex-1">
                <AnimatedCounter
                  target={300}
                  suffix="+"
                  label="Trading Instruments"
                  sublabel="Forex, Crypto, Indices, Commodities"
                />
              </div>
              <div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px"
                style={{
                  height: '60%',
                  background:
                    'linear-gradient(180deg, transparent 0%, var(--border-gold) 50%, transparent 100%)',
                }}
              />
            </div>
          </ScrollReveal>

          {/* Stat 3: Maximum Leverage (static) */}
          <ScrollReveal delay={0.2} direction="up">
            <div className="relative flex items-stretch">
              <div className="flex-1">
                <StaticStat
                  value="1:2000"
                  label="Maximum Leverage"
                  sublabel="Available on all account types"
                />
              </div>
              <div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px"
                style={{
                  height: '60%',
                  background:
                    'linear-gradient(180deg, transparent 0%, var(--border-gold) 50%, transparent 100%)',
                }}
              />
            </div>
          </ScrollReveal>

          {/* Stat 4: Crypto Withdrawal (static) */}
          <ScrollReveal delay={0.3} direction="up">
            <StaticStat
              value="30 min"
              label="Crypto Withdrawal"
              sublabel="USDT withdrawals processed fast"
            />
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
