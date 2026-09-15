import { useParams, Link } from 'react-router-dom';
import { useEffect, type ReactNode } from 'react';
import { blogPosts } from '../data';

function renderInlineText(text: string): ReactNode[] {
  const segments: ReactNode[] = [];
  const pattern = /(`.*?`)|\*\*(.+?)\*\*|\*(.+?)\*|_(.+?)_/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push(text.slice(lastIndex, match.index));
    }

    const [fullMatch, codeMatch, boldMatch, italicMatch, underscoreMatch] = match;

    if (codeMatch) {
      segments.push(<code key={`code-${match.index}`}>{codeMatch.slice(1, -1)}</code>);
    } else if (boldMatch) {
      segments.push(<strong key={`bold-${match.index}`}>{boldMatch}</strong>);
    } else if (italicMatch) {
      segments.push(<em key={`italic-${match.index}`}>{italicMatch}</em>);
    } else if (underscoreMatch) {
      segments.push(<em key={`underscore-${match.index}`}>{underscoreMatch}</em>);
    } else {
      segments.push(fullMatch);
    }

    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    segments.push(text.slice(lastIndex));
  }

  return segments;
}

function renderContent(content: string): ReactNode[] {
  const lines = content.trim().split('\n');
  const nodes: ReactNode[] = [];
  let inList = false;
  let listKey = 0;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (line.trim() === '') {
      if (inList) {
        nodes.push(<ul key={`list-end-${i}`}></ul>);
        inList = false;
      }
      continue;
    }

    if (line.startsWith('### ')) {
      if (inList) {
        nodes.push(<ul key={`list-end-${i}`}></ul>);
        inList = false;
      }
      nodes.push(<h3 key={`h3-${i}`}>{line.replace('### ', '')}</h3>);
      continue;
    }

    if (line.startsWith('## ')) {
      if (inList) {
        nodes.push(<ul key={`list-end-${i}`}></ul>);
        inList = false;
      }
      nodes.push(<h2 key={`h2-${i}`}>{line.replace('## ', '')}</h2>);
      continue;
    }

    if (line.startsWith('- ')) {
      if (!inList) {
        nodes.push(<ul key={`list-${listKey++}`}>
          <li key={`li-${i}`}>{renderInlineText(line.replace('- ', ''))}</li>
        </ul>);
        inList = true;
      } else {
        nodes.push(<li key={`li-${i}`}>{renderInlineText(line.replace('- ', ''))}</li>);
      }
      continue;
    }

    if (inList) {
      nodes.push(<ul key={`list-end-${i}`}></ul>);
      inList = false;
    }

    nodes.push(<p key={`p-${i}`}>{renderInlineText(line)}</p>);
  }

  return nodes;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Extract headings for TOC
function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(#{2,3}) (.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    const text = match[2];
    headings.push({
      level: match[1].length,
      text,
      id: slugifyHeading(text),
    });
  }
  return headings;
}

// Auto-suggest related posts based on shared tags
function getRelatedPosts(currentSlug: string, currentTags: string[], currentLang: string, limit = 3) {
  return blogPosts
    .filter(p => p.slug !== currentSlug)
    .map(p => {
      // Score based on shared tags and same language
      const sharedTags = p.tags.filter(t => currentTags.includes(t)).length;
      const sameLang = p.language === currentLang ? 2 : 0;
      const score = sharedTags + sameLang;
      return { ...p, score };
    })
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const post = blogPosts[postIndex];

  // Inject BlogPosting JSON-LD schema
  useEffect(() => {
    if (!post) return;
    
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: 'Hussain Hakimi',
        url: 'https://hussain-hakimi.vercel.app/#/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Hussain Hakimi Portfolio',
      },
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://hussain-hakimi.vercel.app/#/blog/${post.slug}`,
      },
      keywords: post.tags.join(', '),
      inLanguage: post.language === 'fa' ? 'fa' : 'en',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [post]);

  if (!post) {
    return (
      <div className="not-found">
        <div className="not-found-code">404</div>
        <h2>Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
      </div>
    );
  }

  const isRTL = post.language === 'fa';
  const headings = extractHeadings(post.content);
  const contentNodes = renderContent(post.content);
  const relatedPosts = getRelatedPosts(post.slug, post.tags, post.language);

  // Prev/Next navigation
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const currentSortedIndex = sortedPosts.findIndex(p => p.slug === slug);
  const prevPost = currentSortedIndex < sortedPosts.length - 1 ? sortedPosts[currentSortedIndex + 1] : null;
  const nextPost = currentSortedIndex > 0 ? sortedPosts[currentSortedIndex - 1] : null;

  return (
    <article className={`blog-post ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'} lang={post.language}>
      <Link to="/blog" className="blog-post-back">
        {isRTL ? '→ بازگشت به بلاگ' : '← Back to Blog'}
      </Link>
      
      <header className="blog-post-header">
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', alignItems: 'center' }}>
          {isRTL && (
            <span className="badge" style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.75rem' }}>
              فارسی
            </span>
          )}
          {!isRTL && (
            <span className="badge" style={{ background: '#dbeafe', color: '#1d4ed8', fontSize: '0.75rem' }}>
              English
            </span>
          )}
        </div>
        
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          <time dateTime={post.date}>
            {isRTL 
              ? new Date(post.date).toLocaleDateString('fa-IR', { month: 'long', day: 'numeric', year: 'numeric' })
              : new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
            }
          </time>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{isRTL ? 'حسین حکیمی' : 'Hussain Hakimi'}</span>
        </div>
        <div className="blog-post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </header>

      {headings.length > 0 && (
        <nav className="toc" aria-label={isRTL ? 'فهرست مطالب' : 'Table of contents'}>
          <div className="toc-title">{isRTL ? 'فهرست مطالب' : 'Table of Contents'}</div>
          <div className="toc-list">
            {headings.map((heading, i) => (
              <a
                key={i}
                href={`#${heading.id}`}
                className={`toc-link ${heading.level === 3 ? 'sub' : ''}`}
              >
                {heading.text}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div className="blog-post-content">{contentNodes}</div>

      {/* Related Posts / Auto-Suggestions */}
      {relatedPosts.length > 0 && (
        <section className="related-posts" aria-label={isRTL ? 'مقالات مرتبط' : 'Related articles'}>
          <h2 className="related-posts-title">
            {isRTL ? 'مقالات پیشنهادی' : 'Suggested for you'}
          </h2>
          <div className="related-posts-grid">
            {relatedPosts.map(rp => (
              <Link key={rp.slug} to={`/blog/${rp.slug}`} className="related-post-card">
                <div className="related-post-emoji">{rp.emoji}</div>
                <div className="related-post-info">
                  <h3 className="related-post-card-title">{rp.title}</h3>
                  <span className="related-post-meta">{rp.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <nav className="post-nav" aria-label="Post navigation">
        {prevPost ? (
          <Link to={`/blog/${prevPost.slug}`} className="post-nav-link">
            <div className="post-nav-label">{isRTL ? '→ قبلی' : '← Previous'}</div>
            <div className="post-nav-title">{prevPost.title}</div>
          </Link>
        ) : <div />}
        {nextPost ? (
          <Link to={`/blog/${nextPost.slug}`} className="post-nav-link" style={{ textAlign: isRTL ? 'left' : 'right' }}>
            <div className="post-nav-label">{isRTL ? 'بعدی ←' : 'Next →'}</div>
            <div className="post-nav-title">{nextPost.title}</div>
          </Link>
        ) : <div />}
      </nav>
    </article>
  );
}
