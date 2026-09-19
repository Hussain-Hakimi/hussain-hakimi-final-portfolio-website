import { projects as legacyProjects } from './legacy';
import type { Project } from '../types';
import portfolioScreenshot from '../assets/projects/Hussain Portfolio website .jpeg';
import dashboardScreenshot from '../assets/projects/dashboard.png';
import storeManagementScreenshot from '../assets/projects/store management system.PNG';

const projectImages: Record<string, string> = {
  'mh-mega-mall': storeManagementScreenshot,
  'dev-portfolio': portfolioScreenshot,
  'road-accident-dashboard': dashboardScreenshot,
};

// Used whenever a project has no matching entry in projectImages above (e.g. a
// newly added project without a screenshot yet), so <img> never renders with an
// empty src and a broken-image icon.
function buildPlaceholderImage(title: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="#eef2ff"/><text x="400" y="250" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#4f46e5" text-anchor="middle">${title}</text><text x="400" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#6366f1" text-anchor="middle">Preview coming soon</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const projects: Project[] = legacyProjects.map((project) => ({
  ...project,
  image: projectImages[project.slug] ?? buildPlaceholderImage(project.title),
  liveUrl: project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : undefined,
  repoUrl: project.repoUrl && project.repoUrl !== '#' ? project.repoUrl : undefined,
}));
