'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pethour.AI
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#recursos" className="text-dark hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#como-funciona" className="text-dark hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#contato" className="text-dark hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={scrollToWaitlist}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105"
            >
              Entrar na Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a
              href="#recursos"
              className="block py-2 text-dark hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Recursos
            </a>
            <a
              href="#como-funciona"
              className="block py-2 text-dark hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a
              href="#contato"
              className="block py-2 text-dark hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
            <button
              onClick={scrollToWaitlist}
              className="w-full bg-primary text-white px-6 py-2.5 rounded-full font-semibold"
            >
              Entrar na Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
