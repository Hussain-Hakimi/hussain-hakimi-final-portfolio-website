import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CommandPaletteContext } from '../../context/CommandPaletteContext';
import { navigation } from '../../data';
import useKeyboardShortcut from '../../hooks/useKeyboardShortcut';

export default function CommandPalette() {
  const palette = useContext(CommandPaletteContext);
  const navigate = useNavigate();
  const input = useRef<HTMLInputElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const results = useMemo(() => navigation.filter(item => item.label.toLowerCase().includes(query.toLowerCase())), [query]);
  const close = palette?.close ?? (() => undefined);
  const open = palette?.open ?? (() => undefined);

  useKeyboardShortcut('k', palette?.isOpen ? close : open);

  useEffect(() => {
    if (!palette?.isOpen) return;
    setQuery('');
    const timeout = window.setTimeout(() => input.current?.focus(), 50);
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab' || !dialog.current) return;
      const focusable = dialog.current.querySelectorAll<HTMLElement>('input, button, a[href], [tabindex]:not([tabindex="-1"])');
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => { window.clearTimeout(timeout); document.body.style.overflow = ''; document.removeEventListener('keydown', onKeyDown); };
  }, [palette?.isOpen, close]);

  if (!palette?.isOpen) return null;
  const select = (path: string) => { navigate(path); close(); };

  return <div className="command-overlay" onMouseDown={close} role="dialog" aria-modal="true" aria-label="Page search"><div ref={dialog} className="command-palette" onMouseDown={event => event.stopPropagation()}><label className="command-input-wrapper"><Search size={18} aria-hidden="true" /><input ref={input} className="command-input" value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => { if (event.key === 'Escape') close(); if (event.key === 'Enter' && results[0]) select(results[0].path); }} placeholder="Search pages..." aria-label="Search pages" /></label><div className="command-results">{results.map(item => <button key={item.path} className="command-item" onClick={() => select(item.path)}><span aria-hidden="true">{item.icon}</span>{item.label}<small>{item.path}</small></button>)}{!results.length && <p className="command-empty" role="status">No matching pages.</p>}</div></div></div>;
}
