export type ResourceStatus = 'planned' | 'published';

export interface LearningResource {
  slug: string;
  title: string;
  category: string;
  level: string;
  summary: string;
  status: ResourceStatus;
  estimatedMinutes?: number;
  videoUrl?: string;
  notesUrl?: string;
  codeUrl?: string;
}

export const learningResources: LearningResource[] = [
  {
    slug: 'csharp-classes',
    title: 'Classes and Objects in C#',
    category: 'C#',
    level: 'Beginner',
    summary: 'A lesson structure for learning classes, objects, properties, constructors, and methods.',
    status: 'planned',
  },
  {
    slug: 'python-functions',
    title: 'Python Functions',
    category: 'Python',
    level: 'Beginner',
    summary: 'A lesson structure for function syntax, parameters, return values, and practical exercises.',
    status: 'planned',
  },
  {
    slug: 'sql-basics',
    title: 'SQL Fundamentals',
    category: 'SQL',
    level: 'Beginner',
    summary: 'A lesson structure for queries, filtering, sorting, and working with relational data.',
    status: 'planned',
  },
];
