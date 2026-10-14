import { ArrowRight, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LearningResource } from '../../data/resources';

export default function ResourceCard({ resource }: { resource: LearningResource }) {
  return (
    <article className="resource-card">
      <div className="resource-card-topline">
        <span className="resource-category">{resource.category}</span>
        <span className={`resource-status resource-status-${resource.status}`}>
          {resource.status === 'published' ? 'Published' : 'Coming soon'}
        </span>
      </div>
      <h2>{resource.title}</h2>
      <p>{resource.summary}</p>
      <div className="resource-card-meta">
        <span>{resource.level}</span>
        {resource.estimatedMinutes ? <span><Clock3 size={14} aria-hidden="true" /> {resource.estimatedMinutes} min</span> : null}
      </div>
      <Link className="resource-card-link" to={`/resources/${resource.slug}`}>
        View lesson structure <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
