import React, { useState } from 'react';
import { Mail, Linkedin, Github, Facebook, Youtube, MessageCircle, Send } from 'lucide-react';
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

  const socialIcons = [
    { icon: Mail, href: social.google },
    { icon: Linkedin, href: social.linkedin },
    { icon: Github, href: social.github },
    { icon: Facebook, href: social.facebook },
    { icon: Youtube, href: social.youtube },
    { icon: MessageCircle, href: social.whatsapp },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4">
            {socialIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Signature */}
          <div className="flex justify-center">
            <div className="text-center">
              <img
                src={profile.signatureImage}
                alt="Signature"
                className="h-12 mx-auto mb-2 opacity-70 pointer-events-auto"
              />
              <p className="text-sm text-muted-foreground font-medium">
                {language === 'en' ? profile.name : profile.nameBn}
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex justify-center md:justify-end">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                required
                className="px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm w-48"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
