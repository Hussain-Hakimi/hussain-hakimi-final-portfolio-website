import { BookOpen, Clock3, GraduationCap, PlayCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { countCourseLessons, countPublishedLessons, learningCourses } from '../data/resources';
import SocialLinks from '../components/social/SocialLinks';

export default function Resources() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Learning Library</span>
          <h1>Programming Resources</h1>
          <p>Organized learning paths with chapters, focused lessons, and practical materials to help you learn step by step.</p>
        </div>
      </section>

      <section className="section resources-section">
        <div className="container">
          <div className="resources-intro">
            <div>
              <span className="section-label">Learn by building</span>
              <h2>Choose a learning path</h2>
              <p>Start with a course, move through its chapters, and open individual lessons for objectives, video links, notes, and code examples.</p>
            </div>
            <div className="resource-format-list" aria-label="Learning materials">
              <span><PlayCircle size={17} /> Video lessons</span>
              <span><BookOpen size={17} /> Structured chapters</span>
              <span><GraduationCap size={17} /> Learning objectives</span>
              <span><Clock3 size={17} /> Lesson duration</span>
            </div>
          </div>

          <div className="resources-grid">
            {learningCourses.map((course) => {
              const lessonCount = countCourseLessons(course);
              const publishedCount = countPublishedLessons(course);
              return (
                <article className="resource-card resource-course-card" key={course.slug}>
                  <div className="resource-card-topline">
                    <span className="resource-category">{course.category}</span>
                    <span className="resource-status">{publishedCount > 0 ? 'Available now' : 'In preparation'}</span>
                  </div>
                  <h2>{course.title}</h2>
                  <p>{course.summary}</p>
                  <div className="resource-card-meta">
                    <span>{course.level}</span>
                    <span><BookOpen size={14} /> {course.chapters.length} chapters</span>
                    <span><GraduationCap size={14} /> {lessonCount} lessons</span>
                  </div>
                  <div className="resource-course-progress">
                    <span><span style={{ width: (lessonCount ? (publishedCount / lessonCount) * 100 : 0) + '%' }} /></span>
                    <small>{publishedCount} of {lessonCount} lessons published</small>
                  </div>
                  <Link className="resource-card-link" to={'/resources/' + course.slug}>
                    Explore course <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section resource-social-section">
        <div className="container resource-social-inner">
          <div>
            <span className="section-label">Stay connected</span>
            <h2>Follow the learning journey</h2>
            <p>I share programming tutorials, new lessons, and learning updates on these channels.</p>
          </div>
          <SocialLinks variant="pills" />
        </div>
      </section>
    </>
  );
}
