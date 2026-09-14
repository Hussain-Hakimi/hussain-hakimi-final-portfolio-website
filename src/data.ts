// ============================================
// DATA - Hussain Hakimi Portfolio
// All content, projects, blog posts, skills
// ============================================

export const siteConfig = {
  name: 'Hussain Hakimi',
  title: 'Software Engineer',
  description: 'Software Engineering Student at UET Lahore. Frontend developer passionate about building beautiful, performant web experiences.',
  url: 'https://hussainhakimi.dev',
  email: 'hussainhakimi@example.com',
  github: 'https://github.com/Hussain-Hakimi',
  linkedin: 'https://linkedin.com/in/hussain-hakimi',
  resume: '/resume.pdf',
};

export const navigation = [
  { label: 'Home', path: '/', icon: '🏠' },
  { label: 'About', path: '/about', icon: '👤' },
  { label: 'Projects', path: '/projects', icon: '💼' },
  { label: 'Blog', path: '/blog', icon: '📝' },
  { label: 'Contact', path: '/contact', icon: '✉️' },
];

export const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Astro',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Express',
  'PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'Figma',
  'Python', 'Data Analytics', 'SQL', 'REST APIs', 'Responsive Design',
];

export const projects = [
  {
    slug: 'mh-mega-mall',
    title: 'MH Mega Mall',
    category: 'frontend',
    year: '2025',
    description: 'A modern e-commerce platform with a sleek UI, product filtering, cart management, and responsive design built for optimal shopping experience.',
    role: 'Frontend Developer & UI Designer',
    challenge: 'Build a fully responsive e-commerce platform that provides a seamless shopping experience across all devices while maintaining fast load times and intuitive navigation.',
    solution: 'Implemented a component-based architecture with React, optimized images and lazy loading, and designed an intuitive filtering system that helps users find products quickly.',
    tech: ['React', 'CSS3', 'JavaScript', 'REST API'],
    emoji: '🛒',
    liveUrl: '#',
    repoUrl: 'https://github.com/Hussain-Hakimi',
  },
  {
    slug: 'dev-portfolio',
    title: 'Developer Portfolio',
    category: 'frontend',
    year: '2025',
    description: 'A personal portfolio website built with Astro, featuring dark mode, smooth animations, and a command palette for navigation.',
    role: 'Full Stack Developer',
    challenge: 'Create a portfolio that stands out to recruiters while demonstrating strong technical skills in modern web development, accessibility, and performance optimization.',
    solution: 'Built with Astro for zero-JS-by-default performance, implemented a custom design system with CSS variables, added dark mode with no flash, and included accessibility features throughout.',
    tech: ['Astro', 'TypeScript', 'CSS Custom Properties', 'Intersection Observer'],
    emoji: '🌐',
    liveUrl: '#',
    repoUrl: 'https://github.com/Hussain-Hakimi',
  },
  {
    slug: 'road-accident-dashboard',
    title: 'Road Accident Analytics Dashboard',
    category: 'analytics',
    year: '2024',
    description: 'An interactive data analytics dashboard visualizing road accident patterns, helping identify high-risk areas and inform policy decisions.',
    role: 'Data Analyst & Developer',
    challenge: 'Transform raw accident data into actionable insights through an interactive dashboard that stakeholders can use to identify trends and make data-driven decisions.',
    solution: 'Built an interactive dashboard with filterable charts, geographic heatmaps, and trend analysis. Used data aggregation techniques to surface meaningful patterns from thousands of records.',
    tech: ['Python', 'SQL', 'Data Visualization', 'Analytics'],
    emoji: '📊',
    liveUrl: '#',
    repoUrl: 'https://github.com/Hussain-Hakimi',
  },
];

export const blogPosts = [
  {
    slug: 'why-i-chose-software-engineering',
    title: 'Why I Chose Software Engineering Over Business',
    date: '2025-01-15',
    readTime: '5 min read',
    tags: ['Career', 'Personal'],
    excerpt: 'The story of how I pivoted from Business Administration to Software Engineering, and why it was the best decision I ever made.',
    emoji: '🚀',
    content: `
## The Beginning

When I first enrolled at university, I chose Business Administration. It felt like the safe choice — a degree that promised stability and a clear career path. But something didn't feel right.

## The Spark

During my first semester, I stumbled upon a web development tutorial. Within hours, I was hooked. The ability to type lines of code and instantly see a visual result was mesmerizing. I stayed up until 3 AM building my first webpage — a simple "Hello World" with some CSS styling.

That night changed everything.

## The Decision

After months of self-study, building small projects, and deep reflection, I made the decision to pivot to Software Engineering. It wasn't easy — I had to convince my family, catch up on prerequisites, and step completely outside my comfort zone.

But I knew with certainty: this is what I was meant to do.

## What I've Learned Since

The transition taught me several valuable lessons:

- **Passion beats prestige.** A career you love will always outperform one you settled for.
- **It's never too late to pivot.** Whether it's your first year or your tenth, you can change direction.
- **Self-learning is a superpower.** The ability to teach yourself new skills is invaluable in tech.
- **Community matters.** Connecting with other developers accelerated my growth exponentially.

## Looking Forward

Today, I'm a Software Engineering student at UET Lahore, building projects I'm proud of and working toward internships at top tech companies. The business background I gained isn't wasted — it gives me a unique perspective on product thinking and user needs.

If you're considering a similar pivot, my advice is simple: start building. The best way to know if something is right for you is to try it.
    `,
  },
  {
    slug: 'understanding-big-o-notation',
    title: 'Understanding Big O Notation: A Beginner\'s Guide',
    date: '2025-02-20',
    readTime: '7 min read',
    tags: ['Algorithms', 'Computer Science'],
    excerpt: 'A clear, practical guide to understanding algorithm complexity and why Big O notation matters for every software engineer.',
    emoji: '📐',
    content: `
## What is Big O Notation?

Big O notation is a mathematical way to describe how the performance of an algorithm scales as the input size grows. It helps us answer the question: "How will this code behave with 10 items? 1,000 items? 1 million items?"

## Why Does It Matter?

As a software engineer, you'll write code that handles data. Understanding how your algorithms scale is crucial for:

- **Writing efficient code** that doesn't slow down as data grows
- **Making informed decisions** about which data structures to use
- **Passing technical interviews** at top companies
- **Communicating with your team** about performance tradeoffs

## Common Complexities

### O(1) — Constant Time
The operation takes the same time regardless of input size.

Example: Accessing an array element by index.

### O(log n) — Logarithmic Time
The operation time grows logarithmically. Each step halves the problem.

Example: Binary search in a sorted array.

### O(n) — Linear Time
The operation time grows proportionally with input size.

Example: Iterating through an array to find a value.

### O(n log n) — Linearithmic Time
Slightly worse than linear, but still very efficient for most use cases.

Example: Efficient sorting algorithms like Merge Sort.

### O(n²) — Quadratic Time
Performance degrades quickly as input grows.

Example: Nested loops comparing every pair of elements.

## Practical Tips

1. **Don't obsess over Big O in everyday code.** Most of the time, readable code matters more than micro-optimizations.
2. **Focus on the bottlenecks.** Identify where your code spends most of its time.
3. **Choose the right data structure.** A HashMap lookup is O(1) vs an array search at O(n).
4. **Think about scale.** What happens when your app has 100x more users?

## The Key Takeaway

Big O isn't about being perfect — it's about being aware. Understanding algorithm complexity makes you a better engineer who can write code that scales gracefully.
    `,
  },
  {
    slug: 'building-a-portfolio-with-astro',
    title: 'Building a Blazing-Fast Portfolio with Astro',
    date: '2025-03-10',
    readTime: '6 min read',
    tags: ['Web Development', 'Tutorial'],
    excerpt: 'How I built this portfolio using Astro to achieve perfect Lighthouse scores while maintaining a beautiful, interactive design.',
    emoji: '⚡',
    content: `
## Why Astro?

When I decided to rebuild my portfolio, I had specific requirements:

- **Perfect performance scores** on Lighthouse
- **Beautiful design** with animations and interactivity
- **Zero unnecessary JavaScript** shipped to the browser
- **Great developer experience** with TypeScript support

Astro checked every box.

## The Architecture

Astro's island architecture means each component can be static HTML by default, with JavaScript only where needed. For my portfolio:

- All layout and content is static HTML
- Theme toggle uses a tiny inline script
- Typewriter effect loads only on the homepage
- Scroll animations use the native Intersection Observer API

## The Design System

I built a complete design system using CSS Custom Properties:

- **Light and dark mode** with smooth transitions
- **Consistent spacing** using a modular scale
- **Accessible color contrast** meeting WCAG AA
- **Responsive design** that works on every screen size

## Key Features

### Dark Mode Without Flash
A small inline script in the HTML head reads the user's preference before the page renders, preventing any flash of incorrect theme.

### Command Palette
Press ⌘K to open a Spotlight-style search overlay. Built with vanilla TypeScript — no dependencies.

### Scroll Animations
Using Intersection Observer to fade sections in as they enter the viewport. Respects prefers-reduced-motion.

## Results

- **100/100** on all Lighthouse metrics
- **< 50KB** total JavaScript
- **Sub-second** load times
- **Full accessibility** compliance

## Lessons Learned

1. **Start with performance in mind.** It's easier to build fast than to optimize later.
2. **CSS Custom Properties are powerful.** They enable theming without JavaScript.
3. **Less JavaScript = better UX.** Every KB you ship is a KB the user has to download and parse.
4. **Accessibility is not optional.** Semantic HTML and ARIA attributes should be built in from the start.

## Final Thoughts

Astro is perfect for content-focused websites like portfolios and blogs. If you want a fast, beautiful site without the overhead of a full SPA framework, give it a try.
    `,
  },
];

export const experience = [
  {
    title: 'Volunteer Instructor',
    organization: 'Community Education Center',
    period: '2022 – Present',
    description: 'Teaching foundational programming concepts to beginners. Designed curriculum covering HTML, CSS, and JavaScript basics. Mentored 50+ students in their coding journey.',
    icon: '🎓',
  },
  {
    title: 'Software Engineering Student',
    organization: 'UET Lahore',
    period: '2025 – 2029',
    description: 'Pursuing a Bachelor\'s in Software Engineering. Coursework includes Data Structures, Algorithms, Database Systems, Web Development, and Software Architecture.',
    icon: '🏛️',
  },
];

export const education = {
  degree: 'BS Software Engineering',
  university: 'University of Engineering & Technology, Lahore',
  period: '2025 – 2029',
  focus: 'Frontend Development, Database Design, Data Analytics',
};

export const aboutStory = [
  "I'm Hussain Hakimi, a Software Engineering student at UET Lahore with a unique background. I started my academic journey in Business Administration, but a chance encounter with web development changed my trajectory forever.",
  "What began as curiosity quickly became passion. I spent countless nights building projects, learning new technologies, and immersing myself in the developer community. The ability to create something from nothing — just logic and creativity — captivated me.",
  "Today, I focus on frontend development, database design, and data analytics. I believe in building software that is not just functional, but beautiful and accessible to everyone. My business background gives me a unique perspective on product thinking and user experience.",
  "When I'm not coding, you'll find me volunteering as a programming instructor, contributing to open-source projects, or exploring the latest in web technologies. I'm always looking for opportunities to learn, grow, and build meaningful things.",
];
