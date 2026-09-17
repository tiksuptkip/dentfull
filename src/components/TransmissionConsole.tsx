import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Terminal, 
  FileCode, 
  Check, 
  Copy, 
  Send, 
  ShieldCheck, 
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import { TransmissionResult, DENTFULL_SALES_EMAIL, getRecentSubmissions } from '../services/rfqService';

interface TransmissionConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  lastTransmission: TransmissionResult | null;
}

export const TransmissionConsole: React.FC<TransmissionConsoleProps> = ({
  isOpen,
  onClose,
  lastTransmission
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'html-code' | 'php-mailer' | 'serverless'>('preview');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const recent = getRecentSubmissions();
  const currentResult = lastTransmission || {
    success: true,
    message: 'System active. Ready for B2B RFQ transmissions.',
    channel: 'direct-api' as const,
    htmlPreview: recent.length > 0 ? undefined : '',
    routedTo: DENTFULL_SALES_EMAIL,
    timestamp: new Date().toISOString(),
    submission: recent[0]
  };

  const sampleHtml = currentResult.htmlPreview || (currentResult.submission ? `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #f1f5f9; padding: 20px; }
    .card { background: #fff; max-width: 600px; margin: auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; }
    .header { background: #0F2B48; color: #fff; padding: 20px; border-bottom: 4px solid #EA580C; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px; text-align: left; }
    th { background: #f8fafc; color: #475569; width: 35%; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2 style="margin:0;">New dentfull.com RFQ / Order Inquiry</h2>
      <p style="margin:4px 0 0; font-size:12px;">Dispatched to sales@dentfull.com</p>
    </div>
    <div style="padding: 20px;">
      <table>
        <tr><th>Submission Timestamp</th><td>${currentResult.submission.timestamp}</td></tr>
        <tr><th>Sender Name</th><td>${currentResult.submission.fullName}</td></tr>
        <tr><th>Company Name</th><td>${currentResult.submission.companyName}</td></tr>
        <tr><th>Email</th><td>${currentResult.submission.email}</td></tr>
        <tr><th>Phone/WhatsApp</th><td>${currentResult.submission.phoneWhatsapp}</td></tr>
        <tr><th>Specific Product Requested</th><td>${currentResult.submission.productOfInterest}</td></tr>
        <tr><th>Quantity/Tonnage</th><td>${currentResult.submission.quantityMetricTons} MT</td></tr>
        <tr><th>Destination Port</th><td>${currentResult.submission.targetPort}</td></tr>
        <tr><th>Customer Message</th><td>${currentResult.submission.message}</td></tr>
      </table>
    </div>
  </div>
</body>
</html>` : '');

  const phpSnippet = `<?php
// dentfull.com Enterprise RFQ Mailer Handler
header('Content-Type: application/json');
$to = 'sales@dentfull.com';
$data = json_decode(file_get_contents('php://input'), true);

$subject = "New dentfull.com RFQ: " . $data['productOfInterest'] . " (" . $data['quantityMetricTons'] . " MT)";
$headers = "MIME-Version: 1.0\\r\\nContent-type: text/html; charset=UTF-8\\r\\nFrom: dentfull Portal <no-reply@dentfull.com>\\r\\n";

// Generated HTML table payload
$body = $data['htmlEmail'];

$sent = mail($to, $subject, $body, $headers);
echo json_encode(['success' => $sent, 'target' => 'sales@dentfull.com']);
?>`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#0A192F] text-white p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-orange-600/20 text-[#EA580C] rounded">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#EA580C]">
                dentfull.com Backend Gateway
              </div>
              <h3 className="text-base font-bold text-white">
                Email Transmission &amp; RFQ Routing Inspector
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">
              Target: <strong className="text-white">{DENTFULL_SALES_EMAIL}</strong>
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 flex items-center gap-2 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('preview')}
            className={`py-3 px-3 border-b-2 transition-colors ${
              activeTab === 'preview'
                ? 'border-[#EA580C] text-[#0F2B48] font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Live HTML Email Preview
          </button>
          <button
            onClick={() => setActiveTab('html-code')}
            className={`py-3 px-3 border-b-2 transition-colors ${
              activeTab === 'html-code'
                ? 'border-[#EA580C] text-[#0F2B48] font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            HTML Email Source Code
          </button>
          <button
            onClick={() => setActiveTab('php-mailer')}
            className={`py-3 px-3 border-b-2 transition-colors ${
              activeTab === 'php-mailer'
                ? 'border-[#EA580C] text-[#0F2B48] font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            PHP mail() / PHPMailer Script
          </button>
          <button
            onClick={() => setActiveTab('serverless')}
            className={`py-3 px-3 border-b-2 transition-colors ${
              activeTab === 'serverless'
                ? 'border-[#EA580C] text-[#0F2B48] font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Serverless API Setup (Web3Forms/Formspree)
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500">Routing Channel:</span>{' '}
                  <span className="font-bold text-emerald-600">Enterprise Verified Gateway</span> |{' '}
                  <span className="text-slate-500">Destination:</span>{' '}
                  <span className="font-bold text-[#0F2B48]">{DENTFULL_SALES_EMAIL}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(sampleHtml)}
                  className="flex items-center gap-1 text-[#EA580C] hover:text-orange-700 font-semibold"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied HTML' : 'Copy HTML'}</span>
                </button>
              </div>

              {/* Rendered HTML inside iframe-like container */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-300 overflow-hidden">
                <div className="bg-slate-200 px-3 py-1.5 text-[11px] font-mono text-slate-600 border-b border-slate-300 flex items-center justify-between">
                  <span>To: sales@dentfull.com | Subject: New dentfull.com RFQ / Order Inquiry</span>
                  <span className="text-emerald-700 font-semibold">● Ready For Email Clients</span>
                </div>
                <div 
                  className="p-4 overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: sampleHtml }}
                />
              </div>
            </div>
          )}

          {activeTab === 'html-code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>RFC 2822 Compliant HTML email table template:</span>
                <button
                  onClick={() => copyToClipboard(sampleHtml)}
                  className="flex items-center gap-1 text-slate-800 hover:text-[#EA580C] font-semibold"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Code</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-200 rounded-lg text-xs font-mono overflow-x-auto max-h-96">
                <code>{sampleHtml}</code>
              </pre>
            </div>
          )}

          {activeTab === 'php-mailer' && (
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 p-3 rounded text-xs text-blue-900">
                This PHP backend mailer is located in <code className="bg-white px-1 py-0.5 rounded border border-blue-200">/public/api/send-mail.php</code>. It accepts JSON POST payloads from the RFQ forms, parses the customer details, and dispatches the HTML email table to <strong>sales@dentfull.com</strong> via PHP <code>mail()</code> or PHPMailer.
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Server-side PHP mail handler script:</span>
                <button
                  onClick={() => copyToClipboard(phpSnippet)}
                  className="flex items-center gap-1 text-slate-800 hover:text-[#EA580C] font-semibold"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy PHP Script</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-emerald-300 rounded-lg text-xs font-mono overflow-x-auto max-h-96">
                <code>{phpSnippet}</code>
              </pre>
            </div>
          )}

          {activeTab === 'serverless' && (
            <div className="space-y-4 text-xs text-slate-700">
              <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-3">
                <h4 className="font-bold text-sm text-[#0F2B48]">
                  Dual Setup 1: Client-Side Serverless Formspree &amp; Web3Forms Handler
                </h4>
                <p>
                  To receive inquiries straight to <code className="bg-slate-100 px-1 py-0.5 rounded font-mono font-bold text-[#EA580C]">sales@dentfull.com</code> without maintaining a PHP or Node server, you can plug in any Formspree or Web3Forms access key:
                </p>

                <div className="p-3 bg-slate-50 border border-slate-300 rounded font-mono text-[11px] space-y-1">
                  <div>POST https://api.web3forms.com/submit</div>
                  <div>access_key: "YOUR-WEB3FORMS-ACCESS-KEY"</div>
                  <div>to_email: "sales@dentfull.com"</div>
                  <div>subject: "New dentfull.com RFQ / Order Inquiry"</div>
                </div>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-800">
                  ✓ The client application automatically fallback-routes inquiries and generates the complete structured HTML table for sales follow-up within 12 hours.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-slate-200 p-3 px-6 flex items-center justify-between text-xs text-slate-500">
          <div>dentfull.com Inquiries Gateway • Active</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded font-semibold transition-colors"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
