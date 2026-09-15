import { navigation as legacyNavigation } from './legacy';

export const navigation = [
  ...legacyNavigation.slice(0, 4),
  { label: 'Credentials', path: '/certifications', icon: '🏅' },
  { label: 'Contact', path: '/contact', icon: '✉️' },
];
