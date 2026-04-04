import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Accounts', href: '/accounts' },
  {
    label: 'Markets',
    href: '/markets',
    dropdown: [
      { label: 'Forex', href: '/markets/forex', description: '60+ Currency Pairs' },
      { label: 'Cryptocurrencies', href: '/markets/crypto', description: '30+ Crypto CFDs' },
      { label: 'Indices', href: '/markets/indices', description: '15+ Global Indices' },
      { label: 'Commodities', href: '/markets/commodities', description: '20+ Commodities' },
    ],
  },
  { label: 'Platform', href: '/platform' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [marketsOpen, setMarketsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMarketsOpen(false)
  }, [location.pathname])

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || mobileOpen ? 'navbar-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1 shrink-0" onClick={() => setMobileOpen(false)}>
              <TrendingUp className="w-6 h-6 text-[var(--gold-500)]" />
              <span className="font-display font-bold text-xl text-[var(--text-primary)]">
                FIZMO
                <span className="text-[var(--gold-500)]"> FX</span>
              </span>
              <span className="hidden sm:block text-[10px] font-mono tracking-[0.15em] text-[var(--text-muted)] uppercase ml-1 mt-0.5 self-end">
                MARKETS
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <li key={link.href} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setMarketsOpen(true)}
                      onMouseLeave={() => setMarketsOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                          isActive(link.href)
                            ? 'text-[var(--text-gold)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${marketsOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown */}
                      {marketsOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] shadow-card overflow-hidden">
                            {link.dropdown.map(item => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="flex flex-col px-4 py-3 hover:bg-[var(--bg-elevated)] transition-colors border-b border-[var(--border-subtle)] last:border-0 group"
                              >
                                <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--text-gold)] transition-colors">
                                  {item.label}
                                </span>
                                {item.description && (
                                  <span className="text-xs text-[var(--text-muted)] mt-0.5">{item.description}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md block ${
                        isActive(link.href)
                          ? 'text-[var(--text-gold)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--gold-500)] rounded-full" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                href="https://my.fizmofxmarkets.com/login"
                external
              >
                Login
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="https://my.fizmofxmarkets.com/register"
                external
              >
                Open Account
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[var(--text-primary)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--border-subtle)]"
            style={{ background: 'var(--bg-secondary)' }}>
            <div className="container-max py-4 space-y-1">
              {navLinks.map(link => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setMarketsOpen(!marketsOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-[var(--radius-sm)]"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${marketsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {marketsOpen && (
                        <div className="pl-4 space-y-1">
                          {link.dropdown.map(item => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-gold)] rounded-[var(--radius-sm)]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block px-4 py-3 text-sm rounded-[var(--radius-sm)] ${
                        isActive(link.href)
                          ? 'text-[var(--text-gold)] bg-[rgba(201,168,76,0.08)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-3 flex flex-col gap-2 border-t border-[var(--border-subtle)]">
                <Button
                  variant="outline"
                  size="md"
                  href="https://my.fizmofxmarkets.com/login"
                  external
                  className="w-full justify-center"
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  href="https://my.fizmofxmarkets.com/register"
                  external
                  className="w-full justify-center"
                >
                  Open Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  )
}
