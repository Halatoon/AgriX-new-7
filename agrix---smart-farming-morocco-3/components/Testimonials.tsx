
import React from 'react';
import { Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Testimonials: React.FC = () => {
  const revealRef = useReveal({ once: true });
  
  const reviews = [
    {
      name: "Omar El Fassi",
      role: "Saffron Cooperative Manager",
      text: "Since using Agrix, our saffron yields in Taliouine have increased by 15%. The disease detection saved our harvest last winter.",
      img: "https://picsum.photos/id/64/100/100"
    },
    {
      name: "Zineb Benjelloun",
      role: "Home Gardener, Casablanca",
      text: "I used to overwater my balcony plants. Now the Agrix WhatsApp alerts tell me exactly when to irrigate. My lemon tree has never looked better!",
      img: "https://picsum.photos/id/65/100/100"
    },
    {
      name: "Youssef Agadir",
      role: "Tomato Producer",
      text: "The precision of the irrigation recommendations is unmatched. We've reduced our water bill by 40% in just one season. Truly revolutionary for Morocco.",
      img: "https://picsum.photos/id/91/100/100"
    }
  ];

  return (
    <section id="community" className="py-32 bg-[#0c0c0c] overflow-hidden">
      <div ref={revealRef} className="container mx-auto px-6 reveal">
        <div className="text-center mb-20">
          <h2 className="text-[#a3e635] font-bold uppercase tracking-widest mb-4">Community</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">Trusted by Local Farmers</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-reveal active">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-stone-900/40 p-10 rounded-[3rem] border border-stone-800 flex flex-col h-full hover:bg-stone-900/60 hover:border-stone-700 transition-all duration-500 group">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />)}
              </div>
              <p className="text-stone-400 leading-relaxed mb-10 flex-grow text-lg italic font-medium group-hover:text-white transition-colors">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <img src={rev.img} alt={rev.name} className="w-14 h-14 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform border border-stone-800" />
                <div>
                  <h4 className="font-black text-white text-lg">{rev.name}</h4>
                  <p className="text-xs text-stone-500 font-bold uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
