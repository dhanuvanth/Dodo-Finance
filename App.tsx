import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WeWorkWith from './components/WeWorkWith';
import Services from './components/Services';
import TrustedBy from './components/TrustedBy';
import Security from './components/Security';
import TeamSoftware from './components/TeamSoftware';
import WhyDodo from './components/WhyDodo';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about" className="scroll-mt-20">
          <About />
        </div>
        <WeWorkWith />
        <div id="services" className="scroll-mt-20">
          <Services />
        </div>
        <TrustedBy />
        <Security />
        <div id="team" className="scroll-mt-20">
          <TeamSoftware />
        </div>
        <div id="why-dodo" className="scroll-mt-20">
          <WhyDodo />
        </div>
        <div id="contact" className="scroll-mt-20">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
