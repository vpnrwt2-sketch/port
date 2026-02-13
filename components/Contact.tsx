
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

// Contact component providing social links for reaching out
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-black tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic">Get In Touch</h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto mb-12 font-medium">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center border border-white/5 group-hover:border-accent transition-colors">
                <Mail className="text-accent" size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-black text-[#B0B0B0] tracking-widest">Email</p>
                <p className="text-white font-bold">vipinrawat1249@gmail.com</p>
              </div>
            </div>

            <a href="https://github.com/VipinRawat14" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center border border-white/5 group-hover:border-accent transition-colors">
                <Github className="text-accent" size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-black text-[#B0B0B0] tracking-widest">GitHub</p>
                <p className="text-white font-bold">VipinRawat14</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/vipin-rawat-3a4b2a2b5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center border border-white/5 group-hover:border-accent transition-colors">
                <Linkedin className="text-accent" size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-black text-[#B0B0B0] tracking-widest">LinkedIn</p>
                <p className="text-white font-bold">Vipin Rawat</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
