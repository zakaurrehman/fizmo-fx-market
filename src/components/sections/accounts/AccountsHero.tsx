import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const REGISTER_URL = 'https://my.fizmofxmarkets.com/register'

function scrollToComparison() {
  const el = document.getElementById('accounts-comparison')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function AccountsHero() {
  return (
    <section
      className="relative flex items-center justify-center py-20 overflow-hidden"
      style={{
        minHeight: '50vh',
        background:
          'radial-gradient(ellipse at 60% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), #080B14',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-max relative z-10 text-center px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex items-center justify-center gap-2 text-sm font-body"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="text-[var(--text-secondary)] hover:text-[var(--text-accent)] transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-[var(--text-muted)]">/</span>
          <span className="text-[var(--text-accent)] font-medium">Accounts</span>
        </motion.nav>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-[var(--text-primary)] mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}
        >
          Trading Accounts Built for{' '}
          <span className="text-gradient-accent">Every Level</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Commission-free options for beginners, raw ECN pricing for
          professionals. Find your perfect fit.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href={REGISTER_URL} external>
            Open Account
          </Button>
          <button
            onClick={scrollToComparison}
            className="inline-flex items-center justify-center px-8 py-3.5 text-lg rounded-[var(--radius-md)] bg-transparent border border-[var(--border-accent)] text-[var(--text-accent)] hover:bg-[var(--accent-500)] hover:text-[#080B14] transition-all duration-[var(--transition-base)] cursor-pointer font-body font-medium"
          >
            Compare Accounts
          </button>
        </motion.div>
      </div>
    </section>
  )
}
