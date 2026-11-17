export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  implementation: string;
  decisions: string[];
  challenges: string[];
  results: string;
  tech: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  repoUrl?: string;
}
