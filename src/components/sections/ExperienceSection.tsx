import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import ContributionChart from '@/components/ContributionChart';

const ExperienceSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('experience.title')}</h2>

        <div className="mt-12 space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`bg-card rounded-2xl p-8 shadow-md card-hover animate-fade-in stagger-${index + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Briefcase className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {language === 'en' ? exp.role : exp.roleBn}
                    </h3>
                    <p className="text-primary font-medium">
                      {language === 'en' ? exp.company : exp.companyBn}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={18} />
                  <span>{language === 'en' ? exp.period : exp.periodBn}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {(language === 'en' ? exp.details : exp.detailsBn).map((detail, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <ExternalLink size={18} />
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
