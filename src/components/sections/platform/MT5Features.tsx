import type { ReactNode } from 'react'
import {
  BarChart2,
  Cpu,
  Zap,
  Smartphone,
  ListOrdered,
  Layers,
  Newspaper,
  Users,
} from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface FeatureCard {
  icon: ReactNode
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Advanced Charting',
    description:
      '21 timeframes, 80+ technical indicators, 44 analytical objects. Multi-chart layouts with synchronized crosshair.',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Expert Advisors',
    description:
      'Full algorithmic trading support. Run automated strategies 24/5 without manual intervention.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'One-Click Trading',
    description:
      'Execute trades instantly from the chart with a single click. No confirmation screens to slow you down.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'All Devices',
    description:
      'Seamless experience across Windows, macOS, iOS, Android and web browser. Your setup, anywhere.',
  },
  {
    icon: <ListOrdered className="w-6 h-6" />,
    title: '6 Pending Order Types',
    description:
      'Market, Limit, Stop, Stop-Limit, Buy Stop Limit, Sell Stop Limit for precise strategy execution.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Depth of Market (DOM)',
    description:
      'Full market depth display showing available liquidity at each price level.',
  },
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: 'Built-in News & Calendar',
    description:
      'Live economic news feed and economic calendar integrated directly into the platform.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Copy Trading',
    description:
      'Follow and automatically replicate the strategies of verified profitable traders.',
  },
]

export function MT5Features() {
  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#F8F6F1' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="Platform Features"
          title={
            <>
              Everything You Need to{' '}
              <span className="text-gradient-gold">Trade Like a Professional</span>
            </>
          }
          subtitle="The most feature-rich retail trading terminal available, trusted by millions worldwide."
        />

        {/* 4x2 grid: 2-col sm, 4-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.07} direction="up">
              <GlowCard padding="md" delay={0} className="h-full">
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-[var(--radius-md)] mb-4"
                  style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid var(--border-gold)',
                    color: 'var(--text-gold)',
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-[var(--text-primary)] text-base mb-2 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
