import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '../../data';
import SocialLinks from '../social/SocialLinks';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p>© {new Date().getFullYear()} <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">{siteConfig.name}</a>. Built with React & TypeScript.</p>
        <div className="site-footer-socials">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <SocialLinks variant="icons" />
          {siteConfig.email && <a href={'mailto:' + siteConfig.email} aria-label="Email"><Mail size={18} /></a>}
        </div>
      </div>
    </footer>
  );
}
