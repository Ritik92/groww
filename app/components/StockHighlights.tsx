export default function StockHighlights() {
  const stockData = [
    { name: 'Reliance Industries', ticker: 'RELIANCE', price: 3145.25, change: 45.25, percentChange: 1.42, volume: '2.3M' },
    { name: 'HDFC Bank', ticker: 'HDFCBANK', price: 1824.60, change: -12.40, percentChange: -0.68, volume: '1.8M' },
    { name: 'Tata Consultancy Services', ticker: 'TCS', price: 4256.75, change: 86.75, percentChange: 2.04, volume: '1.1M' },
    { name: 'Infosys', ticker: 'INFY', price: 1756.40, change: 26.40, percentChange: 1.52, volume: '0.9M' },
    { name: 'ICICI Bank', ticker: 'ICICIBANK', price: 1023.85, change: 15.35, percentChange: 1.52, volume: '1.5M' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Market Highlights</h2>
        <div className="flex items-center">
          <div className="flex mr-4">
            <button className="text-[#04B488] hover:text-[#039973] font-medium px-3 py-1 rounded border-b-2 border-[#04B488]">Stocks</button>
            <button className="text-gray-500 hover:text-gray-700 font-medium px-3 py-1 rounded">Indices</button>
          </div>
          <button className="text-[#04B488] hover:text-[#039973] font-medium">View All</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-2 text-left text-sm font-medium text-gray-500">Stock</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-500">Price</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-500">Change</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-500">Volume</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-500"></th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((stock, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-2">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{stock.name}</p>
                    <p className="text-xs text-gray-500">{stock.ticker}</p>
                  </div>
                </td>
                <td className="py-4 px-2 text-right text-sm font-medium text-gray-800">
                  ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className={`py-4 px-2 text-right text-sm font-medium ${stock.change >= 0 ? 'text-[#04B488]' : 'text-red-500'}`}>
                  <div>
                    {stock.change >= 0 ? '+' : ''}
                    {stock.change.toFixed(2)} ({stock.percentChange >= 0 ? '+' : ''}{stock.percentChange.toFixed(2)}%)
                  </div>
                </td>
                <td className="py-4 px-2 text-right text-sm text-gray-600">
                  {stock.volume}
                </td>
                <td className="py-4 px-2 text-right">
                  <button className="text-sm text-[#04B488] hover:text-[#039973] font-medium px-3 py-1 border border-[#04B488] rounded-lg hover:bg-[#04B488] hover:bg-opacity-5">
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 pt-2 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          Data as of May 11, 2025 | 15:30 IST
        </div>
        <div className="flex items-center">
          <button className="text-gray-500 hover:text-gray-700 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-xs text-gray-500">Page 1 of 5</span>
          <button className="text-[#04B488] hover:text-[#039973] ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}