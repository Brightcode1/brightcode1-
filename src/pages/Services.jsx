import React from 'react';
import { motion } from 'framer-motion';
import ServicesGrid from '../components/sections/ServicesGrid';
import Process from '../components/sections/Process';
import CTA from '../components/sections/CTA';

const ServicesPage = () => {
  return (
    <div>
      <section className="py-10 bg-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Digital <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive technology solutions designed to scale your business and drive growth.
          </motion.p>
        </div>
      </section>
      
      <ServicesGrid />
      <Process />
      <CTA />
    </div>
  );
};

export default ServicesPage;
