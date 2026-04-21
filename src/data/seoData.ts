const seo = {
  home: {
    title: 'Fizmo FX Markets | Trade Global Markets',
    description:
      'Award-winning forex broker. Trade 300+ instruments with ultra-tight spreads, 1:500 leverage and instant withdrawals. Create your account in 2 minutes.',
    keywords: 'Trade Global Markets, global markets trader, forex trading online, step by step',
    url: 'https://www.fizmofxmarkets.com/'
  },
  accounts: {
    title: 'Forex Trading Accounts | Standard, Pro & ECN – FizmoFX Markets',
    description:
      'Explore Forex trading accounts at FizmoFX Markets. Choose from Standard, Pro, and ECN accounts with low spreads, high leverage, and zero commission options.',
    keywords: 'open forex account, forex trading account, online trading account, learn trading account',
    url: 'https://www.fizmofxmarkets.com/accounts'
  },
  forex: {
    title: 'What is Forex Trading? | Trade Forex Markets – FizmoFX Markets',
    description:
      'Learn what Forex trading is and how to trade currency pairs with FizmoFX Markets. Access global forex markets 24/5 with advanced trading tools and strategies.',
    keywords: 'forex trading online, simple forex trading, forex trading strategy',
    url: 'https://www.fizmofxmarkets.com/markets/forex'
  },
  crypto: {
    title: 'Crypto Trading Platform | Trade Bitcoin & Crypto – FizmoFX Markets',
    description:
      'Start crypto trading with FizmoFX Markets. Trade Bitcoin, Ethereum, and other cryptocurrencies with leverage, secure platform, and advanced MT5 tools.',
    keywords: 'crypto trading, trade bitcoin, trade crypto online',
    url: 'https://www.fizmofxmarkets.com/markets/crypto'
  },
  indices: {
    title: 'Indices Trading | Trade Global Stock Indices – FizmoFX Markets',
    description:
      'Start indices trading with FizmoFX Markets. Trade global stock indices like S&P 500, NASDAQ, and FTSE with leverage, tight spreads, and advanced platforms.',
    keywords: 'indices trading, stock indices trading, trade indices online',
    url: 'https://www.fizmofxmarkets.com/markets/indices'
  },
  commodities: {
    title: 'Commodities Trading | Trade Gold, Oil & More – FizmoFX Markets',
    description:
      'Start commodities trading with FizmoFX Markets. Trade gold, oil, and other commodities with tight spreads, leverage, and advanced trading platforms.',
    keywords: 'commodities trading, trade gold, oil trading',
    url: 'https://www.fizmofxmarkets.com/markets/commodities'
  },
  platform: {
    title: 'Online Trading Platform | Advanced & Automated – FizmoFX Markets',
    description:
      'Discover FizmoFX Markets trading platform with advanced tools, automated trading system, and real-time insights. Trade forex, crypto, and more on one platform.',
    keywords: 'trading platform, automated trading, MT5 trading platform',
    url: 'https://www.fizmofxmarkets.com/platform'
  },
  about: {
    title: 'About FizmoFX Markets | Trusted Online Trading Platform',
    description:
      'Learn about FizmoFX Markets, a global trading platform offering advanced tools, multiple assets, and seamless trading experience for all levels of traders.',
    keywords: 'about us, trading company, trusted broker',
    url: 'https://www.fizmofxmarkets.com/about'
  },
  contact: {
    title: 'Contact — FizmoFX Markets',
    description:
      'Get in touch with FizmoFX Markets — support, sales, and general enquiries for traders worldwide.',
    keywords: 'contact, support, customer service, forex support',
    url: 'https://www.fizmofxmarkets.com/contact'
  },
  register: {
    title: 'Open Forex Trading Account | Register with FizmoFX Markets',
    description:
      'Create your Forex trading account with FizmoFX Markets in minutes. Register now to access forex, crypto, indices, and commodities trading on a single platform.',
    keywords: 'create trading account, open account, register forex account',
    url: 'https://my.fizmofxmarkets.com/register'
  },
  login: {
    title: 'Login | Forex Trading Account Access – FizmoFX Markets',
    description:
      'Login to your FizmoFX Markets trading account securely. Access forex, crypto, indices, and commodities trading platform anytime, anywhere with ease.',
    keywords: 'login, account login, trading account login',
    url: 'https://my.fizmofxmarkets.com/login'
  },
  markets: {
    title: 'Markets — Fizmo Markets',
    description:
      'Explore market instruments on Fizmo Markets including Forex, Commodities, Indices, and Crypto with real-time pricing.',
    keywords: 'forex, commodities, indices, crypto, markets',
    url: 'https://www.fizmofxmarkets.com/markets'
  }
}

const globalKeywords = Object.values(seo)
  .map((s) => s.keywords || '')
  .filter(Boolean)
  .join(', ')

export { seo, globalKeywords }
export default seo
