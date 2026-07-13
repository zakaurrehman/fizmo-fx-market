import { motion } from 'framer-motion'

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.09) 0%, rgba(59,130,246,0.03) 40%, transparent 70%), var(--bg-primary)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Decorative top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--border-accent) 50%, transparent 100%)',
        }}
      />

      {/* Background grid pattern */}
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
          <span
            className="w-6 h-px"
            style={{ background: 'var(--accent-500)' }}
          />
          About Fizmo FX Markets
          <span
            className="w-6 h-px"
            style={{ background: 'var(--accent-500)' }}
          />
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-display font-bold leading-tight mb-6"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            maxWidth: '52rem',
            margin: '0 auto 1.5rem',
          }}
        >
          Built for Traders.{' '}
          <span className="text-gradient-accent">Driven by Integrity.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="font-body leading-relaxed"
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '44rem',
            margin: '0 auto',
          }}
        >
          Fizmo FX Markets was founded with a single mission: give every trader
          access to the same institutional-grade conditions once reserved for
          hedge funds and banks.
        </motion.p>
      </div>
    </section>
  )
}
