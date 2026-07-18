import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, GraduationCap, Landmark, ShoppingBag, Plane, Building2, Factory, Dumbbell, Utensils, Truck } from 'lucide-react';
import CTA from '../components/sections/CTA';

const industries = [
  { icon: HeartPulse, name: 'Healthcare', desc: 'Patient management, telemedicine, and health tracking apps.' },
  { icon: GraduationCap, name: 'Education', desc: 'E-learning platforms, LMS, and student portals.' },
  { icon: Landmark, name: 'Finance', desc: 'Fintech apps, secure banking portals, and investment tools.' },
  { icon: ShoppingBag, name: 'Retail & E-commerce', desc: 'Online stores, POS systems, and inventory management.' },
  { icon: Plane, name: 'Travel', desc: 'Booking engines, travel guides, and hospitality management.' },
  { icon: Building2, name: 'Real Estate', desc: 'Property listings, virtual tours, and CRM solutions.' },
  { icon: Factory, name: 'Manufacturing', desc: 'ERP systems, supply chain tracking, and IoT integrations.' },
  { icon: Dumbbell, name: 'Sports & Fitness', desc: 'Workout trackers, gym management, and membership apps.' },
  { icon: Utensils, name: 'Food Delivery', desc: 'Restaurant apps, delivery tracking, and POS integration.' },
  { icon: Truck, name: 'Logistics', desc: 'Fleet management, shipment tracking, and warehouse systems.' },
];

const IndustriesPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="absolute inset-0 hidden"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Industries We <span className="text-gradient">Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Delivering tailored digital solutions across diverse sectors to solve unique business challenges.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                  <industry.icon className="text-primary group-hover:text-accent transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">{industry.name}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default IndustriesPage;
