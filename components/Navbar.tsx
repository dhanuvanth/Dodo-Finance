import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Dodo', href: '#why-dodo' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              className="flex items-center gap-3 group"
              onClick={(e) => handleScrollToSection(e, '#home')}
            >
              <div className={`p-2.5 rounded-xl ${scrolled ? 'bg-primary-700 text-white shadow-md' : 'bg-white text-primary-700 shadow-lg'}`}>
                <BarChart3 size={26} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl leading-none tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  Dodo
                </span>
                <span className={`text-xs font-medium tracking-widest uppercase ${scrolled ? 'text-primary-600' : 'text-white'}`}>
                  Financials
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${scrolled ? 'text-slate-600' : 'text-white shadow-sm'}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg ${
                scrolled 
                  ? 'bg-primary-700 text-white hover:bg-primary-800' 
                  : 'bg-white text-primary-700 hover:bg-slate-50'
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${scrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-700 hover:bg-slate-50"
                onClick={(e) => handleScrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;