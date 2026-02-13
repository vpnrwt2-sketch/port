
import React from 'react';
import { motion } from 'framer-motion';

const CircularProgress: React.FC<{ percentage: number; label: string }> = ({ percentage, label }) => {
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-4 text-center"
    >
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle
          cx="70"
          cy="70"
          r={radius}
          strokeWidth="12"
          className="stroke-[#E10600]/20"
          fill="transparent"
        />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          strokeWidth="12"
          className="stroke-[#E10600]"
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          className="text-3xl font-black fill-white"
        >
          {`${percentage}%`}
        </text>
      </svg>
      <p className="text-sm font-bold uppercase tracking-widest text-[#B0B0B0]">{label}</p>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const technicalSkills = [
    'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'React',
    'Tailwind', 'Git', 'GitHub', 'VS Code', 'DSA', 'OOPs'
  ];

  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-16">
        <p className="text-accent font-black tracking-widest uppercase mb-4">The Toolkit</p>
        <h2 className="text-4xl md:text-5xl font-black italic">My Skills</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mb-24">
        <CircularProgress percentage={80} label="Frontend" />
        <CircularProgress percentage={75} label="Backend" />
        <CircularProgress percentage={80} label="Concepts" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-[#1A1A1A] p-8 md:p-12 border-t-2 border-accent"
      >
        <h3 className="text-3xl font-black mb-8 italic text-center">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {technicalSkills.map((skill) => (
            <span
              key={skill}
              className="bg-white/5 border border-white/10 px-5 py-3 text-sm font-bold text-[#B0B0B0] hover:text-white hover:bg-white/10 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
