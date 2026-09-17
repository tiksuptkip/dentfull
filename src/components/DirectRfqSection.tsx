import React, { useState, useRef } from "react";
import { 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Paperclip, 
  X, 
  ShieldCheck, 
  Clock, 
  Mail, 
  FileText, 
  Building, 
  User, 
  Phone, 
  Globe2, 
  RotateCcw,
  Sparkles
} from "lucide-react";
import { RfqFormData, RfqSubmissionResponse } from "../types";

interface DirectRfqSectionProps {
  initialPreset?: string;
  onSubmissionSuccess: (response: RfqSubmissionResponse) => void;
  onOpenAuditor: () => void;
}

export const DirectRfqSection: React.FC<DirectRfqSectionProps> = ({
  initialPreset,
  onSubmissionSuccess,
  onOpenAuditor,
}) => {
  const [formData, setFormData] = useState<RfqFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    quantity: "50 Metric Tons",
    specifications: initialPreset || "ASTM A36 3.0mm × 1250mm × C (Mill Edge)",
    productName: "Hot Rolled Steel Coil (HR Coil)",
    port: "Port of Long Beach, USA",
    tradeTerms: "CIF",
    message: "Please quote competitive FOB & CIF pricing for 50 MT Hot Rolled Steel Coils with MTC EN 10204 3.1 certificate. Provide earliest shipping vessel schedule.",
    attachmentName: undefined,
    attachmentData: undefined,
    honeypot: "",
  });

  // Keep synced if preset changes
  React.useEffect(() => {
    if (initialPreset) {
      setFormData((prev) => ({
        ...prev,
        specifications: initialPreset,
      }));
    }
  }, [initialPreset]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<RfqSubmissionResponse | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required for commercial quotation.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Business email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid business email address (e.g., buyer@company.com).";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone or WhatsApp number is required for dispatch notification.";
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = "Please enter a valid phone number with country code.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please include your inquiry details or order quantity.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      alert("File size exceeds 8MB limit. Please attach a smaller PDF or drawing.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        attachmentName: file.name,
        attachmentData: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAttachment = () => {
    setFormData((prev) => ({
      ...prev,
      attachmentName: undefined,
      attachmentData: undefined,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry to sales@dentfull.com");
      }

      setSubmissionResult(data);
      onSubmissionSuccess(data);
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "Network error. Please try again or email sales@dentfull.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      quantity: "25 Metric Tons",
      specifications: "ASTM A36 3.0mm × 1250mm",
      productName: "Hot Rolled Steel Coil (HR Coil)",
      port: "",
      tradeTerms: "CIF",
      message: "Please send proforma quote with chemical and mechanical test certs.",
      attachmentName: undefined,
      attachmentData: undefined,
      honeypot: "",
    });
    setErrors({});
  };

  return (
    <section id="rfq-section" className="py-12 lg:py-16 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            Direct Factory Procurement RFQ Desk
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Barlow'] tracking-tight">
            Request an Official Quotation / Place an Order
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Submit your procurement specifications below. All quote requests are automatically dispatched directly to our technical sales engineering desk at{" "}
            <a href="mailto:sales@dentfull.com" className="font-bold text-blue-700 underline">
              sales@dentfull.com
            </a>{" "}
            with a guaranteed response SLA within 2 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* SUCCESS STATE ALERT */}
          {submissionResult ? (
            <div id="rfq-success-card" className="border-2 border-emerald-500 bg-emerald-50/80 rounded-xl p-6 sm:p-10 shadow-lg text-slate-900 animate-in zoom-in-95 duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-2 flex-1">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                    Inquiry Dispatched Successfully
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-['Barlow'] text-slate-900">
                    Thank you! Your inquiry has been sent to sales@dentfull.com
                  </h3>
                  <p className="text-sm text-slate-700">
                    Official Reference ID:{" "}
                    <strong className="font-mono text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                      {submissionResult.rfqId}
                    </strong>
                  </p>
                  <p className="text-xs text-slate-600">
                    {submissionResult.statusDetails || "A formatted HTML summary has been transmitted to our commercial export desk."}
                  </p>

                  {/* Estimated response guarantee badge */}
                  <div className="p-4 bg-white rounded-lg border border-emerald-200 mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-slate-800">
                        Response Guarantee: Technical quotation will arrive within <strong>120 minutes</strong>.
                      </span>
                    </div>
                    <button
                      onClick={onOpenAuditor}
                      className="text-blue-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Inspect Formatted Email Log</span>
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                    <a
                      href={`mailto:sales@dentfull.com?subject=Inquiry%20Follow-up%20[${submissionResult.rfqId}]`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Direct Email Follow-up</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ACTIVE FORM */
            <form
              id="direct-rfq-form"
              onSubmit={handleSubmit}
              noValidate
              className="bg-slate-50 border border-slate-300 rounded-xl p-6 sm:p-8 shadow-sm space-y-6"
            >
              {/* Anti-spam honeypot (hidden) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Error Banner */}
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-300 rounded-md text-red-800 text-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                  <a
                    href="mailto:sales@dentfull.com"
                    className="font-bold underline text-red-900"
                  >
                    Email sales@dentfull.com
                  </a>
                </div>
              )}

              {/* SECTION 1: Buyer Contact Credentials */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  1. Contact Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="rfq-fullName-input"
                      type="text"
                      name="fullName"
                      placeholder="e.g. Johnathan Miller"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-xs bg-white rounded border ${
                        errors.fullName ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:ring-blue-500"
                      } focus:outline-none focus:ring-2`}
                      required
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 font-semibold mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Business Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="rfq-email-input"
                      type="email"
                      name="email"
                      placeholder="e.g. j.miller@industrial-corp.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-xs bg-white rounded border ${
                        errors.email ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:ring-blue-500"
                      } focus:outline-none focus:ring-2`}
                      required
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 font-semibold mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Phone / WhatsApp Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="rfq-phone-input"
                      type="tel"
                      name="phone"
                      placeholder="e.g. +1 (555) 349-2910"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-xs bg-white rounded border ${
                        errors.phone ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:ring-blue-500"
                      } focus:outline-none focus:ring-2`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 font-semibold mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      id="rfq-company-input"
                      type="text"
                      name="company"
                      placeholder="e.g. Pacific Fabrication LLC"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Steel Specifications & Commercial Terms */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-orange-600" />
                  2. Order Quantity & Procurement Specifications
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Quantity */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Estimated Quantity (MT)
                    </label>
                    <input
                      id="rfq-quantity-input"
                      type="text"
                      name="quantity"
                      placeholder="e.g. 50 Metric Tons"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
                    />
                  </div>

                  {/* Destination Port */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Destination Port / Country
                    </label>
                    <input
                      id="rfq-port-input"
                      type="text"
                      name="port"
                      placeholder="e.g. Rotterdam, Houston, Callao"
                      value={formData.port}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Trade Terms */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Trade Term
                    </label>
                    <select
                      id="rfq-tradeTerms-select"
                      name="tradeTerms"
                      value={formData.tradeTerms}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                    >
                      <option value="FOB">FOB (Tianjin/Qingdao)</option>
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                      <option value="EXW">EXW (Factory Direct Warehouse)</option>
                    </select>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Dimensions, Grade & Edge Type
                  </label>
                  <input
                    id="rfq-specifications-input"
                    type="text"
                    name="specifications"
                    placeholder="e.g. ASTM A36, 3.0mm Thickness × 1250mm Width, Mill Edge"
                    value={formData.specifications}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs bg-white rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* SECTION 3: Detailed Message & Drawing / Spec Attachment */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-600" />
                  3. Inquiry Notes & Technical Attachments
                </h4>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Special Requirements / Tolerances / Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="rfq-message-textarea"
                    name="message"
                    rows={4}
                    placeholder="Provide details such as delivery schedule, payment term preferences (L/C, T/T), surface oiling preferences, or inspection agency..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-xs bg-white rounded border ${
                      errors.message ? "border-red-500 focus:ring-red-400" : "border-slate-300 focus:ring-blue-500"
                    } focus:outline-none focus:ring-2 leading-relaxed`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1">{errors.message}</p>
                  )}
                </div>

                {/* File Attachment field */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Upload Drawing / Specification File (PDF, DXF, PNG, JPG - Max 8MB)
                  </label>

                  {formData.attachmentName ? (
                    <div className="flex items-center justify-between p-2.5 bg-blue-50 border border-blue-200 rounded text-xs">
                      <div className="flex items-center gap-2 text-blue-900 font-semibold truncate">
                        <Paperclip className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="truncate">{formData.attachmentName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveAttachment}
                        className="p-1 rounded hover:bg-blue-200 text-slate-600 hover:text-red-600 cursor-pointer"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="relative border-2 border-dashed border-slate-300 rounded-md p-3 text-center bg-white hover:bg-slate-50 transition-colors">
                      <input
                        id="rfq-file-attachment"
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileUpload}
                        accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.txt"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                        <Paperclip className="w-4 h-4 text-slate-400" />
                        <span>Click or drag drawing/spec file here to attach to email</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Submit Action */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <button
                  id="rfq-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-md bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-extrabold text-sm sm:text-base tracking-wide uppercase transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Dispatching Inquiry to sales@dentfull.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Inquiry / Place Order</span>
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Commercial Confidentiality Guaranteed · ISO 9001:2015
                  </span>
                  <span>
                    Email Target: <strong className="text-slate-800">sales@dentfull.com</strong>
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
