import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface BadgeProps {
  children: ReactNode
  variant?: 'gold' | 'teal' | 'green' | 'red' | 'muted' | 'outline'
  size?: 'sm' | 'md'
  className?: string
}

const variantClasses = {
  gold:    'bg-[rgba(16,185,129,0.15)] text-[var(--accent-300)] border border-[var(--border-accent)]',
  teal:    'bg-[rgba(20,184,166,0.15)] text-[var(--teal-400)] border border-[rgba(20,184,166,0.3)]',
  green:   'bg-[rgba(52,211,153,0.15)] text-[var(--green-400)] border border-[rgba(52,211,153,0.3)]',
  red:     'bg-[rgba(248,113,113,0.15)] text-[var(--red-400)] border border-[rgba(248,113,113,0.3)]',
  muted:   'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]',
  outline: 'bg-transparent text-[var(--text-secondary)] border border-[var(--border-subtle)]',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export function Badge({ children, variant = 'gold', size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 font-mono rounded-full font-medium tracking-wide uppercase',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  )
}
