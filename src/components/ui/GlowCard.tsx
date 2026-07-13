import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface GlowCardProps {
  children: ReactNode
  className?: string
  featured?: boolean
  padding?: 'sm' | 'md' | 'lg'
  delay?: number
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function GlowCard({
  children,
  className,
  featured = false,
  padding = 'md',
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className={clsx(
        'relative rounded-[var(--radius-lg)] transition-all duration-300',
        'bg-gradient-card',
        featured
          ? 'border-2 border-[var(--border-active)] shadow-glow'
          : 'border border-[var(--border-subtle)] hover:border-[var(--border-accent)] hover:shadow-glow',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </motion.div>
  )
}
