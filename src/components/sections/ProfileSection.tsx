import React from 'react';
import { Download, Award, FileText, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';
import { Link } from 'react-router-dom';

const ProfileSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { profile } = portfolioData;

  const handleDownloadResume = () => {
    // First open the PDF in a new tab
    window.open(profile.resumeLink, '_blank');
    
    // Then trigger download after a short delay
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
              {language === 'en' ? profile.title : profile.titleBn}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 animate-fade-in stagger-2">
              {language === 'en' ? profile.fullDescription : profile.fullDescriptionBn}
            </p>

            {/* Action Buttons - Responsive Grid */}
            <div className="animate-fade-in stagger-3">
              {/* Mobile Layout - 2 rows */}
              <div className="grid grid-cols-2 gap-3 lg:hidden">
                {/* Row 1: Download Resume & Certifications */}
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all"
                >
                  <Download size={16} />
                  <span className="truncate">{language === 'en' ? 'Resume' : 'জীবনবৃত্তান্ত'}</span>
                </button>
                <a
                  href="#certificates"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Award size={16} />
                  <span className="truncate">{language === 'en' ? 'Certificates' : 'সনদপত্র'}</span>
                </a>

                {/* Row 2: Blog & Research */}
                <Link
                  to="/blog"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <BookOpen size={16} />
                  <span className="truncate">{language === 'en' ? 'Blog' : 'ব্লগ'}</span>
                </Link>
                <Link
                  to="/research"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <FileText size={16} />
                  <span className="truncate">{language === 'en' ? 'Research' : 'গবেষণা'}</span>
                </Link>
              </div>

              {/* Desktop Layout - Horizontal */}
              <div className="hidden lg:flex flex-wrap justify-start gap-4">
                <button
                  onClick={handleDownloadResume}
                  className="btn-primary flex items-center gap-2"
                >
                  <Download size={20} />
                  {t('profile.downloadResume')}
                </button>
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
      </div>
    </section>
  );
};

export default ProfileSection;
