import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import type { ButtonVariant, ButtonSize } from '@/types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-gold text-[#080B14] font-semibold hover:shadow-gold-sm hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-[var(--gold-500)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]',
  outline:
    'bg-transparent border border-[var(--border-gold)] text-[var(--text-gold)] hover:bg-[var(--gold-500)] hover:text-[#080B14] hover:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]',
  ghost:
    'bg-transparent text-[var(--text-gold)] hover:bg-[rgba(201,168,76,0.08)] focus:ring-2 focus:ring-[var(--gold-500)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]',
  danger:
    'bg-[var(--red-400)] text-white hover:bg-red-500 hover:-translate-y-0.5 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-[var(--radius-sm)]',
  md: 'px-6 py-2.5 text-base rounded-[var(--radius-md)]',
  lg: 'px-8 py-3.5 text-lg rounded-[var(--radius-md)]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  loading,
  icon,
  iconPosition = 'right',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 font-body font-medium',
    'transition-all duration-[var(--transition-base)] cursor-pointer select-none',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  const content = (
    <>
      {loading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {icon && iconPosition === 'left' && !loading && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && !loading && <span>{icon}</span>}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  )
}
