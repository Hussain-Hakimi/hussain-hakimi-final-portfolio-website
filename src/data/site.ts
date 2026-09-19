import { siteConfig as legacySiteConfig } from './legacy';
import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  ...legacySiteConfig,
  url: 'https://hussainhakimidev.vercel.app',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  resume: '/resume%20(5).pdf',
};
