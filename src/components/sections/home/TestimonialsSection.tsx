import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowCard } from '@/components/ui/GlowCard'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { testimonialsData } from '@/data/testimonialsData'
import type { Testimonial } from '@/types'

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial
  delay: number
}) {
  return (
    <GlowCard delay={delay} padding="lg">
      <div style={{ position: 'relative' }}>
        {/* Large quote mark */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-0.5rem',
            left: '-0.25rem',
            fontSize: '6rem',
            lineHeight: 1,
            fontFamily: 'Georgia, serif',
            color: 'rgba(168,134,42,0.15)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          &ldquo;
        </span>

        {/* Stars */}
        <div
          style={{
            fontSize: '1rem',
            color: '#C9A84C',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
          }}
        >
          {'★'.repeat(testimonial.rating)}
        </div>

        {/* Quote */}
        <p
          style={{
            fontStyle: 'italic',
            color: '#374151',
            lineHeight: 1.75,
            fontSize: '0.9375rem',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {testimonial.quote}
        </p>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              color: '#0D1120',
              fontSize: '0.9375rem',
            }}
          >
            {testimonial.name}
          </span>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Badge variant="muted" size="sm">
              {testimonial.location}
            </Badge>
            <Badge variant="gold" size="sm">
              {testimonial.accountType}
            </Badge>
          </div>
        </div>
      </div>
    </GlowCard>
  )
}

export function TestimonialsSection() {
  return (
    <section
      className="section-padding section-light-theme"
      style={{ background: '#F8F6F1' }}
    >
      <div className="container-max">
        <ScrollReveal direction="up">
          <SectionHeader
            eyebrow="TRADER REVIEWS"
            title="Trusted by Traders Worldwide"
            subtitle="Real experiences from real traders across the globe."
            align="center"
          />
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
