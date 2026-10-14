import { BookOpen, Code2, FileText, PlayCircle } from 'lucide-react';
import { learningResources } from '../data/resources';
import ResourceCard from '../components/resources/ResourceCard';

export default function Resources() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Learning Library</span>
          <h1>Programming Resources</h1>
          <p>Structured notes, video lessons, code examples, and exercises will be collected here as each lesson is prepared.</p>
        </div>
      </section>

      <section className="section resources-section">
        <div className="container">
          <div className="resources-intro">
            <div>
              <span className="section-label">Learn by building</span>
              <h2>One place for each lesson</h2>
              <p>The library is being prepared. Lessons marked “Coming soon” are placeholders, not published tutorials.</p>
            </div>
            <div className="resource-format-list" aria-label="Planned resource formats">
              <span><PlayCircle size={17} /> Video lessons</span>
              <span><FileText size={17} /> Notes and PDFs</span>
              <span><Code2 size={17} /> Code and exercises</span>
              <span><BookOpen size={17} /> Further reading</span>
            </div>
          </div>

          <div className="resources-grid">
            {learningResources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}
          </div>
        </div>
      </section>
    </>
  );
}
