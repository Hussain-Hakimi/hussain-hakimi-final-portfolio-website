import { createContext, useMemo, useState, type ReactNode } from 'react';

export const CommandPaletteContext = createContext<{ isOpen: boolean; open: () => void; close: () => void } | null>(null);

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }), [isOpen]);
  return <CommandPaletteContext.Provider value={value}>{children}</CommandPaletteContext.Provider>;
}
