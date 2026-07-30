import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create particles
    const particlesContainer = particlesRef.current;
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particlesContainer.appendChild(particle);
      }
    }

    // Typing animation
    const text = textRef.current;
    if (text) {
      const words = ['Web Developer', 'UI/UX Designer', 'Creative Thinker', 'Problem Solver'];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
          text.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        } else {
          text.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }

        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500);
          return;
        }

        setTimeout(type, isDeleting ? 50 : 100);
      }

      type();
    }

    // Floating shapes animation
    anime({
      targets: '.float-shape',
      translateY: [
        { value: -20, duration: 2000 },
        { value: 0, duration: 2000 },
      ],
      rotate: [
        { value: 10, duration: 3000 },
        { value: -10, duration: 3000 },
      ],
      loop: true,
      easing: 'easeInOutQuad',
      delay: anime.stagger(500),
    });
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-particles" ref={particlesRef} />
      
      <div className="hero-bg-shapes">
        <div className="float-shape shape-1" />
        <div className="float-shape shape-2" />
        <div className="float-shape shape-3" />
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-badge"
        >
          <span className="badge-dot" />
          Available for work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-title"
        >
          Hi, I'm{' '}
          <span className="gradient-text">John Doe</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hero-subtitle"
        >
          <span className="subtitle-prefix">I'm a </span>
          <span className="typing-text" ref={textRef} />
          <span className="typing-cursor">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hero-description"
        >
          I craft exceptional digital experiences with clean code and creative design.
          Let's build something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="hero-actions"
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
            <HiArrowDown className="btn-icon" />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <HiDownload className="btn-icon" />
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="hero-socials"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FiLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FiTwitter />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span>Scroll Down</span>
      </motion.div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 24px 60px;
        }

        .hero-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-particle {
          position: absolute;
          background: var(--primary-light);
          border-radius: 50%;
          opacity: 0.2;
          animation: float-particle 15s infinite;
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          25% {
            transform: translate(100px, -100px) scale(1.5);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50px, -200px) scale(0.8);
            opacity: 0.1;
          }
          75% {
            transform: translate(80px, -50px) scale(1.2);
            opacity: 0.3;
          }
        }

        .hero-bg-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .float-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: var(--gradient-1);
          top: 10%;
          left: -100px;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          background: var(--gradient-2);
          bottom: 20%;
          right: -50px;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          background: var(--gradient-3);
          top: 50%;
          left: 60%;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(108, 99, 255, 0.1);
          border: 1px solid rgba(108, 99, 255, 0.2);
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--primary-light);
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          min-height: 2rem;
        }

        .subtitle-prefix {
          color: var(--text-muted);
        }

        .typing-text {
          color: var(--accent);
          font-weight: 600;
        }

        .typing-cursor {
          color: var(--primary);
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .btn-primary {
          background: var(--gradient-1);
          color: white;
          box-shadow: var(--shadow-md);
        }

        .btn-primary:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: var(--text-primary);
          border: 2px solid var(--border-color);
        }

        .btn-outline:hover {
          border-color: var(--primary);
          background: rgba(108, 99, 255, 0.1);
        }

        .btn-icon {
          font-size: 1.1rem;
        }

        .hero-socials {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-card);
          color: var(--text-secondary);
          font-size: 1.2rem;
          transition: var(--transition);
          border: 1px solid var(--border-color);
        }

        .social-link:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .scroll-mouse {
          width: 24px;
          height: 38px;
          border: 2px solid var(--text-muted);
          border-radius: 12px;
          position: relative;
        }

        .scroll-dot {
          width: 4px;
          height: 8px;
          background: var(--primary);
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll-dot 2s infinite;
        }

        @keyframes scroll-dot {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .btn {
            padding: 14px 24px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;