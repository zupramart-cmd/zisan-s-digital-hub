import React from 'react';
import { Users, User, Calendar, Globe, Heart, Droplets, Palette, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/Portfolio';

const FamilySection: React.FC = () => {
  const { t, language } = useLanguage();
  const { family, personal, profile } = portfolioData;

  return (
    <section id="family" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-fade-in">{t('family.title')}</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Family Information */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md animate-fade-in stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('family.familyInfo')}</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? family.father.relation : family.father.relationBn}
                  </p>
                  <p className="font-semibold text-foreground">
                    {language === 'en' ? family.father.name : family.father.nameBn}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? family.mother.relation : family.mother.relationBn}
                  </p>
                  <p className="font-semibold text-foreground">
                    {language === 'en' ? family.mother.name : family.mother.nameBn}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? family.siblings.relation : family.siblings.relationBn}
                  </p>
                  <p className="font-semibold text-foreground">
                    {language === 'en' ? family.siblings.name : family.siblings.nameBn}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md animate-fade-in stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <User className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('family.personalInfo')}</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 p-2 border-b border-border">
                <Calendar className="text-primary flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Date of Birth' : 'জন্ম তারিখ'}
                  </p>
                  <p className="font-medium text-foreground text-sm">
                    {language === 'en' ? personal.dob : personal.dobBn}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2 border-b border-border">
                <Globe className="text-primary flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Nationality' : 'জাতীয়তা'}
                  </p>
                  <p className="font-medium text-foreground text-sm">
                    {language === 'en' ? personal.nationality : personal.nationalityBn}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2 border-b border-border">
                <Heart className="text-primary flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Religion' : 'ধর্ম'}
                  </p>
                  <p className="font-medium text-foreground text-sm">
                    {language === 'en' ? personal.religion : personal.religionBn}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2 border-b border-border">
                <Droplets className="text-primary flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Blood Group' : 'রক্তের গ্রুপ'}
                  </p>
                  <p className="font-medium text-foreground text-sm">{personal.bloodGroup}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2 border-b border-border">
                <User className="text-primary flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Marital Status' : 'বৈবাহিক অবস্থা'}
                  </p>
                  <p className="font-medium text-foreground text-sm">
                    {language === 'en' ? personal.maritalStatus : personal.maritalStatusBn}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-2 border-b border-border">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {t('family.address')}
                  </p>
                  <p className="font-medium text-foreground text-sm leading-relaxed">
                    {language === 'en'
                      ? `${profile.address.village}, ${profile.address.upazila}, ${profile.address.district}, ${profile.address.division}, ${profile.address.postCode}`
                      : `${profile.address.villageBn}, ${profile.address.upazilaBn}, ${profile.address.districtBn}, ${profile.address.divisionBn}, ${profile.address.postCode}`}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-2">
                <Palette className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {language === 'en' ? 'Hobbies' : 'শখ'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'en' ? personal.hobbies : personal.hobbiesBn).map((hobby, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
