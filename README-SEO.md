# SEO Strategy & Documentation — Hussain Hakimi Portfolio

## 🎯 Target Keywords Per Page

| Page | Primary Keyword | Secondary Keywords |
| :--- | :--- | :--- |
| **Home** | "Hussain Hakimi software engineer portfolio" | "software engineering student portfolio", "UET Lahore developer", "frontend developer Pakistan" |
| **About** | "Software engineering student UET Lahore" | "business to software engineering journey", "frontend developer Pakistan", "Hussain Hakimi about" |
| **Projects** | "Frontend development projects Astro" | "data analytics dashboard projects", "React portfolio projects", "Hussain Hakimi projects" |
| **Blog** | "Frontend development tutorials Astro" | "learn software engineering Pakistan", "Astro blog tutorial", "web development articles" |
| **Contact** | "Hire software engineering intern Lahore" | "hire frontend developer Pakistan", "freelance web developer Lahore" |

---

## 📝 Page Title & Meta Description Strategy

### Home
- **Title (58 chars):** `Hussain Hakimi | Software Engineering Student & Frontend Developer Portfolio`
- **Description (158 chars):** `Hussain Hakimi — Software Engineering student at UET Lahore (2025–2029). Explore my frontend development projects, data analytics dashboards, and blog posts on Astro, React, and web performance.`

### About
- **Title (60 chars):** `About Hussain Hakimi | Software Engineering Student at UET Lahore`
- **Description (156 chars):** `Learn about my journey from Business Administration to Software Engineering at UET Lahore. Passionate about frontend development, database design, and data analytics.`

### Projects
- **Title (58 chars):** `Frontend & Data Analytics Projects | Hussain Hakimi Portfolio`
- **Description (159 chars):** `Explore my frontend development and data analytics projects built with React, Astro, and modern web technologies. See case studies from UET Lahore software engineering student.`

### Blog
- **Title (60 chars):** `Blog | Frontend Development Tutorials & Software Engineering Insights`
- **Description (155 chars):** `Read articles on frontend development, Astro tutorials, software engineering career advice, and data analytics. Written by Hussain Hakimi, student at UET Lahore.`

### Contact
- **Title (58 chars):** `Contact Hussain Hakimi | Hire Frontend Developer in Lahore`
- **Description (152 chars):** `Get in touch with Hussain Hakimi for frontend development projects, internships, or collaboration. Software Engineering student at UET Lahore available for hire.`

---

## 📅 12-Post Content Calendar (6 Months)

### Month 1-2: Astro Tutorials Cluster
| # | Title | Target Keyword | Status |
| :--- | :--- | :--- | :--- |
| 1 | "How to Build a Portfolio with Astro in 2026" | "build portfolio with Astro" | ✅ Published |
| 2 | "Astro vs Next.js: Which Should You Choose?" | "Astro vs Next.js portfolio" | 📝 Draft |
| 3 | "Adding Dark Mode to Your Astro Site" | "Astro dark mode tutorial" | 📋 Outline |
| 4 | "Astro Content Collections: A Complete Guide" | "Astro content collections" | 📋 Outline |

### Month 3-4: Frontend Development for Students Cluster
| # | Title | Target Keyword | Status |
| :--- | :--- | :--- | :--- |
| 5 | "Why Every CS Student Should Build a Portfolio" | "CS student portfolio" | 📝 Draft |
| 6 | "How I Learned JavaScript in 3 Months" | "learn JavaScript 3 months student" | 📋 Outline |
| 7 | "From Business to Software Engineering: My Story" | "business to software engineering" | ✅ Published |
| 8 | "5 Projects Every Software Engineering Student Should Build" | "projects software engineering student" | 📋 Outline |

### Month 5-6: Data Analytics & Dashboards Cluster
| # | Title | Target Keyword | Status |
| :--- | :--- | :--- | :--- |
| 9 | "Building a Road Accident Dashboard" | "road accident dashboard Excel" | 📝 Draft |
| 10 | "Power BI vs Excel: Which Should You Learn?" | "Power BI vs Excel" | 📋 Outline |
| 11 | "A Beginner's Guide to Data Cleaning" | "data cleaning beginner guide" | 📋 Outline |
| 12 | "How to Present Data to Non-Technical Stakeholders" | "present data insights" | 📋 Outline |

---

## 🔗 Internal Linking Strategy

### Home Page Links To:
- About → "Read my full story"
- Projects → "View all projects"
- Blog → "Read latest articles"
- Contact → "Get in touch"

### About Page Links To:
- Projects → "See my work"
- Blog → "Read my thoughts"
- Contact → "Let's work together"

### Projects Page Links To:
- About → "Learn about me"
- Blog → "Read development tutorials"
- Contact → "Hire me for your project"

### Blog Posts Link To:
- At least 2 other related blog posts
- Relevant project case study
- About page (author bio)

---

## 📊 GA4 Event Tracking Setup

### Custom Events to Track:

```javascript
// Resume Download
gtag('event', 'resume_download', {
  event_category: 'engagement',
  event_label: 'resume_pdf'
});

// Contact Form Submit
gtag('event', 'contact_submit', {
  event_category: 'conversion',
  event_label: 'contact_form'
});

// Project Modal Open
gtag('event', 'project_modal_open', {
  event_category: 'engagement',
  event_label: projectTitle
});

// Blog Scroll Depth
gtag('event', 'scroll_depth', {
  event_category: 'engagement',
  event_label: postTitle,
  value: percentage // 25, 50, 75, 100
});

// Command Palette Open
gtag('event', 'command_palette_open', {
  event_category: 'engagement',
  event_label: 'keyboard_shortcut'
});
```

### GA4 Conversions to Create:
1. `contact_submit` — Primary conversion
2. `resume_download` — Secondary conversion
3. `project_modal_open` — Engagement metric

---

## 🔍 Google Search Console Setup

### Step-by-Step:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://hussain-hakimi.vercel.app/`
3. Verify ownership via HTML meta tag (already added to index.html)
4. Submit sitemap: `https://hussain-hakimi.vercel.app/sitemap.xml`
5. Request indexing for each page

### Monitor Weekly:
- Total impressions & clicks
- Average CTR & position
- Indexed pages count
- Mobile usability errors
- Core Web Vitals report
- Top queries

### Target Keywords to Track:
- "Hussain Hakimi"
- "software engineering portfolio Astro"
- "UET Lahore software engineering student"
- "Astro tutorial portfolio"
- "Road accident dashboard Excel"
- "frontend developer Pakistan"

---

## 🔗 Backlink Submission Checklist

### Submit Portfolio To:
- [ ] GitHub profile README
- [ ] LinkedIn profile (Featured section)
- [ ] Dev.to profile
- [ ] Hashnode profile
- [ ] Twitter/X bio
- [ ] Personal email signature
- [ ] University alumni directory
- [ ] Local developer community directory

### Weekly Activities:
- [ ] Comment meaningfully on 3 relevant blog posts
- [ ] Contribute to 1 open-source repo
- [ ] Share blog post on LinkedIn
- [ ] Share blog post on Twitter
- [ ] Post in relevant Reddit threads (r/webdev, r/astrojs, r/cscareerquestions)

### Monthly Activities:
- [ ] Write guest post for developer blog
- [ ] Participate in 1 developer Q&A (Stack Overflow, Dev.to)
- [ ] Update old blog posts with new information
- [ ] Review and update project descriptions

---

## ✅ Technical SEO Checklist

### Implemented:
- [x] `robots.txt` with sitemap reference
- [x] `sitemap.xml` with all pages
- [x] `rss.xml` feed for blog posts
- [x] Canonical URLs on all pages
- [x] Meta robots: `index, follow`
- [x] Open Graph tags (title, description, type, url)
- [x] Twitter Card tags
- [x] JSON-LD structured data (Person, WebSite, Organization, BreadcrumbList)
- [x] Semantic HTML5 (header, nav, main, section, article, footer)
- [x] Descriptive alt text on all images
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Internal linking between pages
- [x] Mobile-responsive design
- [x] Fast loading (optimized CSS, minimal JS)
- [x] HTTPS (via Vercel deployment)
- [x] PWA webmanifest
- [x] Google Analytics 4 tracking
- [x] Dynamic meta tag updates per route
- [x] hreflang tags for Persian content

### Core Web Vitals Targets:
- **LCP:** < 2.5s ✅ (static site, minimal JS)
- **CLS:** < 0.1 ✅ (explicit dimensions on images)
- **INP:** < 200ms ✅ (minimal JavaScript)

---

## 📈 Monthly SEO Review Template

### Metrics to Track:
- Organic traffic (sessions)
- Keyword rankings (top 10)
- Backlinks gained
- Indexed pages
- Crawl errors
- Page speed scores
- Bounce rate
- Average session duration

### Actions:
1. Update underperforming pages
2. Add internal links to new content
3. Optimize images and scripts
4. Fix any crawl errors
5. Submit new content for indexing

---

## 🌐 Internationalization (i18n)

### Current Languages:
- **English (en)** — Primary
- **Persian/Farsi (fa)** — Blog posts

### Implementation:
- `hreflang` tags in sitemap for Persian content
- `lang` attribute set on blog post containers
- `dir="rtl"` for Persian content
- Vazirmatn font loaded for Persian text

### Future:
- Add Urdu (ur) support
- Add `hreflang` tags in HTML head
- Create language switcher

---

*Last updated: June 2025*
*Next review: July 2025*
