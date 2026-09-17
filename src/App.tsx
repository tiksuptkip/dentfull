/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TopUtilityBar } from "./components/TopUtilityBar";
import { MainNavigationHeader } from "./components/MainNavigationHeader";
import { BreadcrumbNav } from "./components/BreadcrumbNav";
import { ProductHeroSection } from "./components/ProductHeroSection";
import { TabbedContentSection } from "./components/TabbedContentSection";
import { DirectRfqSection } from "./components/DirectRfqSection";
import { CompanyFooter } from "./components/CompanyFooter";
import { StickyContactBar } from "./components/StickyContactBar";
import { EmailDeliveryAuditorModal } from "./components/EmailDeliveryAuditorModal";
import { SpecSheetDownloadModal } from "./components/SpecSheetDownloadModal";
import { QuickQuoteModal } from "./components/QuickQuoteModal";
import { RfqSubmissionResponse } from "./types";

export default function App() {
  const [activePreset, setActivePreset] = useState<string>("ASTM A36 3.0mm × 1250mm × C (Mill Edge)");
  const [isAuditorOpen, setIsAuditorOpen] = useState<boolean>(false);
  const [isSpecModalOpen, setIsSpecModalOpen] = useState<boolean>(false);
  const [isQuickModalOpen, setIsQuickModalOpen] = useState<boolean>(false);
  const [inquiryCount, setInquiryCount] = useState<number>(0);

  const scrollToRfq = () => {
    const el = document.getElementById("rfq-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectPreset = (preset: string) => {
    setActivePreset(preset);
    scrollToRfq();
  };

  const handleSubmissionSuccess = (response: RfqSubmissionResponse) => {
    setInquiryCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col font-['Public_Sans',sans-serif]">
      {/* 1. Top Utility Contact & Certification Bar */}
      <TopUtilityBar
        onOpenAuditor={() => setIsAuditorOpen(true)}
        inquiryCount={inquiryCount}
      />

      {/* 2. Main Navigation Header */}
      <MainNavigationHeader
        onScrollToRfq={scrollToRfq}
        onOpenQuickModal={() => setIsQuickModalOpen(true)}
      />

      {/* 3. Breadcrumb Navigation & Document Quick Actions */}
      <BreadcrumbNav
        onOpenSpecModal={() => setIsSpecModalOpen(true)}
      />

      {/* 4. Two-Column Product Hero Section (Gallery with Hover Zoom & Specs Box) */}
      <main className="flex-1">
        <ProductHeroSection
          onScrollToRfq={scrollToRfq}
          onOpenQuickModal={() => setIsQuickModalOpen(true)}
          onOpenSpecModal={() => setIsSpecModalOpen(true)}
          onSelectPreset={handleSelectPreset}
        />

        {/* 5. Tabbed Detailed Content Section (Specs Table, Process, Shipping, Factory) */}
        <TabbedContentSection
          onScrollToRfq={scrollToRfq}
          onOpenSpecModal={() => setIsSpecModalOpen(true)}
        />

        {/* 6. Direct RFQ / Order Form Section (Dispatches to sales@dentfull.com) */}
        <DirectRfqSection
          initialPreset={activePreset}
          onSubmissionSuccess={handleSubmissionSuccess}
          onOpenAuditor={() => setIsAuditorOpen(true)}
        />
      </main>

      {/* 7. Corporate Manufacturing Footer */}
      <CompanyFooter
        onOpenAuditor={() => setIsAuditorOpen(true)}
        onOpenSpecModal={() => setIsSpecModalOpen(true)}
        onScrollToRfq={scrollToRfq}
      />

      {/* Floating Sticky Conversion Bar */}
      <StickyContactBar
        onScrollToRfq={scrollToRfq}
        onOpenQuickModal={() => setIsQuickModalOpen(true)}
      />

      {/* Modals */}
      <EmailDeliveryAuditorModal
        isOpen={isAuditorOpen}
        onClose={() => setIsAuditorOpen(false)}
      />

      <SpecSheetDownloadModal
        isOpen={isSpecModalOpen}
        onClose={() => setIsSpecModalOpen(false)}
      />

      <QuickQuoteModal
        isOpen={isQuickModalOpen}
        onClose={() => setIsQuickModalOpen(false)}
        onSubmissionSuccess={handleSubmissionSuccess}
        onOpenAuditor={() => setIsAuditorOpen(true)}
      />
    </div>
  );
}
