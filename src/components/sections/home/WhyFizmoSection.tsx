import type { ReactNode } from 'react'
import {
  Zap,
  Activity,
  TrendingUp,
  Shield,
  Headphones,
  Bell,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface FeatureItem {
  icon: ReactNode
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: <Zap size={28} />,
    title: 'Instant Withdrawals',
    description:
      'Over 95% of withdrawal requests are processed automatically. USDT withdrawals credited in under 30 minutes. No manual delays, no hidden holds — your money, on your schedule.',
  },
  {
    icon: <Activity size={28} />,
    title: 'Spreads From 0.0 Pips',
    description:
      'Our ECN accounts deliver raw interbank pricing with spreads starting at 0.0 pips on major pairs. Transparent pricing means you always know your true trading cost.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: '1:500 Leverage',
    description:
      'Amplify your market exposure with leverage up to 1:500 available across all account types. Control larger positions while maintaining precise risk management.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Negative Balance Protection',
    description:
      'Your account balance can never go below zero. Even in the most volatile market conditions, your maximum risk is always limited to your deposited capital.',
  },
  {
    icon: <Headphones size={28} />,
    title: '24/7 Support',
    description:
      'Our multilingual support team is available around the clock via live chat, email, and WhatsApp. Real people, real responses — not automated chatbots.',
  },
  {
    icon: <Bell size={28} />,
    title: 'Free Trading Signals',
    description:
      'Access professional-grade trading signals 24/7 at zero cost. Expert market analysis and actionable trade ideas delivered directly to your MT5 terminal.',
  },
]

interface FeatureCardProps {
  feature: FeatureItem
  delay: number
}

function FeatureCard({ feature, delay }: FeatureCardProps) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <div
        className="group flex flex-col gap-5 p-6 rounded-[var(--radius-lg)] h-full transition-all duration-[var(--transition-base)] cursor-default"
        style={{
          background: 'var(--gradient-card)',
          border: '1px solid var(--border-subtle)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.borderColor = 'var(--border-gold)'
          el.style.boxShadow = 'var(--shadow-glow)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.borderColor = 'var(--border-subtle)'
          el.style.boxShadow = 'none'
        }}
      >
        {/* Icon wrapper */}
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-[var(--radius-md)] flex-shrink-0 transition-colors duration-[var(--transition-base)]"
          style={{
            background: 'rgba(201,168,76,0.1)',
            color: 'var(--gold-500)',
          }}
        >
          {feature.icon}
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-lg leading-snug"
          style={{ color: 'var(--text-primary)' }}
        >
          {feature.title}
        </h3>

        {/* Description */}
        <p
          className="font-body text-sm leading-relaxed flex-1"
          style={{ color: 'var(--text-secondary)' }}
        >
          {feature.description}
        </p>
      </div>
    </ScrollReveal>
  )
}

export function WhyFizmoSection() {
  return (
    <section
      className="section-padding relative section-light-theme"
      style={{ background: '#F8F6F1' }}
    >
      {/* Dot grid overlay */}
      <div
        className="bg-dot-grid absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 1 }}
      />

      <div className="container-max relative z-10">
        <SectionHeader
          eyebrow="OUR EDGE"
          title={
            <>
              Why{' '}
              <span className="text-gradient-gold">50,000+</span>
              {' '}Traders Choose Fizmo FX
            </>
          }
          subtitle="We've built our platform around what traders actually need — speed, transparency, and uncompromising execution quality."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
