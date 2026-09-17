import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Mail, Clock } from "lucide-react";
import { RfqSubmissionResponse } from "../types";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmissionSuccess: (response: RfqSubmissionResponse) => void;
  onOpenAuditor: () => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  onSubmissionSuccess,
  onOpenAuditor,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("25 Metric Tons");
  const [specs, setSpecs] = useState("ASTM A36 3.0mm × 1250mm");
  const [message, setMessage] = useState("Please provide earliest FOB/CIF quote for Hot Rolled Steel Coils.");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState<RfqSubmissionResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg("Please fill in all required fields marked with *");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          company,
          quantity,
          specifications: specs,
          productName: "Hot Rolled Steel Coil (HR Coil)",
          message,
          tradeTerms: "CIF",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch quote request");
      }

      setSuccessResult(data);
      onSubmissionSuccess(data);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to send. Please email sales@dentfull.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-300 w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <h3 className="font-extrabold text-base font-['Barlow'] tracking-tight">
              Fast Commercial Quote / RFQ
            </h3>
            <p className="text-xs text-slate-400">
              Dispatches directly to <strong className="text-orange-400">sales@dentfull.com</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {successResult ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 font-['Barlow']">
                  Inquiry Successfully Sent!
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Reference ID: <strong className="font-mono text-blue-800 bg-blue-50 px-2 py-0.5 rounded">{successResult.rfqId}</strong>
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  Dispatched to <strong>sales@dentfull.com</strong>. Our technical engineering team will reply with proforma quote within 2 hours.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenAuditor();
                  }}
                  className="w-full py-2.5 rounded bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold cursor-pointer"
                >
                  View Sent Email in Auditor
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold cursor-pointer"
                >
                  Back to Product Page
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {errorMsg && (
                <div className="p-2.5 bg-red-50 border border-red-300 rounded text-red-800 font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Ross"
                    className="w-full px-3 py-2 bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. d.ross@company.com"
                    className="w-full px-3 py-2 bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Ltd."
                    className="w-full px-3 py-2 bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="25 Metric Tons"
                    className="w-full px-3 py-2 bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Specifications
                  </label>
                  <input
                    type="text"
                    value={specs}
                    onChange={(e) => setSpecs(e.target.value)}
                    placeholder="ASTM A36 3.0mm × 1250mm"
                    className="w-full px-3 py-2 bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Inquiry Message *
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold text-xs uppercase tracking-wide cursor-pointer transition-colors shadow"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending to sales@dentfull.com...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Quote Request</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <Clock className="w-3 h-3 text-emerald-600" />
                <span>Standard Reply Time: &lt; 2 Hours Guaranteed</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
