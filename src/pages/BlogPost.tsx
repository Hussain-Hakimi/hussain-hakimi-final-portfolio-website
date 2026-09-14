import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data';

// Simple markdown-like renderer
function renderContent(content: string): string {
  const lines = content.trim().split('\n');
  const htmlParts: string[] = [];
  let inList = false;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Skip empty lines
    if (line.trim() === '') {
      if (inList) {
        htmlParts.push('</ul>');
        inList = false;
      }
      continue;
    }
    
    // Headers
    if (line.startsWith('### ')) {
      if (inList) { htmlParts.push('</ul>'); inList = false; }
      const text = line.replace('### ', '');
      htmlParts.push(`<h3>${text}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) { htmlParts.push('</ul>'); inList = false; }
      const text = line.replace('## ', '');
      htmlParts.push(`<h2>${text}</h2>`);
      continue;
    }
    
    // List items
    if (line.startsWith('- ')) {
      if (!inList) {
        htmlParts.push('<ul>');
        inList = true;
      }
      let itemText = line.replace('- ', '');
      itemText = itemText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      itemText = itemText.replace(/`(.+?)`/g, '<code>$1</code>');
      htmlParts.push(`<li>${itemText}</li>`);
      continue;
    }
    
    // Close list if we're in one
    if (inList) {
      htmlParts.push('</ul>');
      inList = false;
    }
    
    // Regular paragraph - apply inline formatting
    line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    line = line.replace(/\*(.+?)\*/g, '<em>$1</em>');
    line = line.replace(/`(.+?)`/g, '<code>$1</code>');
    htmlParts.push(`<p>${line}</p>`);
  }
  
  if (inList) htmlParts.push('</ul>');
  
  return htmlParts.join('\n');
}

// Extract headings for TOC
function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(#{2,3}) (.+)$/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: match[2],
    });
  }
  return headings;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const post = blogPosts[postIndex];

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

  const headings = extractHeadings(post.content);
  const htmlContent = renderContent(post.content);

  // Prev/Next navigation
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const currentSortedIndex = sortedPosts.findIndex(p => p.slug === slug);
  const prevPost = currentSortedIndex < sortedPosts.length - 1 ? sortedPosts[currentSortedIndex + 1] : null;
  const nextPost = currentSortedIndex > 0 ? sortedPosts[currentSortedIndex - 1] : null;

  return (
    <article className="blog-post">
      <Link to="/blog" className="blog-post-back">← Back to Blog</Link>
      
      <header className="blog-post-header">
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>Hussain Hakimi</span>
        </div>
        <div className="blog-post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </header>

      {headings.length > 0 && (
        <nav className="toc" aria-label="Table of contents">
          <div className="toc-title">Table of Contents</div>
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

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <nav className="post-nav" aria-label="Post navigation">
        {prevPost ? (
          <Link to={`/blog/${prevPost.slug}`} className="post-nav-link">
            <div className="post-nav-label">← Previous</div>
            <div className="post-nav-title">{prevPost.title}</div>
          </Link>
        ) : <div />}
        {nextPost ? (
          <Link to={`/blog/${nextPost.slug}`} className="post-nav-link" style={{ textAlign: 'right' }}>
            <div className="post-nav-label">Next →</div>
            <div className="post-nav-title">{nextPost.title}</div>
          </Link>
        ) : <div />}
      </nav>
    </article>
  );
}
