import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { aboutStory, education, experience, skills, siteConfig } from '../data';

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { ref.current?.classList.add('visible'); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">About</span>
            <h1>The Story Behind the Code</h1>
            <p>From Business Administration to Software Engineering — a journey of passion, persistence, and purpose.</p>
          </AnimatedSection>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-grid">
            <AnimatedSection>
              <div className="about-text">
                {aboutStory.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>My Values</h3>
                <ul style={{ paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '12px', color: 'var(--text-secondary)', listStyle: 'disc' }}>
                    <strong>Craftsmanship:</strong> I believe in writing clean, maintainable code that stands the test of time.
                  </li>
                  <li style={{ marginBottom: '12px', color: 'var(--text-secondary)', listStyle: 'disc' }}>
                    <strong>Accessibility:</strong> The web should be usable by everyone, regardless of ability.
                  </li>
                  <li style={{ marginBottom: '12px', color: 'var(--text-secondary)', listStyle: 'disc' }}>
                    <strong>Performance:</strong> Every millisecond matters. Fast experiences are good experiences.
                  </li>
                  <li style={{ marginBottom: '12px', color: 'var(--text-secondary)', listStyle: 'disc' }}>
                    <strong>Continuous Learning:</strong> Technology evolves rapidly, and I'm committed to growing with it.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <div className="about-card" style={{ marginBottom: '24px' }}>
                  <h3>Education</h3>
                  <div className="about-card-item">
                    <span className="about-card-label">Degree</span>
                    <span className="about-card-value">{education.degree}</span>
                  </div>
                  <div className="about-card-item">
                    <span className="about-card-label">University</span>
                    <span className="about-card-value">{education.university}</span>
                  </div>
                  <div className="about-card-item">
                    <span className="about-card-label">Period</span>
                    <span className="about-card-value">{education.period}</span>
                  </div>
                  <div className="about-card-item">
                    <span className="about-card-label">Focus Areas</span>
                    <span className="about-card-value">{education.focus}</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="about-card">
                  <h3>Connect</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                    <a href={siteConfig.github} className="social-pill" target="_blank" rel="noopener noreferrer" style={{ justifyContent: 'center' }}>
                      <span aria-hidden="true">⚡</span> GitHub
                    </a>
                    <a href={siteConfig.linkedin} className="social-pill" target="_blank" rel="noopener noreferrer" style={{ justifyContent: 'center' }}>
                      <span aria-hidden="true">💼</span> LinkedIn
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="social-pill" style={{ justifyContent: 'center' }}>
                      <span aria-hidden="true">✉️</span> Email
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Experience</span>
            <h2 className="section-title">What I've done</h2>
          </AnimatedSection>
          <div className="experience-grid" style={{ marginTop: '40px' }}>
            {experience.map((exp, i) => (
              <AnimatedSection key={i}>
                <div className="experience-card">
                  <div className="experience-card-icon" aria-hidden="true">{exp.icon}</div>
                  <h3 className="experience-card-title">{exp.title}</h3>
                  <div className="experience-card-subtitle">{exp.organization}</div>
                  <div className="experience-card-period">{exp.period}</div>
                  <p className="experience-card-desc">{exp.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Skills</span>
            <h2 className="section-title">Technologies & Tools</h2>
          </AnimatedSection>
          <div className="skills-grid" style={{ marginTop: '40px' }} role="list">
            {skills.map(skill => (
              <span key={skill} className="skill-pill" role="listitem">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 className="section-title">Want to work together?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <Link to="/contact" className="btn btn-primary">Get in Touch →</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
