import React from 'react';
import { Download, FolderKanban, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';
import { Link } from 'react-router-dom';

const ProfileSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { profile } = portfolioData;

  const handleDownloadCV = () => {
    window.open(profile.resumeLink, '_blank');
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = profile.resumeLink;
      link.download = 'Md_Ridoan_Mahmud_Zisan_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 300);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="profile" className="min-h-screen flex items-center py-20 pt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-cover pointer-events-auto"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">
              {language === 'en' ? profile.name : profile.nameBn}
            </h1>
            <h2 className="text-lg md:text-2xl text-primary font-semibold mb-6 animate-fade-in stagger-1">
              {language === 'en' ? profile.title : profile.titleBn}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 animate-fade-in stagger-2 leading-relaxed">
              {language === 'en' ? profile.fullDescription : profile.fullDescriptionBn}
            </p>

            {/* Action Buttons */}
            <div className="animate-fade-in stagger-3">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  to="/projects"
                  className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg text-sm md:text-base font-medium hover:opacity-90 transition-all shadow-sm"
                >
                  <FolderKanban size={18} />
                  {t('profile.viewProjects')}
                </Link>
                <button
                  onClick={handleDownloadCV}
                  className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 border-2 border-primary text-primary rounded-lg text-sm md:text-base font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Download size={18} />
                  {t('profile.downloadCV')}
                </button>
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 border-2 border-primary text-primary rounded-lg text-sm md:text-base font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Mail size={18} />
                  {t('profile.contactMe')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
