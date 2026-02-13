
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundCanvas from './components/BackgroundCanvas';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for smoother entrance
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0F0F0F] text-white overflow-x-hidden">
      <BackgroundCanvas />
      
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="h-px w-full bg-white/5 my-12" />
                <About />
                <div className="h-px w-full bg-white/5 my-12" />
                <Skills />
                <div className="h-px w-full bg-white/5 my-12" />
                <Projects />
                <div className="h-px w-full bg-white/5 my-12" />
                <Contact />
              </div>
            </main>
            
            <footer className="py-12 px-6 border-t border-white/5 text-center text-sm text-[#B0B0B0]">
              <p>&copy; Vipin Rawat :)</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;