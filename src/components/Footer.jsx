import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart } from 'react-icons/hi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="footer-logo">
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-description">
              Building digital experiences that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4>Services</h4>
            <a href="#projects">Web Development</a>
            <a href="#projects">UI/UX Design</a>
            <a href="#projects">Consulting</a>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="copyright">
            &copy; {year} Portfolio. All rights reserved.
          </p>
          <p className="made-with">
            Made with <HiHeart className="heart-icon" /> using React
          </p>
        </motion.div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 60px 0 30px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .footer-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 300px;
        }

        .footer-links h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .footer-links a {
          display: block;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--primary-light);
          transform: translateX(4px);
        }

        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .made-with {
          font-size: 0.85rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .heart-icon {
          color: var(--secondary);
          animation: heartbeat 1.5s infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;