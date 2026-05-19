import type { ReactNode } from 'react'
import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { trackPixel } from '@/lib/metaPixel'
import { HomePage } from '@/pages/HomePage'
import { AccountsPage } from '@/pages/AccountsPage'
import { MarketsPage } from '@/pages/MarketsPage'
import { PlatformPage } from '@/pages/PlatformPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

const pageTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

function PageWrapper({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

// Pages worth a Meta Pixel ViewContent (high-intent broker pages used for ad
// optimization / retargeting). Longest paths first so /markets/forex wins over
// /markets. Other routes only get a PageView.
const VIEW_CONTENT: ReadonlyArray<readonly [string, string, string]> = [
  ['/markets/forex', 'Forex Market', 'Markets'],
  ['/markets/crypto', 'Cryptocurrency Market', 'Markets'],
  ['/markets/indices', 'Indices Market', 'Markets'],
  ['/markets/commodities', 'Commodities Market', 'Markets'],
  ['/markets', 'Markets Overview', 'Markets'],
  ['/accounts', 'Trading Accounts', 'Accounts'],
  ['/platform', 'Trading Platform', 'Platform'],
]

function ScrollToTop(): null {
  const { pathname } = useLocation()
  const initialLoad = useRef(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })

    // The snippet in index.html already fires PageView for the initial load;
    // only track PageView for subsequent client-side route changes to avoid
    // double-counting the first page.
    if (initialLoad.current) {
      initialLoad.current = false
    } else {
      trackPixel('PageView')
    }

    const match = VIEW_CONTENT.find(([path]) => pathname.startsWith(path))
    if (match) {
      trackPixel('ViewContent', {
        content_name: match[1],
        content_category: match[2],
      })
    }
  }, [pathname])

  return null
}

export default function App(): React.ReactElement {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <HomePage />
                </PageWrapper>
              }
            />
            <Route
              path="/accounts"
              element={
                <PageWrapper>
                  <AccountsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/markets"
              element={
                <PageWrapper>
                  <MarketsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/markets/forex"
              element={
                <PageWrapper>
                  <MarketsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/markets/crypto"
              element={
                <PageWrapper>
                  <MarketsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/markets/indices"
              element={
                <PageWrapper>
                  <MarketsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/markets/commodities"
              element={
                <PageWrapper>
                  <MarketsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/platform"
              element={
                <PageWrapper>
                  <PlatformPage />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <AboutPage />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <ContactPage />
                </PageWrapper>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}
