import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'fullstack',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: null,
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#6c63ff',
  },
  {
    title: 'AI Chat Application',
    category: 'ai',
    description: 'Real-time chat application powered by AI with natural language processing, sentiment analysis, and smart replies.',
    image: null,
    tech: ['Next.js', 'Python', 'OpenAI', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#ff6584',
  },
  {
    title: 'Task Management Dashboard',
    category: 'fullstack',
    description: 'Collaborative project management tool with Kanban boards, time tracking, and team analytics.',
    image: null,
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#00d9a6',
  },
  {
    title: 'Social Media Analytics',
    category: 'data',
    description: 'Comprehensive analytics dashboard for social media metrics with beautiful data visualizations and reports.',
    image: null,
    tech: ['Vue.js', 'D3.js', 'Python', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#ffa36c',
  },
  {
    title: 'Fitness Tracking App',
    category: 'mobile',
    description: 'Cross-platform fitness application with workout tracking, nutrition planning, and progress analytics.',
    image: null,
    tech: ['React Native', 'Firebase', 'GraphQL', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#6c63ff',
  },
  {
    title: 'Portfolio Generator',
    category: 'tool',
    description: 'Dynamic portfolio generator that creates beautiful, customizable portfolios from a simple JSON config.',
    image: null,
    tech: ['Next.js', 'Tailwind CSS', 'MDX', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#ff6584',
  },
];

const categories = ['all', 'fullstack', 'ai', 'data', 'mobile', 'tool'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects section">
      <div className="glow glow-1" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work, demonstrating my skills across various technologies and domains.
          </p>
        </motion.div>

        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="project-card"
                whileHover={{ y: -8 }}
              >
                <div className="project-image" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}>
                  <div className="project-placeholder">
                    <span className="project-initials">
                      {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div className="project-overlay">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <HiExternalLink />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub />
                    </motion.a>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .projects {
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .projects-header .section-subtitle {
          margin: 0 auto;
        }

        .projects-filter {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition);
        }

        .filter-btn:hover {
          border-color: var(--primary);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--gradient-1);
          color: white;
          border-color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition);
        }

        .project-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .project-image {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .project-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-initials {
          font-size: 3rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.15);
          font-family: 'Playfair Display', serif;
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 26, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          opacity: 0;
          transition: var(--transition);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--primary);
          border-radius: 50%;
          color: white;
          font-size: 1.2rem;
          transition: var(--transition);
        }

        .project-link:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }

        .project-info {
          padding: 24px;
        }

        .project-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .project-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .project-tech {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .project-tech-tag {
          padding: 4px 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 0.75rem;
          color: var(--primary-light);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;