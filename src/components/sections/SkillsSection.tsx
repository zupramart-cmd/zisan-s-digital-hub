import React from 'react';
import { Languages, Code, Server, Cloud, Wrench, Monitor, Keyboard, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const SkillsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { skills } = portfolioData;

  const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
      {children}
    </span>
  );

  const Card: React.FC<{ icon: React.ElementType; title: string; children: React.ReactNode; delay: number }> = ({ icon: Icon, title, children, delay }) => (
    <div className={`bg-card rounded-2xl p-6 shadow-md border border-border animate-fade-in stagger-${delay}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="text-primary" size={22} />
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('skills.title')}</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card icon={Code} title={language === 'en' ? 'Frontend' : 'ফ্রন্টএন্ড'} delay={1}>
            <div className="flex flex-wrap gap-2">{skills.frontend.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </Card>

          <Card icon={Server} title={language === 'en' ? 'Backend' : 'ব্যাকএন্ড'} delay={2}>
            <div className="flex flex-wrap gap-2">{skills.backend.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </Card>

          <Card icon={Cloud} title={language === 'en' ? 'Hosting & Deployment' : 'হোস্টিং ও ডেপ্লয়মেন্ট'} delay={3}>
            <div className="flex flex-wrap gap-2">{skills.hosting.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </Card>

          <Card icon={Sparkles} title={language === 'en' ? 'Services & Solutions' : 'সার্ভিস ও সল্যুশন'} delay={4}>
            <div className="flex flex-wrap gap-2">{skills.services.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </Card>

          <Card icon={Wrench} title={language === 'en' ? 'Tools & Software' : 'টুলস ও সফটওয়্যার'} delay={1}>
            <div className="flex flex-wrap gap-2">{skills.tools.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </Card>

          <Card icon={Monitor} title={language === 'en' ? 'Computer Skills' : 'কম্পিউটার দক্ষতা'} delay={2}>
            <div className="space-y-3">
              {skills.computer.map(s => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-foreground">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card icon={Keyboard} title={language === 'en' ? 'Typing Speed' : 'টাইপিং স্পিড'} delay={3}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">{skills.typing.bangla}</p>
                <p className="text-xs text-muted-foreground mt-1">{language === 'en' ? 'Bangla' : 'বাংলা'}</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">{skills.typing.english}</p>
                <p className="text-xs text-muted-foreground mt-1">{language === 'en' ? 'English' : 'ইংরেজি'}</p>
              </div>
            </div>
          </Card>

          <Card icon={Languages} title={language === 'en' ? 'Language' : 'ভাষা'} delay={4}>
            <div className="space-y-4">
              {skills.language.map(lang => (
                <div key={lang.name}>
                  <p className="font-semibold text-foreground mb-2">{language === 'en' ? lang.name : lang.nameBn}</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { label: language === 'en' ? 'Reading' : 'পড়া', v: lang.reading },
                      { label: language === 'en' ? 'Writing' : 'লেখা', v: lang.writing },
                      { label: language === 'en' ? 'Speaking' : 'বলা', v: lang.speaking },
                    ].map(item => (
                      <div key={item.label} className="p-2 bg-muted rounded text-center">
                        <p className="font-bold text-primary">{item.v}%</p>
                        <p className="text-muted-foreground">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
