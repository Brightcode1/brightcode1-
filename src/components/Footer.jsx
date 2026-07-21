import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark relative overflow-hidden pt-24 pb-12 border-t border-white/10">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:pr-4">
            <Link to="/" className="inline-block mb-6 group">
              <span className="text-3xl font-display font-bold text-white tracking-tight">
                BrightCode <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent group-hover:from-accent group-hover:to-primary transition-all duration-500">Digital</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed font-light text-sm">
              We help startups and enterprises build modern digital solutions that scale and grow businesses globally.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: FaFacebook, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaLinkedin, link: "#" },
                { icon: FaInstagram, link: "https://instagram.com/brightcode_digital" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target={social.link.startsWith('http') ? "_blank" : "_self"} 
                  rel="noreferrer" 
                  aria-label="Social Link" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Digital Marketing', path: '/digital-marketing' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-display font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'Custom Software', 'AI Solutions', 'Cloud Services', 'UI/UX Design'].map((item, i) => (
                <li key={i}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent group-hover:scale-150 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm font-light group">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all">
                  <MapPin size={14} />
                </div>
                <span className="leading-relaxed">817, Pragti IT Park, Yogi Chowk<br/>Surat - 395006</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-light group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all">
                  <Phone size={14} />
                </div>
                <span className="group-hover:text-white transition-colors">6352677911</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-light group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all">
                  <Mail size={14} />
                </div>
                <span className="group-hover:text-white transition-colors break-all">digitalbrightcode@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center relative">
          <p className="text-gray-500 text-xs font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BrightCode Digital. All rights reserved.
          </p>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-5 w-10 h-10 rounded-full bg-dark border border-white/10 items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all z-20"
          >
            <ArrowUp size={18} />
          </motion.button>
          
          <div className="flex space-x-6 text-xs font-light text-gray-500">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
