import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top on route change, or scrolls to matching section anchor.
 * Section routes (/profile, /education, etc.) trigger smooth scroll on the
 * home page to the section with the corresponding id.
 */
const SECTION_ROUTES = [
  'profile',
  'education',
  'professional-development',
  'experience',
  'certificates',
  'skills',
  'family',
  'contact',
];

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = pathname.replace(/^\/+/, '').replace(/\/+$/, '');

    if (SECTION_ROUTES.includes(cleanPath)) {
      // Wait for sections to render before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(cleanPath);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
