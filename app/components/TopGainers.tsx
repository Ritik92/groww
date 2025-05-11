export default function TopGainers() {
  const topGainers = [
    { name: 'Adani Power', ticker: 'ADANIPOWER', price: 512.35, percentChange: 4.85, sector: 'Power' },
    { name: 'Tata Motors', ticker: 'TATAMOTORS', price: 925.20, percentChange: 3.75, sector: 'Auto' },
    { name: 'State Bank of India', ticker: 'SBIN', price: 768.45, percentChange: 3.25, sector: 'Banking' },
    { name: 'Bharti Airtel', ticker: 'BHARTIARTL', price: 1124.60, percentChange: 2.95, sector: 'Telecom' },
  ];
  
  const topLosers = [
    { name: 'Tech Mahindra', ticker: 'TECHM', price: 1324.75, percentChange: -2.15, sector: 'IT' },
    { name: 'Asian Paints', ticker: 'ASIANPAINT', price: 3256.80, percentChange: -1.85, sector: 'Paints' },
    { name: 'Bajaj Finance', ticker: 'BAJFINANCE', price: 7125.30, percentChange: -1.45, sector: 'Finance' },
    { name: 'Titan Company', ticker: 'TITAN', price: 3420.15, percentChange: -1.20, sector: 'Consumer Durables' },
  ];

  const renderStock = (stock, isGainer = true) => (
    <div key={stock.ticker} className="flex justify-between items-center p-3 border-b border-gray-100 hover:bg-gray-50">
      <div>
        <p className="font-medium text-gray-800 text-sm">{stock.name}</p>
        <div className="flex items-center mt-1">
          <span className="text-xs text-gray-500 mr-2">{stock.ticker}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{stock.sector}</span>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-800 text-sm">₹{stock.price}</p>
        <p className={`text-xs mt-1 ${isGainer ? 'text-[#04B488]' : 'text-red-500'}`}>
          {isGainer ? '+' : ''}{stock.percentChange}%
        </p>
      </div>
    </div>
  );

  const renderList = (stocks, isGainer = true) => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h3 className="font-medium text-gray-800">
          {isGainer ? 'Top Gainers' : 'Top Losers'}
        </h3>
      </div>
      <div className="divide-y divide-gray-100">
        {stocks.map((stock) => renderStock(stock, isGainer))}
      </div>
      <div className="bg-gray-50 px-4 py-2 text-center">
        <button className="text-sm text-[#04B488] hover:text-[#039973] font-medium">
          View All {isGainer ? 'Gainers' : 'Losers'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {renderList(topGainers, true)}
      {renderList(topLosers, false)}
    </div>
  );
}