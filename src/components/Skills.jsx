import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiTailwindcss, SiNodedotjs, SiPython, SiDocker,
  SiFigma, SiGit, SiMongodb, SiPostgresql,
  SiGraphql, SiFirebase, SiCloudflare, SiRedux
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact />, level: 95 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 88 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 92 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
      { name: 'Redux', icon: <SiRedux />, level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 88 },
      { name: 'Python', icon: <SiPython />, level: 82 },
      { name: 'GraphQL', icon: <SiGraphql />, level: 80 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 83 },
      { name: 'Firebase', icon: <SiFirebase />, level: 78 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Docker', icon: <SiDocker />, level: 75 },
      { name: 'Git', icon: <SiGit />, level: 90 },
      { name: 'Figma', icon: <SiFigma />, level: 80 },
      { name: 'Cloud', icon: <SiCloudflare />, level: 72 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="glow glow-2" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">Technologies & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit I've developed over years of hands-on experience
            building modern web applications.
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.2) + (skillIndex * 0.05) }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (catIndex * 0.2) + (skillIndex * 0.05) + 0.3 }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills {
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .skills-header .section-subtitle {
          margin: 0 auto;
        }

        .skills-content {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .skill-category {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 40px;
          transition: var(--transition);
        }

        .skill-category:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .category-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--text-primary);
          position: relative;
          padding-left: 20px;
        }

        .category-title::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 4px;
          height: 24px;
          background: var(--gradient-1);
          border-radius: 2px;
          transform: translateY(-50%);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 16px;
        }

        .skill-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px;
          text-align: center;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-1);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .skill-card:hover::before {
          transform: scaleX(1);
        }

        .skill-card:hover {
          background: var(--bg-card-hover);
          border-color: var(--primary);
          box-shadow: var(--shadow-sm);
        }

        .skill-icon {
          font-size: 2rem;
          margin-bottom: 12px;
          color: var(--primary-light);
        }

        .skill-name {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .skill-bar {
          width: 100%;
          height: 6px;
          background: var(--bg-primary);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .skill-progress {
          height: 100%;
          background: var(--gradient-1);
          border-radius: 3px;
        }

        .skill-level {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-light);
        }

        @media (max-width: 768px) {
          .skill-category {
            padding: 24px;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;