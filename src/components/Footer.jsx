import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#ECECEC] pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-dark">
                BrightCode <span className="text-primary">Digital</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We help startups and enterprises build modern digital solutions that scale and grow businesses globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Social Link" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
                <FaFacebook size={18} />
              </a>
              <a href="#" aria-label="Social Link" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="Social Link" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
                <FaLinkedin size={18} />
              </a>
              <a href="https://instagram.com/brightcode_digital" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-dark text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-dark text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'Custom Software', 'Digital Marketing', 'AI Solutions', 'Cloud Services'].map((item) => (
                <li key={item}>
                  <Link to="/digital-marketing" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-dark text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-600">
                <MapPin className="text-primary mt-1" size={20} />
                <span>817, pragti it park yogichowck surat -395006</span>
              </li>
              <li className="flex items-center gap-4 text-gray-600">
                <Phone className="text-primary" size={20} />
                <span>6352677911</span>
              </li>
              <li className="flex items-center gap-4 text-gray-600">
                <Mail className="text-primary" size={20} />
                <span>digitalbrightcode@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ECECEC] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BrightCode Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
