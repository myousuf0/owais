import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';

const experiences = [
  {
    type: 'work',
    title: 'Senior Frontend Developer',
    company: 'Tech Corp Inc.',
    period: '2023 - Present',
    description: 'Led the frontend team in building scalable web applications using React and TypeScript. Implemented CI/CD pipelines and improved performance by 40%.',
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Digital Agency Co.',
    period: '2021 - 2023',
    description: 'Developed and maintained multiple client projects. Built RESTful APIs and integrated third-party services. Mentored junior developers.',
    technologies: ['Node.js', 'React', 'MongoDB', 'AWS'],
  },
  {
    type: 'work',
    title: 'Junior Developer',
    company: 'StartUp Labs',
    period: '2020 - 2021',
    description: 'Started career building responsive websites and learning modern web technologies. Contributed to open-source projects.',
    technologies: ['JavaScript', 'HTML/CSS', 'React', 'Git'],
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'University of Technology',
    period: '2016 - 2020',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and web technologies. Led the university tech club.',
    technologies: ['Data Structures', 'Algorithms', 'Web Dev', 'DBMS'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="glow glow-3" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <span className="section-tag">Experience</span>
          <h2 className="section-title">My Professional Journey</h2>
          <p className="section-subtitle">
            A timeline of my career growth and the experiences that shaped me into the developer I am today.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {exp.type === 'work' ? <HiBriefcase /> : <HiAcademicCap />}
                </div>
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience {
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
        }

        .experience-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .experience-header .section-subtitle {
          margin: 0 auto;
        }

        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gradient-1);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px 40px;
        }

        .timeline-item.left {
          left: 0;
          text-align: right;
        }

        .timeline-item.right {
          left: 50%;
          text-align: left;
        }

        .timeline-content {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 28px;
          position: relative;
          transition: var(--transition);
        }

        .timeline-content:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }

        .timeline-icon {
          position: absolute;
          top: 28px;
          width: 44px;
          height: 44px;
          background: var(--gradient-1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          z-index: 1;
        }

        .left .timeline-icon {
          right: -62px;
        }

        .right .timeline-icon {
          left: -62px;
        }

        .timeline-period {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(108, 99, 255, 0.1);
          border: 1px solid rgba(108, 99, 255, 0.2);
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--primary-light);
          margin-bottom: 12px;
        }

        .timeline-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 4px;
          color: var(--text-primary);
        }

        .timeline-company {
          font-size: 0.95rem;
          color: var(--accent);
          margin-bottom: 12px;
          font-weight: 500;
        }

        .timeline-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .timeline-tech {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .left .timeline-tech {
          justify-content: flex-end;
        }

        .tech-tag {
          padding: 4px 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            width: 100%;
            padding: 20px 20px 20px 60px;
          }

          .timeline-item.left,
          .timeline-item.right {
            left: 0;
            text-align: left;
          }

          .timeline-icon {
            left: -2px !important;
            right: auto !important;
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }

          .left .timeline-tech {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;