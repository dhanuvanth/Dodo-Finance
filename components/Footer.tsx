import React from 'react';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img 
              src="https://i.ibb.co/spmxnJBZ/image.png" 
              alt="Dodo Financials Logo" 
              className="h-10 w-auto rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#about" onClick={(e) => handleScrollToSection(e, '#about')} className="hover:text-white transition-colors">About</a>
            <a href="#services" onClick={(e) => handleScrollToSection(e, '#services')} className="hover:text-white transition-colors">Services</a>
            <a href="#why-dodo" onClick={(e) => handleScrollToSection(e, '#why-dodo')} className="hover:text-white transition-colors">Why Us</a>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="mt-8 md:mt-0 text-sm">
            &copy; {new Date().getFullYear()} Dodo Financials. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;