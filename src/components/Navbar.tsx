import React, { useState, useEffect } from 'react';
import { Menu, X, User, GraduationCap, Briefcase, Award, Wrench, Users, Mail, BookOpen, FileText, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '@/data/portfolioData';

const navItems = [
  { key: 'profile', icon: User, href: '#profile' },
  { key: 'education', icon: GraduationCap, href: '#education' },
  { key: 'professionalDev', icon: TrendingUp, href: '#professional-development' },
  { key: 'experience', icon: Briefcase, href: '#experience' },
  { key: 'certificates', icon: Award, href: '#certificates' },
  { key: 'skills', icon: Wrench, href: '#skills' },
  { key: 'family', icon: Users, href: '#family' },
  { key: 'contact', icon: Mail, href: '#contact' },
  { key: 'blog', icon: BookOpen, href: '/blog', isRoute: true },
  { key: 'research', icon: FileText, href: '/research', isRoute: true },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute?: boolean) => {
    if (!isRoute && location.pathname !== '/') {
      window.location.href = '/' + href;
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-md' : 'bg-card/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Home Link - No Logo */}
          <Link 
            to="/" 
            className="p-2 text-foreground/70 hover:text-primary hover:bg-accent rounded-lg transition-all"
            aria-label="Home"
          >
            <User size={22} />
          </Link>

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
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
