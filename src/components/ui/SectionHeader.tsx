import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            'mb-3 text-xs font-mono font-medium tracking-[0.2em] uppercase text-[var(--text-accent)]',
            align === 'center' ? 'flex justify-center' : ''
          )}
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-[var(--accent-500)]" />
            {eyebrow}
            <span className="w-6 h-px bg-[var(--accent-500)]" />
          </span>
        </p>
      )}
      <h2
        className={clsx(
          'font-display font-bold text-[var(--text-primary)]',
          'text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight',
          'mb-4'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'text-[var(--text-secondary)] text-lg leading-relaxed font-body',
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
