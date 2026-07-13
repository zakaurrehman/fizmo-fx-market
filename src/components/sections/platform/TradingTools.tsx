import type { ReactNode } from 'react'
import { Bell, Calendar, Server, Users } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface ToolCard {
  icon: ReactNode
  title: string
  description: string
  badge?: string
}

const tools: ToolCard[] = [
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Trading Signals',
    description:
      'Professional signals delivered to MT5 in real-time. Entry, TP, and SL levels included for every signal.',
    badge: 'Free Access',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Economic Calendar',
    description:
      'Stay ahead of market-moving events. Full economic calendar integrated in MT5 with impact ratings.',
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'VPS Hosting',
    description:
      'Keep your EAs running 24/5 with ultra-low latency VPS hosting. Never miss a trade signal due to connection issues.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Copy Trading',
    description:
      'Automatically copy trades from verified strategy providers. Full transparency on historical performance.',
  },
]

export function TradingTools() {
  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#F7F9FC' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="Built-in Tools"
          title={
            <>
              Supercharge Your{' '}
              <span className="text-gradient-accent">Trading</span>
            </>
          }
          subtitle="Professional tools to give you an edge in any market condition."
        />

        {/* 1-col → 2-col md → 4-col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <ScrollReveal key={tool.title} delay={index * 0.08} direction="up">
              <GlowCard padding="lg" delay={0} className="h-full">
                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)]"
                    style={{
                      background: 'rgba(59,130,246,0.1)',
                      border: '1px solid var(--border-accent)',
                      color: 'var(--text-accent)',
                    }}
                  >
                    {tool.icon}
                  </div>
                  {tool.badge && (
                    <Badge variant="green" size="sm">
                      {tool.badge}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-[var(--text-primary)] text-lg mb-3">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                  {tool.description}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
