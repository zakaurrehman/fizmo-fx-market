import { motion } from 'framer-motion'

export function BottomCTABanner() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 0',
        background:
          'linear-gradient(135deg, #8A6A1E 0%, #C9A84C 50%, #8A6A1E 100%)',
      }}
    >
      {/* Shimmer overlay */}
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundPosition: ['200% center', '-200% center'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
          backgroundSize: '300% 100%',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="container-max"
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#080B14',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
          }}
        >
          Ready to Start Trading?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          style={{
            fontSize: '1.125rem',
            color: 'rgba(8, 11, 20, 0.7)',
            marginBottom: '2.5rem',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Join 50,000+ traders. Open your account in 2 minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Live Account button */}
          <motion.a
            href="https://my.fizmofxmarkets.com/register"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#080B14',
              color: '#FFFFFF',
              border: '2px solid #080B14',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 2.5rem',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              minWidth: '12rem',
              cursor: 'pointer',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Open Live Account
          </motion.a>

          {/* Demo Account button */}
          <motion.a
            href="https://my.fizmofxmarkets.com/register"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              color: '#FFFFFF',
              border: '2px solid #FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 2.5rem',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              minWidth: '12rem',
              cursor: 'pointer',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Try Demo Account
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
