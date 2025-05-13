import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const themeColor = "#04B488"; // Main theme color as specified

  // Notification data
  const notifications = [
    { id: 1, title: "SIP Successful", message: "Your SIP for HDFC Mid-Cap Fund has been processed", time: "2 hours ago", unread: true },
    { id: 2, title: "Market Update", message: "NIFTY 50 is up by 0.5% today", time: "5 hours ago", unread: true },
    { id: 3, title: "Account Statement", message: "Your monthly account statement is ready", time: "2 days ago", unread: false },
  ];

  // Profile menu items
  const profileMenuItems = [
    { id: 1, label: "Profile Settings", icon: "user" },
    { id: 2, label: "Bank Accounts", icon: "bank" },
    { id: 3, label: "Transactions", icon: "transaction" },
    { id: 4, label: "Tax Reports", icon: "document" },
    { id: 5, label: "Help & Support", icon: "help" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 w-full sticky top-0 z-50">
      <div className="w-full px-4 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Groww Logo */}
            <Link href="/" className="flex">
              <img 
                alt="Groww Logo" 
                src="/icon.png"
                className="h-8"
                style={{ width: 'auto' }}
              />
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-900 px-1 py-2 font-semibold">
                Explore
              </Link>
              <Link 
                href="/investments" 
                className="text-[#04B488] hover:text-[#039973] px-1 py-2 font-semibold border-b-2 border-[#04B488]"
                style={{ color: themeColor }}
              >
                Investments
              </Link>
              <div className="relative group">
                <button className="flex items-center text-gray-500 hover:text-gray-900 px-1 py-2 font-semibold">
                  <span>Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="/mutual-funds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mutual Funds</Link>
                    <Link href="/stocks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Stocks</Link>
                    <Link href="/ipo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">IPO</Link>
                    <Link href="/fd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Fixed Deposits</Link>
                    <Link href="/gold" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Digital Gold</Link>
                    <Link href="/us-stocks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">US Stocks</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar - Wider and centered */}
          <div className={`hidden md:flex items-center flex-1 max-w-xl mx-6 ${isSearchFocused ? 'border-[#04B488]' : 'border-gray-200'}`}>
            <div className="relative w-full">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search stocks, mutual funds, and more..."
                className={`block w-full bg-gray-50 border ${isSearchFocused ? 'border-[#04B488] ring-1 ring-[#04B488]' : 'border-gray-200'} text-black rounded-lg py-2 px-4 pr-10 text-sm focus:outline-none`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* User Actions Icons */}
          <div className="flex items-center space-x-6">
            {/* Notification Bell */}
            <div className="relative">
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
                </svg>
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-medium text-gray-700">Notifications</h3>
                    <button className="text-sm text-[#04B488]">Mark all as read</button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div key={notification.id} className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${notification.unread ? 'bg-gray-50' : ''}`}>
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-gray-700 text-sm">{notification.title}</h4>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center">
                    <button className="text-sm text-[#04B488] hover:text-[#039973] font-medium">View All Notifications</button>
                  </div>
                </div>
              )}
            </div>

            {/* Orders */}
            <button className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </button>

            {/* Cart */}
            <button className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>

            {/* User Profile */}
            <div className="relative">
              <button 
                className="flex items-center focus:outline-none"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                  R
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold mr-3">
                        R
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700">Rishabh Yadav</h3>
                        <p className="text-xs text-gray-500">ryadav3245@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    {profileMenuItems.map(item => (
                      <a 
                        key={item.id} 
                        href="#" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <span className="w-5 h-5 mr-3 flex items-center justify-center text-gray-400">
                          {item.icon === "user" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          )}
                          {item.icon === "bank" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                          )}
                          {item.icon === "transaction" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                          )}
                          {item.icon === "document" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {item.icon === "help" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </span>
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <div className="p-3 border-t border-gray-100">
                    <button className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-500 hover:text-gray-900 px-3 py-2 text-base font-medium">
              Explore
            </Link>
            <Link href="/investments" className="block text-[#04B488] hover:text-[#039973] px-3 py-2 text-base font-medium">
              Investments
            </Link>
            <Link href="/mutual-funds" className="block text-gray-500 hover:text-gray-900 px-3 py-2 text-base font-medium">
              Mutual Funds
            </Link>
            <Link href="/stocks" className="block text-gray-500 hover:text-gray-900 px-3 py-2 text-base font-medium">
              Stocks
            </Link>
            <Link href="/ipo" className="block text-gray-500 hover:text-gray-900 px-3 py-2 text-base font-medium">
              IPO
            </Link>
            <Link href="/fd" className="block text-gray-500 hover:text-gray-900 px-3 py-2 text-base font-medium">
              Fixed Deposits
            </Link>
          </div>
          
          {/* Mobile Search */}
          <div className="px-4 py-2">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search mutual funds and stocks"
                className="block w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 pr-10 text-sm"
              />
            </div>
          </div>
          
          {/* Mobile User Menu */}
          <div className="px-4 pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                  R
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-700">Rishabh Yadav</div>
                <div className="text-sm font-medium text-gray-500">ryadav3245@gmail.com</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              {profileMenuItems.map(item => (
                <a
                  key={item.id}
                  href="#"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md"
              >
                Log Out
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}