import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { cryptoInstruments } from '@/data/marketsData'
import type { CryptoInstrument } from '@/types'

const REGISTER_URL = 'https://my.fizmofxmarkets.com/register'

const featureList: string[] = [
  '30+ crypto CFD pairs',
  '24/7 trading — never miss a move',
  'BTC, ETH, SOL, BNB, XRP, ADA, DOT and more',
  'Leverage up to 1:10 on major cryptos',
  'Long or short — profit in any market direction',
  'No wallet required — pure price speculation',
]

export function CryptoTab() {
  return (
    <div className="section-light-theme flex flex-col lg:flex-row gap-10 xl:gap-16">
      {/* Left — 40% */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-[40%] flex-shrink-0"
      >
        <h2 className="font-display font-bold text-[var(--text-primary)] text-2xl md:text-3xl mb-4 leading-tight">
          Cryptocurrency{' '}
          <span className="text-gradient-gold">CFDs</span>
        </h2>
        <p className="font-body text-[var(--text-secondary)] text-base leading-relaxed mb-8">
          Trade the world's leading digital assets as CFDs — no wallets, no
          exchanges, just pure price action 24/7.
        </p>

        <ul className="space-y-3 mb-10">
          {featureList.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(52,211,153,0.12)',
                  border: '1px solid rgba(52,211,153,0.3)',
                }}
              >
                <Check className="w-3 h-3" style={{ color: 'var(--green-400)' }} />
              </span>
              <span className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Button variant="primary" size="md" href={REGISTER_URL} external>
          Trade Crypto Now
        </Button>
      </motion.div>

      {/* Right — 60% */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:w-[60%] overflow-x-auto"
      >
        <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-subtle)] min-w-[480px]">
          <table className="light-table w-full border-collapse">
            <thead>
              <tr style={{ background: '#0D1120' }}>
                {['Symbol', 'Name', 'Leverage', 'Spread From', 'Trading Hours'].map(
                  (col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-left text-xs font-mono font-semibold tracking-wider border-b border-[var(--border-gold)]"
                      style={{ color: 'var(--gold-300)' }}
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {cryptoInstruments.map((row: CryptoInstrument, index: number) => (
                <tr
                  key={row.symbol}
                  className="transition-colors duration-150 hover:bg-[rgba(212,175,55,0.05)]"
                  style={{
                    background: index % 2 === 0 ? '#FFFFFF' : '#F8F6F1',
                  }}
                >
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span
                      className="font-mono font-bold text-sm"
                      style={{ color: '#8A6A1E' }}
                    >
                      {row.symbol}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span className="font-body text-sm text-[var(--text-secondary)]">
                      {row.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span className="font-mono text-sm text-[var(--text-primary)]">
                      {row.leverage}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span className="font-mono text-sm text-[var(--text-primary)]">
                      {row.spreadFrom}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-[var(--border-subtle)]">
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(52,211,153,0.1)',
                        color: 'var(--green-400)',
                        border: '1px solid rgba(52,211,153,0.25)',
                      }}
                    >
                      {row.tradingHours}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs font-body text-[var(--text-muted)] text-right">
          Showing {cryptoInstruments.length} of 30+ available crypto pairs
        </p>
      </motion.div>
    </div>
  )
}
