import React, { useState } from 'react';
import { Calendar, Filter, ExternalLink, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { socialPosts, blogPosts, blogCategories } from '@/data/Blog';

type TabType = 'social' | 'articles';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('social');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = language === 'en' ? blogCategories.en : blogCategories.bn;
  const allLabel = categories[0];

  const filteredArticles = activeCategory === 'All' || activeCategory === allLabel
    ? blogPosts
    : blogPosts.filter((p) => (language === 'en' ? p.category : p.categoryBn) === activeCategory);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('blog.title')}
          </h1>
          <p className="text-muted-foreground">{t('blog.subtitle')}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-accent rounded-full p-1">
            <button
              onClick={() => setActiveTab('social')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'social'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {language === 'en' ? '📱 Social Posts' : '📱 সোশ্যাল পোস্ট'}
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'articles'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {language === 'en' ? '📝 Articles' : '📝 আর্টিকেল'}
            </button>
          </div>
        </div>

        {/* Social Posts Tab */}
        {activeTab === 'social' && (
          <div className="grid md:grid-cols-2 gap-6">
            {socialPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-card rounded-xl overflow-hidden shadow-sm border border-border animate-fade-in stagger-${(index % 5) + 1}`}
              >
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {post.platform === 'facebook' ? (
                      <Facebook size={18} className="text-blue-600" />
                    ) : (
                      <Linkedin size={18} className="text-blue-700" />
                    )}
                    <span className="text-sm font-semibold text-foreground capitalize">
                      {post.platform}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="relative w-full" style={{ minHeight: '400px' }}>
                  <iframe
                    src={post.embedUrl}
                    className="w-full border-0"
                    style={{ minHeight: '500px' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={language === 'en' ? post.title : post.titleBn}
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <>
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredArticles.map((post, index) => (
                <article
                  key={post.id}
                  className={`bg-card rounded-xl overflow-hidden shadow-sm border border-border card-hover animate-fade-in stagger-${(index % 5) + 1}`}
                >
                  <div className="relative aspect-video bg-muted">
                    <img
                      src={post.image}
                      alt={language === 'en' ? post.title : post.titleBn}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x340/715EB4/ffffff?text=Blog';
                      }}
                    />
                  </div>

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

                    <p className="text-muted-foreground text-xs line-clamp-3 mb-3">
                      {language === 'en' ? post.excerpt : post.excerptBn}
                    </p>

                    {post.link && (
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                      >
                        <ExternalLink size={12} />
                        {t('blog.readMore')}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  {language === 'en' ? 'No articles found.' : 'কোনো আর্টিকেল পাওয়া যায়নি।'}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Blog;
