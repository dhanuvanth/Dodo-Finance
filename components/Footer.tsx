import React from 'react';
import { Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a192f] text-white pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo + Columns - all in one row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-start">
          {/* Logo Section - takes up ~1/3 */}
          <div className="lg:col-span-4 flex items-start">
            <a href="#home" className="inline-block">
              <img
                src="/Images/trustedBy/WWWWWWWWWW.png"
                alt="Dodo Financials Logo"
                className="w-full max-w-[280px] h-auto"
              />
            </a>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4 text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Australia</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">USA</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UK</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4 text-slate-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <a href="mailto:Business@dodofinancials.com" className="hover:text-white transition-colors">Business@dodofinancials.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400" />
                <a href="tel:+919994475000" className="hover:text-white transition-colors">+91 9994475000</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 mt-1 shrink-0" />
                <span>Level 15, 123 Pitt Street, Sydney NSW 2000, Australia</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <Linkedin size={18} stroke="white" strokeWidth={2} />
              </a>
              <a href="#" className="w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook size={18} stroke="white" strokeWidth={2} />
              </a>
              <a href="#" className="w-8 h-8 bg-[#00acee] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <Twitter size={18} stroke="white" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Powered By Section */}
        <div className="flex flex-col items-center gap-2 py-8 border-t border-white/5">
          <a
            href="https://vinkand.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 text-lg hover:text-white transition-colors group"
          >
            Made with <span className="text-primary-500 font-bold group-hover:text-primary-400 transition-colors">Vinkand</span> <span className="text-white">Technologies</span>
          </a>
          <span className="text-slate-500 text-sm">
            Powered by <span className="text-slate-300 font-medium">MKB Associates</span>
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-400 text-sm mb-4">
            &copy; {currentYear} Dodo Financials. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
