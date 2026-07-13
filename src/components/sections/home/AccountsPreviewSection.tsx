import { Link } from 'react-router-dom'
import { Check, Target, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowCard } from '@/components/ui/GlowCard'
import { Button } from '@/components/ui/Button'
import { accountsData } from '@/data/accountsData'
import type { AccountType } from '@/types'

interface FeatureRowProps {
  label: string
  value: string
}

function FeatureRow({ label, value }: FeatureRowProps) {
  return (
    <div className="flex items-start gap-3 py-2" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div
        className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(59,130,246,0.15)' }}
      >
        <Check size={10} style={{ color: 'var(--accent-500)' }} />
      </div>
      <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
        <span
          className="font-body text-xs"
          style={{ color: '#374151' }}
        >
          {label}
        </span>
        <span
          className="font-mono text-xs font-medium text-right"
          style={{ color: '#374151' }}
        >
          {value}
        </span>
      </div>
    </div>
  )
}

interface AccountCardProps {
  account: AccountType
  index: number
}

function AccountCard({ account, index }: AccountCardProps) {
  const isFeautred = account.featured === true

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      style={{ transform: isFeautred ? 'scale(1.02)' : undefined }}
      className={isFeautred ? 'z-10 relative' : 'relative'}
    >
      <GlowCard
        featured={isFeautred}
        padding="lg"
        className="flex flex-col gap-5 h-full"
      >
        {/* MOST POPULAR badge */}
        {isFeautred && (
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full font-mono text-xs font-bold tracking-wider uppercase whitespace-nowrap"
            style={{
              background: 'var(--gradient-accent)',
              color: '#080B14',
              boxShadow: '0 0 20px rgba(59,130,246,0.4)',
            }}
          >
            MOST POPULAR
          </div>
        )}

        {/* Min deposit */}
        <div>
          <p
            className="font-mono text-xs font-medium uppercase tracking-widest mb-1"
            style={{ color: 'var(--text-muted)' }}
          >
            Min. Deposit
          </p>
          <span
            className="font-mono font-bold"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              color: 'var(--accent-500)',
              lineHeight: 1,
            }}
          >
            {account.minDeposit}
          </span>
        </div>

        {/* Account name */}
        <div>
          <h3
            className="font-display font-bold text-2xl mb-1"
            style={{ color: 'var(--text-primary)' }}
          >
            {account.name}
          </h3>
          {account.badge && (
            <span
              className="font-mono text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{
                color: isFeautred ? '#080B14' : 'var(--accent-500)',
                background: isFeautred
                  ? 'var(--gradient-accent)'
                  : 'rgba(59,130,246,0.1)',
                border: isFeautred ? 'none' : '1px solid rgba(59,130,246,0.2)',
              }}
            >
              {account.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {account.description}
        </p>

        {/* Best for */}
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-[var(--radius-sm)]"
          style={{
            background: 'rgba(59,130,246,0.08)',
            border: '1px solid rgba(59,130,246,0.18)',
          }}
        >
          <Target size={14} style={{ color: '#1D4ED8', flexShrink: 0 }} />
          <span
            className="font-body text-xs font-medium"
            style={{ color: '#1D4ED8' }}
          >
            Best for: {account.bestFor}
          </span>
        </div>

        {/* Feature list */}
        <div className="flex flex-col flex-1">
          <FeatureRow label="Spread" value={account.spread} />
          <FeatureRow label="Commission" value={account.commission} />
          <FeatureRow label="Leverage" value={account.leverage} />
          <FeatureRow label="Execution" value={account.execution} />
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Button
            variant={isFeautred ? 'primary' : 'outline'}
            size="md"
            href="https://my.fizmofxmarkets.com/register"
            external
            className="w-full justify-center"
            icon={<ArrowRight size={16} />}
          >
            Open {account.name} Account
          </Button>
        </div>
      </GlowCard>
    </motion.div>
  )
}

export function AccountsPreviewSection() {
  return (
    <section
      className="section-padding section-light-theme"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="ACCOUNT TYPES"
          title="Choose the Account That Fits Your Strategy"
          subtitle="Whether you're starting with $10 or managing significant capital, we have the right account for your trading style."
          align="center"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10">
          {accountsData.map((account, i) => (
            <AccountCard key={account.id} account={account} index={i} />
          ))}
        </div>

        {/* Compare all link */}
        <div className="text-center">
          <Link
            to="/accounts"
            className="group link-accent font-body text-sm font-semibold inline-flex items-center gap-1.5"
          >
            Compare All Account Features
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
