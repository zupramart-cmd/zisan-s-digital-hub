import React, { useState } from 'react';
import { Calendar, Filter, Play, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/portfolioData';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...new Set(blogPosts.map((post) => post.category))];

  const filteredPosts =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="pt-20 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('blog.title')}
          </h1>
          <p className="text-muted-foreground">{t('blog.subtitle')}</p>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap animate-fade-in">
          <Filter size={18} className="text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
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
                {category === 'all'
                  ? t('blog.all')
                  : language === 'en'
                  ? category
                  : blogPosts.find((p) => p.category === category)?.categoryBn || category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`bg-card rounded-xl overflow-hidden shadow-sm border border-border card-hover animate-fade-in stagger-${(index % 5) + 1}`}
            >
              {/* Image */}
              <div className="relative aspect-video bg-muted">
                <img
                  src={post.image}
                  alt={language === 'en' ? post.title : post.titleBn}
                  className="w-full h-full object-cover"
                />
                {post.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                    <div className="p-3 bg-primary rounded-full text-primary-foreground">
                      <Play size={20} />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {language === 'en' ? post.category : post.categoryBn}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h2 className="text-base font-bold text-foreground mb-2 line-clamp-2">
                  {language === 'en' ? post.title : post.titleBn}
                </h2>

                <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                  {language === 'en' ? post.excerpt : post.excerptBn}
                </p>

                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <ExternalLink size={12} />
                    {language === 'en' ? 'View Project' : 'প্রজেক্ট দেখুন'}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              {language === 'en'
                ? 'No posts found in this category.'
                : 'এই বিভাগে কোনো পোস্ট পাওয়া যায়নি।'}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
