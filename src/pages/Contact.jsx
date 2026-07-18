import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    details: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact Number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.details.trim()) newErrors.details = 'Project Details are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
    // Clear the specific error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return; // Stop if validation fails
    }
    
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          company: formData.company,
          message: formData.details
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', address: '', company: '', details: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  // Check if form is completely valid to enable/disable button
  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone && formData.address && formData.details;

  return (
    <div className="pt-20">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Get In <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="glass-card p-8 rounded-2xl h-full space-y-8">
                <h3 className="text-2xl font-bold text-dark mb-6">Contact Information</h3>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark font-semibold mb-1">Our Office</h4>
                    <p className="text-gray-600">817, pragti it park yogichowck surat -395006</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">6352677911</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">digitalbrightcode@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark font-semibold mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-2xl space-y-6">
                
                {status === 'success' && (
                  <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
                    Thank you! Your message has been sent successfully. We will get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.firstName ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="John" />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.lastName ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="Doe" />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.email ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="john@example.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Contact Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.phone ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="1234567890" maxLength="10" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Address *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors ${errors.address ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="123 Main St, City" />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Company Name (Optional)</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white border border-[#ECECEC] shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors" placeholder="Your Company Ltd." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Project Details *</label>
                  <textarea rows="5" name="details" value={formData.details} onChange={handleChange} className={`w-full bg-white border shadow-sm rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors resize-none ${errors.details ? 'border-red-500' : 'border-[#ECECEC]'}`} placeholder="Tell us about your project..."></textarea>
                  {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
                </div>

                <button type="submit" disabled={status === 'loading' || !isFormValid} className="w-full py-4 rounded-lg bg-primary hover:bg-secondary text-dark font-bold transition-all shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

