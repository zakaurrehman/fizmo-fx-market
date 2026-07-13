import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ForexTab } from '@/components/sections/markets/ForexTab'
import { CryptoTab } from '@/components/sections/markets/CryptoTab'
import { IndicesTab } from '@/components/sections/markets/IndicesTab'
import { CommoditiesTab } from '@/components/sections/markets/CommoditiesTab'

type TabId = 'forex' | 'crypto' | 'indices' | 'commodities'

interface Tab {
  id: TabId
  label: string
}

const tabs: Tab[] = [
  { id: 'forex', label: 'Forex' },
  { id: 'crypto', label: 'Cryptocurrencies' },
  { id: 'indices', label: 'Indices' },
  { id: 'commodities', label: 'Commodities' },
]

function getTabFromPath(pathname: string): TabId | null {
  if (pathname.includes('/forex')) return 'forex'
  if (pathname.includes('/crypto')) return 'crypto'
  if (pathname.includes('/indices')) return 'indices'
  if (pathname.includes('/commodities')) return 'commodities'
  return null
}

const tabContentVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export function MarketsTabs() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<TabId>('forex')

  // Sync from URL path on mount and path changes
  useEffect(() => {
    const fromPath = getTabFromPath(location.pathname)
    if (fromPath) {
      setActiveTab(fromPath)
    }
  }, [location.pathname])

  return (
    <section id="markets-tabs" className="section-light-theme" style={{ background: '#FFFFFF' }}>
      {/* Sticky tab bar */}
      <div
        className="sticky z-30 border-b"
        style={{
          top: '120px',
          background: '#FFFFFF',
          borderBottomColor: 'rgba(0,0,0,0.08)',
        }}
      >
        <div className="container-max">
          <div
            className="flex items-stretch overflow-x-auto scrollbar-none"
            role="tablist"
            aria-label="Market categories"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex-shrink-0 px-6 py-4 text-sm font-medium font-body transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  style={{
                    color: isActive
                      ? '#047857'
                      : '#6B7280',
                    borderBottom: isActive
                      ? '2px solid var(--accent-500)'
                      : '2px solid transparent',
                    marginBottom: '-1px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      ;(e.currentTarget as HTMLButtonElement).style.color = '#0D1120'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      ;(e.currentTarget as HTMLButtonElement).style.color = '#6B7280'
                    }
                  }}
                >
                  {tab.label}

                  {/* Active indicator line for transitions */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-[-1px] left-0 right-0 h-0.5"
                      style={{ background: 'var(--accent-500)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="section-padding">
        <div className="container-max">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`tabpanel-${activeTab}`}
              role="tabpanel"
              aria-label={tabs.find((t) => t.id === activeTab)?.label}
              variants={tabContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {activeTab === 'forex' && <ForexTab />}
              {activeTab === 'crypto' && <CryptoTab />}
              {activeTab === 'indices' && <IndicesTab />}
              {activeTab === 'commodities' && <CommoditiesTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
