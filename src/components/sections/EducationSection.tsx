import React from 'react';
import { Calendar, Building, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const EducationSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { education } = portfolioData;

  const items = [
    { key: 'hsc', data: education.hsc, logo: '/HSC.jfif' },
    { key: 'ssc', data: education.ssc, logo: '/SSC.jfif' },
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('education.title')}</h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10">
          {items.map((item, index) => (
            <div
              key={item.key}
              className={`bg-card rounded-2xl p-6 md:p-8 shadow-md card-hover animate-fade-in stagger-${index + 1}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border border-border bg-white flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={`${item.key.toUpperCase()} logo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    {language === 'en' ? item.data.degree : item.data.degreeBn}
                  </h3>
                  <p className="text-primary font-medium text-sm md:text-base mt-1">
                    {language === 'en' ? item.data.institute : item.data.instituteBn}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-sm md:text-base text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-primary shrink-0" />
                  <span>{language === 'en' ? `Session: ${item.data.session}` : `সেশন: ${item.data.session}`}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award size={16} className="text-primary shrink-0" />
                  <span className="font-semibold text-foreground">GPA: {item.data.gpa}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building size={16} className="text-primary shrink-0" />
                  <span>{language === 'en' ? `Group: ${item.data.group}` : `বিভাগ: ${item.data.groupBn}`}</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen size={16} className="text-primary shrink-0" />
                  <span>{language === 'en' ? `Major: ${item.data.major}` : `প্রধান: ${item.data.majorBn}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
