import React from 'react';
import { Languages, Code, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';

const SkillsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { skills } = portfolioData;

  const ProgressBar: React.FC<{ level: number; name: string }> = ({ level, name }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('skills.title')}</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Language Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-md animate-fade-in stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Languages className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('skills.language')}</h3>
            </div>
            <div className="space-y-4">
              {skills.language.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={language === 'en' ? skill.name : skill.nameBn}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-md animate-fade-in stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('skills.professional')}</h3>
            </div>
            <div className="space-y-4">
              {skills.professional.map((skill) => (
                <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Communication Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-md animate-fade-in stagger-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('skills.communication')}</h3>
            </div>
            <div className="space-y-4">
              {skills.communication.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={language === 'en' ? skill.name : skill.nameBn}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-md animate-fade-in stagger-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('skills.additional')}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {(language === 'en' ? skills.additional : skills.additionalBn).map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
