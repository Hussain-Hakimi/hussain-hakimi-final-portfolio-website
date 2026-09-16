import { useEffect, useRef } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { navigation, siteConfig } from '../../data';

interface MobileMenuProps { isOpen: boolean; onClose: () => void; }

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const timeout = window.setTimeout(() => closeButton.current?.focus(), 50);
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !panel.current) return;
      const focusable = panel.current.querySelectorAll<HTMLElement>('button, a[href]');
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeydown);
    return () => { window.clearTimeout(timeout); document.body.style.overflow = ''; document.removeEventListener('keydown', onKeydown); };
  }, [isOpen, onClose]);

  return (
    <div className={`mobile-navigation ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <button className="mobile-navigation-backdrop" aria-label="Close navigation" tabIndex={isOpen ? 0 : -1} onClick={onClose} />
      <aside ref={panel} id="mobile-navigation-dialog" className="mobile-navigation-panel" aria-label="Mobile navigation" aria-modal="true" role="dialog">
        <div className="mobile-navigation-topline">
          <span className="mobile-navigation-eyebrow">Menu / 2026</span>
          <button ref={closeButton} className="mobile-navigation-close" onClick={onClose} tabIndex={isOpen ? 0 : -1} aria-label="Close navigation"><X size={20} /></button>
        </div>
        <div className="mobile-navigation-intro">
          <Link to="/" onClick={onClose} className="mobile-navigation-brand">H<span>.</span>Hakimi</Link>
          <p>Designing dependable digital experiences and building useful things for the web.</p>
        </div>
        <nav className="mobile-navigation-links" aria-label="Mobile primary navigation">
          {navigation.map((item, index) => <NavLink key={item.path} to={item.path} onClick={onClose} tabIndex={isOpen ? 0 : -1} className={({ isActive }) => `mobile-navigation-link ${isActive ? 'active' : ''}`}>
            <span className="mobile-navigation-index">0{index + 1}</span>
            <span className="mobile-navigation-label">{item.label}</span>
            <ArrowUpRight className="mobile-navigation-arrow" size={20} aria-hidden="true" />
          </NavLink>)}
        </nav>
        <div className="mobile-navigation-footer">
          <div>
            <span className="mobile-navigation-footer-label">Elsewhere</span>
            <div className="mobile-navigation-socials">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1} aria-label="GitHub"><Github size={18} /></a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1} aria-label="LinkedIn"><Linkedin size={18} /></a>
              {siteConfig.email && <a href={`mailto:${siteConfig.email}`} tabIndex={isOpen ? 0 : -1} aria-label="Email"><Mail size={18} /></a>}
            </div>
          </div>
          <span className="mobile-navigation-availability"><span />Available for select work</span>
        </div>
      </aside>
    </div>
  );
}
