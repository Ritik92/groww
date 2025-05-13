export default function MarketOverview({ data }) {
  const renderMarketItem = (title, value, change, percentChange) => {
    const isPositive = change >= 0;
    
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm text-gray-600 font-semibold">{title}</h3>
          <div className={`px-2 py-0.5 rounded text-xs font-medium ${isPositive ? 'bg-green-50 text-[#04B488]' : 'bg-red-50 text-red-500'}`}>
            {isPositive ? '↑' : '↓'} {Math.abs(percentChange).toFixed(2)}%
          </div>
        </div>
        <p className="text-xl text-gray-700 font-semibold">{value.toLocaleString('en-IN')}</p>
        <div className={`flex items-center mt-1 ${isPositive ? 'text-[#04B488]' : 'text-red-500'} text-sm`}>
          <span>
            {isPositive ? '+' : ''}{change.toLocaleString('en-IN')}
          </span>
          <span className="mx-1">•</span>
          <span>
            Today
          </span>
        </div>
      </div>
    );
  };

  // Additional market metrics
  const additionalMetrics = [
    { label: "India VIX", value: 14.25, change: -0.82, isDown: true },
    { label: "USD/INR", value: 75.64, change: 0.12, isDown: false },
    { label: "Gold", value: 5832.50, change: 24.75, isDown: false },
    { label: "Crude Oil", value: 5428.25, change: -102.50, isDown: true }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-700">Market Overview</h2>
        <div className="flex items-center">
          <div className="flex items-center text-xs text-gray-500 mr-4">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            <span>Market Open</span>
          </div>
          <div className="text-sm text-gray-500">Last updated: 3:30 PM</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {renderMarketItem('SENSEX', data.sensex.value, data.sensex.change, data.sensex.percentChange)}
        {renderMarketItem('NIFTY 50', data.nifty.value, data.nifty.change, data.nifty.percentChange)}
        {renderMarketItem('BANK NIFTY', data.niftyBank.value, data.niftyBank.change, data.niftyBank.percentChange)}
      </div>

      {/* Additional market metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {additionalMetrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">{metric.label}</span>
              <span className={`text-xs ${metric.isDown ? 'text-red-500' : 'text-[#04B488]'}`}>
                {metric.isDown ? '↓' : '↑'} {Math.abs(metric.change)}
              </span>
            </div>
            <p className="text-base font-medium text-gray-700 mt-1">{metric.value.toLocaleString('en-IN')}</p>
          </div>
        ))}
      </div>

      {/* Market sentiment indicator */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-700">Market Sentiment</h3>
          <span className="text-xs text-[#04B488] font-medium">Bullish</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#04B488]" style={{ width: '65%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Bearish</span>
          <span>Neutral</span>
          <span>Bullish</span>
        </div>
      </div>
    </div>
  );
}