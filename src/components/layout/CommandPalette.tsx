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
  const [query, setQuery] = useState('');
  const results = useMemo(() => navigation.filter(item => item.label.toLowerCase().includes(query.toLowerCase())), [query]);
  const close = palette?.close ?? (() => undefined);
  useKeyboardShortcut('k', palette?.isOpen ? close : (palette?.open ?? (() => undefined)));

  useEffect(() => { if (palette?.isOpen) { setQuery(''); window.setTimeout(() => input.current?.focus(), 50); } }, [palette?.isOpen]);
  if (!palette?.isOpen) return null;
  const select = (path: string) => { navigate(path); close(); };
  return <div className="command-overlay" onMouseDown={close} role="dialog" aria-modal="true" aria-label="Page search">
    <div className="command-palette" onMouseDown={event => event.stopPropagation()}>
      <label className="command-input-wrapper"><Search size={18} /><input ref={input} className="command-input" value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => { if (event.key === 'Escape') close(); if (event.key === 'Enter' && results[0]) select(results[0].path); }} placeholder="Search pages..." /></label>
      <div className="command-results">{results.map(item => <button key={item.path} className="command-item" onClick={() => select(item.path)}><span>{item.icon}</span>{item.label}<small>{item.path}</small></button>)}{!results.length && <p className="command-empty">No matching pages.</p>}</div>
    </div>
  </div>;
}
