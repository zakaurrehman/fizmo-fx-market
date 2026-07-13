import type { ReactNode } from 'react'
import { UserPlus, Wallet, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowCard } from '@/components/ui/GlowCard'

interface StepCardProps {
  number: string
  icon: ReactNode
  title: string
  description: string
  extra?: ReactNode
  link?: ReactNode
  delay: number
}

function StepCard({
  number,
  icon,
  title,
  description,
  extra,
  link,
  delay,
}: StepCardProps) {
  return (
    <GlowCard padding="lg" delay={delay} className="relative overflow-hidden flex flex-col gap-5 h-full">
      {/* Big faded background number */}
      <span
        className="absolute top-4 right-4 font-display font-bold select-none pointer-events-none leading-none"
        style={{
          fontSize: '5rem',
          color: 'rgba(168,134,42,0.08)',
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Icon */}
      <div
        className="inline-flex items-center justify-center rounded-[var(--radius-md)] w-16 h-16 flex-shrink-0"
        style={{ background: 'rgba(168,134,42,0.1)' }}
      >
        <div style={{ color: 'var(--gold-500)', width: 32, height: 32 }}>
          {icon}
        </div>
      </div>

      {/* Step number label */}
      <span
        className="font-mono text-xs font-medium tracking-widest uppercase"
        style={{ color: 'var(--text-muted)' }}
      >
        Step {number}
      </span>

      {/* Title */}
      <h3
        className="font-display font-bold text-xl"
        style={{ color: 'var(--text-primary)', marginTop: '-0.5rem' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="font-body text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-secondary)' }}
      >
        {description}
      </p>

      {/* Extra content (pro tip, etc.) */}
      {extra}

      {/* Link */}
      {link && (
        <div className="pt-2 mt-auto" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          {link}
        </div>
      )}
    </GlowCard>
  )
}

export function HowItWorksSection() {
  return (
    <section
      className="section-padding section-light-theme"
      style={{ background: '#F8F6F1' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="GET STARTED"
          title={
            <>
              Three Steps to{' '}
              <span className="text-gradient-gold">Live Trading</span>
            </>
          }
          subtitle="Join thousands of traders worldwide. Opening your Fizmo FX account takes less than 2 minutes."
          align="center"
        />

        {/* Cards grid with connecting line on desktop */}
        <div className="relative">
          {/* Dashed connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[3.25rem] left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)]"
            style={{
              height: '1px',
              borderTop: '2px dashed rgba(201,168,76,0.18)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">

            {/* Card 1 */}
            <StepCard
              number="01"
              icon={<UserPlus size={32} />}
              title="Create Your Account"
              description="Complete our streamlined registration form with your basic personal details and verify your identity. Quick, secure, and entirely online — no branch visits or paper forms required."
              delay={0}
              link={
                <a
                  href="https://my.fizmofxmarkets.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-body text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-[var(--transition-fast)]"
                  style={{ color: '#8A6A1E' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold-500)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#8A6A1E'
                  }}
                >
                  Start Registration
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              }
            />

            {/* Card 2 */}
            <StepCard
              number="02"
              icon={<Wallet size={32} />}
              title="Fund Your Account"
              description="Deposit using USDT (recommended for instant processing), bank transfer, credit/debit card, or other major payment methods. Minimum deposit just $10 for Standard accounts."
              delay={0.1}
              extra={
                <div
                  className="flex items-start gap-3 rounded-[var(--radius-md)] p-4"
                  style={{
                    background: 'rgba(168,134,42,0.08)',
                    border: '1px solid rgba(168,134,42,0.2)',
                  }}
                >
                  <Lightbulb size={16} style={{ color: '#8A6A1E', flexShrink: 0, marginTop: '2px' }} />
                  <p
                    className="font-body text-xs leading-relaxed"
                    style={{ color: '#374151' }}
                  >
                    <strong>Pro Tip:</strong> Use USDT for the fastest deposits — credited in under 30 minutes
                  </p>
                </div>
              }
            />

            {/* Card 3 */}
            <StepCard
              number="03"
              icon={<TrendingUp size={32} />}
              title="Start Trading"
              description="Launch MetaTrader 5 on desktop, mobile, or web browser. Access 300+ instruments with professional charting tools, expert advisors, and real-time market signals."
              delay={0.2}
              link={
                <a
                  href="https://www.metatrader5.com/en/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-body text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-[var(--transition-fast)]"
                  style={{ color: '#8A6A1E' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold-500)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#8A6A1E'
                  }}
                >
                  Download MT5
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              }
            />

          </div>
        </div>
      </div>
    </section>
  )
}
