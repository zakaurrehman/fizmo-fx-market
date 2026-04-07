import type { ReactNode } from 'react'
import { Moon, Shield, DollarSign, Zap, Sliders, Monitor } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

const REGISTER_URL = 'https://my.fizmofxmarkets.com/register'
const WHATSAPP_URL = 'https://wa.me/447759046727'

interface FeatureItem {
  icon: ReactNode
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: <Moon className="w-6 h-6" />,
    title: 'Islamic Swap-Free',
    description:
      'Available on all account types for qualifying clients. Apply through your client portal after account verification.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Negative Balance Protection',
    description:
      "Your account balance can never go below zero. Even in highly volatile conditions, you'll never owe money to Fizmo FX.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Commission-Free Options',
    description:
      'Standard and Pro accounts feature zero commission trading. Pay only the spread — transparent, predictable trading costs.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Execution',
    description:
      'Pro account offers instant execution on Forex, Metals, Indices, and Stocks. No re-quotes, no slippage on normal market conditions.',
  },
  {
    icon: <Sliders className="w-6 h-6" />,
    title: 'Flexible Leverage',
    description:
      'Adjust leverage per your trading strategy. Reduce risk by lowering leverage, or maximize exposure up to 1:500 where permitted.',
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'All Platforms Supported',
    description:
      'Trade on MT5 desktop (Windows/macOS), mobile app (iOS/Android), or web browser. One account, all platforms.',
  },
]

export function AccountFeatures() {
  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#F8F6F1' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="Included with Every Account"
          title={
            <>
              All Accounts{' '}
              <span className="text-gradient-gold">Include</span>
            </>
          }
          subtitle="Every Fizmo FX account comes with these features as standard."
        />

        {/* Feature cards — 1 col → 2 col md → 3 col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.08} direction="up">
              <GlowCard padding="lg" delay={0}>
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] mb-5"
                  style={{
                    background: 'rgba(201,168,76,0.12)',
                    border: '1px solid var(--border-gold)',
                    color: 'var(--text-gold)',
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-[var(--text-primary)] text-lg mb-3">
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

        {/* Bottom CTA — white card with gold border on light bg */}
        <ScrollReveal direction="up" delay={0.3}>
          <div
            className="rounded-[var(--radius-xl)] p-8 md:p-12 text-center"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-gold)',
              boxShadow: '0 4px 24px rgba(201,168,76,0.08)',
            }}
          >
            <h3 className="font-display font-bold text-[var(--text-primary)] text-xl md:text-2xl mb-3">
              Not sure which account is right for you?
            </h3>
            <p className="font-body text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
              Our support team is available 24/7 to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" href={WHATSAPP_URL} external>
                Chat with Support
              </Button>
              <Button variant="primary" size="lg" href={REGISTER_URL} external>
                Open Account
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
