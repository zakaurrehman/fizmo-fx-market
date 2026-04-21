import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#050810', borderTop: '1px solid transparent' }}>
      {/* Gold gradient top border */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-500), transparent)' }}
      />

      <div className="container-max py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex mb-4">
              <Logo variant="dark" height={44} />
            </Link>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
              Your Edge in Global Markets. Trade smarter with ultra-tight spreads and instant execution.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FacebookIcon className="w-4 h-4" />, href: 'https://www.facebook.com/profile.php?id=61570808971485', label: 'Facebook' },
                { icon: <InstagramIcon className="w-4 h-4" />, href: 'https://www.instagram.com/fizmofx.market/', label: 'Instagram' },
                { icon: <TikTokIcon className="w-4 h-4" />, href: 'https://www.tiktok.com/@fizmo.fx.markets?lang=en-GB', label: 'TikTok' },
                { icon: <LinkedInIcon className="w-4 h-4" />, href: 'https://www.linkedin.com/in/fizmo-fx-markets-aa47b5403/?skipRedirect=true', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--gold-500)] hover:border-[var(--border-gold)] hover:scale-110 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-[var(--text-primary)] text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Accounts', href: '/accounts' },
                { label: 'Platform', href: '/platform' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Partner Program', href: '/contact' },
              ].map(item => (
                <li key={item.href + item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-gold)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-display font-semibold text-[var(--text-primary)] text-sm uppercase tracking-wider mb-4">
              Markets
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Forex', href: '/markets/forex' },
                { label: 'Cryptocurrencies', href: '/markets/crypto' },
                { label: 'Indices', href: '/markets/indices' },
                { label: 'Commodities', href: '/markets/commodities' },
                { label: 'All Markets', href: '/markets' },
              ].map(item => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-gold)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-display font-semibold text-[var(--text-primary)] text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                'Privacy Policy',
                'Terms & Conditions',
                'Risk Disclosure',
                'Deposit & Withdrawal Policy',
              ].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-gold)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-semibold text-[var(--text-primary)] text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@fizmofxmarkets.com"
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-gold)] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  support@fizmofxmarkets.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447759046727"
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-gold)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  +44 7759 046727
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447759046727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-gold)] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--border-subtle)] mb-8" />

        {/* Bottom */}
        <div className="space-y-4">
          <p className="text-[var(--text-muted)] text-xs text-center">
            © {year} Fizmo FX Markets. All Rights Reserved. | Fortgate Offshore Investment and Legal Services Ltd. | Reg. No. 2024-00270 | Rodney Bay, Saint Lucia
          </p>
          <p className="text-[var(--text-muted)] text-xs text-center leading-relaxed max-w-4xl mx-auto">
            Trading forex and CFDs involves significant risk of loss and may not be suitable for all investors. Leverage can work against you. Past performance is not indicative of future results. Please ensure you fully understand the risks and seek independent advice if necessary. Fizmo FX Markets does not offer services to residents of the USA, Australia, UAE, Japan, and other restricted jurisdictions.
          </p>
        </div>
      </div>
    </footer>
  )
}
