import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export function ContactHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.02) 40%, transparent 70%), var(--bg-primary)',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--border-accent) 50%, transparent 100%)',
        }}
      />

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)',
        }}
      />

      <div className="container-max relative z-10 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="font-mono text-xs font-medium tracking-[0.2em] uppercase mb-6 inline-flex items-center gap-2"
          style={{ color: 'var(--text-accent)' }}
        >
          <span className="w-6 h-px" style={{ background: 'var(--accent-500)' }} />
          Contact Us
          <span className="w-6 h-px" style={{ background: 'var(--accent-500)' }} />
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-display font-bold leading-tight mb-6"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            maxWidth: '48rem',
            margin: '0 auto 1.5rem',
          }}
        >
          We&apos;re Here When{' '}
          <span className="text-gradient-accent">You Need Us</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="font-body leading-relaxed mb-8"
          style={{
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            maxWidth: '40rem',
            margin: '0 auto 2rem',
          }}
        >
          Our dedicated support team is available 24 hours a day, 7 days a
          week. Reach us through any channel — we respond fast.
        </motion.p>

        {/* 24/7 badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-sm font-medium"
          style={{
            background: 'rgba(52,211,153,0.1)',
            border: '1px solid rgba(52,211,153,0.25)',
            color: 'var(--green-400)',
          }}
        >
          <Clock size={15} strokeWidth={2} />
          Support available 24 / 7 · Average response under 2 hours
        </motion.div>
      </div>
    </section>
  )
}
