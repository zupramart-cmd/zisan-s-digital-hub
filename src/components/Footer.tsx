import React, { useState } from 'react';
import { Mail, Linkedin, Github, Facebook, Youtube, MessageCircle, Send, ArrowUp, Sparkles, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { toast } from 'sonner';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { social, profile } = portfolioData;
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast(
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-100 rounded-full">
            <Sparkles className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <p className="font-semibold text-foreground">
              {language === 'en' ? 'Successfully Subscribed!' : 'সফলভাবে সাবস্ক্রাইব হয়েছে!'}
            </p>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Thank you for joining our newsletter.' : 'নিউজলেটারে যোগদানের জন্য ধন্যবাদ।'}
            </p>
          </div>
        </div>,
        {
          style: {
            background: 'hsl(var(--card))',
            border: '2px solid rgb(251 191 36)',
            boxShadow: '0 4px 20px rgba(251, 191, 36, 0.2)',
          },
          duration: 4000,
        }
      );
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { icon: Mail, href: `mailto:${profile.email}`, name: 'Email' },
    { icon: Linkedin, href: social.linkedin, name: 'LinkedIn' },
    { icon: Github, href: social.github, name: 'GitHub' },
    { icon: Facebook, href: social.facebook, name: 'Facebook' },
    { icon: Youtube, href: social.youtube, name: 'YouTube' },
    { icon: MessageCircle, href: social.whatsapp, name: 'WhatsApp' },
  ];

  const quickLinks = [
    { label: language === 'en' ? 'Profile' : 'প্রোফাইল', href: '#profile' },
    { label: language === 'en' ? 'Education' : 'শিক্ষা', href: '#education' },
    { label: language === 'en' ? 'Experience' : 'অভিজ্ঞতা', href: '#experience' },
    { label: language === 'en' ? 'Skills' : 'দক্ষতা', href: '#skills' },
    { label: language === 'en' ? 'Contact' : 'যোগাযোগ', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              {language === 'en' ? 'Quick Links' : 'দ্রুত লিঙ্ক'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              {language === 'en' ? 'Contact' : 'যোগাযোগ'}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{language === 'en' ? profile.location : profile.locationBn}</li>
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone}`} className="hover:text-primary transition-colors">
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              {language === 'en' ? 'Stay Updated' : 'আপডেট থাকুন'}
            </h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'en' ? 'Enter email' : 'ইমেইল দিন'}
                required
                className="flex-1 px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-2 mt-4">
              {socialIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent/50 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-all"
                    aria-label={item.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-accent/30 border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © {currentYear} {language === 'en' ? profile.name : profile.nameBn}. 
              {language === 'en' ? ' All rights reserved.' : ' সর্বস্বত্ব সংরক্ষিত।'}
            </p>
            <div className="flex items-center gap-3">
              <Link 
                to="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <Shield size={12} />
                {language === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
              </Link>
              <button
                onClick={scrollToTop}
                className="p-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                aria-label="Scroll to top"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
