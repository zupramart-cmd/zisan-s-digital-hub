import React from 'react';
import { Download, FolderKanban, Mail, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';
import { Link } from 'react-router-dom';

const ProfileSection: React.FC = () => {
  const { language } = useLanguage();
  const { profile } = portfolioData;

  const handleDownloadResume = () => {
    window.open(profile.resumeLink, '_blank');
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = profile.resumeLink;
      link.download = 'Ridoan_Zisan_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <section id="profile" className="min-h-screen flex items-center py-20 pt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="animate-fade-in">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-cover pointer-events-auto"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">
              {language === 'en' ? profile.name : profile.nameBn}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-fade-in stagger-1">
              {language === 'en' ? profile.title : profile.titleBn}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 animate-fade-in stagger-2 leading-relaxed">
              {language === 'en' ? profile.fullDescription : profile.fullDescriptionBn}
            </p>

            <div className="animate-fade-in stagger-3">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Link
                  to="/projects"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all"
                >
                  <FolderKanban size={16} />
                  <span>{language === 'en' ? 'Projects' : 'প্রজেক্টস'}</span>
                </Link>
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Download size={16} />
                  <span>{language === 'en' ? 'Resume' : 'জীবনবৃত্তান্ত'}</span>
                </button>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Mail size={16} />
                  <span>{language === 'en' ? 'Contact' : 'যোগাযোগ'}</span>
                </Link>
                <Link
                  to="/blog"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <BookOpen size={16} />
                  <span>{language === 'en' ? 'Blog' : 'ব্লগ'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
