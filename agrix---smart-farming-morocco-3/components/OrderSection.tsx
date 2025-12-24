
import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react';

const OrderSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Casablanca',
    farmType: 'Home garden',
    sensors: '1',
    contactMethod: 'WhatsApp',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(`Hello Agrix! I'm ${formData.name || 'interested'} from ${formData.city}. I'd like to order ${formData.sensors} sensor(s) for my ${formData.farmType}. Please contact me via ${formData.contactMethod}.`);
    window.open(`https://wa.me/212649495374?text=${text}`, '_blank');
  };

  return (
    <section id="order" className="relative py-32 bg-[#0c0c0c] text-white z-30 border-t border-stone-900 shadow-[0_-50px_100px_rgba(12,12,12,1)]">
      {/* Abstract Glowing Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form Side */}
          <div className="bg-stone-900 border border-stone-800 p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a3e635] via-[#fbbf24] to-transparent opacity-30"></div>
            
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-[fadeIn_0.5s_ease-out]">
                <CheckCircle2 className="w-20 h-20 text-[#a3e635] mb-4" />
                <h3 className="text-3xl font-black">Request Received!</h3>
                <p className="text-stone-400">Our logistics team will reach out to confirm your region's coverage within 24h.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 text-[#fbbf24] font-bold border-b border-[#fbbf24]"
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-10">
                  <h3 className="text-4xl font-black mb-3">Order Online</h3>
                  <p className="text-stone-500 font-medium">Ready to scale your farm's intelligence?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" required 
                      className="w-full px-6 py-4 bg-black border border-stone-800 rounded-2xl text-white placeholder-stone-700 focus:border-[#a3e635] focus:outline-none transition-all"
                      placeholder="Ahmed Mansour"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" required 
                      className="w-full px-6 py-4 bg-black border border-stone-800 rounded-2xl text-white placeholder-stone-700 focus:border-[#a3e635] focus:outline-none transition-all"
                      placeholder="+212 6..."
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-1">City / Region</label>
                    <select 
                      className="w-full px-6 py-4 bg-black border border-stone-800 rounded-2xl text-stone-400 focus:border-[#a3e635] focus:outline-none transition-all appearance-none"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    >
                      {['Casablanca', 'Rabat', 'Marrakech', 'Agadir', 'Fes', 'Tangier', 'Souss-Massa', 'Other'].map(city => (
                        <option key={city} value={city} className="bg-stone-900">{city}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-1">Farm Type</label>
                    <select 
                      className="w-full px-6 py-4 bg-black border border-stone-800 rounded-2xl text-stone-400 focus:border-[#a3e635] focus:outline-none transition-all appearance-none"
                      value={formData.farmType}
                      onChange={e => setFormData({...formData, farmType: e.target.value})}
                    >
                      {['Home garden', 'Small farm', 'Medium farm', 'Agri-Cooperative'].map(type => (
                        <option key={type} value={type} className="bg-stone-900">{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-1">Sensors</label>
                    <input 
                      type="number" min="1" max="50"
                      className="w-full px-6 py-4 bg-black border border-stone-800 rounded-2xl text-white focus:border-[#fbbf24] focus:outline-none transition-all"
                      value={formData.sensors}
                      onChange={e => setFormData({...formData, sensors: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-1">Contact Method</label>
                    <div className="flex gap-4">
                      {['WhatsApp', 'Call'].map(method => (
                        <button 
                          key={method}
                          type="button"
                          onClick={() => setFormData({...formData, contactMethod: method})}
                          className={`flex-1 py-4 rounded-2xl border font-bold text-sm transition-all ${formData.contactMethod === method ? 'bg-[#fbbf24] text-black border-[#fbbf24]' : 'bg-black text-stone-600 border-stone-800 hover:border-stone-700'}`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl hover:bg-[#a3e635] transition-all flex items-center justify-center gap-3 disabled:opacity-50 group"
                >
                  {isSubmitting ? <span className="animate-spin h-6 w-6 border-4 border-black border-t-transparent rounded-full"></span> : <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  Confirm Order Request
                </button>
              </form>
            )}
          </div>

          {/* Chat Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[#a3e635] font-bold uppercase tracking-widest mb-4">Express Order</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-8 leading-tight italic">Direct Chat <br/><span className="gradient-text">Support.</span></h3>
            <p className="text-stone-400 text-xl font-medium leading-relaxed mb-12 max-w-md">
              Skip the forms. Talk to our technical sales team directly on WhatsApp for custom installation quotes.
            </p>
            
            <button 
              onClick={handleWhatsAppOrder}
              className="group inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-6 rounded-3xl font-black text-2xl shadow-[0_20px_40px_rgba(37,211,102,0.2)] hover:scale-105 transition-all w-fit"
            >
              <MessageCircle className="w-10 h-10 group-hover:rotate-12 transition-transform" />
              Order on WhatsApp
            </button>

            <div className="mt-16 grid grid-cols-2 gap-6">
               <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800">
                  <p className="text-3xl font-black text-[#a3e635] mb-1">Local</p>
                  <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Built in Morocco</p>
               </div>
               <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800">
                  <p className="text-3xl font-black text-[#fbbf24] mb-1">24/7</p>
                  <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Remote Monitoring</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
