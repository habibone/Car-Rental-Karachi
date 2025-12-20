
import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle, 
  Loader2, 
  MessageCircle, 
  User, 
  Building2, 
  MapPin, 
  Phone, 
  ShieldCheck,
  Star
} from 'lucide-react';
import { LeadFormData } from '../types.ts';

/** 
 * CONFIGURATION: 
 * 1. Replace GOOGLE_SHEET_URL with your specific 'Web App' URL (the one ending in /exec)
 */
const GOOGLE_SHEET_URL: string = 'https://script.google.com/macros/s/AKfycbxbMfOCV4AnB9UhSAzCdsmXZTzqE4UCOC2TcFS-QAc8asJ5uR2RMSsFgvycvEY3radqdg/exec'; 
const WHATSAPP_BUSINESS_NUMBER: string = "923082755999";

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    businessName: '',
    ownerName: '',
    phone: '', 
    whatsapp: '',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Using traditional FormData ensures Apps Script populates 'e.parameter' correctly
    const body = new FormData();
    body.append('Date', new Date().toLocaleString('en-GB', { timeZone: 'Asia/Karachi' }));
    body.append('Business Name', formData.businessName);
    body.append('Owner Name', formData.ownerName);
    body.append('City', formData.city);
    body.append('WhatsApp', formData.whatsapp);

    try {
      // mode: 'no-cors' is essential for Google Apps Script cross-domain POST
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: body,
      });
      
      // Since no-cors doesn't allow reading the response, we assume success 
      // if the fetch doesn't throw an error.
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      // Still show success screen to the user so they can click the WhatsApp button
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppConfirm = () => {
    const text = `Assalam o Alaikum! I'm interested in the Smart Rental System.\n\nBusiness: ${formData.businessName}\nOwner: ${formData.ownerName}\nCity: ${formData.city}\nWhatsApp: ${formData.whatsapp}`;
    const url = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  if (isSubmitted) {
      return (
        <div id="lead-form" className="py-32 bg-secondary flex items-center justify-center px-4 min-h-[700px]">
            <div className="bg-surface rounded-[4rem] shadow-2xl p-16 max-w-2xl w-full text-center border border-accent/20 animate-in zoom-in duration-500">
                <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                  <CheckCircle className="w-20 h-20 text-accent animate-pulse" />
                </div>
                <h3 className="text-4xl font-black text-white mb-8 font-urdu" dir="rtl">شکریہ! تفصیلات موصول ہو گئیں۔</h3>
                <p className="text-2xl text-slate-400 mb-12 font-urdu leading-relaxed" dir="rtl">
                  آخری مرحلہ: نیچے دیے گئے بٹن پر کلک کر کے واٹس ایپ پر اپنا فری ڈیمو کنفرم کریں۔
                </p>
                <button 
                    onClick={handleWhatsAppConfirm}
                    className="w-full bg-[#25D366] hover:bg-green-600 text-white px-10 py-8 rounded-3xl font-english font-black text-3xl flex items-center justify-center gap-6 shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95"
                >
                    <MessageCircle className="w-10 h-10 fill-current" />
                    Confirm on WhatsApp
                </button>
            </div>
        </div>
      )
  }

  return (
    <div id="lead-form" className="py-32 bg-secondary relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface rounded-[5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col lg:flex-row border border-white/5">
          
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-16 lg:w-[45%] flex flex-col justify-center text-white relative">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-10 backdrop-blur-md border border-white/10">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>Premium Access</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-10 font-english leading-tight text-left">
                Book Your <br /><span className="text-accent italic">Free Demo</span>
              </h2>
              
              <p className="text-2xl text-slate-200 mb-16 font-english leading-relaxed text-left opacity-80">
                Automate your entire car rental workflow. Join 100+ agencies using our smart booking engine.
              </p>
              
              <div className="space-y-8">
                 <div className="flex items-center justify-start gap-6 text-2xl font-english">
                   <div className="bg-white/10 p-3 rounded-2xl border border-white/5"><ShieldCheck className="text-accent w-8 h-8" /></div>
                   <span>24/7 Auto Booking</span>
                 </div>
                 <div className="flex items-center justify-start gap-6 text-2xl font-english">
                   <div className="bg-white/10 p-3 rounded-2xl border border-white/5"><ShieldCheck className="text-accent w-8 h-8" /></div>
                   <span>Instant WA Alerts</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="p-12 lg:p-20 lg:w-[55%] bg-surface/50">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 gap-10">
                
                <div className="text-left">
                   <label className="block text-xl font-black text-slate-300 font-english mb-4 pl-4 uppercase tracking-widest">Business Name</label>
                   <div className="relative group">
                     <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-accent transition-colors" />
                     <input 
                       type="text" 
                       name="businessName" 
                       required 
                       autoComplete="organization"
                       className="w-full pl-16 pr-8 py-6 bg-secondary/50 border border-white/5 rounded-3xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-xl font-bold text-white shadow-xl" 
                       placeholder="e.g. Luxury Rentals PK" 
                       onChange={handleChange} 
                     />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="text-left">
                    <label className="block text-xl font-black text-slate-300 font-english mb-4 pl-4 uppercase tracking-widest">Owner Name</label>
                    <div className="relative group">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-accent transition-colors" />
                      <input 
                        type="text" 
                        name="ownerName" 
                        required 
                        autoComplete="name"
                        className="w-full pl-16 pr-8 py-6 bg-secondary/50 border border-white/5 rounded-3xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-xl font-bold text-white shadow-xl" 
                        placeholder="Owner Name" 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <label className="block text-xl font-black text-slate-300 font-english mb-4 pl-4 uppercase tracking-widest">City</label>
                    <div className="relative group">
                      <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-accent transition-colors" />
                      <input 
                        type="text" 
                        name="city" 
                        required 
                        autoComplete="address-level2"
                        className="w-full pl-16 pr-8 py-6 bg-secondary/50 border border-white/5 rounded-3xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-xl font-bold text-white shadow-xl" 
                        placeholder="Karachi / Lahore" 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                </div>

                <div className="text-left">
                   <label className="block text-xl font-black text-slate-300 font-english mb-4 pl-4 uppercase tracking-widest">WhatsApp Number</label>
                   <div className="relative group">
                     <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-accent transition-colors" />
                     <input 
                       type="tel" 
                       name="whatsapp" 
                       required 
                       autoComplete="tel"
                       className="w-full pl-16 pr-8 py-6 bg-secondary/50 border border-white/5 rounded-3xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all font-english text-2xl font-black text-white shadow-xl tracking-[0.2em]" 
                       placeholder="03XXXXXXXXX" 
                       onChange={handleChange} 
                     />
                   </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-sky-300 text-secondary px-10 py-8 rounded-[2.5rem] text-3xl font-black font-english shadow-[0_20px_60px_rgba(56,189,248,0.3)] transition-all transform hover:-translate-y-2 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-6 group"
                >
                  {isLoading ? (
                    <Loader2 className="w-10 h-10 animate-spin" />
                  ) : (
                    <>
                      BOOK FREE DEMO 
                      <Send className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
