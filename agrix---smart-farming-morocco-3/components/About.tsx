
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const About: React.FC = () => {
  const revealRef = useReveal({ once: true });
  
  const aboutItems = [
    {
      title: "Local Expertise",
      desc: "Engineered specifically for Moroccan soil types and climatic conditions.",
      icon: "🇲🇦",
      highlight: 'green',
      glow: 'shadow-[0_0_40px_rgba(163,230,53,0.1)]'
    },
    {
      title: "Sustainability First",
      desc: "Our primary metric is water conservation and chemical reduction.",
      icon: "🌱",
      highlight: 'orange',
      glow: 'shadow-[0_0_40px_rgba(251,191,36,0.1)]'
    },
    {
      title: "Inclusive Design",
      desc: "Intuitive interfaces and WhatsApp integration for all tech skill levels.",
      icon: "🤝",
      highlight: 'stone',
      glow: ''
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#0c0c0c] relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full"></div>

      <div ref={revealRef} className="container mx-auto px-6 reveal">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-[#fbbf24] font-bold uppercase tracking-widest mb-4">Our Mission</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Rooted in Moroccan Soil. <br/><span className="gradient-text">Growing for the Future.</span></h3>
          <p className="text-xl text-stone-400 leading-relaxed font-medium">
            Agrix blends deep agronomic knowledge with world-class IoT engineering to help farmers thrive in a changing climate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-reveal active">
          {aboutItems.map((item, i) => (
            <div 
              key={i} 
              className={`relative px-12 py-20 rounded-[4rem] transition-all duration-700 group flex flex-col h-full bg-stone-900/40 border border-stone-800 hover:bg-stone-900/60 hover:border-stone-700 ${item.glow}`}
            >
              {/* Icon Container */}
              <div className="text-6xl mb-12 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <h4 className={`text-3xl font-black leading-tight tracking-tight
                  ${item.highlight === 'green' ? 'text-[#a3e635]' : item.highlight === 'orange' ? 'text-[#fbbf24]' : 'text-stone-100'}
                `}>
                  {item.title}
                </h4>
                <p className="text-stone-400 font-medium text-lg leading-relaxed group-hover:text-stone-300 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-12 right-12 w-2 h-2 rounded-full
                ${item.highlight === 'green' ? 'bg-[#a3e635]' : item.highlight === 'orange' ? 'bg-[#fbbf24]' : 'bg-stone-600'}
              `}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
