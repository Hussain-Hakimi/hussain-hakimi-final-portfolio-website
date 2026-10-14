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
  'HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript',
  'Python', 'C#', 'SQL', 'Git', 'GitHub',
  'Database Design', 'Data Analytics', 'Responsive Design',
];

export const projects = [
  {
    slug: 'mh-mega-mall',
    title: 'MH Mega Mall',
    category: 'frontend',
    year: '2025',
    description: 'An online shopping website project focused on product browsing and a responsive shopping experience.',
    role: 'Web Developer',
    challenge: 'Build a clear shopping interface that works across common screen sizes.',
    solution: 'Created the website interface with HTML, CSS, and JavaScript, with a Python backend as part of the project.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
    emoji: '🛒',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'dev-portfolio',
    title: 'Developer Portfolio',
    category: 'frontend',
    year: '2026',
    description: 'A responsive personal portfolio with project pages, a blog, dark mode, and a searchable navigation experience.',
    role: 'Frontend Developer',
    challenge: 'Organize projects, articles, and professional information in a maintainable portfolio.',
    solution: 'Built a component-based single-page application using React, TypeScript, Vite, and reusable styling.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    emoji: '🌐',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'data-visualization-system',
    title: 'Interactive Data Visualization System',
    category: 'analytics',
    year: '2026',
    description: 'A small web application for exploring data and visualizing student marks with charts.',
    role: 'Developer',
    challenge: 'Present tabular data in a form that is easier to explore and understand.',
    solution: 'Used Flask with HTML, CSS, and JavaScript, plus Matplotlib for chart generation.',
    tech: ['Python', 'Flask', 'JavaScript', 'Matplotlib', 'Flask-CORS'],
    emoji: '📊',
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const blogPosts = [
  {
    slug: 'why-i-chose-software-engineering',
    title: 'Why I Chose Software Engineering Over Business',
    date: '2025-01-15',
    readTime: '5 min read',
    language: 'en' as const,
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
    language: 'en' as const,
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
    slug: 'building-a-portfolio-with-react',
    title: 'Building a Portfolio with React and TypeScript',
    date: '2025-03-10',
    readTime: '6 min read',
    language: 'en' as const,
    tags: ['React', 'TypeScript', 'Web Development'],
    excerpt: 'A practical overview of organizing a portfolio with reusable React components, typed data, and a clear route structure.',
    emoji: '⚡',
    content: `
## Start with the content

A portfolio should make it easy for visitors to understand who you are, what you have built, and how to contact you. Before choosing a design, list the projects, skills, and links you can accurately stand behind.

## Use reusable components

React components help keep repeated interface patterns consistent. Cards, navigation items, and page sections can be built once and reused across the site.

## Keep content separate from presentation

Store project and article details in data files rather than scattering them through page components. This makes updates easier and reduces accidental inconsistencies.

## Add TypeScript gradually

TypeScript can describe the shape of project and article data, helping catch missing or incorrectly named fields before the site is built.

## Test before publishing

Run the type checker and production build, then open the main routes on desktop and mobile. Check that every visible button and link has a real destination.

## Final takeaway

A professional portfolio is not about listing every technology. It is about presenting a small set of real projects clearly, keeping claims accurate, and making it easy for people to reach you.
    `,
  },
  {
    slug: 'masir-e-man-be-barname-nevisi',
    title: 'مسیر من به سمت برنامه‌نویسی',
    date: '2025-04-05',
    readTime: '۶ دقیقه مطالعه',
    language: 'fa' as const,
    tags: ['مسیر شغلی', 'تجربه شخصی'],
    excerpt: 'داستان تغییر مسیر من از رشته مدیریت بازرگانی به مهندسی نرم‌افزار و اینکه چرا این بهترین تصمیم زندگی‌ام بود.',
    emoji: '🌟',
    content: `
## شروع مسیر

وقتی برای اولین بار وارد دانشگاه شدم، رشته مدیریت بازرگانی را انتخاب کردم. این انتخاب امن به نظر می‌رسید — مدرکی که ثبات و مسیر شغلی مشخصی را وعده می‌داد. اما چیزی درست حس نمی‌شد.

## جرقه اولیه

در ترم اول، به طور تصادفی با یک آموزش توسعه وب آشنا شدم. در عرض چند ساعت، مجذوب شدم. توانایی تایپ خطوط کد و دیدن فوری نتیجه بصری، شگفت‌انگیز بود. تا ساعت ۳ صبح بیدار ماندم و اولین صفحه وبم را ساختم.

آن شب همه چیز را تغییر داد.

## تصمیم بزرگ

پس از ماه‌ها خودآموزی، ساخت پروژه‌های کوچک و تأمل عمیق، تصمیم به تغییر مسیر به مهندسی نرم‌افزار گرفتم. آسان نبود — باید خانواده‌ام را قانع می‌کردم و کاملاً از منطقه امنم خارج می‌شدم.

اما با اطمینان می‌دانستم: این همان چیزی است که برای آن ساخته شده‌ام.

## درس‌هایی که آموختم

- **عشق مهم‌تر از شهرت است.** شغلی که دوستش دارید همیشه بهتر از شغلی عمل می‌کند که به آن راضی شده‌اید.
- **هیچ‌وقت برای تغییر دیر نیست.** چه سال اول باشد چه سال دهم، می‌توانید مسیرتان را عوض کنید.
- **خودآموزی یک ابرقدرت است.** توانایی یادگیری مهارت‌های جدید در دنیای تکنولوژی بی‌ارزش نیست.
- **جامعه مهم است.** ارتباط با سایر توسعه‌دهندگان رشد من را به شکل چشمگیری تسریع کرد.

## نگاه به آینده

امروز، من دانشجوی مهندسی نرم‌افزار در UET لاهور هستم. پس‌زمینه تجاری که کسب کردم هدر نرفته — به من دیدگاه منحصر به فردی درباره تفکر محصول و نیازهای کاربر می‌دهد.

اگر شما هم به تغییر مسیر فکر می‌کنید، توصیه من ساده است: شروع به ساختن کنید. بهترین راه برای فهمیدن اینکه چیزی برای شما مناسب است یا نه، امتحان کردن آن است.
    `,
  },
  {
    slug: 'sakht-e-web-sayit-sari',
    title: 'چگونه یک وب‌سایت سریع و زیبا بسازیم',
    date: '2025-04-20',
    readTime: '۸ دقیقه مطالعه',
    language: 'fa' as const,
    tags: ['توسعه وب', 'عملکرد', 'آموزش'],
    excerpt: 'نکات کلیدی برای ساخت وب‌سایت‌هایی که هم زیبا هستند و هم عملکرد عالی دارند. از بهینه‌سازی تصاویر تا کاهش حجم جاوااسکریپت.',
    emoji: '⚡',
    content: `
## چرا عملکرد مهم است؟

در دنیای امروز، کاربران صبر کمی دارند. اگر وب‌سایت شما در کمتر از ۳ ثانیه بارگذاری نشود، بیشتر بازدیدکنندگان را از دست می‌دهید. عملکرد خوب نه تنها تجربه کاربری را بهبود می‌بخشد، بلکه رتبه سایت شما را در موتورهای جستجو نیز بالا می‌برد.

## اصول کلیدی

### بهینه‌سازی تصاویر

تصاویر معمولاً بزرگ‌ترین بخش حجم صفحه هستند. چند نکته مهم:

- از فرمت‌های مدرن مثل WebP و AVIF استفاده کنید
- تصاویر را فشرده کنید بدون اینکه کیفیت به شکل محسوسی کاهش یابد
- از lazy loading برای تصاویر پایین صفحه استفاده کنید
- اندازه تصاویر را متناسب با نمایشگر انتخاب کنید

### کاهش حجم جاوااسکریپت

جاوااسکریپت سنگین می‌تواند عملکرد را به شدت کاهش دهد:

- فقط کدهای ضروری را بارگذاری کنید
- از tree-shaking برای حذف کدهای استفاده نشده بهره ببرید
- کتابخانه‌های سنگین را با جایگزین‌های سبک‌تر عوض کنید
- از code splitting استفاده کنید

### CSS کارآمد

- از CSS Custom Properties برای تم‌بندی استفاده کنید
- انیمیشن‌ها را به transform و opacity محدود کنید
- از will-change با احتیاط استفاده کنید
- استایل‌های غیرضروری را حذف کنید

## ابزارهای اندازه‌گیری

برای سنجش عملکرد وب‌سایت خود از این ابزارها استفاده کنید:

- **Lighthouse** — ابزار گوگل برای ارزیابی جامع
- **WebPageTest** — تست عملکرد از مکان‌های مختلف
- **Chrome DevTools** — تحلیل دقیق در مرورگر

## نتیجه‌گیری

ساخت یک وب‌سایت سریع نیاز به تلاش مداوم دارد، اما نتیجه آن ارزشمند است. کاربران خوشحال‌تر، نرخ تبدیل بالاتر، و رتبه بهتر در جستجو — همه اینها از عملکرد خوب ناشی می‌شود.

هرگز عملکرد را فدای زیبایی نکنید. بهترین وب‌سایت‌ها ترکیبی از هر دو هستند.
    `,
  },
];

export const experience = [
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
  "Outside coursework, I keep learning by building small projects, documenting what I learn, and exploring practical uses for software. I'm always looking for opportunities to improve and collaborate on meaningful work.",
];
