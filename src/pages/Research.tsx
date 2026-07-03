import React, { useState, useEffect } from 'react';
import { BookOpen, Tag, FileText, Lightbulb, Cog, BarChart3, CheckCircle, BookMarked } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { researchPapers } from '@/data/Research';
import { Skeleton } from '@/components/ui/skeleton';

const ResearchSkeleton: React.FC = () => (
  <div className="space-y-8">
    {[1, 2].map((i) => (
      <div key={i} className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-3 pb-4 border-b border-border">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <Skeleton className="h-8 w-3/4" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-20" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    ))}
  </div>
);

const Research: React.FC = () => {
  const { t, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-20 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t('research.title')}
          </h1>
          <p className="text-muted-foreground">{t('research.subtitle')}</p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <ResearchSkeleton />
        ) : (
          /* Research Papers */
          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <article
                key={paper.id}
                className={`bg-card rounded-xl shadow-sm border border-border p-6 md:p-8 animate-fade-in stagger-${index + 1}`}
              >
                {/* Title */}
                <div className="flex items-start gap-3 mb-6 pb-4 border-b border-border">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="text-primary" size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                    {language === 'en' ? paper.title : paper.titleBn}
                  </h2>
                </div>

                {/* Abstract */}
                <section className="mb-6">
                  <h3 className="text-base font-bold text-primary mb-2 flex items-center gap-2">
                    <BookOpen size={18} />
                    {language === 'en' ? 'Abstract' : 'সারাংশ'}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {language === 'en' ? paper.abstract : paper.abstractBn}
                  </p>
                </section>

                {/* Keywords */}
                <section className="mb-6">
                  <h3 className="text-base font-bold text-primary mb-2 flex items-center gap-2">
                    <Tag size={18} />
                    {language === 'en' ? 'Keywords' : 'কীওয়ার্ড'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'en' ? paper.keywords : paper.keywordsBn).map((keyword, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Introduction */}
                <section className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <Lightbulb size={18} className="text-primary" />
                    1. {language === 'en' ? 'Introduction' : 'ভূমিকা'}
                  </h3>
                  <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {language === 'en' ? paper.introduction : paper.introductionBn}
                  </div>
                </section>

                {/* Methodology */}
                <section className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <Cog size={18} className="text-primary" />
                    2. {language === 'en' ? 'Methodology' : 'পদ্ধতি'}
                  </h3>
                  <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {language === 'en' ? paper.methodology : paper.methodologyBn}
                  </div>
                </section>

                {/* Results */}
                <section className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <BarChart3 size={18} className="text-primary" />
                    3. {language === 'en' ? 'Results' : 'ফলাফল'}
                  </h3>
                  <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {language === 'en' ? paper.results : paper.resultsBn}
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    4. {language === 'en' ? 'Conclusion' : 'উপসংহার'}
                  </h3>
                  <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {language === 'en' ? paper.conclusion : paper.conclusionBn}
                  </div>
                </section>

                {/* References */}
                <section className="pt-4 border-t border-border">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <BookMarked size={18} className="text-primary" />
                    {language === 'en' ? 'References' : 'তথ্যসূত্র'}
                  </h3>
                  <ol className="space-y-1.5 list-decimal list-inside">
                    {paper.references.map((ref, i) => (
                      <li key={i} className="text-muted-foreground text-xs">
                        {ref}
                      </li>
                    ))}
                  </ol>
                </section>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Research;
