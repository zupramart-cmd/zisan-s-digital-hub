import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { profile } = portfolioData;

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: language === 'en' ? 'Profile' : 'প্রোফাইল', path: '/profile', sectionId: 'profile' },
    { label: language === 'en' ? 'Education' : 'শিক্ষা', path: '/education', sectionId: 'education' },
    { label: language === 'en' ? 'Experience' : 'অভিজ্ঞতা', path: '/experience', sectionId: 'experience' },
    { label: language === 'en' ? 'Skills' : 'দক্ষতা', path: '/skills', sectionId: 'skills' },
    { label: language === 'en' ? 'Contact' : 'যোগাযোগ', path: '/contact', sectionId: 'contact' },
  ];

  const pageLinks = [
    { label: language === 'en' ? 'Projects' : 'প্রজেক্টস', path: '/projects' },
    { label: language === 'en' ? 'Blog' : 'ব্লগ', path: '/blog' },
    { label: language === 'en' ? 'Certificates' : 'সনদপত্র', path: '/certificates', sectionId: 'certificates' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Quick Section Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              {language === 'en' ? 'Sections' : 'সেকশনস'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              {language === 'en' ? 'Pages' : 'পেজসমূহ'}
            </h4>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Signature */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              {language === 'en' ? 'Signature' : 'স্বাক্ষর'}
            </h4>
            <img
              src={profile.signatureImage}
              alt={language === 'en' ? 'Signature of Md Ridoan Mahmud Zisan' : 'মোঃ রিদোয়ান মাহমুদ জিসানের স্বাক্ষর'}
              className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
              draggable={false}
            />
            <p className="text-xs text-muted-foreground mt-3 text-center md:text-right">
              {language === 'en' ? profile.name : profile.nameBn}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-accent/30 border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © {currentYear} {language === 'en' ? profile.name : profile.nameBn}.{' '}
              {language === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
            </p>
            <Link
              to="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <Shield size={12} />
              {language === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
