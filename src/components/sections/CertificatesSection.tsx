import React, { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';

const CertificatesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { certificates } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, certificates.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  return (
    <section id="certificates" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('certificates.title')}</h2>

        <div
          className="mt-8 md:mt-12 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Certificate Card with Arrows on sides of dots */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="w-full flex-shrink-0 px-2 md:px-4"
                >
                  {/* Fixed rectangular rounded layout */}
                  <div className="bg-card rounded-xl border border-border p-4 md:p-6 shadow-sm max-w-lg mx-auto">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-primary/10 rounded-lg shrink-0">
                        <Award className="text-primary w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-muted-foreground">
                          #{cert.id}
                        </span>
                        <h3 className="text-base md:text-lg font-semibold text-foreground leading-tight mt-0.5">
                          {language === 'en' ? cert.name : cert.nameBn}
                        </h3>
                        <a
                          href={cert.verifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-2"
                        >
                          <ExternalLink size={14} />
                          {t('certificates.verify')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation: Arrow - Dots - Arrow */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={goToPrevious}
              className="p-2 bg-card rounded-full border border-border shadow-sm hover:bg-accent transition-colors"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="text-primary w-5 h-5" />
            </button>
            
            <div className="flex gap-1.5">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-5'
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 bg-card rounded-full border border-border shadow-sm hover:bg-accent transition-colors"
              aria-label="Next certificate"
            >
              <ChevronRight className="text-primary w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
