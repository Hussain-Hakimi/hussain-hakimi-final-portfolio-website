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

export const projects: Project[] = legacyProjects.map((project) => ({
  ...project,
  image: projectImages[project.slug] ?? '',
  liveUrl: project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : undefined,
  repoUrl: project.repoUrl && project.repoUrl !== '#' ? project.repoUrl : undefined,
}));
