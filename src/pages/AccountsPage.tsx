import { AccountsHero } from '@/components/sections/accounts/AccountsHero'
import { AccountsComparison } from '@/components/sections/accounts/AccountsComparison'
import { ComparisonTable } from '@/components/sections/accounts/ComparisonTable'
import { AccountFeatures } from '@/components/sections/accounts/AccountFeatures'
import useMeta from '@/hooks/useMeta'
import { seo, globalKeywords } from '@/data/seoData'

export function AccountsPage() {
  useMeta({ ...seo.accounts, keywords: seo.accounts.keywords || globalKeywords })
  return (
    <>
      <AccountsHero />
      <div id="accounts-comparison">
        <AccountsComparison />
      </div>
      <ComparisonTable />
      <AccountFeatures />
    </>
  )
}
