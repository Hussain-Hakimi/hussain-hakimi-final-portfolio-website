import { ThemeProvider } from './context/ThemeContext';
import { CommandPaletteProvider } from './context/CommandPaletteContext';
import AppRouter from './router';

export default function App() {
  return <ThemeProvider><CommandPaletteProvider><AppRouter /></CommandPaletteProvider></ThemeProvider>;
}
