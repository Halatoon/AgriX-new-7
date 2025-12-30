
import { useState, useEffect } from 'react';
import Navbar, { AgrixLogo } from './components/Navbar';
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
import Dashboard from './components/Dashboard';

const App = () => {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navigateToDashboard = () => {
    setCurrentView('dashboard');
    setIsAppModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToLanding = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-[#fbbf24] selection:text-black transition-colors duration-500 bg-white dark:bg-[#0c0c0c]">
      {currentView === 'landing' ? (
        <div className="animate-fadeIn relative">
          <Navbar 
            onOpenAppModal={() => setIsAppModalOpen(true)} 
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            onGoToApp={navigateToDashboard}
            onNavigate={scrollToSection}
          />
          
          <main className="relative">
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              <div className="absolute top-[5%] -left-[10%] w-[80vw] h-[80vw] bg-[#a3e635]/5 dark:bg-[#a3e635]/2 blur-[140px] rounded-full"></div>
              <div className="absolute top-[40%] -right-[15%] w-[70vw] h-[70vw] bg-[#fbbf24]/5 dark:bg-[#fbbf24]/2 blur-[140px] rounded-full"></div>
              <div className="absolute bottom-[10%] -left-[10%] w-[60vw] h-[60vw] bg-blue-500/5 dark:bg-blue-500/2 blur-[140px] rounded-full"></div>
            </div>

            <div className="relative z-10">
              <Hero 
                onOpenAppModal={() => setIsAppModalOpen(true)} 
                onGoToDashboard={navigateToDashboard}
                onScrollToOrder={() => scrollToSection('order')}
              />
              <About />
              <HowItWorks />
              <SensorShowcase />
              <OrderSection />
              <AppSection onOpenDashboard={navigateToDashboard} />
              <Testimonials />
              <Contact />
            </div>
          </main>
          <Footer onNavigate={scrollToSection} />
        </div>
      ) : (
        <div className="animate-fadeIn">
          <Dashboard onBack={navigateToLanding} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      )}

      {isAppModalOpen && (
        <Modal 
          title="Choose Your Channel" 
          onClose={() => setIsAppModalOpen(false)}
        >
          <div className="space-y-8">
            <button 
              onClick={navigateToDashboard}
              className="w-full text-left bg-stone-100 dark:bg-stone-900/50 border border-blue-500/20 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-[#a3e635]/5 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <AgrixLogo className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-black text-stone-900 dark:text-white text-xl">Web Application</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400 font-medium">Full dashboard with analytics</p>
                  </div>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-[10px] px-3 py-1 rounded-full uppercase font-black">Coming Soon</span>
              </div>
              <div className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-black text-center group-hover:bg-[#a3e635] group-hover:text-black transition-all">
                Preview Early Access
              </div>
            </button>

            <div className="bg-stone-100 dark:bg-stone-900/30 p-8 rounded-[2rem] border border-stone-200 dark:border-stone-800 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="font-black text-stone-900 dark:text-white text-xl">Native Apps</h4>
                  <p className="text-sm text-stone-500 font-medium">Push notifications & offline mode</p>
                </div>
                <span className="bg-stone-200 dark:bg-stone-800 text-stone-500 dark:text-stone-400 text-[10px] px-3 py-1 rounded-full uppercase font-black">Coming Soon</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button disabled className="bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 py-4 rounded-2xl font-bold cursor-not-allowed text-sm">Android</button>
                <button disabled className="bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 py-4 rounded-2xl font-bold cursor-not-allowed text-sm">iOS (Beta)</button>
              </div>
            </div>

            <div className="text-center py-4 border-t border-stone-200 dark:border-stone-800">
               <p className="text-stone-500 font-bold mb-4 italic">Quickest way to start?</p>
               <a 
                href="https://wa.me/212649495374" 
                target="_blank"
                rel="noopener noreferrer"
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
