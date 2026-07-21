import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Zap, ShieldCheck, ChevronDown, Code, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero_illustration.png';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#FAFAFA]">
      
      {/* Animated Premium Background Mesh/Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRTZFNkU2IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQwIDAgNDAgNDAgMCA0MCIvPjwvZz48L3N2Zz4=')] opacity-[0.4] mix-blend-multiply"></div>
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl pt-10 lg:pt-0"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <div className="relative group inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Award-Winning Enterprise Agency
                </span>
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-[72px] font-display font-bold leading-[1.05] mb-8 text-dark tracking-tight">
              Build Next-Gen <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer bg-[length:200%_auto]">
                  Digital Products
                </span>
                {/* Decorative underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </svg>
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-light">
              We partner with visionary startups and global enterprises to design, engineer, and scale world-class software, mobile, and AI solutions.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-5 mb-14">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-dark text-white font-semibold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.4)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 text-dark font-semibold text-[15px] transition-all duration-300 hover:bg-white hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1"
              >
                <span className="relative z-10">Explore Our Work</span>
              </Link>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200/60 relative">
              <p className="text-[13px] text-gray-500 font-semibold mb-5 uppercase tracking-[0.2em]">Trusted by industry leaders</p>
              <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                 <div className="flex items-center gap-2.5 font-display font-bold text-xl text-dark tracking-tight"><Globe className="text-primary" size={24}/> GlobalTech</div>
                 <div className="flex items-center gap-2.5 font-display font-bold text-xl text-dark tracking-tight"><Zap className="text-secondary" size={24}/> FastStack</div>
                 <div className="flex items-center gap-2.5 font-display font-bold text-xl text-dark tracking-tight"><ShieldCheck className="text-accent" size={24}/> SecureCloud</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Parallax Illustration & Floating Elements */}
          <motion.div
            style={{ y, opacity }}
            className="relative lg:h-[700px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            {/* Main Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-lg xl:max-w-xl perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/20 rounded-[2.5rem] blur-2xl transform translate-x-4 translate-y-8 -z-10 animate-pulse-slow"></div>
              
              <div className="glass-card rounded-[2rem] p-3 border border-white/60 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 z-10 pointer-events-none"></div>
                <img loading="lazy" decoding="async" 
                  src={heroImg} 
                  alt="Digital Solutions Dashboard" 
                  className="rounded-3xl w-full h-auto relative z-0 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Floating Dashboard Card 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-20 glass-card p-4 rounded-2xl flex items-center gap-4 shadow-xl border border-white/70 z-20 hidden md:flex"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-inner">
                  <Code size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Clean Code</div>
                  <div className="text-sm font-bold text-dark">99.9% Optimization</div>
                </div>
              </motion.div>

              {/* Floating Dashboard Card 2 */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-32 glass-card p-4 rounded-2xl flex items-center gap-4 shadow-xl border border-white/70 z-20 hidden md:flex"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white shadow-inner">
                  <Layout size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Premium UX</div>
                  <div className="text-sm font-bold text-dark">Award Winning</div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Scroll</span>
        <ChevronDown size={16} className="text-gray-400" />
      </motion.div>
      
    </section>
  );
};

export default Hero;
