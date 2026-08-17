import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { COMPANY } from '@/data/company';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const useDarkNav = !isScrolled && isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 py-3.5 shadow-xs'
            : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Billion Themes Home">
            <Logo height={isScrolled ? 42 : 48} variant={useDarkNav ? 'white' : 'color'} className="transition-all duration-300" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-body text-xs uppercase tracking-[0.18em] transition-colors duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#D98E20] font-semibold'
                      : useDarkNav
                      ? 'text-white hover:text-[#D98E20]'
                      : 'text-[#121417] hover:text-[#D98E20]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D98E20]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm" href="/contact">
              START A PROJECT
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${useDarkNav ? 'text-white' : 'text-[#121417]'} hover:text-[#D98E20]`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FDFBF7] pt-28 px-8 flex flex-col justify-between pb-28 border-b border-slate-200">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-display text-2xl uppercase tracking-widest pb-3 border-b border-slate-200/60 ${
                    isActive ? 'text-[#D98E20] font-medium' : 'text-[#121417]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col space-y-4 pt-6">
            <Button variant="primary" href="/contact" className="w-full">
              START A PROJECT
            </Button>
            <Button variant="whatsapp" href={COMPANY.whatsappUrl} className="w-full">
              WHATSAPP US
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
