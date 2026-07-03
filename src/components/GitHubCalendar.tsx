import React from 'react';
import GitHubCalendarLib from 'react-github-calendar';
import { useLanguage } from '@/contexts/LanguageContext';

interface GitHubCalendarProps {
  username: string;
}

/**
 * GitHub Contribution Calendar using the brand purple color.
 * Wraps react-github-calendar with theme colors from #715EB4.
 */
const GitHubCalendar: React.FC<GitHubCalendarProps> = ({ username }) => {
  const { language } = useLanguage();

  // Purple gradient scale from light to brand color #715EB4
  const theme = {
    light: [
      '#f4f2f9', // level 0 - very light
      '#d9d1ec', // level 1
      '#b5a5d8', // level 2
      '#8b78c4', // level 3
      '#715EB4', // level 4 - brand color
    ],
    dark: [
      '#f4f2f9',
      '#d9d1ec',
      '#b5a5d8',
      '#8b78c4',
      '#715EB4',
    ],
  };

  const labels = {
    totalCount: language === 'en'
      ? '{{count}} contributions in {{year}}'
      : '{{year}} সালে {{count}} টি অবদান',
    legend: {
      less: language === 'en' ? 'Less' : 'কম',
      more: language === 'en' ? 'More' : 'বেশি',
    },
  };

  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border overflow-x-auto">
      <div className="flex justify-center min-w-fit">
        <GitHubCalendarLib
          username={username}
          theme={theme}
          labels={labels}
          fontSize={12}
          blockSize={12}
          blockMargin={4}
          hideColorLegend={false}
          hideMonthLabels={false}
          hideTotalCount={false}
        />
      </div>
    </div>
  );
};

export default GitHubCalendar;
