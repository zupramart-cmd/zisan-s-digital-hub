import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const GitHubCalendar: React.FC = () => {
  const { language } = useLanguage();
  const username = portfolioData.profile.githubUsername;

  return (
    <div className="bg-card rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-border mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
        <h3 className="text-sm md:text-base font-semibold text-foreground">
          {language === 'en' ? 'GitHub Contribution Calendar' : 'গিটহাব কন্ট্রিবিউশন ক্যালেন্ডার'}
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
      {/* Wrapper ensures the wide chart is horizontally scrollable on mobile */}
      <div className="overflow-x-auto -mx-1 px-1">
        <img
          src={`https://ghchart.rshah.org/715EB4/${username}`}
          alt={`${username} GitHub contributions`}
          className="w-full h-auto min-w-[520px] sm:min-w-0"
          loading="lazy"
        />
      </div>
      <p className="text-[10px] text-muted-foreground mt-2 sm:hidden">
        {language === 'en' ? 'Swipe to see full year →' : 'পুরো বছর দেখতে সোয়াইপ করুন →'}
      </p>
    </div>
  );
};

export default GitHubCalendar;
