import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Small scroll-to-top button that sits ABOVE the chatbot floating button.
 * Only appears once user scrolls past 300px.
 */
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-8 z-40 p-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-full shadow-md border border-primary/20 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} />
    </button>
  );
};

export default ScrollToTopButton;
