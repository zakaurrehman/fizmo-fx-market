import type { ForexInstrument, CryptoInstrument, IndexInstrument, CommodityInstrument } from '@/types'

export const forexInstruments: ForexInstrument[] = [
  { symbol: 'EUR/USD', description: 'Euro / US Dollar', spreadFrom: '0.16 pips', leverage: '1:2000', minLot: '0.01' },
  { symbol: 'GBP/USD', description: 'British Pound / US Dollar', spreadFrom: '0.3 pips', leverage: '1:2000', minLot: '0.01' },
  { symbol: 'USD/JPY', description: 'US Dollar / Japanese Yen', spreadFrom: '0.2 pips', leverage: '1:2000', minLot: '0.01' },
  { symbol: 'AUD/USD', description: 'Australian Dollar / USD', spreadFrom: '0.3 pips', leverage: '1:2000', minLot: '0.01' },
  { symbol: 'USD/CAD', description: 'US Dollar / Canadian Dollar', spreadFrom: '0.4 pips', leverage: '1:2000', minLot: '0.01' },
  { symbol: 'USD/CHF', description: 'US Dollar / Swiss Franc', spreadFrom: '0.4 pips', leverage: '1:2000', minLot: '0.01' },
  { symbol: 'NZD/USD', description: 'New Zealand Dollar / USD', spreadFrom: '0.5 pips', leverage: '1:2000', minLot: '0.01' },
  { symbol: 'EUR/GBP', description: 'Euro / British Pound', spreadFrom: '0.6 pips', leverage: '1:2000', minLot: '0.01' },
  { symbol: 'EUR/JPY', description: 'Euro / Japanese Yen', spreadFrom: '0.5 pips', leverage: '1:2000', minLot: '0.01' },
  { symbol: 'GBP/JPY', description: 'British Pound / Japanese Yen', spreadFrom: '0.7 pips', leverage: '1:2000', minLot: '0.01' },
]

export const cryptoInstruments: CryptoInstrument[] = [
  { symbol: 'BTC/USD', name: 'Bitcoin', leverage: '1:10', spreadFrom: '25 pips', tradingHours: '24/7' },
  { symbol: 'ETH/USD', name: 'Ethereum', leverage: '1:10', spreadFrom: '5 pips', tradingHours: '24/7' },
  { symbol: 'XRP/USD', name: 'Ripple', leverage: '1:5', spreadFrom: '0.5 pips', tradingHours: '24/7' },
  { symbol: 'SOL/USD', name: 'Solana', leverage: '1:5', spreadFrom: '1.0 pips', tradingHours: '24/7' },
  { symbol: 'BNB/USD', name: 'Binance Coin', leverage: '1:5', spreadFrom: '2.0 pips', tradingHours: '24/7' },
  { symbol: 'ADA/USD', name: 'Cardano', leverage: '1:5', spreadFrom: '0.3 pips', tradingHours: '24/7' },
  { symbol: 'LTC/USD', name: 'Litecoin', leverage: '1:5', spreadFrom: '3.0 pips', tradingHours: '24/7' },
  { symbol: 'DOGE/USD', name: 'Dogecoin', leverage: '1:5', spreadFrom: '0.2 pips', tradingHours: '24/7' },
]

export const indexInstruments: IndexInstrument[] = [
  { symbol: 'SPX500', name: 'S&P 500', country: 'USA', spreadFrom: '0.4 pts', leverage: '1:200' },
  { symbol: 'NAS100', name: 'NASDAQ 100', country: 'USA', spreadFrom: '0.8 pts', leverage: '1:200' },
  { symbol: 'DJ30', name: 'Dow Jones 30', country: 'USA', spreadFrom: '1.5 pts', leverage: '1:200' },
  { symbol: 'DAX40', name: 'Germany 40', country: 'Germany', spreadFrom: '0.8 pts', leverage: '1:200' },
  { symbol: 'FTSE100', name: 'UK 100', country: 'UK', spreadFrom: '1.0 pts', leverage: '1:200' },
  { symbol: 'CAC40', name: 'France 40', country: 'France', spreadFrom: '1.0 pts', leverage: '1:200' },
  { symbol: 'NI225', name: 'Nikkei 225', country: 'Japan', spreadFrom: '5.0 pts', leverage: '1:100' },
  { symbol: 'AUS200', name: 'ASX 200', country: 'Australia', spreadFrom: '1.0 pts', leverage: '1:200' },
]

export const commodityInstruments: CommodityInstrument[] = [
  { symbol: 'XAU/USD', name: 'Gold', category: 'Precious Metal', spreadFrom: '0.20', leverage: '1:100' },
  { symbol: 'XAG/USD', name: 'Silver', category: 'Precious Metal', spreadFrom: '0.030', leverage: '1:100' },
  { symbol: 'WTI/USD', name: 'WTI Crude Oil', category: 'Energy', spreadFrom: '0.03', leverage: '1:100' },
  { symbol: 'BRENT', name: 'Brent Crude Oil', category: 'Energy', spreadFrom: '0.04', leverage: '1:100' },
  { symbol: 'NGAS', name: 'Natural Gas', category: 'Energy', spreadFrom: '0.004', leverage: '1:100' },
  { symbol: 'COFFEE', name: 'Arabica Coffee', category: 'Agricultural', spreadFrom: '0.50', leverage: '1:50' },
  { symbol: 'XPT/USD', name: 'Platinum', category: 'Precious Metal', spreadFrom: '1.50', leverage: '1:100' },
  { symbol: 'COPPER', name: 'Copper', category: 'Industrial', spreadFrom: '0.006', leverage: '1:100' },
]
