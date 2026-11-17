import { siteConfig as legacySiteConfig } from './legacy';
import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  ...legacySiteConfig,
  url: 'https://hussainhakimidev.vercel.app',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  youtube: 'https://www.youtube.com/@hussain_hakimi',
  instagram: 'https://www.instagram.com/hussainhakimi2026/',
  facebook: 'https://www.facebook.com/profile.php?id=61594340527133',
  resume: '/resume%20(5).pdf',
};
