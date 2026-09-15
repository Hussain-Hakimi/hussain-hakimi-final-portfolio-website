import { Link } from 'react-router-dom';
import type { BlogPost } from '../../types';

export default function BlogCard({ post }: { post: BlogPost }) { return <article className="blog-card"><div className="blog-card-body"><p>{post.readTime}</p><h2 className="blog-card-title"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2><p className="blog-card-excerpt">{post.excerpt}</p></div></article>; }
