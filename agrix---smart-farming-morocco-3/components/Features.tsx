
import React from 'react';
import { Droplets, ScanFace, Radio, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface FeaturesProps {
  onOpenSpec: (feature: any) => void;
}

const Features: React.FC<FeaturesProps> = ({ onOpenSpec }) => {
  const revealRef = useReveal({ once: true });
  
  const solutions = [
    {
      title: "Smart Irrigation",
      desc: "Stop overwatering. Our intelligent triggers activate irrigation only when soil water potential drops below optimal thresholds.",
      icon: <Droplets className="w-7 h-7" />,
      color: "emerald",
      bg: "bg-emerald-500/10 text-[#a3e635] border-emerald-500/20 hover:bg-[#a3e635] hover:text-black"
    },
    {
      title: "Precision Sensors",
      desc: "High-accuracy IoT hardware measuring soil N-P-K levels, moisture, and temperature with 5-year battery life.",
      icon: <Radio className="w-7 h-7" />,
      color: "amber",
      bg: "bg-amber-500/10 text-[#fbbf24] border-amber-500/20 hover:bg-[#fbbf24] hover:text-black"
    },
    {
      title: "Plant Disease AI",
      desc: "Instant diagnosis using mobile vision. Scan leaves to identify 40+ common Moroccan crop diseases in seconds.",
      icon: <ScanFace className="w-7 h-7" />,
      color: "blue",
      bg: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500 hover:text-white"
    }
  ];

  return (
    <section id="features" className="py-32 bg-[#0c0c0c]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#a3e635] font-bold uppercase tracking-widest mb-4">Core Technology</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">Advanced tools for <br/><span className="gradient-text">modern growers.</span></h3>
          </div>
          <div className="hidden md:block">
            <p className="text-stone-500 font-medium max-w-xs text-right">Focused solutions built for the specific challenges of Moroccan agriculture.</p>
          </div>
        </div>

        <div 
          ref={revealRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-reveal"
        >
          {solutions.map((item, i) => (
            <div key={i} className="p-10 rounded-[3rem] border border-stone-800 hover:border-stone-700 bg-stone-900/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-start group relative overflow-hidden">
              <div className={`w-16 h-16 rounded-[1.2rem] flex items-center justify-center mb-10 border transition-all duration-500 ${item.bg}`}>
                {item.icon}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <h4 className="text-2xl font-black text-white group-hover:text-[#a3e635] transition-colors">{item.title}</h4>
              </div>
              
              <p className="text-stone-400 font-medium leading-relaxed mb-10 flex-grow group-hover:text-stone-300 transition-colors">{item.desc}</p>
              
              <button 
                onClick={() => onOpenSpec(item)}
                className="text-stone-300 font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform group-hover:text-[#fbbf24]"
              >
                Technical specs <ChevronRight className="w-5 h-5 text-[#fbbf24]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
