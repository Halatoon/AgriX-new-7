
import React, { useEffect, useRef, useState } from 'react';
import { Droplets, ScanFace, Radio, Zap, Activity, Cpu } from 'lucide-react';

const SensorShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let requestRunning = false;
    const handleScroll = () => {
      if (requestRunning) return;
      requestRunning = true;
      requestAnimationFrame(() => {
        if (!containerRef.current) {
          requestRunning = false;
          return;
        }
        const rect = containerRef.current.getBoundingClientRect();
        const totalHeight = rect.height - window.innerHeight;
        // Calculate progress from 0 to 1
        const progress = Math.min(Math.max(-rect.top / totalHeight, 0), 1);
        setScrollProgress(progress);
        requestRunning = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Enhanced Visibility Function
   * Provides a smooth 'Plateau' of full visibility.
   */
  const getStageOpacity = (progress: number, start: number, end: number, plateauStart: number, plateauEnd: number) => {
    if (progress < start || progress > end) return 0;
    if (progress >= plateauStart && progress <= plateauEnd) return 1;
    if (progress < plateauStart) {
      // Ease in curve
      const p = (progress - start) / (plateauStart - start);
      return Math.pow(p, 2); 
    } else {
      // Ease out curve
      const p = 1 - (progress - plateauEnd) / (end - plateauEnd);
      return Math.pow(p, 2);
    }
  };

  /**
   * We now use a much taller section (600vh) and wider progress plateaus.
   * 0.0 - 0.3: Chapter 1
   * 0.3 - 0.6: Chapter 2
   * 0.6 - 0.9: Chapter 3
   */
  const opacity1 = getStageOpacity(scrollProgress, 0.0, 0.35, 0.05, 0.25);
  const opacity2 = getStageOpacity(scrollProgress, 0.3, 0.65, 0.35, 0.55);
  const opacity3 = getStageOpacity(scrollProgress, 0.6, 0.95, 0.65, 0.9);

  return (
    <section 
      ref={containerRef} 
      id="tech" 
      className="relative h-[600vh] bg-[#0c0c0c] z-10"
    >
      {/* 1. STICKY BACKGROUND HARDWARE LAYER */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Deep Field Background */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ 
          backgroundImage: `radial-gradient(#262626 1.5px, transparent 0)`,
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollProgress * -100}px)`
        }}></div>

        {/* Dynamic Atmosphere Glow */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out" 
          style={{
            backgroundColor: scrollProgress < 0.35 ? 'rgba(163, 230, 53, 0.04)' : 
                             scrollProgress < 0.65 ? 'rgba(251, 191, 36, 0.04)' : 
                             'rgba(59, 130, 246, 0.04)'
          }}
        ></div>

        {/* Central Sensor Visualization - Pinned Center */}
        <div 
          className="relative z-10 transition-all duration-150 ease-out will-change-transform"
          style={{
            transform: `
              perspective(2000px) 
              rotateY(${(scrollProgress - 0.5) * 45}deg) 
              rotateZ(${(scrollProgress - 0.5) * 8}deg)
              scale(${0.8 + Math.sin(scrollProgress * Math.PI) * 0.2})
              translateX(${(scrollProgress < 0.35 ? -15 : scrollProgress > 0.65 ? 15 : 0)}%)
            `
          }}
        >
          <svg width="340" height="600" viewBox="0 0 320 580" fill="none" className="w-auto h-[65vh] drop-shadow-[0_0_150px_rgba(0,0,0,1)]">
            <defs>
              <linearGradient id="bodyGradMain" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="50%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#14532d" />
              </linearGradient>
            </defs>
            <path d="M110 60C110 54.4772 114.477 50 120 50H170C175.523 50 180 54.4772 180 60V150H110V60Z" fill="url(#bodyGradMain)" />
            <rect x="110" y="150" width="70" height="110" fill="#16a34a" />
            <path d="M180 140L280 80C285 77 292 78 295 83L310 108C313 113 311 120 306 123L206 183L180 140Z" fill="#22c55e" />
            <rect x="115" y="260" width="60" height="280" rx="30" fill="#0a0a0a" />
            
            {/* Pulsing "Heartbeat" LED */}
            <circle cx="145" cy="180" r="4" fill="#a3e635" className="animate-pulse shadow-[0_0_15px_#a3e635]" />
          </svg>

          {/* Floating Live Telemetry HUD */}
          <div className="absolute top-1/2 -right-32 flex flex-col gap-6 transition-all duration-700" style={{ opacity: scrollProgress > 0.02 ? 1 : 0 }}>
            {[
              { icon: <Activity className="w-5 h-5" />, label: "SOIL POTENTIAL", val: "42.1 pF", color: "#a3e635" },
              { icon: <Zap className="w-5 h-5" />, label: "NETWORK STATUS", val: "LoRa MESH 1", color: "#fbbf24" }
            ].map((node, i) => (
              <div key={i} className="glass-dark border border-white/5 p-5 rounded-3xl flex items-center gap-5 min-w-[200px] shadow-2xl translate-x-4">
                <div className="w-11 h-11 bg-stone-900 rounded-2xl flex items-center justify-center" style={{ color: node.color }}>
                  {node.icon}
                </div>
                <div>
                  <p className="text-[9px] font-black text-stone-500 uppercase tracking-widest">{node.label}</p>
                  <p className="text-white font-black text-sm">{node.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. FOREGROUND TEXT LAYERS - THE STORY CHAPTERS */}
      <div className="relative z-20 container mx-auto px-6 pointer-events-none">
        
        {/* CHAPTER 1: Precision Hydrology */}
        <div className="h-screen flex items-center justify-end">
          <div 
            className="max-w-md pointer-events-auto bg-black/40 p-12 md:p-14 rounded-[4rem] backdrop-blur-2xl border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out"
            style={{ 
              opacity: opacity1, 
              transform: `translateX(${(1 - opacity1) * 50}px) translateY(${(scrollProgress - 0.15) * 100}px)` 
            }}
          >
            <div className="w-16 h-16 bg-[#a3e635]/10 rounded-3xl flex items-center justify-center text-[#a3e635] mb-8 border border-[#a3e635]/20 shadow-lg shadow-[#a3e635]/10">
              <Droplets className="w-8 h-8" />
            </div>
            <h4 className="text-5xl font-black text-white mb-6 italic leading-none">Precision <br/><span className="text-[#a3e635]">Hydrology.</span></h4>
            <p className="text-stone-300 font-medium text-lg leading-relaxed mb-8">
              Advanced algorithms that calculate plant transpiration rates. We trigger your irrigation only when your crops actually demand it, saving up to 40% of water.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
                <p className="text-[10px] font-black text-stone-500 uppercase tracking-widest mb-1">Efficiency</p>
                <p className="text-[#a3e635] font-black text-xl">+42%</p>
              </div>
              <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
                <p className="text-[10px] font-black text-stone-500 uppercase tracking-widest mb-1">Interval</p>
                <p className="text-white font-black text-xl">15 min</p>
              </div>
            </div>
          </div>
        </div>

        {/* CHAPTER 2: Cognitive Vision */}
        <div className="h-screen flex items-center justify-center">
          <div 
            className="max-w-2xl pointer-events-auto text-center bg-black/40 p-14 md:p-20 rounded-[5rem] backdrop-blur-3xl border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out"
            style={{ 
              opacity: opacity2, 
              transform: `translateY(${(0.45 - scrollProgress) * 200}px)` 
            }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/20 text-[#fbbf24] text-xs font-black uppercase mb-10 tracking-[0.2em]">
              <ScanFace className="w-5 h-5" /> Edge Intelligence
            </div>
            <h4 className="text-6xl md:text-7xl font-black text-white mb-8 leading-none">Cognitive <span className="text-[#fbbf24]">Vision.</span></h4>
            <p className="text-stone-300 font-medium text-xl leading-relaxed max-w-lg mx-auto mb-12">
              Our AI doesn't just see leaves; it understands health. Built on 500k+ Moroccan field samples to identify pests at the earliest stage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               {['Leaf Rust', 'Spider Mites', 'N-Deficit'].map((pest) => (
                 <div key={pest} className="bg-stone-900/80 px-8 py-4 rounded-3xl border border-stone-800 hover:border-[#fbbf24] transition-all cursor-default">
                    <p className="text-white font-bold">{pest}</p>
                    <div className="w-full bg-stone-800 h-1 mt-2 rounded-full overflow-hidden">
                      <div className="bg-[#fbbf24] h-full" style={{ width: '99%' }}></div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* CHAPTER 3: Valley Mesh Connectivity */}
        <div className="h-screen flex items-center justify-start">
          <div 
            className="max-w-md pointer-events-auto bg-black/40 p-12 md:p-14 rounded-[4rem] backdrop-blur-2xl border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out"
            style={{ 
              opacity: opacity3, 
              transform: `translateX(${(opacity3 - 1) * 50}px) translateY(${(0.8 - scrollProgress) * 100}px)` 
            }}
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-400 mb-8 border border-blue-500/20 shadow-lg shadow-blue-500/10">
              <Radio className="w-8 h-8" />
            </div>
            <h4 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Valley <br/><span className="text-blue-400">Mesh.</span></h4>
            <p className="text-stone-300 font-medium text-lg leading-relaxed mb-10">
              Disconnected terrain is no longer an obstacle. Our proprietary LoRa mesh bridges up to 15km in the most remote Moroccan valleys with zero data costs.
            </p>
            <div className="space-y-6 bg-stone-900/40 p-8 rounded-[2.5rem] border border-stone-800">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">Mesh Reach</span>
                <span className="text-blue-400 font-black">15 KM</span>
              </div>
              <div className="w-full h-2.5 bg-stone-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-1000 ease-out" 
                  style={{ width: `${opacity3 * 100}%` }}
                ></div>
              </div>
              <p className="text-[9px] text-stone-600 font-bold uppercase text-center italic">Zero GSM Coverage Required</p>
            </div>
          </div>
        </div>

      </div>

      {/* Persistent Global Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#a3e635] via-[#fbbf24] to-blue-500 transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Dynamic Nav HUD */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 glass-dark px-8 py-4 rounded-full border border-white/5 shadow-2xl scale-90 md:scale-100">
        {[
          { color: '#a3e635', active: opacity1 > 0.1, label: 'Hydrology' },
          { color: '#fbbf24', active: opacity2 > 0.1, label: 'AI Vision' },
          { color: '#3b82f6', active: opacity3 > 0.1, label: 'Mesh' }
        ].map((stage, i) => (
          <div key={i} className="flex items-center gap-3">
             <div className={`h-2 rounded-full transition-all duration-500 ${stage.active ? 'w-12' : 'w-2 bg-stone-800'}`} 
                  style={{ backgroundColor: stage.active ? stage.color : undefined }}></div>
             {stage.active && <span className="text-[9px] font-black text-white uppercase tracking-widest animate-[fadeIn_0.3s_ease-out]">{stage.label}</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SensorShowcase;
