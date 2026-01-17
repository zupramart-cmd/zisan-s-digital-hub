import React from 'react';
import { Briefcase, Calendar, ExternalLink, Code, Users, Globe, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import ContributionChart from '@/components/ContributionChart';

const detailIcons = [Code, Users, Globe, Zap];

const ExperienceSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('experience.title')}</h2>

        <div className="mt-10 space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`bg-card rounded-xl p-6 shadow-sm border border-border card-hover animate-fade-in stagger-${index + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {language === 'en' ? exp.role : exp.roleBn}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {language === 'en' ? exp.company : exp.companyBn}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Calendar size={16} />
                  <span>{language === 'en' ? exp.period : exp.periodBn}</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-5">
                {(language === 'en' ? exp.details : exp.detailsBn).map((detail, i) => {
                  const IconComponent = detailIcons[i % detailIcons.length];
                  return (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2.5">
                      <IconComponent size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  );
                })}
              </ul>

              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium text-sm"
              >
                <ExternalLink size={16} />
                {language === 'en' ? 'Visit Website' : 'ওয়েবসাইট দেখুন'}
              </a>
            </div>
          ))}
        </div>

        {/* GitHub-style Contribution Chart */}
        <ContributionChart />
      </div>
    </section>
  );
};

export default ExperienceSection;
