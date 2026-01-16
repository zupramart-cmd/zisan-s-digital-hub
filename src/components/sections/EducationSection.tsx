import React from 'react';
import { GraduationCap, Calendar, Building, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';

const EducationSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { education } = portfolioData;

  const educationItems = [
    {
      key: 'hsc',
      data: education.hsc,
      icon: GraduationCap,
    },
    {
      key: 'ssc',
      data: education.ssc,
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('education.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className={`bg-card rounded-2xl p-8 shadow-md card-hover animate-fade-in stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {language === 'en' ? item.data.degree : item.data.degreeBn}
                    </h3>
                    <p className="text-primary font-medium">
                      {language === 'en' ? item.data.institute : item.data.instituteBn}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-primary" />
                    <span>{language === 'en' ? `Session: ${item.data.session}` : `সেশন: ${item.data.session}`}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award size={18} className="text-primary" />
                    <span className="font-semibold text-foreground">GPA: {item.data.gpa}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building size={18} className="text-primary" />
                    <span>{language === 'en' ? `Group: ${item.data.group}` : `বিভাগ: ${item.data.groupBn}`}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} className="text-primary" />
                    <span>{language === 'en' ? `Major: ${item.data.major}` : `প্রধান: ${item.data.majorBn}`}</span>
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
