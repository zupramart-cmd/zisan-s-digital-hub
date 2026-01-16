import React from 'react';
import { Download, Award, FileText, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { Link } from 'react-router-dom';

const ProfileSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { profile } = portfolioData;

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
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-fade-in stagger-1">
              {t('profile.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 animate-fade-in stagger-2">
              {t('profile.description')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in stagger-3">
              <a
                href={profile.resumeLink}
                download
                className="btn-primary flex items-center gap-2"
              >
                <Download size={20} />
                {t('profile.downloadResume')}
              </a>
              <a
                href="#certificates"
                className="btn-outline flex items-center gap-2"
              >
                <Award size={20} />
                {t('profile.viewCertifications')}
              </a>
              <Link
                to="/research"
                className="btn-outline flex items-center gap-2"
              >
                <FileText size={20} />
                {t('profile.viewResearch')}
              </Link>
              <Link
                to="/blog"
                className="btn-outline flex items-center gap-2"
              >
                <BookOpen size={20} />
                {t('profile.viewBlog')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
