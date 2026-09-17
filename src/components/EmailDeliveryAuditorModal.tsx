import React, { useEffect, useState } from "react";
import { X, Mail, CheckCircle2, Clock, RefreshCw, FileText, ExternalLink, ShieldCheck } from "lucide-react";
import { StoredInquirySummary } from "../types";

interface EmailDeliveryAuditorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailDeliveryAuditorModal: React.FC<EmailDeliveryAuditorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inquiries, setInquiries] = useState<StoredInquirySummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedInquiryId, setSelectedInquiryId] = useState<string | null>(null);
  const [htmlPreview, setHtmlPreview] = useState<string | null>(null);
  const [loadingHtml, setLoadingHtml] = useState(false);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries");
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
        if (data.inquiries && data.inquiries.length > 0 && !selectedInquiryId) {
          setSelectedInquiryId(data.inquiries[0].id);
        }
      }
    } catch (e) {
      console.error("Failed to load inquiries:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedInquiryId) {
      setLoadingHtml(true);
      fetch(`/api/inquiries/${selectedInquiryId}/html`)
        .then((res) => res.text())
        .then((html) => setHtmlPreview(html))
        .catch((e) => setHtmlPreview(`<p>Failed to load email preview: ${e.message}</p>`))
        .finally(() => setLoadingHtml(false));
    }
  }, [selectedInquiryId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-300 w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base font-['Barlow'] tracking-tight">
                Live Email Dispatch Auditor · sales@dentfull.com
              </h3>
              <p className="text-xs text-slate-400">
                Inspect real-time RFQ submissions and formatted HTML summaries dispatched to Dentfull sales desk.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Refresh log list"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Two-panel list & email preview */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {/* Left Panel: Inquiries List (4 cols) */}
          <div className="md:col-span-5 flex flex-col bg-slate-50 overflow-y-auto max-h-[35vh] md:max-h-[75vh]">
            <div className="p-3 bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-700 flex justify-between items-center">
              <span>Dispatched RFQs ({inquiries.length})</span>
              <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Target: sales@dentfull.com
              </span>
            </div>

            {inquiries.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500 space-y-2">
                <FileText className="w-8 h-8 mx-auto text-slate-400" />
                <p className="font-semibold text-slate-700">No Inquiries Submitted Yet</p>
                <p>Fill out the RFQ form on the landing page to trigger an email dispatch.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-200">
                {inquiries.map((inq) => {
                  const isSelected = inq.id === selectedInquiryId;
                  return (
                    <button
                      key={inq.id}
                      onClick={() => setSelectedInquiryId(inq.id)}
                      className={`w-full text-left p-3.5 transition-colors cursor-pointer block ${
                        isSelected
                          ? "bg-white border-l-4 border-orange-600 shadow-2xs"
                          : "hover:bg-slate-100/80"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-blue-900">{inq.id}</span>
                        <span className="text-[10px] text-slate-500">
                          {new Date(inq.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 truncate">
                        {inq.fullName} {inq.company ? `(${inq.company})` : ""}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {inq.email} · {inq.phone}
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[10px]">
                        <span className="text-orange-700 font-semibold bg-orange-50 px-1.5 py-0.5 rounded">
                          {inq.quantity || "Negotiable"}
                        </span>
                        <span className="text-emerald-700 font-semibold">
                          ✓ {inq.deliveryStatus}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Panel: HTML Email Preview (7 cols) */}
          <div className="md:col-span-7 flex flex-col bg-white overflow-hidden max-h-[55vh] md:max-h-[75vh]">
            <div className="p-3 bg-slate-100 border-b border-slate-200 text-xs text-slate-700 flex items-center justify-between">
              <span className="font-bold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                Rendered HTML Output (Received by sales@dentfull.com)
              </span>
              {selectedInquiryId && (
                <a
                  href={`/api/inquiries/${selectedInquiryId}/html`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1 text-[11px] font-semibold"
                >
                  <span>Open in Tab</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-slate-100/50">
              {loadingHtml ? (
                <div className="flex items-center justify-center h-48 text-xs text-slate-500">
                  <RefreshCw className="w-5 h-5 animate-spin text-orange-500 mr-2" />
                  Rendering email template...
                </div>
              ) : htmlPreview ? (
                <iframe
                  title="Rendered Email Preview"
                  srcDoc={htmlPreview}
                  className="w-full h-full min-h-[420px] rounded border border-slate-300 bg-white shadow-xs"
                />
              ) : (
                <div className="text-center p-12 text-xs text-slate-400">
                  Select an inquiry from the left to preview the dispatched email.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Every RFQ submission triggers an automated executive lead digest with buyer specs & reply-to headers.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
          >
            Close Auditor
          </button>
        </div>
      </div>
    </div>
  );
};
