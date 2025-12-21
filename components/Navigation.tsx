import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'booking' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full flex h-16 md:h-20 items-center justify-between px-5 md:px-10 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#1e1914]/95 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(0,0,0,0.05)] border-b border-stone-50 dark:border-stone-800/50'
            : 'bg-transparent'
        }`}
      >
        {/* Left: Hamburger Menu (Mobile Only) */}
        <button
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(true)}
          className={`flex md:hidden size-10 items-center justify-center rounded-full active:scale-95 transition-all focus:outline-none ${
            isScrolled ? 'text-primary hover:bg-primary/10' : 'text-[#191510] hover:bg-black/5'
          }`}
        >
          <span className="material-symbols-outlined text-[28px] font-light">menu</span>
        </button>

        {/* Center/Left: Logo */}
        <div className="flex-1 flex justify-center md:justify-start md:flex-none">
          <h1
            onClick={() => handleNavClick('hero')}
            className={`font-serif text-[24px] md:text-[28px] font-medium tracking-tight leading-none cursor-pointer ${
              isScrolled ? 'text-[#2C2C2C] dark:text-stone-50' : 'text-[#191510]'
            }`}
          >
            Eli Hoàng Tú
          </h1>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
            {navLinks.map((link) => (
                <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors ${
                        isScrolled ? 'text-stone-600 dark:text-stone-300' : 'text-stone-800 dark:text-stone-200'
                    }`}
                >
                    {link.name}
                </button>
            ))}
        </div>

        {/* Right: Call to Action (Booking) */}
        <div className="flex md:flex-none">
            {/* Mobile Icon */}
            <button
            aria-label="Book Appointment"
            onClick={() => onNavigate('booking')}
            className={`flex md:hidden size-10 items-center justify-center rounded-full active:scale-95 transition-all focus:outline-none ${
                isScrolled ? 'text-primary hover:bg-primary/10' : 'text-[#191510] hover:bg-black/5'
            }`}
            >
            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            </button>

            {/* Desktop Button */}
            <button
            onClick={() => onNavigate('booking')}
            className={`hidden md:flex h-10 px-6 items-center justify-center rounded-full text-sm font-bold tracking-wide transition-all transform hover:scale-105 ${
                isScrolled 
                ? 'bg-primary text-white shadow-md hover:bg-primary-hover' 
                : 'bg-primary text-white shadow-lg hover:bg-primary-hover'
            }`}
            >
            Đặt lịch ngay
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute left-0 top-0 h-full w-64 bg-white dark:bg-[#1e1914] shadow-xl p-6 flex flex-col gap-6 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-serif text-xl text-primary">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)} className="text-stone-500">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-lg font-medium text-[#191510] dark:text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;