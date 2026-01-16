import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { social, profile } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, subject, message } = formData;
    const emailBody = `Name: ${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Check if mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Open default mail app
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
    } else {
      // Open Gmail in new tab
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(subject)}&body=${emailBody}`;
      window.open(gmailUrl, '_blank');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { name: 'Google', icon: Mail, href: social.google },
    { name: 'LinkedIn', icon: Linkedin, href: social.linkedin },
    { name: 'GitHub', icon: Github, href: social.github },
    { name: 'Facebook', icon: Facebook, href: social.facebook },
    { name: 'YouTube', icon: Youtube, href: social.youtube },
    { name: 'WhatsApp', icon: MessageCircle, href: social.whatsapp },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('contact.title')}</h2>

        <div className="mt-8 md:mt-12 max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-5 md:p-6 shadow-sm border border-border animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                  placeholder={language === 'en' ? 'Enter your name' : 'আপনার নাম লিখুন'}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                  placeholder={language === 'en' ? 'Enter subject' : 'বিষয় লিখুন'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-sm"
                  placeholder={language === 'en' ? 'Write your message...' : 'আপনার বার্তা লিখুন...'}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-2.5"
              >
                <Send size={18} />
                {t('contact.send')}
              </button>
            </form>

            {/* Social Links - Bullet Points */}
            <div className="mt-6 pt-5 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-3">{t('contact.socialLinks')}</h3>
              <ul className="space-y-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <Icon size={16} className="shrink-0" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
