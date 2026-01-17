import React from 'react';
import { BookOpen, Trophy, ExternalLink, Award, TrendingUp, Code, Shield, Brain, BarChart, Globe, Cpu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const courseIcons: { [key: string]: React.ReactNode } = {
  'Complete Web Development': <Code size={18} />,
  'Google IT Support': <Shield size={18} />,
  'Python for Data Science and AI': <Brain size={18} />,
  'Foundations of Cybersecurity': <Shield size={18} />,
  'Digital Marketing': <BarChart size={18} />,
  'Introduction to Artificial Intelligence': <Cpu size={18} />,
  'Machine Learning': <Brain size={18} />,
  'Introduction to Python': <Code size={18} />,
};

const ProfessionalDevSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { courses, olympiads } = portfolioData;

  const graphData = [
    { month: 'Jan', skills: 30 },
    { month: 'Mar', skills: 45 },
    { month: 'May', skills: 55 },
    { month: 'Jul', skills: 70 },
    { month: 'Sep', skills: 80 },
    { month: 'Nov', skills: 90 },
  ];

  return (
    <section id="professional-development" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('professionalDev.title')}</h2>

        {/* Courses */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="text-primary" size={22} />
            {t('professionalDev.courses')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`bg-card rounded-xl p-5 shadow-sm border border-border card-hover animate-fade-in stagger-${index + 1}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {course.platform}
                  </span>
                </div>
                <h4 className="text-base font-bold text-foreground mb-3">
                  {language === 'en' ? course.name : course.nameBn}
                </h4>
                <ul className="space-y-1.5 mb-4">
                  {(language === 'en' ? course.details : course.detailsBn).map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">{courseIcons[course.name] || <Globe size={14} />}</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 pt-3 border-t border-border">
                  <a
                    href={course.courseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <ExternalLink size={12} />
                    {language === 'en' ? 'Course' : 'কোর্স'}
                  </a>
                  <a
                    href={course.certificateLink}
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
                      <Trophy size={14} className="text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 pt-3 border-t border-border">
                  <a
                    href={olympiad.olympiadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <ExternalLink size={12} />
                    {language === 'en' ? 'Olympiad' : 'অলিম্পিয়াড'}
                  </a>
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

        {/* Development Graph */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="text-primary" size={22} />
            {t('professionalDev.graph')}
          </h3>
          <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border animate-fade-in">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="skills"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevSection;
