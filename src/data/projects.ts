import { projects as legacyProjects } from './legacy';
import type { Project } from '../types';

export const projects: Project[] = legacyProjects.map((project) => ({
  ...project,
  liveUrl: project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : undefined,
  repoUrl: project.repoUrl && project.repoUrl !== '#' ? project.repoUrl : undefined,
}));
