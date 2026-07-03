import React from 'react';
import { BookOpen, Trophy, ExternalLink, Award, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const ProfessionalDevSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { courses, olympiads } = portfolioData;

  return (
    <section id="professional-development" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('professionalDev.title')}</h2>

        {/* Courses (short paragraph) */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="text-primary" size={22} />
            {t('professionalDev.courses')}
          </h3>
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Youtube className="text-primary" size={24} />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'en' ? courses.en : courses.bn}
              </p>
            </div>
          </div>
        </div>

        {/* Olympiads */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Trophy className="text-primary" size={22} />
            {t('professionalDev.olympiads')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {olympiads.map((olympiad, index) => (
              <div
                key={olympiad.id}
                className={`bg-card rounded-xl p-5 shadow-sm border border-border card-hover animate-fade-in stagger-${index + 1}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {olympiad.platform}
                  </span>
                </div>
                <h4 className="text-base font-bold text-foreground mb-3">
                  {language === 'en' ? olympiad.name : olympiad.nameBn}
                </h4>
                <ul className="space-y-1.5 mb-4">
                  {(language === 'en' ? olympiad.details : olympiad.detailsBn).map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Trophy size={14} className="text-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 pt-3 border-t border-border">
                  <a
                    href={olympiad.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <Award size={12} />
                    {language === 'en' ? 'Certificate' : 'সার্টিফিকেট'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevSection;
