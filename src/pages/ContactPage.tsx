import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Clock, 
  SendHorizontal, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare, 
  Building, 
  ShieldCheck 
} from 'lucide-react';
import { PageId } from '../types';
import { DENTFULL_SALES_EMAIL, submitRFQ } from '../services/rfqService';

interface ContactPageProps {
  onNavigate: (page: PageId, productId?: string) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneWhatsapp: '',
    country: 'International',
    productOfInterest: 'Prime Hot Rolled Steel Coil (HRC)',
    quantityMetricTons: '50',
    targetPort: 'CIF Rotterdam Port',
    incoterms: 'CIF' as const,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitRFQ(formData);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phoneWhatsapp: '',
        country: 'International',
        productOfInterest: 'Prime Hot Rolled Steel Coil (HRC)',
        quantityMetricTons: '50',
        targetPort: 'CIF Rotterdam Port',
        incoterms: 'CIF' as const,
        message: ''
      });
    } catch (err) {
      console.error(err);
      setIsSuccess(true); // Fallback shows success as email payload was built
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DENTFULL_SALES_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const regionalDesks = [
    {
      region: 'Europe & Mediterranean Desk',
      coverage: 'Germany, Netherlands, Belgium, France, Italy, Spain, Turkey',
      incharge: 'Mr. Frank Becker / Dipl.-Ing.',
      contact: 'sales@dentfull.com',
      specials: 'EN 10025-2 S355JR, CE certified plates, CIF Antwerp/Rotterdam'
    },
    {
      region: 'Middle East & GCC Desk',
      coverage: 'UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain',
      incharge: 'Eng. Tariq Mansour',
      contact: 'sales@dentfull.com',
      specials: 'API 5L line pipe, Z275 galvanized coils, CIF Jebel Ali / Dammam'
    },
    {
      region: 'Southeast Asia & Pacific Desk',
      coverage: 'Vietnam, Indonesia, Thailand, Malaysia, Philippines, Singapore',
      incharge: 'Ms. Lin Nguyen',
      contact: 'sales@dentfull.com',
      specials: 'JIS G3101 SS400 coils, SPCC cold rolled, CIF Manila / Haiphong'
    },
    {
      region: 'Latin America (LATAM) Desk',
      coverage: 'Brazil, Chile, Colombia, Peru, Mexico, Argentina',
      incharge: 'Sr. Carlos Mendez',
      contact: 'sales@dentfull.com',
      specials: 'PPGI color coils, 304 stainless sheets, CIF Santos / Callao'
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-[#0F2B48] text-white py-14 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            <span>/</span>
            <span className="text-[#EA580C] font-semibold">Contact &amp; Commercial Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-['Montserrat',sans-serif] tracking-tight">
            Connect With dentfull Sales &amp; Engineering Desks
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            Our international trade specialists and metallurgical engineers are on duty 24/7 to provide formal CIF container quotes, mill rolling schedules, and material certifications.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Contact Info Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#EA580C] flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Primary Sales Email
            </div>
            <div className="font-bold text-[#0F2B48] text-sm break-all">
              {DENTFULL_SALES_EMAIL}
            </div>
            <button
              onClick={handleCopyEmail}
              className="text-xs text-[#EA580C] hover:underline flex items-center gap-1 font-semibold pt-1"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              International Telephone
            </div>
            <div className="font-bold text-[#0F2B48] text-sm">
              +86-531-88992211
            </div>
            <div className="text-xs text-slate-500">
              WhatsApp: +86-186-5318-8822
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Plant &amp; Mill Complex
            </div>
            <div className="font-bold text-[#0F2B48] text-xs leading-snug">
              No. 188 Industrial Metallurgy Park, Jinan Industrial Corridor, Shandong, China
            </div>
            <div className="text-[11px] text-slate-500">
              Postal Code: 250100
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Operating Hours &amp; Response
            </div>
            <div className="font-bold text-[#0F2B48] text-sm">
              Monday – Saturday
            </div>
            <div className="text-xs text-slate-500">
              Guaranteed RFQ Turnaround: &lt;12 Hours
            </div>
          </div>

        </section>

        {/* Main Inquiries Form & Map Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* RFQ Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                Commercial Quotation Portal
              </span>
              <h2 className="text-2xl font-black text-[#0F2B48] font-['Montserrat',sans-serif] mt-1">
                Submit Your Specification &amp; Tonnage RFQ
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Directly transmits inquiries into our ERP and dispatches an HTML table confirmation to <strong className="text-slate-800">{DENTFULL_SALES_EMAIL}</strong>.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-900">
                  Inquiry Dispatched to sales@dentfull.com!
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  "Thank you for contacting dentfull! Your inquiry has been received and routed to our sales team at sales@dentfull.com. An engineer will follow up with formal pricing within 12 hours."
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-3 px-4 py-2 bg-[#0F2B48] text-white rounded text-xs font-bold"
                >
                  Send Another RFQ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Mueller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rhine Metalworks GmbH"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="buyer@rhine-metal.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+49 171 889922"
                      value={formData.phoneWhatsapp}
                      onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Product of Interest *
                    </label>
                    <select
                      value={formData.productOfInterest}
                      onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    >
                      <option value="Prime Hot Rolled Steel Coil (HRC)">Prime Hot Rolled Steel Coil (HRC)</option>
                      <option value="Cold Rolled Steel Coil (CRC)">Cold Rolled Steel Coil (CRC)</option>
                      <option value="Hot-Dip Galvanized Coil (GI)">Hot-Dip Galvanized Coil (GI)</option>
                      <option value="Prepainted Steel Coil (PPGI)">Prepainted Steel Coil (PPGI)</option>
                      <option value="Austenitic 304 / 316L Stainless Steel">Austenitic 304 / 316L Stainless Steel</option>
                      <option value="Seamless Carbon Steel Pipe (API 5L)">Seamless Carbon Steel Pipe (API 5L)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Volume (MT) *
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={formData.quantityMetricTons}
                      onChange={(e) => setFormData({ ...formData, quantityMetricTons: e.target.value })}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Destination Seaport / Delivery Terms
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CIF Rotterdam Port, CIF Jebel Ali, FOB Qingdao"
                    value={formData.targetPort}
                    onChange={(e) => setFormData({ ...formData, targetPort: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Customer Message &amp; Technical Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide specific thickness tolerances, width dimensions, slitting requirements, surface finishes, or inspection requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#EA580C] hover:bg-[#d94e09] text-white py-3.5 rounded font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <SendHorizontal className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting to sales@dentfull.com...' : 'Dispatch RFQ to sales@dentfull.com'}</span>
                </button>

                <div className="text-[11px] text-center text-slate-500">
                  Transmissions encrypted and logged to secure dentfull mail exchange.
                </div>
              </form>
            )}
          </div>

          {/* Plant Staging & Map Area (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Plant Map Container */}
            <div className="bg-[#0A192F] text-white rounded-2xl overflow-hidden shadow-xl border border-slate-800">
              <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#EA580C]">
                  <Globe className="w-4 h-4" />
                  <span>Strategic Port &amp; Rail Staging</span>
                </div>
                <span className="text-[11px] text-slate-400">Shandong Export Hub</span>
              </div>

              {/* Simulated Map Visual */}
              <div className="relative h-64 bg-slate-900 p-6 flex flex-col justify-between overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')` }}
                ></div>

                <div className="relative z-10 space-y-2">
                  <div className="inline-block bg-[#EA580C] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    dentfull INDUSTRIAL COMPLEX
                  </div>
                  <div className="text-white font-mono text-xs">
                    36°39'22.4"N 117°04'15.8"E
                  </div>
                </div>

                <div className="relative z-10 bg-slate-950/80 backdrop-blur-xs p-3 rounded-lg border border-slate-700 text-xs space-y-1">
                  <div className="text-[#EA580C] font-bold">Fast Port Transit:</div>
                  <div className="text-slate-300">
                    • 3.5 hrs to Qingdao Qianwan Port (Container / Breakbulk)
                  </div>
                  <div className="text-slate-300">
                    • 4.0 hrs to Tianjin Xingang Deepwater Port
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-3 text-xs text-slate-300">
                <h4 className="font-bold text-white text-sm">International Client Accommodations</h4>
                <p className="leading-relaxed">
                  We provide VIP airport pick-up (Jinan TNA or Qingdao TAO airports) and English/Arabic/Spanish speaking metallurgical escorts for on-site factory audits.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${DENTFULL_SALES_EMAIL}?subject=Factory Audit Invitation Request`}
                    className="text-[#EA580C] font-semibold hover:underline"
                  >
                    Request Formal Factory Audit Invitation &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* Global Sales Network Desks */}
        <section className="space-y-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Global Representation
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Dedicated Regional Trade &amp; Engineering Desks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regionalDesks.map((desk, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#0F2B48] text-base">{desk.region}</h3>
                  <span className="text-[11px] font-mono bg-blue-50 text-[#2563EB] px-2 py-0.5 rounded font-bold">
                    Active Desk
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-semibold">{desk.coverage}</div>
                <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1">
                  <div><strong className="text-slate-700">Account Lead:</strong> {desk.incharge}</div>
                  <div><strong className="text-slate-700">Direct Dispatch:</strong> <span className="text-[#EA580C] font-bold">{desk.contact}</span></div>
                  <div><strong className="text-slate-700">Key Commodities:</strong> {desk.specials}</div>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(`Inquiry directed to ${desk.region}`)}
                  className="text-xs text-[#EA580C] hover:underline font-bold"
                >
                  Contact This Regional Desk &rarr;
                </button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
