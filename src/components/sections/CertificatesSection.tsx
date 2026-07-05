import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const CertificatesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { certificates } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const active = certificates[activeIndex];
  const name = (c: typeof active) => (language === 'en' ? c.name : c.nameBn);

  return (
    <section id="certificates" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('certificates.title')}</h2>

        {/* Main preview - shows full certificate on mobile & desktop */}
        <div className="max-w-4xl mx-auto mt-8">
          <button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="block w-full bg-card rounded-2xl border border-border shadow-md overflow-hidden group"
            aria-label={`Enlarge ${name(active)}`}
          >
            <div className="w-full bg-gradient-to-br from-primary/5 to-accent/20 p-3 sm:p-4">
              <img
                src={active.image}
                alt={name(active)}
                className="w-full h-auto object-contain rounded-lg group-hover:scale-[1.01] transition-transform"
                loading="eager"
              />
            </div>
            <div className="p-3 border-t border-border bg-accent/10 text-center">
              <h4 className="font-semibold text-foreground text-sm md:text-base">
                {name(active)}
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                {language === 'en' ? 'Tap to enlarge' : 'বড় করতে ক্লিক করুন'}
              </p>
            </div>
          </button>
        </div>

        {/* Small thumbnails below */}
        <div className="max-w-5xl mx-auto mt-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
            {certificates.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`bg-card rounded-lg border overflow-hidden transition-all ${
                  i === activeIndex
                    ? 'border-primary ring-2 ring-primary/40'
                    : 'border-border hover:border-primary/50'
                }`}
                aria-label={name(c)}
              >
                <img
                  src={c.image}
                  alt={name(c)}
                  loading="lazy"
                  className="w-full h-auto object-contain bg-white"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Full-screen preview dialog */}
        <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
          <DialogContent className="max-w-5xl w-[95vw] p-0 bg-background border-none">
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute top-2 right-2 z-10 p-2 bg-background/80 backdrop-blur rounded-full text-foreground hover:bg-background shadow"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="w-full max-h-[90vh] overflow-auto p-2 sm:p-4">
              <img
                src={active.image}
                alt={name(active)}
                className="w-full h-auto object-contain rounded-lg"
              />
              <p className="text-center text-sm text-muted-foreground mt-3 pb-2">
                {name(active)}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CertificatesSection;
