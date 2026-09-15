import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ScrollToTopOnNavigate from './ScrollToTopOnNavigate';
import Home from '../pages/Home'; import About from '../pages/About'; import Projects from '../pages/Projects'; import ProjectDetail from '../pages/ProjectDetail'; import Blog from '../pages/Blog'; import BlogPost from '../pages/BlogPost'; import Certifications from '../pages/Certifications'; import Contact from '../pages/Contact'; import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return <BrowserRouter><ScrollToTopOnNavigate /><Routes><Route element={<MainLayout />}><Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="projects" element={<Projects />} /><Route path="projects/:slug" element={<ProjectDetail />} /><Route path="blog" element={<Blog />} /><Route path="blog/:slug" element={<BlogPost />} /><Route path="certifications" element={<Certifications />} /><Route path="contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Route></Routes></BrowserRouter>;
}
