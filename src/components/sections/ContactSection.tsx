import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, Facebook, Youtube, MessageCircle, MapPin, Phone, Globe, Twitter } from 'lucide-react';
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
    { name: 'LinkedIn', icon: Linkedin, href: social.linkedin, color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, href: social.github, color: 'hover:text-gray-800' },
    { name: 'Facebook', icon: Facebook, href: social.facebook, color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: Youtube, href: social.youtube, color: 'hover:text-red-600' },
    { name: 'Twitter', icon: Twitter, href: social.twitter, color: 'hover:text-sky-500' },
    { name: 'WhatsApp', icon: MessageCircle, href: social.whatsapp, color: 'hover:text-green-500' },
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      label: language === 'en' ? 'Location' : 'অবস্থান', 
      value: language === 'en' ? profile.location : profile.locationBn,
      href: null 
    },
    { 
      icon: Phone, 
      label: language === 'en' ? 'Phone' : 'ফোন', 
      value: profile.phone,
      href: `tel:${profile.phone}` 
    },
    { 
      icon: Mail, 
      label: language === 'en' ? 'Email' : 'ইমেইল', 
      value: profile.email,
      href: `mailto:${profile.email}` 
    },
    { 
      icon: Globe, 
      label: language === 'en' ? 'Google' : 'গুগল', 
      value: language === 'en' ? 'Search on Google' : 'গুগলে সার্চ করুন',
      href: social.google 
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('contact.title')}</h2>

        <div className="mt-8 md:mt-12">
          {/* Desktop: Side by side layout */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-sm border border-border animate-fade-in order-2 lg:order-1">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Send size={20} className="text-primary" />
                {language === 'en' ? 'Send a Message' : 'বার্তা পাঠান'}
              </h3>
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
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-6 animate-fade-in order-1 lg:order-2">
              {/* Contact Information */}
              <div className="bg-card rounded-xl p-5 md:p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Mail size={20} className="text-primary" />
                  {language === 'en' ? 'Contact Information' : 'যোগাযোগের তথ্য'}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-3 group">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    );

                    if (item.href) {
                      return (
                        <a
                          key={index}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block hover:bg-accent/50 rounded-lg p-2 -m-2 transition-colors"
                        >
                          {content}
                        </a>
                      );
                    }
                    return <div key={index}>{content}</div>;
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card rounded-xl p-5 md:p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-primary" />
                  {language === 'en' ? 'Social Links' : 'সামাজিক লিঙ্ক'}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center gap-2 p-3 bg-accent/50 rounded-lg hover:bg-accent transition-all ${link.color}`}
                      >
                        <Icon size={22} />
                        <span className="text-xs font-medium">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
