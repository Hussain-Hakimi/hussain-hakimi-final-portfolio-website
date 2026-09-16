import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts, projects } from '../data';

const BASE_URL = 'https://hussain-hakimi.vercel.app';

type SeoConfig = {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
};

const seoConfig: Record<string, SeoConfig> = {
  '/': {
    title: 'Hussain Hakimi | Software Engineering Student & Frontend Developer Portfolio',
    description: 'Hussain Hakimi — Software Engineering student at UET Lahore. Explore frontend development projects, data analytics dashboards, and software engineering articles.',
    keywords: 'Hussain Hakimi, software engineering student, UET Lahore, frontend developer Pakistan, React, TypeScript, data analytics',
    ogTitle: 'Hussain Hakimi | Software Engineering Student & Frontend Developer',
    ogDescription: 'Software Engineering student at UET Lahore building practical web experiences and software projects.',
  },
  '/about': {
    title: 'About Hussain Hakimi | Software Engineering Student',
    description: 'Learn about Hussain Hakimi, a Software Engineering student at UET Lahore and frontend developer focused on practical software projects.',
    keywords: 'Hussain Hakimi about, software engineering student, UET Lahore, frontend developer Pakistan',
    ogTitle: 'About Hussain Hakimi',
    ogDescription: 'Learn about Hussain Hakimi and his software engineering journey.',
  },
  '/projects': {
    title: 'Projects | Hussain Hakimi Portfolio',
    description: 'Explore Hussain Hakimi’s software engineering, frontend development, and data analytics projects.',
    keywords: 'Hussain Hakimi projects, React projects, frontend projects, data analytics projects, software engineering projects',
    ogTitle: 'Projects | Hussain Hakimi',
    ogDescription: 'Explore software engineering, frontend, and data analytics projects.',
  },
  '/blog': {
    title: 'Blog | Hussain Hakimi',
    description: 'Articles by Hussain Hakimi about software engineering, frontend development, algorithms, career learning, and web development.',
    keywords: 'Hussain Hakimi blog, software engineering blog, frontend development, algorithms, web development',
    ogTitle: 'Blog | Hussain Hakimi',
    ogDescription: 'Software engineering and web development articles by Hussain Hakimi.',
  },
  '/certifications': {
    title: 'Certifications | Hussain Hakimi',
    description: 'View certifications and completed learning credentials in Hussain Hakimi’s software engineering portfolio.',
    keywords: 'Hussain Hakimi certifications, software engineering certificates, learning credentials',
    ogTitle: 'Certifications | Hussain Hakimi',
    ogDescription: 'Certifications and learning credentials from Hussain Hakimi.',
  },
  '/contact': {
    title: 'Contact Hussain Hakimi | Software Engineering Student',
    description: 'Contact Hussain Hakimi about software projects, internships, collaboration, or frontend development work.',
    keywords: 'contact Hussain Hakimi, software engineering intern, frontend developer Pakistan, collaboration',
    ogTitle: 'Contact Hussain Hakimi',
    ogDescription: 'Get in touch with Hussain Hakimi about projects and collaboration.',
  },
};

const defaultConfig: SeoConfig = {
  title: 'Hussain Hakimi | Software Engineering Student',
  description: 'Portfolio of Hussain Hakimi, a Software Engineering student building practical software and web projects.',
  keywords: 'Hussain Hakimi, software engineering, frontend developer',
  ogTitle: 'Hussain Hakimi',
  ogDescription: 'Software engineering portfolio of Hussain Hakimi.',
};

function upsertMeta(selector: string, attribute: 'name' | 'property', value: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

function upsertBreadcrumbSchema(pathname: string) {
  let script = document.querySelector<HTMLScriptElement>('script[data-breadcrumb-schema]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.breadcrumbSchema = 'true';
    document.head.appendChild(script);
  }

  const segments = pathname.split('/').filter(Boolean);
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    ...segments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: decodeURIComponent(segment).replace(/-/g, ' '),
      item: `${BASE_URL}/${segments.slice(0, index + 1).join('/')}`,
    })),
  ];

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  });
}

export default function useSEO() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const config = seoConfig[pathname] || defaultConfig;
    const blogPost = pathname.startsWith('/blog/')
      ? blogPosts.find((post) => post.slug === pathname.slice('/blog/'.length))
      : undefined;
    const project = pathname.startsWith('/projects/')
      ? projects.find((item) => item.slug === pathname.slice('/projects/'.length))
      : undefined;

    const pageTitle = blogPost
      ? `${blogPost.title} | Hussain Hakimi Blog`
      : project
        ? `${project.title} | Hussain Hakimi Projects`
        : config.title;
    const pageDescription = blogPost?.excerpt || project?.description || config.description;
    const canonical = `${BASE_URL}${pathname === '/' ? '/' : pathname}`;
    const language = blogPost?.language || 'en';

    document.title = pageTitle;
    document.documentElement.lang = language;
    upsertMeta('meta[name="description"]', 'name', 'description', pageDescription);
    upsertMeta('meta[name="keywords"]', 'name', 'keywords', config.keywords);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', blogPost?.title || project?.title || config.ogTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', pageDescription);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', blogPost?.title || project?.title || config.ogTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', pageDescription);
    upsertCanonical(canonical);
    upsertBreadcrumbSchema(pathname);

    const isKnownPage = pathname === '/' || pathname === '/about' || pathname === '/projects' || pathname === '/blog' || pathname === '/certifications' || pathname === '/contact' || Boolean(blogPost) || Boolean(project);
    upsertMeta('meta[name="robots"]', 'name', 'robots', isKnownPage ? 'index, follow' : 'noindex, follow');
  }, [location.pathname]);
}
