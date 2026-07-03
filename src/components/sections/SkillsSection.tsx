import React from 'react';
import { Code, Server, Rocket, Wrench, Monitor, Languages, Briefcase, Keyboard } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const SkillsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { skills } = portfolioData;

  const ProgressBar: React.FC<{ level: number; label: string }> = ({ level, label }) => (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  const skillGroups = [
    { key: 'frontend', data: skills.frontend, icon: Code },
    { key: 'backend', data: skills.backend, icon: Server },
    { key: 'hosting', data: skills.hosting, icon: Rocket },
    { key: 'services', data: skills.services, icon: Briefcase },
    { key: 'tools', data: skills.tools, icon: Wrench },
    { key: 'computer', data: skills.computer, icon: Monitor },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('skills.title')}</h2>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={group.key}
                className={`bg-card rounded-xl p-6 shadow-md animate-fade-in stagger-${(index % 5) + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {language === 'en' ? group.data.title : group.data.titleBn}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.data.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {/* Typing speed sub-section for computer skills */}
                {group.key === 'computer' && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Keyboard size={14} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {t('skills.typing')}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>{language === 'en' ? skills.computer.typing.bangla : skills.computer.typing.banglaBn}</p>
                      <p>{language === 'en' ? skills.computer.typing.english : skills.computer.typing.englishBn}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Language Skills */}
        <div className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.language.map((lang, idx) => (
              <div
                key={lang.name}
                className={`bg-card rounded-xl p-6 shadow-md animate-fade-in stagger-${idx + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Languages className="text-primary" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {language === 'en' ? lang.name : lang.nameBn}
                  </h3>
                </div>
                <div className="space-y-3">
                  <ProgressBar label={t('skills.reading')} level={lang.reading} />
                  <ProgressBar label={t('skills.writing')} level={lang.writing} />
                  <ProgressBar label={t('skills.speaking')} level={lang.speaking} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
