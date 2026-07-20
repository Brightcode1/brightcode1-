import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import CTA from '../components/sections/CTA';

const blogPosts = [
  {
    title: 'The Future of Web Development in 2026',
    category: 'Technology',
    date: 'Oct 15, 2026',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    excerpt: 'Explore the emerging trends in frontend frameworks, serverless architectures, and AI-driven development.'
  },
  {
    title: 'How AI is Transforming Digital Marketing',
    category: 'Marketing',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Learn how machine learning algorithms are optimizing ad spend and personalizing user experiences.'
  },
  {
    title: '10 Security Best Practices for Enterprise Apps',
    category: 'Security',
    date: 'Sep 10, 2026',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Protect your business data with these essential security protocols and architectural decisions.'
  }
];

const BlogPage = () => {
  return (
    <div>
      <section className="py-20 bg-white text-center border-b border-[#ECECEC]">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our <span className="text-gradient">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Latest news, trends, and thoughts from our team of experts.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-xs font-semibold text-accent">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-600 mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors">
                    Read Article <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default BlogPage;
