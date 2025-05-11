"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import StockHighlights from './components/StockHighlights';
import TopGainers from './components/TopGainers';
import Footer from './components/Footer';


export default function Home() {
  const [marketData, setMarketData] = useState({
    sensex: { value: 82547.98, change: 258.13, percentChange: 0.31 },
    nifty: { value: 25178.65, change: 72.05, percentChange: 0.29 },
    niftyBank: { value: 48964.35, change: -64.80, percentChange: -0.13 },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          {/* Hero Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h1 className="text-3xl font-bold text-gray-800">Start Your Investment Journey</h1>
            <p className="mt-2 text-gray-600">Invest in Stocks, Mutual Funds, and more with zero commission</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/mutual-funds" className="inline-flex items-center bg-[#04B488] hover:bg-[#039973]  text-white font-medium rounded-lg px-6 py-3  transition-colors">
                Explore Mutual Funds
              </Link>
              <button className="inline-flex items-center bg-white border border-gray-300 text-gray-700 font-medium rounded-lg px-6 py-3 hover:bg-gray-50 transition-colors">
                Explore Stocks
              </button>
            </div>
          </div>
          
          {/* Market Overview */}
          <MarketOverview data={marketData} />
          
          {/* Stock Highlights */}
          <StockHighlights />
          
          {/* Top Gainers and Losers */}
          <TopGainers />
        </div>
      </main>
      <Footer />
    </div>
  );
}