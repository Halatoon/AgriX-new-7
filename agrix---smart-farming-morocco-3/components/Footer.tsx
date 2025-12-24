
import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0c0c] pt-20 pb-10 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="flex items-center gap-3">
             <div className="relative w-8 h-8">
              <div className="absolute w-4 h-6 bg-[#a3e635] rounded-tl-[100%] rounded-br-[100%] rotate-[-15deg] shadow-[0_0_10px_#a3e635]"></div>
              <div className="absolute right-0 bottom-0 w-3 h-4 bg-[#fbbf24] rounded-tl-[100%] rounded-br-[100%] rotate-[15deg] shadow-[0_0_10px_#fbbf24]"></div>
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">Agrix</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-stone-500 hover:text-[#fbbf24] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-stone-500 hover:text-[#a3e635] transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">Platform</h5>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">IoT Sensors</a></li>
              <li><a href="#app" className="hover:text-white transition-colors">Cloud Dashboard</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Mobile Vision AI</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">Company</h5>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">Support</h5>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#contact" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">Legal</h5>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 text-stone-600 text-[10px] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="uppercase tracking-widest font-bold">Agrix © {new Date().getFullYear()} — Engineering for Moroccan Agriculture</p>
          <div className="flex gap-4">
             <span className="flex items-center gap-2">Built in 🇲🇦 with <span className="text-[#fbbf24]">Solar Power</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
