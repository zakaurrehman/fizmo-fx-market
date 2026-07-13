import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({ children, className, hover = true, padding = 'md' }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-gradient-card border border-[var(--border-subtle)] rounded-[var(--radius-lg)]',
        'transition-all duration-[var(--transition-base)]',
        hover && 'hover:border-[var(--border-accent)] hover:shadow-glow hover:-translate-y-1',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
