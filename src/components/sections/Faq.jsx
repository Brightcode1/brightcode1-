import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  { q: "How long does it take to build a custom website or app?", a: "The timeline depends on the complexity of the project. A standard corporate website might take 4-6 weeks, while a complex web app or mobile app can take 3-6 months. We provide a detailed timeline during the planning phase." },
  { q: "Do you provide ongoing maintenance and support?", a: "Yes! We offer flexible maintenance packages to ensure your software remains up-to-date, secure, and fully functional after launch." },
  { q: "What is your pricing structure?", a: "Our pricing varies based on project requirements. We offer fixed-price contracts for well-defined projects and hourly/monthly rates for ongoing development work. Contact us for a custom quote." },
  { q: "Will I own the source code?", a: "Absolutely. Once the project is completed and fully paid for, we transfer 100% ownership of the source code and intellectual property to you." },
  { q: "Do you design the UI/UX as well?", a: "Yes, we have an in-house team of expert UI/UX designers who create stunning, user-friendly, and conversion-optimized interfaces." }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-lightBg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white border border-gray-200 text-dark font-semibold text-sm mb-6 shadow-sm"
          >
            <HelpCircle size={14} className="text-primary" />
            FAQ
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-dark"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            Everything you need to know about our services, process, and how we work with our partners.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 border ${
                openIndex === index 
                  ? 'border-primary/30 shadow-[0_10px_30px_rgba(37,99,235,0.1)] bg-white/90' 
                  : 'border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md bg-white/60 hover:bg-white/80'
              }`}
            >
              <button 
                className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`font-display font-semibold text-lg md:text-xl pr-8 transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-dark group-hover:text-primary/80'}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === index 
                    ? 'bg-primary text-white rotate-180 shadow-md' 
                    : 'bg-gray-50 border border-gray-200 text-gray-500 group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0 text-gray-600 text-base md:text-lg font-light leading-relaxed">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
