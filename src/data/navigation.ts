import { navigation as legacyNavigation } from './legacy';

export const navigation = [
  ...legacyNavigation.slice(0, 4),
  { label: 'Resources', path: '/resources', icon: '📚' },
  { label: 'Certifications', path: '/certifications', icon: '🏅' },
  { label: 'Contact', path: '/contact', icon: '✉️' },
];
