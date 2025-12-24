
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const revealRef = useReveal({ once: true });
  const WHATSAPP_NUMBER = "+212 649 49 53 74";
  const CONTACT_EMAIL = "a.youjile@agrixmaroc.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-[#0c0c0c] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 glow-soft rounded-full"></div>
      
      <div ref={revealRef} className="container mx-auto px-6 relative z-10 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <h2 className="text-[#a3e635] font-bold uppercase tracking-widest mb-4">Contact</h2>
              <h3 className="text-5xl font-black text-white leading-tight">Ready to <br/><span className="gradient-text">transform</span> your farm?</h3>
            </div>
            
            <p className="text-stone-400 text-xl font-medium leading-relaxed max-w-lg">
              Get in touch for custom IoT solutions, enterprise pricing for cooperatives, or technical support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {[
                { icon: <Mail />, label: "Email", val: CONTACT_EMAIL, link: `mailto:${CONTACT_EMAIL}`, color: "text-[#a3e635]" },
                { icon: <Phone />, label: "Phone", val: "+212 522 00 00 00", link: "tel:+212522000000", color: "text-[#fbbf24]" },
                { icon: <MessageSquare />, label: "WhatsApp", val: WHATSAPP_NUMBER, link: `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '').replace('+', '')}`, color: "text-[#25D366]" },
                { icon: <MapPin />, label: "Casablanca", val: "Technopark Center", link: "#", color: "text-stone-400" }
              ].map((item, i) => (
                <a key={i} href={item.link} className="flex items-center gap-5 group transition-all">
                  <div className={`p-4 bg-stone-900 border border-stone-800 rounded-2xl group-hover:bg-stone-800 transition-colors ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-stone-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-stone-200 font-bold group-hover:text-white transition-colors break-all md:break-normal">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-stone-900/40 p-10 md:p-14 rounded-[3rem] border border-stone-800 backdrop-blur-sm">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-[#a3e635] mb-6" />
                <h4 className="text-3xl font-black text-white mb-2">Message Sent!</h4>
                <p className="text-stone-400">Our agronomists will contact you soon.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-8 text-[#fbbf24] font-bold border-b border-[#fbbf24]">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" required className="w-full px-6 py-4 bg-stone-950 border border-stone-800 rounded-2xl text-white placeholder-stone-600 focus:border-[#a3e635] focus:outline-none transition-all" placeholder="Your Name" />
                  <input type="email" required className="w-full px-6 py-4 bg-stone-950 border border-stone-800 rounded-2xl text-white placeholder-stone-600 focus:border-[#a3e635] focus:outline-none transition-all" placeholder="Your Email" />
                </div>
                <textarea rows={5} required className="w-full px-6 py-4 bg-stone-950 border border-stone-800 rounded-2xl text-white placeholder-stone-600 focus:border-[#fbbf24] focus:outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl hover:bg-[#a3e635] transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {isSubmitting ? <span className="animate-spin h-6 w-6 border-4 border-black border-t-transparent rounded-full"></span> : <Send className="w-6 h-6" />}
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
