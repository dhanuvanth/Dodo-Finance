import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1e293b] mb-4">
            Get In Touch
          </h2>
          
          {/* Decorative Gradient Line */}
          <div className="w-12 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full mb-6 opacity-80 shadow-sm"></div>
          
          <p className="text-xl text-slate-500 font-medium mb-10">
            We're here to help your business thrive
          </p>

          <button className="bg-[#3b82f6] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)] hover:bg-blue-600 transition-all hover:scale-105 mb-16">
            Send Enquiry
          </button>
        </motion.div>

        <div className="space-y-6">
          {/* Email Card */}
          <motion.div 
            className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-md transition-shadow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 bg-[#d1fae5] rounded-full flex items-center justify-center shrink-0">
              <Mail className="text-[#10b981]" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Email Us</h3>
              <a href="mailto:Business@dodofinancials.com" className="text-[#3b82f6] font-semibold text-lg hover:underline">
                Business@dodofinancials.com
              </a>
            </div>
          </motion.div>

          {/* Call Card */}
          <motion.div 
            className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-md transition-shadow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-14 h-14 bg-[#fce7f3] rounded-full flex items-center justify-center shrink-0">
              <Phone className="text-[#db2777]" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Call Us</h3>
              <a href="tel:+919994475000" className="text-[#db2777] font-semibold text-lg hover:underline">
                +91 9994475000
              </a>
              <p className="text-slate-500 font-medium text-sm mt-1">Mon-Fri: 9:00 AM - 5:30 PM</p>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div 
            className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-md transition-shadow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-[#dbeafe] rounded-full flex items-center justify-center shrink-0">
              <MapPin className="text-[#2563eb]" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Office Address</h3>
              <p className="text-slate-500 font-medium text-lg">
                Level 15, 123 Pitt Street, Sydney NSW 2000, Australia
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
