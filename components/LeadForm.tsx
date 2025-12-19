
import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, MessageCircle, AlertCircle } from 'lucide-react';
import { LeadFormData } from '../types.ts';

/**
 * 🚀 GOOGLE APPS SCRIPT INTEGRATION:
 * The form submits data to the following URL which handles the Google Sheet update.
 * Using 'text/plain' as Content-Type is a standard 'simple request' that avoids 
 * CORS pre-flight issues with Google Apps Script.
 */

// ✅ Your provided Apps Script Web App URL
const GOOGLE_SHEET_URL: string = 'https://script.google.com/macros/s/AKfycbxbMfOCV4AnB9UhSAzCdsmXZTzqE4UCOC2TcFS-QAc8asJ5uR2RMSsFgvycvEY3radqdg/exec'; 
const WHATSAPP_BUSINESS_NUMBER = "923001234567";

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
  const [urlError, setUrlError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUrlError(false);

    if (!GOOGLE_SHEET_URL || !GOOGLE_SHEET_URL.startsWith('https://script.google.com')) {
      console.error("Invalid GOOGLE_SHEET_URL configuration.");
      setUrlError(true);
      return;
    }

    setIsLoading(true);

    try {
      /**
       * 💡 WHY NO-CORS & TEXT/PLAIN?
       * Apps Script doesn't handle 'application/json' pre-flight (OPTIONS) requests.
       * By using 'no-cors' and 'text/plain', we send a 'simple request' that
       * the browser allows and the Apps Script doPost(e) can receive.
       */
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // Critical for cross-origin Apps Script
        cache: 'no-cache',
        headers: { 
          'Content-Type': 'text/plain' // Use safe type to avoid pre-flight
        },
        body: JSON.stringify({ 
          ...formData, 
          timestamp: new Date().toISOString() 
        }),
      });
      
      // Because 'no-cors' hide response status, we proceed if fetch didn't throw a network error
      console.log("Form data sent to Apps Script successfully.");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("معذرت، ڈیٹا محفوظ نہیں ہو سکا۔ براہ کرم واٹس ایپ پر رابطہ کریں۔");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppConfirm = () => {
    const text = `Assalam o Alaikum! I have submitted the form for a Smart Website.\n\nBusiness: ${formData.businessName}\nOwner: ${formData.ownerName}\nCity: ${formData.city}\nPhone: ${formData.phone}\n\nPlease schedule my free demo call.`;
    const url = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  if (isSubmitted) {
      return (
        <div id="lead-form" className="py-20 bg-primary flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center animate-in zoom-in duration-300">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-urdu leading-[2.2]" dir="rtl">شکریہ! آپ کی تفصیلات موصول ہو گئی ہیں۔</h3>
                <p className="text-gray-600 mb-8 font-urdu leading-[2.2]" dir="rtl">بکنگ مکمل کرنے کے لیے نیچے دیے گئے بٹن پر کلک کر کے WhatsApp پر تصدیق کریں۔</p>
                
                <div className="flex flex-col gap-3">
                    <button 
                        onClick={handleWhatsAppConfirm}
                        className="bg-[#25D366] hover:bg-green-600 text-white px-6 py-4 rounded-xl font-english font-bold flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Confirm on WhatsApp
                    </button>
                    <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-gray-400 text-sm hover:underline mt-2"
                    >
                        Fill Form Again
                    </button>
                </div>
            </div>
        </div>
      )
  }

  return (
    <div id="lead-form" className="py-20 bg-gradient-to-br from-primary to-[#052033]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {urlError && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center gap-3">
            <AlertCircle className="text-red-600 w-6 h-6 shrink-0" />
            <p className="text-red-800 text-sm font-urdu leading-relaxed" dir="rtl">
              ڈیولپر سیٹنگز میں کوئی مسئلہ ہے۔ براہ کرم کنفیگریشن یا URL چیک کریں۔
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse">
          <div className="bg-secondary p-8 md:w-1/3 flex flex-col justify-center text-primary">
            <h2 className="text-2xl font-bold mb-4 font-urdu text-right leading-[2.2]" dir="rtl">
              📩 آج ہی اپنی اسمارٹ ویب سائٹ حاصل کریں
            </h2>
            <p className="mb-6 font-urdu text-right leading-[2.2]" dir="rtl">
              فارم پر کریں اور ہم آپ کو فری ڈیمو کال دیں گے۔ تمام تفصیلات براہ راست Google Sheet میں محفوظ ہوں گی۔
            </p>
            <ul className="space-y-2 font-urdu text-right leading-[2.2]" dir="rtl">
                <li className="flex items-center justify-end"> <span className="mr-2">محفوظ ڈیٹا انٹری</span> ✅</li>
                <li className="flex items-center justify-end"> <span className="mr-2">کوئی پوشیدہ چارجز نہیں</span> ✅</li>
                <li className="flex items-center justify-end"> <span className="mr-2">مکمل سیٹ اپ سپورٹ</span> ✅</li>
            </ul>
          </div>

          <div className="p-8 md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2 text-right">
                   <label className="block text-sm font-medium text-gray-700 font-urdu mb-1">بزنس کا نام</label>
                   <input
                    type="text"
                    name="businessName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    placeholder="مثال: اے بی سی کار رینٹل"
                    onChange={handleChange}
                  />
                </div>
                
                <div className="text-right">
                   <label className="block text-sm font-medium text-gray-700 font-urdu mb-1">مالک کا نام</label>
                   <input
                    type="text"
                    name="ownerName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    placeholder="نام درج کریں"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-right">
                   <label className="block text-sm font-medium text-gray-700 font-urdu mb-1">شہر</label>
                   <input
                    type="text"
                    name="city"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    placeholder="لاہور / کراچی / دبئی"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-right">
                   <label className="block text-sm font-medium text-gray-700 font-urdu mb-1">فون نمبر</label>
                   <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right font-english"
                    placeholder="03001234567"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-right">
                   <label className="block text-sm font-medium text-gray-700 font-urdu mb-1">WhatsApp نمبر</label>
                   <input
                    type="tel"
                    name="whatsapp"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right font-english"
                    placeholder="03001234567"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-cta hover:bg-green-600 transition-all shadow-lg font-english disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin w-5 h-5" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Request Free Setup Call</span>
                    <Send className="w-5 h-5" />
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
