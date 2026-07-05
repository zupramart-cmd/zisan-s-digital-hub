import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Facebook, Youtube, MessageCircle, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { social, profile, agency } = portfolioData;

  const socialIcons = [
    { icon: Mail, href: `mailto:${profile.email}`, name: 'Email' },
    { icon: Linkedin, href: social.linkedin, name: 'LinkedIn' },
    { icon: Github, href: social.github, name: 'GitHub' },
    { icon: Facebook, href: social.facebook, name: 'Facebook' },
    { icon: Youtube, href: social.youtube, name: 'YouTube' },
    { icon: MessageCircle, href: social.whatsapp, name: 'WhatsApp' },
  ];

  const quickLinks = [
    { label: language === 'en' ? 'Profile' : 'প্রোফাইল', href: '/#profile', route: false },
    { label: language === 'en' ? 'Education' : 'শিক্ষা', href: '/#education', route: false },
    { label: language === 'en' ? 'Experience' : 'অভিজ্ঞতা', href: '/#experience', route: false },
    { label: language === 'en' ? 'Certificates' : 'সনদপত্র', href: '/#certificates', route: false },
    { label: language === 'en' ? 'Skills' : 'দক্ষতা', href: '/#skills', route: false },
    { label: language === 'en' ? 'Projects' : 'প্রজেক্টস', href: '/projects', route: true },
    { label: language === 'en' ? 'Blog' : 'ব্লগ', href: '/blog', route: true },
    { label: language === 'en' ? 'Contact' : 'যোগাযোগ', href: '/#contact', route: false },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-8">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-10 h-10 rounded-full object-cover border border-border"
              />
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {language === 'en' ? profile.name : profile.nameBn}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Web App Developer' : 'ওয়েব অ্যাপ ডেভেলপার'}
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              {language === 'en'
                ? 'Founder @ OnonnoBit — building impactful web applications for businesses and communities.'
                : 'OnonnoBit-এর প্রতিষ্ঠাতা — ব্যবসা ও কমিউনিটির জন্য ওয়েব অ্যাপ তৈরি করি।'}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {socialIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent/50 text-muted-foreground hover:text-primary-foreground hover:bg-primary rounded-lg transition-all"
                    aria-label={item.name}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
              {language === 'en' ? 'Quick Links' : 'দ্রুত লিঙ্ক'}
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.route ? (
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
              {language === 'en' ? 'Contact' : 'যোগাযোগ'}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span>{language === 'en' ? profile.location : profile.locationBn}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors break-all">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <a href={`tel:${profile.phone}`} className="hover:text-primary transition-colors">
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Agency */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
              {language === 'en' ? 'Agency' : 'এজেন্সি'}
            </h4>
            <a
              href={agency.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <img
                src={agency.logo}
                alt={agency.name}
                className="w-9 h-9 rounded-lg border border-border bg-white p-1"
              />
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary">{agency.name}</p>
                <p className="text-xs text-muted-foreground">{agency.tagline}</p>
              </div>
            </a>
            <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
              <li>
                <a href={`mailto:${agency.email}`} className="hover:text-primary transition-colors break-all">
                  {agency.email}
                </a>
              </li>
              <li>{agency.whatsapp}</li>
              <li>{agency.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-accent/30 border-t border-border">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {currentYear} {language === 'en' ? profile.name : profile.nameBn}.
            {language === 'en' ? ' All rights reserved.' : ' সর্বস্বত্ব সংরক্ষিত।'}
          </p>
          <img
            src="/signature.png"
            alt={language === 'en' ? 'Signature' : 'স্বাক্ষর'}
            className="h-10 opacity-80"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
