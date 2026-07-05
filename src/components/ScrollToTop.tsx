import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Section slugs on the home page — navigating to these routes should scroll to the section
const SECTION_ROUTES: Record<string, string> = {
  '/profile': 'profile',
  '/education': 'education',
  '/skills': 'skills',
  '/experience': 'experience',
  '/learning': 'learning',
  '/certifications': 'certifications',
  '/github': 'github',
  '/contact': 'contact',
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = SECTION_ROUTES[pathname];
    if (sectionId) {
      // Wait for the home page to render before scrolling
      const t = setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
