
import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle, 
  Loader2, 
  MessageCircle, 
  ShieldCheck,
  Star,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { LeadFormData } from '../types.ts';

/** 
 * CONFIGURATION: 
 */
const GOOGLE_SHEET_URL: string = 'https://script.google.com/macros/s/AKfycbzUEKQitpFYRnNpmyeFxWZ8rKxWPplbpd52tdknLpq6uzts540NFEgp4oMpHng50HgoIQ/exec'; 
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

    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    const params = new URLSearchParams();
    params.append('Date', formattedDate);
    params.append('Business Name', formData.businessName);
    params.append('Owner Name', formData.ownerName);
    params.append('City', formData.city);
    params.append('WhatsApp', formData.whatsapp);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
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
        <div id="lead-form" className="py-24 bg-secondary flex items-center justify-center px-4 min-h-[600px]">
            <div className="bg-surface/50 backdrop-blur-xl rounded-[3rem] p-12 max-w-xl w-full text-center border border-white/10 shadow-2xl animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 font-urdu" dir="rtl">درخواست موصول ہوگئی!</h3>
                <p className="text-xl text-slate-400 mb-10 font-urdu leading-relaxed" dir="rtl">
                  اب صرف ایک کلک کریں اور واٹس ایپ پر اپنا فری ڈیمو کنفرم کریں۔
                </p>
                <button 
                    onClick={handleWhatsAppConfirm}
                    className="w-full bg-[#25D366] hover:bg-green-600 text-white px-8 py-6 rounded-2xl font-english font-black text-2xl flex items-center justify-center gap-4 transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_15px_30px_rgba(37,211,102,0.2)]"
                >
                    <MessageCircle className="w-8 h-8 fill-current" />
                    CONFIRM ON WHATSAPP
                </button>
            </div>
        </div>
      )
  }

  return (
    <div id="lead-form" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface/40 backdrop-blur-2xl rounded-[4rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column: Simple & Enticing */}
          <div className="lg:w-2/5 p-12 lg:p-16 bg-gradient-to-br from-primary/20 to-secondary flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-accent border border-accent/20 mb-8 self-start">
              <Sparkles className="w-3 h-3" />
              Limited Slots Available
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 font-english leading-[1.1]">
              Start Your <br /><span className="text-accent">Free Demo</span>
            </h2>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <p className="text-lg text-slate-300 font-urdu" dir="rtl">24/7 آٹومیٹڈ بکنگ سسٹم</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Star className="w-5 h-5 text-accent" />
                </div>
                <p className="text-lg text-slate-300 font-urdu" dir="rtl">واٹس ایپ الرٹس اور اسمارٹ چیٹ</p>
              </div>
            </div>

            <p className="mt-12 text-slate-500 font-english text-sm leading-relaxed">
              No credit card required. Our experts will show you exactly how to scale your agency in 15 minutes.
            </p>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:w-3/5 p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-1">Business Name</label>
                  <input 
                    type="text" 
                    name="businessName" 
                    required 
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all text-lg font-bold text-white placeholder:text-slate-600" 
                    placeholder="e.g. Royal Rentals" 
                    onChange={handleChange} 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-1">Owner Name</label>
                    <input 
                      type="text" 
                      name="ownerName" 
                      required 
                      className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all text-lg font-bold text-white placeholder:text-slate-600" 
                      placeholder="Your Name" 
                      onChange={handleChange} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-1">City</label>
                    <input 
                      type="text" 
                      name="city" 
                      required 
                      className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all text-lg font-bold text-white placeholder:text-slate-600" 
                      placeholder="Lahore / Karachi" 
                      onChange={handleChange} 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-1">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    name="whatsapp" 
                    required 
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all text-xl font-black text-white placeholder:text-slate-600 tracking-widest" 
                    placeholder="03XXXXXXXXX" 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-sky-300 text-secondary px-8 py-6 rounded-2xl text-xl font-black font-english shadow-[0_10px_40px_rgba(56,189,248,0.2)] transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3 group"
                >
                  {isLoading ? (
                    <Loader2 className="w-8 h-8 animate-spin" />
                  ) : (
                    <>
                      BOOK FREE DEMO
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center mt-6 text-slate-500 font-urdu text-sm" dir="rtl">
                  فری ڈیمو بک کرنے کے لیے فارم مکمل کریں
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
