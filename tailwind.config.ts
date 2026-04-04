import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary':     'var(--bg-primary)',
        'bg-secondary':   'var(--bg-secondary)',
        'bg-card':        'var(--bg-card)',
        'bg-elevated':    'var(--bg-elevated)',
        'gold-300':       'var(--gold-300)',
        'gold-400':       'var(--gold-400)',
        'gold-500':       'var(--gold-500)',
        'gold-600':       'var(--gold-600)',
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
        'text-gold':      'var(--text-gold)',
        'border-subtle':  'var(--border-subtle)',
        'border-gold':    'var(--border-gold)',
        'teal-500':       'var(--teal-500)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'ticker':     'ticker 40s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'shimmer':    'shimmer 3s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gradient-gold':     'linear-gradient(135deg, #C9A84C, #E8C25A)',
        'gradient-gold-dim': 'linear-gradient(135deg, #8A6A1E, #C9A84C)',
        'gradient-card':     'linear-gradient(135deg, #131829, #1C2340)',
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'gold':    '0 0 40px rgba(201,168,76,0.15), 0 0 80px rgba(201,168,76,0.08)',
        'gold-sm': '0 0 20px rgba(201,168,76,0.2)',
        'card':    '0 4px 24px rgba(0,0,0,0.4)',
        'glow':    '0 0 0 1px rgba(201,168,76,0.3), 0 8px 32px rgba(201,168,76,0.2)',
      },
    },
  },
  plugins: [],
}

export default config
