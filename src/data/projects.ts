import { projects as legacyProjects } from './legacy';
import type { Project } from '../types';

const projectImages: Record<string, string> = {
  'mh-mega-mall': '/images/projects/store%20management%20system.PNG',
  'dev-portfolio': '/images/projects/Hussain%20Portfolio%20website%20.jpeg',
  'road-accident-dashboard': '/images/projects/dashboard.png',
};

export const projects: Project[] = legacyProjects.map((project) => ({
  ...project,
  image: projectImages[project.slug] ?? '',
  liveUrl: project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : undefined,
  repoUrl: project.repoUrl && project.repoUrl !== '#' ? project.repoUrl : undefined,
}));
