import Link from 'next/link';

export default function Footer() {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Footer links organized by sections
  const footerLinks = {
    products: [
      { label: "Stocks", url: "/stocks" },
      { label: "Mutual Funds", url: "/mutual-funds" },
      { label: "US Stocks", url: "/us-stocks" },
      { label: "Fixed Deposits", url: "/fd" },
      { label: "Digital Gold", url: "/gold" },
      { label: "IPO", url: "/ipo" }
    ],
    about: [
      { label: "About Us", url: "/about-us" },
      { label: "Pricing", url: "/pricing" },
      { label: "Careers", url: "/careers" },
      { label: "Press & Media", url: "/press" },
      { label: "Blog", url: "/blog" },
      { label: "Contact Us", url: "/contact" }
    ],
    support: [
      { label: "Help Center", url: "/help" },
      { label: "Security", url: "/security" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms of Use", url: "/terms" },
      { label: "Grievance Policy", url: "/grievance" },
      { label: "Regulatory Information", url: "/regulatory-info" }
    ],
    quickLinks: [
      { label: "AMC Mutual Funds", url: "/mutual-funds/amc" },
      { label: "Calculators", url: "/calculators" },
      { label: "Investment Glossary", url: "/glossary" },
      { label: "Open Demat Account", url: "/open-demat-account" },
      { label: "Learning Center", url: "/learn" },
      { label: "Sitemap", url: "/sitemap" }
    ]
  };

  // Social media links
  const socialLinks = [
    { icon: "facebook", url: "https://www.facebook.com/growwapp", label: "Facebook" },
    { icon: "twitter", url: "https://twitter.com/_groww", label: "Twitter" },
    { icon: "youtube", url: "https://www.youtube.com/c/GrowwIn", label: "YouTube" },
    { icon: "instagram", url: "https://www.instagram.com/groww_official/", label: "Instagram" },
    { icon: "linkedin", url: "https://www.linkedin.com/company/groww-in/", label: "LinkedIn" },
  ];

  // Download app links
  const appLinks = [
    { platform: "android", url: "https://play.google.com/store/apps/details?id=com.groww", label: "Android App" },
    { platform: "ios", url: "https://apps.apple.com/in/app/groww-stocks-mutual-fund/id1404871703", label: "iOS App" }
  ];

  // Social media icons
  const renderSocialIcon = (icon) => {
    switch (icon) {
      case "facebook":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        );
      case "twitter":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        );
      case "youtube":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        );
      case "instagram":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        );
      case "telegram":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.166.619.098.12-.044.231-.123.298-.232.682-1.208 1.272-2.531 1.77-3.91.077-.215-.068-.332-.307-.267-.572.156-1.146.311-1.72.463-.151.043-.333.035-.486-.028-.762-.315-1.58-.594-2.471-.766-1.195-.232-1.972-.031-2.258.535-.106.209-.175.447-.188.703-.012.263.039.534.134.777.186.490.265.517.659.7 1.557.730 3.156 1.293 4.95 1.627zm-8.753-3.476c.365.257.75.453 1.125.578 1.377.458 2.82.724 4.259.798 1.255.064 2.236-.238 2.897-.861.597-.561.867-1.39.669-2.374-.159-.795-.606-1.439-1.266-1.950-.875-.680-1.969-1.065-3.137-1.106-.528-.019-1.082.031-1.631.121-1.233.201-2.363.698-3.359 1.442-.33.248-.528.496-.528.878 0 .789.353 1.615.971 2.474zm11.052-5.105c-.297-.299-.762-.434-1.326-.386-.613.053-1.209.394-1.688.958-.286.335-.522.713-.691 1.117-.169.404-.23.795-.195 1.119.037.324.198.603.429.788.231.186.574.285.981.252.577-.047 1.146-.324 1.623-.797.288-.285.521-.62.688-.984.166-.364.224-.731.184-1.052-.048-.39-.21-.714-.407-.912 0-.1.001-.1.002-.103z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-white mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/">
              <img 
                alt="Groww Logo" 
                src="/icon.png"
                className="h-8 mb-4"
                style={{ width: 'auto' }}
              />
            </Link>
            <p className="text-gray-600 mb-2">Vaishnavi Tech Park, South Tower, 3rd Floor</p>
            <p className="text-gray-600 mb-2">Sarjapur Main Road, Bellandur</p>
            <p className="text-gray-600 mb-2">Bengaluru – 560103</p>
            <p className="text-gray-600 mb-6">Karnataka</p>
            
            <a href="/contact" className="text-[#04B488] hover:text-[#039973] font-medium mb-6 inline-block">
              Contact Us
            </a>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#04B488] hover:text-white transition-colors"
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
            
            {/* App Download Links */}
            <div className="flex space-x-4 mt-6">
              {appLinks.map((app, index) => (
                <a 
                  key={index} 
                  href={app.url} 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  {app.platform === "android" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.523 11.654l1.277-2.283c.18-.321-.091-.714-.455-.654l-1.641.273c-.255.042-.405.299-.338.546l.743 2.28c.068.211.301.296.414.091zm6.477 8.119c-2.692 0-8.113-7.527-8.133-7.558-.046-.069-.084-.144-.108-.221-.494-1.582-1.85-5.931-1.85-5.931-.099-.32.095-.645.42-.709l2.185-.431c.258-.051.513.099.599.339.137.384.45 1.258.778 2.179.095.104.736.993.962 1.289 1.05-1.593 2.71-2.642 4.555-2.996l.742-2.028c.059-.161.256-.242.419-.158l1.737.892c.154.079.215.269.139.425l-.76 1.596c3.548 1.16 4.791 5.291 4.256 8.462-.487 2.896-2.28 5.85-5.941 5.85zm-.478-13.635c-3.876 0-7.032 3.155-7.032 7.031 0 .547.063 1.08.183 1.591 1.51 1.839 4.168 4.599 7.327 4.599 1.375 0 2.5-.931 3.299-1.786 1.099-1.179 1.629-2.634 1.567-4.323-.086-2.346-1.965-7.112-5.344-7.112zm.492 5.681c-.549 0-.994-.445-.994-.994s.445-.994.994-.994.994.445.994.994-.445.994-.994.994zm3.033-.997c0 .55-.445.995-.994.995-.55 0-.995-.445-.995-.995s.445-.994.995-.994c.549 0 .994.444.994.994zm-7.934-4.866l-2.177.429c-.271.053-.422.33-.362.588.442 1.908 1.284 5.548 1.6 6.388 1.232-.967 2.79-1.915 4.495-1.915 3.075 0 5.008 3.903 5.121 7.129.113 3.242-2.195 6.024-5.842 6.024-2.604 0-8.611-7.382-8.611-7.382-.046-.069-.084-.144-.109-.221-.495-1.582-1.85-5.931-1.85-5.931-.099-.32.095-.645.42-.709l15.97-3.151c.276-.54.547.142.551.424.172.943 1.539 8.505-1.42 13.112-1.025 1.6-2.777 3.461-6.288 3.461-3.205 0-9.406-8.913-9.406-8.913-.276-.417.028-.961.522-1.03l2.143-.301c.272-.038.535.143.618.401.539 1.667 2.147 6.216 6.122 6.216 2.18 0 4.04-3.031 2.871-7.741-.475-1.91-1.65-3.492-3.684-3.492-.643 0-1.28.151-1.883.451-.257.129-.567.025-.683-.226l-1.945-4.326c-.067-.149.001-.321.146-.384zm4.901 4.866c-.549 0-.994.444-.994.994s.445.994.994.994.994-.444.994-.994-.445-.994-.994-.994z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
                    </svg>
                  )}
                  <span className="text-sm">{app.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-gray-600 hover:text-[#04B488]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-gray-600 hover:text-[#04B488]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-gray-600 hover:text-[#04B488]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>   
      </div>
    </footer>
  );
}