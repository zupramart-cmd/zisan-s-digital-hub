import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';

const ProjectsPreviewSection: React.FC = () => {
  const { language } = useLanguage();
  const featured = projects.slice(0, 6);

  return (
    <section id="projects-preview" className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
          <h2 className="section-title mb-0">
            {language === 'en' ? 'Featured Projects' : 'ফিচারড প্রজেক্টস'}
          </h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {language === 'en' ? 'View all' : 'সব দেখুন'} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className={`group bg-card rounded-xl overflow-hidden shadow-sm border border-border card-hover animate-fade-in stagger-${(i % 5) + 1}`}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/600x400/715EB4/ffffff?text=' + encodeURIComponent(p.name);
                  }}
                />
              </div>
              <div className="p-4">
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                  {p.category}
                </span>
                <h3 className="text-base font-bold text-foreground mt-2">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {language === 'en' ? p.description : (p.descriptionBn || p.description)}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-3">
                  {language === 'en' ? 'View details' : 'বিস্তারিত'} <ExternalLink size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;
