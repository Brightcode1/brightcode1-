import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, ShoppingCart, Code2, GraduationCap, 
  Hospital, Database, Users, Smartphone, 
  PenTool, LineChart, Search, Megaphone,
  Palette, Cloud, Wrench
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comprehensive <span className="text-gradient">Digital Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            We provide end-to-end technology solutions tailored to empower your business and drive growth in the digital age.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              onClick={() => service.link && navigate(service.link)}
              className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden h-full block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white border border-[#ECECEC] shadow-sm border border-[#ECECEC] flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                  <service.icon className="text-primary group-hover:text-accent transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
