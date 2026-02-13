
import React from 'react';
import { motion } from 'framer-motion';
import { School, GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-black tracking-widest uppercase mb-4">Who I Am</p>
          <div className="space-y-6 text-[#B0B0B0] text-lg leading-relaxed font-medium">
            <p>
              A Full-Stack Developer with hands-on experience in building scalable web applications. Skilled in frontend and backend development, including responsive UI/UX design and RESTful API integration.
            </p>
            <p>
              Proficient with version control (Git/GitHub), testing, and deployment, with a strong focus on code quality and performance optimization. Experienced in Agile environments, collaborating across teams, and delivering projects from concept to production.
            </p>
            <p>
              Passionate about creating efficient, maintainable solutions that drive business growth. I believe in continuous improvement, constantly learning, refining my skills, and adopting best practices to deliver better, more reliable software with each project.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Education & Strengths */}
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 italic">Education and Experience</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 w-full">
            <AboutCard
              date="2021"
              icon={<GraduationCap className="text-accent" size={32} />}
              title="B.Tech (Computer Science Engineering)"
              description={
                <>
                  <span className="block text-accent text-lg font-semibold mb-2">AKTU | 7 cgpa</span>
                  Completed Bachelor of Technology in Computer Science Engineering with focus on software engineering, web technologies, and system design.
                </>
              }
            />
            <AboutCard
              date="2019"
              icon={<School className="text-accent" size={32} />}
              title="Class XII"
              description={
                <>
                  <span className="block text-accent text-lg font-semibold mb-2">Mayo International School | 73.5%</span>
                  Completed Class XII with focus on Mathematics and Computer Science.
                </>
              }
            />
            <AboutCard
              date="2021-2025"
              icon={<School className="text-accent" size={32} />}
              title="Class X"
              description={
                <>
                  <span className="block text-accent text-lg font-semibold mb-2">Mayo International School | 86%</span>
                  Completed Class X with distinction, laying foundation for technical education.
                </>
              }
            />
            <AboutCard
              date="2025"
              icon={<Briefcase className="text-accent" size={32} />}
              title="Web Developer Intern"
              description={
                <>
                  <span className="block text-accent text-lg font-semibold mb-2">DataEinstein</span>
                  - Developed and maintained responsive web apps.<br />
                  - Collaborated with design and backend teams.<br />
                  - Contributed to a communication strategy for community engagement.
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCard: React.FC<{ icon: React.ReactNode; title: string; description: React.ReactNode; date: string }> = ({ icon, title, description, date }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ x: 10 }}
    className="bg-[#1A1A1A] p-8 border border-white/5 rounded-lg hover:border-accent/50 transition-all flex items-start gap-6"
  >
    <div className="shrink-0">{icon}</div>
    <div className="w-full">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-2xl font-black">{title}</h3>
        <span className="text-lg font-medium text-[#B0B0B0]">{date}</span>
      </div>
      <div className="text-[#B0B0B0] text-lg leading-relaxed">{description}</div>
    </div>
  </motion.div>
);

export default About;
