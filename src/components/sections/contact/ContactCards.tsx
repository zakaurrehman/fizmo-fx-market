import type { ReactNode } from 'react'
import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { trackPixel } from '@/lib/metaPixel'

interface ContactCard {
  icon: ReactNode
  title: string
  contact: string
  description: string
  buttonLabel: string
  buttonHref: string
  buttonVariant: 'primary' | 'outline'
  external?: boolean
  featured?: boolean
}

const cards: ContactCard[] = [
  {
    icon: <Mail size={32} strokeWidth={1.5} />,
    title: 'Email Support',
    contact: 'support@fizmofxmarkets.com',
    description:
      'For account inquiries, documents, and detailed support. Response within 2 hours.',
    buttonLabel: 'Send Email',
    buttonHref: 'mailto:support@fizmofxmarkets.com',
    buttonVariant: 'outline',
    featured: false,
  },
  {
    icon: <MessageCircle size={32} strokeWidth={1.5} />,
    title: 'WhatsApp & Live Chat',
    contact: '+44 7759 046727',
    description:
      'Instant support via WhatsApp or our live chat system. Available 24/7 for urgent issues.',
    buttonLabel: 'Start Chat',
    buttonHref: 'https://wa.me/447759046727',
    buttonVariant: 'primary',
    external: true,
    featured: true,
  },
  {
    icon: <Phone size={32} strokeWidth={1.5} />,
    title: 'Phone Support',
    contact: '+44 7759 046727',
    description:
      'Speak directly with our trading support specialists. Available Monday–Friday 8AM–8PM GMT.',
    buttonLabel: 'Call Now',
    buttonHref: 'tel:+447759046727',
    buttonVariant: 'outline',
    featured: false,
  },
]

export function ContactCards() {
  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#F6F9F8' }}
    >
      <div className="container-max">

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.1} direction="up">
              <div
                className="rounded-[var(--radius-xl)] p-8 flex flex-col gap-5 h-full"
                style={{
                  background: '#FFFFFF',
                  boxShadow: card.featured
                    ? 'var(--shadow-glow)'
                    : '0 1px 4px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08)',
                  border: card.featured
                    ? '1px solid var(--border-accent)'
                    : '1px solid var(--border-subtle)',
                  position: 'relative',
                }}
              >
                {/* Featured label */}
                {card.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-mono text-xs font-medium tracking-wide"
                    style={{
                      background: 'var(--gradient-accent)',
                      color: '#080B14',
                    }}
                  >
                    Fastest Response
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-[var(--radius-lg)] flex items-center justify-center"
                  style={{
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid var(--border-accent)',
                    color: 'var(--accent-500)',
                  }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-semibold"
                  style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}
                >
                  {card.title}
                </h3>

                {/* Contact value */}
                <p
                  className="font-mono font-medium"
                  style={{ fontSize: '0.9375rem', color: 'var(--accent-300)' }}
                >
                  {card.contact}
                </p>

                {/* Description */}
                <p
                  className="font-body leading-relaxed flex-1"
                  style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}
                >
                  {card.description}
                </p>

                {/* Button */}
                <Button
                  variant={card.buttonVariant}
                  size="md"
                  href={card.buttonHref}
                  external={card.external}
                  onClick={() =>
                    trackPixel('Contact', { content_name: card.title })
                  }
                >
                  {card.buttonLabel}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Office info card */}
        <ScrollReveal delay={0.35} direction="up">
          <div
            className="rounded-[var(--radius-lg)] p-6"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-[var(--radius-md)] flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent-500)',
                }}
              >
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4
                  className="font-display font-semibold mb-1"
                  style={{ fontSize: '1rem', color: 'var(--text-primary)' }}
                >
                  Registered Office
                </h4>
                <p
                  className="font-body"
                  style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}
                >
                  <span
                    className="font-medium"
                    style={{ color: 'var(--text-primary)', display: 'block' }}
                  >
                    Fizmo FX Markets Limited
                  </span>
                  c/o Fortgate Offshore Investment and Legal Services Ltd.
                  <br />
                  Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay,
                  Gros-Islet, Saint Lucia
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
