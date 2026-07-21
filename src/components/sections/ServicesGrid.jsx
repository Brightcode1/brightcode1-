import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, ShoppingCart, Code2, GraduationCap, 
  Hospital, Database, Users, Smartphone, 
  PenTool, LineChart, Search, Megaphone,
  Palette, Cloud, Wrench, ArrowUpRight
} from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website Development', desc: 'Custom, responsive websites built with modern frameworks to drive engagement and conversions.' },
  { icon: ShoppingCart, title: 'Ecommerce Development', desc: 'Secure, scalable online stores with seamless payment integration and inventory management.' },
  { icon: Code2, title: 'Custom Software', desc: 'Tailored enterprise software solutions designed to solve your specific business challenges.' },
  { icon: GraduationCap, title: 'School Management', desc: 'Comprehensive systems for educational institutions to manage students, staff, and operations.' },
  { icon: Hospital, title: 'Hospital Management', desc: 'Integrated healthcare platforms for patient records, appointments, and billing.' },
  { icon: Database, title: 'ERP Solutions', desc: 'Enterprise Resource Planning software to streamline your business processes and data.' },
  { icon: Users, title: 'CRM Systems', desc: 'Customer Relationship Management tools to boost sales and improve client retention.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS and Android.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'User-centric design solutions that deliver intuitive and stunning digital experiences.' },
  { icon: LineChart, title: 'Digital Marketing', desc: 'Data-driven marketing strategies to increase brand visibility and ROI.', link: '/digital-marketing' },
  { icon: Search, title: 'SEO Services', desc: 'Search engine optimization to rank higher and attract organic traffic.' },
  { icon: Megaphone, title: 'Google & Meta Ads', desc: 'Targeted advertising campaigns on search engines and social media platforms.' },
  { icon: Palette, title: 'Branding', desc: 'Cohesive brand identity design, including logos, typography, and visual guidelines.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure, migration, and management services.' },
  { icon: Wrench, title: 'Maintenance & Support', desc: 'Reliable ongoing support and updates to keep your digital assets performing optimally.' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRTZFNkU2IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQwIDAgNDAgNDAgMCA0MCIvPjwvZz48L3N2Zz4=')] opacity-[0.2] mix-blend-multiply pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-primary/5 border border-primary/20 text-primary font-semibold text-sm mb-6 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Enterprise Solutions
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-dark"
          >
            Comprehensive <br/>
            <span className="text-gradient">Digital Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl font-light"
          >
            We provide end-to-end technology solutions tailored to empower your business and drive exponential growth in the digital age.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => service.link && navigate(service.link)}
              className="glass-card p-8 rounded-3xl group cursor-pointer relative overflow-hidden h-full flex flex-col border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] bg-white/80"
            >
              {/* Hover Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary/10 group-hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <service.icon className="text-gray-700 group-hover:text-primary transition-colors relative z-10" size={28} strokeWidth={1.5} />
                  </div>
                  
                  {service.link && (
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-primary transition-all duration-500">
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-display font-bold text-dark mb-3 group-hover:text-primary transition-colors tracking-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light mt-auto group-hover:text-gray-700 transition-colors">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
