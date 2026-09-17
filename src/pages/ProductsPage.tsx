import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ChevronRight, 
  ChevronDown, 
  SendHorizontal, 
  Layers, 
  Check, 
  Sparkles,
  SlidersHorizontal,
  ArrowUpDown
} from 'lucide-react';
import { PageId, Product } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { DENTFULL_SALES_EMAIL } from '../services/rfqService';

interface ProductsPageProps {
  onNavigate: (page: PageId, productId?: string) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [standardFilter, setStandardFilter] = useState<string>('all');
  const [finishFilter, setFinishFilter] = useState<string>('all');
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({
    'carbon-steel': true,
    'stainless-steel': true,
    'galvanized-steel': true,
    'aluminum-alloys': true
  });

  const toggleCatExpand = (catId: string) => {
    setExpandedCats(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      // Category match
      if (selectedCategory !== 'all' && prod.category !== selectedCategory) {
        return false;
      }
      // Subcategory match
      if (selectedSubcategory !== 'all' && prod.subcategory !== selectedSubcategory) {
        return false;
      }
      // Standard filter
      if (standardFilter !== 'all') {
        const matchesStandard = prod.standards.some(s => s.toLowerCase().includes(standardFilter.toLowerCase()));
        if (!matchesStandard) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q);
        const matchesDesc = prod.description.toLowerCase().includes(q);
        const matchesGrades = prod.grades.some(g => g.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesGrades) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSubcategory, standardFilter, searchQuery]);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-[#0F2B48] text-white py-12 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            <span>/</span>
            <span className="text-[#EA580C] font-semibold">Products Catalog Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-['Montserrat',sans-serif] tracking-tight">
            Comprehensive Industrial Steel &amp; Alloy Catalog
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            Direct mill supply of Prime Hot Rolled, Cold Rolled, Stainless Steel, Galvanized Coils, and Seamless Line Pipes. All materials 100% compliant with ASTM, EN, DIN, and JIS standards.
          </p>
        </div>
      </div>

      {/* Main Catalog Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR NAVIGATION: Multi-level categorized tree */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-5 sticky top-24">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2B48]">
                  <Layers className="w-4 h-4 text-[#EA580C]" />
                  <span>Product Categories</span>
                </div>
                {(selectedCategory !== 'all' || selectedSubcategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSubcategory('all');
                    }}
                    className="text-[11px] text-[#EA580C] hover:underline font-semibold"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* All Products Trigger */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                }}
                className={`w-full text-left px-3 py-2 rounded text-xs font-bold transition-colors ${
                  selectedCategory === 'all' && selectedSubcategory === 'all'
                    ? 'bg-[#0F2B48] text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                All Steel Categories ({PRODUCTS.length})
              </button>

              {/* Categorized Tree */}
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setSelectedSubcategory('all');
                        }}
                        className={`text-left text-xs font-bold flex-1 py-1.5 px-2 rounded transition-colors ${
                          selectedCategory === cat.id && selectedSubcategory === 'all'
                            ? 'text-[#EA580C] bg-orange-50 font-black'
                            : 'text-slate-800 hover:text-[#0F2B48]'
                        }`}
                      >
                        {cat.name}
                      </button>
                      <button
                        onClick={() => toggleCatExpand(cat.id)}
                        className="p-1 text-slate-400 hover:text-slate-600 rounded"
                        aria-label="Expand category"
                      >
                        {expandedCats[cat.id] ? (
                          <ChevronDown className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Subcategories */}
                    {expandedCats[cat.id] && (
                      <div className="pl-4 space-y-1 border-l-2 border-slate-100 ml-2">
                        {cat.subcategories.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              setSelectedSubcategory(sub);
                            }}
                            className={`w-full text-left text-[11px] py-1 px-2 rounded transition-colors ${
                              selectedSubcategory === sub
                                ? 'text-[#EA580C] font-bold bg-orange-50'
                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                          >
                            • {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Standard Quick Filter */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Filter by Standard
                </label>
                <select
                  value={standardFilter}
                  onChange={(e) => setStandardFilter(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-[#EA580C]"
                >
                  <option value="all">All Standards (ASTM / EN / JIS)</option>
                  <option value="ASTM">ASTM (American Standards)</option>
                  <option value="EN">EN (European Standards)</option>
                  <option value="JIS">JIS (Japanese Standards)</option>
                  <option value="API">API 5L (Oil &amp; Gas Line Pipe)</option>
                </select>
              </div>

              {/* Sidebar Quick Quote Box */}
              <div className="p-4 bg-slate-900 rounded-lg text-white space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                  Need Custom Slitting?
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  We customize coil widths from 50mm to 2000mm with precision gauge tolerances.
                </p>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full bg-[#EA580C] hover:bg-[#d94e09] text-white py-2 rounded text-xs font-bold transition-colors"
                >
                  Inquire Mill Desk
                </button>
              </div>

            </div>
          </aside>

          {/* MAIN CATALOG GRID */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Search and Filter Top Bar */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Search input */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search steel grades, e.g. A36, 304, Z275, S355..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs text-slate-500">
                <span>
                  Showing <strong className="text-slate-800">{filteredProducts.length}</strong> of {PRODUCTS.length} series
                </span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-[#EA580C] hover:underline font-semibold"
                  >
                    Clear Search
                  </button>
                )}
              </div>

            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-slate-200 space-y-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-700 text-sm">No steel products found matching criteria</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try adjusting your search keywords, standards filter, or category selection.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                    setSearchQuery('');
                    setStandardFilter('all');
                  }}
                  className="text-xs text-[#EA580C] font-bold underline"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Preview with Hover */}
                      <div className="relative h-48 bg-slate-900 overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-[#0F2B48]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                          {prod.subcategory}
                        </div>
                        <div className="absolute bottom-2.5 right-2.5 bg-black/75 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">
                          MOQ: {prod.moq}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-3">
                        <h3 
                          onClick={() => onNavigate('product-detail', prod.slug)}
                          className="font-bold text-[#0F2B48] text-sm hover:text-[#EA580C] cursor-pointer transition-colors leading-snug line-clamp-2"
                        >
                          {prod.name}
                        </h3>

                        {/* Specs Badges */}
                        <div className="space-y-1.5 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100">
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-700">Standards:</span>
                            <span className="font-mono text-slate-800">{prod.standards[0]}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-700">Gauge Range:</span>
                            <span className="font-mono text-slate-800">{prod.thicknessRange}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-700">Width Range:</span>
                            <span className="font-mono text-slate-800">{prod.widthRange}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onNavigate('product-detail', prod.slug)}
                        className="w-full text-xs font-semibold py-2 px-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors text-center"
                      >
                        Technical Specs
                      </button>
                      <button
                        onClick={() => onOpenQuoteModal(prod.name)}
                        className="w-full text-xs font-bold py-2 px-2 text-white bg-[#EA580C] hover:bg-[#d94e09] rounded transition-colors text-center shadow-xs"
                      >
                        Request Quote
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
};
