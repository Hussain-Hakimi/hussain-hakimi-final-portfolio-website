import { siteConfig as legacySiteConfig } from './legacy';
import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  ...legacySiteConfig,
  url: 'https://hussainhakimidev.vercel.app',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  youtube: 'https://www.youtube.com/@hussain_hakimi',
  resume: '/resume%20(5).pdf',
};
