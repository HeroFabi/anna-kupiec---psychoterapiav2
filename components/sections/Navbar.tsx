'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export const navLinks = [
  { name: 'O mnie', href: '/#o-mnie' },
  { name: 'Specjalizacja', href: '/#specjalizacja' },
  { name: 'Metody pracy', href: '/#metody' },
  { name: 'Cennik', href: '/#cennik' },
  { name: 'Kontakt', href: '/#kontakt' },
];

interface NavbarProps {
  isSolid?: boolean;
}

export default function Navbar({ isSolid = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeState = isScrolled || isSolid;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        activeState ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className={`font-serif text-2xl tracking-wide font-medium transition-colors ${activeState ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
          Anna Kupiec
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#5A7358] ${
                activeState ? 'text-slate-600' : 'text-white/90 drop-shadow-md'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#kontakt" 
            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all ${
              activeState 
                ? 'bg-[#5A7358] text-white hover:bg-[#4a6048] shadow-md hover:shadow-lg' 
                : 'bg-white text-[#5A7358] hover:bg-gray-50 shadow-lg'
            }`}
          >
            Umów wizytę
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${activeState ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${activeState ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-[#5A7358] hover:bg-slate-50 rounded-lg uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
