import React from 'react';
import { BookOpen, Tag, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { researchPapers } from '@/data/portfolioData';

const Research: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <main className="pt-24 pb-20 min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('research.title')}
          </h1>
          <p className="text-xl text-muted-foreground">{t('research.subtitle')}</p>
        </div>

        {/* Research Papers */}
        <div className="space-y-12">
          {researchPapers.map((paper, index) => (
            <article
              key={paper.id}
              className={`bg-card rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in stagger-${index + 1}`}
            >
              {/* Title */}
              <div className="flex items-start gap-4 mb-8 pb-6 border-b border-border">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <FileText className="text-primary" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {language === 'en' ? paper.title : paper.titleBn}
                  </h2>
                </div>
              </div>

              {/* Abstract */}
              <section className="mb-8">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <BookOpen size={20} />
                  {language === 'en' ? 'Abstract' : 'সারাংশ'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en' ? paper.abstract : paper.abstractBn}
                </p>
              </section>

              {/* Keywords */}
              <section className="mb-8">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <Tag size={20} />
                  {language === 'en' ? 'Keywords' : 'কীওয়ার্ড'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(language === 'en' ? paper.keywords : paper.keywordsBn).map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </section>

              {/* Introduction */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  1. {language === 'en' ? 'Introduction' : 'ভূমিকা'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en' ? paper.introduction : paper.introductionBn}
                </p>
              </section>

              {/* Methodology */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  2. {language === 'en' ? 'Methodology' : 'পদ্ধতি'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en' ? paper.methodology : paper.methodologyBn}
                </p>
              </section>

              {/* Results */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  3. {language === 'en' ? 'Results' : 'ফলাফল'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en' ? paper.results : paper.resultsBn}
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  4. {language === 'en' ? 'Conclusion' : 'উপসংহার'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en' ? paper.conclusion : paper.conclusionBn}
                </p>
              </section>

              {/* References */}
              <section className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {language === 'en' ? 'References' : 'তথ্যসূত্র'}
                </h3>
                <ol className="space-y-2 list-decimal list-inside">
                  {paper.references.map((ref, i) => (
                    <li key={i} className="text-muted-foreground text-sm">
                      {ref}
                    </li>
                  ))}
                </ol>
              </section>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Research;
