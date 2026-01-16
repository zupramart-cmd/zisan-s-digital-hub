import React from 'react';
import { BookOpen, Trophy, ExternalLink, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    <section id="professional-development" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('professionalDev.title')}</h2>

        {/* Courses */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="text-primary" size={24} />
            {t('professionalDev.courses')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`bg-card rounded-2xl p-6 shadow-md card-hover animate-fade-in stagger-${index + 1}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {course.platform}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {language === 'en' ? course.name : course.nameBn}
                </h4>
                <ul className="space-y-2 mb-4">
                  {(language === 'en' ? course.details : course.detailsBn).map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                  <a
                    href={course.courseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} />
                    {language === 'en' ? 'Course' : 'কোর্স'}
                  </a>
                  <a
                    href={course.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Award size={14} />
                    {language === 'en' ? 'Certificate' : 'সার্টিফিকেট'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Olympiads */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Trophy className="text-primary" size={24} />
            {t('professionalDev.olympiads')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {olympiads.map((olympiad, index) => (
              <div
                key={olympiad.id}
                className={`bg-card rounded-2xl p-6 shadow-md card-hover animate-fade-in stagger-${index + 1}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                    {olympiad.platform}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {language === 'en' ? olympiad.name : olympiad.nameBn}
                </h4>
                <ul className="space-y-2 mb-4">
                  {(language === 'en' ? olympiad.details : olympiad.detailsBn).map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                  <a
                    href={olympiad.olympiadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} />
                    {language === 'en' ? 'Olympiad' : 'অলিম্পিয়াড'}
                  </a>
                  <a
                    href={olympiad.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Award size={14} />
                    {language === 'en' ? 'Certificate' : 'সার্টিফিকেট'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Graph */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <TrendingUp className="text-primary" size={24} />
            {t('professionalDev.graph')}
          </h3>
          <div className="bg-card rounded-2xl p-6 shadow-md animate-fade-in">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="skills"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
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
