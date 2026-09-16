import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CommandPalette from '../components/layout/CommandPalette';
import useSEO from '../hooks/useSEO';

export default function MainLayout() {
  useSEO();

  return (
    <>
      <Header />
      <main id="main-content"><Outlet /></main>
      <Footer />
      <CommandPalette />
    </>
  );
}
