import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolioData';

const ContributionChart: React.FC = () => {
  const { language } = useLanguage();
  const { contributionData } = portfolioData;

  // Generate contribution cells for the chart
  const generateContributionGrid = () => {
    const weeks = 52;
    const daysPerWeek = 7;
    const cells: { level: number; date: string }[] = [];
    
    // Generate random but consistent contribution data
    const seed = 12345;
    let random = seed;
    const nextRandom = () => {
      random = (random * 1103515245 + 12345) & 0x7fffffff;
      return random / 0x7fffffff;
    };

    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < daysPerWeek; day++) {
        const rand = nextRandom();
        let level = 0;
        if (rand > 0.3) level = 1;
        if (rand > 0.5) level = 2;
        if (rand > 0.7) level = 3;
        if (rand > 0.85) level = 4;
        
        // Reduce activity on weekends
        if (day === 0 || day === 6) {
          level = Math.max(0, level - 1);
        }
        
        cells.push({ level, date: `Week ${week + 1}, Day ${day + 1}` });
      }
    }
    return cells;
  };

  const cells = generateContributionGrid();
  const months = language === 'en' 
    ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    : ['জানু', 'ফেব্রু', 'মার্চ', 'এপ্রি', 'মে', 'জুন', 'জুলা', 'আগ', 'সেপ্টে', 'অক্টো', 'নভে', 'ডিসে'];
  
  const days = language === 'en' 
    ? ['Mon', 'Wed', 'Fri']
    : ['সোম', 'বুধ', 'শুক্র'];

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-muted/40';
      case 1: return 'bg-primary/20';
      case 2: return 'bg-primary/40';
      case 3: return 'bg-primary/70';
      case 4: return 'bg-primary';
      default: return 'bg-muted/40';
    }
  };

  // Calculate total contributions
  const totalContributions = Object.values(contributionData).flat().reduce((sum, item) => sum + item.contributions, 0);

  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h3 className="text-base font-semibold text-foreground">
          {language === 'en' ? 'Contribution Activity' : 'অবদান কার্যকলাপ'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {totalContributions}+ {language === 'en' ? 'contributions in the last year' : 'টি অবদান গত বছরে'}
        </p>
      </div>

      {/* Contribution Graph */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[700px]">
          {/* Month Labels */}
          <div className="flex mb-1 ml-8">
            {months.map((month, index) => (
              <span 
                key={month} 
                className="text-xs text-muted-foreground"
                style={{ width: `${100 / 12}%` }}
              >
                {month}
              </span>
            ))}
          </div>

          <div className="flex">
            {/* Day Labels */}
            <div className="flex flex-col justify-around mr-2 h-[88px]">
              {days.map((day) => (
                <span key={day} className="text-xs text-muted-foreground leading-none">
                  {day}
                </span>
              ))}
            </div>

            {/* Grid */}
            <div className="flex-1 grid grid-flow-col gap-[3px]" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
              {cells.map((cell, index) => (
                <div
                  key={index}
                  className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(cell.level)} transition-colors hover:ring-1 hover:ring-foreground/20`}
                  title={cell.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-1 mt-3">
        <span className="text-xs text-muted-foreground mr-1">
          {language === 'en' ? 'Less' : 'কম'}
        </span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(level)}`}
          />
        ))}
        <span className="text-xs text-muted-foreground ml-1">
          {language === 'en' ? 'More' : 'বেশি'}
        </span>
      </div>

      {/* Monthly Stats */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2">
          {contributionData[2024].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-muted-foreground mb-1">
                {months[index]}
              </div>
              <div className="text-sm font-semibold text-foreground">
                {item.contributions}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributionChart;
