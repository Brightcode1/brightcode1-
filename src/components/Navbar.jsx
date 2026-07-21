import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Technologies', path: '/technologies' },
  { name: 'Digital Marketing', path: '/digital-marketing' },
  { name: 'Contact', path: '/contact' },
];

const MotionLink = motion(Link);


const Navbar = () => {
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

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-md group-hover:bg-primary/40 transition-all duration-300"></div>
              <img loading="lazy" decoding="async" src="/favicon.jpeg" alt="BrightCode Digital Logo" className="relative h-10 w-auto rounded-md shadow-sm" />
            </motion.div>
            <span className="text-2xl font-display font-bold text-dark hidden sm:inline-block tracking-tight">
              BrightCode <span className="text-gradient">Digital</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group py-2"
                >
                  <span
                    className={`text-[15px] font-medium transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-gray-600 hover:text-dark'
                    }`}
                  >
                    {link.name}
                  </span>
                  {/* Animated Underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-primary transform origin-left transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                  {/* Soft Glow on active */}
                  {isActive && (
                    <span className="absolute inset-0 bg-primary/5 blur-lg rounded-full -z-10"></span>
                  )}
                </Link>
              );
            })}
            
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-6 py-2.5 rounded-full bg-gradient-primary text-white text-[15px] font-semibold transition-all premium-shadow group inline-block"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </MotionLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass border-t border-gray-200/50 mt-3"
          >
            <nav className="flex flex-col px-6 py-6 space-y-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium transition-colors ${
                      location.pathname === link.path ? 'text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center items-center px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Get Free Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
