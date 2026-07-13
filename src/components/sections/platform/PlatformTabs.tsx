import type { ReactNode } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Monitor, Smartphone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'

const MT5_DOWNLOAD_URL = 'https://www.metatrader5.com/en/download'
const WEB_TERMINAL_URL = 'https://my.fizmofxmarkets.com'
const APP_STORE_URL = 'https://apps.apple.com/us/app/metatrader-5/id413251709'
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5'

type TabId = 'desktop' | 'mobile' | 'web'

interface TabDef {
  id: TabId
  label: string
  icon: ReactNode
}

const tabDefs: TabDef[] = [
  { id: 'desktop', label: 'Desktop', icon: <Monitor className="w-4 h-4" /> },
  { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'web', label: 'Web Terminal', icon: <Globe className="w-4 h-4" /> },
]

const contentVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

interface FeatureListProps {
  items: string[]
}

function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="space-y-2.5 mb-8">
      {items.map((item) => (
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
  )
}

function DesktopContent() {
  return (
    <div>
      <h3 className="font-display font-bold text-[var(--text-primary)] text-2xl md:text-3xl mb-4">
        MetaTrader 5{' '}
        <span className="text-gradient-accent">Desktop</span>
      </h3>
      <p className="font-body text-[var(--text-secondary)] text-base leading-relaxed mb-8 max-w-2xl">
        The full-powered MetaTrader 5 desktop application delivers the complete
        professional trading experience. Access all features, indicators, and EA
        capabilities on Windows or macOS.
      </p>
      <FeatureList
        items={[
          'Full indicator library',
          'EA marketplace',
          'Multi-monitor support',
          'Custom scripts',
          'Offline strategy tester',
        ]}
      />
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="primary"
          size="md"
          href={MT5_DOWNLOAD_URL}
          external
          icon={<Monitor className="w-4 h-4" />}
          iconPosition="left"
        >
          Download for Windows
        </Button>
        <Button
          variant="outline"
          size="md"
          href={MT5_DOWNLOAD_URL}
          external
          icon={<Monitor className="w-4 h-4" />}
          iconPosition="left"
        >
          Download for macOS
        </Button>
      </div>
    </div>
  )
}

function MobileContent() {
  return (
    <div>
      <h3 className="font-display font-bold text-[var(--text-primary)] text-2xl md:text-3xl mb-4">
        MetaTrader 5{' '}
        <span className="text-gradient-accent">Mobile</span>
      </h3>
      <p className="font-body text-[var(--text-secondary)] text-base leading-relaxed mb-8 max-w-2xl">
        Trade confidently from your smartphone. The MT5 mobile app provides
        real-time quotes, interactive charts, and full order management from the
        palm of your hand.
      </p>
      <FeatureList
        items={[
          'Real-time price quotes',
          'Full charting tools',
          'Push notifications',
          'One-tap order execution',
          'Biometric login',
        ]}
      />
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="primary"
          size="md"
          href={APP_STORE_URL}
          external
          icon={<Smartphone className="w-4 h-4" />}
          iconPosition="left"
        >
          App Store
        </Button>
        <Button
          variant="outline"
          size="md"
          href={GOOGLE_PLAY_URL}
          external
          icon={<Smartphone className="w-4 h-4" />}
          iconPosition="left"
        >
          Google Play
        </Button>
      </div>
    </div>
  )
}

function WebContent() {
  return (
    <div>
      <h3 className="font-display font-bold text-[var(--text-primary)] text-2xl md:text-3xl mb-4">
        Web{' '}
        <span className="text-gradient-accent">Trading Terminal</span>
      </h3>
      <p className="font-body text-[var(--text-secondary)] text-base leading-relaxed mb-8 max-w-2xl">
        Trade directly from any modern web browser — no installation required.
        Full MT5 functionality accessible from any computer, anywhere in the
        world.
      </p>
      <FeatureList
        items={[
          'No download needed',
          'Works on any OS',
          'Full charting',
          'All order types',
          'Secure browser session',
        ]}
      />
      <Button
        variant="primary"
        size="md"
        href={WEB_TERMINAL_URL}
        external
        icon={<Globe className="w-4 h-4" />}
        iconPosition="left"
      >
        Open Web Terminal
      </Button>
    </div>
  )
}

export function PlatformTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('desktop')

  return (
    <section
      className="section-light-theme section-padding"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="Available On"
          title={
            <>
              Trade From{' '}
              <span className="text-gradient-accent">Any Device</span>
            </>
          }
          subtitle="One account, all platforms. Seamlessly switch between desktop, mobile, and web."
        />

        {/* Tab bar */}
        <div
          className="inline-flex rounded-[var(--radius-md)] p-1 mb-10 w-full sm:w-auto"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.08)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}
          role="tablist"
          aria-label="Platform options"
        >
          {tabDefs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`platform-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-2 flex-1 sm:flex-initial px-5 py-2.5 rounded-[10px] text-sm font-medium font-body transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)]"
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(16,185,129,0.18), rgba(16,185,129,0.08))'
                    : 'transparent',
                  color: isActive ? 'var(--text-accent)' : '#6B7280',
                  border: isActive
                    ? '1px solid var(--border-accent)'
                    : '1px solid transparent',
                  borderBottom: isActive ? '2px solid var(--border-accent)' : '1px solid transparent',
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        <div
          className="rounded-[var(--radius-xl)] p-8 md:p-12"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.07)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`platform-panel-${activeTab}`}
              role="tabpanel"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {activeTab === 'desktop' && <DesktopContent />}
              {activeTab === 'mobile' && <MobileContent />}
              {activeTab === 'web' && <WebContent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
