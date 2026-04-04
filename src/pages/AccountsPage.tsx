import { AccountsHero } from '@/components/sections/accounts/AccountsHero'
import { AccountsComparison } from '@/components/sections/accounts/AccountsComparison'
import { ComparisonTable } from '@/components/sections/accounts/ComparisonTable'
import { AccountFeatures } from '@/components/sections/accounts/AccountFeatures'

export function AccountsPage() {
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
