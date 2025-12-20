
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);
  
  const whatsappNumber = "923001234567";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Initialize Chat Session
  useEffect(() => {
    if (isOpen && !chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are a professional sales assistant for a "Smart Car Rental Website" service in Pakistan. 
          Your goals:
          1. Briefly explain how our automation (chatbot, auto-booking, WhatsApp integration) helps car rental owners save time and increase bookings.
          2. Speak primarily in Roman Urdu (e.g., "Aapka business auto-pilot par chalega") or Urdu script (Nastaliq style).
          3. Be polite, concise, and encourage the user to fill out the form or click the WhatsApp button.
          4. If they ask about pricing, mention we have "Best Value" custom packages starting at affordable rates.
          5. Keep responses friendly and under 50 words.`,
        },
      });

      if (messages.length === 0) {
        setMessages([{
          role: 'bot',
          text: "السلام علیکم! 👋 میں آپ کا اسمارٹ رینٹل اسسٹنٹ ہوں۔ میں آپ کے کار رینٹل بزنس کو آٹومیٹ کرنے میں کیسے مدد کر سکتا ہوں؟"
        }]);
      }
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping || !chatRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage });
      const botText = response.text || "Ji, main aapki baat samajh gaya. Kya aap free demo book karna chahen ge?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Maazrat, system mein masla hai. Aap direct WhatsApp par rabta kar sakte hain." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[100] font-english">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[340px] max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#075e54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-green-400">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=RentalBot" alt="Assistant" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Smart AI Assistant</h4>
                <p className="text-[10px] text-green-200">Online | Auto-Pilot</p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white hover:bg-black/10 p-1 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div ref={scrollRef} className="h-80 bg-[#e5ddd5] p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`p-3 rounded-lg shadow-sm max-w-[85%] text-sm ${
                  msg.role === 'user' 
                  ? 'bg-[#dcf8c6] self-end rounded-tr-none text-right' 
                  : 'bg-white self-start rounded-tl-none text-right font-urdu leading-relaxed'
                }`}
                dir={msg.role === 'bot' ? 'rtl' : 'ltr'}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm self-start flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-green-600" />
                <span className="text-xs text-gray-400">Assistant is thinking...</span>
              </div>
            )}
          </div>

          {/* Footer Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-gray-50 flex gap-2 border-t border-gray-200">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Sawaal likhain..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#075e54]"
            />
            <button 
              type="submit"
              disabled={isTyping}
              className="bg-[#075e54] text-white p-2 rounded-full hover:scale-105 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          
          <div className="px-3 pb-3 bg-gray-50">
             <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-2 rounded-full flex items-center justify-center gap-2 font-bold text-xs hover:bg-green-600 transition-colors shadow-md"
            >
              Talk to Owner on WhatsApp
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`relative group w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 ${isOpen ? 'bg-red-500 rotate-90' : 'bg-[#25D366]'}`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />}
        
        {showNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce border-2 border-white">
            1
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
