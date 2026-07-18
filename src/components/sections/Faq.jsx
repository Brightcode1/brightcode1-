import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <p className="text-gray-600">Everything you need to know about our services and process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-lg text-dark pr-8">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-dark' : 'bg-white border border-[#ECECEC] shadow-sm text-gray-600'}`}>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-[#ECECEC]">
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
