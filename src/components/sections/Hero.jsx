import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero_illustration.png';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-4 pb-16 bg-transparent">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-[#ECECEC] text-[#5B5EF5] font-medium text-sm mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#5B5EF5] animate-pulse"></span>
              Enterprise Digital Agency
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-[#202124] tracking-tight">
              Build Next-Gen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B5EF5] to-[#7C83FD]">
                Digital Products
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-light">
              We help ambitious startups and global enterprises design, build, and scale modern web, mobile, and AI solutions.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-12">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-[#5B5EF5] hover:bg-[#4a4deb] text-white font-medium flex items-center gap-2 transition-all shadow-[0_8px_20px_rgba(91,94,245,0.25)] hover:shadow-[0_12px_25px_rgba(91,94,245,0.35)] hover:-translate-y-0.5"
              >
                Start Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 rounded-full bg-white border border-[#ECECEC] hover:border-[#DFF6FF] hover:bg-[#F2FBFF] text-[#202124] font-medium transition-all shadow-sm hover:shadow-md"
              >
                View Portfolio
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-8 border-t border-[#ECECEC]">
              <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">Trusted by industry leaders</p>
              <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="flex items-center gap-2 font-bold text-xl text-[#202124]"><Globe className="text-[#5B5EF5]" size={24}/> GlobalTech</div>
                 <div className="flex items-center gap-2 font-bold text-xl text-[#202124]"><Zap className="text-[#5B5EF5]" size={24}/> FastStack</div>
                 <div className="flex items-center gap-2 font-bold text-xl text-[#202124]"><ShieldCheck className="text-[#5B5EF5]" size={24}/> SecureCloud</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[650px] flex items-center justify-center lg:justify-end"
          >
            {/* Image Container with subtle styling */}
            <div className="relative z-10 w-full max-w-lg xl:max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5B5EF5]/10 to-transparent rounded-[2rem] blur-xl transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={heroImg} 
                alt="Digital Solutions Dashboard" 
                className="rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/50 object-cover w-full h-auto bg-white"
              />
            </div>

            {/* Small floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-8 h-8 rounded-full bg-[#E8E6FF] border border-white shadow-sm z-20"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 w-12 h-12 rounded-2xl bg-[#DFF6FF] border border-white shadow-sm rotate-12 z-20"
            ></motion.div>
            <div className="absolute top-1/2 right-[-20px] w-4 h-4 rounded-full bg-[#5B5EF5] opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
