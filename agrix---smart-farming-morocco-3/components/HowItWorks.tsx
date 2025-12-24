
import React from 'react';
import { Radio, Database, BrainCircuit, MessageSquareText, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const HowItWorks: React.FC = () => {
  const revealRef = useReveal({ once: true });
  
  const steps = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: "1. Deployment",
      desc: "Place the Agrix sensor. It pairs instantly via global LoRaWAN connectivity.",
      colorClass: "text-[#a3e635] bg-[#a3e635]/10 border-[#a3e635]/20",
      activeBg: "group-hover:bg-[#a3e635] group-hover:text-black"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "2. Data Stream",
      desc: "24/7 monitoring of moisture, NPK nutrients, and heat mapped across your acres.",
      colorClass: "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/20",
      activeBg: "group-hover:bg-[#fbbf24] group-hover:text-black"
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "3. AI Insight",
      desc: "Data is analyzed against local soil models to predict irrigation and pest risks.",
      colorClass: "text-[#a3e635] bg-[#a3e635]/10 border-[#a3e635]/20",
      activeBg: "group-hover:bg-[#a3e635] group-hover:text-black"
    },
    {
      icon: <MessageSquareText className="w-8 h-8" />,
      title: "4. Direct Action",
      desc: "Receive clear, actionable irrigation commands directly via WhatsApp or App.",
      colorClass: "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/20",
      activeBg: "group-hover:bg-[#fbbf24] group-hover:text-black"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#0c0c0c] overflow-hidden relative border-y border-stone-900">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[#a3e635] font-bold uppercase tracking-widest mb-4">How it Works</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight">From Soil to <span className="text-[#fbbf24]">Smart Control.</span></h3>
          </div>
          <p className="text-stone-400 text-lg max-w-sm font-medium">We translate complex environmental signals into clear decisions for your daily operations.</p>
        </div>

        <div 
          ref={revealRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-reveal"
        >
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              <div className="bg-stone-900/50 p-10 rounded-[3rem] border border-stone-800 transition-all duration-500 hover:border-stone-600 h-full">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 border transition-all duration-500 ${step.colorClass} ${step.activeBg}`}>
                  {step.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-stone-400 leading-relaxed font-medium">{step.desc}</p>
                
                <span className="absolute top-8 right-10 text-6xl font-black text-stone-800/30 group-hover:text-stone-700/40 transition-colors pointer-events-none">0{i+1}</span>
              </div>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-y-[-50%] text-stone-800 group-hover:text-stone-600 transition-colors">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
