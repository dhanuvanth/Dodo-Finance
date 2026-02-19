import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ArrowRight, Handshake } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80", // Finance/Accounting
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80", // Data/Charts
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80", // Meeting
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" // Office
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-primary-900 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* Full Screen Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
           <div 
             key={img}
             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
           >
             <img 
               src={img} 
               alt={`Slide ${index + 1}`} 
               className="w-full h-full object-cover"
             />
           </div>
        ))}
      </div>

      {/* 50% Transparent Blue Overlay */}
      <div className="absolute inset-0 bg-primary-900/50 z-0"></div>

      {/* Content Section - Centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="mb-6 inline-block">
             <span className="py-2 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-sm md:text-base tracking-wide shadow-sm">
                You focus on your business. We take care of the back office.
             </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
              Professional International <br />
              <span className="text-primary-100">Business Support</span>
          </h1>
          
          <p className="mt-6 text-xl text-white font-medium mb-10 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Providing professional accounting and financial support services to international businesses, with a strong focus on accuracy, compliance, and structured delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="white" href="#contact" className="w-full sm:w-auto gap-2 shadow-xl hover:scale-105 transition-transform">
              Get in Touch
              <ArrowRight size={20} />
              </Button>
              
              <Button variant="outline" href="#contact" className="w-full sm:w-auto text-white border-white hover:bg-white/20 gap-2 shadow-lg backdrop-blur-sm">
              Partner with Us
              <Handshake size={20} />
              </Button>
          </div>

          <p className="mt-8 text-white/80 text-sm font-medium tracking-wide">
            Creating win-win partnerships through reliable offshore support.
          </p>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all shadow-md ${idx === currentImage ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;