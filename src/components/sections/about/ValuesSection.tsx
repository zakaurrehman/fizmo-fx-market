import type { ReactNode } from 'react'
import { Eye, Cpu, Users, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowCard } from '@/components/ui/GlowCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface ValueItem {
  icon: ReactNode
  title: string
  description: string
}

const values: ValueItem[] = [
  {
    icon: <Eye size={28} strokeWidth={1.5} />,
    title: 'Transparency First',
    description:
      'We publish our execution statistics, slippage data, and pricing models publicly. You always know exactly what you\'re paying and why. No hidden fees, no fine-print surprises.',
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: 'Technology-Driven',
    description:
      'Our infrastructure is built on co-located servers with sub-millisecond execution paths. We invest continuously in technology because milliseconds define profitable trading.',
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: 'Trader-Centric',
    description:
      'Every product decision starts with one question: does this make trading better for our clients? From account minimums to withdrawal policies, traders come first.',
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: 'Uncompromising Security',
    description:
      'Client funds are held in segregated bank accounts, entirely separate from company operating capital. Your funds are protected regardless of company performance.',
  },
]

export function ValuesSection() {
  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#F7F9FC' }}
    >
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            eyebrow="OUR VALUES"
            title="What Drives Everything We Do"
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <GlowCard key={value.title} delay={index * 0.1} padding="lg">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent-500)',
                }}
              >
                {value.icon}
              </div>

              {/* Title */}
              <h3
                className="font-display font-semibold mb-3"
                style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}
              >
                {value.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
