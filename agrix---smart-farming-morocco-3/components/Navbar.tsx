
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenAppModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const sections = ['home', 'how-it-works', 'tech', 'order', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Workflow', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Technology', href: '#tech', id: 'tech' },
    { name: 'Ordering', href: '#order', id: 'order' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-3 px-6' : 'py-6 px-6'}`}>
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'glass-dark rounded-[2rem] py-3' : 'bg-transparent py-0'}`}>
        {/* Dual Leaf Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute -left-1 w-6 h-8 bg-[#a3e635] rounded-tl-[100%] rounded-br-[100%] rotate-[-15deg] blur-[0.5px] shadow-[0_0_15px_rgba(163,230,53,0.4)] group-hover:rotate-[-25deg] transition-transform duration-500"></div>
            <div className="absolute -right-1 w-5 h-6 bg-[#fbbf24] rounded-tl-[100%] rounded-br-[100%] rotate-[15deg] blur-[0.5px] shadow-[0_0_15px_rgba(251,191,36,0.4)] mt-3 group-hover:rotate-[25deg] transition-transform duration-500"></div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">Agrix</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold transition-all uppercase tracking-widest relative group py-2
                ${activeSection === link.id ? 'text-[#a3e635]' : 'text-stone-400 hover:text-white'}
              `}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#fbbf24] transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <button 
            onClick={onOpenAppModal}
            className="bg-white text-black px-8 py-3 rounded-2xl font-bold hover:bg-[#a3e635] hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all duration-300 flex items-center gap-2 ml-4"
          >
            Go to App
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center bg-stone-800 rounded-xl text-stone-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden absolute top-0 left-0 bottom-0 w-[80%] bg-[#0c0c0c] border-r border-stone-800 shadow-2xl z-[101] p-8 flex flex-col transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-2 mb-12">
          <div className="relative w-8 h-8">
            <div className="absolute w-4 h-6 bg-[#a3e635] rounded-tl-[100%] rounded-br-[100%] rotate-[-15deg]"></div>
            <div className="absolute right-0 bottom-0 w-3 h-4 bg-[#fbbf24] rounded-tl-[100%] rounded-br-[100%] rotate-[15deg]"></div>
          </div>
          <span className="text-2xl font-black text-white">Agrix</span>
        </div>
        
        <div className="flex flex-col gap-6 mb-12">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-2xl font-black transition-colors ${activeSection === link.id ? 'text-[#a3e635]' : 'text-stone-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <button 
          onClick={() => { onOpenAppModal(); setIsMobileMenuOpen(false); }}
          className="mt-auto bg-[#a3e635] text-black px-6 py-5 rounded-[1.5rem] font-black text-xl w-full shadow-[0_0_30px_rgba(163,230,53,0.2)]"
        >
          Go to App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
