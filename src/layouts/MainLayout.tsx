import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CommandPalette from '../components/layout/CommandPalette';

export default function MainLayout() {
  return <><Header /><main id="main-content"><Outlet /></main><Footer /><CommandPalette /><Analytics /></>;
}
