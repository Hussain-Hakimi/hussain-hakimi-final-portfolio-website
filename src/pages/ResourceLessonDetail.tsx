import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock3, Code2, Download, FileText, PlayCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { learningCourses } from '../data/resources';
import SocialLinks from '../components/social/SocialLinks';
import NotFound from './NotFound';

export default function ResourceLessonDetail() {
  const { courseSlug, lessonSlug } = useParams();
  const course = learningCourses.find((item) => item.slug === courseSlug);
  const chapter = course?.chapters.find((item) => item.lessons.some((lesson) => lesson.slug === lessonSlug));
  const lesson = chapter?.lessons.find((item) => item.slug === lessonSlug);

  if (!course || !chapter || !lesson) return <NotFound />;

  const allLessons = course.chapters.flatMap((item) => item.lessons);
  const lessonIndex = allLessons.findIndex((item) => item.slug === lesson.slug);
  const previousLesson = allLessons[lessonIndex - 1];
  const nextLesson = allLessons[lessonIndex + 1];
  const isPublished = lesson.status === 'published';

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link className="resource-back-link" to={'/resources/' + course.slug}><ArrowLeft size={16} /> {course.title}</Link>
          <span className="section-label">{course.category} · {chapter.title.replace(/^\d+ · /, '')}</span>
          <h1>{lesson.title}</h1>
          <p>{lesson.summary}</p>
          <div className="resource-course-stats">
            <span><Clock3 size={16} /> {lesson.durationMinutes} min</span>
            <span><BookOpen size={16} /> {course.level}</span>
          </div>
          <span className={'resource-status ' + (isPublished ? 'resource-status-published' : '')}>
            {isPublished ? 'Published lesson' : 'Lesson coming soon'}
          </span>
        </div>
      </section>

      <section className="section resource-detail-section">
        <div className="container resource-lesson-layout">
          <main className="resource-lesson-main">
            <section className="resource-content-panel">
              <div className="resource-panel-heading"><CheckCircle2 size={20} /><h2>What you will learn</h2></div>
              <ul className="resource-objectives">
                {lesson.objectives.map((objective) => <li key={objective}>{objective}</li>)}
              </ul>
            </section>

            <section className="resource-content-panel">
              <div className="resource-panel-heading"><PlayCircle size={20} /><h2>Video lesson</h2></div>
              {lesson.videoUrl ? (
                <a className="resource-material-link" href={lesson.videoUrl} target="_blank" rel="noopener noreferrer">
                  <PlayCircle size={18} /> Watch video lesson <ArrowRight size={16} />
                </a>
              ) : (
                <p>{isPublished ? 'The video link will be added shortly.' : 'The video lesson is being prepared and will appear here when published.'}</p>
              )}
            </section>

            <section className="resource-content-panel">
              <div className="resource-panel-heading"><FileText size={20} /><h2>Lesson notes</h2></div>
              {lesson.notesUrl ? (
                <a className="resource-material-link" href={lesson.notesUrl} target="_blank" rel="noopener noreferrer" download>
                  <Download size={18} /> Download lesson notes (PDF) <ArrowRight size={16} />
                </a>
              ) : (
                <p>Downloadable notes with explanations and examples will be added when this lesson is published.</p>
              )}
            </section>

            <section className="resource-content-panel">
              <div className="resource-panel-heading"><Code2 size={20} /><h2>Code and practice</h2></div>
              {lesson.codeUrl ? (
                <a className="resource-material-link" href={lesson.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Code2 size={18} /> Open source code and exercises <ArrowRight size={16} />
                </a>
              ) : (
                <p>Code examples and practice exercises will be linked here when they are ready.</p>
              )}
            </section>

            <nav className="resource-lesson-navigation" aria-label="Lesson navigation">
              {previousLesson ? (
                <Link to={'/resources/' + course.slug + '/' + previousLesson.slug}><ArrowLeft size={16} /><span><small>Previous lesson</small><strong>{previousLesson.title}</strong></span></Link>
              ) : <span />}
              {nextLesson ? (
                <Link className="resource-next-lesson" to={'/resources/' + course.slug + '/' + nextLesson.slug}><span><small>Next lesson</small><strong>{nextLesson.title}</strong></span><ArrowRight size={16} /></Link>
              ) : (
                <Link className="resource-next-lesson" to="/resources"><span><small>Continue exploring</small><strong>All courses</strong></span><ArrowRight size={16} /></Link>
              )}
            </nav>
          </main>

          <aside className="resource-lesson-sidebar">
            <div className="resource-content-panel">
              <div className="resource-panel-heading"><BookOpen size={20} /><h2>In this course</h2></div>
              <p className="resource-sidebar-course-title">{course.title}</p>
              {course.chapters.map((item) => (
                <div className="resource-sidebar-chapter" key={item.slug}>
                  <strong>{item.title.replace(/^\d+ · /, '')}</strong>
                  {item.lessons.map((courseLesson) => (
                    <Link
                      key={courseLesson.slug}
                      className={courseLesson.slug === lesson.slug ? 'is-current' : ''}
                      to={'/resources/' + course.slug + '/' + courseLesson.slug}
                    >
                      {courseLesson.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section resource-social-section">
        <div className="container resource-social-inner">
          <div><span className="section-label">More learning content</span><h2>Follow along for new lessons</h2><p>Updates and new tutorials will be shared on my social channels.</p></div>
          <SocialLinks variant="pills" />
        </div>
      </section>
    </>
  );
}
