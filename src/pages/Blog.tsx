import React, { useState } from 'react';
import { Calendar, Filter, Facebook, Sparkles, BookOpen, Heart, Code2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts, socialEmbeds, type BlogPost } from '@/data/Blog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const categoryIcon: Record<BlogPost['category'], React.ElementType> = {
  Thoughts: Sparkles,
  Religion: BookOpen,
  Development: Code2,
  Life: Heart,
};

const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openPost, setOpenPost] = useState<BlogPost | null>(null);

  const categories = ['all', ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  const filtered =
    activeCategory === 'all' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  const categoryLabel = (c: string) => {
    if (c === 'all') return language === 'en' ? 'All' : 'সব';
    const match = blogPosts.find((p) => p.category === c);
    return language === 'en' ? c : match?.categoryBn || c;
  };

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('blog.title')}
          </h1>
          <p className="text-muted-foreground">{t('blog.subtitle')}</p>
        </header>

        {/* Social embeds */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Facebook size={22} className="text-primary" />
            {language === 'en' ? 'From Social Media' : 'সোশ্যাল মিডিয়া থেকে'}
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {socialEmbeds.map((e, i) => {
              const src =
                e.type === 'video'
                  ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(e.href)}&show_text=true&width=560&t=0`
                  : `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(e.href)}&show_text=true&width=500`;
              return (
                <div
                  key={i}
                  className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                >
                  <iframe
                    src={src}
                    title={`facebook-embed-${i}`}
                    className="w-full"
                    style={{ height: e.height || 500, border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Articles */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Articles & Thoughts' : 'নিবন্ধ ও চিন্তা'}
          </h2>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Filter size={18} className="text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === c
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-accent text-accent-foreground hover:bg-primary/20'
                  }`}
                >
                  {categoryLabel(c)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post, index) => {
              const Icon = categoryIcon[post.category] || Sparkles;
              return (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setOpenPost(post)}
                  className={`text-left bg-card rounded-xl overflow-hidden shadow-sm border border-border card-hover animate-fade-in stagger-${(index % 5) + 1}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/30 to-primary/5 flex items-center justify-center">
                    <Icon size={48} className="text-primary/70" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded-full inline-flex items-center gap-1">
                        <Icon size={12} />
                        {language === 'en' ? post.category : post.categoryBn}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">
                      {language === 'en' ? post.title : post.titleBn}
                    </h3>
                    <p className="text-muted-foreground text-xs line-clamp-3">
                      {language === 'en' ? post.excerpt : post.excerptBn}
                    </p>
                    <span className="inline-block mt-3 text-xs text-primary font-medium">
                      {language === 'en' ? 'Read more →' : 'বিস্তারিত পড়ুন →'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* Reader dialog */}
      <Dialog open={!!openPost} onOpenChange={(o) => !o && setOpenPost(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {openPost && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="px-2 py-0.5 bg-accent text-accent-foreground rounded-full font-medium">
                    {language === 'en' ? openPost.category : openPost.categoryBn}
                  </span>
                  <Calendar size={12} />
                  <span>{openPost.date}</span>
                </div>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {language === 'en' ? openPost.title : openPost.titleBn}
                </DialogTitle>
                <DialogDescription className="text-sm">
                  {language === 'en' ? openPost.excerpt : openPost.excerptBn}
                </DialogDescription>
              </DialogHeader>
              <article className="prose prose-sm max-w-none text-foreground whitespace-pre-line leading-relaxed">
                {language === 'en' ? openPost.content : openPost.contentBn}
              </article>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Blog;
