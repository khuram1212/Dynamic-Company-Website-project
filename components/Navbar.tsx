import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled || isOpen ? 'glass-nav shadow-sm border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-slate-900 text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Command className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                NovaCorp
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-brand-600 bg-brand-50' 
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pl-4 ml-2 border-l border-slate-200">
                <Link to="/contact">
                    <button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#0ea5e9_50%,#E2E8F0_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
                            Get Started
                        </span>
                    </button>
                </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100">
                 <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-3 rounded-lg bg-slate-900 text-white font-medium shadow-md hover:bg-slate-800"
                 >
                    Get Started
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;