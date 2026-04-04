import { Fragment } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

interface BenefitItem {
  emoji: string
  title: string
  subtitle: string
}

const benefits: BenefitItem[] = [
  {
    emoji: '💎',
    title: 'Up to 80% Revenue Share',
    subtitle: 'Highest in the industry',
  },
  {
    emoji: '📊',
    title: 'Real-Time Dashboard',
    subtitle: 'Track referrals and earnings live',
  },
  {
    emoji: '🌍',
    title: 'Global Reach',
    subtitle: 'Clients from 50+ countries',
  },
]

export function AffiliateSection() {
  return (
    <section
      className="section-padding"
      style={{
        background: `
          radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%),
          var(--bg-secondary)
        `,
      }}
    >
      <div className="container-max">
        <ScrollReveal direction="up">
          <SectionHeader
            eyebrow="PARTNER PROGRAM"
            title={
              <>
                Earn Up To{' '}
                <span className="text-gradient-gold">80%</span>
                {' '}Revenue Share
              </>
            }
            subtitle="Join our industry-leading introducing broker and affiliate program. Fully customizable commission structures with real-time reporting and dedicated support."
            align="center"
          />
        </ScrollReveal>

        {/* Benefits row */}
        <ScrollReveal delay={0.15} direction="up">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
              flexWrap: 'wrap',
              gap: 0,
              marginBottom: '3rem',
            }}
          >
            {benefits.map((item, index) => (
              <Fragment key={item.title}>
                {index > 0 && (
                  <div
                    style={{
                      width: 1,
                      background: 'var(--border-subtle)',
                      alignSelf: 'stretch',
                      minHeight: 80,
                      flexShrink: 0,
                    }}
                  />
                )}
                <div
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem 3rem',
                    flex: '1 1 200px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2.25rem',
                      marginBottom: '0.625rem',
                      lineHeight: 1,
                    }}
                  >
                    {item.emoji}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {item.subtitle}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.25} direction="up">
          <div style={{ textAlign: 'center' }}>
            <Button
              variant="outline"
              size="lg"
              href="mailto:support@fizmofxmarkets.com"
            >
              Become a Partner
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
