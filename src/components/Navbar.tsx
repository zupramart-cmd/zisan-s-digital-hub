import React, { useState, useEffect } from 'react';
import { X, User, GraduationCap, Briefcase, Award, Wrench, Mail, BookOpen, FolderKanban, TrendingUp, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const HamburgerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="15" y2="12" />
    <line x1="3" y1="18" x2="18" y2="18" />
  </svg>
);

const navItems = [
  { key: 'profile', icon: User, href: '/profile' },
  { key: 'education', icon: GraduationCap, href: '/education' },
  { key: 'skills', icon: Wrench, href: '/skills' },
  { key: 'experience', icon: Briefcase, href: '/experience' },
  { key: 'projects', icon: FolderKanban, href: '/projects' },
  { key: 'learning', icon: TrendingUp, href: '/learning' },
  { key: 'certifications', icon: Award, href: '/certifications' },
  { key: 'contact', icon: Mail, href: '/contact' },
  { key: 'blog', icon: BookOpen, href: '/blog' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  // Check if we're on a subpage (not the main portfolio page)
  const isSubPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-md' : 'bg-card/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Home/Profile Icon for mobile on subpages */}
          <div className="w-10">
            {isSubPage && (
              <Link
                to="/"
                className="lg:hidden p-2 text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all"
                aria-label="Go to home"
              >
                <Home size={20} />
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              if (item.isRoute) {
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                  >
                    <Icon size={16} />
                    <span>{t(`nav.${item.key}`)}</span>
                  </Link>
                );
              }
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                >
                  <Icon size={16} />
                  <span>{t(`nav.${item.key}`)}</span>
                </a>
              );
            })}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold bg-accent text-accent-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              {language === 'en' ? 'EN' : 'বাং'}
              <span className="text-xs opacity-70">|</span>
              {language === 'en' ? 'বাংলা' : 'EN'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <HamburgerIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-card shadow-lg border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                if (item.isRoute) {
                  return (
                    <Link
                      key={item.key}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-foreground/70 hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                    >
                      <Icon size={20} />
                      <span className="font-medium">{t(`nav.${item.key}`)}</span>
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-3 px-4 py-3 text-foreground/70 hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                  >
                    <Icon size={20} />
                    <span className="font-medium">{t(`nav.${item.key}`)}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
