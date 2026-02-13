
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 uppercase tracking-tighter">
              Hi,<br />
              I'm <span className="text-accent">Vipin Rawat</span>
            </h1>
            <p className="text-lg md:text-xl text-[#B0B0B0] max-w-xl mb-10 font-medium leading-relaxed">
              Full-Stack Developer with hands-on experience in building scalable web applications.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Image with Polygonal Frame */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
            
            {/* Polygonal Frame */}
            <div className="relative w-full h-full p-2 bg-gradient-to-tr from-accent to-red-900 shadow-2xl fancy-clip">
              <div className="w-full h-full bg-[#0F0F0F] fancy-clip overflow-hidden">
                <img
                  src="https://i.ibb.co/Qvs3y1Xs/vipin-formal.png"
                  alt="Vipin Portfolio Visual"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;