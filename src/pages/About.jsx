import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="py-10 relative bg-white overflow-hidden">
        <div className="absolute inset-0 hidden"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-gradient">BrightCode</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            We are a team of passionate technologists, designers, and strategists dedicated to transforming businesses through innovative digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-10 border-t border-[#ECECEC]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our <span className="text-gradient">Story</span></h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between complex technology and business growth, BrightCode Digital has evolved into a premier software agency.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Over the past 5+ years, we have partnered with over 50 clients globally, delivering scalable web applications, robust mobile apps, and enterprise-grade software that drive measurable results.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img loading="lazy" decoding="async" 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.2)] border border-[#ECECEC]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 glass bg-white border border-[#ECECEC] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core <span className="text-gradient">Values</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our work, our culture, and our commitment to our clients.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Client-Centric', desc: 'Your success is our primary goal. We build solutions tailored to your exact needs.' },
              { icon: Zap, title: 'Innovation', desc: 'We stay ahead of the curve, adopting the latest technologies to deliver cutting-edge products.' },
              { icon: Shield, title: 'Integrity', desc: 'Transparency, honesty, and ethical practices in every line of code we write.' },
              { icon: Users, title: 'Collaboration', desc: 'We work as an extension of your team, fostering seamless communication.' }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-[#ECECEC] shadow-sm hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
