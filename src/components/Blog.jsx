import React from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiClock, HiArrowRight } from 'react-icons/hi';

const blogPosts = [
  {
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn the best practices for structuring large-scale React applications using TypeScript, including design patterns and state management strategies.',
    date: 'Mar 15, 2026',
    readTime: '8 min read',
    category: 'Development',
    tags: ['React', 'TypeScript', 'Architecture'],
    color: '#6c63ff',
  },
  {
    title: 'The Future of Web Animation: A Deep Dive',
    excerpt: 'Exploring modern web animation techniques using Framer Motion, GSAP, and CSS animations to create engaging user experiences.',
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    category: 'Design',
    tags: ['Animation', 'Framer Motion', 'CSS'],
    color: '#ff6584',
  },
  {
    title: 'Optimizing Web Performance: A Complete Guide',
    excerpt: 'Comprehensive guide to web performance optimization covering lazy loading, code splitting, caching strategies, and Core Web Vitals.',
    date: 'Feb 10, 2026',
    readTime: '10 min read',
    category: 'Performance',
    tags: ['Performance', 'Optimization', 'Best Practices'],
    color: '#00d9a6',
  },
  {
    title: 'Mastering CSS Grid and Flexbox',
    excerpt: 'A practical guide to modern CSS layout techniques, comparing Grid and Flexbox with real-world examples and common patterns.',
    date: 'Jan 25, 2026',
    readTime: '7 min read',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Flexbox'],
    color: '#ffa36c',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog section">
      <div className="glow glow-2" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="blog-header"
        >
          <span className="section-tag">Latest Articles</span>
          <h2 className="section-title">Insights & Tutorials</h2>
          <p className="section-subtitle">
            Sharing knowledge and experiences through writing about web development, design, and technology.
          </p>
        </motion.div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="blog-card-header" style={{ background: `linear-gradient(135deg, ${post.color}15, ${post.color}30)` }}>
                <span className="blog-category" style={{ background: post.color, color: '#fff' }}>
                  {post.category}
                </span>
              </div>
              <div className="blog-card-body">
                <div className="blog-meta">
                  <span className="blog-date">
                    <HiCalendar /> {post.date}
                  </span>
                  <span className="blog-read-time">
                    <HiClock /> {post.readTime}
                  </span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <motion.a
                  href="#"
                  className="blog-read-more"
                  whileHover={{ x: 4 }}
                  onClick={(e) => e.preventDefault()}
                >
                  Read Article <HiArrowRight />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .blog {
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .blog-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .blog-header .section-subtitle {
          margin: 0 auto;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .blog-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition);
        }

        .blog-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .blog-card-header {
          padding: 40px 24px 24px;
          position: relative;
          min-height: 120px;
        }

        .blog-category {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .blog-card-body {
          padding: 24px;
        }

        .blog-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 12px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .blog-date,
        .blog-read-time {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .blog-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .blog-excerpt {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .blog-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .blog-tag {
          padding: 4px 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .blog-read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary-light);
          transition: var(--transition);
        }

        .blog-read-more:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;