
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import SensorShowcase from './components/SensorShowcase';
import OrderSection from './components/OrderSection';
import AppSection from './components/AppSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  return (
    <div className="min-h-screen relative selection:bg-[#fbbf24] selection:text-black bg-[#0c0c0c]">
      <Navbar onOpenAppModal={() => setIsAppModalOpen(true)} />
      
      <main>
        <Hero onOpenAppModal={() => setIsAppModalOpen(true)} />
        <About />
        <HowItWorks />
        <SensorShowcase />
        <OrderSection />
        <AppSection />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Global App Options Modal */}
      {isAppModalOpen && (
        <Modal 
          title="Choose Your Channel" 
          onClose={() => setIsAppModalOpen(false)}
        >
          <div className="space-y-8">
            <div className="bg-stone-900/50 border border-[#a3e635]/20 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-[#a3e635]/5 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#a3e635] rounded-2xl flex items-center justify-center text-black shadow-lg shadow-[#a3e635]/30">
                  <span className="text-xl font-bold">W</span>
                </div>
                <div>
                  <h4 className="font-black text-white text-xl">Web Application</h4>
                  <p className="text-sm text-stone-400 font-medium">Full dashboard with analytics</p>
                </div>
              </div>
              <a 
                href="https://app.agrix.ma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-[#a3e635] transition-all w-full text-center group-hover:scale-[1.02]"
              >
                Launch Dashboard
              </a>
            </div>

            <div className="bg-stone-900/30 p-8 rounded-[2rem] border border-stone-800 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="font-black text-white text-xl">Native Apps</h4>
                  <p className="text-sm text-stone-500 font-medium">Push notifications & offline mode</p>
                </div>
                <span className="bg-stone-800 text-stone-400 text-[10px] px-3 py-1 rounded-full uppercase font-black">Coming Soon</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button disabled className="bg-stone-800 text-stone-600 py-4 rounded-2xl font-bold cursor-not-allowed text-sm">Android</button>
                <button disabled className="bg-stone-800 text-stone-600 py-4 rounded-2xl font-bold cursor-not-allowed text-sm">iOS (Beta)</button>
              </div>
            </div>

            <div className="text-center py-4 border-t border-stone-800">
               <p className="text-stone-500 font-bold mb-4 italic">Quickest way to start?</p>
               <a 
                href="https://wa.me/212649495374" 
                className="inline-flex items-center gap-2 text-[#fbbf24] hover:text-[#a3e635] font-black text-lg transition-colors"
               >
                Onboard via WhatsApp →
               </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
