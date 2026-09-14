import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts, projects } from '../data';

// SEO configuration for each page
const seoConfig: Record<string, {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  canonical: string;
  schema?: object;
}> = {
  '/': {
    title: 'Hussain Hakimi | Software Engineering Student & Frontend Developer Portfolio',
    description: 'Hussain Hakimi — Software Engineering student at UET Lahore (2025–2029). Explore my frontend development projects, data analytics dashboards, and blog posts on Astro, React, and web performance.',
    keywords: 'Hussain Hakimi, software engineering student, UET Lahore, frontend developer Pakistan, Astro portfolio, React developer, data analytics dashboard, web developer Lahore',
    ogTitle: 'Hussain Hakimi | Software Engineering Student & Frontend Developer',
    ogDescription: 'Software Engineering student at UET Lahore. Explore frontend projects, data analytics dashboards, and tutorials on Astro, React, and web performance.',
    canonical: 'https://hussain-hakimi.vercel.app/',
  },
  '/about': {
    title: 'About Hussain Hakimi | Software Engineering Student at UET Lahore',
    description: 'Learn about my journey from Business Administration to Software Engineering at UET Lahore. Passionate about frontend development, database design, and data analytics. Available for internships.',
    keywords: 'software engineering student UET Lahore, business to software engineering, frontend developer Pakistan, Hussain Hakimi about, developer Lahore',
    ogTitle: 'About Hussain Hakimi | Software Engineering Student at UET Lahore',
    ogDescription: 'My journey from Business Administration to Software Engineering at UET Lahore. Passionate about frontend development and data analytics.',
    canonical: 'https://hussain-hakimi.vercel.app/#/about',
  },
  '/projects': {
    title: 'Frontend & Data Analytics Projects | Hussain Hakimi Portfolio',
    description: 'Explore my frontend development and data analytics projects built with React, Astro, and modern web technologies. See case studies including MH Mega Mall, Developer Portfolio, and Road Accident Dashboard.',
    keywords: 'frontend development projects, Astro portfolio projects, data analytics dashboard, React projects, software engineering projects, Hussain Hakimi projects',
    ogTitle: 'Frontend & Data Analytics Projects | Hussain Hakimi',
    ogDescription: 'Explore my frontend and data analytics projects. See case studies from UET Lahore software engineering student Hussain Hakimi.',
    canonical: 'https://hussain-hakimi.vercel.app/#/projects',
  },
  '/blog': {
    title: 'Blog | Frontend Development Tutorials & Software Engineering Insights',
    description: 'Read articles on frontend development, Astro tutorials, software engineering career advice, and data analytics. Written by Hussain Hakimi, Software Engineering student at UET Lahore.',
    keywords: 'frontend development tutorials, Astro blog tutorial, software engineering blog, learn web development Pakistan, data analytics articles, Hussain Hakimi blog',
    ogTitle: 'Blog | Frontend Development & Software Engineering',
    ogDescription: 'Articles on frontend development, Astro tutorials, and software engineering insights by Hussain Hakimi.',
    canonical: 'https://hussain-hakimi.vercel.app/#/blog',
  },
  '/contact': {
    title: 'Contact Hussain Hakimi | Hire Frontend Developer in Lahore',
    description: 'Get in touch with Hussain Hakimi for frontend development projects, internships, or collaboration. Software Engineering student at UET Lahore available for hire in Pakistan.',
    keywords: 'hire frontend developer Pakistan, hire software engineering intern Lahore, freelance web developer Lahore, contact Hussain Hakimi, developer for hire',
    ogTitle: 'Contact Hussain Hakimi | Hire Frontend Developer',
    ogDescription: 'Get in touch for frontend development projects and internships. Software Engineering student at UET Lahore available for hire.',
    canonical: 'https://hussain-hakimi.vercel.app/#/contact',
  },
};

// Default config for blog posts and project details
const defaultConfig = {
  title: 'Hussain Hakimi | Software Engineering Student & Frontend Developer',
  description: 'Software Engineering student at UET Lahore. Frontend developer passionate about building beautiful, performant web experiences.',
  keywords: 'Hussain Hakimi, software engineering, frontend developer, UET Lahore',
  ogTitle: 'Hussain Hakimi | Software Engineer',
  ogDescription: 'Software Engineering student at UET Lahore building beautiful web experiences.',
  canonical: 'https://hussain-hakimi.vercel.app/',
};

export default function useSEO() {
  const location = useLocation();
  
  useEffect(() => {
    // Get the config for the current path
    const config = seoConfig[location.pathname] || defaultConfig;
    
    // For blog posts and project details, try to get specific content
    let pageTitle = config.title;
    let pageDescription = config.description;
    
    // Check if this is a blog post
    if (location.pathname.startsWith('/blog/') && location.pathname !== '/blog') {
      const slug = location.pathname.replace('/blog/', '');
      const post = blogPosts.find((p) => p.slug === slug);
      if (post) {
        pageTitle = `${post.title} | Hussain Hakimi Blog`;
        pageDescription = post.excerpt;
      }
    }
    
    // Check if this is a project detail
    if (location.pathname.startsWith('/projects/') && location.pathname !== '/projects') {
      const slug = location.pathname.replace('/projects/', '');
      const project = projects.find((p) => p.slug === slug);
      if (project) {
        pageTitle = `${project.title} | Hussain Hakimi Projects`;
        pageDescription = project.description;
      }
    }
    
    // Update document title
    document.title = pageTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.keywords);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', config.canonical);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', config.ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', config.ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', config.canonical);
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', config.ogTitle);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', config.ogDescription);
    
    // Update breadcrumb schema
    updateBreadcrumbSchema(location.pathname);
    
    // Track page view in GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-2L3M48JG71', {
        page_path: location.pathname,
        page_title: pageTitle,
      });
    }
  }, [location.pathname]);
}

// Helper function to update breadcrumb schema
function updateBreadcrumbSchema(pathname: string) {
  const breadcrumbScript = document.querySelector('script[type="application/ld+json"]:last-of-type');
  if (!breadcrumbScript) return;
  
  const baseUrl = 'https://hussain-hakimi.vercel.app';
  const items: any[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
  ];
  
  if (pathname !== '/') {
    const pathSegments = pathname.split('/').filter(Boolean);
    let currentPosition = 2;
    
    pathSegments.forEach((segment) => {
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      items.push({
        '@type': 'ListItem',
        position: currentPosition,
        name: name,
        item: `${baseUrl}/#/${pathSegments.slice(0, currentPosition - 1).join('/')}`,
      });
      currentPosition++;
    });
  }
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
  
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
