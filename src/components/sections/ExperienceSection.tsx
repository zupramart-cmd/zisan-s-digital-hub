import React from 'react';
import { Briefcase, Calendar, ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';
import GitHubCalendar from '@/components/GitHubCalendar';

const ExperienceSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { experience, profile } = portfolioData;

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
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain pointer-events-auto"
                      />
                    ) : (
                      <Briefcase className="text-primary" size={28} />
                    )}
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
                {(language === 'en' ? exp.details : exp.detailsBn).map((detail, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2.5">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    {detail}
                  </li>
                ))}
              </ul>

              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium text-sm"
              >
                <ExternalLink size={16} />
                {t('experience.visitWebsite')}
              </a>
            </div>
          ))}
        </div>

        {/* GitHub Contribution Calendar */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Github className="text-primary" size={20} />
            {t('experience.githubActivity')}
          </h3>
          <GitHubCalendar username={profile.githubUsername} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
