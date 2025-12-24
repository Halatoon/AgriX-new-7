import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingCart, MessageCircle, ChevronRight, Sun, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenAppModal: () => void;
}

const StatCounter = ({ end, label, colorClass }: { end: number, label: string, colorClass: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center group cursor-default">
      <p className={`text-4xl font-black transition-colors duration-300 ${colorClass}`}>{count}%</p>
      <p className="text-[10px] text-stone-500 font-bold uppercase tracking-[0.2em] mt-1 group-hover:text-stone-300 transition-colors duration-300">{label}</p>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onOpenAppModal }) => {
  const WHATSAPP_NUMBER = "+212649495374";
  
  const handleWhatsAppHeroOrder = () => {
    const text = encodeURIComponent("Hello Agrix! I'm interested in ordering your smart sensors. Please contact me.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0c0c0c]">
      {/* Background Decor - Performance Optimized */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 glow-soft rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-500/5 glow-soft rounded-full"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-8 animate-[fadeIn_0.8s_ease-out]">
          <div className="inline-flex items-center gap-3 bg-stone-900/40 border border-white/5 px-5 py-2 rounded-full text-sm font-semibold text-[#a3e635] hover:border-white/10 transition-all cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635]"></span>
            Next-Gen Agritech Morocco
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight">
            Cultivate the <br />
            <span className="gradient-text">Future of Farming.</span>
          </h1>
          
          <p className="text-xl text-stone-400 max-w-lg leading-relaxed font-medium">
            AI-powered precision for every acre. Maximize yield, minimize water waste, and secure your harvest with Moroccan-made IoT sensors.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <a 
              href="#order"
              className="flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[#fbbf24] transition-all duration-300 group shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <ShoppingCart className="w-5 h-5" />
              Get Sensors
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            
            <button 
              onClick={handleWhatsAppHeroOrder}
              className="flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>

            <button 
              onClick={onOpenAppModal}
              className="flex items-center justify-center gap-3 bg-stone-900/50 text-stone-300 border border-stone-800 px-8 py-5 rounded-2xl font-bold text-lg hover:text-white hover:border-stone-700 transition-all duration-300 group"
            >
              Agrix Dashboard
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center gap-10 pt-10">
            <StatCounter end={40} label="Water Saved" colorClass="text-[#a3e635]" />
            <div className="w-px h-10 bg-stone-800"></div>
            <StatCounter end={25} label="Yield Growth" colorClass="text-[#fbbf24]" />
            <div className="w-px h-10 bg-stone-800"></div>
            <StatCounter end={100} label="Local Parts" colorClass="text-stone-400" />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-[slideInRight_0.8s_ease-out]">
          <div className="relative z-10 w-full max-w-lg animate-float">
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] border border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop" 
                alt="Agrix Tech" 
                className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-90"></div>
            </div>
            
            {/* Glowing UI Widgets - Simplified for Performance */}
            <div className="absolute -top-8 -left-8 glass-dark p-6 rounded-[2rem] shadow-xl z-20 border border-[#a3e635]/10 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#a3e635] rounded-2xl flex items-center justify-center text-black">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Efficiency</p>
                <p className="text-xl font-black text-[#a3e635]">98.2% Optimal</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 glass-dark p-6 rounded-[2rem] shadow-xl z-20 border border-[#fbbf24]/10">
              <div className="flex items-center gap-3 mb-2">
                <Sun className="w-5 h-5 text-[#fbbf24]" />
                <p className="text-xs font-bold text-stone-400">Environment</p>
              </div>
              <p className="text-lg font-bold text-white">Irrigation needed <br/>in 4 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;