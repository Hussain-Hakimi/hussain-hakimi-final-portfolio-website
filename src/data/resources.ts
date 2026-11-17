export type ResourceStatus = 'planned' | 'published';

export interface LearningLesson {
  slug: string;
  /** Keeps the original /resources/:slug URLs working after the library redesign. */
  legacySlug?: string;
  title: string;
  summary: string;
  durationMinutes: number;
  status: ResourceStatus;
  objectives: string[];
  videoUrl?: string;
  notesUrl?: string;
  codeUrl?: string;
}

export interface LearningChapter {
  slug: string;
  title: string;
  summary: string;
  lessons: LearningLesson[];
}

export interface LearningCourse {
  slug: string;
  title: string;
  category: string;
  level: string;
  summary: string;
  description: string;
  estimatedHours: number;
  chapters: LearningChapter[];
}

export const learningCourses: LearningCourse[] = [
  {
    slug: 'python-foundations',
    title: 'Python Foundations',
    category: 'Python',
    level: 'Beginner',
    summary: 'Build a strong Python foundation through clear explanations, practical examples, and small exercises.',
    description: 'A structured path from Python syntax to reusable functions, collections, and working with files. Lessons will be published with video explanations, downloadable notes, and code examples as they are prepared.',
    estimatedHours: 6,
    chapters: [
      {
        slug: 'getting-started',
        title: '01 · Getting started',
        summary: 'Understand Python, set up your environment, and write your first programs.',
        lessons: [
          {
            slug: 'what-is-python',
            title: 'What Is Python?',
            summary: 'Explore what Python is, where it is used, and how a Python program runs.',
            durationMinutes: 15,
            status: 'planned',
            objectives: ['Describe Python and common use cases', 'Understand source code and the Python interpreter', 'Run a simple Python script'],
          },
          {
            slug: 'variables-and-data-types',
            title: 'Variables and Data Types',
            summary: 'Store information and work with strings, numbers, booleans, and type conversion.',
            durationMinutes: 25,
            status: 'planned',
            objectives: ['Create and name variables clearly', 'Recognize common built-in data types', 'Convert values between compatible types'],
          },
        ],
      },
      {
        slug: 'core-building-blocks',
        title: '02 · Core building blocks',
        summary: 'Control program flow and organize collections of related values.',
        lessons: [
          {
            slug: 'conditions-and-loops',
            title: 'Conditions and Loops',
            summary: 'Make decisions with if statements and repeat work with for and while loops.',
            durationMinutes: 35,
            status: 'planned',
            objectives: ['Use if, elif, and else', 'Choose between for and while loops', 'Avoid common infinite-loop mistakes'],
          },
          {
            slug: 'lists-and-dictionaries',
            title: 'Lists and Dictionaries',
            summary: 'Store, access, update, and iterate over collections of data.',
            durationMinutes: 35,
            status: 'planned',
            objectives: ['Create and access lists', 'Use dictionaries for key-value data', 'Choose a suitable collection for a task'],
          },
        ],
      },
      {
        slug: 'reusable-code',
        title: '03 · Reusable code',
        summary: 'Write reusable functions and work with files safely.',
        lessons: [
          {
            slug: 'python-functions',
            legacySlug: 'python-functions',
            title: 'Python Functions',
            summary: 'Learn function syntax, parameters, return values, scope, and practical decomposition.',
            durationMinutes: 40,
            status: 'planned',
            objectives: ['Define and call functions', 'Pass arguments and return values', 'Break a problem into smaller reusable functions'],
          },
          {
            slug: 'file-handling',
            title: 'File Handling',
            summary: 'Read and write text files and understand why context managers are useful.',
            durationMinutes: 30,
            status: 'planned',
            objectives: ['Open files in common modes', 'Read and write text safely', 'Use with to manage file resources'],
          },
        ],
      },
    ],
  },
  {
    slug: 'csharp-foundations',
    title: 'C# and Object-Oriented Programming',
    category: 'C#',
    level: 'Beginner',
    summary: 'Learn C# fundamentals and the object-oriented concepts used to build maintainable applications.',
    description: 'A practical C# learning path that starts with the language basics and moves toward classes, objects, encapsulation, inheritance, and polymorphism.',
    estimatedHours: 8,
    chapters: [
      {
        slug: 'csharp-basics',
        title: '01 · C# essentials',
        summary: 'Get comfortable with the language, variables, expressions, and control flow.',
        lessons: [
          {
            slug: 'csharp-introduction',
            title: 'Introduction to C# and .NET',
            summary: 'Understand C#, the .NET platform, and the structure of a basic console application.',
            durationMinutes: 20,
            status: 'planned',
            objectives: ['Explain the relationship between C# and .NET', 'Identify the parts of a simple program', 'Build and run a console application'],
          },
          {
            slug: 'csharp-variables',
            title: 'Variables, Types, and Operators',
            summary: 'Work with common C# types, conversions, and expressions.',
            durationMinutes: 30,
            status: 'planned',
            objectives: ['Declare strongly typed variables', 'Use arithmetic and comparison operators', 'Understand basic type conversion'],
          },
        ],
      },
      {
        slug: 'object-oriented-programming',
        title: '02 · Object-oriented programming',
        summary: 'Model real-world concepts with classes, objects, and encapsulated state.',
        lessons: [
          {
            slug: 'csharp-classes',
            legacySlug: 'csharp-classes',
            title: 'Classes and Objects in C#',
            summary: 'Understand classes, objects, fields, properties, constructors, and methods.',
            durationMinutes: 45,
            status: 'planned',
            objectives: ['Define a class and instantiate objects', 'Use properties and constructors', 'Model a small domain with methods'],
          },
          {
            slug: 'csharp-encapsulation',
            title: 'Encapsulation and Access Modifiers',
            summary: 'Protect object state and expose a clear public interface.',
            durationMinutes: 35,
            status: 'planned',
            objectives: ['Explain encapsulation', 'Use public, private, and protected appropriately', 'Validate state through methods and properties'],
          },
        ],
      },
      {
        slug: 'oop-relationships',
        title: '03 · Reuse and polymorphism',
        summary: 'Understand inheritance, abstraction, and polymorphic behavior.',
        lessons: [
          {
            slug: 'csharp-inheritance',
            title: 'Inheritance and Composition',
            summary: 'Reuse behavior while learning when composition is a better choice.',
            durationMinutes: 40,
            status: 'planned',
            objectives: ['Create a derived class', 'Override inherited behavior', 'Compare inheritance with composition'],
          },
          {
            slug: 'csharp-polymorphism',
            title: 'Polymorphism and Interfaces',
            summary: 'Write flexible code using base types, virtual methods, and interfaces.',
            durationMinutes: 45,
            status: 'planned',
            objectives: ['Explain runtime polymorphism', 'Implement an interface', 'Program against abstractions'],
          },
        ],
      },
    ],
  },
  {
    slug: 'sql-fundamentals',
    title: 'SQL and Database Fundamentals',
    category: 'SQL',
    level: 'Beginner',
    summary: 'Learn relational database concepts and write practical SQL queries with confidence.',
    description: 'A beginner-friendly path through relational data, table design, querying, joins, and data integrity. Examples will use broadly applicable SQL concepts.',
    estimatedHours: 7,
    chapters: [
      {
        slug: 'database-basics',
        title: '01 · Database foundations',
        summary: 'Understand relational databases, tables, records, and keys.',
        lessons: [
          {
            slug: 'relational-databases',
            title: 'What Is a Relational Database?',
            summary: 'Learn tables, rows, columns, relationships, and the role of a DBMS.',
            durationMinutes: 20,
            status: 'planned',
            objectives: ['Define a relational database', 'Identify tables, rows, and columns', 'Explain primary and foreign keys'],
          },
          {
            slug: 'sql-basics',
            legacySlug: 'sql-basics',
            title: 'SQL Fundamentals',
            summary: 'Write SELECT queries and filter, sort, and limit returned records.',
            durationMinutes: 35,
            status: 'planned',
            objectives: ['Write SELECT and FROM clauses', 'Filter rows with WHERE', 'Sort results with ORDER BY'],
          },
        ],
      },
      {
        slug: 'working-with-data',
        title: '02 · Working with data',
        summary: 'Insert, update, delete, and combine data from related tables.',
        lessons: [
          {
            slug: 'insert-update-delete',
            title: 'INSERT, UPDATE, and DELETE',
            summary: 'Change table data safely and understand the importance of WHERE clauses.',
            durationMinutes: 30,
            status: 'planned',
            objectives: ['Insert new rows', 'Update selected records', 'Delete records without affecting unintended rows'],
          },
          {
            slug: 'sql-joins',
            title: 'SQL Joins',
            summary: 'Combine related records with INNER, LEFT, and other common joins.',
            durationMinutes: 40,
            status: 'planned',
            objectives: ['Explain why joins are needed', 'Use INNER JOIN and LEFT JOIN', 'Recognize duplicate rows caused by relationships'],
          },
        ],
      },
      {
        slug: 'database-design',
        title: '03 · Database design',
        summary: 'Design consistent tables and protect data integrity.',
        lessons: [
          {
            slug: 'normalization',
            title: 'Database Normalization',
            summary: 'Understand common data anomalies and the purpose of normalization.',
            durationMinutes: 40,
            status: 'planned',
            objectives: ['Recognize insertion, update, and deletion anomalies', 'Explain first, second, and third normal forms', 'Improve a simple table design'],
          },
          {
            slug: 'constraints-and-transactions',
            title: 'Constraints and Transactions',
            summary: 'Use constraints and transactions to keep relational data consistent.',
            durationMinutes: 35,
            status: 'planned',
            objectives: ['Use primary, foreign, unique, and check constraints', 'Explain ACID at a high level', 'Group related changes in a transaction'],
          },
        ],
      },
    ],
  },
];

export interface LegacyLearningResource {
  slug: string;
  courseSlug: string;
  lessonSlug: string;
  title: string;
  category: string;
  level: string;
  summary: string;
  status: ResourceStatus;
  estimatedMinutes: number;
  videoUrl?: string;
  notesUrl?: string;
  codeUrl?: string;
}

/** Compatibility data for the original /resources/:slug URLs and existing SEO logic. */
export const learningResources: LegacyLearningResource[] = learningCourses.flatMap((course) =>
  course.chapters.flatMap((chapter) =>
    chapter.lessons.map((lesson) => ({
      slug: lesson.legacySlug ?? lesson.slug,
      courseSlug: course.slug,
      lessonSlug: lesson.slug,
      title: lesson.title,
      category: course.category,
      level: course.level,
      summary: lesson.summary,
      status: lesson.status,
      estimatedMinutes: lesson.durationMinutes,
      videoUrl: lesson.videoUrl,
      notesUrl: lesson.notesUrl,
      codeUrl: lesson.codeUrl,
    })),
  ),
);

export function countCourseLessons(course: LearningCourse): number {
  return course.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0);
}

export function countPublishedLessons(course: LearningCourse): number {
  return course.chapters.reduce(
    (total, chapter) => total + chapter.lessons.filter((lesson) => lesson.status === 'published').length,
    0,
  );
}
