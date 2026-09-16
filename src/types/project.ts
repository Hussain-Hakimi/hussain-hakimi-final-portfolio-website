export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  challenge: string;
  solution: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}
