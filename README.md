# Hussain Hakimi Portfolio

A React + TypeScript personal portfolio built with Vite. The app uses React Router for client-side navigation, reusable layout/components, centralized portfolio data, responsive styling, and route-aware SEO metadata.

## Run locally

```bash
npm install
npm run dev
```

## Verify before deployment

```bash
npm run typecheck
npm run build
npm audit --audit-level=high
```

The repository also includes a GitHub Actions workflow that runs these checks on pushes and pull requests.

## Project structure

- `src/components/` — reusable UI and layout components
- `src/pages/` — route-level pages
- `src/data/` — centralized portfolio content
- `src/services/` — integrations such as contact submission and analytics
- `src/hooks/` — reusable React hooks
- `public/` — static files such as the sitemap, RSS feed, certificates, and resume

## Learning library

The Resources section is data-driven. Add or edit courses, chapters, and lessons in `src/data/resources.ts`.

- A course is rendered at `/resources/:courseSlug`.
- A lesson is rendered at `/resources/:courseSlug/:lessonSlug`.
- Set a lesson's status to `published` only when its materials are ready.
- Add real `videoUrl`, `notesUrl`, and `codeUrl` values to expose the corresponding lesson actions.
- The legacy lesson URLs are retained through redirects in the course route component.
- Update `public/sitemap.xml` when adding or removing course and lesson routes.

Social profile URLs are centralized in `src/data/site.ts`, so shared social links stay consistent across the footer, mobile navigation, and learning pages.

## Environment variables

Copy `.env.example` to `.env.local` and configure the public Vite values required by your deployment:

- `VITE_CONTACT_EMAIL` — the email displayed on the portfolio
- `VITE_CONTACT_ENDPOINT` — optional endpoint that accepts the contact form JSON payload
- `VITE_GA_MEASUREMENT_ID` — Google Analytics measurement ID

Do not place private API keys or server secrets in Vite `VITE_*` variables; these values are exposed to browser code.
