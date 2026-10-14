import { ArrowLeft, BookOpen, Code2, FileText, PlayCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { learningResources } from '../data/resources';
import NotFound from './NotFound';

export default function ResourceDetail() {
  const { slug } = useParams();
  const resource = learningResources.find((item) => item.slug === slug);

  if (!resource) return <NotFound />;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link className="resource-back-link" to="/resources"><ArrowLeft size={16} /> All resources</Link>
          <span className="section-label">{resource.category} · {resource.level}</span>
          <h1>{resource.title}</h1>
          <p>{resource.summary}</p>
          <span className={`resource-status resource-status-${resource.status}`}>
            {resource.status === 'published' ? 'Published lesson' : 'Lesson structure · Coming soon'}
          </span>
        </div>
      </section>

      <section className="section resource-detail-section">
        <div className="container resource-detail-layout">
          <main className="resource-detail-main">
            <section className="resource-content-panel">
              <div className="resource-panel-heading"><PlayCircle size={20} /><h2>Video lesson</h2></div>
              {resource.videoUrl ? <a className="resource-card-link" href={resource.videoUrl} target="_blank" rel="noreferrer">Watch video lesson</a> : <p>Video content will be added here when the lesson is published.</p>}
            </section>
            <section className="resource-content-panel">
              <div className="resource-panel-heading"><FileText size={20} /><h2>Lesson notes</h2></div>
              {resource.notesUrl ? <a className="resource-card-link" href={resource.notesUrl} target="_blank" rel="noreferrer">Open lesson notes / PDF</a> : <p>Clear explanations, examples, and key takeaways will be added here.</p>}
            </section>
            <section className="resource-content-panel">
              <div className="resource-panel-heading"><Code2 size={20} /><h2>Code and exercises</h2></div>
              {resource.codeUrl ? <a className="resource-card-link" href={resource.codeUrl} target="_blank" rel="noreferrer">View code and exercises</a> : <p>Code samples and practice exercises will be linked here after they are prepared.</p>}
            </section>
          </main>
          <aside className="resource-detail-sidebar">
            <div className="resource-content-panel">
              <div className="resource-panel-heading"><BookOpen size={20} /><h2>Lesson materials</h2></div>
              <ul>
                <li>Video: {resource.videoUrl ? <a href={resource.videoUrl} target="_blank" rel="noreferrer">available</a> : "not published yet"}</li>
                <li>PDF notes: {resource.notesUrl ? <a href={resource.notesUrl} target="_blank" rel="noreferrer">available</a> : "not available yet"}</li>
                <li>Source code: {resource.codeUrl ? <a href={resource.codeUrl} target="_blank" rel="noreferrer">available</a> : "not available yet"}</li>
              </ul>
              <p className="resource-sidebar-note">Only links added to the resource data are shown here. Unpublished materials remain clearly marked.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
