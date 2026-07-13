import { ShieldCheck, AlertTriangle } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface InfoRow {
  label: string
  value: string
}

const infoRows: InfoRow[] = [
  { label: 'Operating Under', value: 'Fortgate Offshore Investment and Legal Services Ltd.' },
  { label: 'Registration Number', value: '2024-00270' },
  {
    label: 'Registered Office',
    value:
      'Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia',
  },
  { label: 'Contact Email', value: 'support@fizmofxmarkets.com' },
  { label: 'Phone', value: '+44 7759 046727' },
]

export function RegulatorySection() {
  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container-max">
        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p
              className="font-mono text-xs font-medium tracking-[0.2em] uppercase mb-3 inline-flex items-center gap-2"
              style={{ color: 'var(--text-accent)' }}
            >
              <span className="w-6 h-px" style={{ background: 'var(--accent-500)' }} />
              COMPLIANCE
              <span className="w-6 h-px" style={{ background: 'var(--accent-500)' }} />
            </p>
            <h2
              className="font-display font-bold mb-4"
              style={{
                fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Regulatory &amp; Legal Information
            </h2>
            <p
              className="font-body leading-relaxed"
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                maxWidth: '36rem',
                margin: '0 auto',
              }}
            >
              Fizmo FX Markets operates under full compliance with international
              financial regulations.
            </p>
          </div>
        </ScrollReveal>

        {/* Official card */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              maxWidth: '48rem',
              margin: '0 auto 2rem',
              background: '#FFFFFF',
              border: '1px solid var(--border-accent)',
              boxShadow: '0 4px 24px rgba(16,185,129,0.08)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
            }}
          >
            {/* Shield icon */}
            <div
              className="flex items-center justify-center mx-auto mb-6"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid var(--border-accent)',
              }}
            >
              <ShieldCheck size={40} color="var(--accent-500)" strokeWidth={1.5} />
            </div>

            {/* Company name */}
            <h3
              className="font-display font-bold text-center mb-8"
              style={{
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Fizmo FX Markets Limited
            </h3>

            {/* Info rows */}
            <div className="flex flex-col gap-0">
              {infoRows.map((row, index) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 py-4"
                  style={{
                    borderTop:
                      index === 0 ? '1px solid var(--border-subtle)' : 'none',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    className="font-mono text-xs font-medium uppercase tracking-wide"
                    style={{ color: '#9CA3AF', paddingTop: '0.125rem' }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="font-body font-medium"
                    style={{ fontSize: '0.9375rem', color: '#0D1120' }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Risk warning card — warm yellow tint */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              maxWidth: '48rem',
              margin: '0 auto',
              background: '#ECFDF5',
              border: '1px solid rgba(5,150,105,0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <AlertTriangle size={22} color="var(--accent-500)" strokeWidth={1.5} />
              </div>
              <div>
                <h4
                  className="font-display font-semibold mb-2"
                  style={{ fontSize: '1rem', color: 'var(--text-accent)' }}
                >
                  Risk Warning
                </h4>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                >
                  Trading forex and CFDs carries a high level of risk. 74–89% of
                  retail investor accounts lose money when trading CFDs. You should
                  consider whether you can afford to take the high risk of losing
                  your money.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
