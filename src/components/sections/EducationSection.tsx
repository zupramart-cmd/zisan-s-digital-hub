import React from 'react';
import { GraduationCap, BookOpen, Award, Building, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const EducationSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { education } = portfolioData;

  const items = [
    { key: 'ssc', data: education.ssc, icon: BookOpen },
    { key: 'hsc', data: education.hsc, icon: GraduationCap },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('education.title')}</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className={`bg-card rounded-2xl p-6 md:p-8 shadow-md card-hover animate-fade-in stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {language === 'en' ? item.data.degree : item.data.degreeBn}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {language === 'en' ? item.data.group : item.data.groupBn}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Building size={18} className="text-primary flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">{t('education.board')}:</strong>{' '}
                      {language === 'en' ? item.data.board : item.data.boardBn}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award size={18} className="text-primary flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">{t('education.result')}:</strong>{' '}
                      <span className="text-primary font-semibold">GPA {item.data.gpa}</span>{' '}
                      <span className="text-xs">(out of {item.data.gpaOutOf})</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-primary flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">{t('education.year')}:</strong>{' '}
                      {language === 'en' ? item.data.year : item.data.yearBn}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
