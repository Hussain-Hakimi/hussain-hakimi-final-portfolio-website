import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { ref.current?.classList.add('visible'); return; }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className="animate-on-scroll">{children}</div>;
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
        const focusable = modalRef.current.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])');
        const first = focusable[0]; const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = ''; };
  }, [onClose]);
  return <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}><div className="modal" ref={modalRef} onClick={e => e.stopPropagation()}><div className="modal-header"><h3 className="modal-title">{project.title}</h3><button className="modal-close" onClick={onClose} ref={closeRef} aria-label="Close modal">✕</button></div><div className="modal-body"><img className="modal-project-image" src={project.image} alt={`${project.title} screenshot`} /><div className="modal-section"><div className="modal-section-title">Category & Year</div><div className="modal-section-content">{project.category.charAt(0).toUpperCase() + project.category.slice(1)} · {project.year}</div></div><div className="modal-section"><div className="modal-section-title">Overview</div><div className="modal-section-content">{project.description}</div></div><div className="modal-section"><div className="modal-section-title">My Role</div><div className="modal-section-content">{project.role}</div></div><div className="modal-section"><div className="modal-section-title">Challenge & Solution</div><div className="modal-section-content"><strong>Challenge:</strong> {project.challenge}<br /><br /><strong>Solution:</strong> {project.solution}</div></div><div className="modal-section"><div className="modal-section-title">Tech Stack</div><div className="modal-tags">{project.tech.map(t => <span key={t} className="tag">{t}</span>)}</div></div><div className="modal-links">{project.liveUrl && <a href={project.liveUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Live Demo →</a>}{project.repoUrl && <a href={project.repoUrl} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>}</div></div></div></div>;
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null);
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  return <><div className="page-hero"><div className="container"><AnimatedSection><span className="section-label">Portfolio</span><h1>My Projects</h1><p>A collection of work that demonstrates my skills in frontend development, data analytics, and creative problem-solving.</p></AnimatedSection></div></div><section className="section" style={{ paddingTop: 0 }}><div className="container"><AnimatedSection><p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>Interested in how I built these? Read my <Link to="/blog" style={{ color: 'var(--accent)', fontWeight: 600 }}>development tutorials</Link> or <Link to="/about" style={{ color: 'var(--accent)', fontWeight: 600 }}>learn more about me</Link>.</p><div className="filter-buttons" role="group" aria-label="Filter projects">{['all', 'frontend', 'analytics'].map(cat => <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)} aria-pressed={filter === cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>)}</div></AnimatedSection><div className="projects-grid">{filtered.map(project => <AnimatedSection key={project.slug}><article className="project-card"><div className="project-card-image"><img src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" /></div><div className="project-card-body"><div className="project-card-badges">{project.liveUrl && <span className="badge badge-live">● Live</span>}<span className="badge badge-category">{project.category}</span></div><h3 className="project-card-title">{project.title}</h3><p className="project-card-desc">{project.description}</p><div className="project-card-tags">{project.tech.map(t => <span key={t} className="tag">{t}</span>)}</div><div className="project-card-divider"></div><div className="project-card-actions">{project.liveUrl && <a href={project.liveUrl} className="project-card-primary-action" target="_blank" rel="noopener noreferrer">Live Demo →</a>}<div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>{project.repoUrl && <a href={project.repoUrl} className="project-card-secondary-action" target="_blank" rel="noopener noreferrer">GitHub</a>}<button className="project-card-case-study-btn" onClick={() => setModalProject(project)}>📖 Case</button></div></div></div></article></AnimatedSection>)}</div>{filtered.length === 0 && <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}><p>No projects found in this category.</p></div>}</div></section>{modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}</>;
}
