import React, { useState, useEffect } from 'react';
import { Calendar, Filter, ExternalLink, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/Blog';
import { Skeleton } from '@/components/ui/skeleton';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  // Facebook posts to embed (public posts about Ridoan)
  const facebookPosts = [
    'https://www.facebook.com/ridoan.zisan/posts/pfbid02rXWMWrxTZzYFwyBqBRP2TFqUyRUVKvMkR3AhK2wRhcFAKvGoDvpB1fSPuh1nP9tzl',
    'https://www.facebook.com/ridoan.zisan/posts/pfbid0d6yiGnJmMhCwT8s1PScQ2C5vXBoUxSF4hLwuBpaJdY3Q2GYE45FbAFEeaEWJoSVSl',
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('blog.title')}
          </h1>
          <p className="text-muted-foreground">{t('blog.subtitle')}</p>
        </div>

        {/* Social Media Embeds */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Facebook size={22} className="text-primary" />
            {language === 'en' ? 'From Social Media' : 'সোশ্যাল মিডিয়া থেকে'}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {facebookPosts.map((url, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
                <iframe
                  src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=500`}
                  className="w-full"
                  style={{ height: 500, border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Blog posts */}
        <h2 className="text-xl font-bold text-foreground mb-4">
          {language === 'en' ? 'Articles & Insights' : 'নিবন্ধ ও অন্তর্দৃষ্টি'}
        </h2>

        <div className="flex items-center justify-start gap-3 mb-6 flex-wrap">
          <Filter size={18} className="text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-accent-foreground hover:bg-primary/20'
                }`}
              >
                {category === 'all' ? t('blog.all') : (language === 'en' ? category : blogPosts.find(p => p.category === category)?.categoryBn || category)}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1,2,3].map(i => (
              <Skeleton key={i} className="aspect-video w-full" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-card rounded-xl overflow-hidden shadow-sm border border-border card-hover animate-fade-in stagger-${(index % 5) + 1}`}
              >
                <div className="aspect-video bg-muted">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover pointer-events-auto" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      {language === 'en' ? post.category : post.categoryBn}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} /><span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">
                    {language === 'en' ? post.title : post.titleBn}
                  </h3>
                  <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                    {language === 'en' ? post.excerpt : post.excerptBn}
                  </p>
                  {post.link && (
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      <ExternalLink size={12} />{t('blog.viewProject')}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
