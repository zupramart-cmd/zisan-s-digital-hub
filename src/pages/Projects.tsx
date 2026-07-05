import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects, categories } from '@/data/projects';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {language === 'en' ? 'Projects' : 'প্রজেক্টস'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'en' ? 'Web applications I have built' : 'আমার তৈরি ওয়েব অ্যাপ্লিকেশন'}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <Filter size={18} className="text-muted-foreground" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent text-accent-foreground hover:bg-primary/20'
              }`}
            >
              {cat === 'All' ? (language === 'en' ? 'All' : 'সব') : cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, idx) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={`group bg-card rounded-xl overflow-hidden shadow-sm border border-border card-hover animate-fade-in stagger-${(idx % 5) + 1}`}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/40 overflow-hidden flex items-center justify-center p-6">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                  {project.category}
                </span>
                <h2 className="text-base font-bold text-foreground mt-2 mb-1">{project.name}</h2>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {language === 'en' ? project.description : (project.descriptionBn || project.description)}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  <ExternalLink size={12} />
                  {language === 'en' ? 'View details' : 'বিস্তারিত দেখুন'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
