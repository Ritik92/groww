export default function MutualFundOverview({ data }) {
    const formatValue = (value) => {
        if (value >= 100000) {
            return `₹${(value / 100000).toFixed(2)} L`;
        }
        return `₹${value.toLocaleString('en-IN')}`;
    };

    const formatPercentage = (value) => {
        return (value * 100).toFixed(2);
    };

    // Calculate year-to-date (YTD) return percentage
    const ytdReturn = ((data.currentValue - data.totalInvestment) / data.totalInvestment) * 100;

    // Check if the portfolio is in profit or loss
    const isProfit = data.totalProfit > 0;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-700">Portfolio Overview</h2>
                <div className="flex items-center">
                    <button className="text-[#04B488] hover:text-[#039973] font-medium px-2 py-1 border border-[#04B488] rounded-lg mr-2 text-sm">
                        Download Report
                    </button>
                    <button className="bg-[#04B488] hover:bg-[#039973] text-white font-medium px-3 py-1 rounded-lg text-sm">
                        + Add Fund
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Current Value</p>
                    <p className="text-2xl font-bold text-gray-700">{formatValue(data.currentValue)}</p>
                    <div className="mt-2 text-xs text-gray-500">
                        <span className="inline-block px-2 py-0.5 bg-gray-100 rounded">
                            {formatValue(data.currentValue - data.currentValue / 30)} last month
                        </span>
                    </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total Investment</p>
                    <p className="text-2xl font-bold text-gray-700">{formatValue(data.totalInvestment)}</p>
                    <div className="mt-2 text-xs text-gray-500">
                        <span className="inline-block px-2 py-0.5 bg-gray-100 rounded">
                            {data.funds.length} active funds
                        </span>
                    </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total {isProfit ? 'Profit' : 'Loss'}</p>
                    <div className="flex items-baseline">
                        <p className={`text-2xl font-bold ${isProfit ? 'text-[#04B488]' : 'text-red-500'}`}>
                            {isProfit ? '+' : '-'}{formatValue(Math.abs(data.totalProfit))}
                        </p>
                        <p className={`ml-2 text-sm ${isProfit ? 'text-[#04B488]' : 'text-red-500'}`}>
                            ({isProfit ? '+' : '-'}{formatPercentage(Math.abs(data.totalProfit / data.totalInvestment))}%)
                        </p>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                        <span className="inline-block px-2 py-0.5 bg-gray-100 rounded">
                            YTD: {ytdReturn >= 0 ? '+' : ''}{ytdReturn.toFixed(2)}%
                        </span>
                    </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Today's Profit</p>
                    <div className="flex items-baseline">
                        <p className={`text-2xl font-bold ${data.todayProfit >= 0 ? 'text-[#04B488]' : 'text-red-500'}`}>
                            {data.todayProfit >= 0 ? '+' : '-'}{formatValue(Math.abs(data.todayProfit))}
                        </p>
                        <p className={`ml-2 text-sm ${data.todayProfit >= 0 ? 'text-[#04B488]' : 'text-red-500'}`}>
                            ({data.todayProfit >= 0 ? '+' : '-'}{formatPercentage(Math.abs(data.todayProfit / data.currentValue))})
                        </p>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                        <span className="inline-block px-2 py-0.5 bg-gray-100 rounded">
                            Updated: 3:30 PM
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}