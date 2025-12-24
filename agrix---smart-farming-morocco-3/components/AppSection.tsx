
import React, { useState } from 'react';
import { Smartphone, Globe, BellRing, MessageSquare } from 'lucide-react';

const AppSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    setNotified(true);
    setTimeout(() => setNotified(false), 5000);
  };

  return (
    <section id="app" className="py-24 bg-[#0c0c0c] border-y border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-[#fbbf24] font-bold uppercase tracking-widest">Digital Ecosystem</h2>
            <h3 className="text-4xl font-extrabold text-white leading-tight">Your Farm, <br />In Your Pocket.</h3>
            <p className="text-lg text-stone-400 leading-relaxed">
              Access Agrix however you prefer. From real-time desktop dashboards to simple WhatsApp status updates, we've built a multi-channel experience designed for the field.
            </p>

            <div className="flex items-center gap-4 p-4 bg-stone-900/50 rounded-2xl border border-stone-800 shadow-sm">
              <div className="bg-[#a3e635]/10 p-3 rounded-xl">
                <MessageSquare className="text-[#a3e635]" />
              </div>
              <div>
                <p className="font-bold text-white">WhatsApp-first onboarding</p>
                <a href="https://wa.me/212649495374" className="text-sm text-[#a3e635] font-semibold hover:underline">Start on WhatsApp →</a>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Web App Card */}
            <div className="bg-stone-900/40 p-8 rounded-[3rem] shadow-xl border border-stone-800 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Web Application</h4>
              <p className="text-stone-500 text-sm mb-6 italic">Works on any browser</p>
              <a 
                href="https://app.agrix.ma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-[#a3e635] transition-all text-center"
              >
                Open Web App
              </a>
            </div>

            {/* Mobile Card */}
            <div className="bg-stone-900/20 p-8 rounded-[3rem] border-2 border-dashed border-stone-800 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-stone-800 text-stone-600 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-bold text-stone-600">Mobile Apps</h4>
                <span className="bg-stone-800 text-stone-400 text-[10px] px-2 py-0.5 rounded-full uppercase font-bold">Soon</span>
              </div>
              <p className="text-stone-500 text-sm mb-6 leading-tight">Native iOS & Android apps in final testing.</p>
              
              <div className="space-y-3 w-full">
                <button disabled className="w-full bg-stone-800 text-stone-600 py-2.5 rounded-xl font-bold text-xs uppercase cursor-not-allowed">Android (Coming Soon)</button>
                <button disabled className="w-full bg-stone-800 text-stone-600 py-2.5 rounded-xl font-bold text-xs uppercase cursor-not-allowed">iOS (Coming Soon)</button>
              </div>

              {/* Email Capture */}
              <div className="mt-8 pt-8 border-t border-stone-800 w-full text-left">
                <p className="text-xs font-bold text-stone-500 uppercase mb-3 text-center">Get Launch Notification</p>
                {notified ? (
                   <p className="text-xs text-[#a3e635] font-bold text-center">Success! We'll notify you.</p>
                ) : (
                  <form onSubmit={handleNotify} className="relative">
                    <input 
                      type="email" required
                      className="w-full bg-black border border-stone-800 px-4 py-2.5 rounded-lg text-sm pr-12 text-white focus:outline-none focus:border-[#fbbf24]"
                      placeholder="Your email..."
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <button type="submit" className="absolute right-1.5 top-1.5 bg-[#fbbf24] text-black p-1.5 rounded-md hover:bg-[#a3e635] transition-colors">
                      <BellRing className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
