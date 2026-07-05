import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const GitHubCalendar: React.FC = () => {
  const { language } = useLanguage();
  const username = portfolioData.profile.githubUsername;

  return (
    <section id="github" className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">
          {language === 'en' ? 'GitHub Activity' : 'গিটহাব কার্যক্রম'}
        </h2>

        <div className="bg-card rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-border mt-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
            <h3 className="text-sm md:text-base font-semibold text-foreground">
              {language === 'en' ? 'Contribution Calendar' : 'কন্ট্রিবিউশন ক্যালেন্ডার'}
            </h3>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-primary hover:underline"
            >
              @{username}
            </a>
          </div>

          {/* Horizontally scrollable on mobile at original size */}
          <div className="overflow-x-auto -mx-1 px-1 pb-2">
            <img
              src={`https://ghchart.rshah.org/715EB4/${username}`}
              alt={`${username} GitHub contributions`}
              className="h-auto min-w-[720px] md:min-w-0 md:w-full"
              loading="lazy"
            />
          </div>
          <p className="text-[11px] text-muted-foreground mt-1 md:hidden">
            {language === 'en' ? '← Swipe to view full year →' : '← পুরো বছর দেখতে সোয়াইপ করুন →'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHubCalendar;
