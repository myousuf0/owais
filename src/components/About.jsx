import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiColorSwatch, HiLightningBolt, HiDeviceMobile } from 'react-icons/hi';
import useScrollAnimation from '../hooks/useScrollAnimation';

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Done' },
  { number: '30+', label: 'Happy Clients' },
  { number: '15+', label: 'Awards Won' },
];

const features = [
  {
    icon: <HiCode />,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.',
  },
  {
    icon: <HiColorSwatch />,
    title: 'Modern Design',
    description: 'Creating visually stunning interfaces with the latest design trends and best practices.',
  },
  {
    icon: <HiLightningBolt />,
    title: 'Fast Performance',
    description: 'Optimizing for speed and efficiency to deliver blazing-fast user experiences.',
  },
  {
    icon: <HiDeviceMobile />,
    title: 'Responsive',
    description: 'Building fully responsive websites that work flawlessly across all devices.',
  },
];

const About = () => {
  const sectionRef = useScrollAnimation({ animation: 'fadeInUp' });
  const statsRef = useScrollAnimation({ animation: 'fadeInUp', delay: 200 });
  const featuresRef = useScrollAnimation({ animation: 'fadeInUp', delay: 400 });

  return (
    <section id="about" className="about section">
      <div className="glow glow-1" />
      <div className="container">
        <motion.div ref={sectionRef} className="about-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Turning Ideas Into Digital Reality</h2>
          <p className="section-subtitle">
            I'm a passionate full-stack developer with a keen eye for design. 
            I specialize in building modern web applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-text">JD</span>
              </div>
              <div className="image-decoration" />
            </div>
          </motion.div>

          <div className="about-info">
            <motion.div 
              ref={statsRef}
              className="stats-grid"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              ref={featuresRef}
              className="features-grid"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
        }

        .about-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .about-header .section-subtitle {
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .about-image-wrapper {
          position: sticky;
          top: 100px;
        }

        .about-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          max-width: 400px;
          margin: 0 auto;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: var(--gradient-1);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .placeholder-text {
          font-size: 5rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.2);
          font-family: 'Playfair Display', serif;
        }

        .image-decoration {
          position: absolute;
          inset: -10px;
          border: 2px solid var(--primary);
          border-radius: var(--radius-lg);
          opacity: 0.3;
          z-index: 0;
          animation: rotate-decoration 10s linear infinite;
        }

        @keyframes rotate-decoration {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 24px;
          text-align: center;
          transition: var(--transition);
        }

        .stat-card:hover {
          background: var(--bg-card-hover);
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .feature-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 24px;
          transition: var(--transition);
        }

        .feature-card:hover {
          background: var(--bg-card-hover);
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .feature-icon {
          font-size: 1.5rem;
          color: var(--primary-light);
          margin-bottom: 12px;
        }

        .feature-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .feature-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-image-wrapper {
            position: relative;
            top: 0;
          }

          .about-image {
            max-width: 300px;
          }
        }

        @media (max-width: 768px) {
          .stats-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;