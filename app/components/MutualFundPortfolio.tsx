export default function MutualFundPortfolio({ data }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2
    }).format(value);
  };
  
  const formatPercentage = (value) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  
  // Function to determine profit/loss color
  const getProfitLossColor = (value) => {
    return value >= 0 ? 'text-[#04B488]' : 'text-red-500';
  };
  
  // Function to calculate XIRR (simplified, would need a real XIRR calculation in production)
  const calculateXIRR = (investedAmount, currentValue, daysInvested) => {
    // This is a simplified calculation, not a true XIRR
    const yearsInvested = daysInvested / 365;
    const totalReturn = (currentValue / investedAmount) - 1;
    const annualizedReturn = Math.pow(1 + totalReturn, 1 / yearsInvested) - 1;
    return (annualizedReturn * 100).toFixed(2);
  };
  
  // Calculate days since investment for each fund
  const calculateDaysSinceInvestment = (dateString) => {
    const investmentDate = new Date(dateString);
    const currentDate = new Date();
    //@ts-ignore
    const differenceInTime = currentDate - investmentDate;
    return Math.floor(differenceInTime / (1000 * 3600 * 24));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-700">My Funds ({data.funds.length})</h2>
          <p className="text-sm text-gray-500 mt-1">Showing all mutual fund investments</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search funds..." 
              className="pl-8 pr-4 py-1 border text-black border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#04B488] focus:border-[#04B488]"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-2.5 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select className="border text-gray-500 border-gray-300 rounded-lg text-sm py-1 px-2 focus:outline-none focus:ring-1 focus:ring-[#04B488] focus:border-[#04B488]">
            <option>All Categories</option>
            <option>Large Cap</option>
            <option>Mid Cap</option>
            <option>Small Cap</option>
            <option>Multi Cap</option>
          </select>
          <button className="text-[#04B488] hover:text-[#039973] font-medium">Explore More Funds</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 text-left text-sm font-medium text-gray-500">Fund Name</th>
              <th className="py-3 text-right text-sm font-medium text-gray-500">Value</th>
              <th className="py-3 text-right text-sm font-medium text-gray-500">Invested</th>
              <th className="py-3 text-right text-sm font-medium text-gray-500">Profit/Loss</th>
              <th className="py-3 text-right text-sm font-medium text-gray-500">XIRR</th>
              <th className="py-3 text-right text-sm font-medium text-gray-500">Today</th>
              <th className="py-3 text-right text-sm font-medium text-gray-500"></th>
            </tr>
          </thead>
          <tbody>
            {data.funds.map((fund) => {
              const daysInvested = calculateDaysSinceInvestment(fund.allotmentDate);
              const xirr = calculateXIRR(fund.investedAmount, fund.currentValue, daysInvested);
              
              return (
                <tr key={fund.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">{fund.name}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500 mr-2">{fund.category}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          Since {fund.allotmentDate}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <div>
                      <p className="text-sm font-medium text-gray-700">₹{formatCurrency(fund.currentValue)}</p>
                      <p className="text-xs text-gray-500">{fund.units.toFixed(2)} units</p>
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <div>
                      <p className="text-sm font-medium text-gray-700">₹{formatCurrency(fund.investedAmount)}</p>
                      <p className="text-xs text-gray-500">NAV: ₹{fund.nav}</p>
                    </div>
                  </td>
                  <td className={`py-4 text-right ${getProfitLossColor(fund.profit)}`}>
                    <div>
                      <p className="text-sm font-medium">
                        {fund.profit >= 0 ? '+' : ''}₹{formatCurrency(fund.profit)}
                      </p>
                      <p className="text-xs">
                        {fund.profit >= 0 ? '+' : ''}
                        {formatPercentage((fund.profit / fund.investedAmount) * 100)}%
                      </p>
                    </div>
                  </td>
                  
                  <td className={`py-4 text-right ${parseFloat(xirr) > 0 ? 'text-[#04B488]' : 'text-red-500'}`}>
                    <p className="text-sm font-medium">
                      {parseFloat(xirr) > 0 ? '+' : ''}{xirr}%
                    </p>
                  </td>
                  <td className={`py-4 text-right ${getProfitLossColor(fund.todayChange)}`}>
                    <p className="text-sm font-medium">
                      {fund.todayChange >= 0 ? '+' : ''}₹{formatCurrency(fund.todayChange)}
                    </p>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-sm text-[#04B488] hover:text-[#039973] font-medium border border-[#04B488] px-2 py-1 rounded">
                        Add SIP
                      </button>
                      <button className="text-sm text-[#04B488] hover:text-[#039973] font-medium">
                        Details
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4 my-2">
          <button className="flex items-center space-x-1 text-sm text-[#04B488] hover:text-[#039973] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add New Fund</span>
          </button>
          <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filter</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-2 my-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#04B488] text-white">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}