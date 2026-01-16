import React, { useState } from 'react';
import { Mail, Linkedin, Github, Facebook, Youtube, MessageCircle, Send, Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { toast } from 'sonner';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const { social, profile } = portfolioData;
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(language === 'en' ? 'Thank you for subscribing!' : 'সাবস্ক্রাইব করার জন্য ধন্যবাদ!');
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Signature */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                RZ
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  {language === 'en' ? profile.name.split(' ').slice(-1)[0] : 'জিসান'}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Web Developer' : 'ওয়েব ডেভেলপার'}
                </p>
              </div>
            </div>
            <img
              src={profile.signatureImage}
              alt="Signature"
              className="h-10 opacity-60 mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === 'en' 
                ? 'Creating smart digital solutions that simplify work and empower communities.' 
                : 'স্মার্ট ডিজিটাল সমাধান তৈরি করি যা কাজ সহজ করে এবং সম্প্রদায়কে ক্ষমতায়িত করে।'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
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
            <h4 className="font-semibold text-foreground mb-4">
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
            <h4 className="font-semibold text-foreground mb-4">
              {language === 'en' ? 'Stay Updated' : 'আপডেট থাকুন'}
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              {language === 'en' 
                ? 'Subscribe for updates and news.' 
                : 'আপডেট এবং খবরের জন্য সাবস্ক্রাইব করুন।'}
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                required
                className="flex-1 px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {socialIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-accent/50 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-all"
                  aria-label={item.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-accent/30 border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © {currentYear} {language === 'en' ? profile.name : profile.nameBn}. 
              {language === 'en' ? ' All rights reserved.' : ' সর্বস্বত্ব সংরক্ষিত।'}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                {language === 'en' ? 'Made with' : 'তৈরি'} 
                <Heart size={12} className="text-primary fill-primary" /> 
                {language === 'en' ? 'in Bangladesh' : 'বাংলাদেশে'}
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
