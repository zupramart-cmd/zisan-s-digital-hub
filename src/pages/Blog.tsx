import React, { useState } from 'react';
import { Calendar, Filter, Play } from 'lucide-react';
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
    <main className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-muted-foreground">{t('blog.subtitle')}</p>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap animate-fade-in stagger-1">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter size={20} />
            <span className="font-medium">{t('blog.filter')}:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`bg-card rounded-2xl overflow-hidden shadow-md card-hover animate-fade-in stagger-${(index % 5) + 1}`}
            >
              {/* Image */}
              <div className="relative aspect-video bg-muted">
                <img
                  src={post.image}
                  alt={language === 'en' ? post.title : post.titleBn}
                  className="w-full h-full object-cover pointer-events-auto"
                />
                {post.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                    <div className="p-4 bg-primary rounded-full text-primary-foreground">
                      <Play size={24} />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {language === 'en' ? post.category : post.categoryBn}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                  {language === 'en' ? post.title : post.titleBn}
                </h2>

                <p className="text-muted-foreground text-sm line-clamp-3">
                  {language === 'en' ? post.excerpt : post.excerptBn}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
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
