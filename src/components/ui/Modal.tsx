import { useEffect, type ReactNode } from 'react';

export default function Modal({ children, onClose, label }: { children: ReactNode; onClose: () => void; label: string }) {
  useEffect(() => { const handler = (event: KeyboardEvent) => event.key === 'Escape' && onClose(); document.addEventListener('keydown', handler); return () => document.removeEventListener('keydown', handler); }, [onClose]);
  return <div className="modal-overlay" onMouseDown={onClose} role="dialog" aria-modal="true" aria-label={label}><div className="modal" onMouseDown={event => event.stopPropagation()}>{children}</div></div>;
}
