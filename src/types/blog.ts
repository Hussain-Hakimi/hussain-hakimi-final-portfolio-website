export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  language: 'en' | 'fa';
  tags: string[];
  excerpt: string;
  emoji: string;
  content: string;
}
