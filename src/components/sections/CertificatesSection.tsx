import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
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
      }, 3500);
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

        <div className="mt-8 md:mt-12">
          {/* Main Certificate Display */}
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Certificate Card with Image */}
            <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
              {/* Certificate Image */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/5 to-accent/20 overflow-hidden">
                <img
                  src={certificates[currentIndex].image}
                  alt={language === 'en' ? certificates[currentIndex].name : certificates[currentIndex].nameBn}
                  className="w-full h-full object-contain p-4 transition-transform duration-500"
                />
                
                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {language === 'en' ? certificates[currentIndex].name : certificates[currentIndex].nameBn}
                    </h3>
                    <a
                      href={certificates[currentIndex].verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      {t('certificates.verify')}
                    </a>
                  </div>
                </div>

              </div>

              {/* Certificate Info Bar */}
              <div className="p-4 border-t border-border bg-accent/20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">
                      {currentIndex + 1} / {certificates.length}
                    </span>
                    <h4 className="font-semibold text-foreground text-sm md:text-base mt-0.5">
                      {language === 'en' ? certificates[currentIndex].name : certificates[currentIndex].nameBn}
                    </h4>
                  </div>
                  <a
                    href={certificates[currentIndex].verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    <ExternalLink size={14} />
                    <span className="hidden sm:inline">{t('certificates.verify')}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Controls - Arrows and Dots */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goToPrevious}
                className="p-2 bg-card border border-border rounded-full shadow-sm hover:bg-accent transition-colors"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="text-primary w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-1.5">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-6 h-2 bg-primary'
                        : 'w-2 h-2 bg-muted hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="p-2 bg-card border border-border rounded-full shadow-sm hover:bg-accent transition-colors"
                aria-label="Next certificate"
              >
                <ChevronRight className="text-primary w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {certificates.map((cert, index) => (
                <button
                  key={cert.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-primary shadow-md'
                      : 'border-border opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={cert.image}
                    alt={language === 'en' ? cert.name : cert.nameBn}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
