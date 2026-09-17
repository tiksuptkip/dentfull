import React, { useState } from "react";
import { Send, Menu, X, ChevronDown, CheckCircle2, MessageSquare, Layers, ShieldCheck, Factory, Truck } from "lucide-react";

interface MainNavigationHeaderProps {
  onScrollToRfq: () => void;
  onOpenQuickModal: () => void;
}

export const MainNavigationHeader: React.FC<MainNavigationHeaderProps> = ({
  onScrollToRfq,
  onOpenQuickModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const productCategories = [
    {
      title: "Carbon Steel Products",
      items: [
        { name: "Hot Rolled Steel Coil (HR Coil)", active: true },
        { name: "Hot Rolled Steel Sheet & Plate", active: false },
        { name: "Cold Rolled Steel Coil (CR Coil)", active: false },
        { name: "Carbon Structural Steel H-Beams", active: false },
      ],
    },
    {
      title: "Coated & Stainless Steel",
      items: [
        { name: "Hot-Dip Galvanized Coil (GI)", active: false },
        { name: "Galvalume / Aluzinc Steel (GL)", active: false },
        { name: "Prepainted Galvanized Steel (PPGI)", active: false },
        { name: "Stainless Steel 304 / 316L Coils", active: false },
      ],
    },
    {
      title: "Pipes, Tubes & Processing",
      items: [
        { name: "High-Frequency ERW Steel Pipe", active: false },
        { name: "Seamless Carbon Steel Tubes", active: false },
        { name: "Longitudinal Coil Slitting Services", active: false },
        { name: "Steel Cut-to-Length Levelling", active: false },
      ],
    },
  ];

  return (
    <header id="main-navigation-header" className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo: dentfull */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3 group">
              {/* Industrial geometric logo symbol */}
              <div className="w-11 h-11 bg-[#0f172a] rounded-lg border-2 border-[#0284c7] flex items-center justify-center relative overflow-hidden shadow-md group-hover:border-orange-500 transition-colors">
                <div className="absolute -right-3 -top-3 w-7 h-7 bg-orange-500 rotate-45 transform"></div>
                <div className="flex flex-col items-center">
                  <span className="text-white font-extrabold text-xl tracking-tighter leading-none">D</span>
                  <div className="w-4 h-0.5 bg-orange-500 mt-0.5"></div>
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black tracking-tight text-[#0f172a] uppercase font-['Barlow']">
                    dentfull
                  </span>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                    .com
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                  Engineered Metallurgy & Global Steel Supply
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors py-2">
                Home
              </a>

              {/* Products Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  id="nav-products-dropdown-btn"
                  className="flex items-center gap-1.5 text-blue-600 font-bold hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4 text-blue-500" />
                </button>

                {productsDropdownOpen && (
                  <div
                    id="nav-products-mega-menu"
                    className="absolute left-0 top-full -mt-1 w-[680px] bg-white border border-slate-200 rounded-lg shadow-2xl p-6 grid grid-cols-3 gap-6 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    {productCategories.map((cat, i) => (
                      <div key={i}>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-1 border-b border-slate-100 flex items-center gap-1.5">
                          {i === 0 && <Layers className="w-3.5 h-3.5 text-blue-600" />}
                          {i === 1 && <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />}
                          {i === 2 && <Factory className="w-3.5 h-3.5 text-slate-600" />}
                          {cat.title}
                        </h4>
                        <ul className="space-y-2">
                          {cat.items.map((item, j) => (
                            <li key={j}>
                              <a
                                href="#product-hero"
                                className={`text-xs block py-1 px-2 rounded transition-colors ${
                                  item.active
                                    ? "bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600"
                                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                                }`}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a href="#tab-inspection" className="hover:text-blue-600 transition-colors py-2">
                Quality Control
              </a>
              <a href="#tab-shipping" className="hover:text-blue-600 transition-colors py-2">
                Packaging & Shipping
              </a>
              <a href="#tab-facility" className="hover:text-blue-600 transition-colors py-2">
                Factory Tour
              </a>
              <a href="#rfq-section" className="hover:text-blue-600 transition-colors py-2">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Action CTAs: Quote & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/18329028877?text=Hello%20Dentfull%20Sales,%20I%20am%20inquiring%20about%20Hot%20Rolled%20Steel%20Coils%20(ASTM%20A36%20/%20Q235B)"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2.5 rounded-md border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors shadow-xs"
              title="Chat with Technical Sales Engineer on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Inquire</span>
            </a>

            <button
              id="header-rfq-cta-btn"
              onClick={onScrollToRfq}
              className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold tracking-wide uppercase transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer border border-orange-700"
            >
              <Send className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-rfq-btn"
              onClick={onScrollToRfq}
              className="px-3 py-1.5 rounded bg-orange-600 text-white text-xs font-bold uppercase"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-navigation-drawer" className="lg:hidden border-t border-slate-200 py-4 px-2 space-y-3 bg-slate-50">
            <div className="space-y-1">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-sm font-semibold text-slate-800 hover:bg-white"
              >
                Home
              </a>
              <div className="px-3 py-2 bg-white rounded border border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Featured Product
                </span>
                <a
                  href="#product-hero"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-bold text-blue-700"
                >
                  Hot Rolled Steel Coil (HR Coil)
                </a>
              </div>
              <a
                href="#tab-inspection"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-sm font-semibold text-slate-700 hover:bg-white"
              >
                Quality Control & MTC
              </a>
              <a
                href="#tab-shipping"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-sm font-semibold text-slate-700 hover:bg-white"
              >
                Packaging & Logistics
              </a>
              <a
                href="#tab-facility"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-sm font-semibold text-slate-700 hover:bg-white"
              >
                Factory & Facilities
              </a>
              <a
                href="#rfq-section"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-sm font-semibold text-slate-700 hover:bg-white"
              >
                Contact & Direct RFQ
              </a>
            </div>

            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToRfq();
                }}
                className="w-full py-3 bg-orange-600 text-white font-bold rounded text-center text-sm shadow uppercase"
              >
                Send Direct RFQ to sales@dentfull.com
              </button>
              <a
                href="mailto:sales@dentfull.com"
                className="w-full py-2 bg-slate-800 text-slate-200 font-semibold rounded text-center text-xs"
              >
                Email: sales@dentfull.com
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
