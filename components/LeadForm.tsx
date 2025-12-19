import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { LeadFormData } from '../types.ts';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    businessName: '',
    ownerName: '',
    phone: '',
    whatsapp: '',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form Submitted", formData);
    setTimeout(() => {
        setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
      return (
        <div id="lead-form" className="py-20 bg-primary flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-urdu" dir="rtl">شکریہ! آپ کی درخواست موصول ہو گئی ہے۔</h3>
                <p className="text-gray-600 mb-8 font-urdu" dir="rtl">ہماری ٹیم اگلے 24 گھنٹوں میں آپ سے رابطہ کرے گی۔</p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-english"
                >
                    Close
                </button>
            </div>
        </div>
      )
  }

  return (
    <div id="lead-form" className="py-20 bg-gradient-to-br from-primary to-[#052033]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse">
          
          {/* Header/Sidebar */}
          <div className="bg-secondary p-8 md:w-1/3 flex flex-col justify-center text-primary">
            <h2 className="text-2xl font-bold mb-4 font-urdu text-right" dir="rtl">
              📩 آج ہی اپنی اسمارٹ ویب سائٹ حاصل کریں
            </h2>
            <p className="mb-6 font-urdu text-right" dir="rtl">
              فارم پر کریں اور ہم آپ کو فری ڈیمو کال دیں گے۔
            </p>
            <ul className="space-y-2 font-urdu text-right" dir="rtl">
                <li className="flex items-center justify-end"> <span className="mr-2">مفت مشاورت</span> ✅</li>
                <li className="flex items-center justify-end"> <span className="mr-2">کوئی پوشیدہ چارجز نہیں</span> ✅</li>
                <li className="flex items-center justify-end"> <span className="mr-2">مکمل سیٹ اپ</span> ✅</li>
            </ul>
          </div>

          {/* Form Fields */}
          <div className="p-8 md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                   <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 font-urdu text-right mb-1">بزنس کا نام</label>
                   <input
                    type="text"
                    name="businessName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    placeholder="ABC Car Rental"
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                   <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 font-urdu text-right mb-1">مالک کا نام</label>
                   <input
                    type="text"
                    name="ownerName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    placeholder="Ali Khan"
                    onChange={handleChange}
                  />
                </div>

                <div>
                   <label htmlFor="city" className="block text-sm font-medium text-gray-700 font-urdu text-right mb-1">شہر</label>
                   <input
                    type="text"
                    name="city"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    placeholder="Lahore / Dubai"
                    onChange={handleChange}
                  />
                </div>

                <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-urdu text-right mb-1">فون نمبر</label>
                   <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    placeholder="0300-1234567"
                    onChange={handleChange}
                  />
                </div>

                <div>
                   <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 font-urdu text-right mb-1">WhatsApp نمبر</label>
                   <input
                    type="tel"
                    name="whatsapp"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    placeholder="0300-1234567"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-cta hover:bg-green-600 transition-colors shadow-lg font-english"
              >
                Request Free Setup Call
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeadForm;