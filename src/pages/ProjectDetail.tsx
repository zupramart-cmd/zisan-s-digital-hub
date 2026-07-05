import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, Sparkles, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectBySlug } from '@/data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft size={16} /> {language === 'en' ? 'All Projects' : 'সব প্রজেক্টস'}
        </Link>

        <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-md">
          <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/40 overflow-hidden flex items-center justify-center p-10">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div>
                <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium inline-flex items-center gap-1">
                  <Tag size={12} /> {project.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mt-3">{project.name}</h1>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90"
              >
                <ExternalLink size={14} /> {language === 'en' ? 'Live Demo' : 'লাইভ ডেমো'}
              </a>
            </div>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              {language === 'en' ? project.description : (project.descriptionBn || project.description)}
            </p>

            {project.problem && (
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {language === 'en' ? 'Problem' : 'সমস্যা'}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>
                {project.solution && (
                  <div className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {language === 'en' ? 'Solution' : 'সমাধান'}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8">
              <h3 className="text-lg font-bold text-foreground mb-3">
                {language === 'en' ? 'Key Features' : 'প্রধান ফিচার'}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-foreground mb-3">
                {language === 'en' ? 'Tech Stack' : 'টেক স্ট্যাক'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-accent text-accent-foreground text-xs rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.demo && (
              <div className="mt-8 p-4 bg-secondary/50 rounded-xl">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {language === 'en' ? 'Demo Credentials' : 'ডেমো ক্রেডেনশিয়াল'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  {project.demo.user && (
                    <div>
                      <p className="text-xs text-muted-foreground">User</p>
                      <p className="font-mono">{project.demo.user.email}</p>
                      <p className="font-mono">{project.demo.user.pass}</p>
                    </div>
                  )}
                  {project.demo.admin && (
                    <div>
                      <p className="text-xs text-muted-foreground">Admin</p>
                      <p className="font-mono">{project.demo.admin.email}</p>
                      <p className="font-mono">{project.demo.admin.pass}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {project.offer && (
              <div className="mt-6 p-4 rounded-xl border border-primary/30 bg-primary/5">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Sparkles size={16} /> {language === 'en' ? 'Special Offer' : 'বিশেষ অফার'}
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-foreground">{project.offer.promo}</span>
                  <span className="line-through text-muted-foreground text-sm">{project.offer.regular}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{project.offer.note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
