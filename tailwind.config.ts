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
        'accent-300':       'var(--accent-300)',
        'accent-400':       'var(--accent-400)',
        'accent-500':       'var(--accent-500)',
        'accent-600':       'var(--accent-600)',
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
        'text-accent':      'var(--text-accent)',
        'border-subtle':  'var(--border-subtle)',
        'border-accent':    'var(--border-accent)',
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
        'pulse-accent': 'pulse-accent 2s ease-in-out infinite',
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
        'pulse-accent': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gradient-accent':     'linear-gradient(135deg, #3B82F6, #93C5FD)',
        'gradient-accent-dim': 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
        'gradient-card':     'var(--gradient-card)',
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'accent':    '0 0 40px rgba(59,130,246,0.15), 0 0 80px rgba(59,130,246,0.08)',
        'accent-sm': '0 0 20px rgba(59,130,246,0.2)',
        'card':    '0 4px 24px rgba(0,0,0,0.4)',
        'glow':    '0 0 0 1px rgba(59,130,246,0.3), 0 8px 32px rgba(59,130,246,0.2)',
      },
    },
  },
  plugins: [],
}

export default config
