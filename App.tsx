import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <Navigation onNavigate={scrollToSection} />
      <main className="flex flex-col w-full">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Portfolio />
        <Services onNavigate={scrollToSection} />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      <Footer onNavigate={scrollToSection} />

      {/* Floating Contact Button */}
      <FloatingContact />

      {/* Bottom Mobile Tab Bar (Hidden on Desktop) */}
      <div className="fixed bottom-0 w-full bg-white/95 dark:bg-[#1e1914]/95 backdrop-blur border-t border-stone-100 dark:border-stone-800 pb-6 pt-2 px-6 flex justify-between items-end z-40 text-xs font-medium text-stone-400 md:hidden">
        <button onClick={() => scrollToSection('hero')} className="flex flex-col items-center gap-1 text-primary hover:text-primary-hover active:scale-95 transition-transform">
          <span className="material-symbols-outlined filled">home</span>
          <span>Home</span>
        </button>
        <button onClick={() => scrollToSection('portfolio')} className="flex flex-col items-center gap-1 hover:text-stone-600 dark:hover:text-stone-300 transition-colors active:scale-95">
          <span className="material-symbols-outlined">grid_view</span>
          <span>Portfolio</span>
        </button>
        <button onClick={() => scrollToSection('services')} className="flex flex-col items-center gap-1 hover:text-stone-600 dark:hover:text-stone-300 transition-colors active:scale-95">
          <span className="material-symbols-outlined">face_3</span>
          <span>Services</span>
        </button>
        <button onClick={() => scrollToSection('about')} className="flex flex-col items-center gap-1 hover:text-stone-600 dark:hover:text-stone-300 transition-colors active:scale-95">
          <span className="material-symbols-outlined">person</span>
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
};

export default App;