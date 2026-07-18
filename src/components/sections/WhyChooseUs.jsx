import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Code, Search, Clock, Headphones, Lock, MonitorSmartphone } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Experienced Developers', desc: 'Our team comprises seasoned professionals with years of industry expertise.' },
  { icon: Zap, title: 'Affordable Pricing', desc: 'Premium quality digital solutions that fit your budget without compromising value.' },
  { icon: Code, title: 'Clean Code', desc: 'Maintainable, scalable, and well-documented codebase following best practices.' },
  { icon: Search, title: 'SEO Friendly', desc: 'Built-in optimization ensuring your application ranks high on search engines.' },
  { icon: Clock, title: 'Fast Delivery', desc: 'Agile methodologies ensuring rapid development and timely project delivery.' },
  { icon: Headphones, title: '24x7 Support', desc: 'Round-the-clock technical support and maintenance for uninterrupted operations.' },
  { icon: Lock, title: 'Secure Applications', desc: 'Robust security measures protecting your data and users from threats.' },
  { icon: MonitorSmartphone, title: 'Modern Technology', desc: 'Leveraging the latest tech stack to build future-proof solutions.' }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Partner With <span className="text-gradient">BrightCode?</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We go beyond just delivering code. We are your strategic digital partners, committed to understanding your vision and translating it into scalable, high-performance solutions.
              </p>
              
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary mb-8">
                <p className="italic text-gray-600">
                  "BrightCode Digital transformed our operations with a custom ERP that increased our efficiency by 40%."
                </p>
                <div className="mt-4 font-semibold text-dark">- CEO, TechCorp</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
