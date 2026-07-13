import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart2,
  DollarSign,
  Zap,
  RefreshCw,
  Package,
  Infinity,
  Lock,
  Shield,
  Moon,
  TrendingUp,
} from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { accountsData } from '@/data/accountsData'
import type { AccountType } from '@/types'

const REGISTER_URL = 'https://my.fizmofxmarkets.com/register'

interface FeatureRow {
  icon: ReactNode
  label: string
  key: keyof Pick<
    AccountType,
    | 'spread'
    | 'commission'
    | 'leverage'
    | 'execution'
    | 'minLot'
    | 'maxPositions'
    | 'marginCall'
    | 'hedgedMargin'
    | 'instruments'
  >
}

const featureRows: FeatureRow[] = [
  { icon: <BarChart2 className="w-4 h-4" />, label: 'Spread', key: 'spread' },
  { icon: <DollarSign className="w-4 h-4" />, label: 'Commission', key: 'commission' },
  { icon: <Zap className="w-4 h-4" />, label: 'Leverage', key: 'leverage' },
  { icon: <RefreshCw className="w-4 h-4" />, label: 'Execution', key: 'execution' },
  { icon: <Package className="w-4 h-4" />, label: 'Min Lot', key: 'minLot' },
  { icon: <Infinity className="w-4 h-4" />, label: 'Max Positions', key: 'maxPositions' },
  { icon: <Lock className="w-4 h-4" />, label: 'Margin Call', key: 'marginCall' },
  { icon: <Shield className="w-4 h-4" />, label: 'Hedged Margin', key: 'hedgedMargin' },
  { icon: <TrendingUp className="w-4 h-4" />, label: 'Instruments', key: 'instruments' },
]

interface AccountCardProps {
  account: AccountType
  index: number
}

function AccountCard({ account, index }: AccountCardProps) {
  const isFeatured = account.featured === true

  return (
    <div className={`relative ${isFeatured ? 'scale-[1.02] z-10' : ''}`}>
      <GlowCard featured={isFeatured} padding="lg" delay={index * 0.1}>
        {/* MOST POPULAR badge — absolutely positioned */}
        {isFeatured && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <span
              className="inline-block px-4 py-1 text-xs font-mono font-bold tracking-[0.15em] uppercase rounded-full"
              style={{
                background: 'linear-gradient(135deg, #3B82F6, #93C5FD)',
                color: '#080B14',
              }}
            >
              Most Popular
            </span>
          </div>
        )}

        {/* Header */}
        <div className="mb-6 pt-2">
          <h3 className="font-display font-bold text-[var(--text-primary)] text-2xl mb-3">
            {account.name}
          </h3>
          {account.badge && (
            <Badge
              variant={isFeatured ? 'gold' : 'muted'}
              size="sm"
            >
              {account.badge}
            </Badge>
          )}
          <p className="mt-3 text-[var(--text-secondary)] text-sm font-body leading-relaxed">
            {account.description}
          </p>
        </div>

        {/* Min deposit */}
        <div className="mb-6 pb-6 border-b border-[var(--border-subtle)]">
          <p
            className="font-mono font-bold leading-none"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              color: 'var(--accent-300)',
            }}
          >
            {account.minDeposit}
          </p>
          <p className="text-[var(--text-muted)] text-xs font-body mt-1 uppercase tracking-wider">
            minimum deposit
          </p>
        </div>

        {/* Swap-Free row (boolean) */}
        <div className="mb-2 flex items-center justify-between gap-3 py-2 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2 text-[var(--text-secondary)]">
            <span className="text-[var(--text-muted)]">
              <Moon className="w-4 h-4" />
            </span>
            <span className="text-xs font-body">Swap-Free</span>
          </div>
          <span
            className="text-xs font-mono font-semibold"
            style={{ color: account.swapFree ? 'var(--green-400)' : 'var(--red-400)' }}
          >
            {account.swapFree ? 'Available' : 'No'}
          </span>
        </div>

        {/* Feature rows */}
        <div className="space-y-0">
          {featureRows.map((row, i) => {
            const value = account[row.key]
            return (
              <div
                key={row.key}
                className={`flex items-start justify-between gap-3 py-2 ${
                  i < featureRows.length - 1
                    ? 'border-b border-[var(--border-subtle)]'
                    : ''
                }`}
              >
                <div className="flex items-center gap-2 text-[var(--text-muted)] flex-shrink-0">
                  {row.icon}
                  <span className="text-xs font-body text-[var(--text-secondary)]">
                    {row.label}
                  </span>
                </div>
                <span className="text-xs font-mono text-[var(--text-primary)] text-right leading-relaxed">
                  {String(value)}
                </span>
              </div>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-8">
          <Button
            variant={isFeatured ? 'primary' : 'outline'}
            size="md"
            href={REGISTER_URL}
            external
            className="w-full justify-center"
          >
            Open {account.name} Account
          </Button>
          <p className="text-center text-xs text-[var(--text-muted)] mt-2 font-body">
            Best for: {account.bestFor}
          </p>
        </div>
      </GlowCard>
    </div>
  )
}

export function AccountsComparison() {
  return (
    <section
      id="accounts-comparison"
      className="section-light-theme section-padding"
      style={{ background: '#F7F9FC' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="Account Types"
          title={
            <>
              Choose Your{' '}
              <span className="text-gradient-accent">Trading Account</span>
            </>
          }
          subtitle="Three account types designed to match your trading style and experience level. All include Islamic swap-free options."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-start"
        >
          {accountsData.map((account, index) => (
            <AccountCard key={account.id} account={account} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
