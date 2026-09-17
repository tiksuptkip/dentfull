import React, { useState, useEffect } from 'react';
import { 
  X, 
  SendHorizontal, 
  CheckCircle2, 
  AlertCircle, 
  UploadCloud, 
  ShieldCheck, 
  Building2, 
  Mail, 
  Phone, 
  FileText, 
  Layers, 
  Anchor, 
  Eye, 
  Copy, 
  Check 
} from 'lucide-react';
import { DENTFULL_SALES_EMAIL, submitRFQ, TransmissionResult } from '../services/rfqService';
import { PRODUCTS } from '../data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
  preselectedProduct?: string;
  onViewConsole?: (result: TransmissionResult) => void;
  onTransmissionComplete?: (result: TransmissionResult) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultProduct,
  preselectedProduct,
  onViewConsole,
  onTransmissionComplete
}) => {
  const initialProd = preselectedProduct || defaultProduct || 'Prime Hot Rolled Steel Coil (HRC)';
  const handleNotifyConsole = onTransmissionComplete || onViewConsole;
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneWhatsapp, setPhoneWhatsapp] = useState('');
  const [country, setCountry] = useState('');
  const [productOfInterest, setProductOfInterest] = useState(initialProd);
  const [quantityMetricTons, setQuantityMetricTons] = useState('50');
  const [targetPort, setTargetPort] = useState('');
  const [incoterms, setIncoterms] = useState<'FOB' | 'CIF' | 'CFR' | 'EXW' | 'DDP'>('CIF');
  const [message, setMessage] = useState('');
  const [attachmentName, setAttachmentName] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submissionResult, setSubmissionResult] = useState<TransmissionResult | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setProductOfInterest(defaultProduct);
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachmentName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Strict validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name or commercial representative name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please provide a valid corporate/business email address.');
      return;
    }
    if (!phoneWhatsapp.trim()) {
      setErrorMsg('Please enter your phone or WhatsApp number with country code for rapid quoting.');
      return;
    }

    setLoading(true);

    try {
      const result = await submitRFQ({
        fullName: fullName.trim(),
        companyName: companyName.trim() || 'Direct Procurement Buyer',
        email: email.trim(),
        phoneWhatsapp: phoneWhatsapp.trim(),
        country: country.trim() || 'International',
        productOfInterest,
        quantityMetricTons: quantityMetricTons.trim() || '25',
        targetPort: targetPort.trim() || 'CIF Major Seaport',
        incoterms,
        message: message.trim(),
        attachmentName: attachmentName || undefined
      });

      setSubmissionResult(result);
      if (handleNotifyConsole) {
        handleNotifyConsole(result);
      }
    } catch (err) {
      setErrorMsg('Failed to dispatch inquiry to sales@dentfull.com. Please retry or contact directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DENTFULL_SALES_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Top Header */}
        <div className="bg-[#0F2B48] text-white p-5 sm:p-6 border-b-4 border-[#EA580C] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA580C] mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Commercial RFQ • dentfull.com</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-['Montserrat',sans-serif] tracking-tight">
            Request Formal Mill Quotation &amp; Specs
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Directly routed to <span className="text-white font-semibold underline underline-offset-2">{DENTFULL_SALES_EMAIL}</span>. Guaranteed technical response within 12 hours.
          </p>
        </div>

        {/* Modal Content Body */}
        <div className="p-6">
          {submissionResult ? (
            /* SUCCESS STATE */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-[#0F2B48]">
                  Inquiry Dispatched Successfully!
                </h4>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm max-w-lg mx-auto font-medium">
                  "Thank you for contacting dentfull! Your inquiry has been received and routed to our sales team at <strong>sales@dentfull.com</strong>. An engineer will follow up with formal pricing within 12 hours."
                </div>
              </div>

              {/* Submission Summary Table */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left text-xs max-w-lg mx-auto space-y-2">
                <div className="font-bold text-slate-800 uppercase tracking-wide border-b border-slate-200 pb-1 flex justify-between">
                  <span>RFQ Reference: {submissionResult.submission.id}</span>
                  <span className="text-emerald-600 font-bold">STATUS: TRANSMITTED</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div><strong>Buyer:</strong> {submissionResult.submission.fullName} ({submissionResult.submission.companyName})</div>
                  <div><strong>Product:</strong> {submissionResult.submission.productOfInterest}</div>
                  <div><strong>Tonnage:</strong> {submissionResult.submission.quantityMetricTons} MT</div>
                  <div><strong>Target Port:</strong> {submissionResult.submission.targetPort} ({submissionResult.submission.incoterms})</div>
                  <div className="col-span-2"><strong>Routed To:</strong> <span className="text-[#EA580C] font-bold">{DENTFULL_SALES_EMAIL}</span></div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {onViewConsole && (
                  <button
                    onClick={() => {
                      onViewConsole(submissionResult);
                      onClose();
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 text-white rounded text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>View Dispatched Email HTML Table</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    setSubmissionResult(null);
                    onClose();
                  }}
                  className="px-6 py-2 bg-[#EA580C] hover:bg-[#d94e09] text-white rounded text-xs font-bold transition-colors shadow"
                >
                  Close &amp; Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            /* RFQ INPUT FORM */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name / Contact Person <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / Procurement Dept"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Industrial Manufacturing Ltd."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Corporate Email (Official Pricing Recipient) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. buyer@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp with Country Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +1 555 123 4567 / +971 50 1234567"
                    value={phoneWhatsapp}
                    onChange={(e) => setPhoneWhatsapp(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Product of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={productOfInterest}
                    onChange={(e) => setProductOfInterest(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Custom Carbon / Alloy Steel Specifications">
                      Custom Carbon / Alloy Steel Specifications
                    </option>
                    <option value="Stainless Steel Tubes / Decorative Coils">
                      Stainless Steel Tubes / Decorative Coils
                    </option>
                    <option value="Hot Dip Galvanized Roofing / Purlins">
                      Hot Dip Galvanized Roofing / Purlins
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Estimated Quantity (MT) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 50"
                    value={quantityMetricTons}
                    onChange={(e) => setQuantityMetricTons(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Destination Seaport / Delivery City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Port of Rotterdam / Jebel Ali / Santos"
                    value={targetPort}
                    onChange={(e) => setTargetPort(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Incoterms Requested
                  </label>
                  <select
                    value={incoterms}
                    onChange={(e) => setIncoterms(e.target.value as any)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  >
                    <option value="CIF">CIF - Cost, Insurance &amp; Freight (Recommended)</option>
                    <option value="FOB">FOB - Free on Board (Chinese Main Ports)</option>
                    <option value="CFR">CFR - Cost &amp; Freight</option>
                    <option value="DDP">DDP - Delivered Duty Paid</option>
                    <option value="EXW">EXW - Ex-Works (Factory Yard)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Detailed Technical Specifications / Dimensions / Tolerances
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify required steel grade (e.g. ASTM A36, S355JR, 304), thickness, width, surface finish (oiled, pickled, zero spangle), and packaging preferences..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                ></textarea>
              </div>

              {/* Optional attachment simulation */}
              <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-dashed border-slate-300 rounded text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <UploadCloud className="w-4 h-4 text-[#EA580C]" />
                  <span>{attachmentName ? `Attached: ${attachmentName}` : 'Attach Technical Drawings / BOM (PDF/DWG/XLSX)'}</span>
                </div>
                <label className="cursor-pointer bg-white px-2.5 py-1 border border-slate-300 rounded text-[11px] font-semibold text-slate-700 hover:bg-slate-100">
                  Browse
                  <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#EA580C] hover:bg-[#d94e09] text-white py-3 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Routing Inquiry to sales@dentfull.com...</span>
                    </>
                  ) : (
                    <>
                      <SendHorizontal className="w-4 h-4" />
                      <span>Transmit RFQ to sales@dentfull.com</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-500 pt-1 flex items-center justify-center gap-3">
                <span>🔒 Confidential B2B Inquiry</span>
                <span>•</span>
                <span>ISO 9001 Audited</span>
                <span>•</span>
                <button 
                  type="button" 
                  onClick={handleCopyEmail}
                  className="text-slate-600 hover:text-[#EA580C] underline flex items-center gap-1"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>Copy sales@dentfull.com</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
