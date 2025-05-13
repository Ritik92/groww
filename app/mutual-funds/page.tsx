"use client";

import { useState } from 'react';

import Footer from '../components/Footer';
import MutualFundPortfolio from '../components/MutualFundPortfolio';
import MutualFundOverview from '../components/MutualFundOverview';
import Header from '../components/Header';

export default function MutualFunds() {
  const [portfolioData, setPortfolioData] = useState({
    totalInvestment: 642500,
    currentValue: 658750,
    totalProfit: 16250,
    todayProfit: 1325,
    funds: [
      {
        id: 1,
        name: "HDFC Mid-Cap Opportunities Fund",
        category: "Mid Cap",
        investedAmount: 198500,
        currentValue: 207800,
        profit: 9300,
        todayChange: 580,
        units: 1248.67,
        nav: 166.42,
        allotmentDate: "15 Jan 2023",
      },
      {
        id: 2,
        name: "Axis Bluechip Fund",
        category: "Large Cap",
        investedAmount: 152300,
        currentValue: 155900,
        profit: 3600,
        todayChange: 425,
        units: 3248.92,
        nav: 47.89,
        allotmentDate: "22 Mar 2023",
      },
      {
        id: 3,
        name: "SBI Small Cap Fund",
        category: "Small Cap",
        investedAmount: 121700,
        currentValue: 125300,
        profit: 3600,
        todayChange: 320,
        units: 1583.45,
        nav: 79.13,
        allotmentDate: "10 Jun 2023",
      },
      {
        id: 4,
        name: "Mirae Asset Emerging Bluechip Fund",
        category: "Large & Mid Cap",
        investedAmount: 170000,
        currentValue: 169750,
        profit: -250,
        todayChange: -100,
        units: 2192.83,
        nav: 77.41,
        allotmentDate: "05 Sep 2023",
      }
    ]
  });

  // Add data for fund categories
  const fundCategories = [
    { id: 1, name: "All", count: 110 },
    { id: 2, name: "Equity", count: 72 },
    { id: 3, name: "Debt", count: 26 },
    { id: 4, name: "Hybrid", count: 12 },
    { id: 5, name: "Tax Saver", count: 8 },
    { id: 6, name: "Index Funds", count: 10 },
  ];

  // Add data for recommended funds
  const recommendedFunds = [
    {
      id: 1,
      name: "Groww NIFTY 50 Index Fund",
      category: "Index Fund",
      riskLevel: "Moderate",
      returns: { year1: 19.8, year3: 16.5, year5: 14.2 },
      minInvestment: 500,
    },
    {
      id: 2,
      name: "SBI Small Cap Fund",
      category: "Small Cap",
      riskLevel: "High",
      returns: { year1: 24.3, year3: 20.1, year5: 17.8 },
      minInvestment: 500,
    },
    {
      id: 3,
      name: "ICICI Prudential Bluechip Fund",
      category: "Large Cap",
      riskLevel: "Moderate",
      returns: { year1: 17.2, year3: 15.1, year5: 13.6 },
      minInvestment: 1000,
    }
  ];

  // SIP simulator data
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipDuration, setSipDuration] = useState(10);
  const [sipReturnRate, setSipReturnRate] = useState(12);

  const calculateSIPReturns = () => {
    const monthlyRate = sipReturnRate / 12 / 100;
    const months = sipDuration * 12;
    const invested = sipAmount * months;
    const futureValue = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    
    return {
      invested,
      returns: futureValue - invested,
      total: futureValue
    };
  };

  const sipResults = calculateSIPReturns();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          <h1 className="text-2xl font-bold text-gray-700">My Mutual Funds</h1>
          
          {/* Portfolio Overview */}
          <MutualFundOverview data={portfolioData} />
          
          {/* Portfolio Details */}
          <MutualFundPortfolio data={portfolioData} />

          {/* Fund Categories */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Explore Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {fundCategories.map(category => (
                <div 
                  key={category.id} 
                  className="bg-gray-50 p-4 rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-gray-700">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} Funds</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Funds */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-700">Recommended for You</h2>
              <button className="text-[#04B488] hover:text-[#039973] font-medium">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedFunds.map(fund => (
                <div key={fund.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="mb-2">
                    <h3 className="font-medium text-gray-700">{fund.name}</h3>
                    <p className="text-xs text-gray-500">{fund.category} • {fund.riskLevel} Risk</p>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <div>
                      <p className="text-gray-500">1Y</p>
                      <p className="font-medium text-[#04B488]">{fund.returns.year1}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">3Y</p>
                      <p className="font-medium text-[#04B488]">{fund.returns.year3}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">5Y</p>
                      <p className="font-medium text-[#04B488]">{fund.returns.year5}%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Min: ₹{fund.minInvestment}</span>
                    <button className="bg-[#04B488] hover:bg-[#039973] text-white font-medium py-1 px-4 rounded-lg">
                      Invest
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIP Calculator */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-700 mb-4">SIP Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Investment</label>
                  <div className="flex items-center">
                    <span className="mr-2 text-gray-600">₹</span>
                    <input
                      type="range"
                      min="500"
                      max="50000"
                      step="500"
                      value={sipAmount}
                      onChange={(e) => setSipAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-2 w-20 text-right text-gray-700 font-medium">{formatCurrency(sipAmount)}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Investment Period (Years)</label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={sipDuration}
                      onChange={(e) => setSipDuration(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-2 w-20 text-right text-gray-700 font-medium">{sipDuration} Years</span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Returns (% p.a.)</label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.5"
                      value={sipReturnRate}
                      onChange={(e) => setSipReturnRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-2 w-20 text-right text-gray-700 font-medium">{sipReturnRate}%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-3">Estimated Returns</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Invested Amount</p>
                    <p className="text-lg font-bold text-gray-700">₹{formatCurrency(sipResults.invested)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Est. Returns</p>
                    <p className="text-lg font-bold text-[#04B488]">₹{formatCurrency(sipResults.returns)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Value</p>
                    <p className="text-lg font-bold text-gray-700">₹{formatCurrency(sipResults.total)}</p>
                  </div>
                </div>
                <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#04B488]" 
                    style={{ width: `${(sipResults.invested / sipResults.total) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Invested</span>
                  <span>Returns</span>
                </div>
                <div className="mt-4 text-center">
                  <button className="bg-[#04B488] hover:bg-[#039973] text-white font-medium py-2 px-6 rounded-lg">
                    Start SIP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Learn About Mutual Funds */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Learn About Mutual Funds</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-2">What are Mutual Funds?</h3>
                <p className="text-sm text-gray-600 mb-3">Mutual funds are investment vehicles that pool money from multiple investors to purchase securities.</p>
                <a href="#" className="text-[#04B488] hover:text-[#039973] text-sm font-medium">Learn More →</a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-2">Benefits of SIP</h3>
                <p className="text-sm text-gray-600 mb-3">Systematic Investment Plans help you invest regularly and benefit from rupee cost averaging.</p>
                <a href="#" className="text-[#04B488] hover:text-[#039973] text-sm font-medium">Learn More →</a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-2">Tax Benefits</h3>
                <p className="text-sm text-gray-600 mb-3">Learn about ELSS funds and how mutual fund investments can help you save taxes.</p>
                <a href="#" className="text-[#04B488] hover:text-[#039973] text-sm font-medium">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}