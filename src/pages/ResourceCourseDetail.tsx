import { ArrowLeft, ArrowRight, BookOpen, Clock3, GraduationCap } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { countCourseLessons, countPublishedLessons, learningCourses, learningResources } from '../data/resources';
import SocialLinks from '../components/social/SocialLinks';
import NotFound from './NotFound';

export default function ResourceCourseDetail() {
  const { courseSlug } = useParams();
  const course = learningCourses.find((item) => item.slug === courseSlug);

  // Redirect old /resources/:lessonSlug links to their new nested lesson route.
  if (!course && courseSlug) {
    const legacyResource = learningResources.find((item) => item.slug === courseSlug);
    if (legacyResource) {
      return <Navigate to={'/resources/' + legacyResource.courseSlug + '/' + legacyResource.lessonSlug} replace />;
    }
  }

  if (!course) return <NotFound />;

  const lessonCount = countCourseLessons(course);
  const publishedCount = countPublishedLessons(course);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link className="resource-back-link" to="/resources"><ArrowLeft size={16} /> Learning library</Link>
          <span className="section-label">{course.category} · {course.level} course</span>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="resource-course-stats">
            <span><BookOpen size={16} /> {course.chapters.length} chapters</span>
            <span><GraduationCap size={16} /> {lessonCount} lessons</span>
            <span><Clock3 size={16} /> About {course.estimatedHours} hours</span>
          </div>
          <span className={'resource-status ' + (publishedCount > 0 ? 'resource-status-published' : '')}>
            {publishedCount > 0 ? publishedCount + ' lessons published' : 'Course outline · Lessons coming soon'}
          </span>
        </div>
      </section>

      <section className="section resource-detail-section">
        <div className="container resource-course-layout">
          <main className="resource-chapters">
            {course.chapters.map((chapter, chapterIndex) => (
              <section className="resource-chapter-panel" key={chapter.slug}>
                <div className="resource-chapter-heading">
                  <div>
                    <span className="resource-chapter-index">CHAPTER {String(chapterIndex + 1).padStart(2, '0')}</span>
                    <h2>{chapter.title.replace(/^\d+ · /, '')}</h2>
                    <p>{chapter.summary}</p>
                  </div>
                  <span className="resource-chapter-count">{chapter.lessons.length} lessons</span>
                </div>
                <div className="resource-lesson-list">
                  {chapter.lessons.map((lesson, lessonIndex) => (
                    <Link
                      className="resource-lesson-row"
                      key={lesson.slug}
                      to={'/resources/' + course.slug + '/' + lesson.slug}
                    >
                      <span className="resource-lesson-number">{String(lessonIndex + 1).padStart(2, '0')}</span>
                      <span className="resource-lesson-copy">
                        <strong>{lesson.title}</strong>
                        <span>{lesson.summary}</span>
                      </span>
                      <span className="resource-lesson-duration"><Clock3 size={14} /> {lesson.durationMinutes} min</span>
                      <span className={'resource-status ' + (lesson.status === 'published' ? 'resource-status-published' : '')}>
                        {lesson.status === 'published' ? 'Published' : 'Coming soon'}
                      </span>
                      <ArrowRight className="resource-lesson-arrow" size={17} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </main>
          <aside className="resource-course-sidebar">
            <div className="resource-content-panel">
              <span className="section-label">Learning path</span>
              <h2>Learn at your own pace</h2>
              <p>Follow the chapters in order or open any lesson to see its objectives and available materials.</p>
              <div className="resource-progress-track" aria-label={publishedCount + ' of ' + lessonCount + ' lessons published'}>
                <span style={{ width: (lessonCount ? (publishedCount / lessonCount) * 100 : 0) + '%' }} />
              </div>
              <p className="resource-progress-caption">{publishedCount} of {lessonCount} lessons published</p>
              <Link className="resource-card-link" to="/resources">Explore other courses <ArrowRight size={16} /></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section resource-social-section">
        <div className="container resource-social-inner">
          <div><span className="section-label">Stay connected</span><h2>Follow new lessons and updates</h2><p>New videos and learning materials will be shared through my social channels.</p></div>
          <SocialLinks variant="pills" />
        </div>
      </section>
    </>
  );
}
