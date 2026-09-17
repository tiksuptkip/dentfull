import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { TransmissionConsole } from './components/TransmissionConsole';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { QualityPage } from './pages/QualityPage';
import { FactoryPage } from './pages/FactoryPage';
import { ContactPage } from './pages/ContactPage';
import { TransmissionResult, DENTFULL_SALES_EMAIL } from './services/rfqService';
import { SendHorizontal, Terminal, Phone, Mail } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('hot-rolled-steel-coil');
  
  // Modal states
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);

  // Transmission Console states
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [lastTransmission, setLastTransmission] = useState<TransmissionResult | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProductId]);

  const handleNavigate = (page: PageId, productId?: string) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
  };

  const handleOpenQuoteModal = (productName?: string) => {
    setQuoteProduct(productName);
    setIsQuoteOpen(true);
  };

  const handleTransmissionComplete = (result: TransmissionResult) => {
    setLastTransmission(result);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#EA580C] selection:text-white">
      
      {/* Global Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage
            productId={selectedProductId}
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'quality' && (
          <QualityPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'factory' && (
          <FactoryPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
      </main>

      {/* Global Floating Quick Action Dock */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {/* Email Gateway Inspector Pill */}
        <button
          onClick={() => setIsConsoleOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/90 hover:bg-slate-900 text-slate-200 text-xs font-mono rounded-full border border-slate-700 shadow-lg backdrop-blur-xs transition-transform hover:scale-105"
          title="Open Email Transmission & Gateway Inspector"
        >
          <Terminal className="w-3.5 h-3.5 text-[#EA580C]" />
          <span>Email Gateway: <strong className="text-white">sales@dentfull.com</strong></span>
        </button>

        {/* Quick RFQ Floating Button */}
        <button
          onClick={() => handleOpenQuoteModal()}
          className="flex items-center gap-2 px-5 py-3.5 bg-[#EA580C] hover:bg-[#d94e09] text-white rounded-full font-bold text-sm shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          aria-label="Request Fast Factory Quotation"
        >
          <SendHorizontal className="w-4 h-4" />
          <span>Get Factory Quote</span>
        </button>
      </div>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Request Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedProduct={quoteProduct}
        onTransmissionComplete={handleTransmissionComplete}
      />

      {/* Transmission / Backend Console */}
      <TransmissionConsole
        isOpen={isConsoleOpen}
        onClose={() => setIsConsoleOpen(false)}
        lastTransmission={lastTransmission}
      />

    </div>
  );
}

export default App;
