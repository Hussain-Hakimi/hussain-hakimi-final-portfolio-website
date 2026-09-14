import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef } from 'react';
import { navigation, siteConfig } from '../data';

// ============================================
// Theme Hook
// ============================================
function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  return { theme, toggle };
}

// ============================================
// Command Palette
// ============================================
function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = navigation.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(i => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      onClose();
      window.location.href = filtered[selectedIndex].path;
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="command-overlay" onClick={onClose} role="dialog" aria-label="Command palette">
      <div className="command-palette" onClick={e => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <div className="command-input-wrapper">
          <span className="command-input-icon">🔍</span>
          <input
            ref={inputRef}
            className="command-input"
            type="text"
            placeholder="Search pages..."
            value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIndex(0); }}
            aria-label="Search navigation"
          />
        </div>
        <div className="command-results" role="listbox">
          {filtered.map((item, i) => (
            <div
              key={item.path}
              className={`command-item ${i === selectedIndex ? 'selected' : ''}`}
              onClick={() => { onClose(); window.location.href = item.path; }}
              role="option"
              aria-selected={i === selectedIndex}
            >
              <span className="command-item-icon">{item.icon}</span>
              <span className="command-item-text">{item.label}</span>
              <span className="command-item-hint">{item.path}</span>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="command-item" style={{ justifyContent: 'center', color: 'var(--text-muted)' }}>
              No results found
            </div>
          )}
        </div>
        <div className="command-footer">
          <span><span className="command-kbd">↑↓</span> Navigate</span>
          <span><span className="command-kbd">↵</span> Select</span>
          <span><span className="command-kbd">esc</span> Close</span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Header
// ============================================
function Header({ theme, toggleTheme, onCommandPalette }: {
  theme: string;
  toggleTheme: () => void;
  onCommandPalette: () => void;
}) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <Link to="/" className="header-logo" aria-label="Home">
          H<span>.</span>Hakimi
        </Link>

        <nav className="nav-links" role="navigation" aria-label="Main navigation">
          {navigation.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="btn btn-ghost btn-sm"
            onClick={onCommandPalette}
            aria-label="Open command palette"
            title="Command palette (⌘K)"
            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span style={{ fontSize: '0.85rem' }}>⌘K</span>
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-nav-overlay" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
            <div className="mobile-nav-handle" aria-hidden="true"></div>
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">Navigation</span>
              <button
                className="mobile-nav-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="mobile-nav-links">
              {navigation.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="nav-link-icon" aria-hidden="true">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mobile-nav-footer">
              <a 
                href="https://github.com/Hussain-Hakimi" 
                className="social-pill" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">⚡</span> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/hussain-hakimi" 
                className="social-pill" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">💼</span> LinkedIn
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

// ============================================
// Footer
// ============================================
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">{siteConfig.name}</a>. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  );
}

// ============================================
// Layout (wraps all pages)
// ============================================
export default function Layout() {
  const { theme, toggle } = useTheme();
  const [commandOpen, setCommandOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setCommandOpen(prev => !prev);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header theme={theme} toggleTheme={toggle} onCommandPalette={() => setCommandOpen(true)} />
      <main id="main-content" role="main">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette isOpen={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
}
