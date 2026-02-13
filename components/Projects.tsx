
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A feature-rich e-commerce platform with a modern UI and a robust backend for a seamless shopping experience.',
    image: 'https://i.ibb.co/B7Xzt6h/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111.png',
    tech: ['React', 'Node.js', 'MySQL'],
    github: 'https://github.com/VipinRawat14/e-commerce-website'
  },
  {
    title: 'StaffSync : Employee Management System',
    description: 'A comprehensive system for managing employee data, attendance, and performance records efficiently.',
    image: 'https://i.ibb.co/wZHKfvHd/Screenshot-2026-02-12-155420.png',
    tech: ['react', 'python', 'SQLite', 'Django'],
    github: 'https://github.com/VipinRawat14/StaffSync'
  },
  {
    title: 'Mini Games',
    description: 'A collection of classic mini-games built using Python, featuring libraries like Tkinter and Pygame for fun, interactive experiences.',
    image: 'https://i.ibb.co/DfcRV6FK/Screenshot-2026-02-12-160753.png',
    tech: ['python', 'tkinter', 'pygame'],
    github: 'https://github.com/VipinRawat14'
  },
  {
    title: 'Crypto-Price-Tracker',
    description: 'A real-time cryptocurrency price tracker that fetches and displays live data using an API, providing users with up-to-date market information.',
    image: 'https://i.ibb.co/7xpZkvSW/Screenshot-2026-02-12-210048.png',
    tech: ['python', 'SQLite', 'javascript', 'css', 'api'],
    github: 'https://github.com/VipinRawat14/Crypto_Price_Tracker'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <p className="text-accent font-black tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black italic">Selected Works</h2>
        </div>
        <p className="text-[#B0B0B0] max-w-sm text-sm font-medium">
          A collection of projects where engineering meets aesthetic and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-[#1A1A1A] border border-white/5 overflow-hidden rounded-sm hover:border-accent/30 transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase font-black tracking-wider text-accent border border-accent/30 px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors italic">
                {project.title}
              </h3>
              <p className="text-[#B0B0B0] text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
