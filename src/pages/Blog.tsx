import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { ref.current?.classList.add('visible'); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className="animate-on-scroll">{children}</div>;
}

export default function Blog() {
  const [langFilter, setLangFilter] = useState<'all' | 'en' | 'fa'>('all');
  
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Filter by language
  const filteredPosts = langFilter === 'all' 
    ? sortedPosts 
    : sortedPosts.filter(p => p.language === langFilter);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Blog</span>
            <h1>Articles & Thoughts</h1>
            <p>Writing about software engineering, web development, career growth, and the things I learn along the way.</p>
            <p style={{ marginTop: '8px', fontSize: '0.95rem' }}>
              مقالات فارسی و انگلیسی درباره مهندسی نرم‌افزار و توسعه وب
            </p>
          </AnimatedSection>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Language Filter */}
          <AnimatedSection>
            <div className="filter-buttons" role="group" aria-label="Filter by language">
              <button
                className={`filter-btn ${langFilter === 'all' ? 'active' : ''}`}
                onClick={() => setLangFilter('all')}
                aria-pressed={langFilter === 'all'}
              >
                All
              </button>
              <button
                className={`filter-btn ${langFilter === 'en' ? 'active' : ''}`}
                onClick={() => setLangFilter('en')}
                aria-pressed={langFilter === 'en'}
              >
                🇬🇧 English
              </button>
              <button
                className={`filter-btn ${langFilter === 'fa' ? 'active' : ''}`}
                onClick={() => setLangFilter('fa')}
                aria-pressed={langFilter === 'fa'}
              >
                🇮🇷 فارسی
              </button>
            </div>
          </AnimatedSection>

          <div className="blog-grid">
            {filteredPosts.map(post => {
              const isRTL = post.language === 'fa';
              return (
                <AnimatedSection key={post.slug}>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="blog-card"
                    dir={isRTL ? 'rtl' : 'ltr'}
                    lang={post.language}
                  >
                    <div className="blog-card-image" aria-hidden="true">{post.emoji}</div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="badge" style={{ 
                          background: isRTL ? '#fef3c7' : '#dbeafe', 
                          color: isRTL ? '#92400e' : '#1d4ed8',
                          fontSize: '0.7rem',
                          padding: '2px 8px'
                        }}>
                          {isRTL ? 'فارسی' : 'EN'}
                        </span>
                        <span>
                          {isRTL 
                            ? new Date(post.date).toLocaleDateString('fa-IR', { month: 'short', day: 'numeric', year: 'numeric' })
                            : new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                          }
                        </span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="blog-card-title" style={isRTL ? { fontFamily: "'Vazirmatn', sans-serif" } : {}}>
                        {post.title}
                      </h3>
                      <p className="blog-card-excerpt" style={isRTL ? { fontFamily: "'Vazirmatn', sans-serif" } : {}}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                        {post.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <p>No posts found in this language.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
