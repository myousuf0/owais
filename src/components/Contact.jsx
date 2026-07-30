import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact section">
      <div className="glow glow-1" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-info-card">
              <div className="contact-icon">
                <HiMail />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:hello@johndoe.com">hello@johndoe.com</a>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <HiPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <HiLocationMarker />
              </div>
              <div>
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <HiPaperAirplane className="btn-icon" />
            </motion.button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact {
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-header .section-subtitle {
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px 24px;
          transition: var(--transition);
        }

        .contact-info-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-sm);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: rgba(108, 99, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: var(--primary-light);
          flex-shrink: 0;
        }

        .contact-info-card h4 {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .contact-info-card a,
        .contact-info-card p {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .contact-info-card a:hover {
          color: var(--primary-light);
        }

        .contact-socials {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px 24px;
        }

        .contact-socials h4 {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-links .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-secondary);
          font-size: 1.1rem;
          transition: var(--transition);
        }

        .social-links .social-link:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
          transform: translateY(-3px);
        }

        .contact-form {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 40px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: inherit;
          transition: var(--transition);
          outline: none;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-muted);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: var(--gradient-1);
          color: white;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          transition: var(--transition);
          width: 100%;
          justify-content: center;
        }

        .submit-btn:hover {
          box-shadow: var(--shadow-lg);
        }

        .submit-btn .btn-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;