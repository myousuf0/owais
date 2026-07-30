import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Working with John was an absolute pleasure. He delivered our project ahead of schedule and exceeded all expectations. His attention to detail and technical expertise are outstanding.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Digital Solutions',
    content: 'John is one of the most talented developers I have ever worked with. His ability to solve complex problems and create elegant solutions is truly remarkable. Highly recommended!',
    rating: 5,
    initials: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, WebFlow',
    content: 'The website John built for us transformed our online presence. Our traffic increased by 200% and user engagement improved significantly. He is a true professional.',
    rating: 5,
    initials: 'ER',
  },
  {
    name: 'David Kim',
    role: 'Founder, StartupHub',
    content: 'Exceptional work! John understood our vision perfectly and brought it to life with stunning design and flawless functionality. He is our go-to developer for all future projects.',
    rating: 5,
    initials: 'DK',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="glow glow-2" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="testimonials-header"
        >
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Feedback from clients and colleagues I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="testimonials-carousel">
          <div className="testimonial-card-wrapper">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="testimonial-card"
              >
                <div className="testimonial-avatar">
                  <span className="avatar-text">{testimonials[current].initials}</span>
                </div>
                <div className="testimonial-stars">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <HiStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonials[current].content}"</p>
                <h4 className="testimonial-name">{testimonials[current].name}</h4>
                <span className="testimonial-role">{testimonials[current].role}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="carousel-controls">
            <motion.button
              className="carousel-btn"
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronLeft />
            </motion.button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === current ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                />
              ))}
            </div>
            <motion.button
              className="carousel-btn"
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronRight />
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials {
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .testimonials-header .section-subtitle {
          margin: 0 auto;
        }

        .testimonials-carousel {
          max-width: 700px;
          margin: 0 auto;
        }

        .testimonial-card-wrapper {
          min-height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonial-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 48px 40px;
          text-align: center;
          width: 100%;
          transition: var(--transition);
        }

        .testimonial-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .testimonial-avatar {
          width: 80px;
          height: 80px;
          background: var(--gradient-1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .avatar-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .testimonial-stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 20px;
        }

        .star-icon {
          color: #ffc107;
          font-size: 1.2rem;
        }

        .testimonial-content {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 24px;
          font-style: italic;
        }

        .testimonial-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .testimonial-role {
          font-size: 0.9rem;
          color: var(--primary-light);
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 32px;
        }

        .carousel-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          color: var(--text-primary);
          font-size: 1.2rem;
          transition: var(--transition);
        }

        .carousel-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        .carousel-dots {
          display: flex;
          gap: 8px;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          background: var(--text-muted);
          border-radius: 50%;
          transition: var(--transition);
          padding: 0;
        }

        .carousel-dot.active {
          background: var(--primary);
          width: 30px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 32px 24px;
          }

          .testimonial-content {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;