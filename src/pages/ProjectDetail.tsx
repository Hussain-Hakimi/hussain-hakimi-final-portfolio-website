import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="not-found"><div className="not-found-code">404</div><h2>Project Not Found</h2><p>The project you're looking for doesn't exist.</p><Link to="/projects" className="btn btn-primary">Back to Projects</Link></div>;
  }

  return <div className="project-detail"><Link to="/projects" className="blog-post-back">← Back to Projects</Link><div className="project-detail-hero" aria-hidden="true">{project.emoji}</div><div className="project-detail-meta"><span className={`badge badge-${project.category}`}>{project.category}</span><span className="tag">{project.year}</span></div><h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-1px' }}>{project.title}</h1><div className="project-detail-content"><h2>Overview</h2><p>{project.description}</p><h2>My Role</h2><p>{project.role}</p><h2>Challenge</h2><p>{project.challenge}</p><h2>Solution</h2><p>{project.solution}</p><h2>Tech Stack</h2><div className="modal-tags" style={{ marginBottom: '32px' }}>{project.tech.map(t => <span key={t} className="tag">{t}</span>)}</div><div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>{project.liveUrl && <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo →</a>}{project.repoUrl && <a href={project.repoUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>}</div></div></div>;
}
