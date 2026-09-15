import { useContext, useRef, useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { CommandPaletteContext } from '../../context/CommandPaletteContext';
import { navigation } from '../../data';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const palette = useContext(CommandPaletteContext);
  const closeMenu = () => {
    setMenuOpen(false);
    window.setTimeout(() => menuTrigger.current?.focus(), 0);
  };
  return <header className="site-header">
    <div className="site-header-inner">
      <Link to="/" className="site-logo" aria-label="Hussain Hakimi home">H<span>.</span>Hakimi</Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map(item => <NavLink key={item.path} to={item.path} className={({ isActive }) => `site-nav-link ${isActive ? 'active' : ''}`}>{item.label}</NavLink>)}
      </nav>
      <div className="site-header-actions">
        <ThemeToggle />
        <button className="header-search-button" onClick={palette?.open} aria-label="Search pages" title="Search pages (Ctrl/⌘ K)"><Search size={17} /><span>⌘K</span></button>
        <button ref={menuTrigger} className="header-icon-button mobile-menu-trigger" onClick={() => setMenuOpen(true)} aria-label="Open navigation" aria-expanded={menuOpen} aria-controls="mobile-navigation-dialog"><Menu size={21} /></button>
      </div>
    </div>
    <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
  </header>;
}
