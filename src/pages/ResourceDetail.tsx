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
              <p>Video content will be added here when the lesson is published.</p>
            </section>
            <section className="resource-content-panel">
              <div className="resource-panel-heading"><FileText size={20} /><h2>Lesson notes</h2></div>
              <p>Clear explanations, examples, and key takeaways will be added here.</p>
            </section>
            <section className="resource-content-panel">
              <div className="resource-panel-heading"><Code2 size={20} /><h2>Code and exercises</h2></div>
              <p>Code samples and practice exercises will be linked here after they are prepared.</p>
            </section>
          </main>
          <aside className="resource-detail-sidebar">
            <div className="resource-content-panel">
              <div className="resource-panel-heading"><BookOpen size={20} /><h2>Lesson materials</h2></div>
              <ul>
                <li>Video: not published yet</li>
                <li>PDF notes: not available yet</li>
                <li>Source code: not available yet</li>
              </ul>
              <p className="resource-sidebar-note">No downloads or external links are shown until real materials are added.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
