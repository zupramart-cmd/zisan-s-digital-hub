import React from 'react';
import ProfileSection from '@/components/sections/ProfileSection';
import EducationSection from '@/components/sections/EducationSection';
import ProfessionalDevSection from '@/components/sections/ProfessionalDevSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import SkillsSection from '@/components/sections/SkillsSection';
import FamilySection from '@/components/sections/FamilySection';
import ContactSection from '@/components/sections/ContactSection';

const Portfolio: React.FC = () => {
  return (
    <main>
      <ProfileSection />
      <EducationSection />
      <ProfessionalDevSection />
      <ExperienceSection />
      <CertificatesSection />
      <SkillsSection />
      <FamilySection />
      <ContactSection />
    </main>
  );
};

export default Portfolio;
