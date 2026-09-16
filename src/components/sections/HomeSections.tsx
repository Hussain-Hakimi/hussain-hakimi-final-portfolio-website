import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, projects, blogPosts, skills, experience, education } from '../../data';

function useTypewriter(text: string, speed = 80) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; }
      else { setDone(true); clearInterval(timer); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return { displayed, done };
}

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { ref.current?.classList.add('visible'); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>;
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0]; const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal" ref={modalRef} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{project.title}</h3>
          <button className="modal-close" onClick={onClose} ref={closeRef} aria-label="Close modal">✕</button>
        </div>
        <div className="modal-body">
          <img className="modal-project-image" src={project.image} alt={`${project.title} screenshot`} />
          <div className="modal-section"><div className="modal-section-title">Category & Year</div><div className="modal-section-content">{project.category.charAt(0).toUpperCase() + project.category.slice(1)} · {project.year}</div></div>
          <div className="modal-section"><div className="modal-section-title">Overview</div><div className="modal-section-content">{project.description}</div></div>
          <div className="modal-section"><div className="modal-section-title">My Role</div><div className="modal-section-content">{project.role}</div></div>
          <div className="modal-section"><div className="modal-section-title">Challenge & Solution</div><div className="modal-section-content"><strong>Challenge:</strong> {project.challenge}<br /><br /><strong>Solution:</strong> {project.solution}</div></div>
          <div className="modal-section"><div className="modal-section-title">Tech Stack</div><div className="modal-tags">{project.tech.map(t => <span key={t} className="tag">{t}</span>)}</div></div>
          <div className="modal-links">
            {project.liveUrl && <a href={project.liveUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Live Demo →</a>}
            {project.repoUrl && <a href={project.repoUrl} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { displayed, done } = useTypewriter("Hi, I'm Hussain Hakimi", 70);
  return (
    <section className="hero" aria-label="Introduction">
      <div className="container"><div className="hero-grid"><div>
        <div className="hero-status"><span className="hero-status-dot" aria-hidden="true"></span>Available for internships</div>
        <h1 className="hero-title">{displayed}<span className="typewriter-cursor" style={{ opacity: done ? 1 : 1 }} aria-hidden="true"></span></h1>
        <p className="hero-subtitle">Software Engineering student at UET Lahore, passionate about frontend development, database design, and data analytics. I build beautiful, performant web experiences.</p>
        <div className="hero-ctas"><Link to="/contact" className="btn btn-primary">Get in Touch →</Link><a href={siteConfig.resume} className="btn btn-secondary" download>Download Resume</a></div>
        <div className="hero-stats" role="list"><div className="hero-stat" role="listitem"><div className="hero-stat-value">3</div><div className="hero-stat-label">Featured Projects</div></div><div className="hero-stat" role="listitem"><div className="hero-stat-value">6+</div><div className="hero-stat-label">Core Languages</div></div><div className="hero-stat" role="listitem"><div className="hero-stat-value">2025–29</div><div className="hero-stat-label">Study Track</div></div></div>
      </div><div className="hero-image-wrapper"><div><div className="hero-image-ring"><img className="hero-image" src="/images/Hussain%20Hakimi%20profl%20picture.JPG" alt="Hussain Hakimi" /></div><div className="hero-social-links"><a href={siteConfig.github} className="social-pill" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><span aria-hidden="true">⚡</span> GitHub</a><a href={siteConfig.linkedin} className="social-pill" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><span aria-hidden="true">💼</span> LinkedIn</a></div></div></div></div></div>
    </section>
  );
}

export function AboutSection() {
  return <section className="section section-alt" aria-labelledby="about-heading"><div className="container"><AnimatedSection><span className="section-label">About me</span><h2 id="about-heading" className="section-title">From Business to Building Software</h2></AnimatedSection><div className="about-grid" style={{ marginTop: '40px' }}><AnimatedSection><div className="about-text"><p>I'm Hussain Hakimi, a Software Engineering student at UET Lahore with a unique background. I started my academic journey in Business Administration, but a chance encounter with web development changed my trajectory forever.</p><p>What began as curiosity quickly became passion. I spent countless nights building projects, learning new technologies, and immersing myself in the developer community. The ability to create something from nothing — just logic and creativity — captivated me.</p><p>Today, I focus on frontend development, database design, and data analytics. I believe in building software that is not just functional, but beautiful and accessible to everyone.</p></div></AnimatedSection><AnimatedSection><div className="about-card"><h3>Quick Overview</h3><div className="about-card-item"><span className="about-card-label">Degree</span><span className="about-card-value">{education.degree}</span></div><div className="about-card-item"><span className="about-card-label">University</span><span className="about-card-value">UET Lahore</span></div><div className="about-card-item"><span className="about-card-label">Timeline</span><span className="about-card-value">{education.period}</span></div><div className="about-card-item"><span className="about-card-label">Focus</span><span className="about-card-value">{education.focus}</span></div></div></AnimatedSection></div></div></section>;
}

export function ProjectsSection({ showAll = false }: { showAll?: boolean }) {
  const [filter, setFilter] = useState('all');
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null);
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const displayProjects = showAll ? filtered : filtered.slice(0, 3);
  return <section className="section" aria-labelledby="projects-heading"><div className="container"><AnimatedSection><span className="section-label">Portfolio</span><h2 id="projects-heading" className="section-title">Featured projects</h2><p className="section-subtitle">A selection of projects that showcase my skills in frontend development and data analytics.</p></AnimatedSection><AnimatedSection><div className="filter-buttons" style={{ marginTop: '32px' }} role="group" aria-label="Filter projects">{['all', 'frontend', 'analytics'].map(cat => <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)} aria-pressed={filter === cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>)}</div></AnimatedSection><div className="projects-grid">{displayProjects.map(project => <AnimatedSection key={project.slug}><article className="project-card"><div className="project-card-image"><img src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" /></div><div className="project-card-body"><div className="project-card-badges">{project.liveUrl && <span className="badge badge-live">● Live</span>}<span className="badge badge-category">{project.category}</span></div><h3 className="project-card-title">{project.title}</h3><p className="project-card-desc">{project.description}</p><div className="project-card-tags">{project.tech.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}</div><div className="project-card-divider"></div><div className="project-card-actions">{project.liveUrl && <a href={project.liveUrl} className="project-card-primary-action" target="_blank" rel="noopener noreferrer">Live Demo →</a>}<div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>{project.repoUrl && <a href={project.repoUrl} className="project-card-secondary-action" target="_blank" rel="noopener noreferrer">GitHub</a>}<button className="project-card-case-study-btn" onClick={() => setModalProject(project)}>📖 Case</button></div></div></div></article></AnimatedSection>)}</div>{!showAll && <AnimatedSection><div style={{ textAlign: 'center', marginTop: '40px' }}><Link to="/projects" className="btn btn-secondary">View All Projects →</Link></div></AnimatedSection>}</div>{modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}</section>;
}

export function ExperienceSection() {
  return <section className="section section-alt" aria-labelledby="experience-heading"><div className="container"><AnimatedSection><span className="section-label">Experience</span><h2 id="experience-heading" className="section-title">Where I've been</h2></AnimatedSection><div className="experience-grid" style={{ marginTop: '40px' }}>{experience.map((exp, i) => <AnimatedSection key={`${exp.title}-${exp.organization}-${i}`}><div className="experience-card"><div className="experience-card-icon" aria-hidden="true">{exp.icon}</div><h3 className="experience-card-title">{exp.title}</h3><div className="experience-card-subtitle">{exp.organization}</div><div className="experience-card-period">{exp.period}</div><p className="experience-card-desc">{exp.description}</p></div></AnimatedSection>)}</div></div></section>;
}

export function SkillsSection() {
  return <section className="section" aria-labelledby="skills-heading"><div className="container"><AnimatedSection><span className="section-label">Skills</span><h2 id="skills-heading" className="section-title">Technologies I work with</h2><p className="section-subtitle">Tools and technologies I use to bring ideas to life.</p></AnimatedSection><AnimatedSection><div className="skills-grid" style={{ marginTop: '40px' }} role="list">{skills.map(skill => <span key={skill} className="skill-pill" role="listitem">{skill}</span>)}</div></AnimatedSection></div></section>;
}

export function BlogPreviewSection() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return <section className="section section-alt" aria-labelledby="blog-heading"><div className="container"><AnimatedSection><span className="section-label">Blog</span><h2 id="blog-heading" className="section-title">Latest articles</h2><p className="section-subtitle">Thoughts on software engineering, career growth, and web development. Also available in Persian.</p></AnimatedSection><div className="blog-grid" style={{ marginTop: '40px' }}>{sortedPosts.slice(0, 3).map(post => { const isRTL = post.language === 'fa'; return <AnimatedSection key={post.slug}><Link to={`/blog/${post.slug}`} className="blog-card" dir={isRTL ? 'rtl' : 'ltr'} lang={post.language}><div className="blog-card-image" aria-hidden="true">{post.emoji}</div><div className="blog-card-body"><div className="blog-card-meta"><span className="badge" style={{ background: isRTL ? '#fef3c7' : '#dbeafe', color: isRTL ? '#92400e' : '#1d4ed8', fontSize: '0.7rem', padding: '2px 8px' }}>{isRTL ? 'فارسی' : 'EN'}</span><span>{isRTL ? new Date(post.date).toLocaleDateString('fa-IR', { month: 'short', day: 'numeric', year: 'numeric' }) : new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span><span>·</span><span>{post.readTime}</span></div><h3 className="blog-card-title" style={isRTL ? { fontFamily: "'Vazirmatn', sans-serif" } : {}}>{post.title}</h3><p className="blog-card-excerpt" style={isRTL ? { fontFamily: "'Vazirmatn', sans-serif" } : {}}>{post.excerpt}</p></div></Link></AnimatedSection>; })}</div><AnimatedSection><div style={{ textAlign: 'center', marginTop: '40px' }}><Link to="/blog" className="btn btn-secondary">View All Posts →</Link></div></AnimatedSection></div></section>;
}

export function ContactSection() {
  return <section className="section" aria-labelledby="contact-heading"><div className="container"><AnimatedSection><div className="contact-section"><span className="section-label">Contact</span><h2 id="contact-heading" className="contact-title">Let's build something together</h2><p className="contact-subtitle">Have a project in mind or want to chat? I'd love to hear from you.</p><div className="hero-ctas"><Link to="/contact" className="btn btn-primary">Open Contact Form →</Link>{siteConfig.email && <a href={`mailto:${siteConfig.email}`} className="btn btn-secondary">Email Me</a>}</div></div></AnimatedSection></div></section>;
}

export default function Home() {
  return <><HeroSection /><AboutSection /><ProjectsSection /><ExperienceSection /><SkillsSection /><BlogPreviewSection /><ContactSection /></>;
}
