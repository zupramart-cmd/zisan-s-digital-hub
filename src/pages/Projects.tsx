import React, { useState } from 'react';
import { ExternalLink, Star, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projectsData, projectCategories } from '@/data/Projects';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = language === 'en' ? projectCategories.en : projectCategories.bn;
  const allLabel = categories[0];

  const filteredProjects = activeCategory === 'All' || activeCategory === allLabel
    ? projectsData
    : projectsData.filter((p) => (language === 'en' ? p.category : p.categoryBn) === activeCategory);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('projects.title')}
          </h1>
          <p className="text-muted-foreground">{t('projects.subtitle')}</p>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap animate-fade-in">
          <Filter size={18} className="text-muted-foreground" />
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-accent-foreground hover:bg-primary/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`bg-card rounded-xl overflow-hidden shadow-sm border border-border card-hover animate-fade-in stagger-${(index % 5) + 1} flex flex-col`}
            >
              {/* Image */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={language === 'en' ? project.name : project.nameBn}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x340/715EB4/ffffff?text=' + encodeURIComponent(project.name);
                  }}
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full">
                    <Star size={12} fill="currentColor" />
                    {t('projects.featured')}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {language === 'en' ? project.category : project.categoryBn}
                  </span>
                </div>

                <h2 className="text-base font-bold text-foreground mb-1">
                  {language === 'en' ? project.name : project.nameBn}
                </h2>
                <p className="text-xs text-primary font-medium mb-2">
                  {language === 'en' ? project.tagline : project.taglineBn}
                </p>

                <p className="text-muted-foreground text-xs line-clamp-3 mb-3 flex-1">
                  {language === 'en' ? project.description : project.descriptionBn}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-secondary text-secondary-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} />
                  {t('projects.viewProject')}
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              {language === 'en' ? 'No projects found in this category.' : 'এই বিভাগে কোনো প্রজেক্ট নেই।'}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
